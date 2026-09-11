/**
 * EPI Earnings & Growth Calculator
 * Official ENIPAY Web3 / Fintech MVP Calculator
 *
 * Simulates daily earnings converted into EPI tokens and held over a selected period,
 * with real-time on-chain EPI price lookup from ENI Chain DSwap DEX.
 */

// ==========================================
// 1. CONSTANTS & PARAMETERS
// ==========================================
const EPI_ALLOCATION = 0.90; // Fixed 90%
const FIXED_DAILY_PROFIT_RATE = 0.8; // Fixed 0.8% per day (non-compounding)
const DEFAULT_EPI_DAILY_GROWTH = 1.0; // Default 1.0% per day (user-adjustable)
const HOLDING_PERIODS = [7, 15, 30, 60, 90, 180, 365, 438];

// Canonical Token & On-Chain Addresses on ENI Chain
const EPI_CONTRACT_ADDRESS = "0x3230a5d7A96225c0ab89Ff0f654dBAFc52DcE1a7";
const EPI_PAIR_ADDRESS = "0xaf90ddc982b666c64f29f5bdf2a6b83a0ae763ba"; // DSwap EPI/USDT Pair
const ENI_RPC_URL = "https://rpc.eniac.network";

// State
const calculatorState = {
  investmentAmount: 300,
  dailyProfitRate: 0.8, // Fixed at 0.8%
  epiDailyGrowth: 1.0, // percentage (default 1.0%, user adjustable)
  holdingPeriod: 30, // days
  currentPrice: 0.103, // fallback initial price
  priceLoaded: false,
  priceLoading: false,
  priceError: null,
  lastUpdated: null,
  source: "",
  isDevMock: false,
  tableExpanded: false,
  chartHoverIndex: -1
};

// ==========================================
// 2. ISOLATED PRICE PROVIDER SERVICE
// ==========================================
/**
 * Retrieves the current live EPI price dynamically from the official ENI Chain DEX pool.
 * Does NOT silently fabricate live prices.
 */
async function getCurrentEpiPrice() {
  // Check developer mock flag if explicitly enabled for local offline testing
  if (typeof window !== "undefined" && window.__DEV_MOCK_EPI_PRICE__) {
    return {
      price: Number(window.__DEV_MOCK_EPI_PRICE__),
      source: "DEV_MOCK (Simulated)",
      timestamp: new Date()
    };
  }

  // 1. Direct on-chain call to official ENI Chain RPC (DSwap getReserves)
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(ENI_RPC_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jsonrpc: "2.0",
        method: "eth_call",
        params: [{ to: EPI_PAIR_ADDRESS, data: "0x0902f1ac" }, "latest"],
        id: 1
      }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const json = await res.json();
      if (json && json.result && json.result.length >= 130) {
        const hex = json.result.slice(2);
        const reserve0 = BigInt("0x" + hex.slice(0, 64)); // EPI reserve (18 decimals)
        const reserve1 = BigInt("0x" + hex.slice(64, 128)); // USDT reserve (18 decimals)
        if (reserve0 > 0n && reserve1 > 0n) {
          const price = Number(reserve1) / Number(reserve0);
          if (price > 0 && price < 1000) {
            return {
              price: price,
              source: "ENI Chain On-Chain DEX (DSwap)",
              timestamp: new Date()
            };
          }
        }
      }
    }
  } catch (err) {
    console.warn("Direct RPC fetch failed, falling back to DEX indexer:", err);
  }

  // 2. Secondary fallback: GeckoTerminal Pool Indexer for ENI Chain
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);
    const res = await fetch(`https://api.geckoterminal.com/api/v2/networks/eni/pools/${EPI_PAIR_ADDRESS}`, {
      headers: { "Accept": "application/json;version=20230302" },
      signal: controller.signal
    });
    clearTimeout(timeoutId);

    if (res.ok) {
      const data = await res.json();
      const pStr = data?.data?.attributes?.base_token_price_usd;
      if (pStr) {
        const price = parseFloat(pStr);
        if (!isNaN(price) && price > 0) {
          return {
            price: price,
            source: "GeckoTerminal (ENI Chain)",
            timestamp: new Date()
          };
        }
      }
    }
  } catch (err) {
    console.warn("GeckoTerminal fallback failed:", err);
  }

  throw new Error("Unable to retrieve live EPI price.");
}

