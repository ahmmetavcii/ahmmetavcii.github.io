from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
import os
from pathlib import Path
import re
import time
import unicodedata

import pandas as pd
import requests
import yfinance as yf
from duckduckgo_search import DDGS
from dotenv import load_dotenv
from fastapi import Body, FastAPI, Query
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel
from ta.momentum import ROCIndicator, RSIIndicator, StochasticOscillator, WilliamsRIndicator
from ta.trend import ADXIndicator, CCIIndicator, EMAIndicator, MACD
from ta.volatility import AverageTrueRange, BollingerBands
from ta.volume import MFIIndicator

try:
    import google.generativeai as genai  # type: ignore
except Exception:  # pragma: no cover - optional at runtime
    genai = None  # type: ignore


app = FastAPI(title="FinSense and Technical Analysis Dashboard")

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")
DEFAULT_PORTFOLIO = [
    {"ticker": "AAPL", "segment": "Tech"},
    {"ticker": "BTC-USD", "segment": "Crypto"},
    {"ticker": "SCHD", "segment": "Dividend / Passive Income ETF"},
    {"ticker": "THYAO.IS", "segment": "Local"},
]

SCREENER_POOL = [
    # US
    "AAPL", "MSFT", "GOOGL", "AMZN", "NVDA", "META", "TSM", "AVGO", "AMD", "NFLX",
    "KO", "JNJ", "PG", "PEP", "MCD", "XOM", "CVX",
    "SCHD", "VYM", "VIG", "DGRO", "HDV", "QQQ", "VOO", "VTI",
    # BIST
    "THYAO.IS", "KCHOL.IS", "SAHOL.IS", "ASELS.IS", "TUPRS.IS", "EREGL.IS",
    "BIMAS.IS", "AKBNK.IS", "GARAN.IS", "ISCTR.IS", "SISE.IS", "TCELL.IS",
    # Crypto
    "BTC-USD", "ETH-USD", "BNB-USD", "SOL-USD", "XRP-USD", "ADA-USD", "AVAX-USD",
    "DOGE-USD", "DOT-USD", "LINK-USD", "MATIC-USD", "LTC-USD", "ATOM-USD", "UNI-USD", "TRX-USD",
]

BIST_MASTER_LIST = {
    "Koç Holding": "KCHOL.IS",
    "Sabanci Holding": "SAHOL.IS",
    "Turk Hava Yollari": "THYAO.IS",
    "Aselsan": "ASELS.IS",
    "Tupras": "TUPRS.IS",
    "Eregli Demir Celik": "EREGL.IS",
    "Bim Birlesik Magazalar": "BIMAS.IS",
    "Akbank": "AKBNK.IS",
    "Garanti BBVA": "GARAN.IS",
    "Is Bankasi C": "ISCTR.IS",
    "Yapi ve Kredi Bankasi": "YKBNK.IS",
    "Halkbank": "HALKB.IS",
    "Vakifbank": "VAKBN.IS",
    "Sise Cam": "SISE.IS",
    "Kardemir D": "KRDMD.IS",
    "Ford Otosan": "FROTO.IS",
    "Tofas": "TOASO.IS",
    "Petkim": "PETKM.IS",
    "Sasa Polyester": "SASA.IS",
    "Migros": "MGROS.IS",
    "Enka Insaat": "ENKAI.IS",
    "Turkcell": "TCELL.IS",
    "Turk Traktor": "TTRAK.IS",
}

_GEMINI_MODEL_NAME: str | None = None
_SEARCH_CACHE: dict[str, tuple[float, list[dict]]] = {}
_SEARCH_CACHE_TTL_SEC = 90.0
_SCREENER_CACHE: dict[str, object] = {"ts": 0.0, "items": []}
_SCREENER_CACHE_TTL_SEC = 180.0


# ---------------------------------------------------------------------------
# Helpers
# ---------------------------------------------------------------------------

def _normalize_ticker(ticker: str) -> str:
    cleaned = ticker.strip().upper()
    if not cleaned:
        raise ValueError("Ticker is required.")
    return cleaned


def _clean_search_ticker(ticker: str) -> str:
    """Trim user input but keep exact ticker casing/content."""
    cleaned = ticker.strip()
    if not cleaned:
        raise ValueError("Ticker not found")
    return cleaned


