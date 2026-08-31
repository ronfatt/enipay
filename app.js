/**
 * ENIPay Web3 Presentation Engine (Full-Screen Slide Show Edition)
 * Features: Three.js 3D Background, Motion Choreography, Counter Tickers,
 * Interactive Calculators, Web Audio HUD sound synthesis, Speaker Notes Sync.
 */

// Sound Synthesizer (Zero asset dependencies, Web Audio API)
class CyberAudio {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }
  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
  }
  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1760, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {}
  }
  playChime() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1046.5, this.ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.2);
    } catch (e) {}
  }
}

const audio = new CyberAudio();

// Three.js 3D Cyber Background Scene
function initThreeScene() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 28;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 1. Cyber Ring / Torus Core
  const torusGeo = new THREE.TorusKnotGeometry(10, 2.4, 140, 28, 2, 3);
  const torusMat = new THREE.MeshBasicMaterial({
    color: 0x00f2fe,
    wireframe: true,
    transparent: true,
    opacity: 0.16
  });
  const torus = new THREE.Mesh(torusGeo, torusMat);
  scene.add(torus);

  // 2. Floating Cyan Particle Field
  const particleCount = 320;
  const positions = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 90;
    positions[i + 1] = (Math.random() - 0.5) * 70;
    positions[i + 2] = (Math.random() - 0.5) * 50;
  }

  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  
  const particleMat = new THREE.PointsMaterial({
    color: 0x00c9e8,
    size: 0.45,
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending
  });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  function animate() {
    requestAnimationFrame(animate);

    targetX += (mouseX * 4 - targetX) * 0.05;
    targetY += (mouseY * 4 - targetY) * 0.05;

    torus.rotation.x += 0.0025;
    torus.rotation.y += 0.004;
    torus.position.x = targetX * 1.5;
    torus.position.y = -targetY * 1.5 + Math.sin(Date.now() * 0.001) * 0.8;

    particles.rotation.y += 0.0006;
    particles.rotation.x += 0.0003;

    renderer.render(scene, camera);
  }

  animate();
}

// Presentation State
const state = {
  currentSlide: 1,
  totalSlides: 11,
  notesOpen: false,
  isScrolling: false
};

const slideNotes = {
  1: "【Slide 1 封面演说点】\n各位投资人与生态伙伴，欢迎来到 Enipay 全球推介会。今天我们呈现的不仅仅是一个数字钱包，而是由日本五年实力公链 ENI Chain 驱动，由 100% 币安托管背书，面向 AI Agent、稳定币与十万亿 Web3 商业的下一代全球支付入口！",
  2: "【Slide 2 赛道与痛点】\nVisa 6700亿，Mastercard 4000亿，但它们只统治了传统法币。全球数十万亿美元加密资产与稳定币急需合规出入金通道。RedotPay 仅凭单卡三年做到了 120 亿美金流水与 1.8 亿净利！而 Enipay 是全矩阵+AI赋能的升级体，估值想象空间极其巨大！",
  3: "【Slide 3 公链底座支撑】\n我们绝不是空气项目！底层 ENI 公链总部位于日本东京，已平稳运行整整 5 年，拥有 400 万+独立地址与 2400 万笔链上交易。实测 12,500 TPS，延迟降低 85%，获日本最大通信巨头 NTT 深度认可，Certik 评分高达 82.19 A级安全认证！",
  4: "【Slide 4 三层架构与全矩阵】\n我们的核心在于三层金字塔架构与落地场景：双币四方扫码打通微信/支付宝/MoMo；极速海外合规扫码出入金彻底解决买U卖U冻卡痛点；实体/虚拟三色 U 卡 + 链上免税美股与全球出行生态！",
  5: "【Slide 5 AI Agent 支付革新】\n在 AI 时代，未来的消费者不只是人类，还有成千上万自主执行任务的 AI Agent！Enipay A-Card 率先推出智能助手卡，托管小额授权，自主量化理财，并构筑坚实的多签风控边界！",
  6: "【Slide 6 100% 币安资金托管】\n很多项目死于资金池爆雷！Enipay 首创绝对零沉淀模式：所有质押资金 100% 锁定在币安（Binance）官方第三方账户。刷卡消费毫秒级智能合约触发划拨，平台碰不到一分钱，彻底杜绝跑路风险！",
  7: "【Slide 7 三年 5 亿美金补贴计划】\n效仿互联网巨头滴滴、拼多多的补贴打法，五年规划 5 亿美金真实流动性与出金补贴池！钱包地址链上完全公开透明，低于 500 万 USDT 自动触发 Refill 智能注入，保障市场持续裂变！",
  8: "【Slide 8 静态收益与防巨鲸机制】\n300U 起步，单账户严格上限 10,000U（杜绝纯大鲸鱼刷单，只沉淀真实持卡消费流量）。每日 0.8% - 1.2% 浮动（内测固定 1%），3.5倍极速出局，约 350 天即可拿满！",
  9: "【Slide 9 100代暴力裂变模型】\n无对碰、无大象腿、无平级超越！直推 9 人直接解锁 100 代！黄金 9×6 裂变模型下，仅算 1-6 代，日薪就可达 177,119.19 USDT（日入 120 万+ RMB），打造前所未有的管道财富！",
  10: "【Slide 10 代币经济与双通缩】\nEPAY 80% 底池全部打入黑洞永久销毁！平台收益 90% USDT + 5% ENI + 5% EPAY。提现 5% 手续费 100% 回购销毁 EPAY！ENI 2026 下半年首发 45 家主流所，初始定价 20 USDT！双重通缩超级循环！",
  11: "【Slide 11 尾页号召与顶峰相见】\n各位，补贴最狠的永远是前三个月的黄金内测期！完整版 APP Q4 正式爆发，现在入场享受 3.5 倍高速出局与每日 1% 极速红利。立刻扫码注册激活，拿满 100 代，共创万倍价值未来！顶峰相见！"
};

