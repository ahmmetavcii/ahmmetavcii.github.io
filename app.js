/* ================================================================
   FinSense Dashboard – client application
   ================================================================ */

// ---------------------------------------------------------------------------
// i18n dictionary
// ---------------------------------------------------------------------------
const I18N = {
  en: {
    splashSubtagline: "Charts, news & AI signals",
    topbarTagline: "Professional market intelligence",
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
    chartEmptyTitle: "Start with any ticker",
    chartEmptySub: "Search above for charts, live news and unified AI signals.",
    chartFeaturedLabel: "Popular symbols",
    statAssets: "Tracked assets",
    statMarkets: "Markets · US · BIST · Crypto",
    statFusion: "News + technical fusion",
    featureChartTitle: "Advanced charts",
    featureChartDesc: "EMA, Bollinger Bands & multi-range views",
    featureAiTitle: "AI unified signal",
    featureAiDesc: "News sentiment blended with technical momentum",
    featureScreenerTitle: "Strategy screener",
    featureScreenerDesc: "Custom indicators across US, BIST & crypto",
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
    fusionApplyBtn: "Apply",
    fusionApplying: "Analyzing…",
    fusionReanalyzing: "Re-analyzing with new weights…",
    aiConfidence: "Synthesis Score",
    aiAnalyzing: "AI is analyzing the news...",
    aiUnavailable: "AI analysis is currently unavailable.",
    aiNoHeadlines: "No headlines available for AI analysis.",
    aiNoRelevantHeadlines:
      "Headlines were filtered for relevance; AI summary is based on technicals only.",
    nlpSentimentLabel: "NLP Sentiment",
    technicalMomentumLabel: "Technical Momentum",
    nlpFromNews: "From news (AI)",
    techFromChart: "From chart (math)",
    fusionBlendTitle: "How much each source counts",
    fusionWeightNews: "News weight: {n}%",
    fusionWeightTech: "Chart weight: {n}%",
    fusionHintBlend:
      "Final signal = news ({news}%) + chart ({tech}%). This is blend weight, not how bearish/bullish news is.",
    fusionNewsOff: "News is ignored (0% weight) — only chart indicators decide.",
    fusionTechOff: "Chart is ignored (0% weight) — only news sentiment decides.",
    fusionConflict: "News and chart disagree — move the slider toward the side you trust.",
    aiCombinedScore: "Combined score",
    scoreZoneHint: "-19 to +19 = Neutral · +20 and up = Buy · -20 and below = Sell",
    scoreHintValue: "Score {score} → {zone}",
    zoneBuy: "Buy zone",
    zoneSell: "Sell zone",
    zoneNeutral: "Neutral zone",
    newsInsightTitle: "News insight",
    synthesisExplain:
      "Result: {verdict} ({score}). News: {nlp} ({newsW}% weight). Chart: {tech} ({techW}% weight).",
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
    screenerIndicatorsLabel: "Indicators",
    screenerSelectAll: "Select all",
    screenerClearAll: "Clear",
    screenerSelectedCount: "{n} of {t} selected",
    indicatorStoch: "Stochastic",
    scanMarketBtn: "Scan Market",
    oversoldScore: "Signal",
    screenerStrongBuy: "Strong Buy",
    screenerBuy: "Buy",
    screenerStrongSell: "Strong Sell",
    screenerSell: "Sell",
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
    splashSubtagline: "Grafik, haber ve AI sinyalleri",
    topbarTagline: "Profesyonel piyasa analizi",
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
    chartEmptyTitle: "Bir sembolle baslayin",
    chartEmptySub: "Grafik, canli haber ve birlesik AI sinyalleri icin yukaridan arayin.",
    chartFeaturedLabel: "Populer semboller",
    statAssets: "Takip edilen varlik",
    statMarkets: "Piyasalar · ABD · BIST · Kripto",
    statFusion: "Haber + teknik birlesim",
    featureChartTitle: "Gelismis grafikler",
    featureChartDesc: "EMA, Bollinger ve coklu zaman araligi",
    featureAiTitle: "AI birlesik sinyal",
    featureAiDesc: "Haber duyarliligi ve teknik momentum",
    featureScreenerTitle: "Strateji tarayici",
    featureScreenerDesc: "ABD, BIST ve kripto icin ozel indikatorler",
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
    fusionApplyBtn: "Onayla",
    fusionApplying: "Analiz ediliyor…",
    fusionReanalyzing: "Yeni oranlarla tekrar analiz ediliyor…",
    aiConfidence: "Sentez Skoru",
    aiAnalyzing: "AI haberleri analiz ediyor...",
    aiUnavailable: "AI analizi \u015fu anda kullan\u0131lam\u0131yor.",
    aiNoHeadlines: "AI analizi i\u00e7in ba\u015fl\u0131k bulunamad\u0131.",
    aiNoRelevantHeadlines:
      "Haberler ilgi filtresinden ge\u00e7medi; \u00f6zet teknik g\u00f6stergelere dayan\u0131yor.",
    nlpSentimentLabel: "NLP Duyarliligi",
    technicalMomentumLabel: "Teknik Momentum",
    nlpFromNews: "Haberlerden (AI)",
    techFromChart: "Grafikten (matematik)",
    fusionBlendTitle: "Kaynaklarin etki payi",
    fusionWeightNews: "Haber agirligi: %{n}",
    fusionWeightTech: "Grafik agirligi: %{n}",
    fusionHintBlend:
      "Son sinyal = haber (%{news}) + grafik (%{tech}). Bu, karisim oranidir; haberin bearish yuzdesi degildir.",
    fusionNewsOff: "Haber devre disi (%0) — yalnizca grafik gostergeleri sayilir.",
    fusionTechOff: "Grafik devre disi (%0) — yalnizca haber duyarliligi sayilir.",
    fusionConflict: "Haber ile grafik celisiyor — guvendigin tarafa kaydirici cekin.",
    aiCombinedScore: "Birlesik skor",
    scoreZoneHint: "-19 ile +19 = Notr · +20 ve ustu = Al · -20 ve alti = Sat",
    scoreHintValue: "Skor {score} → {zone}",
    zoneBuy: "Alim bolgesi",
    zoneSell: "Satim bolgesi",
    zoneNeutral: "Notr bolge",
    newsInsightTitle: "Haber ozeti",
    synthesisExplain:
      "Sonuc: {verdict} ({score}). Haber: {nlp} (%{newsW} agirlik). Grafik: {tech} (%{techW} agirlik).",
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
    screenerIndicatorsLabel: "G\u00f6stergeler",
    screenerSelectAll: "T\u00fcm\u00fcn\u00fc se\u00e7",
    screenerClearAll: "Temizle",
    screenerSelectedCount: "{t} g\u00f6stergeden {n} se\u00e7ili",
    indicatorStoch: "Stokastik",
    scanMarketBtn: "Piyasay\u0131 Tara",
    oversoldScore: "Sinyal",
    screenerStrongBuy: "Guclu Al",
    screenerBuy: "Al",
    screenerStrongSell: "Guclu Sat",
    screenerSell: "Sat",
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
  refreshScreenerIndicatorLabels();
  updateScreenerIndicatorCount();
  buildChartFeaturedBar();
  refreshSparklineColors();
  if (lastFusionContext) renderUnifiedSignal();
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
const chartFeatured = document.getElementById("chartFeatured");
const chartFeaturedEmpty = document.getElementById("chartFeaturedEmpty");
const emptyQuickPicks = document.getElementById("emptyQuickPicks");
const chartAreaEl = document.querySelector(".chart-area");
const chartEmptyState = document.getElementById("chartEmptyState");
const chartLoadingState = document.getElementById("chartLoadingState");
const chartSparklines = document.getElementById("chartSparklines");
const priceCanvas = document.getElementById("priceChart");
const chartRange = document.getElementById("chartRange");

const newsSection = document.getElementById("newsSection");
const newsList = document.getElementById("newsList");
const aiSentimentCard = document.getElementById("aiSentimentCard");
const aiSentimentText = document.getElementById("aiSentimentText");
const aiSentimentBadge = document.getElementById("aiSentimentBadge");
const aiConfidenceValue = document.getElementById("aiConfidenceValue");
const aiConfidenceBar = document.getElementById("aiConfidenceBar");
const nlpChip = document.getElementById("nlpChip");
const techChip = document.getElementById("techChip");
const nlpSentimentValue = document.getElementById("nlpSentimentValue");
const technicalMomentumValue = document.getElementById("technicalMomentumValue");
const fusionHint = document.getElementById("fusionHint");
const aiScoreHint = document.getElementById("aiScoreHint");
const aiSynthesisExplain = document.getElementById("aiSynthesisExplain");

const radarStatus = document.getElementById("radarStatus");
const screenerMarketSelector = document.getElementById("screenerMarketSelector");
const screenerIndicatorSelector = document.getElementById("screenerIndicatorSelector");
const screenerIndicatorCount = document.getElementById("screenerIndicatorCount");
const screenerSelectAllBtn = document.getElementById("screenerSelectAllBtn");
const screenerClearAllBtn = document.getElementById("screenerClearAllBtn");
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
const fusionApplyBtn = document.getElementById("fusionApplyBtn");
const sentimentLabel = document.getElementById("sentimentLabel");
const technicalLabel = document.getElementById("technicalLabel");
let lastFusionSliderValue = fusionSlider ? Number(fusionSlider.value) : 60;

const CHART_ICON_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><polyline points="7 14 11 10 14 13 20 7"/></svg>';

const FEATURED_TICKERS = [
  { symbol: "AAPL", nameEn: "Apple", nameTr: "Apple" },
  { symbol: "NVDA", nameEn: "NVIDIA", nameTr: "NVIDIA" },
  { symbol: "MSFT", nameEn: "Microsoft", nameTr: "Microsoft" },
  { symbol: "BTC-USD", nameEn: "Bitcoin", nameTr: "Bitcoin" },
  { symbol: "ETH-USD", nameEn: "Ethereum", nameTr: "Ethereum" },
  { symbol: "THYAO.IS", nameEn: "THY", nameTr: "THY" },
  { symbol: "VOO", nameEn: "S&P 500 ETF", nameTr: "S&P 500 ETF" },
];
const SPARKLINE_TICKERS = ["BTC-USD", "NVDA", "THYAO.IS", "ETH-USD"];

let dashboardBootstrapped = false;
let sparklineCharts = [];

const SCREENER_INDICATOR_CATALOG = [
  { id: "rsi", en: "RSI (14)", tr: "RSI (14)", descEn: "Momentum — oversold below 30, overbought above 70", descTr: "Momentum — 30 altı aşırı satış, 70 üstü aşırı alım", defaultOn: true },
  { id: "macd", en: "MACD Line", tr: "MACD Çizgisi", descEn: "Trend momentum via moving-average convergence", descTr: "Hareketli ortalama yakınsaması ile trend momentumu", defaultOn: true },
  { id: "macd_hist", en: "MACD Histogram", tr: "MACD Histogram", descEn: "MACD minus signal — bullish when positive", descTr: "MACD eksi sinyal — pozitifken yükseliş", defaultOn: false },
  { id: "stoch_k", en: "Stochastic %K", tr: "Stokastik %K", descEn: "Fast stochastic oscillator (14,3)", descTr: "Hızlı stokastik osilatör (14,3)", defaultOn: true },
  { id: "stoch_d", en: "Stochastic %D", tr: "Stokastik %D", descEn: "Smoothed stochastic signal line", descTr: "Yumuşatılmış stokastik sinyal çizgisi", defaultOn: false },
  { id: "mfi", en: "MFI (14)", tr: "MFI (14)", descEn: "Money Flow Index — volume-weighted RSI", descTr: "Para Akış Endeksi — hacim ağırlıklı RSI", defaultOn: true },
  { id: "cci", en: "CCI (20)", tr: "CCI (20)", descEn: "Commodity Channel Index — mean reversion", descTr: "Emtia Kanal Endeksi — ortalamaya dönüş", defaultOn: false },
  { id: "williams_r", en: "Williams %R", tr: "Williams %R", descEn: "Overbought/oversold momentum (-100 to 0)", descTr: "Aşırı alım/satım momentumu (-100 ile 0)", defaultOn: false },
  { id: "bb_pct_b", en: "Bollinger %B", tr: "Bollinger %B", descEn: "Price position inside Bollinger Bands", descTr: "Fiyatın Bollinger bantları içindeki konumu", defaultOn: false },
  { id: "adx", en: "ADX (14)", tr: "ADX (14)", descEn: "Trend strength — higher means stronger trend", descTr: "Trend gücü — yüksek değer güçlü trend", defaultOn: false },
  { id: "roc", en: "ROC (12)", tr: "ROC (12)", descEn: "Rate of Change — price momentum %", descTr: "Değişim Oranı — fiyat momentumu %", defaultOn: false },
  { id: "atr_pct", en: "ATR %", tr: "ATR %", descEn: "Average True Range as % of price (volatility)", descTr: "Ortalama gerçek aralık, fiyatın %'si (volatilite)", defaultOn: false },
  { id: "ema20_dist", en: "Distance from EMA 20", tr: "EMA 20 uzaklığı", descEn: "% distance below/above 20-day EMA", descTr: "20 günlük EMA'dan % uzaklık", defaultOn: false },
  { id: "ema50_dist", en: "Distance from EMA 50", tr: "EMA 50 uzaklığı", descEn: "% distance below/above 50-day EMA", descTr: "50 günlük EMA'dan % uzaklık", defaultOn: false },
];

const SCREENER_INDICATORS_LS = "sf_screener_indicators";

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
  if (!splash) {
    initDashboardUI();
    return;
  }

  document.body.classList.add("splash-active");

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const holdMs = reducedMotion ? 700 : 2200;

  window.setTimeout(() => {
    splash.classList.add("is-leaving");
    splash.classList.add("is-hidden");
    document.body.classList.remove("splash-active");
    window.setTimeout(() => {
      splash.remove();
      initDashboardUI();
    }, 600);
  }, holdMs);
}

function showChartEmptyState() {
  if (!chartPlaceholder) return;
  chartPlaceholder.style.display = "";
  chartPlaceholder.classList.remove("error");
  if (chartAreaEl) chartAreaEl.classList.add("is-empty");
  if (chartEmptyState) chartEmptyState.classList.remove("hidden");
  if (chartLoadingState) chartLoadingState.classList.add("hidden");
  if (chartFeatured) chartFeatured.classList.add("hidden");
  if (emptyQuickPicks) emptyQuickPicks.classList.remove("hidden");
  if (chartSparklines) chartSparklines.hidden = true;
  priceCanvas.style.display = "none";
  if (chartRange) chartRange.hidden = true;
}

function hideEmptyDashboardExtras() {
  if (chartAreaEl) chartAreaEl.classList.remove("is-empty");
  if (emptyQuickPicks) emptyQuickPicks.classList.add("hidden");
}

function showChartLoadingState() {
  if (!chartPlaceholder) return;
  hideEmptyDashboardExtras();
  chartPlaceholder.style.display = "grid";
  chartPlaceholder.classList.remove("error");
  if (chartEmptyState) chartEmptyState.classList.add("hidden");
  if (chartLoadingState) {
    chartLoadingState.classList.remove("hidden");
    const loadMsg = chartLoadingState.querySelector("p");
    if (loadMsg) loadMsg.textContent = t("loadingData");
  }
  priceCanvas.style.display = "none";
}

function featuredTickerName(item) {
  return currentLang === "tr" ? item.nameTr : item.nameEn;
}

function buildFeaturedButtons(container) {
  if (!container) return;
  container.innerHTML = `<span class="chart-featured-label">${t("chartFeaturedLabel")}</span>`;
  const group = document.createElement("div");
  group.className = "chart-featured-group";
  group.setAttribute("role", "group");

  FEATURED_TICKERS.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "chart-featured-btn";
    btn.dataset.ticker = item.symbol;
    btn.title = item.symbol;
    const market =
      item.symbol.includes("-USD") ? "CRYPTO" : item.symbol.endsWith(".IS") ? "BIST" : "US";
    btn.innerHTML = `<span class="chart-featured-symbol">${item.symbol}</span><span class="chart-featured-name">${featuredTickerName(item)}</span>${marketBadgeHTML(market)}`;
    btn.addEventListener("click", () => {
      tickerInput.value = item.symbol;
      analyzeTicker(item.symbol);
    });
    group.appendChild(btn);
  });

  container.appendChild(group);
}