def _normalize_search_text(value: str) -> str:
    text = str(value or "").strip().lower()
    tr_map = str.maketrans({
        "ı": "i",
        "İ": "i",
        "ş": "s",
        "Ş": "s",
        "ğ": "g",
        "Ğ": "g",
        "ü": "u",
        "Ü": "u",
        "ö": "o",
        "Ö": "o",
        "ç": "c",
        "Ç": "c",
    })
    text = text.translate(tr_map)
    text = unicodedata.normalize("NFKD", text)
    text = text.encode("ascii", "ignore").decode("ascii")
    text = re.sub(r"[^a-z0-9]+", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def _search_local_bist(query: str, limit: int = 6) -> list[dict]:
    q_norm = _normalize_search_text(query)
    q_upper = query.upper().strip()
    if len(q_norm) < 2:
        return []

    scored: list[tuple[int, dict]] = []
    for company, symbol in BIST_MASTER_LIST.items():
        c_norm = _normalize_search_text(company)
        s_norm = _normalize_search_text(symbol)
        s_upper = symbol.upper()

        score = -1
        if q_upper == s_upper or q_norm == s_norm:
            score = 120
        elif c_norm.startswith(q_norm):
            score = 95
        elif q_norm in c_norm:
            score = 80
        elif s_upper.startswith(q_upper) or q_norm in s_norm:
            score = 70

        if score >= 0:
            scored.append((score, {
                "symbol": symbol,
                "shortname": company,
                "exchDisp": "BIST",
            }))

    scored.sort(key=lambda x: x[0], reverse=True)
    dedup: list[dict] = []
    seen: set[str] = set()
    for _, item in scored:
        sym = str(item.get("symbol") or "").upper()
        if not sym or sym in seen:
            continue
        seen.add(sym)
        dedup.append(item)
        if len(dedup) >= limit:
            break
    return dedup


def _download_history_or_404(ticker: str, period: str = "3mo") -> pd.DataFrame:
    """Download history and raise ValueError if ticker has no data."""
    last_hist: pd.DataFrame | None = None
    for attempt in range(4):
        hist = yf.download(
            ticker,
            period=period,
            interval="1d",
            auto_adjust=False,
            progress=False,
            threads=False,
        )
        last_hist = hist
        if hist is not None and not hist.empty:
            return hist
        if attempt < 3:
            time.sleep(0.35 * (attempt + 1))
    if last_hist is None or last_hist.empty:
        raise ValueError("Ticker not found")
    return last_hist


def _resolve_search_symbol(raw_query: str) -> str:
    """
    Resolve free-form input to a Yahoo symbol.
    - First try query as ticker directly.
    - If no data, try yfinance search and return top symbol.
    """
    query = _clean_search_ticker(raw_query)
    query_up = query.upper()

    # 1) Deterministic direct candidates first (prevents wrong-symbol matches)
    direct_candidates: list[str] = []
    direct_candidates.append(query)
    if query_up != query:
        direct_candidates.append(query_up)

    # If user typed a BIST code like "THYAO", try ".IS" before fuzzy search.
    if "." not in query_up and "-" not in query_up and query_up.isalnum() and 3 <= len(query_up) <= 6:
        direct_candidates.append(f"{query_up}.IS")

    seen: set[str] = set()
    for sym in direct_candidates:
        s = sym.strip()
        if not s or s in seen:
            continue
        seen.add(s)
        try:
            _download_history_or_404(s, period="1mo")
            return s
        except ValueError:
            continue

    # 2) Fuzzy search fallback, but score/rank to avoid bad matches
    try:
        search = yf.Search(query=query, max_results=10, news_count=0)
        quotes = getattr(search, "quotes", None) or []

        scored: list[tuple[int, str]] = []
        for q in quotes:
            sym = (q.get("symbol") or "").strip()
            if not sym:
                continue
            sym_up = sym.upper()
            ex = str(q.get("exchange") or q.get("exchDisp") or "").upper()
            qtype = str(q.get("quoteType") or "").upper()

            score = 0
            if sym_up == query_up:
                score += 1000
            if sym_up == f"{query_up}.IS":
                score += 950
            if sym_up.startswith(query_up):
                score += 200
            if ".IS" in sym_up:
                # slight preference for Turkish suffix when user input looked like BIST code
                if "." not in query_up and "-" not in query_up and query_up.isalnum() and len(query_up) <= 6:
                    score += 120
            if qtype in {"EQUITY", "ETF", "CRYPTOCURRENCY"}:
                score += 25
            if ex in {"IST", "BORSA ISTANBUL", "ISTANBUL"}:
                score += 100

            scored.append((score, sym))

        scored.sort(key=lambda x: x[0], reverse=True)
        for _, sym in scored:
            if sym in seen:
                continue
            seen.add(sym)
            try:
                _download_history_or_404(sym, period="1mo")
                return sym
            except ValueError:
                continue
    except Exception:
        pass

    raise ValueError("Ticker not found")


def _pick_best_gemini_model_name() -> str:
    """Discover available text models and pick the best candidate."""
    global _GEMINI_MODEL_NAME
    if _GEMINI_MODEL_NAME:
        return _GEMINI_MODEL_NAME

    if genai is None:
        raise ValueError("Google Gemini SDK is not installed.")

    api_key = os.getenv("GEMINI_API_KEY", "").strip()
    if not api_key:
        raise ValueError("GEMINI_API_KEY is missing in .env.")

    genai.configure(api_key=api_key)
    models = list(genai.list_models())
    candidates: list[tuple[int, str]] = []

    blocked = ("vision", "image", "embedding", "audio", "tts", "transcribe")
    for m in models:
        name = getattr(m, "name", "") or ""
        if not name:
            continue
        name_l = name.lower()
        methods = [x.lower() for x in (getattr(m, "supported_generation_methods", []) or [])]
        if "generatecontent" not in methods:
            continue
        if any(tok in name_l for tok in blocked):
            continue
        if "gemini" not in name_l:
            continue

        score = 0
        if "flash" in name_l:
            score += 100
        if "pro" in name_l:
            score += 80
        if "2.5" in name_l:
            score += 25
        if "2.0" in name_l:
            score += 20
        if "1.5" in name_l:
            score += 10
        if "exp" in name_l:
            score -= 15
        if "preview" in name_l:
            score -= 10
        candidates.append((score, name))

    if not candidates:
        raise ValueError("No suitable Gemini text model found.")

    candidates.sort(key=lambda x: x[0], reverse=True)
    _GEMINI_MODEL_NAME = candidates[0][1]
    return _GEMINI_MODEL_NAME


def _extract_verdict(text: str) -> str:
    m = re.search(r"\b(BULLISH|BEARISH|NEUTRAL)\b", text.upper())
    return m.group(1) if m else "NEUTRAL"


def _extract_confidence(text: str) -> int:
    """Extract confidence percentage from free text; default to 50."""
    m = re.search(r"\bconfidence\b[^0-9]{0,12}([0-9]{1,3})\s*%?", text, flags=re.IGNORECASE)
    if not m:
        return 50
    val = int(m.group(1))
    return max(0, min(100, val))


def _format_news_time(raw: object) -> str:
    """Normalize different date/time formats to a compact UI-friendly string."""
    if isinstance(raw, (int, float)):
        return datetime.fromtimestamp(raw, tz=timezone.utc).strftime("%b %d, %Y %H:%M")
    if isinstance(raw, str):
        text = raw.strip()
        if not text:
            return ""
        # Keep previous yfinance style for ISO-like strings.
        if "T" in text and len(text) >= 16:
            return text[:16].replace("T", " ")
        # Try robust parsing for RFC/ISO/DDG variants.
        candidates = [
            text,
            text.replace("Z", "+00:00"),
        ]
        for item in candidates:
            try:
                dt = datetime.fromisoformat(item)
                return dt.strftime("%b %d, %Y %H:%M")
            except Exception:
                continue
        for fmt in ("%Y-%m-%d %H:%M:%S", "%Y-%m-%d", "%a, %d %b %Y %H:%M:%S %z"):
            try:
                dt = datetime.strptime(text, fmt)
                return dt.strftime("%b %d, %Y %H:%M")
            except Exception:
                continue
    return ""


def _normalize_news_items(raw_news: list[object], limit: int = 7) -> list[dict]:
    """Map yfinance news payload into a stable UI schema."""
    items: list[dict] = []
    for article in raw_news[:limit]:
        content = article if not isinstance(article, dict) else article
        if isinstance(content, dict) and "content" in content:
            content = content["content"]
        if not isinstance(content, dict):
            continue

        ts = content.get("pubDate") or content.get("providerPublishTime")
        formatted = _format_news_time(ts)

        link = content.get("url") or content.get("link") or ""
        if not link:
            canon = content.get("canonicalUrl")
            if isinstance(canon, dict):
                link = canon.get("url", "")
            elif isinstance(canon, str):
                link = canon

        title = content.get("title", "")
        publisher = content.get("publisher") or content.get("provider", {})
        if isinstance(publisher, dict):
            publisher = publisher.get("displayName", "")

        summary = content.get("summary") or content.get("description") or ""
        if isinstance(summary, str):
            summary = summary.strip()
        else:
            summary = ""

        if title:
            items.append({
                "title": title,
                "summary": summary,
                "publisher": publisher or "",
                "time": formatted,
                "url": link or "",
                "link": link or "",
                "source": "yfinance",
            })
    return items


def _company_name_variants(name: str) -> list[str]:
    """Generate matchable forms: full name, stripped suffix, primary token."""
    raw = (name or "").strip()
    if not raw:
        return []
    variants: list[str] = [raw]
    stripped = re.sub(
        r"\s+(Inc\.?|Corp\.?|Corporation|Ltd\.?|Limited|plc|N\.V\.|S\.A\.|Co\.?|Company|Holdings?|Group)\.?$",
        "",
        raw,
        flags=re.IGNORECASE,
    ).strip()
    if stripped and stripped.lower() != raw.lower():
        variants.append(stripped)
    words = re.sub(r"[^\w\s]", " ", raw).split()
    if words and len(words[0]) >= 4:
        variants.append(words[0])
    if len(words) >= 2 and len(words[0]) >= 2:
        pair = f"{words[0]} {words[1]}"
        if len(pair) >= 5:
            variants.append(pair)
    out: list[str] = []
    seen: set[str] = set()
    for v in variants:
        key = v.lower()
        if key not in seen and len(v) >= 3:
            seen.add(key)
            out.append(v)
    return out


def _news_company_names(resolved: str, tk: yf.Ticker) -> list[str]:
    """Display names for matching headlines (BIST map + Yahoo `info`)."""
    names: list[str] = []
    rup = resolved.upper().strip()
    for company, sym in BIST_MASTER_LIST.items():
        if sym.upper() == rup:
            names.extend(_company_name_variants(company))
    try:
        info = tk.info
        if isinstance(info, dict):
            for k in ("longName", "shortName", "displayName"):
                v = info.get(k)
                if isinstance(v, str) and 2 < len(v) < 220:
                    names.extend(_company_name_variants(v.strip()))
    except Exception:
        pass
    return list(dict.fromkeys(names))


def _symbol_search_tokens(resolved: str) -> list[str]:
    """Tokens that should match a headline for the given Yahoo symbol."""
    u = resolved.upper().strip()
    toks: set[str] = {u}
    stem = u.split(".")[0]
    if stem and stem != u:
        toks.add(stem)
    if ".IS" in u:
        toks.add(u.replace(".IS", ""))
    if "-" in u:
        base = u.split("-")[0]
        if len(base) >= 2:
            toks.add(base)
        if u.startswith("BTC"):
            toks.update({"BITCOIN", "BTC"})
        elif u.startswith("ETH"):
            toks.update({"ETHEREUM", "ETH"})
        elif u.startswith("BNB"):
            toks.add("BINANCE")
    alias_map = {
        "GOOGL": {"GOOGLE", "GOOG", "ALPHABET"},
        "GOOG": {"GOOGLE", "GOOGL", "ALPHABET"},
        "META": {"FACEBOOK"},
        "BRK-B": {"BERKSHIRE", "BERKSHIRE HATHAWAY"},
        "BRK.B": {"BERKSHIRE", "BERKSHIRE HATHAWAY"},
    }
    toks.update(alias_map.get(u, set()))
    return sorted(toks, key=len, reverse=True)


_FIN_CONTEXT = re.compile(
    r"\b(stock|stocks|share|shares|equity|equities|trading|trades?|ticker|quote|nasdaq|nyse|"
    r"bist|hisse|borsa|yatirim|yatırım|invest|investor|investment|portfolio|fund|funds|etf|"
    r"earnings|revenue|eps|ebitda|guidance|outlook|forecast|dividend|buyback|split|analyst|"
    r"upgrade|downgrade|price target|valuation|margin|quarter|q[1-4]|fiscal|sec|8-k|10-k|"
    r"merger|acquisition|m&a|ipo|listing|crypto|bitcoin|ethereum|blockchain|defi|"
    r"market|wall street|trader|short|long position|volatility|bull|bear)\b",
    re.IGNORECASE,
)

_NOISE_TOPICS = re.compile(
    r"\b(nfl|nba|nhl|mlb|mls|fifa|uefa|champions league|premier league|laliga|serie a|super bowl|"
    r"world cup|olympics|wimbledon|masters|pga|ufc|boxing|nascar|"
    r"oscars?|grammy|golden globes|emmy|celebrity|celebrities|gossip|kardashian|reality tv|"
    r"bachelor|bachelorette|divorce|wedding|red carpet|film premiere|supermodel)\b",
    re.IGNORECASE,
)


def _text_mentions_symbol(text: str, resolved: str) -> bool:
    tl = text.lower()
    for tok in _symbol_search_tokens(resolved):
        if re.search(rf"\b{re.escape(tok.lower())}\b", tl):
            return True
    return False


def _text_mentions_company_name(text: str, names: list[str]) -> bool:
    tl = text.lower()
    for name in names:
        for variant in _company_name_variants(name):
            v = variant.strip()
            if len(v) < 3:
                continue
            if v.lower() in tl:
                return True
    return False


def _has_financial_context(text: str) -> bool:
    return _FIN_CONTEXT.search(text) is not None


def _is_noise_topic(text: str) -> bool:
    return _NOISE_TOPICS.search(text) is not None


def filter_relevant_news(resolved: str, company_names: list[str], items: list[dict]) -> list[dict]:
    """
    Drop entertainment/sports noise. Yahoo Finance feed items are kept (already scoped to ticker).
    Third-party items must mention the symbol or a company name variant.
    """
    out: list[dict] = []
    for it in items:
        title = str(it.get("title") or "")
        summary = str(it.get("summary") or "")
        blob = f"{title}\n{summary}".strip()
        if not blob:
            continue

        if _is_noise_topic(blob):
            continue

        if str(it.get("source") or "") == "yfinance":
            out.append(it)
            continue

        sym_ok = _text_mentions_symbol(blob, resolved)
        name_ok = _text_mentions_company_name(blob, company_names)
        if sym_ok or name_ok:
            out.append(it)

    return out


def _fallback_news_items(items: list[dict]) -> list[dict]:
    """If strict filtering removes everything, keep non-noise headlines."""
    out: list[dict] = []
    for it in items:
        blob = f"{it.get('title') or ''}\n{it.get('summary') or ''}".strip()
        if blob and not _is_noise_topic(blob):
            out.append(it)
    return out


def _merge_dedupe_news(primary: list[dict], secondary: list[dict]) -> list[dict]:
    seen: set[str] = set()
    out: list[dict] = []
    for it in primary + secondary:
        title = str(it.get("title") or "").strip()
        link = str(it.get("url") or it.get("link") or "").strip()
        key = f"{link}|{title[:120]}".lower()
        if not title or key in seen:
            continue
        seen.add(key)
        out.append(it)
    return out


def _ddg_news_for_ticker(
    resolved: str,
    company_names: list[str] | None = None,
    max_results: int = 15,
) -> list[dict]:
    """
    DuckDuckGo news supplement: symbol + company name + finance terms.
    """
    u = resolved.upper().strip()
    company_names = company_names or []
    label = ""
    for name in company_names:
        variants = _company_name_variants(name)
        if variants:
            label = variants[0]
            break

    if u.endswith(".IS"):
        stem = u.replace(".IS", "")
        query = f"{label or stem} {stem} BIST borsa hisse"
        region = "tr-tr"
    elif "-USD" in u or "-EUR" in u:
        base = u.split("-")[0]
        query = f'"{resolved}" {label or base} crypto'
        region = "us-en"
    else:
        stem = u.split(".")[0]
        name_q = f'"{label}"' if label else ""
        query = f"{name_q} {stem} stock OR earnings OR shares OR investor".strip()
        region = "us-en"

    items: list[dict] = []
    rows: list[dict] = []
    try:
        with DDGS() as ddgs:
            for timelimit in ("m", "w", None):
                try:
                    rows = list(
                        ddgs.news(
                            keywords=query,
                            region=region,
                            timelimit=timelimit,
                            max_results=max_results,
                        )
                    )
                except TypeError:
                    rows = list(
                        ddgs.news(
                            keywords=query,
                            region=region,
                            max_results=max_results,
                        )
                    )
                if rows:
                    break
    except Exception:
        return items

    for row in rows:
        if not isinstance(row, dict):
            continue
        title = str(row.get("title") or "").strip()
        publisher = str(row.get("source") or row.get("publisher") or "").strip()
        link = str(row.get("url") or row.get("link") or "").strip()
        body = str(row.get("body") or row.get("excerpt") or "").strip()
        published_raw = row.get("date") or row.get("published") or row.get("publishedAt")
        formatted = _format_news_time(published_raw)
        if title:
            items.append({
                "title": title,
                "summary": body,
                "publisher": publisher,
                "time": formatted,
                "url": link,
                "link": link,
                "source": "ddg",
            })

    return items


def _search_yahoo_tickers(query: str, limit: int = 6) -> list[dict]:
    cleaned = _clean_search_ticker(query)
    if len(cleaned) < 2:
        return []

    url = "https://query2.finance.yahoo.com/v1/finance/search"
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/123.0.0.0 Safari/537.36"
        )
    }
    params = {
        "q": cleaned,
        "quotesCount": str(limit),
        "newsCount": "0",
    }

    resp = requests.get(url, params=params, headers=headers, timeout=8)
    resp.raise_for_status()
    data = resp.json() if resp.content else {}
    quotes = data.get("quotes") if isinstance(data, dict) else []
    if not isinstance(quotes, list):
        return []

    results: list[dict] = []
    for q in quotes[:limit]:
        if not isinstance(q, dict):
            continue
        symbol = str(q.get("symbol") or "").strip()
        if not symbol:
            continue
        shortname = str(q.get("shortname") or q.get("longname") or "").strip()
        exchange = str(q.get("exchDisp") or q.get("exchange") or "").strip()
        results.append({
            "symbol": symbol,
            "shortname": shortname,
            "exchDisp": exchange,
        })
    return results


