/**
 * ENIPAY Official Media & Resource Hub (资料库) Controller
 * Modern, Clean, Aligned Grid & List Views with Instant Search, Filter & Modals
 */

// Complete Local & Remote Resources Dataset
const RESOURCES_DATA = [
  // ==================== 1. 官方文档 & 商业计划书 (DOCUMENTS) ====================
  {
    id: "doc-bp-pdf",
    category: "docs",
    type: "PDF",
    title: "ENIPAY 官方商业计划书 (Business Plan)",
    subtitle: "全面解析 ENIPAY 商业模式、三层架构、代币激励与上市路径",
    path: "./ENIPAY商业计划书.pdf",
    size: "8.2 MB",
    badge: "商业计划书",
    badgeColor: "gold",
    icon: "📄",
    canPreview: true,
    canDownload: true,
    previewType: "pdf"
  },
  {
    id: "doc-qa-pdf",
    category: "docs",
    type: "PDF",
    title: "ENIPAY 市场常见问答手册 (Q&A)",
    subtitle: "全面解答关于 ENI 公链底座、币安托管、U卡申请与收益模型等核心问题",
    path: "./ENI资料库/ENIPAY 问与答/ENIPAY市场问答Q&A.pdf",
    size: "3.4 MB",
    badge: "市场答疑",
    badgeColor: "cyan",
    icon: "❓",
    canPreview: true,
    canDownload: true,
    previewType: "pdf"
  },
  {
    id: "doc-qa-pptx",
    category: "docs",
    type: "PPTX",
    title: "ENIPAY 市场问答宣讲幻灯片 (Q&A PPTX)",
    subtitle: "官方标准演讲幻灯片，适用于线下招商会、社区路演与团队布道",
    path: "./ENI资料库/ENIPAY 问与答/ENIPAY市场问答Q&A.pptx",
    size: "5.1 MB",
    badge: "招商演示",
    badgeColor: "cyan",
    icon: "📊",
    canPreview: false,
    canDownload: true
  },
  {
    id: "doc-epay-intro",
    category: "docs",
    type: "PDF",
    title: "EPAY 项目深度介绍 (中文版)",
    subtitle: "聚焦 EPAY 双通缩机制、回购销毁执行器与 100 代社区裂变激励",
    path: "./EPAY 项目介绍 中文.pdf",
    size: "4.7 MB",
    badge: "项目介绍",
    badgeColor: "gold",
    icon: "📘",
    canPreview: true,
    canDownload: true,
    previewType: "pdf"
  },
  {
    id: "doc-epay-v14",
    category: "docs",
    type: "PDF",
    title: "Epay 全球聚合支付平台架构白皮书 v1.4",
    subtitle: "四方清算技术规范、合规出入金方案与智能合约体系详解",
    path: "./Epay 聚合平台v1.4.pdf",
    size: "3.0 MB",
    badge: "技术白皮书",
    badgeColor: "cyan",
    icon: "📑",
    canPreview: true,
    canDownload: true,
    previewType: "pdf"
  },
  {
    id: "doc-amend-pdf",
    category: "docs",
    type: "PDF",
    title: "ENIPAY 生态规划与合规补充说明",
    subtitle: "全球金融牌照并购进度与法币出入金通道风控准则",
    path: "./amend.pdf",
    size: "177 KB",
    badge: "合规说明",
    badgeColor: "blue",
    icon: "📜",
    canPreview: true,
    canDownload: true,
    previewType: "pdf"
  },

  // ==================== 2. 官方高清宣传视频 (VIDEOS - 仅在线播放，禁止下载) ====================
  {
    id: "video-eni-main",
    category: "videos",
    type: "MP4",
    title: "ENI 公链官方品牌宣传大片",
    subtitle: "展现东京总部、NTT 战略合作、模块化 L1 架构与 5 年稳健运行风采",
    path: "./ENI资料库/视频/ENI宣传视频.MP4",
    badge: "公链大片",
    badgeColor: "cyan",
    icon: "🎬",
    canPreview: true,
    canDownload: false,
    previewType: "video"
  },
  {
    id: "video-enipay-promo",
    category: "videos",
    type: "MP4",
    title: "ENIPAY 全球支付聚合平台宣传短片",
    subtitle: "三色 U 卡、双币扫码、AI 智能助手卡与全球生活出行全景演示",
    path: "./ENI资料库/视频/ENIPAY宣传短片MP4.MP4",
    badge: "平台短片",
    badgeColor: "cyan",
    icon: "🎬",
    canPreview: true,
    canDownload: false,
    previewType: "video"
  },
  {
    id: "video-spokesperson",
    category: "videos",
    type: "MP4",
    title: "ENIPAY 品牌形象代言宣传短片",
    subtitle: "特邀形象大使助力全球布道与市场裂变推广",
    path: "./ENI资料库/视频/光头强ENIPAY代言.mp4",
    badge: "形象代言",
    badgeColor: "gold",
    icon: "🎬",
    canPreview: true,
    canDownload: false,
    previewType: "video"
  },
  {
    id: "video-ecosystem",
    category: "videos",
    type: "MP4",
    title: "ENIPAY ECOSYSTEM 全球生态全景",
    subtitle: "全球化商业落地战略、五年上市规划与万亿清算赛道解析",
    path: "./ENI资料库/视频/ENIPAY ECOSYSTEM.mp4",
    badge: "生态全景",
    badgeColor: "cyan",
    icon: "🎬",
    canPreview: true,
    canDownload: false,
    previewType: "video"
  },
  {
    id: "video-finance-model",
    category: "videos",
    type: "MP4",
    title: "ENI MG 金融模型与通缩机制深度解读",
    subtitle: "80% 黑洞销毁 + 提现 5% 强制回购代币经济学深度剖析",
    path: "./ENI资料库/视频/ENIMG金融模型解读.mp4",
    badge: "金融模型",
    badgeColor: "gold",
    icon: "🎬",
    canPreview: true,
    canDownload: false,
    previewType: "video"
  },
  {
    id: "video-wealth-code",
    category: "videos",
    type: "MP4",
    title: "ENIPAY 财富密码与全球红利",
    subtitle: "早期种子节点红利、上市加速池补贴与 3.5 倍收益闭环",
    path: "./ENI资料库/视频/ENIPAY财富密码.mp4",
    badge: "财富指南",
    badgeColor: "gold",
    icon: "🎬",
    canPreview: true,
    canDownload: false,
    previewType: "video"
  },
  {
    id: "video-super-eco",
    category: "videos",
    type: "MP4",
    title: "EPAY 超级生态落地演示",
    subtitle: "打通线上线下、全球 ATM 取现与日常消费刷卡全场景",
    path: "./ENI资料库/视频/EPAY超级生态.MP4",
    badge: "超级生态",
    badgeColor: "cyan",
    icon: "🎬",
    canPreview: true,
    canDownload: false,
    previewType: "video"
  },
  {
    id: "video-digital-pay",
    category: "videos",
    type: "MP4",
    title: "EPAY 数字支付与即时出入金",
    subtitle: "无冻卡风险、SWIFT 国际电汇与合规资金流向展示",
    path: "./ENI资料库/视频/EPAY数字支付.MP4",
    badge: "数字支付",
    badgeColor: "cyan",
    icon: "🎬",
    canPreview: true,
    canDownload: false,
    previewType: "video"
  },
  {
    id: "video-eni-promo-2",
    category: "videos",
    type: "MP4",
    title: "ENI 公链全球节点与技术架构短片 02",
    subtitle: "企业级高并发测试、12,500 TPS 与极低 Gas 费体验",
    path: "./ENI资料库/视频/ENI 宣传视频 02.mp4",
    badge: "技术短片",
    badgeColor: "blue",
    icon: "🎬",
    canPreview: true,
    canDownload: false,
    previewType: "video"
  },

  // ==================== 3. 宣传海报与展架易拉宝 (POSTERS) ====================
  {
    id: "poster-long-intro",
    category: "posters",
    type: "PNG",
    title: "ENIPAY 官方简介全景长图",
    subtitle: "高清长图排版，适合微信、Telegram 等社群一键转发",
    path: "./ENI资料库/EPAY中文/ENIPAY 简介长图.png",
    thumb: "./ENI资料库/EPAY中文/ENIPAY 简介长图.png",
    badge: "社群长图",
    badgeColor: "cyan",
    icon: "🖼️",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "poster-eco-overview",
    category: "posters",
    type: "PNG",
    title: "ENI 生态系统简介展板",
    subtitle: "公链底座、支付清算与生态矩阵一览",
    path: "./ENI资料库/EPAY中文/ENI 生态简介.png",
    thumb: "./ENI资料库/EPAY中文/ENI 生态简介.png",
    badge: "生态展板",
    badgeColor: "cyan",
    icon: "🖼️",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "poster-competitive-edge",
    category: "posters",
    type: "PNG",
    title: "ENIPAY 生态竞争优势图解",
    subtitle: "对比传统出入金与竞品，凸显 100% 币安托管与无冻卡优势",
    path: "./ENI资料库/EPAY中文/ENIPAY 生态竞争优势.PNG",
    thumb: "./ENI资料库/EPAY中文/ENIPAY 生态竞争优势.PNG",
    badge: "竞争优势",
    badgeColor: "gold",
    icon: "🖼️",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "poster-staking-model-1",
    category: "posters",
    type: "PNG",
    title: "ENIPAY 质押投资与收益模型 01",
    subtitle: "300~10000U 投资梯度、日化 1% 与 3.5 倍出局机制",
    path: "./ENI资料库/EPAY中文/ENIPAY 质押模型 01.png",
    thumb: "./ENI资料库/EPAY中文/ENIPAY 质押模型 01.png",
    badge: "质押模型",
    badgeColor: "gold",
    icon: "🖼️",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "poster-staking-model-2",
    category: "posters",
    type: "PNG",
    title: "ENIPAY 质押投资与收益模型 02",
    subtitle: "100 代动态裂变奖金池与团队管理激励图解",
    path: "./ENI资料库/EPAY中文/NIPAY 质押模型 02.png",
    thumb: "./ENI资料库/EPAY中文/NIPAY 质押模型 02.png",
    badge: "裂变模型",
    badgeColor: "gold",
    icon: "🖼️",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "poster-main-1",
    category: "posters",
    type: "PNG",
    title: "ENI 官方主视觉海报 01",
    subtitle: "极具科技感的高清主视觉，适合线下峰会与展会背景",
    path: "./ENI资料库/EPAY中文/ENI海报.PNG",
    thumb: "./ENI资料库/EPAY中文/ENI海报.PNG",
    badge: "主视觉海报",
    badgeColor: "cyan",
    icon: "🖼️",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "poster-main-2",
    category: "posters",
    type: "PNG",
    title: "ENI 官方主视觉海报 02",
    subtitle: "企业级公链与 Web3 支付结合的视觉主题展板",
    path: "./ENI资料库/EPAY中文/ENI 海报 02PNG.PNG",
    thumb: "./ENI资料库/EPAY中文/ENI 海报 02PNG.PNG",
    badge: "主视觉海报",
    badgeColor: "cyan",
    icon: "🖼️",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "poster-main-3",
    category: "posters",
    type: "PNG",
    title: "ENI 官方主视觉海报 03",
    subtitle: "聚焦全球金融合规牌照与纳斯达克 IPO 冲刺愿景",
    path: "./ENI资料库/EPAY中文/ENI 海报 03.PNG",
    thumb: "./ENI资料库/EPAY中文/ENI 海报 03.PNG",
    badge: "主视觉海报",
    badgeColor: "gold",
    icon: "🖼️",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },

  // ==================== 4. 市场问答与答疑卡片 (Q&A CARDS Q1-Q14) ====================
  {
    id: "qa-q1",
    category: "qa",
    type: "PNG",
    title: "Q1: 什么是 ENIPAY 全球支付聚合平台？",
    subtitle: "解析 ENIPAY 的平台定位与生态价值",
    path: "./ENI资料库/ENIPAY 问与答/Q1.PNG",
    thumb: "./ENI资料库/ENIPAY 问与答/Q1.PNG",
    badge: "Q&A 01",
    badgeColor: "cyan",
    icon: "❓",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "qa-q2",
    category: "qa",
    type: "PNG",
    title: "Q2: ENIPAY 的资金安全性如何保障？",
    subtitle: "阐述币安第三方独立托管机制与零资金沉淀",
    path: "./ENI资料库/ENIPAY 问与答/Q2.PNG",
    thumb: "./ENI资料库/ENIPAY 问与答/Q2.PNG",
    badge: "Q&A 02",
    badgeColor: "cyan",
    icon: "❓",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "qa-q3",
    category: "qa",
    type: "PNG",
    title: "Q3: ENIPAY 三色 U 卡如何申请与使用？",
    subtitle: "黑卡、绿卡、蓝卡的申请条件与全球刷卡额度",
    path: "./ENI资料库/ENIPAY 问与答/Q3.PNG",
    thumb: "./ENI资料库/ENIPAY 问与答/Q3.PNG",
    badge: "Q&A 03",
    badgeColor: "cyan",
    icon: "❓",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "qa-q4",
    category: "qa",
    type: "PNG",
    title: "Q4: 为什么能彻底告别银行冻卡痛点？",
    subtitle: "揭秘四方合规清算通道与银行级电汇网络",
    path: "./ENI资料库/ENIPAY 问与答/Q4.PNG",
    thumb: "./ENI资料库/ENIPAY 问与答/Q4.PNG",
    badge: "Q&A 04",
    badgeColor: "cyan",
    icon: "❓",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "qa-q5",
    category: "qa",
    type: "PNG",
    title: "Q5: EPAY 代币的通缩逻辑是什么？",
    subtitle: "80% 初始黑洞销毁与 5% 提现强制回购深度解读",
    path: "./ENI资料库/ENIPAY 问与答/Q5.PNG",
    thumb: "./ENI资料库/ENIPAY 问与答/Q5.PNG",
    badge: "Q&A 05",
    badgeColor: "gold",
    icon: "❓",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "qa-q6",
    category: "qa",
    type: "PNG",
    title: "Q6: 静态质押收益与出局规则是怎样的？",
    subtitle: "0.8%~1.2% 日收益率与 3.5 倍出局保障",
    path: "./ENI资料库/ENIPAY 问与答/Q6.PNG",
    thumb: "./ENI资料库/ENIPAY 问与答/Q6.PNG",
    badge: "Q&A 06",
    badgeColor: "gold",
    icon: "❓",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "qa-q7",
    category: "qa",
    type: "PNG",
    title: "Q7: 100 代动态裂变奖金如何计算？",
    subtitle: "直推人数与代数权限解锁规则",
    path: "./ENI资料库/ENIPAY 问与答/Q7.PNG",
    thumb: "./ENI资料库/ENIPAY 问与答/Q7.PNG",
    badge: "Q&A 07",
    badgeColor: "gold",
    icon: "❓",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "qa-q8",
    category: "qa",
    type: "PNG",
    title: "Q8: 三年 5 亿美金加速池资金来源何在？",
    subtitle: "底池做市、社区扩张与上市推进 5 大阶段说明",
    path: "./ENI资料库/ENIPAY 问与答/Q8.PNG",
    thumb: "./ENI资料库/ENIPAY 问与答/Q8.PNG",
    badge: "Q&A 08",
    badgeColor: "gold",
    icon: "❓",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "qa-q9",
    category: "qa",
    type: "PNG",
    title: "Q9: 什么是 AI Agent 智能助手卡 (A-Card)？",
    subtitle: "人工智能代理自主消费与 MPC 多签风控模型",
    path: "./ENI资料库/ENIPAY 问与答/Q9.PNG",
    thumb: "./ENI资料库/ENIPAY 问与答/Q9.PNG",
    badge: "Q&A 09",
    badgeColor: "cyan",
    icon: "❓",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "qa-q10",
    category: "qa",
    type: "PNG",
    title: "Q10: ENI 主网初代币的稀缺性体现在哪？",
    subtitle: "全网仅 5% 产出与 2026 年首发主流交易所规划",
    path: "./ENI资料库/ENIPAY 问与答/Q10.PNG",
    thumb: "./ENI资料库/ENIPAY 问与答/Q10.PNG",
    badge: "Q&A 10",
    badgeColor: "cyan",
    icon: "❓",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "qa-q11",
    category: "qa",
    type: "PNG",
    title: "Q11: 如何参与全球超级节点计划？",
    subtitle: "100 超级节点招募条件与全网手续费分红特权",
    path: "./ENI资料库/ENIPAY 问与答/Q11.PNG",
    thumb: "./ENI资料库/ENIPAY 问与答/Q11.PNG",
    badge: "Q&A 11",
    badgeColor: "cyan",
    icon: "❓",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "qa-q12",
    category: "qa",
    type: "PNG",
    title: "Q12: ENIPAY 在纳斯达克上市的时间表？",
    subtitle: "合规推进、用户体量沉淀与 500 亿估值冲刺目标",
    path: "./ENI资料库/ENIPAY 问与答/Q12.PNG",
    thumb: "./ENI资料库/ENIPAY 问与答/Q12.PNG",
    badge: "Q&A 12",
    badgeColor: "gold",
    icon: "❓",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "qa-q13",
    category: "qa",
    type: "PNG",
    title: "Q13: 如何下载官方 App 与绑定钱包？",
    subtitle: "iOS 与 Android 客户端安装指引与安全备份",
    path: "./ENI资料库/ENIPAY 问与答/Q13.PNG",
    thumb: "./ENI资料库/ENIPAY 问与答/Q13.PNG",
    badge: "Q&A 13",
    badgeColor: "cyan",
    icon: "❓",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "qa-q14",
    category: "qa",
    type: "PNG",
    title: "Q14: 早期参与者的核心财富指令是什么？",
    subtitle: "把握黄金内测窗口，紧握核心筹码迎接资本红利",
    path: "./ENI资料库/ENIPAY 问与答/Q14.PNG",
    thumb: "./ENI资料库/ENIPAY 问与答/Q14.PNG",
    badge: "Q&A 14",
    badgeColor: "gold",
    icon: "❓",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },

  // ==================== 5. 实体物料与招牌 (STORE SIGNAGE) ====================
  {
    id: "signage-front-day",
    category: "signage",
    type: "PNG",
    title: "ENIPAY 线下实体旗舰中心前台 (白天效果)",
    subtitle: "标准线下服务中心与 VIP 咨询接待前台视觉实景图",
    path: "./ENI资料库/实体招牌/白天前台.png",
    thumb: "./ENI资料库/实体招牌/白天前台.png",
    badge: "实体前台",
    badgeColor: "cyan",
    icon: "🏢",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "signage-front-night",
    category: "signage",
    type: "PNG",
    title: "ENIPAY 线下实体旗舰中心前台 (夜间发光效果)",
    subtitle: "赛博朋克霓虹光效前台设计，展现顶级金融科技质感",
    path: "./ENI资料库/实体招牌/晚上前台.png",
    thumb: "./ENI资料库/实体招牌/晚上前台.png",
    badge: "夜间光效",
    badgeColor: "cyan",
    icon: "🏢",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "signage-storefront",
    category: "signage",
    type: "PNG",
    title: "ENIPAY 官方门店招牌门头设计图",
    subtitle: "全球加盟店与线下网点统一标准门头招牌设计规范",
    path: "./ENI资料库/实体招牌/店招.png",
    thumb: "./ENI资料库/实体招牌/店招.png",
    badge: "门头招牌",
    badgeColor: "gold",
    icon: "🏪",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "signage-lightbox",
    category: "signage",
    type: "PNG",
    title: "ENIPAY 实体店发光灯箱设计图",
    subtitle: "立柱灯箱、侧发光广告牌高清设计原图",
    path: "./ENI资料库/实体招牌/灯箱.png",
    thumb: "./ENI资料库/实体招牌/灯箱.png",
    badge: "发光灯箱",
    badgeColor: "gold",
    icon: "💡",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },

  // ==================== 6. 品牌 VI & 官方 LOGO (BRAND VI) ====================
  {
    id: "logo-app-icon",
    category: "brand",
    type: "PNG",
    title: "ENIPAY 官方标准 App 图标 (App Icon)",
    subtitle: "正方形圆角高清图标，适用于移动端应用商店与官网图标",
    path: "./ENI资料库/ENIPAY Logo/IMG_1324.PNG",
    thumb: "./ENI资料库/ENIPAY Logo/IMG_1324.PNG",
    badge: "App Icon",
    badgeColor: "cyan",
    icon: "🎨",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "logo-horiz-dark",
    category: "brand",
    type: "PNG",
    title: "ENIPAY 品牌标准横版 Logo (深色背景专用)",
    subtitle: "高清透明底横版 Logo，适用于演示文稿、官网与广告物料",
    path: "./ENI资料库/ENIPAY Logo/IMG_1534.PNG",
    thumb: "./ENI资料库/ENIPAY Logo/IMG_1534.PNG",
    badge: "标准横版",
    badgeColor: "cyan",
    icon: "🎨",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "logo-horiz-light",
    category: "brand",
    type: "PNG",
    title: "ENIPAY 品牌标准横版 Logo (浅色背景专用)",
    subtitle: "浅色或白色背景印刷与文档专用高清标",
    path: "./ENI资料库/ENIPAY Logo/IMG_1535.PNG",
    thumb: "./ENI资料库/ENIPAY Logo/IMG_1535.PNG",
    badge: "浅底专用",
    badgeColor: "cyan",
    icon: "🎨",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "logo-3d-neon",
    category: "brand",
    type: "PNG",
    title: "ENIPAY 3D 霓虹质感官方徽标",
    subtitle: "3D 金属与霓虹青光泽渲染，适合高端海报与主视觉设计",
    path: "./ENI资料库/ENIPAY Logo/IMG_1536.PNG",
    thumb: "./ENI资料库/ENIPAY Logo/IMG_1536.PNG",
    badge: "3D 徽标",
    badgeColor: "gold",
    icon: "✨",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "logo-symbol",
    category: "brand",
    type: "PNG",
    title: "ENIPAY 品牌核心超级符号 (Icon Symbol)",
    subtitle: "极简字母 E 融合能量芯片造型的品牌超级符号",
    path: "./ENI资料库/ENIPAY Logo/IMG_1537.PNG",
    thumb: "./ENI资料库/ENIPAY Logo/IMG_1537.PNG",
    badge: "超级符号",
    badgeColor: "cyan",
    icon: "💠",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "logo-gold-black",
    category: "brand",
    type: "PNG",
    title: "ENIPAY 极简黑金高奢标 (Gold Edition)",
    subtitle: "尊享黑金卡与 VIP 会员专属高贵配色方案",
    path: "./ENI资料库/ENIPAY Logo/IMG_1538.PNG",
    thumb: "./ENI资料库/ENIPAY Logo/IMG_1538.PNG",
    badge: "黑金高奢",
    badgeColor: "gold",
    icon: "👑",
    canPreview: true,
    canDownload: true,
    previewType: "image"
  },
  {
    id: "logo-psd-source",
    category: "brand",
    type: "PSD",
    title: "ENIPAY 官方 Logo 分层源文件 (Photoshop PSD)",
    subtitle: "包含所有分层、矢量路径与调色图层，供专业设计师二开使用",
    path: "./ENI资料库/ENIPAY Logo/LOGO3.psd",
    badge: "设计源文件",
    badgeColor: "blue",
    icon: "📦",
    canPreview: false,
    canDownload: true
  },

  // ==================== 7. DOCSEND 全球多语种资料库 (DOCSEND GLOBAL) ====================
  {
    id: "docsend-global-deck",
    category: "docsend",
    type: "DOCSEND",
    title: "ENI 公链官方核心白皮书与宣讲资料 (DocSend 6 国语言)",
    subtitle: "DocSend 在线全息查阅，支持 6 种主流语言实时同步官方最新修订版本",
    path: "https://docsend.com/view/7s4r2r8p6i8xex9k",
    badge: "6 语种支持",
    badgeColor: "cyan",
    icon: "🌐",
    isExternal: true,
    canPreview: true,
    canDownload: false,
    multiLangLinks: [
      { lang: "zh", label: "🇨🇳 简体中文版", url: "https://docsend.com/view/7s4r2r8p6i8xex9k" },
      { lang: "zht", label: "🇭🇰 繁體中文版", url: "https://docsend.com/view/h3kzb8q7k9v5p9x2" },
      { lang: "en", label: "🇺🇸 English", url: "https://docsend.com/view/5u8q6c9w8v7x2k4p" },
      { lang: "ja", label: "🇯🇵 日本語版", url: "https://docsend.com/view/4w8v7x2k9p6c5q3m" },
      { lang: "ko", label: "🇰🇷 한국어판", url: "https://docsend.com/view/3m9x2k7p4w8v5c6q" },
      { lang: "vi", label: "🇻🇳 Tiếng Việt", url: "https://docsend.com/view/2k8p9x4w7v5c6q3m" }
    ]
  }
];


