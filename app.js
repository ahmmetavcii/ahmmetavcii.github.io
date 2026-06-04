/* ================================================================
   FinSense Dashboard – client application
   ================================================================ */

// ---------------------------------------------------------------------------
// i18n dictionary
// ---------------------------------------------------------------------------
const I18N = {
  en: {
    splashTagline: "One Clear Signal.",
    splashSubtagline: "FinSense for the best investing experience.",
    addBtn: "+ Add",
    addingBtn: "Adding\u2026",
    analyzeBtn: "Analyze",
    analyzingBtn: "Analyzing\u2026",
    tickerSearchPlaceholder: "Enter any ticker (e.g., AAPL, THYAO.IS, BTC-USD)...",
    sectionInstruments: "Main Instruments",
    filterAll: "All",
    filterUS: "US Stocks",
    filterBIST: "BIST",
    filterCrypto: "Crypto",
    loadingPortfolio: "Loading default portfolio\u2026",
    tickersLoaded: "tickers loaded.",
    enterTicker: "Enter a ticker symbol.",
    analyzing: "Analyzing",
    added: "added.",
    selectTicker: "Select a ticker",
    chartSubDefault: "Last 3 months closing prices",
    chartSub5d: "Last week of daily closes (~5 sessions)",
    chartSub1mo: "Last month of daily closes",
    chartSub6mo: "Last 6 months of daily closes",
    chartRangeAria: "Chart time range",
    chartRange1W: "1W",
    chartRange1M: "1M",
    chartRange3M: "3M",
    chartRange6M: "6M",
    chartPlaceholder: "Click an instrument to view its price chart.",
    loadingChart: "Loading chart\u2026",
    chartUnavail: "Chart unavailable.",
    chartLoadErr: "Could not load chart data.",
    tickerNotFound: "Ticker not found. Check the symbol.",
    loadingData: "Loading data...",
    searchLoading: "Searching symbols...",
    searchNoResults: "No matching symbols found.",
    newsTitle: "Live News & Insights",
    newsLoading: "Loading news\u2026",
    newsNone: "No recent news available.",
    newsNoneRelevant:
      "No recent relevant financial news found for this ticker.",
    aiSentimentTitle: "FinSense Unified Signal",
    fusionConfirm: "Recalculate analysis with Sentiment (AI) {s}% and Technical {t}%?",
    aiConfidence: "Synthesis Score",
    aiAnalyzing: "AI is analyzing the news...",
    aiUnavailable: "AI analysis is currently unavailable.",
    aiNoHeadlines: "No headlines available for AI analysis.",
    aiNoRelevantHeadlines:
      "Headlines were filtered for relevance; AI summary is based on technicals only.",
    nlpSentimentLabel: "NLP Sentiment",
    technicalMomentumLabel: "Technical Momentum",
    synthesisStrongBuy: "Strong Buy",
    synthesisNeutral: "Neutral",
    synthesisStrongSell: "Strong Sell",
    technicalBullish: "Bullish Momentum",
    technicalNeutral: "Neutral Momentum",
    technicalBearish: "Bearish Momentum",
    indicatorBullish: "Bullish",
    indicatorBearish: "Bearish",
    indicatorOversold: "Oversold",
    indicatorOverbought: "Overbought",
    indicatorBalanced: "Balanced",
    radarTitle: "Personalized Strategy Screener",
    screenerControlPanel: "Screener Control Panel",
    radarScanning: "Scanning 24 assets\u2026",
    radarUpdated: "Updated just now",
    radarFailed: "Screener failed.",
    radarNoData: "No data",
    radarError: "Error",
    screenerNoIndicator: "Select at least one indicator.",
    indicatorStoch: "Stochastic",
    scanMarketBtn: "Scan Market",
    oversoldScore: "Opportunity Signal",
    highBuyOpportunity: "High Buy Opportunity",
    watchlistCandidate: "Watchlist Candidate",
    defensiveSignal: "Defensive Signal",
    lowestRSI: "Lowest RSI (14)",
    lowestMACD: "Lowest MACD",
    price: "Price",
    signal: "Signal",
    buy: "BUY",
    sell: "SELL",
    hold: "HOLD",
    radarFilterAll: "All",
    radarFilterUS: "US Stocks",
    radarFilterBIST: "BIST",
    radarFilterCrypto: "Crypto",
    badgeUS: "US",
    badgeBIST: "BIST",
    badgeCrypto: "Crypto",
  },
  tr: {
    splashTagline: "Tek Net Sinyal.",
    splashSubtagline: "En iyi yat\u0131r\u0131m deneyimi i\u00e7in FinSense.",
    addBtn: "+ Ekle",
    addingBtn: "Ekleniyor\u2026",
    analyzeBtn: "Analiz Et",
    analyzingBtn: "Analiz ediliyor\u2026",
    tickerSearchPlaceholder: "Herhangi bir sembol girin (orn. AAPL, THYAO.IS, BTC-USD)...",
    sectionInstruments: "Ana Enstr\u00fcmanlar",
    filterAll: "T\u00fcm\u00fc",
    filterUS: "ABD Hisseleri",
    filterBIST: "BIST",
    filterCrypto: "Kripto",
    loadingPortfolio: "Portf\u00f6y y\u00fckleniyor\u2026",
    tickersLoaded: "hisse y\u00fcklendi.",
    enterTicker: "Bir sembol girin.",
    analyzing: "Analiz ediliyor",
    added: "eklendi.",
    selectTicker: "Bir sembol se\u00e7in",
    chartSubDefault: "Son 3 ayl\u0131k g\u00fcnl\u00fck kapan\u0131\u015f",
    chartSub5d: "Son i\u015f haftas\u0131 g\u00fcnl\u00fck kapan\u0131\u015f (~5 g\u00fcn)",
    chartSub1mo: "Son 1 ayl\u0131k g\u00fcnl\u00fck kapan\u0131\u015f",
    chartSub6mo: "Son 6 ayl\u0131k g\u00fcnl\u00fck kapan\u0131\u015f",
    chartRangeAria: "Grafik zaman aral\u0131\u011f\u0131",
    chartRange1W: "1W",
    chartRange1M: "1A",
    chartRange3M: "3A",
    chartRange6M: "6A",
    chartPlaceholder: "Grafik g\u00f6rmek i\u00e7in bir enstr\u00fcman se\u00e7in.",
    loadingChart: "Grafik y\u00fckleniyor\u2026",
    chartUnavail: "Grafik kullan\u0131lam\u0131yor.",
    chartLoadErr: "Grafik verileri y\u00fcklenemedi.",
    tickerNotFound: "Sembol bulunamadi. Sembolu kontrol edin.",
    loadingData: "Veriler yukleniyor...",
    searchLoading: "Semboller araniyor...",
    searchNoResults: "Eslesen sembol bulunamadi.",
    newsTitle: "Canl\u0131 Haberler ve Analiz",
    newsLoading: "Haberler y\u00fckleniyor\u2026",
    newsNone: "G\u00fcncel haber bulunamad\u0131.",
    newsNoneRelevant:
      "Bu sembol i\u00e7in ilgili finansal haber bulunamad\u0131.",
    aiSentimentTitle: "FinSense Birlesik Sinyal",
    fusionConfirm: "Analiz Sentiment (AI) %{s} ve Teknik %{t} ile yeniden hesaplansin mi?",
    aiConfidence: "Sentez Skoru",
    aiAnalyzing: "AI haberleri analiz ediyor...",
    aiUnavailable: "AI analizi \u015fu anda kullan\u0131lam\u0131yor.",
    aiNoHeadlines: "AI analizi i\u00e7in ba\u015fl\u0131k bulunamad\u0131.",
    aiNoRelevantHeadlines:
      "Haberler ilgi filtresinden ge\u00e7medi; \u00f6zet teknik g\u00f6stergelere dayan\u0131yor.",
    nlpSentimentLabel: "NLP Duyarliligi",
    technicalMomentumLabel: "Teknik Momentum",
    synthesisStrongBuy: "Guclu Al",
    synthesisNeutral: "Notr",
    synthesisStrongSell: "Guclu Sat",
    technicalBullish: "Yukselis Momentumu",
    technicalNeutral: "Notr Momentum",
    technicalBearish: "Dusus Momentumu",
    indicatorBullish: "Yukselis",
    indicatorBearish: "Dusus",
    indicatorOversold: "Asiri Satis",
    indicatorOverbought: "Asiri Alim",
    indicatorBalanced: "Dengeli",
    radarTitle: "Ki\u015fiselle\u015ftirilmi\u015f Strateji Taray\u0131c\u0131",
    screenerControlPanel: "Taray\u0131c\u0131 Kontrol Paneli",
    radarScanning: "24 varl\u0131k taran\u0131yor\u2026",
    radarUpdated: "Az \u00f6nce g\u00fcncellendi",
    radarFailed: "Tarama ba\u015far\u0131s\u0131z.",
    radarNoData: "Veri yok",
    radarError: "Hata",
    screenerNoIndicator: "En az bir g\u00f6sterge se\u00e7in.",
    indicatorStoch: "Stokastik",
    scanMarketBtn: "Piyasay\u0131 Tara",
    oversoldScore: "Firsat Sinyali",
    highBuyOpportunity: "Yuksek Alim Firsati",
    watchlistCandidate: "Izleme Listesi Adayi",
    defensiveSignal: "Defansif Sinyal",
    lowestRSI: "En D\u00fc\u015f\u00fck RSI (14)",
    lowestMACD: "En D\u00fc\u015f\u00fck MACD",
    price: "Fiyat",
    signal: "Sinyal",
    buy: "AL",
    sell: "SAT",
    hold: "BEKLE",
    radarFilterAll: "T\u00fcm\u00fc",
    radarFilterUS: "ABD Hisseleri",
    radarFilterBIST: "BIST",
    radarFilterCrypto: "Kripto",
    badgeUS: "ABD",
    badgeBIST: "BIST",
    badgeCrypto: "Kripto",
  },
};