def _generate_signal(rsi: float, macd_val: float, macd_sig: float) -> str:
    if rsi < 30:
        return "BUY"
    if rsi > 70:
        return "SELL"
    if macd_val > macd_sig and rsi < 55:
        return "BUY"
    if macd_val < macd_sig and rsi > 45:
        return "SELL"
    return "HOLD"


def _extract_close_series(history: pd.DataFrame, ticker: str, *, min_len: int = 35) -> pd.Series:
    if history.empty:
        raise ValueError(f"Ticker '{ticker}' not found or data unavailable.")

    close_series = None

    if isinstance(history.columns, pd.MultiIndex):
        if ("Close", ticker) in history.columns:
            close_series = history[("Close", ticker)]
        else:
            for col in history.columns:
                if isinstance(col, tuple) and "Close" in col:
                    close_series = history[col]
                    break
    elif "Close" in history.columns:
        close_series = history["Close"]

    if close_series is None:
        raise ValueError(f"Ticker '{ticker}' not found or data unavailable.")

    close_series = pd.to_numeric(close_series, errors="coerce").dropna()
    if close_series.empty or len(close_series) < max(1, int(min_len or 1)):
        raise ValueError(f"Ticker '{ticker}' not found or data unavailable.")

    return close_series


def _extract_field_series(history: pd.DataFrame, ticker: str, field: str) -> pd.Series:
    series = None
    if isinstance(history.columns, pd.MultiIndex):
        if (field, ticker) in history.columns:
            series = history[(field, ticker)]
        else:
            for col in history.columns:
                if isinstance(col, tuple) and col and col[0] == field:
                    series = history[col]
                    break
    elif field in history.columns:
        series = history[field]

    if series is None:
        raise ValueError(f"{field} data unavailable for '{ticker}'.")
    series = pd.to_numeric(series, errors="coerce").dropna()
    if series.empty:
        raise ValueError(f"{field} data unavailable for '{ticker}'.")
    return series