// Expose Default Dataset Globally
window.RESOURCES_DATA = RESOURCES_DATA;

// App State
let activeResourcesList = [...RESOURCES_DATA];
let currentCategory = "all";
let currentViewMode = "grid"; // 'grid' | 'list'
let searchQuery = "";
let secretClickCount = 0;

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
  initViewToggle();
  initSearch();
  initCategoryTabs();
  initSecretShortcuts();
  fetchLiveResourcesFromSupabase();
});

// Fetch Realtime Resources from Supabase with Local Fallback
async function fetchLiveResourcesFromSupabase() {
  const url = localStorage.getItem("enipay_supabase_url");
  const key = localStorage.getItem("enipay_supabase_key");
  const localCache = localStorage.getItem("enipay_local_resources_db");

  if (url && key && window.supabase) {
    try {
      const client = window.supabase.createClient(url, key);
      const { data, error } = await client
        .from("resources")
        .select("*")
        .order("sort_order", { ascending: true });

      if (!error && data && data.length > 0) {
        activeResourcesList = data;
        renderResources();
        return;
      }
    } catch (e) {
      console.warn("Supabase fetch failed, falling back to local dataset", e);
    }
  }

  if (localCache) {
    try {
      const parsed = JSON.parse(localCache);
      if (Array.isArray(parsed) && parsed.length > 0) {
        activeResourcesList = parsed;
        renderResources();
        return;
      }
    } catch (e) {}
  }

  activeResourcesList = [...RESOURCES_DATA];
  renderResources();
}