// Counter Up Animation Engine
function animateValue(obj, start, end, duration, prefix = '', suffix = '') {
  if (!obj) return;
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easeOutQuad = 1 - (1 - progress) * (1 - progress);
    const current = Math.floor(easeOutQuad * (end - start) + start);
    obj.innerText = `${prefix}${current.toLocaleString()}${suffix}`;
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      obj.innerText = `${prefix}${end.toLocaleString()}${suffix}`;
    }
  };
  window.requestAnimationFrame(step);
}

function triggerSlideMotion(slideNum) {
  const currentSection = document.getElementById(`slide-${slideNum}`);
  if (!currentSection) return;

  // Add active state to trigger CSS motion
  document.querySelectorAll('.slide-section').forEach(sec => sec.classList.remove('slide-active'));
  currentSection.classList.add('slide-active');

  // Trigger custom counters for specific slides
  if (slideNum === 3) {
    const tpsEl = currentSection.querySelector('[data-counter="12500"]');
    if (tpsEl) animateValue(tpsEl, 0, 12500, 1200, '', ' TPS');
  }
}

function updatePresenterUI(slideNum) {
  state.currentSlide = slideNum;
  
  // Progress Bar
  const percent = ((slideNum - 1) / (state.totalSlides - 1)) * 100;
  const bar = document.getElementById('top-progress-bar');
  if (bar) bar.style.width = `${percent}%`;

  // HUD Indicator
  const counter = document.getElementById('slide-counter-badge');
  if (counter) {
    counter.textContent = `SLIDE ${String(slideNum).padStart(2, '0')} / ${String(state.totalSlides).padStart(2, '0')}`;
  }

  // Dots
  document.querySelectorAll('.hud-dot').forEach(dot => {
    const dotIndex = parseInt(dot.getAttribute('data-slide'));
    if (dotIndex === slideNum) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });

  // Notes Sync
  const notesContent = document.getElementById('notes-text-area');
  const notesTitle = document.getElementById('notes-slide-title');
  if (notesContent && slideNotes[slideNum]) {
    notesContent.innerText = slideNotes[slideNum];
  }
  if (notesTitle) {
    notesTitle.innerText = `SLIDE ${String(slideNum).padStart(2, '0')} 讲师提词稿`;
  }

  // Trigger motion
  triggerSlideMotion(slideNum);
}

function goToSlide(num) {
  if (num < 1 || num > state.totalSlides) return;
  const target = document.getElementById(`slide-${num}`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
    audio.playClick();
    updatePresenterUI(num);
  }
}

// 3D Card Interactive Tilt & Depth Hover
function setup3DCardTilt() {
  document.querySelectorAll('.grid-box-modular, .panel-dark-anchor').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
  });
}