// ==========================================
// 3. CORE BUSINESS LOGIC (INDEPENDENT FUNCTIONS)
// ==========================================
/**
 * Daily profit calculated from ORIGINAL investment amount (does NOT compound).
 * Daily profit rate is fixed at 1.0% per day.
 */
function calculateDailyProfit(investmentAmount, dailyProfitRate = FIXED_DAILY_PROFIT_RATE) {
  const rate = Number(dailyProfitRate) / 100;
  return Number(investmentAmount) * rate;
}

/**
 * Expected EPI Price on Day N: P0 * (1 + g)^(N - 1)
 * dailyGrowthRate is in decimal (e.g. 0.01 for 1% daily growth)
 */
function calculateEpiPrice(currentPrice, day, dailyGrowthRate = 0.01) {
  if (day <= 1) return Number(currentPrice);
  return Number(currentPrice) * Math.pow(1 + Number(dailyGrowthRate), day - 1);
}

/**
 * Daily USDT used to purchase EPI: Daily Profit * 90%
 */
function calculateDailyEpiPurchase(dailyProfit, allocation = EPI_ALLOCATION) {
  return Number(dailyProfit) * Number(allocation);
}

/**
 * Daily EPI tokens purchased: Daily EPI USDT / Day's EPI Price
 */
function calculateDailyEpiTokens(dailyEpiUsdt, epiPrice) {
  if (!epiPrice || epiPrice <= 0) return 0;
  return Number(dailyEpiUsdt) / Number(epiPrice);
}

/**
 * Full simulation projection over holdingPeriod
 * @param {number} investmentAmount - Investment in USDT
 * @param {number} dailyProfitRate - Daily profit percentage (fixed at 1.0%)
 * @param {number} holdingPeriod - Days
 * @param {number} currentEpiPrice - Live price in USDT
 * @param {number} epiDailyGrowth - User-adjustable percentage (e.g. 1.0 for 1.0%)
 */
function calculateProjection(
  investmentAmount,
  dailyProfitRate = FIXED_DAILY_PROFIT_RATE,
  holdingPeriod = 30,
  currentEpiPrice = 0.103,
  epiDailyGrowth = DEFAULT_EPI_DAILY_GROWTH
) {
  const inv = Math.max(0, Number(investmentAmount) || 0);
  const pRate = Number(dailyProfitRate) || FIXED_DAILY_PROFIT_RATE;
  const days = Math.max(1, parseInt(holdingPeriod, 10) || 30);
  const p0 = Math.max(0.000001, Number(currentEpiPrice) || 0.103);
  const growthRate = Math.max(0, Number(epiDailyGrowth) || 0) / 100; // e.g. 1.0 -> 0.01

  const dailyProfit = calculateDailyProfit(inv, pRate);
  const dailyEpiUsdt = calculateDailyEpiPurchase(dailyProfit, EPI_ALLOCATION);
  const dailyRetainedUsdt = dailyProfit * (1 - EPI_ALLOCATION);

  let cumulativeEpi = 0;
  const dailyBreakdown = [];

  for (let i = 1; i <= days; i++) {
    const dayPrice = calculateEpiPrice(p0, i, growthRate);
    const epiPurchased = calculateDailyEpiTokens(dailyEpiUsdt, dayPrice);
    cumulativeEpi += epiPurchased;
    const dayValue = cumulativeEpi * dayPrice;

    dailyBreakdown.push({
      day: i,
      price: dayPrice,
      dailyProfit: dailyProfit,
      dailyEpiUsdt: dailyEpiUsdt,
      dailyRetainedUsdt: dailyRetainedUsdt,
      epiPurchased: epiPurchased,
      totalEpi: cumulativeEpi,
      totalEpiValue: dayValue
    });
  }

  const finalEpiPrice = calculateEpiPrice(p0, days, growthRate);
  const finalEpiValue = cumulativeEpi * finalEpiPrice;
  const totalRetainedCash = dailyRetainedUsdt * days;
  const totalEarnedValue = finalEpiValue + totalRetainedCash;
  const originalEpiEarnings = dailyEpiUsdt * days;
  const appreciation = finalEpiValue - originalEpiEarnings;
  const appreciationPct = originalEpiEarnings > 0 ? (appreciation / originalEpiEarnings) * 100 : 0;
  const netGain = totalEarnedValue - inv;

  return {
    investmentAmount: inv,
    dailyProfitRate: pRate,
    epiDailyGrowth: Number(epiDailyGrowth),
    holdingPeriod: days,
    currentPrice: p0,
    dailyProfit: dailyProfit,
    dailyEpiUsdt: dailyEpiUsdt,
    dailyRetainedUsdt: dailyRetainedUsdt,
    totalEpi: cumulativeEpi,
    finalEpiPrice: finalEpiPrice,
    finalEpiValue: finalEpiValue,
    totalRetainedCash: totalRetainedCash,
    totalEarnedValue: totalEarnedValue,
    originalEpiEarnings: originalEpiEarnings,
    appreciation: appreciation,
    appreciationPct: appreciationPct,
    netGain: netGain,
    dailyBreakdown: dailyBreakdown
  };
}