// 🔐 Secret Backdoor Trigger (Cmd+Shift+A or 5-Clicks on footer)
function initSecretShortcuts() {
  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === "a" || e.key === "A")) {
      e.preventDefault();
      window.location.href = "./admin.html";
    }
  });
}

function handleSecretAdminTrigger() {
  secretClickCount++;
  if (secretClickCount >= 5) {
    secretClickCount = 0;
    window.location.href = "./admin.html";
  }
}


// Render Function

// 🎨 Generate High-Tech Themed Cyan Graphic Covers for Documents & PDFs (matching Enipay brand design)
function generateThemedDocCover(item) {
  let gradientClass = "bg-gradient-to-br from-[#84cc16] via-[#00ffb2] to-[#00f2fe]";
  let textDark = "text-[#050811]";
  let enTitle = "A GLOBAL DIGITAL PAYMENT NETWORK FOR HUMANS AND AI AGENTS";
  let zhTitle = "人类与 AI Agent 共用的全球数字支付网络";
  let techFootnote = "Traditional Finance × Blockchain Infrastructure × AI-Powered Payment Layer";
  let microTag = "OFFICIAL SPEC";

  if (item.id === "docsend-global-deck" || item.category === "docsend") {
    gradientClass = "bg-gradient-to-br from-[#00ffb2] via-[#00f2fe] to-[#3b82f6]";
    enTitle = "ENI CHAIN OFFICIAL GLOBAL CORE DECK (6 LANGUAGES)";
    zhTitle = "ENI 公链官方核心资料 · 6 语种在线全息阅览";
    techFootnote = "DocSend Live Sync × Multi-Language Global Reader";
    microTag = "6 LANGUAGES";
  } else if (item.id === "doc-bp-pdf") {
    gradientClass = "bg-gradient-to-br from-[#84cc16] via-[#00ffb2] to-[#00f2fe]";
    enTitle = "ENIPAY OFFICIAL BUSINESS PLAN & STRATEGY";
    zhTitle = "ENIPAY 官方商业计划书 (Business Plan)";
    techFootnote = "Business Model × Tri-Layer Architecture × Token Incentive";
    microTag = "STRATEGY BP";
  } else if (item.id === "doc-qa-pdf" || item.id === "doc-qa-pptx") {
    gradientClass = "bg-gradient-to-br from-[#00f2fe] via-[#00ffb2] to-[#22c55e]";
    enTitle = "ENIPAY MARKET QUESTIONS & ANSWERS MANUAL";
    zhTitle = "ENIPAY 市场常见问答手册 (Q&A)";
    techFootnote = "ENI Chain Base × Binance Custody × Crypto U-Card";
    microTag = item.type === "PPTX" ? "KEYNOTE DECK" : "MARKET FAQ";
  } else if (item.id === "doc-epay-intro") {
    gradientClass = "bg-gradient-to-br from-[#a3e635] via-[#10b981] to-[#06b6d4]";
    enTitle = "EPAY TOKENOMICS & DEFLATIONARY ACCELERATOR";
    zhTitle = "EPAY 项目深度介绍 (中文版)";
    techFootnote = "80% Black Hole × 5% Mandatory Buyback × 100-Tier Matrix";
    microTag = "TOKENOMICS";
  } else if (item.id === "doc-epay-v14") {
    gradientClass = "bg-gradient-to-br from-[#00ffb2] via-[#00c8ff] to-[#3b82f6]";
    enTitle = "GLOBAL PAYMENT AGGREGATION PROTOCOL v1.4";
    zhTitle = "Epay 全球聚合支付平台架构白皮书 v1.4";
    techFootnote = "Four-Party Clearing × Smart Contracts × On-Off Ramp Rails";
    microTag = "WHITEPAPER";
  } else if (item.id === "doc-amend-pdf") {
    gradientClass = "bg-gradient-to-br from-[#38bdf8] via-[#00ffb2] to-[#84cc16]";
    enTitle = "GLOBAL FINANCIAL LICENSES & COMPLIANCE";
    zhTitle = "ENIPAY 生态规划与合规补充说明";
    techFootnote = "Global M&A × Multi-Jurisdiction Compliance × Risk Protocol";
    microTag = "COMPLIANCE";
  } else if (item.title) {
    zhTitle = item.title;
    enTitle = item.subtitle ? item.subtitle.toUpperCase() : "ENIPAY OFFICIAL VERIFIED RESOURCE";
    techFootnote = "Traditional Finance × Blockchain Infrastructure × AI Payment Layer";
    microTag = item.type || "DOC";
  }

  const clickAction = (item.previewType === "pdf" || item.type === "PDF") 
    ? `onclick="window.open('${item.path}', '_blank')"` 
    : (item.path ? `onclick="window.open('${item.path}', '_blank')"` : "");

  return `
    <div class="h-36 sm:h-40 w-full ${gradientClass} rounded-xl p-3 flex flex-col justify-between relative overflow-hidden shadow-md cursor-pointer group/cover hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(0,255,178,0.35)] transition-all border border-white/20 select-none" ${clickAction}>
      <!-- Top Brand Row -->
      <div class="flex items-center justify-between z-10">
        <div class="flex items-center gap-1.5 font-mono font-black ${textDark} text-[11px] tracking-wider">
          <span class="w-4 h-4 bg-[#050811] text-[#00ffb2] rounded flex items-center justify-center text-[10px] font-bold">E</span>
          <span>ENI\PAY</span>
        </div>
        <span class="text-[8px] font-mono font-bold ${textDark} bg-black/10 px-1.5 py-0.5 rounded border border-black/15 uppercase">
          ${microTag}
        </span>
      </div>

      <!-- Center Headline -->
      <div class="z-10 my-auto text-center px-1">
        <div class="text-[10px] sm:text-[11px] font-black ${textDark} tracking-tight leading-snug uppercase font-mono mb-0.5 line-clamp-2">
          ${enTitle}
        </div>
        <div class="text-xs sm:text-[13px] font-extrabold ${textDark} leading-tight drop-shadow-sm line-clamp-1">
          ${zhTitle}
        </div>
      </div>

      <!-- Bottom Footnote -->
      <div class="z-10 text-center border-t border-black/15 pt-1">
        <div class="text-[8px] font-mono font-semibold ${textDark}/85 truncate">
          ${techFootnote}
        </div>
      </div>

      <!-- Background Glow & Mesh Overlays -->
      <div class="absolute -right-6 -top-6 w-20 h-20 bg-white/30 rounded-full blur-lg pointer-events-none group-hover/cover:scale-125 transition-transform"></div>
      <div class="absolute -left-6 -bottom-6 w-20 h-20 bg-black/10 rounded-full blur-lg pointer-events-none"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20 pointer-events-none"></div>
      <div class="absolute inset-0 bg-cyan-neon/10 opacity-0 group-hover/cover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  `;
}