let currentLang = localStorage.getItem("sf_lang") || "en";

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
}

function tSignal(sig) {
  const upper = (sig || "HOLD").toUpperCase();
  if (upper === "BUY") return t("buy");
  if (upper === "SELL") return t("sell");
  return t("hold");
}

function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && I18N[currentLang][key] !== undefined) {
      el.textContent = I18N[currentLang][key];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key && I18N[currentLang][key] !== undefined) {
      el.placeholder = I18N[currentLang][key];
    }
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (key && I18N[currentLang][key] !== undefined) {
      el.setAttribute("aria-label", I18N[currentLang][key]);
    }
  });
  langToggle.textContent = currentLang === "en" ? "TR" : "EN";
  updateChartPeriodSubtitle();
}

// ---------------------------------------------------------------------------
// DOM handles
// ---------------------------------------------------------------------------
const themeToggle = document.getElementById("themeToggle");
const iconMoon = document.getElementById("iconMoon");
const iconSun = document.getElementById("iconSun");
const langToggle = document.getElementById("langToggle");

const tickerInput = document.getElementById("tickerInput");
const scanBtn = document.getElementById("scanBtn");
const searchSuggestions = document.getElementById("searchSuggestions");
const masterSearchInputWrap = document.querySelector(".master-search-input-wrap");

const chartTitleEl = document.getElementById("chartTitle");
const chartSubtitle = document.getElementById("chartSubtitle");
const chartPlaceholder = document.getElementById("chartPlaceholder");
const priceCanvas = document.getElementById("priceChart");
const chartRange = document.getElementById("chartRange");

const newsSection = document.getElementById("newsSection");
const newsList = document.getElementById("newsList");
const aiSentimentCard = document.getElementById("aiSentimentCard");
const aiSentimentText = document.getElementById("aiSentimentText");
const aiSentimentBadge = document.getElementById("aiSentimentBadge");
const aiConfidenceValue = document.getElementById("aiConfidenceValue");
const aiConfidenceBar = document.getElementById("aiConfidenceBar");
const nlpSentimentValue = document.getElementById("nlpSentimentValue");
const technicalMomentumValue = document.getElementById("technicalMomentumValue");

const radarStatus = document.getElementById("radarStatus");
const screenerMarketSelector = document.getElementById("screenerMarketSelector");
const screenerIndicatorSelector = document.getElementById("screenerIndicatorSelector");
const screenerScanBtn = document.getElementById("screenerScanBtn");
const screenerResults = document.getElementById("screenerResults");

let priceChart = null;
/** yfinance period: 5d | 1mo | 3mo | 6mo */
let chartPeriod = "3mo";
let lastChartTicker = null;
let screenerMarket = "all";
let screenerData = [];
let suggestionDebounceId = null;
let suggestionRequestId = 0;
let suggestionItems = [];
let activeSuggestionIndex = -1;
let lastFusionContext = null;

const fusionSlider = document.getElementById("fusionSlider");
const fusionSliderWrap = document.getElementById("fusionSliderWrap");
const sentimentLabel = document.getElementById("sentimentLabel");
const technicalLabel = document.getElementById("technicalLabel");
let lastFusionSliderValue = fusionSlider ? Number(fusionSlider.value) : 60;