// ==========================================
// 4. FORMATTING UTILITIES
// ==========================================
function formatUsdt(num) {
  if (isNaN(num)) return "$0.00";
  return "$" + Number(num).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function formatEpiPrice(num) {
  if (isNaN(num)) return "$0.000000";
  if (num < 1) {
    return "$" + Number(num).toFixed(6);
  }
  return "$" + Number(num).toFixed(4);
}

function formatEpiAmount(num) {
  if (isNaN(num)) return "0.0000";
  return Number(num).toLocaleString("en-US", {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4
  });
}

function getI18nText(key, fallback) {
  try {
    const lang = localStorage.getItem("enipay_lang") || (window.i18n ? window.i18n.currentLang : "zh");
    if (window.translations && window.translations[lang] && window.translations[lang][key] !== undefined && window.translations[lang][key] !== null) {
      return window.translations[lang][key];
    }
  } catch (e) {}
  return fallback;
}

// ==========================================
// 5. UI CONTROLLER & RENDERING
// ==========================================
async function refreshEpiPrice() {
  const priceDisplay = document.getElementById("epi-live-price-val");
  const timeDisplay = document.getElementById("epi-price-updated-time");
  const statusBadge = document.getElementById("epi-price-status-badge");
  const refreshBtn = document.getElementById("epi-price-refresh-btn");

  if (refreshBtn) refreshBtn.classList.add("animate-spin");

  calculatorState.priceLoading = true;

  try {
    const res = await getCurrentEpiPrice();
    calculatorState.currentPrice = res.price;
    calculatorState.priceLoaded = true;
    calculatorState.priceError = null;
    calculatorState.lastUpdated = res.timestamp;
    calculatorState.source = res.source;

    if (priceDisplay) {
      priceDisplay.innerText = formatEpiPrice(res.price);
      priceDisplay.classList.remove("text-red-400");
      priceDisplay.classList.add("text-cyan-neon");
    }

    const s10EpiLivePrice = document.getElementById("s10-epi-live-price");
    if (s10EpiLivePrice) {
      s10EpiLivePrice.innerText = formatEpiPrice(res.price);
    }

    if (timeDisplay) {
      const timeStr = res.timestamp.toLocaleTimeString("en-US", { hour12: false });
      timeDisplay.innerText = `${getI18nText("calc_updated_at", "更新于")}: ${timeStr}`;
    }

    if (statusBadge) {
      statusBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> <span class="text-emerald-400">${getI18nText("calc_live_label", "实时数据")}</span>`;
    }
  } catch (err) {
    console.error("EPI Price Error:", err);
    calculatorState.priceError = err.message;

    if (priceDisplay) {
      priceDisplay.innerText = getI18nText("calc_api_error", "无法获取实时 EPI 价格");
      priceDisplay.classList.remove("text-cyan-neon");
      priceDisplay.classList.add("text-red-400");
    }

    if (statusBadge) {
      statusBadge.innerHTML = `<span class="w-2 h-2 rounded-full bg-red-500"></span> <span class="text-red-400">${getI18nText("calc_offline_label", "连接超时")}</span>`;
    }
  } finally {
    calculatorState.priceLoading = false;
    if (refreshBtn) {
      setTimeout(() => refreshBtn.classList.remove("animate-spin"), 500);
    }
    updateCalculatorUI();
  }
}

function getCompoundedSubText(growthRate) {
  const curLang = localStorage.getItem("enipay_lang") || (window.i18n ? window.i18n.currentLang : "zh");
  if (curLang === "en") return `+${growthRate}%/day (compounded)`;
  if (curLang === "ja") return `+${growthRate}%/日 (複利)`;
  if (curLang === "ko") return `+${growthRate}%/일 (복리)`;
  if (curLang === "vi") return `+${growthRate}%/ngày (ghép)`;
  return `+${growthRate}%/日复合`;
}

function updateCalculatorUI() {
  const invInput = document.getElementById("epi-calc-inv");
  const growthInput = document.getElementById("epi-calc-growth");
  const periodSelect = document.getElementById("epi-calc-period");

  if (invInput) calculatorState.investmentAmount = parseFloat(invInput.value) || 0;
  if (growthInput) calculatorState.epiDailyGrowth = parseFloat(growthInput.value) >= 0 ? parseFloat(growthInput.value) : 0;
  if (periodSelect) calculatorState.holdingPeriod = parseInt(periodSelect.value, 10) || 30;
  calculatorState.dailyProfitRate = FIXED_DAILY_PROFIT_RATE;

  const projection = calculateProjection(
    calculatorState.investmentAmount,
    calculatorState.dailyProfitRate,
    calculatorState.holdingPeriod,
    calculatorState.currentPrice,
    calculatorState.epiDailyGrowth
  );

  // 1. Update Results Cards
  const elDailyProfit = document.getElementById("epi-res-daily-profit");
  const elDailyPurchase = document.getElementById("epi-res-daily-purchase");
  const elTotalEpi = document.getElementById("epi-res-total-epi");
  const elFinalPrice = document.getElementById("epi-res-final-price");
  const elFinalPriceSub = document.getElementById("epi-res-final-price-sub");
  const elFinalValue = document.getElementById("epi-res-final-value");
  const elTotalProfit = document.getElementById("epi-res-total-profit");
  const elRetainedCash = document.getElementById("epi-res-retained-cash");

  if (elDailyProfit) elDailyProfit.innerText = formatUsdt(projection.dailyProfit) + " USDT";
  if (elDailyPurchase) elDailyPurchase.innerText = formatUsdt(projection.dailyEpiUsdt) + " USDT";
  if (elTotalEpi) elTotalEpi.innerText = formatEpiAmount(projection.totalEpi) + " EPI";
  if (elFinalPrice) elFinalPrice.innerText = formatEpiPrice(projection.finalEpiPrice);
  if (elFinalPriceSub) elFinalPriceSub.innerText = getCompoundedSubText(calculatorState.epiDailyGrowth);
  if (elFinalValue) elFinalValue.innerText = formatUsdt(projection.finalEpiValue);
  if (elRetainedCash) elRetainedCash.innerText = formatUsdt(projection.totalRetainedCash);

  const elOrigProfit = document.getElementById("epi-res-orig-profit");
  if (elOrigProfit) {
    elOrigProfit.innerText = formatUsdt(projection.originalEpiEarnings) + " USDT";
  }

  if (elTotalProfit) {
    const isPositive = projection.appreciation >= 0;
    const prefix = isPositive ? "+" : "";
    const pctPrefix = isPositive ? "+" : "";
    elTotalProfit.innerText = `${prefix}${formatUsdt(projection.appreciation)} USDT (${pctPrefix}${projection.appreciationPct.toFixed(2)}%)`;
    if (isPositive) {
      elTotalProfit.className = "font-mono font-bold text-emerald-400 text-sm sm:text-base tracking-tight";
    } else {
      elTotalProfit.className = "font-mono font-bold text-red-400 text-sm sm:text-base tracking-tight";
    }
  }

  // Update table toggle button text based on current language
  const toggleBtn = document.getElementById("epi-calc-table-toggle-btn");
  if (toggleBtn) {
    if (calculatorState.tableExpanded) {
      toggleBtn.innerHTML = `<span id="epi-calc-toggle-text">${getI18nText("calc_table_toggle_close", "▲ 收起每日明细数据")}</span>`;
    } else {
      toggleBtn.innerHTML = `<span id="epi-calc-toggle-text">${getI18nText("calc_table_toggle_open", "▼ 查看完整每日计算明细 (1 ~ 365天)")}</span>`;
    }
  }

  // 2. Render Interactive SVG Line Chart
  renderEpiChart(projection);

  // 3. Render Table Breakdown
  renderBreakdownTable(projection);
}

// ==========================================
// 6. INTERACTIVE RESPONSIVE SVG LINE CHART
// ==========================================
function renderEpiChart(projection) {
  const container = document.getElementById("epi-chart-container");
  if (!container) return;

  const data = projection.dailyBreakdown;
  if (!data || data.length === 0) return;

  const width = container.clientWidth || 600;
  const height = 220;
  const padding = { top: 20, right: 25, bottom: 35, left: 55 };

  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  // Find min and max for scaling
  const maxVal = Math.max(...data.map(d => d.totalEpiValue)) * 1.08;
  const minVal = 0;

  const getX = (index) => padding.left + (index / (data.length - 1 || 1)) * chartW;
  const getY = (val) => padding.top + chartH - ((val - minVal) / (maxVal - minVal || 1)) * chartH;

  // Build SVG Path points
  const points = data.map((d, i) => `${getX(i).toFixed(1)},${getY(d.totalEpiValue).toFixed(1)}`).join(" ");

  // Gradient area path
  const areaPath = `M ${getX(0).toFixed(1)},${getY(minVal).toFixed(1)} L ${points} L ${getX(data.length - 1).toFixed(1)},${getY(minVal).toFixed(1)} Z`;

  // Gridlines & Y-Axis Labels (4 ticks)
  let yAxisHtml = "";
  for (let i = 0; i <= 3; i++) {
    const tickVal = minVal + (maxVal - minVal) * (i / 3);
    const tickY = getY(tickVal);
    yAxisHtml += `
      <line x1="${padding.left}" y1="${tickY}" x2="${width - padding.right}" y2="${tickY}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3,3" />
      <text x="${padding.left - 8}" y="${tickY + 4}" fill="#64748b" font-size="10" font-family="monospace" text-anchor="end">$${tickVal >= 1000 ? (tickVal / 1000).toFixed(1) + "k" : tickVal.toFixed(0)}</text>
    `;
  }

  // X-Axis Labels (start, middle, end)
  const xTicks = [
    { index: 0, label: `Day 1` },
    { index: Math.floor((data.length - 1) / 2), label: `Day ${Math.floor(data.length / 2)}` },
    { index: data.length - 1, label: `Day ${data.length}` }
  ];
  let xAxisHtml = "";
  xTicks.forEach(t => {
    xAxisHtml += `
      <text x="${getX(t.index)}" y="${height - 10}" fill="#94a3b8" font-size="10" font-family="monospace" text-anchor="middle">${t.label}</text>
    `;
  });

  // Highlight endpoint
  const lastPointX = getX(data.length - 1);
  const lastPointY = getY(data[data.length - 1].totalEpiValue);

  container.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" class="w-full h-full overflow-visible select-none">
      <defs>
        <linearGradient id="epiAreaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#00ffb2" stop-opacity="0.32" />
          <stop offset="70%" stop-color="#00ffb2" stop-opacity="0.05" />
          <stop offset="100%" stop-color="#00ffb2" stop-opacity="0.0" />
        </linearGradient>
        <linearGradient id="epiLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#00ffb2" />
          <stop offset="50%" stop-color="#00f2fe" />
          <stop offset="100%" stop-color="#f59e0b" />
        </linearGradient>
        <filter id="epiGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="glow" />
          <feComposite in="SourceGraphic" in2="glow" operator="over" />
        </filter>
      </defs>

      <!-- Y Grid & Labels -->
      ${yAxisHtml}

      <!-- X Axis Labels -->
      ${xAxisHtml}

      <!-- Shaded Area -->
      <path d="${areaPath}" fill="url(#epiAreaGrad)" />

      <!-- Glowing Trend Line -->
      <polyline fill="none" stroke="url(#epiLineGrad)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" points="${points}" filter="url(#epiGlow)" />

      <!-- End Dot Anchor -->
      <circle cx="${lastPointX}" cy="${lastPointY}" r="4.5" fill="#f59e0b" stroke="#ffffff" stroke-width="2" />
      
      <!-- Interactive Cursor Tracker (Transparent rect to capture mouse/touch) -->
      <rect x="${padding.left}" y="${padding.top}" width="${chartW}" height="${chartH}" fill="transparent" class="cursor-crosshair" id="epi-chart-overlay" />
      <g id="epi-chart-tooltip-group" class="hidden pointer-events-none"></g>
    </svg>
  `;

  // Attach hover/touch tracker
  setupChartHover(container, data, getX, getY, chartW, chartH, padding);
}

function setupChartHover(container, data, getX, getY, chartW, chartH, padding) {
  const overlay = container.querySelector("#epi-chart-overlay");
  const tooltipGroup = container.querySelector("#epi-chart-tooltip-group");
  if (!overlay || !tooltipGroup) return;

  const handlePointer = (clientX) => {
    const rect = overlay.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, offsetX / rect.width));
    const index = Math.round(ratio * (data.length - 1));
    const d = data[index];
    if (!d) return;

    const px = getX(index);
    const py = getY(d.totalEpiValue);

    const tooltipW = 140;
    const tooltipH = 50;
    let tipX = px - tooltipW / 2;
    if (tipX < padding.left) tipX = padding.left;
    if (tipX + tooltipW > container.clientWidth - padding.right) tipX = container.clientWidth - padding.right - tooltipW;
    const tipY = Math.max(5, py - tooltipH - 8);

    tooltipGroup.classList.remove("hidden");
    tooltipGroup.innerHTML = `
      <line x1="${px}" y1="${padding.top}" x2="${px}" y2="${padding.top + chartH}" stroke="rgba(0, 255, 178, 0.4)" stroke-dasharray="2,2" stroke-width="1.5" />
      <circle cx="${px}" cy="${py}" r="4" fill="#00ffb2" stroke="#ffffff" stroke-width="1.5" />
      <rect x="${tipX}" y="${tipY}" width="${tooltipW}" height="${tooltipH}" rx="6" fill="#050811" stroke="rgba(0, 255, 178, 0.5)" stroke-width="1" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.6))" />
      <text x="${tipX + tooltipW / 2}" y="${tipY + 16}" fill="#94a3b8" font-size="9" font-family="monospace" text-anchor="middle">Day ${d.day} · Price: ${formatEpiPrice(d.price)}</text>
      <text x="${tipX + tooltipW / 2}" y="${tipY + 34}" fill="#00ffb2" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">Value: ${formatUsdt(d.totalEpiValue)}</text>
    `;
  };

  overlay.addEventListener("mousemove", (e) => handlePointer(e.clientX));
  overlay.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches[0]) handlePointer(e.touches[0].clientX);
  }, { passive: true });

  const hidePointer = () => tooltipGroup.classList.add("hidden");
  overlay.addEventListener("mouseleave", hidePointer);
  overlay.addEventListener("touchend", hidePointer);
}