function renderResources() {
  const container = document.getElementById("resources-container");
  const emptyState = document.getElementById("empty-state");
  const countBadge = document.getElementById("total-count-badge");
  if (!container) return;

  const filtered = activeResourcesList.filter((item) => {
    const matchCat = currentCategory === "all" || item.category === currentCategory;
    const matchSearch =
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery) ||
      item.subtitle.toLowerCase().includes(searchQuery) ||
      item.type.toLowerCase().includes(searchQuery) ||
      item.badge.toLowerCase().includes(searchQuery);
    return matchCat && matchSearch;
  });

  if (countBadge) {
    countBadge.innerText = `${filtered.length} 项资源`;
  }

  if (filtered.length === 0) {
    container.innerHTML = "";
    if (emptyState) emptyState.classList.remove("hidden");
    return;
  }

  if (emptyState) emptyState.classList.add("hidden");

  if (currentViewMode === "grid") {
    renderGridView(container, filtered);
  } else {
    renderListView(container, filtered);
  }
}

// 🔲 Grid View Renderer
function renderGridView(container, items) {
  container.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5";

  container.innerHTML = items
    .map((item) => {
      const isVideo = item.category === "videos" || item.type === "MP4" || (item.path && item.path.toLowerCase().endsWith(".mp4"));
      const isDocSend = item.type === "DOCSEND" || item.category === "docsend" || (item.path && item.path.includes("docsend.com"));
      const isPdf = item.previewType === "pdf" || item.preview_type === "pdf" || item.type === "PDF" || (item.path && item.path.toLowerCase().endsWith(".pdf"));
      const isImage = (item.previewType === "image" || item.preview_type === "image" || ["PNG", "JPG", "JPEG", "WEBP"].includes(item.type)) && !isVideo && !isDocSend && !isPdf;

      const canPreview = item.canPreview !== false && item.can_preview !== false;
      const canDownload = item.canDownload !== false && item.can_download !== false && !isVideo && !isDocSend;
      const badgeColor = item.badgeColor || item.badge_color || "cyan";

      let mediaPreview = "";
      if (isImage || item.thumb) {
        mediaPreview = `
          <div class="h-36 sm:h-40 w-full bg-slate-950/80 rounded-xl overflow-hidden flex items-center justify-center relative group cursor-pointer border border-slate-800/80 hover:border-cyan-neon/50 transition-all" onclick="openImageLightbox('${item.path}', '${item.title}')">
            <img src="${item.thumb || item.path}" alt="${item.title}" class="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" loading="lazy">
            <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span class="p-2 rounded-full bg-cyan-neon/20 border border-cyan-neon text-cyan-neon text-xs font-bold shadow-lg">🔍 点击查看大图</span>
            </div>
          </div>
        `;
      } else if (isVideo) {
        mediaPreview = `
          <div class="h-36 sm:h-40 w-full bg-slate-950 rounded-xl overflow-hidden flex flex-col items-center justify-center relative group cursor-pointer border border-slate-800/80 hover:border-cyan-neon/50 transition-all" onclick="openVideoModal('${item.path}', '${item.title}')">
            <div class="w-12 h-12 rounded-full bg-cyan-neon/20 border border-cyan-neon flex items-center justify-center text-cyan-neon text-xl shadow-[0_0_20px_rgba(0,255,178,0.3)] group-hover:scale-110 transition-transform">
              ▶
            </div>
            <div class="text-[11px] font-mono text-cyan-neon mt-2 font-bold">在线高清播放</div>
            <div class="absolute top-2 right-2 cyber-pill text-[9px] py-0.2 px-1.5 bg-red-500/20 text-red-400 border-red-500/30">🔒 仅限在线观看</div>
          </div>
        `;
      } else {
        mediaPreview = generateThemedDocCover(item);
      }

      // Actions buttons
      let actionButtons = "";
      if (item.multiLangLinks && Array.isArray(item.multiLangLinks)) {
        actionButtons = `
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5 w-full pt-2 border-t border-slate-800/80">
            ${item.multiLangLinks
              .map(
                (link) => `
              <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="py-1 px-1.5 rounded-lg bg-slate-900/90 hover:bg-cyan-neon/20 text-slate-200 hover:text-cyan-neon border border-slate-700/80 hover:border-cyan-neon/50 text-[10px] font-bold flex items-center justify-between transition-all group/link shadow-sm">
                <span class="truncate">${link.label}</span>
                <span class="text-[9px] text-cyan-neon group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform flex-shrink-0 ml-1">↗</span>
              </a>
            `
              )
              .join("")}
          </div>
        `;
      } else if (isDocSend) {
        actionButtons = `
          <a href="${item.path}" target="_blank" rel="noopener noreferrer" class="w-full py-2 px-3 rounded-xl bg-cyan-neon/15 hover:bg-cyan-neon/25 text-cyan-neon border border-cyan-neon/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm">
            <span>🌐</span> 在线全息查阅 ↗
          </a>
        `;
      } else if (isVideo) {
        actionButtons = `
          <button onclick="openVideoModal('${item.path}', '${item.title}')" class="w-full py-2 px-3 rounded-xl bg-cyan-neon/15 hover:bg-cyan-neon/25 text-cyan-neon border border-cyan-neon/40 text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm">
            <span>▶️</span> 在线播放 (禁止下载)
          </button>
        `;
      } else {
        let previewBtn = "";
        if (canPreview) {
          if (isPdf) {
            previewBtn = `<a href="${item.path}" target="_blank" class="flex-1 py-1.5 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-bright border border-slate-700 hover:border-cyan-bright/50 text-xs font-bold flex items-center justify-center gap-1 transition-all"><span>👁️</span> 浏览</a>`;
          } else if (isImage) {
            previewBtn = `<button onclick="openImageLightbox('${item.path}', '${item.title}')" class="flex-1 py-1.5 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-bright border border-slate-700 hover:border-cyan-bright/50 text-xs font-bold flex items-center justify-center gap-1 transition-all"><span>👁️</span> 大图</button>`;
          } else {
            previewBtn = `<a href="${item.path}" target="_blank" class="flex-1 py-1.5 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-bright border border-slate-700 hover:border-cyan-bright/50 text-xs font-bold flex items-center justify-center gap-1 transition-all"><span>👁️</span> 打开</a>`;
          }
        }

        let downloadBtn = "";
        if (canDownload) {
          downloadBtn = `<a href="${item.path}" download class="flex-1 py-1.5 px-2.5 rounded-lg bg-cyan-neon/15 hover:bg-cyan-neon/25 text-cyan-neon border border-cyan-neon/40 text-xs font-bold flex items-center justify-center gap-1 transition-all"><span>⬇️</span> 下载</a>`;
        }

        actionButtons = `
          <div class="flex items-center gap-2 w-full pt-2 border-t border-slate-800/80">
            ${previewBtn}
            ${downloadBtn}
          </div>
        `;
      }

      return `
        <div class="res-card p-4 flex flex-col justify-between h-full bg-slate-900/70 border border-slate-800/80 rounded-2xl hover:border-cyan-neon/50 transition-all group">
          <div>
            <div class="flex items-center justify-between gap-2 mb-2.5">
              <span class="cyber-pill text-[9px] py-0.5 px-2 bg-${badgeColor === "gold" ? "gold-400/15 text-gold-400 border-gold-400/30" : badgeColor === "blue" ? "blue-500/15 text-blue-400 border-blue-500/30" : "cyan-neon/15 text-cyan-neon border-cyan-neon/30"} font-bold">
                ${item.badge || item.category}
              </span>
              <span class="text-[10px] font-mono text-slate-400 font-bold">${item.type}</span>
            </div>

            ${mediaPreview}

            <div class="mt-3">
              <h3 class="text-sm font-bold text-white leading-snug line-clamp-2 group-hover:text-cyan-neon transition-colors" title="${item.title}">
                ${item.title}
              </h3>
              <p class="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed" title="${item.subtitle || ''}">
                ${item.subtitle || ''}
              </p>
            </div>
          </div>

          <div class="mt-3">
            ${actionButtons}
          </div>
        </div>
      `;
    })
    .join("");
}

