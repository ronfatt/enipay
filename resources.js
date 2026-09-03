/**
 * ENIPAY Official Media & Resource Hub (资料库) Controller
 * Modern, Clean, Aligned Grid & List Views with Instant Search, Filter & Modals
 */

// Complete Local & Remote Resources Dataset
const RESOURCES_DATA = [
  {
    "id": "doc-bp-multilang",
    "category": "docs",
    "type": "PDF",
    "title": "ENIPAY 官方商业计划书 (Business Plan · 6 国语言)",
    "subtitle": "全面解析 ENIPAY 商业模式、三层架构、代币激励与上市路径 (中/英/日/韩/越/印尼)",
    "path": "./ENI资料库/EPAY中文/ENIPAY_Business_Plan_ZH.pdf",
    "size": "8.2 MB",
    "badge": "商业计划书",
    "badgeColor": "gold",
    "icon": "📄",
    "canPreview": true,
    "canDownload": true,
    "previewType": "pdf",
    "multiLangLinks": [
      {
        "lang": "zh",
        "label": "🇨🇳 中文版",
        "url": "./ENI资料库/EPAY中文/ENIPAY_Business_Plan_ZH.pdf"
      },
      {
        "lang": "en",
        "label": "🇺🇸 English",
        "url": "./ENI资料库/EPAY英文/ENIPAY_Business_Plan_EN.pdf"
      },
      {
        "lang": "ja",
        "label": "🇯🇵 日本語",
        "url": "./ENI资料库/EPAY日文/ENIPAY_Business_Plan_JP.pdf"
      },
      {
        "lang": "ko",
        "label": "🇰🇷 한국어",
        "url": "./ENI资料库/EPAY韩文/ENIPAY_Business_Plan_KR.pdf"
      },
      {
        "lang": "vi",
        "label": "🇻🇳 Tiếng Việt",
        "url": "./ENI资料库/EPAY越南/ENIPAY_Business_Plan_VN.pdf"
      },
      {
        "lang": "id",
        "label": "🇮🇩 Indonesia",
        "url": "./ENI资料库/EPAY印尼语/ENIPAY_Business_Plan_ID.pdf"
      }
    ]
  },
  {
    "id": "doc-qa-pdf",
    "category": "qa",
    "type": "PDF",
    "title": "ENIPAY 市场常见问答手册 (Q&A Manual)",
    "subtitle": "全面解答关于 ENI 公链底座、币安托管、U卡申请与收益模型等核心问题",
    "path": "./ENI资料库/ENIPAY 问与答/ENIPAY市场问答Q&A.pdf",
    "size": "3.4 MB",
    "badge": "市场答疑",
    "badgeColor": "cyan",
    "icon": "❓",
    "canPreview": true,
    "canDownload": true,
    "previewType": "pdf"
  },
  {
    "id": "doc-qa-pptx",
    "category": "qa",
    "type": "PPTX",
    "title": "ENIPAY 市场问答宣讲幻灯片 (Q&A PPTX)",
    "subtitle": "官方标准演讲幻灯片，适用于线下招商会、社区路演与团队布道",
    "path": "./ENI资料库/ENIPAY 问与答/ENIPAY市场问答Q&A.pptx",
    "size": "5.1 MB",
    "badge": "招商演示",
    "badgeColor": "cyan",
    "icon": "📊",
    "canPreview": false,
    "canDownload": true
  },
  {
    "id": "doc-epay-intro",
    "category": "docs",
    "type": "PDF",
    "title": "EPAY 项目深度介绍 (中文版)",
    "subtitle": "聚焦 EPAY 双通缩机制、回购销毁执行器与 100 代社区裂变激励",
    "path": "./EPAY 项目介绍 中文.pdf",
    "size": "4.7 MB",
    "badge": "项目介绍",
    "badgeColor": "gold",
    "icon": "📘",
    "canPreview": true,
    "canDownload": true,
    "previewType": "pdf"
  },
  {
    "id": "doc-epay-v14",
    "category": "docs",
    "type": "PDF",
    "title": "Epay 全球聚合支付平台架构白皮书 v1.4",
    "subtitle": "四方清算技术规范、合规出入金方案与智能合约体系详解",
    "path": "./Epay 聚合平台v1.4.pdf",
    "size": "3.0 MB",
    "badge": "技术白皮书",
    "badgeColor": "cyan",
    "icon": "📑",
    "canPreview": true,
    "canDownload": true,
    "previewType": "pdf"
  },
  {
    "id": "doc-deck-vn",
    "category": "docs",
    "type": "PDF",
    "title": "ENIPAY 越南语生态演讲手册 (Deck VN)",
    "subtitle": "ENIPAY 越南社区专用路演与业务宣讲官方手册",
    "path": "./ENI资料库/EPAY越南/ENIPAY_deck_VN.pdf",
    "size": "4.2 MB",
    "badge": "越南手册",
    "badgeColor": "cyan",
    "icon": "🇻🇳",
    "canPreview": true,
    "canDownload": true,
    "previewType": "pdf"
  },
  {
    "id": "docsend-global-deck",
    "category": "docsend",
    "type": "DOCSEND",
    "title": "ENI 公链官方核心白皮书与宣讲资料 (DocSend 6 国语言)",
    "subtitle": "DocSend 在线全息查阅，支持 6 种主流语言实时同步官方最新修订版本",
    "path": "https://docsend.com/view/snsckjftrk4wj2af",
    "badge": "6 语种支持",
    "badgeColor": "cyan",
    "icon": "🌐",
    "isExternal": true,
    "canPreview": true,
    "canDownload": false,
    "multiLangLinks": [
      {
        "lang": "zh",
        "label": "🇨🇳 简体中文版",
        "url": "https://docsend.com/view/snsckjftrk4wj2af"
      },
      {
        "lang": "zht",
        "label": "🇭🇰 繁體中文版",
        "url": "https://docsend.com/view/25w7zbf32t5nzrpj"
      },
      {
        "lang": "en",
        "label": "🇺🇸 英文版 (English)",
        "url": "https://docsend.com/view/iii725phveai54z9"
      },
      {
        "lang": "ko",
        "label": "🇰🇷 한국어판",
        "url": "https://docsend.com/view/cq5mnjjmcyvs8mp8"
      },
      {
        "lang": "vi",
        "label": "🇻🇳 Tiếng Việt 越南版",
        "url": "https://docsend.com/view/e88xepp5au3ueu5f"
      },
      {
        "lang": "ja",
        "label": "🇯🇵 日本語版",
        "url": "https://docsend.com/view/dxrhryufyny9hp7v"
      }
    ]
  },
  {
    "id": "video-eni-main",
    "category": "videos",
    "type": "MP4",
    "title": "ENI 公链官方品牌宣传大片",
    "subtitle": "展现东京总部、NTT 战略合作、模块化 L1 架构与 5 年稳健运行风采",
    "path": "./ENI资料库/视频/ENI宣传视频.MP4",
    "badge": "公链大片",
    "badgeColor": "cyan",
    "icon": "🎬",
    "canPreview": true,
    "canDownload": false,
    "previewType": "video"
  },
  {
    "id": "video-enipay-promo",
    "category": "videos",
    "type": "MP4",
    "title": "ENIPAY 全球支付聚合平台宣传短片",
    "subtitle": "三色 U 卡、双币扫码、AI 智能助手卡与全球生活出行全景演示",
    "path": "./ENI资料库/视频/ENIPAY宣传短片MP4.MP4",
    "badge": "平台短片",
    "badgeColor": "cyan",
    "icon": "🎬",
    "canPreview": true,
    "canDownload": false,
    "previewType": "video"
  },
  {
    "id": "video-spokesperson",
    "category": "videos",
    "type": "MP4",
    "title": "ENIPAY 品牌形象代言宣传短片",
    "subtitle": "特邀形象大使助力全球布道与市场裂变推广",
    "path": "./ENI资料库/视频/光头强ENIPAY代言.mp4",
    "badge": "形象代言",
    "badgeColor": "gold",
    "icon": "🎬",
    "canPreview": true,
    "canDownload": false,
    "previewType": "video"
  },
  {
    "id": "video-ecosystem",
    "category": "videos",
    "type": "MP4",
    "title": "ENIPAY ECOSYSTEM 全球生态全景",
    "subtitle": "全球化商业落地战略、五年上市规划与万亿清算赛道解析",
    "path": "./ENI资料库/视频/ENIPAY ECOSYSTEM.mp4",
    "badge": "生态全景",
    "badgeColor": "cyan",
    "icon": "🎬",
    "canPreview": true,
    "canDownload": false,
    "previewType": "video"
  },
  {
    "id": "video-finance-model",
    "category": "videos",
    "type": "MP4",
    "title": "ENI MG 金融模型与通缩机制深度解读",
    "subtitle": "权威剖析代币通缩模型、节点产出与做市加速机制",
    "path": "./ENI资料库/视频/ENIMG金融模型解读.mp4",
    "badge": "金融模型",
    "badgeColor": "gold",
    "icon": "🎬",
    "canPreview": true,
    "canDownload": false,
    "previewType": "video"
  },
  {
    "id": "video-wealth-code",
    "category": "videos",
    "type": "MP4",
    "title": "ENIPAY 财富密码与全球红利",
    "subtitle": "解析 Web3 支付蓝海市场与早期参与者红利分配",
    "path": "./ENI资料库/视频/ENIPAY财富密码.mp4",
    "badge": "财富红利",
    "badgeColor": "gold",
    "icon": "🎬",
    "canPreview": true,
    "canDownload": false,
    "previewType": "video"
  },
  {
    "id": "video-super-eco",
    "category": "videos",
    "type": "MP4",
    "title": "EPAY 超级生态落地演示",
    "subtitle": "全球落地商铺消费、卡片绑定与实时核销流程",
    "path": "./ENI资料库/视频/EPAY超级生态.MP4",
    "badge": "超级生态",
    "badgeColor": "cyan",
    "icon": "🎬",
    "canPreview": true,
    "canDownload": false,
    "previewType": "video"
  },
  {
    "id": "video-digital-pay",
    "category": "videos",
    "type": "MP4",
    "title": "EPAY 数字支付与即时出入金",
    "subtitle": "无冻卡极速合规出入金全流程实操演示",
    "path": "./ENI资料库/视频/EPAY数字支付.MP4",
    "badge": "数字支付",
    "badgeColor": "cyan",
    "icon": "🎬",
    "canPreview": true,
    "canDownload": false,
    "previewType": "video"
  },
  {
    "id": "video-eni-promo-2",
    "category": "videos",
    "type": "MP4",
    "title": "ENI 公链全球节点与技术架构短片 02",
    "subtitle": "全球超级节点部署实况与跨链清算性能展示",
    "path": "./ENI资料库/视频/ENI 宣传视频 02.mp4",
    "badge": "节点技术",
    "badgeColor": "cyan",
    "icon": "🎬",
    "canPreview": true,
    "canDownload": false,
    "previewType": "video"
  },
  {
    "id": "poster-long-intro",
    "category": "posters",
    "type": "PNG",
    "title": "ENIPAY 官方简介全景长图 (多语言)",
    "subtitle": "长图全景展现平台愿景、五大落地产品、质押收益与上市战略",
    "path": "./ENI资料库/EPAY中文/ENIPAY 简介长图.png",
    "thumb": "./ENI资料库/EPAY中文/ENIPAY 简介长图.png",
    "badge": "官方长图",
    "badgeColor": "cyan",
    "icon": "🖼️",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image",
    "multiLangLinks": [
      {
        "lang": "zh",
        "label": "🇨🇳 中文长图",
        "url": "./ENI资料库/EPAY中文/ENIPAY 简介长图.png"
      },
      {
        "lang": "en",
        "label": "🇺🇸 English",
        "url": "./ENI资料库/EPAY英文/ENIPAY introduction image.png"
      },
      {
        "lang": "ja",
        "label": "🇯🇵 日本語",
        "url": "./ENI资料库/EPAY日文/日文长图.jpg"
      },
      {
        "lang": "ko",
        "label": "🇰🇷 한국어",
        "url": "./ENI资料库/EPAY韩文/长图（韩文）.png"
      },
      {
        "lang": "vi",
        "label": "🇻🇳 Tiếng Việt",
        "url": "./ENI资料库/EPAY越南/Hình ảnh giới thiệu ENIPAY.png"
      },
      {
        "lang": "id",
        "label": "🇮🇩 Indonesia",
        "url": "./ENI资料库/EPAY印尼语/enipay_indonesian.png"
      }
    ]
  },
  {
    "id": "poster-competitive-edge",
    "category": "posters",
    "type": "PNG",
    "title": "ENIPAY 生态竞争优势图解 (多语言)",
    "subtitle": "对比传统出入金与竞品，凸显 100% 币安托管与无冻卡优势",
    "path": "./ENI资料库/EPAY中文/ENIPAY 生态竞争优势.PNG",
    "thumb": "./ENI资料库/EPAY中文/ENIPAY 生态竞争优势.PNG",
    "badge": "竞争优势",
    "badgeColor": "gold",
    "icon": "🖼️",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image",
    "multiLangLinks": [
      {
        "lang": "zh",
        "label": "🇨🇳 中文版",
        "url": "./ENI资料库/EPAY中文/ENIPAY 生态竞争优势.PNG"
      },
      {
        "lang": "en",
        "label": "🇺🇸 English",
        "url": "./ENI资料库/EPAY英文/ENIPAY's competitive advantages.png"
      },
      {
        "lang": "ja",
        "label": "🇯🇵 日本語",
        "url": "./ENI资料库/EPAY日文/日文四大竞争优势.jpg"
      },
      {
        "lang": "ko",
        "label": "🇰🇷 한국어",
        "url": "./ENI资料库/EPAY韩文/ENI竞争优势（韩文）.png"
      },
      {
        "lang": "vi",
        "label": "🇻🇳 Tiếng Việt",
        "url": "./ENI资料库/EPAY越南/Đặc điểm dự án ENIPAY.png"
      },
      {
        "lang": "id",
        "label": "🇮🇩 Indonesia",
        "url": "./ENI资料库/EPAY印尼语/epaykeunggulan kompetitif.png"
      }
    ]
  },
  {
    "id": "poster-staking-model",
    "category": "posters",
    "type": "PNG",
    "title": "ENIPAY 金融模型与收益横图 (多语言)",
    "subtitle": "300~10000U 投资梯度、日化 1% 与 3.5 倍出局机制全景横图",
    "path": "./ENI资料库/EPAY中文/ENIPAY 质押模型 01.png",
    "thumb": "./ENI资料库/EPAY中文/ENIPAY 质押模型 01.png",
    "badge": "金融模型",
    "badgeColor": "gold",
    "icon": "🖼️",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image",
    "multiLangLinks": [
      {
        "lang": "zh",
        "label": "🇨🇳 中文横图",
        "url": "./ENI资料库/EPAY中文/ENIPAY 质押模型 01.png"
      },
      {
        "lang": "en",
        "label": "🇺🇸 English",
        "url": "./ENI资料库/EPAY英文/Introduction to ENIPAY Financial Model.png"
      },
      {
        "lang": "ja",
        "label": "🇯🇵 日本語",
        "url": "./ENI资料库/EPAY日文/日文模式横图.jpg"
      },
      {
        "lang": "ko",
        "label": "🇰🇷 한국어",
        "url": "./ENI资料库/EPAY韩文/模式横图（韩文）.png"
      },
      {
        "lang": "vi",
        "label": "🇻🇳 Tiếng Việt",
        "url": "./ENI资料库/EPAY越南/Giới thiệu về Mô hình Tài chính ENIPAY.png"
      },
      {
        "lang": "id",
        "label": "🇮🇩 Indonesia",
        "url": "./ENI资料库/EPAY印尼语/Bagan Horizontal Pola.png"
      }
    ]
  },
  {
    "id": "poster-eco-overview",
    "category": "posters",
    "type": "PNG",
    "title": "ENI 生态系统简介展板",
    "subtitle": "公链底座、支付清算与生态矩阵一览",
    "path": "./ENI资料库/EPAY中文/ENI 生态简介.png",
    "thumb": "./ENI资料库/EPAY中文/ENI 生态简介.png",
    "badge": "生态展板",
    "badgeColor": "cyan",
    "icon": "🖼️",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image"
  },
  {
    "id": "poster-fission-model",
    "category": "posters",
    "type": "PNG",
    "title": "ENIPAY 100代裂变管理模型 02",
    "subtitle": "100 代动态裂变奖金池与团队管理激励图解",
    "path": "./ENI资料库/EPAY中文/NIPAY 质押模型 02.png",
    "thumb": "./ENI资料库/EPAY中文/NIPAY 质押模型 02.png",
    "badge": "裂变模型",
    "badgeColor": "gold",
    "icon": "🖼️",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image"
  },
  {
    "id": "poster-main-1",
    "category": "posters",
    "type": "PNG",
    "title": "ENI 官方主视觉海报 01 (多语言)",
    "subtitle": "极具科技感的高清主视觉，适合线下峰会与展会背景",
    "path": "./ENI资料库/EPAY中文/ENI海报.PNG",
    "thumb": "./ENI资料库/EPAY中文/ENI海报.PNG",
    "badge": "主视觉 01",
    "badgeColor": "cyan",
    "icon": "🖼️",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image",
    "multiLangLinks": [
      {
        "lang": "zh",
        "label": "🇨🇳 中文",
        "url": "./ENI资料库/EPAY中文/ENI海报.PNG"
      },
      {
        "lang": "en",
        "label": "🇺🇸 English",
        "url": "./ENI资料库/EPAY英文/Poster EN.png"
      },
      {
        "lang": "ko",
        "label": "🇰🇷 한국어",
        "url": "./ENI资料库/EPAY韩文/Poster KR.jpeg"
      },
      {
        "lang": "vi",
        "label": "🇻🇳 Tiếng Việt",
        "url": "./ENI资料库/EPAY越南/Poster VN.png"
      },
      {
        "lang": "id",
        "label": "🇮🇩 Indonesia",
        "url": "./ENI资料库/EPAY印尼语/ENI poster.png"
      }
    ]
  },
  {
    "id": "poster-main-2",
    "category": "posters",
    "type": "PNG",
    "title": "ENI 官方主视觉海报 02 (多语言)",
    "subtitle": "全球节点连接与公链科技感视觉海报",
    "path": "./ENI资料库/EPAY中文/ENI 海报 02PNG.PNG",
    "thumb": "./ENI资料库/EPAY中文/ENI 海报 02PNG.PNG",
    "badge": "主视觉 02",
    "badgeColor": "cyan",
    "icon": "🖼️",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image",
    "multiLangLinks": [
      {
        "lang": "zh",
        "label": "🇨🇳 中文",
        "url": "./ENI资料库/EPAY中文/ENI 海报 02PNG.PNG"
      },
      {
        "lang": "en",
        "label": "🇺🇸 English",
        "url": "./ENI资料库/EPAY英文/Poster En 02.png"
      },
      {
        "lang": "ko",
        "label": "🇰🇷 한국어",
        "url": "./ENI资料库/EPAY韩文/Poster KR 02.jpeg"
      },
      {
        "lang": "vi",
        "label": "🇻🇳 Tiếng Việt",
        "url": "./ENI资料库/EPAY越南/Poster VN 02.png"
      },
      {
        "lang": "id",
        "label": "🇮🇩 Indonesia",
        "url": "./ENI资料库/EPAY印尼语/ENI poster 02.png"
      }
    ]
  },
  {
    "id": "poster-main-3",
    "category": "posters",
    "type": "PNG",
    "title": "ENI 官方主视觉海报 03 (多语言)",
    "subtitle": "ENIPAY 生态落地与全球数字卡片主视觉",
    "path": "./ENI资料库/EPAY中文/ENI 海报 03.PNG",
    "thumb": "./ENI资料库/EPAY中文/ENI 海报 03.PNG",
    "badge": "主视觉 03",
    "badgeColor": "cyan",
    "icon": "🖼️",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image",
    "multiLangLinks": [
      {
        "lang": "zh",
        "label": "🇨🇳 中文",
        "url": "./ENI资料库/EPAY中文/ENI 海报 03.PNG"
      },
      {
        "lang": "en",
        "label": "🇺🇸 English",
        "url": "./ENI资料库/EPAY英文/3.png"
      },
      {
        "lang": "ja",
        "label": "🇯🇵 日本語",
        "url": "./ENI资料库/EPAY日文/日文图03.jpg"
      },
      {
        "lang": "ko",
        "label": "🇰🇷 한국어",
        "url": "./ENI资料库/EPAY韩文/3.jpeg"
      },
      {
        "lang": "vi",
        "label": "🇻🇳 Tiếng Việt",
        "url": "./ENI资料库/EPAY越南/4越南.png"
      },
      {
        "lang": "id",
        "label": "🇮🇩 Indonesia",
        "url": "./ENI资料库/EPAY印尼语/image.png"
      }
    ]
  },
  {
  "id": "rollup-global-set",
  "category": "rollups",
  "type": "PNG",
  "title": "ENIPAY 官方标准易拉宝展架 (5 国语言全套 30 款)",
  "subtitle": "涵盖平台总览、公链底座、U卡权益、收益模型、安全保障与上市规划全套展架",
  "path": "./ENI资料库/易拉寶图/易拉寶1.png",
  "thumb": "./ENI资料库/易拉寶图/易拉寶1.png",
  "badge": "5 国语言展架",
  "badgeColor": "cyan",
  "icon": "🚩",
  "canPreview": true,
  "canDownload": true,
  "previewType": "image",
  "multiLangLinks": [
    {
      "lang": "zh",
      "label": "🇨🇳 中文版 (6款)",
      "url": "./ENI资料库/易拉寶图/易拉寶1.png"
    },
    {
      "lang": "en",
      "label": "🇺🇸 English (6款)",
      "url": "./ENI资料库/易拉寶图/易拉寶英文 1.png"
    },
    {
      "lang": "ja",
      "label": "🇯🇵 日本語 (6款)",
      "url": "./ENI资料库/易拉寶图/易拉寶日文 1.png"
    },
    {
      "lang": "ko",
      "label": "🇰🇷 한국어 (6款)",
      "url": "./ENI资料库/EPAY韩文/Poster KR.jpeg"
    },
    {
      "lang": "vi",
      "label": "🇻🇳 Tiếng Việt (6款)",
      "url": "./ENI资料库/易拉寶图/易拉寶越文 1.png"
    }
  ]
},
  {
    "id": "signage-front-day",
    "category": "signage",
    "type": "PNG",
    "title": "ENIPAY 线下实体旗舰中心前台 (白天效果)",
    "subtitle": "现代极简科技风实体服务中心前台实景效果",
    "path": "./ENI资料库/实体招牌/白天前台.png",
    "thumb": "./ENI资料库/实体招牌/白天前台.png",
    "badge": "白天实景",
    "badgeColor": "cyan",
    "icon": "🏢",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image"
  },
  {
    "id": "signage-front-night",
    "category": "signage",
    "type": "PNG",
    "title": "ENIPAY 线下实体旗舰中心前台 (夜间发光效果)",
    "subtitle": "赛博朋克霓虹光效前台设计，展现顶级金融科技质感",
    "path": "./ENI资料库/实体招牌/晚上前台.png",
    "thumb": "./ENI资料库/实体招牌/晚上前台.png",
    "badge": "夜间光效",
    "badgeColor": "cyan",
    "icon": "🏢",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image"
  },
  {
    "id": "signage-storefront",
    "category": "signage",
    "type": "PNG",
    "title": "ENIPAY 官方门店招牌门头设计图",
    "subtitle": "全球加盟店与线下网点统一标准门头招牌设计规范",
    "path": "./ENI资料库/实体招牌/店招.png",
    "thumb": "./ENI资料库/实体招牌/店招.png",
    "badge": "门头招牌",
    "badgeColor": "gold",
    "icon": "🏪",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image"
  },
  {
    "id": "signage-lightbox",
    "category": "signage",
    "type": "PNG",
    "title": "ENIPAY 实体店发光灯箱设计图",
    "subtitle": "立柱灯箱、侧发光广告牌高清设计原图",
    "path": "./ENI资料库/实体招牌/灯箱.png",
    "thumb": "./ENI资料库/实体招牌/灯箱.png",
    "badge": "发光灯箱",
    "badgeColor": "gold",
    "icon": "💡",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image"
  },
  {
    "id": "logo-app-icon",
    "category": "brand",
    "type": "PNG",
    "title": "ENIPAY 官方标准 App 图标 (App Icon)",
    "subtitle": "正方形圆角高清图标，适用于移动端应用商店与官网图标",
    "path": "./ENI资料库/ENIPAY Logo/IMG_1324.PNG",
    "thumb": "./ENI资料库/ENIPAY Logo/IMG_1324.PNG",
    "badge": "App Icon",
    "badgeColor": "cyan",
    "icon": "🎨",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image"
  },
  {
    "id": "logo-horiz-dark",
    "category": "brand",
    "type": "PNG",
    "title": "ENIPAY 品牌标准横版 Logo (深色背景专用)",
    "subtitle": "高清透明底横版 Logo，适用于演示文稿、官网与广告物料",
    "path": "./ENI资料库/ENIPAY Logo/IMG_1534.PNG",
    "thumb": "./ENI资料库/ENIPAY Logo/IMG_1534.PNG",
    "badge": "标准横版",
    "badgeColor": "cyan",
    "icon": "🎨",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image"
  },
  {
    "id": "logo-horiz-light",
    "category": "brand",
    "type": "PNG",
    "title": "ENIPAY 品牌标准横版 Logo (浅色背景专用)",
    "subtitle": "浅色或白色背景印刷与文档专用高清标",
    "path": "./ENI资料库/ENIPAY Logo/IMG_1535.PNG",
    "thumb": "./ENI资料库/ENIPAY Logo/IMG_1535.PNG",
    "badge": "浅底专用",
    "badgeColor": "cyan",
    "icon": "🎨",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image"
  },
  {
    "id": "logo-3d-neon",
    "category": "brand",
    "type": "PNG",
    "title": "ENIPAY 3D 霓虹质感官方徽标",
    "subtitle": "3D 金属与霓虹青光泽渲染，适合高端海报与主视觉设计",
    "path": "./ENI资料库/ENIPAY Logo/IMG_1536.PNG",
    "thumb": "./ENI资料库/ENIPAY Logo/IMG_1536.PNG",
    "badge": "3D 徽标",
    "badgeColor": "gold",
    "icon": "✨",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image"
  },
  {
    "id": "logo-symbol",
    "category": "brand",
    "type": "PNG",
    "title": "ENIPAY 品牌核心超级符号 (Icon Symbol)",
    "subtitle": "极简字母 E 融合能量芯片造型的品牌超级符号",
    "path": "./ENI资料库/ENIPAY Logo/IMG_1537.PNG",
    "thumb": "./ENI资料库/ENIPAY Logo/IMG_1537.PNG",
    "badge": "超级符号",
    "badgeColor": "cyan",
    "icon": "💠",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image"
  },
  {
    "id": "logo-gold-black",
    "category": "brand",
    "type": "PNG",
    "title": "ENIPAY 极简黑金高奢标 (Gold Edition)",
    "subtitle": "尊享黑金卡与 VIP 会员专属高贵配色方案",
    "path": "./ENI资料库/ENIPAY Logo/IMG_1538.PNG",
    "thumb": "./ENI资料库/ENIPAY Logo/IMG_1538.PNG",
    "badge": "黑金高奢",
    "badgeColor": "gold",
    "icon": "👑",
    "canPreview": true,
    "canDownload": true,
    "previewType": "image"
  },
  {
    "id": "logo-psd-source",
    "category": "brand",
    "type": "PSD",
    "title": "ENIPAY 官方 Logo 分层源文件 (Photoshop PSD)",
    "subtitle": "包含所有分层、矢量路径与调色图层，供专业设计师二开使用",
    "path": "./ENI资料库/ENIPAY Logo/LOGO3.psd",
    "size": "15.4 MB",
    "badge": "设计源件",
    "badgeColor": "gold",
    "icon": "📐",
    "canPreview": false,
    "canDownload": true
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
const DEFAULT_SUPABASE_URL = "https://kvdaargyladksfytbjlf.supabase.co";
const DEFAULT_SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2ZGFhcmd5bGFka3NmeXRiamxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODgzMTE4MzksImV4cCI6MjEwMzg4NzgzOX0.7xCvOpNvQkdh7PkxnTdL4GxsbIuGbLpsjK6d9qEYYsc";

async function fetchLiveResourcesFromSupabase() {
  const url = localStorage.getItem("enipay_supabase_url") || DEFAULT_SUPABASE_URL;
  const key = localStorage.getItem("enipay_supabase_key") || DEFAULT_SUPABASE_KEY;
  const localCache = localStorage.getItem("enipay_local_resources_db");

  if (url && key && window.supabase) {
    try {
      const client = window.supabase.createClient(url, key);
      const { data, error } = await client
        .from("resources")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        activeResourcesList = data;
        localStorage.setItem("enipay_local_resources_db", JSON.stringify(data));
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

  if (item.id === "rollup-global-set" || item.category === "rollups") {
    gradientClass = "bg-gradient-to-br from-[#00ffb2] via-[#22d3ee] to-[#3b82f6]";
    enTitle = "ENIPAY OFFICIAL ROLL-UP BANNERS (5 LANGUAGES)";
    zhTitle = "ENIPAY 官方标准易拉宝展架 · 5 国语言全套";
    techFootnote = "Conferences × Roadshows × Multi-Language Rollups";
    microTag = "ROLLUP BANNERS";
  } else if (item.id === "docsend-global-deck" || item.category === "docsend") {
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


// 🌐 Static Multi-Language Registry (Ensures 100% reliable 2-column national flag link matrix even if fetched from Supabase)
const MULTI_LANG_REGISTRY = {
  "doc-bp-multilang": [
    { lang: "zh", label: "🇨🇳 简体中文版", url: "./ENI资料库/EPAY中文/ENIPAY_Business_Plan_ZH.pdf" },
    { lang: "en", label: "🇺🇸 英文版 (English)", url: "./ENI资料库/EPAY英文/ENIPAY_Business_Plan_EN.pdf" },
    { lang: "ja", label: "🇯🇵 日本語版", url: "./ENI资料库/EPAY日文/ENIPAY_Business_Plan_JP.pdf" },
    { lang: "ko", label: "🇰🇷 한국어판", url: "./ENI资料库/EPAY韩文/ENIPAY_Business_Plan_KR.pdf" },
    { lang: "vi", label: "🇻🇳 Tiếng Việt 越南版", url: "./ENI资料库/EPAY越南/ENIPAY_Business_Plan_VN.pdf" },
    { lang: "id", label: "🇮🇩 Indonesia 印尼版", url: "./ENI资料库/EPAY印尼语/ENIPAY_Business_Plan_ID.pdf" }
  ],
  "docsend-global-deck": [
    { lang: "zh", label: "🇨🇳 简体中文版", url: "https://docsend.com/view/snsckjftrk4wj2af" },
    { lang: "zht", label: "🇭🇰 繁體中文版", url: "https://docsend.com/view/25w7zbf32t5nzrpj" },
    { lang: "en", label: "🇺🇸 英文版 (English)", url: "https://docsend.com/view/iii725phveai54z9" },
    { lang: "ko", label: "🇰🇷 한국어판", url: "https://docsend.com/view/cq5mnjjmcyvs8mp8" },
    { lang: "vi", label: "🇻🇳 Tiếng Việt 越南版", url: "https://docsend.com/view/e88xepp5au3ueu5f" },
    { lang: "ja", label: "🇯🇵 日本語版", url: "https://docsend.com/view/dxrhryufyny9hp7v" }
  ],
  "rollup-global-set": [
    { lang: "zh", label: "🇨🇳 中文版 (6款)", url: "./ENI资料库/易拉寶图/易拉寶1.png" },
    { lang: "en", label: "🇺🇸 English (6款)", url: "./ENI资料库/易拉寶图/易拉寶英文 1.png" },
    { lang: "ja", label: "🇯🇵 日本語 (6款)", url: "./ENI资料库/易拉寶图/易拉寶日文 1.png" },
    { lang: "ko", label: "🇰🇷 한국어 (6款)", url: "./ENI资料库/EPAY韩文/Poster KR.jpeg" },
    { lang: "vi", label: "🇻🇳 Tiếng Việt (6款)", url: "./ENI资料库/易拉寶图/易拉寶越文 1.png" }
  ],
  "poster-long-intro": [
    { lang: "zh", label: "🇨🇳 中文长图", url: "./ENI资料库/EPAY中文/ENIPAY 简介长图.png" },
    { lang: "en", label: "🇺🇸 English 英文长图", url: "./ENI资料库/EPAY英文/ENIPAY introduction image.png" },
    { lang: "ja", label: "🇯🇵 日本語长图", url: "./ENI资料库/EPAY日文/日文长图.jpg" },
    { lang: "ko", label: "🇰🇷 한국어长图", url: "./ENI资料库/EPAY韩文/长图（韩文）.png" },
    { lang: "vi", label: "🇻🇳 Tiếng Việt 越南长图", url: "./ENI资料库/EPAY越南/Hình ảnh giới thiệu ENIPAY.png" },
    { lang: "id", label: "🇮🇩 Indonesia 印尼长图", url: "./ENI资料库/EPAY印尼语/enipay_indonesian.png" }
  ],
  "poster-competitive-edge": [
    { lang: "zh", label: "🇨🇳 中文版", url: "./ENI资料库/EPAY中文/ENIPAY 生态竞争优势.PNG" },
    { lang: "en", label: "🇺🇸 English 英文版", url: "./ENI资料库/EPAY英文/ENIPAY's competitive advantages.png" },
    { lang: "ja", label: "🇯🇵 日本語版", url: "./ENI资料库/EPAY日文/日文四大竞争优势.jpg" },
    { lang: "ko", label: "🇰🇷 한국어판", url: "./ENI资料库/EPAY韩文/ENI竞争优势（韩文）.png" },
    { lang: "vi", label: "🇻🇳 Tiếng Việt 越南版", url: "./ENI资料库/EPAY越南/Đặc điểm dự án ENIPAY.png" },
    { lang: "id", label: "🇮🇩 Indonesia 印尼版", url: "./ENI资料库/EPAY印尼语/epaykeunggulan kompetitif.png" }
  ],
  "poster-staking-model": [
    { lang: "zh", label: "🇨🇳 中文横图", url: "./ENI资料库/EPAY中文/ENIPAY 质押模型 01.png" },
    { lang: "en", label: "🇺🇸 English 英文横图", url: "./ENI资料库/EPAY英文/Introduction to ENIPAY Financial Model.png" },
    { lang: "ja", label: "🇯🇵 日本語横图", url: "./ENI资料库/EPAY日文/日文模式横图.jpg" },
    { lang: "ko", label: "🇰🇷 한국어横图", url: "./ENI资料库/EPAY韩文/模式横图（韩文）.png" },
    { lang: "vi", label: "🇻🇳 Tiếng Việt 越南横图", url: "./ENI资料库/EPAY越南/Giới thiệu về Mô hình Tài chính ENIPAY.png" },
    { lang: "id", label: "🇮🇩 Indonesia 印尼横图", url: "./ENI资料库/EPAY印尼语/Bagan Horizontal Pola.png" }
  ],
  "poster-main-1": [
    { lang: "zh", label: "🇨🇳 中文版", url: "./ENI资料库/EPAY中文/ENI海报.PNG" },
    { lang: "en", label: "🇺🇸 English 英文版", url: "./ENI资料库/EPAY英文/Poster EN.png" },
    { lang: "ko", label: "🇰🇷 한국어판", url: "./ENI资料库/EPAY韩文/Poster KR.jpeg" },
    { lang: "vi", label: "🇻🇳 Tiếng Việt 越南版", url: "./ENI资料库/EPAY越南/Poster VN.png" },
    { lang: "id", label: "🇮🇩 Indonesia 印尼版", url: "./ENI资料库/EPAY印尼语/ENI poster.png" }
  ],
  "poster-main-2": [
    { lang: "zh", label: "🇨🇳 中文版", url: "./ENI资料库/EPAY中文/ENI 海报 02PNG.PNG" },
    { lang: "en", label: "🇺🇸 English 英文版", url: "./ENI资料库/EPAY英文/Poster En 02.png" },
    { lang: "ko", label: "🇰🇷 한국어판", url: "./ENI资料库/EPAY韩文/Poster KR 02.jpeg" },
    { lang: "vi", label: "🇻🇳 Tiếng Việt 越南版", url: "./ENI资料库/EPAY越南/Poster VN 02.png" },
    { lang: "id", label: "🇮🇩 Indonesia 印尼版", url: "./ENI资料库/EPAY印尼语/ENI poster 02.png" }
  ],
  "poster-main-3": [
    { lang: "zh", label: "🇨🇳 中文版", url: "./ENI资料库/EPAY中文/ENI 海报 03.PNG" },
    { lang: "en", label: "🇺🇸 English 英文版", url: "./ENI资料库/EPAY英文/3.png" },
    { lang: "ja", label: "🇯🇵 日本語版", url: "./ENI资料库/EPAY日文/日文图03.jpg" },
    { lang: "ko", label: "🇰🇷 한국어판", url: "./ENI资料库/EPAY韩文/3.jpeg" },
    { lang: "vi", label: "🇻🇳 Tiếng Việt 越南版", url: "./ENI资料库/EPAY越南/4越南.png" },
    { lang: "id", label: "🇮🇩 Indonesia 印尼版", url: "./ENI资料库/EPAY印尼语/image.png" }
  ]
};

function getResourceMultiLinks(item) {
  if (item.multiLangLinks && Array.isArray(item.multiLangLinks) && item.multiLangLinks.length > 0) {
    return item.multiLangLinks;
  }
  if (item.multi_lang_links && Array.isArray(item.multi_lang_links) && item.multi_lang_links.length > 0) {
    return item.multi_lang_links;
  }
  if (MULTI_LANG_REGISTRY[item.id]) {
    return MULTI_LANG_REGISTRY[item.id];
  }
  const found = RESOURCES_DATA.find((r) => r.id === item.id);
  if (found && found.multiLangLinks) {
    return found.multiLangLinks;
  }
  return null;
}


// 🎬 Generate High-Tech Themed Cyan/Neon Video Cover Banners
function generateThemedVideoCover(item) {
  let gradientClass = "bg-gradient-to-br from-[#064e3b] via-[#0f172a] to-[#083344]";
  let borderGlow = "border-cyan-neon/40 hover:border-cyan-neon";
  let enTitle = "OFFICIAL 4K HD PROMOTIONAL CINEMATIC";
  let zhTitle = item.title || "官方高清宣传视频";
  let techFootnote = "ENIPAY Ultra-HD Streaming // Web FastStart";
  let microTag = "4K STREAM";

  if (item.id === "video-eni-main") {
    gradientClass = "bg-gradient-to-br from-[#042f2e] via-[#0f172a] to-[#022c22]";
    enTitle = "ENI CHAIN GLOBAL OFFICIAL CINEMATIC DECK";
    zhTitle = "ENI 公链官方品牌宣传大片";
    techFootnote = "Modular L1 Architecture × NTT Partnership × Tokyo HQ";
    microTag = "FLAGSHIP";
  } else if (item.id === "video-enipay-promo") {
    gradientClass = "bg-gradient-to-br from-[#064e3b] via-[#022c22] to-[#083344]";
    enTitle = "ENIPAY GLOBAL DIGITAL PAYMENT NETWORK";
    zhTitle = "ENIPAY 全球支付聚合平台宣传短片";
    techFootnote = "Tri-Color Crypto U-Card × QR Code Rails × AI Card";
    microTag = "PAYMENT HUB";
  } else if (item.id === "video-spokesperson") {
    gradientClass = "bg-gradient-to-br from-[#713f12] via-[#0f172a] to-[#1e1b4b]";
    enTitle = "OFFICIAL BRAND AMBASSADOR SHOWCASE";
    zhTitle = "ENIPAY 品牌形象代言宣传短片";
    techFootnote = "Global Community Evangelism × Influencer Matrix";
    microTag = "AMBASSADOR";
  } else if (item.id === "video-ecosystem") {
    gradientClass = "bg-gradient-to-br from-[#083344] via-[#0f172a] to-[#022c22]";
    enTitle = "ENIPAY GLOBAL ECOSYSTEM & FIVE-YEAR ROADMAP";
    zhTitle = "ENIPAY ECOSYSTEM 全球生态全景";
    techFootnote = "Global M&A × Nasdaq Listing Roadmap × Trillion Pipeline";
    microTag = "ECOSYSTEM";
  } else if (item.id === "video-finance-model") {
    gradientClass = "bg-gradient-to-br from-[#713f12] via-[#0f172a] to-[#064e3b]";
    enTitle = "ENI MG FINANCIAL TOKENOMICS & DEFLATION";
    zhTitle = "ENI MG 金融模型与通缩机制深度解读";
    techFootnote = "Node Mining × 80% Black Hole × Market Acceleration";
    microTag = "TOKENOMICS";
  } else if (item.id === "video-wealth-code") {
    gradientClass = "bg-gradient-to-br from-[#854d0e] via-[#0f172a] to-[#042f2e]";
    enTitle = "ENIPAY WEALTH CODE & EARLY PARTICIPANT DIVIDENDS";
    zhTitle = "ENIPAY 财富密码与全球红利";
    techFootnote = "Web3 Blue Ocean Market × Continuous Cashflow Pipeline";
    microTag = "WEALTH MATRIX";
  } else if (item.id === "video-super-eco") {
    gradientClass = "bg-gradient-to-br from-[#064e3b] via-[#0f172a] to-[#0c4a6e]";
    enTitle = "EPAY SUPER ECOSYSTEM LIVE APPLICATION";
    zhTitle = "EPAY 超级生态落地演示";
    techFootnote = "Merchant Settlement × On-Off Ramp × Instant Liquidity";
    microTag = "SUPER ECO";
  } else if (item.id === "video-digital-pay") {
    gradientClass = "bg-gradient-to-br from-[#0284c7] via-[#0f172a] to-[#059669]";
    enTitle = "EPAY DIGITAL INSTANT SETTLEMENT & ZERO-FREEZE";
    zhTitle = "EPAY 数字支付与即时出入金";
    techFootnote = "Zero-Freeze Risk Control × Binance Custody × Swift Rails";
    microTag = "INSTANT PAY";
  } else if (item.id === "video-eni-promo-2") {
    gradientClass = "bg-gradient-to-br from-[#0f766e] via-[#0f172a] to-[#1e1b4b]";
    enTitle = "ENI CHAIN GLOBAL NODES & CROSS-CHAIN RAILS";
    zhTitle = "ENI 公链全球节点与技术架构短片 02";
    techFootnote = "Supernode Distribution × Cross-Chain Interoperability";
    microTag = "GLOBAL NODES";
  }

  return `
    <div class="h-36 sm:h-40 w-full ${gradientClass} rounded-xl p-3 flex flex-col justify-between relative overflow-hidden shadow-lg cursor-pointer border ${borderGlow} transition-all group/vcover hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,255,178,0.3)] select-none" onclick="openVideoModal('${item.path}', '${item.title}')">
      <!-- Top Row -->
      <div class="flex items-center justify-between z-10">
        <div class="flex items-center gap-1.5 font-mono font-black text-cyan-neon text-[11px] tracking-wider">
          <span class="w-4 h-4 bg-cyan-neon text-slate-950 rounded flex items-center justify-center text-[10px] font-extrabold">E</span>
          <span class="text-white drop-shadow">ENI\\PAY</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="text-[8px] font-mono font-bold text-cyan-neon bg-cyan-neon/15 px-1.5 py-0.5 rounded border border-cyan-neon/30 uppercase tracking-wide">
            ${microTag}
          </span>
          <span class="text-[8px] font-mono font-bold text-red-400 bg-red-500/15 px-1.5 py-0.5 rounded border border-red-500/25">
            🔒 仅限在线观看
          </span>
        </div>
      </div>

      <!-- Center Floating Glowing Play Button & Title -->
      <div class="z-10 my-auto text-center px-1 flex flex-col items-center">
        <div class="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-cyan-neon/20 border border-cyan-neon flex items-center justify-center text-cyan-neon text-lg sm:text-xl shadow-[0_0_20px_rgba(0,255,178,0.4)] group-hover/vcover:scale-110 group-hover/vcover:bg-cyan-neon group-hover/vcover:text-slate-950 transition-all duration-300 mb-1">
          ▶
        </div>
        <div class="text-[10px] sm:text-[11px] font-black text-cyan-bright tracking-tight leading-snug uppercase font-mono line-clamp-1">
          ${enTitle}
        </div>
        <div class="text-xs sm:text-[13px] font-extrabold text-white leading-tight drop-shadow line-clamp-1">
          ${zhTitle}
        </div>
      </div>

      <!-- Bottom Tech Footnote -->
      <div class="z-10 text-center border-t border-slate-700/60 pt-1">
        <div class="text-[8px] font-mono font-semibold text-slate-300/90 truncate">
          ${techFootnote}
        </div>
      </div>

      <!-- High Tech Background Visuals & Grid & Neon Waves -->
      <div class="absolute -right-8 -top-8 w-28 h-28 bg-cyan-neon/15 rounded-full blur-xl pointer-events-none group-hover/vcover:scale-125 transition-transform"></div>
      <div class="absolute -left-8 -bottom-8 w-28 h-28 bg-emerald-500/15 rounded-full blur-xl pointer-events-none"></div>
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none"></div>
      <div class="absolute inset-0 bg-[radial-gradient(#00ffb2_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
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
          <div class="h-36 sm:h-40 w-full bg-slate-950/80 rounded-xl overflow-hidden flex items-center justify-center relative group cursor-pointer border border-slate-800/80 hover:border-cyan-neon/50 transition-all" onclick="openImageLightbox(encodeURI('${item.path}'), '${item.title}')">
            <img src="${encodeURI(item.thumb || item.path)}" alt="${item.title}" class="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300" loading="lazy">
            <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <span class="p-2 rounded-full bg-cyan-neon/20 border border-cyan-neon text-cyan-neon text-xs font-bold shadow-lg">🔍 点击查看大图</span>
            </div>
          </div>
        `;
      } else if (isVideo) {
        mediaPreview = generateThemedVideoCover(item);
      } else {
        mediaPreview = generateThemedDocCover(item);
      }

      // Actions buttons
      let actionButtons = "";
      const multiLinks = getResourceMultiLinks(item);
      if (multiLinks && Array.isArray(multiLinks) && multiLinks.length > 0) {
        const isImg = ["PNG", "JPG", "JPEG", "WEBP"].includes(item.type);
        actionButtons = `
          <div class="grid grid-cols-2 gap-1.5 sm:gap-2 w-full pt-2.5 border-t border-slate-800/80 mt-2">
            ${multiLinks
              .map((link) => {
                const clickHandler = isImg 
                  ? `onclick="openImageLightbox(encodeURI('${link.url}'), '${item.title} - ${link.label}')"`
                  : `onclick="window.open('${link.url}', '_blank')"`;
                return `
                  <button type="button" ${clickHandler} class="py-2 px-2.5 rounded-xl bg-slate-950/70 hover:bg-cyan-neon/15 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-neon/60 text-[11px] font-semibold flex items-center justify-between transition-all group/btn shadow-sm text-left cursor-pointer">
                    <span class="truncate font-medium">${link.label}</span>
                    <span class="text-[10px] text-cyan-neon group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform flex-shrink-0 ml-1">↗</span>
                  </button>
                `;
              })
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
            previewBtn = `<button onclick="openImageLightbox(encodeURI('${item.path}'), '${item.title}')" class="flex-1 py-1.5 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-bright border border-slate-700 hover:border-cyan-bright/50 text-xs font-bold flex items-center justify-center gap-1 transition-all"><span>👁️</span> 大图</button>`;
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
          <div class="w-12 h-12 rounded-lg bg-slate-950 overflow-hidden flex items-center justify-center flex-shrink-0 border border-slate-800 cursor-pointer" onclick="openImageLightbox(encodeURI('${item.path}'), '${item.title}')">
            <img src="${encodeURI(item.thumb || item.path)}" class="w-full h-full object-cover" loading="lazy">
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
      const multiLinks = getResourceMultiLinks(item);
      if (multiLinks && Array.isArray(multiLinks) && multiLinks.length > 0) {
        const isImg = ["PNG", "JPG", "JPEG", "WEBP"].includes(item.type);
        actionButtons = `
          <div class="flex items-center gap-1.5 flex-wrap">
            ${multiLinks
              .map((link) => {
                const clickHandler = isImg 
                  ? `onclick="openImageLightbox(encodeURI('${link.url}'), '${item.title} - ${link.label}')"`
                  : `onclick="window.open('${link.url}', '_blank')"`;
                return `
                  <button type="button" ${clickHandler} class="py-1 px-2.5 rounded-lg bg-slate-950/70 hover:bg-cyan-neon/15 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-neon/60 text-[11px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer">
                    <span>${link.label}</span>
                    <span class="text-[10px] text-cyan-neon">↗</span>
                  </button>
                `;
              })
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
            previewBtn = `<button onclick="openImageLightbox(encodeURI('${item.path}'), '${item.title}')" class="py-1.5 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-bright border border-slate-700 text-xs font-bold flex items-center gap-1 transition-all whitespace-nowrap"><span>👁️</span> 大图</button>`;
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