// Interactive 9x6 Calculator on Slide 9
function setupTeamCalculator() {
  const investInput = document.getElementById('calc-invest');
  const rateInput = document.getElementById('calc-rate');

  if (!investInput || !rateInput) return;

  function calculate() {
    const invest = parseFloat(investInput.value) || 300;
    const rate = (parseFloat(rateInput.value) || 1.0) / 100;

    const tiers = [
      { gen: 1, count: 9, pct: 0.05 },
      { gen: 2, count: 81, pct: 0.06 },
      { gen: 3, count: 729, pct: 0.07 },
      { gen: 4, count: 6561, pct: 0.08 },
      { gen: 5, count: 59049, pct: 0.09 },
      { gen: 6, count: 531441, pct: 0.10 },
    ];

    let totalDaily = 0;
    tiers.forEach(t => {
      const teamVolume = t.count * invest;
      const dailyEarn = teamVolume * rate * t.pct;
      totalDaily += dailyEarn;

      const elVolume = document.getElementById(`calc-vol-${t.gen}`);
      const elEarn = document.getElementById(`calc-earn-${t.gen}`);
      if (elVolume) elVolume.innerText = `$${(teamVolume / 1000).toFixed(1)}k U`;
      if (elEarn) elEarn.innerText = `$${dailyEarn.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} U`;
    });

    const totalEl = document.getElementById('calc-total-daily');
    const totalCnyEl = document.getElementById('calc-total-cny');
    if (totalEl) {
      totalEl.innerText = `$${totalDaily.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} USDT / 天`;
    }
    if (totalCnyEl) {
      totalCnyEl.innerText = `≈ ¥${(totalDaily * 7.23).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} 元 / 天`;
    }
  }

  investInput.addEventListener('input', calculate);
  rateInput.addEventListener('input', calculate);
}

// Copy to Clipboard Utility
function copyAddress(text, btnElement) {
  navigator.clipboard.writeText(text).then(() => {
    audio.playChime();
    const original = btnElement.innerHTML;
    btnElement.innerHTML = `<span>✓ 已复制</span>`;
    setTimeout(() => {
      btnElement.innerHTML = original;
    }, 2000);
  });
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initThreeScene();
  setup3DCardTilt();
  setupTeamCalculator();

  // Scroll Observer for Slide Transitions
  const sections = document.querySelectorAll('.slide-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.35) {
        const slideId = entry.target.getAttribute('id');
        if (slideId && slideId.startsWith('slide-')) {
          const num = parseInt(slideId.replace('slide-', ''));
          updatePresenterUI(num);
        }
      }
    });
  }, { threshold: [0.35, 0.65] });

  sections.forEach(sec => observer.observe(sec));

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ' || e.key === 'ArrowRight') {
      e.preventDefault();
      goToSlide(state.currentSlide + 1);
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      goToSlide(state.currentSlide - 1);
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToSlide(1);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToSlide(state.totalSlides);
    } else if (e.key.toLowerCase() === 'n') {
      toggleNotes();
    } else if (e.key.toLowerCase() === 'f') {
      toggleFullscreen();
    } else if (e.key >= '1' && e.key <= '9') {
      goToSlide(parseInt(e.key));
    } else if (e.key === '0') {
      goToSlide(10);
    }
  });

  // Presentation Fullscreen Toggle
  window.toggleFullscreen = function() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  // Notes Drawer Toggle
  window.toggleNotes = function() {
    const drawer = document.getElementById('notes-drawer');
    if (!drawer) return;
    state.notesOpen = !state.notesOpen;
    if (state.notesOpen) {
      drawer.classList.add('open');
      audio.playChime();
    } else {
      drawer.classList.remove('open');
      audio.playClick();
    }
  };

  // Sound Toggle
  window.toggleSound = function() {
    audio.muted = !audio.muted;
    const btn = document.getElementById('sound-toggle-btn');
    if (btn) {
      btn.innerHTML = audio.muted ? '🔇' : '🔊';
    }
    if (!audio.muted) audio.playClick();
  };

  // Global window functions
  window.goToSlide = goToSlide;
  window.copyAddress = copyAddress;

  // Initialize UI with Slide 1
  updatePresenterUI(1);
});