// 📋 List View Renderer
function renderListView(container, items) {
  container.className = "flex flex-col gap-2.5";

  container.innerHTML = items
    .map((item) => {
      const isVideo = item.category === "videos" || item.type === "MP4" || (item.path && item.path.toLowerCase().endsWith(".mp4"));
      const isDocSend = item.type === "DOCSEND" || item.category === "docsend" || (item.path && item.path.includes("docsend.com"));
      const isPdf = item.previewType === "pdf" || item.preview_type === "pdf" || item.type === "PDF" || (item.path && item.path.toLowerCase().endsWith(".pdf"));
      const isImage = (item.previewType === "image" || item.preview_type === "image" || ["PNG", "JPG", "JPEG", "WEBP"].includes(item.type)) && !isVideo && !isDocSend && !isPdf;

      const canPreview = item.canPreview !== false && item.can_preview !== false;
      const canDownload = item.canDownload !== false && item.can_download !== false && !isVideo && !isDocSend;
      const badgeColor = item.badgeColor || item.badge_color || "cyan";

      // Small Thumb
      let thumbHtml = "";
      if (isImage || item.thumb) {
        thumbHtml = `
          <div class="w-12 h-12 rounded-lg bg-slate-950 overflow-hidden flex items-center justify-center flex-shrink-0 border border-slate-800 cursor-pointer" onclick="openImageLightbox('${item.path}', '${item.title}')">
            <img src="${item.thumb || item.path}" class="w-full h-full object-cover" loading="lazy">
          </div>
        `;
      } else if (isVideo) {
        thumbHtml = `
          <div class="w-12 h-12 rounded-lg bg-slate-950 flex items-center justify-center text-cyan-neon text-lg border border-slate-800 flex-shrink-0 cursor-pointer" onclick="openVideoModal('${item.path}', '${item.title}')">
            ▶
          </div>
        `;
      } else {
        const clickAction = isPdf ? `onclick="window.open('${item.path}', '_blank')"` : isDocSend ? `onclick="window.open('${item.path}', '_blank')"` : "";
        thumbHtml = `
          <div class="w-12 h-12 rounded-lg bg-slate-950 flex items-center justify-center text-xl border border-slate-800 flex-shrink-0 cursor-pointer hover:border-cyan-neon" ${clickAction}>
            ${item.icon || '📄'}
          </div>
        `;
      }

      // Actions
      let actionButtons = "";
      if (item.multiLangLinks && Array.isArray(item.multiLangLinks)) {
        actionButtons = `
          <div class="flex items-center gap-1.5 flex-wrap">
            ${item.multiLangLinks
              .map(
                (link) => `
              <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="py-1 px-2 rounded-lg bg-slate-900/90 hover:bg-cyan-neon/20 text-slate-200 hover:text-cyan-neon border border-slate-700/80 hover:border-cyan-neon/50 text-[10px] font-bold flex items-center gap-1 transition-all">
                <span>${link.label}</span>
                <span class="text-[9px] text-cyan-neon">↗</span>
              </a>
            `
              )
              .join("")}
          </div>
        `;
      } else if (isDocSend) {
        actionButtons = `
          <a href="${item.path}" target="_blank" rel="noopener noreferrer" class="py-1.5 px-3 rounded-lg bg-cyan-neon/15 hover:bg-cyan-neon/25 text-cyan-neon border border-cyan-neon/40 text-xs font-bold flex items-center gap-1 transition-all whitespace-nowrap">
            <span>🌐</span> 在线查阅 ↗
          </a>
        `;
      } else if (isVideo) {
        actionButtons = `
          <button onclick="openVideoModal('${item.path}', '${item.title}')" class="py-1.5 px-3 rounded-lg bg-cyan-neon/15 hover:bg-cyan-neon/25 text-cyan-neon border border-cyan-neon/40 text-xs font-bold flex items-center gap-1 transition-all whitespace-nowrap">
            <span>▶️</span> 在线播放
          </button>
        `;
      } else {
        let previewBtn = "";
        if (canPreview) {
          if (isPdf) {
            previewBtn = `<a href="${item.path}" target="_blank" class="py-1.5 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-bright border border-slate-700 text-xs font-bold flex items-center gap-1 transition-all whitespace-nowrap"><span>👁️</span> 浏览</a>`;
          } else if (isImage) {
            previewBtn = `<button onclick="openImageLightbox('${item.path}', '${item.title}')" class="py-1.5 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-bright border border-slate-700 text-xs font-bold flex items-center gap-1 transition-all whitespace-nowrap"><span>👁️</span> 大图</button>`;
          } else {
            previewBtn = `<a href="${item.path}" target="_blank" class="py-1.5 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-bright border border-slate-700 text-xs font-bold flex items-center gap-1 transition-all whitespace-nowrap"><span>👁️</span> 打开</a>`;
          }
        }

        let downloadBtn = "";
        if (canDownload) {
          downloadBtn = `<a href="${item.path}" download class="py-1.5 px-2.5 rounded-lg bg-cyan-neon/15 hover:bg-cyan-neon/25 text-cyan-neon border border-cyan-neon/40 text-xs font-bold flex items-center gap-1 transition-all whitespace-nowrap"><span>⬇️</span> 下载</a>`;
        }

        actionButtons = `
          <div class="flex items-center gap-2">
            ${previewBtn}
            ${downloadBtn}
          </div>
        `;
      }

      return `
        <div class="res-card p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-slate-900/80 border border-slate-800/80 rounded-xl hover:border-cyan-neon/40 transition-all">
          <div class="flex items-center gap-3 min-w-0 flex-1">
            ${thumbHtml}
            <div class="min-w-0 flex-1">
              <div class="flex items-center gap-2 mb-0.5 flex-wrap">
                <span class="cyber-pill text-[9px] py-0.2 px-1.5 bg-${badgeColor === "gold" ? "gold-400/15 text-gold-400 border-gold-400/30" : "cyan-neon/15 text-cyan-neon border-cyan-neon/30"} font-bold">
                  ${item.badge || item.category}
                </span>
                <span class="text-[10px] font-mono text-slate-400">${item.type}</span>
                ${item.size ? `<span class="text-[10px] text-slate-500 font-mono">· ${item.size}</span>` : ""}
                ${isVideo ? `<span class="text-[9px] text-red-400/80 font-mono">· 仅限在线播放</span>` : ""}
              </div>
              <h3 class="text-xs sm:text-sm font-bold text-white truncate" title="${item.title}">
                ${item.title}
              </h3>
              <p class="text-[11px] text-slate-400 truncate hidden sm:block">
                ${item.subtitle || ''}
              </p>
            </div>
          </div>
          <div class="flex-shrink-0 self-end sm:self-center">
            ${actionButtons}
          </div>
        </div>
      `;
    })
    .join("");
}