// ==========================================
// 7. DAILY BREAKDOWN TABLE RENDERING
// ==========================================
function formatBreakdownDay(day) {
  const lang = localStorage.getItem("enipay_lang") || (window.i18n ? window.i18n.currentLang : "zh");
  if (lang === 'en') return `Day ${day}`;
  if (lang === 'ko') return `${day}일차`;
  if (lang === 'vi') return `Ngày ${day}`;
  if (lang === 'ja') return `第 ${day} 日`;
  return `第 ${day} 天`;
}

function renderBreakdownTable(projection) {
  const tbody = document.getElementById("epi-calc-table-body");
  if (!tbody) return;

  const data = projection.dailyBreakdown;
  tbody.innerHTML = data
    .map(d => {
      const isMilestone = [1, 7, 15, 30, 60, 90, 180, 365, 438].includes(d.day);
      const rowClass = isMilestone
        ? "bg-slate-900/90 font-medium text-white border-l-2 border-l-cyan-neon"
        : "text-slate-300 hover:bg-slate-900/50";

      return `
        <tr class="border-b border-slate-800/60 transition-colors ${rowClass}">
          <td class="py-2.5 px-3 font-mono text-xs text-left whitespace-nowrap text-slate-200">${formatBreakdownDay(d.day)}</td>
          <td class="py-2.5 px-3 font-mono text-xs text-right text-cyan-bright font-semibold whitespace-nowrap">${formatEpiPrice(d.price)}</td>
          <td class="py-2.5 px-3 font-mono text-xs text-right text-slate-300 whitespace-nowrap">${formatUsdt(d.dailyProfit)}</td>
          <td class="py-2.5 px-3 font-mono text-xs text-right text-gold-400 whitespace-nowrap">${formatUsdt(d.dailyEpiUsdt)}</td>
          <td class="py-2.5 px-3 font-mono text-xs text-right text-cyan-neon font-semibold whitespace-nowrap">${formatEpiAmount(d.epiPurchased)}</td>
          <td class="py-2.5 px-3 font-mono text-xs text-right font-bold text-white whitespace-nowrap">${formatEpiAmount(d.totalEpi)}</td>
          <td class="py-2.5 px-3 font-mono text-xs text-right font-bold text-emerald-400 whitespace-nowrap">${formatUsdt(d.totalEpiValue)}</td>
        </tr>
      `;
    })
    .join("");
}