const CHART_ICON_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><polyline points="7 14 11 10 14 13 20 7"/></svg>';

// ---------------------------------------------------------------------------
// Theme
// ---------------------------------------------------------------------------
function getTheme() {
  return localStorage.getItem("sf_theme") || "dark";
}

function applyTheme(theme) {
  localStorage.setItem("sf_theme", theme);
  document.body.classList.toggle("light-mode", theme === "light");
  iconMoon.style.display = theme === "dark" ? "block" : "none";
  iconSun.style.display = theme === "light" ? "block" : "none";
  refreshChartColors();
}

themeToggle.addEventListener("click", () => {
  applyTheme(getTheme() === "dark" ? "light" : "dark");
});

applyTheme(getTheme());

applyLanguage();

// ---------------------------------------------------------------------------
// Splash intro (every page load / refresh)
// ---------------------------------------------------------------------------
function initSplashScreen() {
  const splash = document.getElementById("splashScreen");
  if (!splash) return;

  document.body.classList.add("splash-active");

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const holdMs = reducedMotion ? 700 : 2600;

  window.setTimeout(() => {
    splash.classList.add("is-leaving");
    splash.classList.add("is-hidden");
    document.body.classList.remove("splash-active");
    window.setTimeout(() => {
      splash.remove();
    }, 600);
  }, holdMs);
}

initSplashScreen();

// ---------------------------------------------------------------------------
// Language
// ---------------------------------------------------------------------------
langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "tr" : "en";
  localStorage.setItem("sf_lang", currentLang);
  applyLanguage();
});

setTimeout(() => {
  loadScreener();
}, 150);

// ---------------------------------------------------------------------------
// Utility
// ---------------------------------------------------------------------------
function setAnalyzing(on) {
  scanBtn.disabled = on;
  scanBtn.textContent = on ? t("analyzingBtn") : t("analyzeBtn");
}

async function safeFetch(url, options = {}) {
  const res = await fetch(url, options);
  const text = await res.text();
  let json = {};
  try {
    json = text ? JSON.parse(text) : {};
  } catch {
    json = { error: text || "Invalid server response." };
  }
  if (!res.ok) throw new Error(json.error || json.detail || "Request failed.");
  return json;
}

// ---------------------------------------------------------------------------
// Market filter
// ---------------------------------------------------------------------------
function classifyTicker(ticker) {
  if (!ticker) return "us";
  const up = ticker.toUpperCase();
  if (up.includes("-USD") || up.includes("-EUR") || up.includes("-GBP")) return "crypto";
  if (up.endsWith(".IS")) return "bist";
  return "us";
}

async function analyzeTicker() {
  const normalizedTicker = tickerInput.value.trim().toUpperCase();
  if (!normalizedTicker) {
    tickerInput.focus();
    return;
  }
  hideSuggestions();
  tickerInput.value = normalizedTicker;
  setAnalyzing(true);
  chartPlaceholder.textContent = t("loadingData");
  chartPlaceholder.classList.remove("error");
  chartPlaceholder.style.display = "grid";
  priceCanvas.style.display = "none";
  newsSection.style.display = "block";
  newsList.innerHTML = `<span class="radar-loading">${t("newsLoading")}</span>`;
  setAiSentimentLoading();
  if (window.myChart instanceof Chart) {
    window.myChart.destroy();
    window.myChart = null;
  }
  if (priceChart) {
    priceChart.destroy();
    priceChart = null;
  }
  try {
    await loadChart(normalizedTicker);
  } catch {
    // loadChart handles UI-level errors
  } finally {
    setAnalyzing(false);
  }
}

scanBtn.addEventListener("click", analyzeTicker);
tickerInput.addEventListener("keydown", (e) => {
  const open = isSuggestionsOpen();
  if (e.key === "ArrowDown" && open && suggestionItems.length) {
    e.preventDefault();
    const next = activeSuggestionIndex < suggestionItems.length - 1 ? activeSuggestionIndex + 1 : 0;
    setActiveSuggestion(next);
    return;
  }
  if (e.key === "ArrowUp" && open && suggestionItems.length) {
    e.preventDefault();
    const next = activeSuggestionIndex > 0 ? activeSuggestionIndex - 1 : suggestionItems.length - 1;
    setActiveSuggestion(next);
    return;
  }
  if (e.key === "Escape" && open) {
    e.preventDefault();
    hideSuggestions();
    return;
  }
  if (e.key === "Enter") {
    if (open && suggestionItems.length) {
      e.preventDefault();
      const idx = activeSuggestionIndex >= 0 ? activeSuggestionIndex : 0;
      suggestionItems[idx].click();
      return;
    }
    hideSuggestions();
    analyzeTicker();
  }
});

function isSuggestionsOpen() {
  return !!searchSuggestions && !searchSuggestions.classList.contains("hidden");
}

function hideSuggestions() {
  if (!searchSuggestions) return;
  searchSuggestions.classList.add("hidden");
  searchSuggestions.innerHTML = "";
  suggestionItems = [];
  activeSuggestionIndex = -1;
}

function showSuggestionsLoading() {
  if (!searchSuggestions) return;
  searchSuggestions.innerHTML = `<div class="suggestion-empty">${t("searchLoading")}</div>`;
  searchSuggestions.classList.remove("hidden");
}

