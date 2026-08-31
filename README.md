# Enipay (ENIPAY) Web3 支付生态与代币激励计划 —— 3D 滚动演示文稿

本工程为 **Enipay (ENIPAY) 全球数字支付聚合平台** 的全景 3D 滚动演示文稿（Scrollytelling Web Presentation），专为替代并超越传统 PowerPoint 演示而设计。

---

## 🎨 核心视觉与交互特色

- **配色与质感**：极简高精密科技白底（Clean White） + 电光青（Electric Cyan `#00F2FE`）与深海科技青（`#0891B2`）。
- **3D 景深与立体感**：
  - 基于 Three.js 动态渲染的 3D 发光几何核心环与浮空粒子引力场。
  - 白色磨砂玻璃拟态（Frosted Glass）卡片，支持随鼠标与滚动的 3D 动态倾斜（Tilt Perspective）。
  - 动态资金流转管道（Binance 托管触发链路）、100 代裂变收益实时计算器。
- **专业演讲控制（Presenter Mode）**：
  - **滚轮平滑吸附**：支持自然滚动并在章节间智能定位。
  - **快捷键导航**：
    - `↓` / `↑` / `Space` / `PageDown` / `PageUp`：平滑切换上一页/下一页。
    - `1` ~ `9`、`0`：一键直达对应 Slide（1 到 10，11 页通过快捷键或导航点直达）。
    - `N` 键：随时唤出/收起 **讲师提词器（Speaker Notes）**，内置各页演讲要点与逐字稿。
    - `F` 键：一键进入无边框**全屏演示模式**。
  - **右侧 HUD 雷达**：常驻目录电梯导航与进度条。

---

## 🚀 如何打开演示文稿

直接用任何现代浏览器（Chrome、Edge、Safari 等）双击打开 [`index.html`](file:///Users/rms/Desktop/ENIAY/index.html) 即可完整体验！

若需本地 Web 服务启动（可选）：
```bash
# Python
python3 -m http.server 8080

# 或 Node.js
npx serve .
```
访问 `http://localhost:8080` 即可。

---

## 📂 文件结构

- [`index.html`](file:///Users/rms/Desktop/ENIAY/index.html) —— 11 个幻灯片模块与完整内容架构
- [`styles.css`](file:///Users/rms/Desktop/ENIAY/styles.css) —— 3D 玻璃拟态、青色光斑、科技线条与响应式布局样式
- [`app.js`](file:///Users/rms/Desktop/ENIAY/app.js) —— Three.js 3D 背景引擎、GSAP 滚动侦测、讲师提词同步、9×6 动态计算器、Web Audio 音效合成器