function toggleDailyBreakdown() {
  const tableWrap = document.getElementById("epi-calc-table-wrapper");
  const toggleBtn = document.getElementById("epi-calc-table-toggle-btn");
  if (!tableWrap || !toggleBtn) return;

  calculatorState.tableExpanded = !calculatorState.tableExpanded;
  if (calculatorState.tableExpanded) {
    tableWrap.classList.remove("hidden");
    toggleBtn.innerHTML = `<span id="epi-calc-toggle-text">${getI18nText("calc_table_toggle_close", "▲ 收起每日明细数据")}</span>`;
  } else {
    tableWrap.classList.add("hidden");
    toggleBtn.innerHTML = `<span id="epi-calc-toggle-text">${getI18nText("calc_table_toggle_open", "▼ 查看完整每日计算明细 (1 ~ 365天)")}</span>`;
  }
}

// Preset Quick Amount Buttons
function setQuickAmount(amount) {
  const invInput = document.getElementById("epi-calc-inv");
  if (invInput) {
    invInput.value = amount;
    updateCalculatorUI();
  }
}

// Preset Quick Growth Buttons
function setQuickGrowth(growthRate) {
  const growthInput = document.getElementById("epi-calc-growth");
  if (growthInput) {
    growthInput.value = growthRate;
    updateCalculatorUI();
  }
}