function renderSuggestions(items) {
  if (!searchSuggestions) return;
  suggestionItems = [];
  activeSuggestionIndex = -1;
  if (!Array.isArray(items) || !items.length) {
    searchSuggestions.innerHTML = `<div class="suggestion-empty">${t("searchNoResults")}</div>`;
    searchSuggestions.classList.remove("hidden");
    return;
  }

  searchSuggestions.innerHTML = "";
  searchSuggestions.setAttribute("role", "listbox");
  items.forEach((item) => {
    const symbol = String(item.symbol || "").trim();
    if (!symbol) return;
    const shortname = String(item.shortname || "").trim();
    const exchange = String(item.exchDisp || "").trim();
    const displaySymbol = symbol.length > 14 ? `${symbol.slice(0, 14)}…` : symbol;
    const baseName = shortname || symbol;
    const displayName = baseName.length > 48 ? `${baseName.slice(0, 48)}…` : baseName;

    const row = document.createElement("button");
    row.type = "button";
    row.className = "suggestion-item";
    row.title = `${symbol}${shortname ? ` • ${shortname}` : ""}${exchange ? ` • ${exchange}` : ""}`;
    row.setAttribute("role", "option");
    const badge = getSuggestionBadge(exchange, symbol);

    const main = document.createElement("span");
    main.className = "suggestion-main";
    const symbolEl = document.createElement("span");
    symbolEl.className = "suggestion-symbol";
    symbolEl.textContent = displaySymbol;
    const nameEl = document.createElement("span");
    nameEl.className = "suggestion-name";
    nameEl.textContent = displayName;
    main.appendChild(symbolEl);
    main.appendChild(nameEl);

    const badgeEl = document.createElement("span");
    badgeEl.className = `suggestion-exchange-badge ${badge.className}`;
    badgeEl.textContent = badge.label;

    row.appendChild(main);
    row.appendChild(badgeEl);
    row.addEventListener("click", () => {
      tickerInput.value = symbol.toUpperCase();
      hideSuggestions();
      analyzeTicker();
    });
    row.addEventListener("mouseenter", () => {
      const idx = suggestionItems.indexOf(row);
      if (idx >= 0) setActiveSuggestion(idx);
    });
    searchSuggestions.appendChild(row);
    suggestionItems.push(row);
  });

  if (!searchSuggestions.children.length) {
    searchSuggestions.innerHTML = `<div class="suggestion-empty">${t("searchNoResults")}</div>`;
    suggestionItems = [];
    activeSuggestionIndex = -1;
  } else {
    setActiveSuggestion(0);
  }
  searchSuggestions.classList.remove("hidden");
}

function getSuggestionBadge(exchange, symbol) {
  const ex = String(exchange || "").toUpperCase();
  const sym = String(symbol || "").toUpperCase();
  if (sym.endsWith(".IS") || ex.includes("IST") || ex.includes("BORSA")) {
    return { label: "[BIST]", className: "sug-bist" };
  }
  if (sym.includes("-USD") || sym.includes("-EUR") || sym.includes("-GBP") || ex.includes("CRYPTO")) {
    return { label: "[CRYPTO]", className: "sug-crypto" };
  }
  return { label: "[US]", className: "sug-us" };
}

function setActiveSuggestion(index) {
  if (!suggestionItems.length) return;
  activeSuggestionIndex = Math.max(0, Math.min(index, suggestionItems.length - 1));
  suggestionItems.forEach((el, i) => {
    el.classList.toggle("active", i === activeSuggestionIndex);
  });
  const current = suggestionItems[activeSuggestionIndex];
  if (current) current.scrollIntoView({ block: "nearest" });
}

async function fetchSuggestions(query) {
  const requestId = ++suggestionRequestId;
  showSuggestionsLoading();
  try {
    const data = await safeFetch(`/api/search_ticker?query=${encodeURIComponent(query)}`);
    if (requestId !== suggestionRequestId) return;
    const items = Array.isArray(data.items) ? data.items.slice(0, 6) : [];
    renderSuggestions(items);
  } catch {
    if (requestId !== suggestionRequestId) return;
    hideSuggestions();
  }
}

tickerInput.addEventListener("input", () => {
  const query = tickerInput.value.trim();
  if (suggestionDebounceId) clearTimeout(suggestionDebounceId);
  if (query.length < 2) {
    suggestionRequestId += 1;
    hideSuggestions();
    return;
  }
  suggestionDebounceId = setTimeout(() => {
    fetchSuggestions(query);
  }, 300);
});

document.addEventListener("click", (e) => {
  if (!masterSearchInputWrap) return;
  if (!masterSearchInputWrap.contains(e.target)) {
    hideSuggestions();
  }
});

// ---------------------------------------------------------------------------
// Chart — theme-aware colors
// ---------------------------------------------------------------------------
function getChartColors() {
  const style = getComputedStyle(document.body);
  return {
    grid: style.getPropertyValue("--chart-grid").trim() || "rgba(255,255,255,0.03)",
    tick: style.getPropertyValue("--chart-tick").trim() || "#555",
    tooltipBg: style.getPropertyValue("--tooltip-bg").trim() || "rgba(30,30,30,0.92)",
    tooltipBorder: style.getPropertyValue("--tooltip-border").trim() || "rgba(255,255,255,0.08)",
    text: style.getPropertyValue("--text").trim() || "#f0f0f0",
    textSec: style.getPropertyValue("--text-sec").trim() || "#b0b0b0",
  };
}

function refreshChartColors() {
  if (!priceChart) return;
  const c = getChartColors();
  priceChart.options.scales.x.ticks.color = c.tick;
  priceChart.options.scales.x.grid.color = c.grid;
  priceChart.options.scales.y.ticks.color = c.tick;
  priceChart.options.scales.y.grid.color = c.grid;
  priceChart.options.plugins.tooltip.backgroundColor = c.tooltipBg;
  priceChart.options.plugins.tooltip.titleColor = c.text;
  priceChart.options.plugins.tooltip.bodyColor = c.textSec;
  priceChart.options.plugins.tooltip.borderColor = c.tooltipBorder;
  if (priceChart.options.plugins.legend && priceChart.options.plugins.legend.labels) {
    priceChart.options.plugins.legend.labels.color = c.tick;
  }
  priceChart.update("none");
}

function buildGradient(ctx, canvas) {
  const grad = ctx.createLinearGradient(0, 0, 0, canvas.height || 340);
  grad.addColorStop(0, "rgba(59, 130, 246, 0.28)");
  grad.addColorStop(0.6, "rgba(59, 130, 246, 0.06)");
  grad.addColorStop(1, "rgba(59, 130, 246, 0.00)");
  return grad;
}