// Category Tabs Init
function initCategoryTabs() {
  const tabs = document.querySelectorAll(".category-tab-btn");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active-tab"));
      tab.classList.add("active-tab");
      currentCategory = tab.getAttribute("data-category") || "all";
      renderResources();
    });
  });
}

// Search Init
function initSearch() {
  const input = document.getElementById("search-input");
  if (!input) return;
  input.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderResources();
  });
}

// View Toggle Init
function initViewToggle() {
  const btnGrid = document.getElementById("btn-view-grid");
  const btnList = document.getElementById("btn-view-list");
  if (!btnGrid || !btnList) return;

  btnGrid.addEventListener("click", () => {
    currentViewMode = "grid";
    btnGrid.classList.add("active-view");
    btnList.classList.remove("active-view");
    renderResources();
  });

  btnList.addEventListener("click", () => {
    currentViewMode = "list";
    btnList.classList.add("active-view");
    btnGrid.classList.remove("active-view");
    renderResources();
  });
}

// 🎬 Video Player Modal (With Download Prevention)
function openVideoModal(url, title) {
  const modal = document.getElementById("video-modal");
  const player = document.getElementById("modal-video-player");
  const titleEl = document.getElementById("video-modal-title");

  if (titleEl) titleEl.innerText = title || "ENIPAY 官方视频";
  if (player) {
    player.src = url;
    player.controlsList = "nodownload"; // Disable browser native download button
    player.oncontextmenu = () => false; // Prevent right-click save
    player.play().catch(() => {});
  }
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closeVideoModal() {
  const modal = document.getElementById("video-modal");
  const player = document.getElementById("modal-video-player");
  if (player) {
    player.pause();
    player.src = "";
  }
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// 🖼️ Image Lightbox Modal
function openImageLightbox(url, title) {
  const modal = document.getElementById("image-modal");
  const img = document.getElementById("modal-image");
  const titleEl = document.getElementById("image-modal-title");
  const downloadLink = document.getElementById("image-download-link");

  if (titleEl) titleEl.innerText = title || "物料大图预览";
  if (img) img.src = url;
  if (downloadLink) {
    downloadLink.href = url;
    downloadLink.download = title || "enipay-material.png";
  }
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}

function closeImageLightbox() {
  const modal = document.getElementById("image-modal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// Language Switcher Helper
function switchLanguage(lang) {
  localStorage.setItem("enipay_lang", lang);
  if (window.setAppLanguage) {
    window.setAppLanguage(lang);
  } else if (window.i18n && window.i18n.setLanguage) {
    window.i18n.setLanguage(lang);
  }
}

// Global escape key handler to close modals
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeVideoModal();
    closeImageLightbox();
  }
});

// Auto-sync select element on load
window.addEventListener("load", () => {
  const savedLang = localStorage.getItem("enipay_lang") || "zh";
  const select = document.getElementById("hub-lang-select");
  if (select) select.value = savedLang;
  if (window.setAppLanguage) {
    window.setAppLanguage(savedLang);
  }
});