// Smooth Jump from Slide 10 or Nav Header to Calculator
function jumpToCalculator(e) {
  if (e) {
    e.preventDefault();
  }
  const calcSection = document.getElementById("epi-calculator");
  if (calcSection) {
    calcSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// ==========================================
// 8. INITIALIZATION & EVENT LISTENERS
// ==========================================
if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    // Input event listeners for real-time recalculation
    const invInput = document.getElementById("epi-calc-inv");
    const growthInput = document.getElementById("epi-calc-growth");
    const periodSelect = document.getElementById("epi-calc-period");

    if (invInput) {
      invInput.addEventListener("input", updateCalculatorUI);
    }
    if (growthInput) {
      growthInput.addEventListener("input", updateCalculatorUI);
    }
    if (periodSelect) {
      periodSelect.addEventListener("change", updateCalculatorUI);
    }

    // Window resize debounced chart re-render
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const projection = calculateProjection(
          calculatorState.investmentAmount,
          calculatorState.dailyProfitRate,
          calculatorState.holdingPeriod,
          calculatorState.currentPrice,
          calculatorState.epiDailyGrowth
        );
        renderEpiChart(projection);
      }, 150);
    });

    // Initial Price Fetch & UI Render
    refreshEpiPrice();

    // Periodic Price Refresh (every 60 seconds as specified)
    setInterval(refreshEpiPrice, 60000);
  });
}

// Global window and Node.js exports
if (typeof window !== "undefined") {
  window.getCurrentEpiPrice = getCurrentEpiPrice;
  window.calculateProjection = calculateProjection;
  window.refreshEpiPrice = refreshEpiPrice;
  window.toggleDailyBreakdown = toggleDailyBreakdown;
  window.setQuickAmount = setQuickAmount;
  window.setQuickGrowth = setQuickGrowth;
  window.jumpToCalculator = jumpToCalculator;
  window.updateCalculatorUI = updateCalculatorUI;
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    EPI_ALLOCATION,
    FIXED_DAILY_PROFIT_RATE,
    DEFAULT_EPI_DAILY_GROWTH,
    getCurrentEpiPrice,
    calculateDailyProfit,
    calculateEpiPrice,
    calculateDailyEpiPurchase,
    calculateDailyEpiTokens,
    calculateProjection,
    calculatorState
  };
}