function buildChartFeaturedBar() {
  buildFeaturedButtons(chartFeaturedEmpty);
  buildFeaturedButtons(chartFeatured);
  updateFeaturedTickerActive(lastChartTicker);
}

function updateFeaturedTickerActive(ticker) {
  const sym = String(ticker || "").toUpperCase();
  [chartFeatured, chartFeaturedEmpty].forEach((wrap) => {
    if (!wrap) return;
    wrap.querySelectorAll(".chart-featured-btn").forEach((btn) => {
      btn.classList.toggle("active", sym && btn.dataset.ticker === sym);
    });
  });
}

function initDashboardUI() {
  if (dashboardBootstrapped) return;
  dashboardBootstrapped = true;
  buildChartFeaturedBar();
  showChartEmptyState();
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

async function analyzeTicker(explicitTicker) {
  const normalizedTicker = (explicitTicker != null ? String(explicitTicker) : tickerInput.value)
    .trim()
    .toUpperCase();
  if (!normalizedTicker) {
    tickerInput.focus();
    return;
  }
  hideSuggestions();
  tickerInput.value = normalizedTicker;
  updateFeaturedTickerActive(normalizedTicker);
  setAnalyzing(true);
  showChartLoadingState();
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
  refreshSparklineColors();
}

function destroySparklineCharts() {
  sparklineCharts.forEach((ch) => {
    try {
      ch.destroy();
    } catch {
      /* ignore */
    }
  });
  sparklineCharts = [];
}

function refreshSparklineColors() {
  const c = getChartColors();
  const accent = getComputedStyle(document.body).getPropertyValue("--accent").trim() || "#3b82f6";
  sparklineCharts.forEach((ch) => {
    if (!ch || !ch.data.datasets[0]) return;
    ch.data.datasets[0].borderColor = accent;
    ch.options.scales.x.ticks.color = c.tick;
    ch.options.scales.x.grid.color = "transparent";
    ch.options.scales.y.ticks.color = c.tick;
    ch.options.scales.y.grid.color = c.grid;
    ch.update("none");
  });
}

function formatSparklinePrice(ticker, value) {
  const n = Number(value);
  if (!Number.isFinite(n)) return "—";
  const digits = ticker.endsWith(".IS") ? 2 : n >= 1000 ? 2 : n >= 1 ? 2 : 4;
  const prefix = ticker.endsWith(".IS") ? "₺" : "$";
  return `${prefix}${n.toLocaleString(undefined, { minimumFractionDigits: digits, maximumFractionDigits: digits })}`;
}

async function loadSparklinePreviews() {
  if (!chartSparklines || typeof Chart === "undefined") return;

  destroySparklineCharts();
  chartSparklines.innerHTML = "";
  chartSparklines.hidden = false;

  const previews = SPARKLINE_TICKERS.filter((tk) => tk !== lastChartTicker).slice(0, 4);
  if (!previews.length) {
    chartSparklines.hidden = true;
    return;
  }

  const c = getChartColors();
  const accent = getComputedStyle(document.body).getPropertyValue("--accent").trim() || "#3b82f6";

  await Promise.all(
    previews.map(async (ticker) => {
      const card = document.createElement("button");
      card.type = "button";
      card.className = "sparkline-card";
      card.dataset.ticker = ticker;
      const market =
        ticker.includes("-USD") ? "CRYPTO" : ticker.endsWith(".IS") ? "BIST" : "US";
      card.innerHTML = `
        <div class="sparkline-head">
          <span class="sparkline-ticker">${ticker} ${marketBadgeHTML(market)}</span>
          <span class="sparkline-price">…</span>
        </div>
        <div class="sparkline-canvas-wrap"><canvas aria-hidden="true"></canvas></div>
      `;
      card.addEventListener("click", () => {
        tickerInput.value = ticker;
        analyzeTicker(ticker);
      });
      chartSparklines.appendChild(card);

      const canvas = card.querySelector("canvas");
      const priceEl = card.querySelector(".sparkline-price");

      try {
        const data = await safeFetch(
          `/api/chart?ticker=${encodeURIComponent(ticker)}&period=1mo`,
        );
        const prices = Array.isArray(data.prices) ? data.prices : [];
        const last = prices.length ? prices[prices.length - 1] : null;
        if (priceEl) priceEl.textContent = formatSparklinePrice(ticker, last);

        const ctx = canvas.getContext("2d");
        const ch = new Chart(ctx, {
          type: "line",
          data: {
            labels: data.dates || [],
            datasets: [
              {
                label: ticker,
                data: prices,
                borderColor: accent,
                backgroundColor: "transparent",
                borderWidth: 1.5,
                pointRadius: 0,
                tension: 0.35,
                spanGaps: true,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false,
            plugins: { legend: { display: false }, tooltip: { enabled: false } },
            scales: {
              x: {
                display: false,
                ticks: { color: c.tick },
                grid: { color: "transparent" },
              },
              y: {
                display: false,
                ticks: { color: c.tick },
                grid: { color: c.grid },
              },
            },
          },
        });
        sparklineCharts.push(ch);
      } catch {
        if (priceEl) priceEl.textContent = "—";
        card.classList.add("sparkline-card-error");
      }
    }),
  );
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
  hideEmptyDashboardExtras();
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
              font: { family: "Plus Jakarta Sans", size: 10 },
              color: c.tick,
              filter: (item) => !item.text.includes("BB "),
            },
          },
          tooltip: {
            backgroundColor: c.tooltipBg,
            titleColor: c.text,
            titleFont: { family: "Plus Jakarta Sans", weight: "600", size: 13 },
            bodyColor: c.textSec,
            bodyFont: { family: "Inter", size: 12 },
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
            ticks: { color: c.tick, maxTicksLimit: 8, font: { family: "Inter", size: 11 } },
            grid: { color: c.grid },
            border: { color: "transparent" },
          },
          y: {
            ticks: {
              color: c.tick,
              font: { family: "Inter", size: 11 },
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
    if (chartFeatured) chartFeatured.classList.remove("hidden");
    await loadSparklinePreviews().catch(() => {});
    if (chartSparklines && sparklineCharts.length) {
      const previews = SPARKLINE_TICKERS.filter((tk) => tk !== ticker).slice(0, 4);
      chartSparklines.querySelectorAll(".sparkline-card").forEach((card) => {
        const tk = card.dataset.ticker;
        card.hidden = !previews.includes(tk);
      });
      chartSparklines.hidden = !chartSparklines.querySelector(".sparkline-card:not([hidden])");
    }
  } catch (err) {
    const msg = String(err && err.message ? err.message : "");
    const likelyInvalid = /not found|unavailable|invalid|404/i.test(msg);
    hideEmptyDashboardExtras();
    chartSubtitle.textContent = likelyInvalid ? t("tickerNotFound") : (msg || t("chartUnavail"));
    chartPlaceholder.style.display = "grid";
    chartPlaceholder.classList.add("error");
    if (chartEmptyState) chartEmptyState.classList.add("hidden");
    if (chartLoadingState) {
      chartLoadingState.classList.remove("hidden");
      const loadMsg = chartLoadingState.querySelector("p");
      if (loadMsg) loadMsg.textContent = likelyInvalid ? t("tickerNotFound") : t("chartLoadErr");
    }
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
  setSignalChipTone(nlpChip, "neutral");
  setSignalChipTone(techChip, "neutral");
  if (fusionHint) fusionHint.textContent = "";
  if (aiSynthesisExplain) aiSynthesisExplain.textContent = "";
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

function scoreToTone(score) {
  const s = Number(score);
  if (s > 0.1) return "bullish";
  if (s < -0.1) return "bearish";
  return "neutral";
}

function setSignalChipTone(chipEl, tone) {
  if (!chipEl) return;
  chipEl.classList.remove("bullish", "bearish", "neutral");
  chipEl.classList.add(tone || "neutral");
}

function detectSignalConflict(nlpScore, technicalScore) {
  const n = Number(nlpScore);
  const t = Number(technicalScore);
  if (n > 0.1 && t < -0.1) return true;
  if (n < -0.1 && t > 0.1) return true;
  return false;
}

function buildFusionHint(weights, conflict) {
  const parts = [
    t("fusionHintBlend")
      .replace("{news}", String(weights.sentimentPct))
      .replace("{tech}", String(weights.technicalPct)),
  ];
  if (weights.sentimentPct === 0) parts.push(t("fusionNewsOff"));
  if (weights.technicalPct === 0) parts.push(t("fusionTechOff"));
  if (conflict) parts.push(t("fusionConflict"));
  return parts.join(" ");
}

function buildScoreHint(synthesis) {
  return t("scoreHintValue")
    .replace("{score}", synthesis.scoreText)
    .replace("{zone}", synthesis.zoneLabel);
}

function buildSynthesisExplain(ctx, synthesis, weights) {
  const conflict = detectSignalConflict(ctx.nlpScore, ctx.technicalScore);
  let text = t("synthesisExplain")
    .replace("{verdict}", synthesis.label)
    .replace("{score}", synthesis.scoreText)
    .replace("{nlp}", ctx.nlpLabel)
    .replace("{newsW}", String(weights.sentimentPct))
    .replace("{tech}", ctx.technicalLabelText)
    .replace("{techW}", String(weights.technicalPct));
  if (conflict) text += ` ${t("fusionConflict")}`;
  return text;
}

function updateFusionLabels() {
  if (!sentimentLabel || !technicalLabel) return;
  const weights = getFusionWeights();
  sentimentLabel.textContent = t("fusionWeightNews").replace("{n}", String(weights.sentimentPct));
  technicalLabel.textContent = t("fusionWeightTech").replace("{n}", String(weights.technicalPct));
  if (fusionHint && lastFusionContext) {
    fusionHint.textContent = buildFusionHint(
      weights,
      detectSignalConflict(lastFusionContext.nlpScore, lastFusionContext.technicalScore),
    );
  }
}

function renderUnifiedSignal() {
  if (!lastFusionContext) return;
  const ctx = lastFusionContext;
  const weights = getFusionWeights();
  const synthesis = synthesisFromScores(ctx.nlpScore, ctx.technicalScore);
  const conflict = detectSignalConflict(ctx.nlpScore, ctx.technicalScore);

  aiSentimentCard.classList.remove("loading");
  applyConfidenceVisuals(
    synthesis.className.toUpperCase(),
    Math.round(Math.abs(Number(synthesis.rawValue))),
  );
  aiSentimentBadge.textContent = synthesis.label;
  aiConfidenceValue.textContent = synthesis.scoreText;
  aiConfidenceBar.style.width = synthesis.barWidth;
  nlpSentimentValue.textContent = ctx.nlpLabel;
  technicalMomentumValue.textContent = ctx.technicalLabelText;
  setSignalChipTone(nlpChip, scoreToTone(ctx.nlpScore));
  setSignalChipTone(techChip, scoreToTone(ctx.technicalScore));

  updateFusionLabels();
  if (aiScoreHint) {
    aiScoreHint.textContent = `${buildScoreHint(synthesis)} · ${t("scoreZoneHint")}`;
  }
  if (aiSynthesisExplain) {
    aiSynthesisExplain.textContent = buildSynthesisExplain(ctx, synthesis, weights);
  }
  aiSentimentText.textContent = ctx.analysis;
}

function updateFusionApplyButton() {
  if (!fusionApplyBtn || !fusionSlider) return;
  const pending =
    !!lastFusionContext && Number(fusionSlider.value) !== lastFusionSliderValue;
  fusionApplyBtn.classList.toggle("hidden", !pending);
  if (!pending && !fusionApplyBtn.disabled) {
    fusionApplyBtn.textContent = t("fusionApplyBtn");
  }
}

function setFusionReanalyzing() {
  aiSentimentCard.classList.add("loading");
  aiSentimentText.textContent = t("fusionReanalyzing");
  if (fusionApplyBtn) {
    fusionApplyBtn.disabled = true;
    fusionApplyBtn.classList.remove("hidden");
    fusionApplyBtn.textContent = t("fusionApplying");
  }
}

function resetFusionApplyButton() {
  if (!fusionApplyBtn) return;
  fusionApplyBtn.disabled = false;
  fusionApplyBtn.textContent = t("fusionApplyBtn");
  updateFusionApplyButton();
}

function applyFusionSynthesis() {
  renderUnifiedSignal();
}

function synthesisFromScores(nlpScore, technicalScore) {
  const { sentiment: sw, technical: tw } = getFusionWeights();
  const value = (nlpScore * sw + technicalScore * tw) * 100;
  const rounded = Math.round(value);
  let label;
  let className;
  let zoneLabel;
  if (value >= 20) {
    label = t("synthesisStrongBuy");
    className = "bullish";
    zoneLabel = t("zoneBuy");
  } else if (value <= -20) {
    label = t("synthesisStrongSell");
    className = "bearish";
    zoneLabel = t("zoneSell");
  } else {
    label = t("synthesisNeutral");
    className = "neutral";
    zoneLabel = t("zoneNeutral");
  }
  const scoreText = rounded > 0 ? `+${rounded}` : `${rounded}`;
  return {
    label,
    className,
    scoreText,
    barWidth: `${Math.min(100, Math.round(Math.abs(value)))}%`,
    rawValue: value,
    zoneLabel,
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
  resetFusionApplyButton();
  renderUnifiedSignal();
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

function getScreenerIndicatorMeta(id) {
  const item = SCREENER_INDICATOR_CATALOG.find((x) => x.id === id);
  if (!item) return { name: id, desc: "" };
  const tr = currentLang === "tr";
  return {
    name: tr ? item.tr : item.en,
    desc: tr ? item.descTr : item.descEn,
  };
}

function getDefaultScreenerIndicatorIds() {
  return SCREENER_INDICATOR_CATALOG.filter((i) => i.defaultOn).map((i) => i.id);
}

function loadSavedScreenerIndicators() {
  try {
    const raw = localStorage.getItem(SCREENER_INDICATORS_LS);
    const parsed = raw ? JSON.parse(raw) : null;
    if (Array.isArray(parsed) && parsed.length) {
      return parsed.filter((id) => SCREENER_INDICATOR_CATALOG.some((i) => i.id === id));
    }
  } catch {
    /* ignore */
  }
  return getDefaultScreenerIndicatorIds();
}

function saveScreenerIndicators() {
  localStorage.setItem(SCREENER_INDICATORS_LS, JSON.stringify(getSelectedIndicators()));
}

function updateScreenerIndicatorCount() {
  if (!screenerIndicatorCount) return;
  const n = getSelectedIndicators().length;
  const total = SCREENER_INDICATOR_CATALOG.length;
  screenerIndicatorCount.textContent = t("screenerSelectedCount")
    .replace("{n}", String(n))
    .replace("{t}", String(total));
}

function refreshScreenerIndicatorLabels() {
  if (!screenerIndicatorSelector) return;
  screenerIndicatorSelector.querySelectorAll(".screener-indicator-option").forEach((label) => {
    const input = label.querySelector('input[type="checkbox"]');
    if (!input) return;
    const meta = getScreenerIndicatorMeta(input.value);
    const strong = label.querySelector("strong");
    const small = label.querySelector("small");
    if (strong) strong.textContent = meta.name;
    if (small) small.textContent = meta.desc;
  });
}

function buildScreenerIndicatorList() {
  if (!screenerIndicatorSelector) return;
  const saved = new Set(loadSavedScreenerIndicators());
  screenerIndicatorSelector.innerHTML = "";

  SCREENER_INDICATOR_CATALOG.forEach((item) => {
    const meta = getScreenerIndicatorMeta(item.id);
    const label = document.createElement("label");
    label.className = "screener-indicator-option";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = item.id;
    input.checked = saved.has(item.id);

    const text = document.createElement("span");
    text.className = "screener-indicator-option-text";
    text.innerHTML = `<strong></strong><small></small>`;
    text.querySelector("strong").textContent = meta.name;
    text.querySelector("small").textContent = meta.desc;

    input.addEventListener("change", () => {
      updateScreenerIndicatorCount();
      saveScreenerIndicators();
    });

    label.appendChild(input);
    label.appendChild(text);
    screenerIndicatorSelector.appendChild(label);
  });

  updateScreenerIndicatorCount();
}

function getIndicatorLabel(indicatorId) {
  return getScreenerIndicatorMeta(indicatorId).name;
}

function getSelectedIndicators() {
  if (!screenerIndicatorSelector) return [];
  const checks = screenerIndicatorSelector.querySelectorAll('input[type="checkbox"]');
  return [...checks].filter((c) => c.checked).map((c) => c.value);
}

function formatIndicatorValue(indicator, value) {
  const num = Number(value);
  if (!Number.isFinite(num)) return "-";
  if (indicator === "macd" || indicator === "macd_hist") return num.toFixed(4);
  if (indicator === "roc" || indicator === "ema20_dist" || indicator === "ema50_dist" || indicator === "atr_pct") {
    return `${num.toFixed(2)}%`;
  }
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

  if (indicator === "stoch_k" || indicator === "stoch_d" || indicator === "mfi") {
    if (value < 20) return { label: t("indicatorOversold"), className: "bullish" };
    if (value > 80) return { label: t("indicatorOverbought"), className: "bearish" };
    return { label: t("indicatorBalanced"), className: "neutral" };
  }

  if (indicator === "williams_r") {
    if (value < -80) return { label: t("indicatorOversold"), className: "bullish" };
    if (value > -20) return { label: t("indicatorOverbought"), className: "bearish" };
    return { label: t("indicatorBalanced"), className: "neutral" };
  }

  if (indicator === "cci") {
    if (value < -100) return { label: t("indicatorOversold"), className: "bullish" };
    if (value > 100) return { label: t("indicatorOverbought"), className: "bearish" };
    return { label: t("indicatorBalanced"), className: "neutral" };
  }

  if (indicator === "bb_pct_b") {
    if (value < 20) return { label: t("indicatorOversold"), className: "bullish" };
    if (value > 80) return { label: t("indicatorOverbought"), className: "bearish" };
    return { label: t("indicatorBalanced"), className: "neutral" };
  }

  if (indicator === "macd" || indicator === "macd_hist") {
    if (value < 0) return { label: t("indicatorBearish"), className: "bearish" };
    if (value > 0) return { label: t("indicatorBullish"), className: "bullish" };
    return { label: t("indicatorBalanced"), className: "neutral" };
  }

  if (indicator === "roc" || indicator === "ema20_dist" || indicator === "ema50_dist") {
    if (value < -2) return { label: t("indicatorBearish"), className: "bearish" };
    if (value > 2) return { label: t("indicatorBullish"), className: "bullish" };
    return { label: t("indicatorBalanced"), className: "neutral" };
  }

  if (indicator === "adx") {
    if (value >= 25) return { label: t("indicatorBullish"), className: "bullish" };
    return { label: t("indicatorBalanced"), className: "neutral" };
  }

  return { label: t("indicatorBalanced"), className: "neutral" };
}

const SCREENER_RESULTS_MAX = 12;
const SCREENER_METRICS_ON_CARD = 3;

function computeOpportunitySignal(item, indicators) {
  let bullish = 0;
  let bearish = 0;
  let total = 0;
  indicators.forEach((ind) => {
    const raw = item[ind];
    if (!Number.isFinite(Number(raw))) return;
    total += 1;
    const m = indicatorInterpretation(ind, raw);
    if (m.className === "bullish") bullish += 1;
    else if (m.className === "bearish") bearish += 1;
  });

  if (!total) {
    return screenerSignalFromTrade(item);
  }

  if (bullish > bearish) {
    const buyRatio = bullish / total;
    if (buyRatio >= 0.5) {
      return { text: t("screenerStrongBuy"), className: "opp-strong-buy" };
    }
    return { text: t("screenerBuy"), className: "opp-buy" };
  }

  if (bearish > bullish) {
    const sellRatio = bearish / total;
    if (sellRatio >= 0.5) {
      return { text: t("screenerStrongSell"), className: "opp-strong-sell" };
    }
    return { text: t("screenerSell"), className: "opp-sell" };
  }

  // Equal bullish/bearish counts — lean on oversold rank or backend trade signal.
  if (Number.isFinite(Number(item._score)) && Number(item._score) <= 0.45) {
    return { text: t("screenerBuy"), className: "opp-buy" };
  }
  if (Number.isFinite(Number(item._score)) && Number(item._score) >= 0.55) {
    return { text: t("screenerSell"), className: "opp-sell" };
  }
  return screenerSignalFromTrade(item);
}

function screenerSignalFromTrade(item) {
  const sig = String(item.signal || "HOLD").toUpperCase();
  if (sig === "BUY") {
    return { text: t("screenerBuy"), className: "opp-buy" };
  }
  if (sig === "SELL") {
    return { text: t("screenerSell"), className: "opp-sell" };
  }
  const score = Number(item._score);
  if (Number.isFinite(score) && score <= 0.5) {
    return { text: t("screenerBuy"), className: "opp-buy" };
  }
  return { text: t("screenerSell"), className: "opp-sell" };
}

function shortIndicatorLabel(indicatorId) {
  const name = getIndicatorLabel(indicatorId);
  const head = name.split("(")[0].trim();
  if (head.length <= 8) return head;
  return head.slice(0, 7) + "…";
}

function oversoldScoreItems(items, indicators, rankPool) {
  const pool = rankPool && rankPool.length ? rankPool : items;
  const rankMaps = {};
  indicators.forEach((ind) => {
    const sorted = [...pool]
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

  const shown = items.slice(0, SCREENER_RESULTS_MAX);
  const extraCount = indicators.length - SCREENER_METRICS_ON_CARD;

  shown.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "screener-result-card";
    el.style.animationDelay = `${i * 0.03}s`;
    const visibleIndicators = indicators.slice(0, SCREENER_METRICS_ON_CARD);
    const metrics = visibleIndicators
      .map((ind) => {
        const label = shortIndicatorLabel(ind);
        const val = formatIndicatorValue(ind, item[ind]);
        const meaning = indicatorInterpretation(ind, item[ind]);
        return `<span class="screener-metric" title="${getIndicatorLabel(ind)} ${val} — ${meaning.label}"><span class="screener-metric-main"><b>${label}</b> ${val}</span><span class="metric-badge ${meaning.className}">${meaning.label}</span></span>`;
      })
      .join("");
    const moreMetrics =
      extraCount > 0
        ? `<span class="screener-metric screener-metric-more">+${extraCount}</span>`
        : "";
    const opportunity = computeOpportunitySignal(item, indicators);
    const price = Number(item.current_price || 0);
    const priceText = Number.isFinite(price) ? price.toFixed(price >= 100 ? 2 : 4) : "-";
    const currency = String(item.market || "").toUpperCase() === "BIST" ? "₺" : "$";

    el.innerHTML = `
      <div class="screener-result-head">
        <span class="screener-result-ticker">${item.ticker} ${marketBadgeHTML(item.market)}</span>
        <span class="screener-result-price">${currency}${priceText}</span>
      </div>
      <div class="screener-result-metrics">${metrics}${moreMetrics}</div>
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
  const ranked = oversoldScoreItems(filtered, indicators, screenerData);
  renderScreenerResults(ranked, indicators);
  const shown = Math.min(ranked.length, SCREENER_RESULTS_MAX);
  radarStatus.textContent =
    ranked.length > shown
      ? `${shown} / ${ranked.length} ${t("radarUpdated")}`
      : `${ranked.length} ${t("radarUpdated")}`;
}

function screenerStatusError(msg) {
  radarStatus.textContent = msg || t("radarFailed");
}

screenerMarketSelector.addEventListener("click", (e) => {
  const btn = e.target.closest(".screener-chip");
  if (!btn) return;
  setScreenerMarket(btn.dataset.market);
  if (screenerData.length) runScreenerScan();
});

screenerScanBtn.addEventListener("click", runScreenerScan);

if (screenerSelectAllBtn) {
  screenerSelectAllBtn.addEventListener("click", () => {
    screenerIndicatorSelector.querySelectorAll('input[type="checkbox"]').forEach((c) => {
      c.checked = true;
    });
    updateScreenerIndicatorCount();
    saveScreenerIndicators();
  });
}

if (screenerClearAllBtn) {
  screenerClearAllBtn.addEventListener("click", () => {
    screenerIndicatorSelector.querySelectorAll('input[type="checkbox"]').forEach((c) => {
      c.checked = false;
    });
    updateScreenerIndicatorCount();
    saveScreenerIndicators();
  });
}

buildScreenerIndicatorList();

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
updateFusionApplyButton();

async function applyFusionWeights() {
  if (!fusionSlider || !lastFusionContext) return;

  const newVal = Number(fusionSlider.value);
  if (newVal === lastFusionSliderValue) return;

  setFusionReanalyzing();
  try {
    await loadAiSentiment(
      lastFusionContext.ticker,
      lastFusionContext.headlines || [],
      { newsStatus: lastFusionContext.newsStatus || "ok" },
    );
  } catch {
    aiSentimentCard.classList.remove("loading");
    aiSentimentText.textContent = t("aiUnavailable");
    resetFusionApplyButton();
  }
}

if (fusionSlider) {
  fusionSlider.addEventListener("input", () => {
    updateFusionLabels();
    updateFusionApplyButton();
  });
}

if (fusionApplyBtn) {
  fusionApplyBtn.addEventListener("click", () => {
    void applyFusionWeights();
  });
}