def _calculate_indicators(close: pd.Series) -> tuple[float, float, float]:
    try:
        import pandas_ta as pta  # type: ignore

        rsi_s = pta.rsi(close, length=14)
        macd_df = pta.macd(close, fast=12, slow=26, signal=9)

        if rsi_s is None or macd_df is None or macd_df.empty:
            raise ValueError()

        macd_col = next((c for c in macd_df.columns if str(c).startswith("MACD_")), None)
        sig_col = next((c for c in macd_df.columns if str(c).startswith("MACDs_")), None)
        if macd_col is None or sig_col is None:
            raise ValueError()

        return (
            float(pd.to_numeric(rsi_s, errors="coerce").dropna().iloc[-1]),
            float(pd.to_numeric(macd_df[macd_col], errors="coerce").dropna().iloc[-1]),
            float(pd.to_numeric(macd_df[sig_col], errors="coerce").dropna().iloc[-1]),
        )
    except Exception:
        rsi_ind = RSIIndicator(close=close, window=14)
        macd_ind = MACD(close=close)

        rsi_s = pd.to_numeric(rsi_ind.rsi(), errors="coerce").dropna()
        macd_s = pd.to_numeric(macd_ind.macd(), errors="coerce").dropna()
        sig_s = pd.to_numeric(macd_ind.macd_signal(), errors="coerce").dropna()

        if rsi_s.empty or macd_s.empty or sig_s.empty:
            raise ValueError("Indicator values are unavailable.")

        return float(rsi_s.iloc[-1]), float(macd_s.iloc[-1]), float(sig_s.iloc[-1])