const bbFillPlugin = {
  id: "bbFill",
  beforeDatasetsDraw(chart) {
    const upper = chart.data.datasets.find((d) => d.label === "BB Upper");
    const lower = chart.data.datasets.find((d) => d.label === "BB Lower");
    if (!upper || !lower) return;
    const uMeta = chart.getDatasetMeta(chart.data.datasets.indexOf(upper));
    const lMeta = chart.getDatasetMeta(chart.data.datasets.indexOf(lower));
    if (uMeta.hidden || lMeta.hidden) return;

    const ctx = chart.ctx;
    ctx.save();
    ctx.beginPath();
    const uPts = uMeta.data;
    const lPts = lMeta.data;
    for (let i = 0; i < uPts.length; i++) {
      const p = uPts[i];
      if (p.skip) continue;
      i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
    }
    for (let i = lPts.length - 1; i >= 0; i--) {
      const p = lPts[i];
      if (p.skip) continue;
      ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
    ctx.fillStyle = getTheme() === "dark" ? "rgba(59,130,246,0.06)" : "rgba(37,99,235,0.06)";
    ctx.fill();
    ctx.restore();
  },
};

function chartPeriodSubtitle(period) {
  const p = String(period || "3mo").toLowerCase();
  if (p === "5d") return t("chartSub5d");
  if (p === "1mo") return t("chartSub1mo");
  if (p === "6mo") return t("chartSub6mo");
  return t("chartSubDefault");
}

function setChartRangeActive(period) {
  if (!chartRange) return;
  const p = String(period || "3mo").toLowerCase();
  chartRange.querySelectorAll(".chart-range-btn").forEach((btn) => {
    const btnP = (btn.getAttribute("data-period") || "").toLowerCase();
    const isActive = btnP === p;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function updateChartPeriodSubtitle() {
  if (lastChartTicker && chartSubtitle) {
    chartSubtitle.textContent = chartPeriodSubtitle(chartPeriod);
  }
}

async function loadChart(ticker, options = {}) {
  const reqPeriod = options.period != null ? options.period : chartPeriod;

  chartTitleEl.innerHTML = CHART_ICON_SVG + " " + ticker;
  chartSubtitle.textContent = t("loadingChart");
  chartPlaceholder.style.display = "none";
  chartPlaceholder.classList.remove("error");
  priceCanvas.style.display = "block";

  try {
    const data = await safeFetch(
      `/api/chart?ticker=${encodeURIComponent(ticker)}&period=${encodeURIComponent(reqPeriod)}`,
    );

    const existingChart = (typeof Chart !== "undefined" && typeof Chart.getChart === "function")
      ? Chart.getChart(priceCanvas)
      : null;
    if (existingChart) existingChart.destroy();
    if (priceChart) priceChart.destroy();

    const ctx = priceCanvas.getContext("2d");
    const gradient = buildGradient(ctx, priceCanvas);
    const c = getChartColors();

    const sharedLine = {
      borderWidth: 1.2,
      pointRadius: 0,
      pointHoverRadius: 0,
      pointHitRadius: 0,
      fill: false,
      tension: 0.4,
      spanGaps: true,
    };
    const emaLine = {
      pointRadius: 0,
      pointHoverRadius: 0,
      pointHitRadius: 0,
      fill: false,
      tension: 0.2,
      spanGaps: true,
      borderWidth: 1.8,
    };

    priceChart = new Chart(ctx, {
      type: "line",
      plugins: [bbFillPlugin],
      data: {
        labels: data.dates,
        datasets: [
          {
            label: "BB Upper",
            data: data.bb_upper,
            borderColor: "rgba(148,163,184,0.25)",
            borderDash: [4, 3],
            ...sharedLine,
            borderWidth: 1,
            order: 5,
          },
          {
            label: "BB Lower",
            data: data.bb_lower,
            borderColor: "rgba(148,163,184,0.25)",
            borderDash: [4, 3],
            ...sharedLine,
            borderWidth: 1,
            order: 5,
          },
          {
            label: "EMA 50",
            data: data.ema50,
            borderColor: "rgba(251, 191, 36, 0.95)",
            backgroundColor: "rgba(251, 191, 36, 0.12)",
            ...emaLine,
            order: 12,
          },
          {
            label: "EMA 20",
            data: data.ema20,
            borderColor: "rgba(56, 189, 248, 0.95)",
            backgroundColor: "rgba(56, 189, 248, 0.1)",
            ...emaLine,
            order: 14,
          },
          {
            label: `${ticker} Close`,
            data: data.prices,
            borderColor: "#3b82f6",
            backgroundColor: gradient,
            borderWidth: 2.5,
            pointRadius: 0,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#3b82f6",
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 2,
            pointHitRadius: 8,
            fill: true,
            tension: 0.4,
            order: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: false,
        normalized: true,
        interaction: { mode: "index", intersect: false },
        plugins: {
          legend: {
            display: true,
            position: "top",
            align: "end",
            labels: {
              boxWidth: 10,
              boxHeight: 2,
              padding: 12,
              usePointStyle: false,
              font: { family: "Poppins", size: 10 },
              color: c.tick,
              filter: (item) => !item.text.includes("BB "),
            },
          },
          tooltip: {
            backgroundColor: c.tooltipBg,
            titleColor: c.text,
            titleFont: { family: "Poppins", weight: "600", size: 13 },
            bodyColor: c.textSec,
            bodyFont: { family: "Poppins", size: 12 },
            borderColor: c.tooltipBorder,
            borderWidth: 1,
            cornerRadius: 10,
            padding: 12,
            displayColors: true,
            boxWidth: 8,
            boxHeight: 8,
            boxPadding: 4,
            filter: (item) => item.parsed.y != null,
            callbacks: {
              label: (tip) => {
                const v = tip.parsed.y;
                if (v == null) return null;
                const fmt = `$${v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })}`;
                return ` ${tip.dataset.label}: ${fmt}`;
              },
            },
          },
        },
        scales: {
          x: {
            ticks: { color: c.tick, maxTicksLimit: 8, font: { family: "Poppins", size: 11 } },
            grid: { color: c.grid },
            border: { color: "transparent" },
          },
          y: {
            ticks: {
              color: c.tick,
              font: { family: "Poppins", size: 11 },
              callback: (v) => "$" + v.toLocaleString(),
            },
            grid: { color: c.grid },
            border: { color: "transparent" },
          },
        },
      },
    });
    window.myChart = priceChart;

    chartPeriod = data.period || reqPeriod;
    lastChartTicker = ticker;
    if (chartRange) {
      chartRange.hidden = false;
    }
    setChartRangeActive(chartPeriod);
    chartSubtitle.textContent = chartPeriodSubtitle(chartPeriod);
    await loadNews(ticker);
  } catch (err) {
    const msg = String(err && err.message ? err.message : "");
    const likelyInvalid = /not found|unavailable|invalid|404/i.test(msg);
    chartSubtitle.textContent = likelyInvalid ? t("tickerNotFound") : (msg || t("chartUnavail"));
    chartPlaceholder.textContent = likelyInvalid ? t("tickerNotFound") : t("chartLoadErr");
    chartPlaceholder.classList.add("error");
    chartPlaceholder.style.display = "grid";
    priceCanvas.style.display = "none";
    newsSection.style.display = "none";
    window.myChart = null;
    if (chartRange) {
      chartRange.hidden = !lastChartTicker;
    }
    if (likelyInvalid) {
      alert(t("tickerNotFound"));
    }
  }
}

if (chartRange) {
  chartRange.addEventListener("click", (e) => {
    const btn = e.target.closest(".chart-range-btn");
    if (!btn) return;
    e.preventDefault();
    const p = btn.getAttribute("data-period");
    if (!p) return;
    if (p === chartPeriod) return;
    chartPeriod = p;
    setChartRangeActive(p);
    if (lastChartTicker) {
      loadChart(lastChartTicker, { period: p });
    }
  });
}

// ---------------------------------------------------------------------------
// Live News
// ---------------------------------------------------------------------------
function setAiSentimentLoading() {
  setFusionSliderVisible(false);
  aiSentimentCard.classList.add("loading");
  aiSentimentCard.classList.remove("conf-low", "conf-med", "conf-high");
  aiSentimentCard.classList.add("conf-med");
  aiSentimentBadge.className = "ai-verdict-badge neutral";
  aiSentimentBadge.textContent = t("synthesisNeutral");
  aiConfidenceValue.textContent = "0";
  aiConfidenceBar.className = "ai-confidence-bar neutral";
  aiConfidenceBar.style.width = "0%";
  nlpSentimentValue.textContent = t("synthesisNeutral");
  technicalMomentumValue.textContent = t("technicalNeutral");
  aiSentimentText.textContent = t("aiAnalyzing");
}

function setAiSentimentUnavailable() {
  aiSentimentCard.classList.remove("loading");
  aiSentimentCard.classList.remove("conf-low", "conf-med", "conf-high");
  aiSentimentCard.classList.add("conf-med");
  aiSentimentBadge.className = "ai-verdict-badge neutral";
  aiSentimentBadge.textContent = t("synthesisNeutral");
  aiConfidenceValue.textContent = "0";
  aiConfidenceBar.className = "ai-confidence-bar neutral";
  aiConfidenceBar.style.width = "0%";
  nlpSentimentValue.textContent = t("synthesisNeutral");
  technicalMomentumValue.textContent = t("technicalNeutral");
  aiSentimentText.textContent = t("aiUnavailable");
}

function extractVerdict(text) {
  const match = String(text || "").toUpperCase().match(/\b(BULLISH|BEARISH|NEUTRAL)\b/);
  return match ? match[1] : "NEUTRAL";
}

function extractConfidence(text) {
  const match = String(text || "").match(/confidence[^0-9]{0,12}([0-9]{1,3})\s*%?/i);
  if (!match) return 50;
  const val = Number(match[1]);
  if (!Number.isFinite(val)) return 50;
  return Math.max(0, Math.min(100, Math.round(val)));
}

function confidenceBand(confidence) {
  if (confidence >= 80) return "high";
  if (confidence >= 55) return "med";
  return "low";
}

function applyConfidenceVisuals(verdict, confidence) {
  const band = confidenceBand(confidence);
  aiSentimentCard.classList.remove("conf-low", "conf-med", "conf-high");
  aiSentimentCard.classList.add(`conf-${band}`);
  aiSentimentBadge.className = `ai-verdict-badge ${String(verdict).toLowerCase()} conf-${band}`;
  aiConfidenceBar.className = `ai-confidence-bar ${String(verdict).toLowerCase()} conf-${band}`;
}

function normalizeVerdictClass(verdict) {
  const v = String(verdict || "").toUpperCase();
  if (v === "BULLISH") return "bullish";
  if (v === "BEARISH") return "bearish";
  return "neutral";
}

function nlpScoreFromVerdict(verdict, confidence) {
  const conf = Math.max(0, Math.min(100, Number(confidence) || 50)) / 100;
  const v = String(verdict || "").toUpperCase();
  if (v === "BULLISH") return conf;
  if (v === "BEARISH") return -conf;
  return 0;
}

function labelFromVerdict(verdict, confidence) {
  const v = String(verdict || "").toUpperCase();
  const conf = Math.max(0, Math.min(100, Number(confidence) || 50));
  if (v === "BULLISH") return `Bullish (${conf}%)`;
  if (v === "BEARISH") return `Bearish (${conf}%)`;
  return t("synthesisNeutral");
}

function technicalMomentumScore(data) {
  if (!data || typeof data !== "object") {
    return { score: 0, label: t("technicalNeutral"), details: t("technicalNeutral") };
  }
  const rsi = Number(data.rsi);
  const price = Number(data.current_price);
  const macdHist = Number(data.macd_histogram);
  const macdLine = Number(data.macd);
  const macdSignal = Number(data.macd_signal);
  const tradeSignal = String(data.signal || "HOLD").toUpperCase();

  const rsiNorm = Number.isFinite(rsi)
    ? Math.max(-1, Math.min(1, (50 - rsi) / 25))
    : 0;

  let hist = macdHist;
  if (!Number.isFinite(hist) && Number.isFinite(macdLine) && Number.isFinite(macdSignal)) {
    hist = macdLine - macdSignal;
  }
  const macdNorm =
    Number.isFinite(hist) && Number.isFinite(price) && price > 0
      ? Math.max(-1, Math.min(1, (hist / price) * 400))
      : 0;

  const signalNorm = tradeSignal === "BUY" ? 1 : tradeSignal === "SELL" ? -1 : 0;
  const score = rsiNorm * 0.35 + macdNorm * 0.4 + signalNorm * 0.25;

  const rsiText = Number.isFinite(rsi) ? rsi.toFixed(1) : "-";
  const histText = Number.isFinite(hist) ? hist.toFixed(4) : "-";
  const details = `RSI ${rsiText} | MACD Hist ${histText} | ${tradeSignal}`;

  if (score >= 0.15) return { score, label: t("technicalBullish"), details };
  if (score <= -0.15) return { score, label: t("technicalBearish"), details };
  return { score, label: t("technicalNeutral"), details };
}

function getFusionWeights() {
  const sentimentPct = fusionSlider ? Number(fusionSlider.value) : 60;
  const clamped = Math.max(0, Math.min(100, sentimentPct));
  return {
    sentiment: clamped / 100,
    technical: (100 - clamped) / 100,
    sentimentPct: clamped,
    technicalPct: 100 - clamped,
  };
}

function setFusionSliderVisible(visible) {
  if (fusionSliderWrap) fusionSliderWrap.classList.toggle("hidden", !visible);
}

function updateFusionLabels() {
  if (!sentimentLabel || !technicalLabel) return;
  const weights = getFusionWeights();
  sentimentLabel.textContent = `Sentiment (AI): ${weights.sentimentPct}%`;
  technicalLabel.textContent = `Technical (Math): ${weights.technicalPct}%`;
}

function applyFusionSynthesis() {
  if (!lastFusionContext) return;
  const { nlpScore, technicalScore, nlpLabel, technicalLabelText, analysis } = lastFusionContext;
  const synthesis = synthesisFromScores(nlpScore, technicalScore);
  const weights = getFusionWeights();

  aiSentimentCard.classList.remove("loading");
  applyConfidenceVisuals(synthesis.className.toUpperCase(), Math.round(Math.abs(Number(synthesis.scoreText))));
  aiSentimentBadge.textContent = synthesis.label;
  aiConfidenceValue.textContent = synthesis.scoreText;
  aiConfidenceBar.style.width = synthesis.barWidth;
  nlpSentimentValue.textContent = nlpLabel;
  technicalMomentumValue.textContent = technicalLabelText;
  aiSentimentText.textContent =
    `${analysis}\n\nSynthesis: ${synthesis.label} (NLP ${weights.sentimentPct}% + Technical ${weights.technicalPct}%).`;
}

function synthesisFromScores(nlpScore, technicalScore) {
  const { sentiment: sw, technical: tw } = getFusionWeights();
  const value = ((nlpScore * sw) + (technicalScore * tw)) * 100;
  if (value >= 20) {
    return {
      label: t("synthesisStrongBuy"),
      className: "bullish",
      scoreText: `+${Math.round(value)}`,
      barWidth: `${Math.min(100, Math.round(Math.abs(value)))}%`,
    };
  }
  if (value <= -20) {
    return {
      label: t("synthesisStrongSell"),
      className: "bearish",
      scoreText: `${Math.round(value)}`,
      barWidth: `${Math.min(100, Math.round(Math.abs(value)))}%`,
    };
  }
  return {
    label: t("synthesisNeutral"),
    className: "neutral",
    scoreText: `${Math.round(value)}`,
    barWidth: `${Math.min(100, Math.round(Math.abs(value)))}%`,
  };
}

async function loadAiSentiment(ticker, headlines, opts = {}) {
  let nlpLabel = t("synthesisNeutral");
  let nlpScore = 0;
  let analysis = t("aiUnavailable");

  if (headlines.length) {
    try {
      const data = await safeFetch("/api/ai_analyze_news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ticker,
          headlines,
          language: currentLang,
        }),
      });
      analysis = String(data.analysis || "").trim() || t("aiUnavailable");
      const verdict = String(data.verdict || extractVerdict(analysis)).toUpperCase();
      const confidence = Number.isFinite(Number(data.confidence))
        ? Math.max(0, Math.min(100, Math.round(Number(data.confidence))))
        : extractConfidence(analysis);
      nlpLabel = labelFromVerdict(verdict, confidence);
      nlpScore = nlpScoreFromVerdict(verdict, confidence);
    } catch {
      nlpLabel = t("synthesisNeutral");
      nlpScore = 0;
    }
  } else {
    analysis =
      opts.newsStatus === "no_relevant" ? t("aiNoRelevantHeadlines") : t("aiNoHeadlines");
  }

  let technical = { score: 0, label: t("technicalNeutral"), details: t("technicalNeutral") };
  try {
    const technicalData = await safeFetch(`/api/analyze?ticker=${encodeURIComponent(ticker)}`);
    technical = technicalMomentumScore(technicalData);
  } catch {
    technical = { score: 0, label: t("technicalNeutral"), details: t("technicalNeutral") };
  }

  const synthesis = synthesisFromScores(nlpScore, technical.score);
  lastFusionContext = {
    nlpScore,
    technicalScore: technical.score,
    nlpLabel,
    technicalLabelText: technical.label,
    analysis,
    ticker,
    headlines: headlines.slice(),
    newsStatus: opts.newsStatus || "ok",
  };
  lastFusionSliderValue = getFusionWeights().sentimentPct;
  setFusionSliderVisible(true);
  updateFusionLabels();
  aiSentimentCard.classList.remove("loading");
  applyConfidenceVisuals(synthesis.className.toUpperCase(), Math.round(Math.abs(Number(synthesis.scoreText))));
  aiSentimentBadge.textContent = synthesis.label;
  aiConfidenceValue.textContent = synthesis.scoreText;
  aiConfidenceBar.style.width = synthesis.barWidth;
  nlpSentimentValue.textContent = nlpLabel;
  technicalMomentumValue.textContent = technical.label;
  const weights = getFusionWeights();
  aiSentimentText.textContent =
    `${analysis}\n\nSynthesis: ${synthesis.label} (NLP ${weights.sentimentPct}% + Technical ${weights.technicalPct}%).`;
}

async function loadNews(ticker) {
  newsSection.style.display = "block";
  newsList.innerHTML = `<span class="radar-loading">${t("newsLoading")}</span>`;
  setAiSentimentLoading();

  try {
    const data = await safeFetch(`/api/news?ticker=${encodeURIComponent(ticker)}`);
    const articles = Array.isArray(data.articles) ? data.articles : [];
    const newsStatus = data.newsStatus || "ok";

    newsList.innerHTML = "";
    if (!articles.length) {
      const emptyMsg =
        newsStatus === "no_relevant" ? t("newsNoneRelevant") : t("newsNone");
      newsList.innerHTML = `<span class="news-no-data">${emptyMsg}</span>`;
      await loadAiSentiment(ticker, [], { newsStatus });
      return;
    }

    articles.forEach((a, i) => {
      const card = document.createElement("a");
      card.className = "news-card";
      card.href = a.url || "#";
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.style.animationDelay = `${i * 0.06}s`;
      card.innerHTML =
        `<div class="news-card-title">${a.title}</div>` +
        `<div class="news-card-meta">` +
          `<span class="news-card-publisher">${a.publisher || ""}</span>` +
          (a.time ? `<span>${a.time}</span>` : "") +
        `</div>`;
      newsList.appendChild(card);
    });
    const headlines = articles.map((a) => a.title).filter(Boolean);
    await loadAiSentiment(ticker, headlines, { newsStatus: "ok" });
  } catch {
    newsList.innerHTML = `<span class="news-no-data">${t("newsNone")}</span>`;
    setAiSentimentUnavailable();
  }
}

// ---------------------------------------------------------------------------
// Market Radar / Screener
// ---------------------------------------------------------------------------
function marketBadgeHTML(marketRaw) {
  const market = String(marketRaw || "").toUpperCase();
  if (market === "BIST") return `<span class="badge badge-bist">${t("badgeBIST")}</span>`;
  if (market === "CRYPTO") return `<span class="badge badge-crypto">${t("badgeCrypto")}</span>`;
  return `<span class="badge badge-us">${t("badgeUS")}</span>`;
}

function setScreenerMarket(market) {
  screenerMarket = market;
  screenerMarketSelector.querySelectorAll(".screener-chip").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.market === market);
  });
}