def _market_category(ticker: str) -> str:
    up = str(ticker).upper()
    if up.endswith(".IS"):
        return "BIST"
    if "-USD" in up or "-EUR" in up or "-GBP" in up:
        return "CRYPTO"
    return "US"


def _series_last(value) -> float | None:
    if value is None:
        return None
    series = pd.to_numeric(value, errors="coerce").dropna()
    if series.empty:
        return None
    last = float(series.iloc[-1])
    if last != last:  # NaN
        return None
    return last


def _compute_screener_indicator_pack(
    close: pd.Series,
    high: pd.Series,
    low: pd.Series,
    volume: pd.Series,
) -> dict[str, float]:
    """Compute extended technical indicators for the market screener."""
    price = float(close.iloc[-1])
    rsi_ind = RSIIndicator(close=close, window=14)
    macd_ind = MACD(close=close)
    stoch_ind = StochasticOscillator(high=high, low=low, close=close, window=14, smooth_window=3)
    mfi_ind = MFIIndicator(high=high, low=low, close=close, volume=volume, window=14)
    bb_ind = BollingerBands(close=close, window=20, window_dev=2)
    ema20_ind = EMAIndicator(close=close, window=20)
    ema50_ind = EMAIndicator(close=close, window=50)
    cci_ind = CCIIndicator(high=high, low=low, close=close, window=20)
    adx_ind = ADXIndicator(high=high, low=low, close=close, window=14)
    wr_ind = WilliamsRIndicator(high=high, low=low, close=close, lbp=14)
    roc_ind = ROCIndicator(close=close, window=12)
    atr_ind = AverageTrueRange(high=high, low=low, close=close, window=14)

    macd_v = _series_last(macd_ind.macd())
    macd_sig = _series_last(macd_ind.macd_signal())
    bb_upper = _series_last(bb_ind.bollinger_hband())
    bb_lower = _series_last(bb_ind.bollinger_lband())
    ema20 = _series_last(ema20_ind.ema_indicator())
    ema50 = _series_last(ema50_ind.ema_indicator())
    atr_v = _series_last(atr_ind.average_true_range())

    pct_b = None
    if bb_upper is not None and bb_lower is not None and bb_upper > bb_lower:
        pct_b = (price - bb_lower) / (bb_upper - bb_lower) * 100.0

    def ema_distance_pct(ema_val: float | None) -> float | None:
        if ema_val is None or ema_val == 0:
            return None
        return (price - ema_val) / ema_val * 100.0

    raw: dict[str, float | None] = {
        "rsi": _series_last(rsi_ind.rsi()),
        "macd": macd_v,
        "macd_hist": (macd_v - macd_sig) if macd_v is not None and macd_sig is not None else None,
        "macd_signal": macd_sig,
        "stoch_k": _series_last(stoch_ind.stoch()),
        "stoch_d": _series_last(stoch_ind.stoch_signal()),
        "mfi": _series_last(mfi_ind.money_flow_index()),
        "cci": _series_last(cci_ind.cci()),
        "williams_r": _series_last(wr_ind.williams_r()),
        "adx": _series_last(adx_ind.adx()),
        "roc": _series_last(roc_ind.roc()),
        "bb_pct_b": pct_b,
        "atr_pct": (atr_v / price * 100.0) if atr_v is not None and price > 0 else None,
        "ema20_dist": ema_distance_pct(ema20),
        "ema50_dist": ema_distance_pct(ema50),
    }
    return {key: float(val) for key, val in raw.items() if val is not None}


def _analyze_single_ticker(ticker: str) -> dict:
    normalized = _normalize_ticker(ticker)
    try:
        hist = yf.download(normalized, period="6mo", interval="1d",
                           auto_adjust=False, progress=False, threads=False)
        close = _extract_close_series(hist, normalized)
        rsi_val, macd_val, macd_sig = _calculate_indicators(close)
        price = float(close.iloc[-1])
        signal = _generate_signal(rsi_val, macd_val, macd_sig)
    except ValueError as exc:
        raise ValueError(str(exc)) from exc
    except Exception as exc:
        raise ValueError(f"Ticker '{normalized}' not found or data unavailable.") from exc

    return {
        "ticker": normalized,
        "current_price": round(price, 4),
        "rsi": round(rsi_val, 2),
        "macd": round(macd_val, 4),
        "macd_signal": round(macd_sig, 4),
        "macd_histogram": round(macd_val - macd_sig, 4),
        "signal": signal,
    }


# ---------------------------------------------------------------------------
# Static file routes
# ---------------------------------------------------------------------------

@app.get("/")
def serve_index() -> FileResponse:
    return FileResponse(BASE_DIR / "index.html")


@app.get("/app.js")
def serve_app_js() -> FileResponse:
    return FileResponse(BASE_DIR / "app.js", media_type="application/javascript")


@app.get("/styles.css")
def serve_styles_css() -> FileResponse:
    return FileResponse(BASE_DIR / "styles.css", media_type="text/css")


# ---------------------------------------------------------------------------
# API routes
# ---------------------------------------------------------------------------

@app.get("/api/analyze")
def analyze_ticker(ticker: str = Query(..., description="Ticker symbol")) -> JSONResponse:
    try:
        return JSONResponse(status_code=200, content=_analyze_single_ticker(ticker))
    except ValueError:
        return JSONResponse(status_code=400, content={"error": "Ticker not found or data unavailable"})