function getSelectedIndicators() {
  const checks = screenerIndicatorSelector.querySelectorAll('input[type="checkbox"]');
  return [...checks].filter((c) => c.checked).map((c) => c.value);
}

function formatIndicatorValue(indicator, value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return "-";
  if (indicator === "macd") return num.toFixed(4);
  return num.toFixed(2);
}

function indicatorInterpretation(indicator, rawValue) {
  const value = Number(rawValue);
  if (!Number.isFinite(value)) {
    return { label: t("indicatorBalanced"), className: "neutral" };
  }
  if (indicator === "rsi") {
    if (value < 30) return { label: t("indicatorOversold"), className: "bullish" };
    if (value > 70) return { label: t("indicatorOverbought"), className: "bearish" };
    return { label: t("indicatorBalanced"), className: "neutral" };
  }
  if (indicator === "macd") {
    if (value < 0) return { label: t("indicatorBearish"), className: "bearish" };
    if (value > 0) return { label: t("indicatorBullish"), className: "bullish" };
    return { label: t("indicatorBalanced"), className: "neutral" };
  }
  if (indicator === "stoch_k" || indicator === "mfi") {
    if (value < 20) return { label: t("indicatorOversold"), className: "bullish" };
    if (value > 80) return { label: t("indicatorOverbought"), className: "bearish" };
    return { label: t("indicatorBalanced"), className: "neutral" };
  }
  return { label: t("indicatorBalanced"), className: "neutral" };
}