@app.get("/api/dashboard")
def dashboard() -> JSONResponse:
    items: list[dict] = []
    for entry in DEFAULT_PORTFOLIO:
        tk, seg = entry["ticker"], entry["segment"]
        try:
            analysis = _analyze_single_ticker(tk)
            analysis["segment"] = seg
            items.append(analysis)
        except ValueError:
            items.append({"ticker": tk, "segment": seg, "error": "Data unavailable"})
    return JSONResponse(status_code=200, content={"items": items})


def _safe_list(series: pd.Series) -> list[float | None]:
    """Convert a pandas Series to a JSON-safe list (NaN -> None)."""
    return [None if pd.isna(v) else round(float(v), 4) for v in series]


def _compute_chart_indicators(close: pd.Series) -> dict[str, list[float | None]]:
    """Return BB upper/mid/lower and EMA 20/50 aligned to *close* index (``ta`` lib)."""
    n = len(close)
    empty: dict[str, list[float | None]] = {
        "bb_upper": [None] * n,
        "bb_mid": [None] * n,
        "bb_lower": [None] * n,
        "ema20": [None] * n,
        "ema50": [None] * n,
    }
    if n == 0:
        return empty
    try:
        bb = BollingerBands(close=close, window=20, window_dev=2)
        empty["bb_upper"] = _safe_list(bb.bollinger_hband())
        empty["bb_mid"] = _safe_list(bb.bollinger_mavg())
        empty["bb_lower"] = _safe_list(bb.bollinger_lband())
        ema20 = EMAIndicator(close=close, window=20)
        ema50 = EMAIndicator(close=close, window=50)
        empty["ema20"] = _safe_list(ema20.ema_indicator())
        empty["ema50"] = _safe_list(ema50.ema_indicator())
    except Exception:
        pass
    return empty


class NewsAIAnalyzeRequest(BaseModel):
    ticker: str
    headlines: list[str]
    language: str = "en"


# yfinance valid periods (daily) used by the main chart; short windows may not fill EMA50.
_CHART_PERIODS = frozenset({"5d", "1mo", "3mo", "6mo"})


@app.get("/api/chart")
def chart_data(
    ticker: str = Query(..., description="Ticker symbol"),
    period: str = Query("3mo", description="Window: 5d, 1mo, 3mo, 6mo"),
) -> JSONResponse:
    try:
        requested = _resolve_search_symbol(ticker)
        p = (period or "3mo").strip().lower()
        if p not in _CHART_PERIODS:
            p = "3mo"
        hist = _download_history_or_404(requested, period=p)
        # Chart ranges include short windows (e.g. 5d) where technical indicators may be partial.
        close = _extract_close_series(hist, requested, min_len=2)
        dates = [d.strftime("%Y-%m-%d") for d in close.index]
        prices = [round(float(x), 4) for x in close.values]
        indicators = _compute_chart_indicators(close)
        return JSONResponse(status_code=200, content={
            "ticker": requested,
            "period": p,
            "dates": dates,
            "prices": prices,
            **indicators,
        })
    except ValueError:
        return JSONResponse(status_code=404, content={"error": "Ticker not found"})
    except Exception:
        return JSONResponse(status_code=400, content={"error": "Ticker not found"})


def _screener_worker(ticker: str) -> dict | None:
    """Analyse one ticker with expanded indicators; return dict or None."""
    try:
        normalized = _normalize_ticker(ticker)
        hist = yf.download(
            normalized,
            period="6mo",
            interval="1d",
            auto_adjust=False,
            progress=False,
            threads=False,
        )
        close = _extract_close_series(hist, normalized)
        high = _extract_field_series(hist, normalized, "High")
        low = _extract_field_series(hist, normalized, "Low")
        volume = _extract_field_series(hist, normalized, "Volume")
        min_len = min(len(close), len(high), len(low), len(volume))
        if min_len < 35:
            return None
        close = close.iloc[-min_len:]
        high = high.iloc[-min_len:]
        low = low.iloc[-min_len:]
        volume = volume.iloc[-min_len:]

        pack = _compute_screener_indicator_pack(close, high, low, volume)
        if "rsi" not in pack:
            return None
        macd_val = pack.get("macd", 0.0)
        macd_sig = pack.get("macd_signal", macd_val)
        signal = _generate_signal(pack["rsi"], macd_val, macd_sig)

        four_dec = {"macd", "macd_hist", "macd_signal"}
        row: dict = {
            "ticker": normalized,
            "market": _market_category(normalized),
            "current_price": round(float(close.iloc[-1]), 4),
            "signal": signal,
        }
        for key, val in pack.items():
            if key == "macd_signal":
                continue
            row[key] = round(val, 4 if key in four_dec else 2)
        return row
    except Exception:
        return None


@app.get("/api/news")
def ticker_news(ticker: str = Query(..., description="Ticker symbol")) -> JSONResponse:
    try:
        requested = _resolve_search_symbol(ticker)
        _download_history_or_404(requested, period="3mo")
        obj = yf.Ticker(requested)
        company = _news_company_names(requested, obj)

        raw_news = getattr(obj, "news", None) or []
        yf_items = _normalize_news_items(raw_news, limit=25)

        ddg_items = _ddg_news_for_ticker(requested, company_names=company, max_results=15)
        merged = _merge_dedupe_news(yf_items, ddg_items)
        filtered = filter_relevant_news(requested, company, merged)

        if not filtered and merged:
            filtered = _fallback_news_items(merged)

        articles = filtered[:12]

        if articles:
            news_status = "ok"
        elif merged:
            news_status = "no_relevant"
        else:
            news_status = "empty"

        return JSONResponse(
            status_code=200,
            content={
                "ticker": requested,
                "articles": articles,
                "newsStatus": news_status,
            },
        )
    except ValueError:
        return JSONResponse(status_code=404, content={"error": "Ticker not found"})
    except Exception:
        return JSONResponse(status_code=400, content={"error": "Ticker not found"})