function opportunityLabel(score) {
  if (score <= 0.22) return { text: t("highBuyOpportunity"), className: "opp-high" };
  if (score <= 0.45) return { text: t("watchlistCandidate"), className: "opp-mid" };
  return { text: t("defensiveSignal"), className: "opp-low" };
}

function oversoldScoreItems(items, indicators) {
  const rankMaps = {};
  indicators.forEach((ind) => {
    const sorted = [...items]
      .filter((x) => Number.isFinite(Number(x[ind])))
      .sort((a, b) => Number(a[ind]) - Number(b[ind]));
    rankMaps[ind] = new Map();
    const denom = Math.max(sorted.length - 1, 1);
    sorted.forEach((item, idx) => {
      rankMaps[ind].set(item.ticker, idx / denom);
    });
  });

  return items
    .map((item) => {
      let sum = 0;
      let count = 0;
      indicators.forEach((ind) => {
        const rank = rankMaps[ind].get(item.ticker);
        if (Number.isFinite(rank)) {
          sum += rank;
          count += 1;
        }
      });
      if (!count) return null;
      return { ...item, _score: sum / count };
    })
    .filter(Boolean)
    .sort((a, b) => a._score - b._score);
}

function renderScreenerResults(items, indicators) {
  screenerResults.innerHTML = "";
  if (!items.length) {
    screenerResults.innerHTML = `<span class="radar-loading">${t("radarNoData")}</span>`;
    return;
  }

  items.slice(0, 5).forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "screener-result-card";
    el.style.animationDelay = `${i * 0.05}s`;
    const metrics = indicators
      .map((ind) => {
        const label = ind === "stoch_k" ? t("indicatorStoch") : ind.toUpperCase();
        const val = formatIndicatorValue(ind, item[ind]);
        const meaning = indicatorInterpretation(ind, item[ind]);
        return `<span class="screener-metric"><b>${label}</b> ${val}<span class="metric-badge ${meaning.className}">${meaning.label}</span></span>`;
      })
      .join("");
    const opportunity = opportunityLabel(Number(item._score));

    el.innerHTML = `
      <div class="screener-result-head">
        <span class="screener-result-ticker">${item.ticker} ${marketBadgeHTML(item.market)}</span>
        <span class="screener-result-price">$${Number(item.current_price || 0).toFixed(2)}</span>
      </div>
      <div class="screener-result-metrics">${metrics}</div>
      <div class="screener-result-score ${opportunity.className}">${t("oversoldScore")}: ${opportunity.text}</div>
    `;
    el.addEventListener("click", () => {
      tickerInput.value = item.ticker;
      analyzeTicker();
    });
    screenerResults.appendChild(el);
  });
}