@app.get("/api/search_ticker")
def search_ticker(query: str = Query(..., description="Search text")) -> JSONResponse:
    try:
        cleaned = _clean_search_ticker(query)
        if len(cleaned) < 2:
            return JSONResponse(status_code=200, content={"items": []})

        cache_key = cleaned.lower()
        cached = _SEARCH_CACHE.get(cache_key)
        now = time.time()
        if cached and (now - cached[0]) < _SEARCH_CACHE_TTL_SEC:
            return JSONResponse(status_code=200, content={"items": cached[1]})

        local_items = _search_local_bist(cleaned, limit=8)
        try:
            yahoo_items = _search_yahoo_tickers(cleaned, limit=10)
        except Exception:
            yahoo_items = []

        merged: list[dict] = []
        seen_symbols: set[str] = set()
        for item in [*local_items, *yahoo_items]:
            symbol = str(item.get("symbol") or "").strip()
            if not symbol:
                continue
            sym_up = symbol.upper()
            if sym_up in seen_symbols:
                continue
            seen_symbols.add(sym_up)
            merged.append({
                "symbol": symbol,
                "shortname": str(item.get("shortname") or "").strip(),
                "exchDisp": str(item.get("exchDisp") or "").strip(),
            })
            if len(merged) >= 10:
                break

        _SEARCH_CACHE[cache_key] = (now, merged)
        return JSONResponse(status_code=200, content={"items": merged})
    except Exception:
        return JSONResponse(status_code=200, content={"items": []})


@app.post("/api/ai_analyze_news")
def ai_analyze_news(payload: NewsAIAnalyzeRequest = Body(...)) -> JSONResponse:
    try:
        requested = _resolve_search_symbol(payload.ticker)
        _download_history_or_404(requested, period="3mo")
        headlines = [h.strip() for h in payload.headlines if isinstance(h, str) and h.strip()]
        if not headlines:
            return JSONResponse(status_code=200, content={
                "ticker": requested,
                "analysis": "No headlines available for analysis.",
                "verdict": "NEUTRAL",
                "confidence": 50,
            })

        model_name = _pick_best_gemini_model_name()
        language_name = "Turkish" if str(payload.language).lower().startswith("tr") else "English"

        prompt = (
            f"You are an expert financial analyst. Read these recent news headlines for {requested}. "
            "Provide a very short, professional summary (max 3 sentences) and a final verdict on the sentiment: "
            "BULLISH, BEARISH, or NEUTRAL. "
            f"Respond in {language_name}. "
            "Then provide confidence as a percentage between 0 and 100.\n"
            "Make sure the last two lines are exactly:\n"
            "Verdict: <BULLISH|BEARISH|NEUTRAL>\n"
            "Confidence: <0-100>%\n\n"
            "Headlines:\n"
            + "\n".join(f"- {h}" for h in headlines[:12])
        )

        model = genai.GenerativeModel(model_name)
        resp = model.generate_content(prompt)
        text = (getattr(resp, "text", "") or "").strip()
        if not text:
            text = "No analysis generated."
        verdict = _extract_verdict(text)
        confidence = _extract_confidence(text)
        return JSONResponse(status_code=200, content={
            "ticker": requested,
            "analysis": text,
            "verdict": verdict,
            "confidence": confidence,
            "model": model_name,
        })
    except ValueError:
        return JSONResponse(status_code=404, content={"error": "Ticker not found"})
    except Exception as exc:
        err = str(exc).lower()
        if "gemini_api_key" in err or "missing" in err and "key" in err:
            ai_error = "missing_key"
        elif genai is None or "sdk" in err:
            ai_error = "no_sdk"
        elif "quota" in err or "429" in err or "rate" in err:
            ai_error = "quota"
        else:
            ai_error = "api_failed"
        print(f"[ai_analyze_news] {payload.ticker}: {exc}")
        return JSONResponse(status_code=200, content={
            "ticker": payload.ticker,
            "analysis": "AI analysis is currently unavailable.",
            "verdict": "NEUTRAL",
            "confidence": 50,
            "aiError": ai_error,
        })


@app.get("/api/screener")
def screener() -> JSONResponse:
    now = time.time()
    cached_items = _SCREENER_CACHE.get("items")
    cached_ts = float(_SCREENER_CACHE.get("ts", 0.0) or 0.0)
    if isinstance(cached_items, list) and cached_items and (now - cached_ts) < _SCREENER_CACHE_TTL_SEC:
        return JSONResponse(status_code=200, content={"items": cached_items})

    results: list[dict] = []
    with ThreadPoolExecutor(max_workers=8) as pool:
        futures = {pool.submit(_screener_worker, tk): tk for tk in SCREENER_POOL}
        for future in as_completed(futures):
            item = future.result()
            if item is not None:
                results.append(item)

    _SCREENER_CACHE["ts"] = now
    _SCREENER_CACHE["items"] = results
    return JSONResponse(status_code=200, content={"items": results})