function runScreenerScan() {
  const indicators = getSelectedIndicators();
  if (!indicators.length) {
    screenerStatusError(t("screenerNoIndicator"));
    screenerResults.innerHTML = `<span class="radar-loading">${t("screenerNoIndicator")}</span>`;
    return;
  }

  const filtered = screenerMarket === "all"
    ? [...screenerData]
    : screenerData.filter((item) => String(item.market || "").toUpperCase() === screenerMarket);
  const ranked = oversoldScoreItems(filtered, indicators);
  renderScreenerResults(ranked, indicators);
  radarStatus.textContent = `${ranked.length} ${t("radarUpdated")}`;
}

function screenerStatusError(msg) {
  radarStatus.textContent = msg || t("radarFailed");
}

screenerMarketSelector.addEventListener("click", (e) => {
  const btn = e.target.closest(".screener-chip");
  if (!btn) return;
  setScreenerMarket(btn.dataset.market);
});

screenerScanBtn.addEventListener("click", runScreenerScan);

async function loadScreener() {
  radarStatus.textContent = t("radarScanning");
  screenerResults.innerHTML = '<span class="radar-loading">&nbsp;</span>';

  try {
    const data = await safeFetch("/api/screener");
    screenerData = Array.isArray(data.items) ? data.items : [];
    runScreenerScan();
  } catch (err) {
    screenerStatusError(err.message || t("radarFailed"));
    screenerResults.innerHTML = `<span class="radar-loading">${t("radarError")}</span>`;
  }
}

// --- FUSION MODEL SLIDER LOGIC ---
updateFusionLabels();
setFusionSliderVisible(false);

async function handleFusionSliderChange() {
  if (!fusionSlider || !lastFusionContext) return;

  const newVal = Number(fusionSlider.value);
  if (newVal === lastFusionSliderValue) return;

  const weights = getFusionWeights();
  const msg = t("fusionConfirm")
    .replace("{s}", String(weights.sentimentPct))
    .replace("{t}", String(weights.technicalPct));

  if (!window.confirm(msg)) {
    fusionSlider.value = String(lastFusionSliderValue);
    updateFusionLabels();
    return;
  }

  lastFusionSliderValue = newVal;
  await loadAiSentiment(
    lastFusionContext.ticker,
    lastFusionContext.headlines || [],
    { newsStatus: lastFusionContext.newsStatus || "ok" },
  );
}

if (fusionSlider) {
  fusionSlider.addEventListener("input", updateFusionLabels);
  fusionSlider.addEventListener("change", () => {
    void handleFusionSliderChange();
  });
}
