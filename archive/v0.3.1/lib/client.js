window.__ModuleLoader__.load({
  id: "dsh-plugin-market",
  factory: () => {
    var module = { exports: {} };
    var exports = module.exports;
    Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

    const PLUGIN_ID = "dsh-plugin-market";
    const ROOT_ID = "dsh-plugin-market-root";
    const STYLE_ID = "dsh-plugin-market-style";
    const DEFAULT_QUERY = "";
    const QUERY_PLACEHOLDER = "中文/英文搜目录，或输入 owner/repo";
    const REGISTRY_UPDATED_AT = "2026-08-16";
    const REGISTRY =     [
          {
                "fullName": "dsh-market/dsh-market",
                "name": "dshmarket",
                "title": "DSH Market",
                "titleZh": "DSH 可视化插件市场",
                "summary": "Visual marketplace inside DeepSeek Harness for browsing, searching, and installing community plugins.",
                "summaryZh": "DeepSeek Harness 内的可视化插件市场，用来浏览、搜索和安装社区插件。",
                "category": "market",
                "tags": [
                      "market",
                      "visual",
                      "install",
                      "web-ui"
                ],
                "keywordsZh": [
                      "可视化",
                      "插件市场",
                      "安装",
                      "社区插件"
                ],
                "language": "TypeScript",
                "stars": 266,
                "lastChecked": "2026-08-16",
                "verified": {
                      "packageName": "dshmarket",
                      "bundlePatch": "./cordis.patch.yml",
                      "client": true
                }
          },
          {
                "fullName": "bradeGithub/DSH-Plugins-Marketplace",
                "name": "dsh-plugin-marketplace",
                "title": "DSH Plugins Marketplace",
                "titleZh": "DSH 插件市场",
                "summary": "Browse and install plugins from the GitHub dsh-plugin topic.",
                "summaryZh": "在 DSH Web 里浏览 GitHub dsh-plugin 主题下的插件候选。",
                "category": "market",
                "tags": [
                      "market",
                      "github-search",
                      "install",
                      "web-ui"
                ],
                "keywordsZh": [
                      "插件市场",
                      "安装",
                      "搜索",
                      "可视化"
                ],
                "language": "JavaScript",
                "stars": 68,
                "lastChecked": "2026-08-16",
                "verified": {
                      "packageName": "dsh-plugin-marketplace",
                      "bundlePatch": "./cordis.patch.yml",
                      "client": true
                }
          },
          {
                "fullName": "2160039878-cyber/dsh-plugin-market",
                "name": "dsh-plugin-market",
                "title": "DSH Plugin Market",
                "titleZh": "DSH 插件市场",
                "summary": "A verified-first plugin directory and GitHub discovery helper for DeepSeek Harness Web.",
                "summaryZh": "目录优先的 DSH 插件商店，可浏览已验证插件，也可发现 GitHub 线索。",
                "category": "market",
                "tags": [
                      "market",
                      "directory",
                      "github-search",
                      "web-ui"
                ],
                "keywordsZh": [
                      "插件市场",
                      "目录",
                      "搜索",
                      "商店",
                      "中文"
                ],
                "language": "JavaScript",
                "stars": 0,
                "lastChecked": "2026-08-16",
                "verified": {
                      "packageName": "dsh-plugin-market",
                      "bundlePatch": "./cordis.patch.yml",
                      "client": true
                }
          },
          {
                "fullName": "KYZHXL/dsh-manager",
                "name": "@snowsalt/dsh-manager",
                "title": "DSH Manager",
                "titleZh": "DSH 插件管理器",
                "summary": "ComfyUI-Manager-style plugin marketplace for browsing, installing, updating, and removing DSH plugins.",
                "summaryZh": "类似 ComfyUI-Manager 的 DSH 插件管理器，面向浏览、安装、更新和移除。",
                "category": "manager",
                "tags": [
                      "manager",
                      "market",
                      "install",
                      "update",
                      "remove"
                ],
                "keywordsZh": [
                      "管理器",
                      "安装",
                      "更新",
                      "卸载",
                      "插件市场"
                ],
                "language": "TypeScript",
                "stars": 4,
                "lastChecked": "2026-08-16",
                "verified": {
                      "packageName": "@snowsalt/dsh-manager",
                      "bundlePatch": "./cordis.patch.yml",
                      "client": false
                }
          },
          {
                "fullName": "dancingmemory/dskin",
                "name": "dskin",
                "title": "DSKIN",
                "titleZh": "DSKIN 像素皮肤",
                "summary": "Cartoon pixel skin plugin for DeepSeek Harness Web GUI with living pixel pets that stroll, blink, and hop.",
                "summaryZh": "DeepSeek Harness 卡通像素皮肤插件，保留原界面，加入会散步、眨眼、跳跃的像素宠物。",
                "category": "skin",
                "tags": [
                      "skin",
                      "theme",
                      "pixel",
                      "pet",
                      "web-ui"
                ],
                "keywordsZh": [
                      "皮肤",
                      "主题",
                      "像素",
                      "宠物",
                      "动画",
                      "可爱"
                ],
                "language": "TypeScript",
                "stars": 25,
                "lastChecked": "2026-08-16",
                "verified": {
                      "packageName": "dskin",
                      "bundlePatch": "./cordis.patch.yml",
                      "client": true
                }
          },
          {
                "fullName": "KinGao294/dsh-skin",
                "name": "dsh-skin",
                "title": "DSH Skin",
                "titleZh": "DSH 换肤与壁纸",
                "summary": "Skin switcher and custom wallpaper controls for DeepSeek Harness, including palettes and persisted wallpaper settings.",
                "summaryZh": "DeepSeek Harness 换肤和自定义壁纸插件，支持预设色板、透明壁纸、模糊和浏览器持久化。",
                "category": "skin",
                "tags": [
                      "skin",
                      "theme",
                      "wallpaper",
                      "settings",
                      "web-ui"
                ],
                "keywordsZh": [
                      "皮肤",
                      "主题",
                      "壁纸",
                      "换肤",
                      "背景",
                      "设置"
                ],
                "language": "JavaScript",
                "stars": 11,
                "lastChecked": "2026-08-16",
                "verified": {
                      "packageName": "dsh-skin",
                      "bundlePatch": "./cordis.patch.yml",
                      "client": true
                }
          },
          {
                "fullName": "ManuSpurs/dsh-skin20260814",
                "name": "dsh-skin",
                "title": "DSH Skin Enhanced",
                "titleZh": "DSH 增强换肤",
                "summary": "Enhanced dsh-skin variant with upload fixes, theme guard fixes, and IndexedDB wallpaper storage.",
                "summaryZh": "dsh-skin 增强版，修复大图上传和主题递归问题，并用 IndexedDB 保存原画质壁纸。",
                "category": "skin",
                "tags": [
                      "skin",
                      "theme",
                      "wallpaper",
                      "indexeddb",
                      "fix"
                ],
                "keywordsZh": [
                      "皮肤",
                      "主题",
                      "壁纸",
                      "增强版",
                      "上传",
                      "修复"
                ],
                "language": "JavaScript",
                "stars": 3,
                "lastChecked": "2026-08-16",
                "verified": {
                      "packageName": "dsh-skin",
                      "bundlePatch": "./cordis.patch.yml",
                      "client": true
                }
          },
          {
                "fullName": "luoyan96/dsh-catnap-studio",
                "name": "dsh-client-ui-skin-catnap",
                "title": "DSH Catnap Studio",
                "titleZh": "DSH 猫咪工坊皮肤",
                "summary": "Three-in-one cat-themed skin plugin for DeepSeek Harness Web UI.",
                "summaryZh": "DeepSeek Harness Web UI 三合一猫咪主题皮肤，内置暖纸猫窝、月夜守护和猫咪工坊。",
                "category": "skin",
                "tags": [
                      "skin",
                      "theme",
                      "cat",
                      "catgirl",
                      "web-ui"
                ],
                "keywordsZh": [
                      "皮肤",
                      "主题",
                      "猫咪",
                      "猫娘",
                      "猫窝",
                      "可爱"
                ],
                "language": "TypeScript",
                "stars": 1,
                "lastChecked": "2026-08-16",
                "verified": {
                      "packageName": "dsh-client-ui-skin-catnap",
                      "bundlePatch": "./cordis.patch.yml",
                      "client": true
                }
          },
          {
                "fullName": "Lzh-12/dsh-skin-picker",
                "name": "dsh-skin-picker",
                "title": "DSH Skin Picker",
                "titleZh": "DSH 皮肤选择器",
                "summary": "DeepSeek Harness skin picker with preset skins, natural language theme switching, custom backgrounds, and settings integration.",
                "summaryZh": "DeepSeek Harness 皮肤选择器，包含 10 套预设、自然语言换肤、自定义背景和设置页联动。",
                "category": "skin",
                "tags": [
                      "skin",
                      "theme",
                      "picker",
                      "wallpaper",
                      "settings"
                ],
                "keywordsZh": [
                      "皮肤",
                      "主题",
                      "选择器",
                      "预设",
                      "自然语言",
                      "背景"
                ],
                "language": "JavaScript",
                "stars": 1,
                "lastChecked": "2026-08-16",
                "verified": {
                      "packageName": "dsh-skin-picker",
                      "bundlePatch": "./cordis.patch.yml",
                      "client": true
                }
          },
          {
                "fullName": "R3alloc/dsh-session-deeplink",
                "name": "dsh-session-deeplink",
                "title": "DSH Session Deeplink",
                "titleZh": "DSH 会话深链",
                "summary": "Open a DSH session directly from a URL query parameter.",
                "summaryZh": "通过 URL 参数直接打开指定 DSH 会话，适合分享和跳转。",
                "category": "workflow",
                "tags": [
                      "session",
                      "deeplink",
                      "routing",
                      "web-ui"
                ],
                "keywordsZh": [
                      "会话",
                      "深链",
                      "链接",
                      "分享",
                      "跳转"
                ],
                "language": "JavaScript",
                "stars": 6,
                "lastChecked": "2026-08-16",
                "verified": {
                      "packageName": "dsh-session-deeplink",
                      "bundlePatch": "./cordis.patch.yml",
                      "client": true
                }
          },
          {
                "fullName": "tensorlakeai/dsh-tensorlake-sandbox",
                "name": "@tensorlakeai/dsh-sandbox",
                "title": "Tensorlake Sandbox",
                "titleZh": "Tensorlake 沙箱执行器",
                "summary": "Tensorlake sandbox execution providers for DeepSeek Harness.",
                "summaryZh": "为 DSH 提供 Tensorlake 沙箱执行能力，偏执行和工具后端。",
                "category": "runtime",
                "tags": [
                      "sandbox",
                      "execution",
                      "provider",
                      "runtime"
                ],
                "keywordsZh": [
                      "沙箱",
                      "执行",
                      "运行时",
                      "工具",
                      "后端"
                ],
                "language": "TypeScript",
                "stars": 5,
                "lastChecked": "2026-08-16",
                "verified": {
                      "packageName": "@tensorlakeai/dsh-sandbox",
                      "bundlePatch": "./cordis.patch.yml",
                      "client": false
                }
          },
          {
                "fullName": "bugmaker2/dsh-plugin-template",
                "name": "dsh-plugin-template",
                "title": "DSH Plugin Template",
                "titleZh": "DSH 插件开发模板",
                "summary": "Minimal Hello World plugin template for DeepSeek Harness.",
                "summaryZh": "最小 Hello World 插件模板，适合学习 DSH 插件结构。",
                "category": "developer",
                "tags": [
                      "template",
                      "developer",
                      "hello-world"
                ],
                "keywordsZh": [
                      "模板",
                      "开发",
                      "入门",
                      "示例"
                ],
                "language": "TypeScript",
                "stars": 19,
                "lastChecked": "2026-08-16",
                "verified": {
                      "packageName": "dsh-plugin-template",
                      "bundlePatch": "./cordis.patch.yml",
                      "client": false
                }
          }
    ];
    const healthCache = new Map();

    const css = `
#${ROOT_ID} {
  position: fixed;
  right: 20px;
  top: 72px;
  z-index: 2147483000;
  color: var(--dsw-alias-label-primary, #f7f7fb);
  font-family: Inter, "Microsoft YaHei UI", "Microsoft YaHei", system-ui, sans-serif;
  pointer-events: none;
}

#${ROOT_ID} * {
  box-sizing: border-box;
}

.dpm-launcher {
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 44px;
  padding: 0 16px;
  border: 1px solid var(--dsw-alias-brand-primary, #4f7cff);
  border-radius: 10px;
  background: color-mix(in srgb, var(--dsw-alias-bg-layer-2, #202124) 88%, transparent);
  color: var(--dsw-alias-label-primary, #f7f7fb);
  box-shadow: 0 12px 34px rgba(0, 0, 0, .30), 0 0 0 3px rgba(79, 124, 255, .14);
  cursor: pointer;
  font: inherit;
  font-size: 14px;
  font-weight: 650;
  line-height: 1;
  backdrop-filter: blur(16px);
}

.dpm-launcher:hover {
  border-color: var(--dsw-alias-brand-primary, #4f7cff);
  background: var(--dsw-alias-bg-layer-3, #2a2b30);
}

.dpm-launcher svg,
.dpm-icon-button svg,
.dpm-action svg {
  width: 16px;
  height: 16px;
  flex: none;
}

.dpm-panel {
  pointer-events: auto;
  position: fixed;
  right: 20px;
  top: 124px;
  width: min(720px, calc(100vw - 40px));
  height: min(680px, calc(100vh - 148px));
  display: none;
  grid-template-rows: auto auto 1fr auto;
  overflow: hidden;
  border: 1px solid var(--dsw-alias-border-l2, rgba(255,255,255,.16));
  border-radius: 12px;
  background: color-mix(in srgb, var(--dsw-alias-bg-layer-1, #15161a) 96%, transparent);
  box-shadow: 0 28px 90px rgba(0, 0, 0, .42);
  backdrop-filter: blur(18px);
}

.dpm-open .dpm-panel {
  display: grid;
}

.dpm-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px 14px;
  border-bottom: 1px solid var(--dsw-alias-border-l2, rgba(255,255,255,.12));
}

.dpm-title {
  min-width: 0;
  flex: 1;
}

.dpm-title strong {
  display: block;
  color: var(--dsw-alias-label-primary, #f7f7fb);
  font-size: 15px;
  line-height: 1.35;
}

.dpm-title span {
  display: block;
  margin-top: 3px;
  color: var(--dsw-alias-label-tertiary, #9ea2ad);
  font-size: 12px;
  line-height: 1.4;
}

.dpm-icon-button {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid transparent;
  border-radius: 8px;
  color: var(--dsw-alias-label-secondary, #d7d9e0);
  background: transparent;
  cursor: pointer;
}

.dpm-icon-button:hover {
  border-color: var(--dsw-alias-border-l2, rgba(255,255,255,.16));
  background: var(--dsw-alias-bg-layer-3, #292b31);
}

.dpm-search {
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: 10px;
  padding: 14px 18px;
}

.dpm-categorybar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 18px 14px;
  border-bottom: 1px solid var(--dsw-alias-border-l2, rgba(255,255,255,.12));
}

.dpm-category {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(255,255,255,.16));
  border-radius: 999px;
  padding: 0 11px;
  background: transparent;
  color: var(--dsw-alias-label-secondary, #d7d9e0);
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
}

.dpm-category:hover,
.dpm-category[data-active="true"] {
  border-color: var(--dsw-alias-brand-primary, #4f7cff);
  background: color-mix(in srgb, var(--dsw-alias-brand-primary, #4f7cff) 14%, transparent);
  color: var(--dsw-alias-label-primary, #f7f7fb);
}

.dpm-input,
.dpm-select {
  min-width: 0;
  height: 36px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(255,255,255,.16));
  border-radius: 8px;
  padding: 0 11px;
  background: var(--dsw-alias-bg-layer-3, #26282e);
  color: var(--dsw-alias-label-primary, #f7f7fb);
  font: inherit;
  font-size: 13px;
  outline: none;
}

.dpm-input:focus,
.dpm-select:focus {
  border-color: var(--dsw-alias-brand-primary, #4f7cff);
}

.dpm-button {
  height: 36px;
  border: 1px solid var(--dsw-alias-label-primary, #f7f7fb);
  border-radius: 8px;
  padding: 0 14px;
  background: var(--dsw-alias-label-primary, #f7f7fb);
  color: var(--dsw-alias-bg-base, #0c0d10);
  cursor: pointer;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
}

.dpm-button:disabled {
  opacity: .55;
  cursor: default;
}

.dpm-button-secondary {
  border-color: var(--dsw-alias-border-l2, rgba(255,255,255,.18));
  background: transparent;
  color: var(--dsw-alias-label-primary, #f7f7fb);
}

.dpm-results {
  min-height: 0;
  overflow: auto;
  padding: 12px 18px 16px;
}

.dpm-status {
  padding: 24px 4px;
  color: var(--dsw-alias-label-tertiary, #9ea2ad);
  font-size: 13px;
  line-height: 1.6;
}

.dpm-list {
  display: grid;
  gap: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.dpm-card {
  display: grid;
  gap: 10px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(255,255,255,.14));
  border-radius: 10px;
  padding: 12px;
  background: color-mix(in srgb, var(--dsw-alias-bg-layer-2, #1f2025) 92%, transparent);
}

.dpm-card-head {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.dpm-repo {
  min-width: 0;
  flex: 1;
}

.dpm-repo a {
  color: var(--dsw-alias-label-primary, #f7f7fb);
  text-decoration: none;
  font-size: 14px;
  font-weight: 650;
  line-height: 1.35;
}

.dpm-repo a:hover {
  text-decoration: underline;
}

.dpm-desc {
  margin: 5px 0 0;
  color: var(--dsw-alias-label-tertiary, #a8acb7);
  font-size: 12px;
  line-height: 1.55;
}

.dpm-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--dsw-alias-label-tertiary, #a8acb7);
  font-size: 12px;
}

.dpm-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  min-height: 22px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(255,255,255,.12));
  border-radius: 999px;
  padding: 2px 8px;
  background: var(--dsw-alias-bg-module-platform, rgba(255,255,255,.05));
}

.dpm-pill[data-tone="good"] {
  border-color: rgba(80, 210, 150, .36);
  color: #8cf0bf;
  background: rgba(80, 210, 150, .10);
}

.dpm-pill[data-tone="warn"] {
  border-color: rgba(255, 191, 91, .36);
  color: #ffd28a;
  background: rgba(255, 191, 91, .10);
}

.dpm-pill[data-tone="bad"] {
  border-color: rgba(255, 112, 132, .36);
  color: #ff9bac;
  background: rgba(255, 112, 132, .10);
}

.dpm-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.dpm-action {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  min-height: 30px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(255,255,255,.16));
  border-radius: 8px;
  padding: 0 10px;
  background: transparent;
  color: var(--dsw-alias-label-secondary, #d7d9e0);
  cursor: pointer;
  font: inherit;
  font-size: 12px;
  text-decoration: none;
}

.dpm-action:hover {
  border-color: var(--dsw-alias-brand-primary, #4f7cff);
  color: var(--dsw-alias-label-primary, #f7f7fb);
  background: var(--dsw-alias-bg-layer-3, #292b31);
}

.dpm-action:disabled {
  opacity: .55;
  cursor: default;
}

.dpm-check-result {
  display: none;
  gap: 8px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(255,255,255,.12));
  border-radius: 8px;
  padding: 10px;
  background: rgba(255, 255, 255, .035);
}

.dpm-check-result[data-show="true"] {
  display: grid;
}

.dpm-check-title {
  color: var(--dsw-alias-label-primary, #f7f7fb);
  font-size: 12px;
  font-weight: 650;
  line-height: 1.4;
}

.dpm-findings {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.dpm-check-note {
  margin: 0;
  color: var(--dsw-alias-label-tertiary, #a8acb7);
  font-size: 12px;
  line-height: 1.5;
}

.dpm-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 10px 18px;
  border-top: 1px solid var(--dsw-alias-border-l2, rgba(255,255,255,.12));
  color: var(--dsw-alias-label-tertiary, #a8acb7);
  font-size: 12px;
}

.dpm-footer a {
  color: inherit;
}

.dpm-toast {
  position: fixed;
  right: 20px;
  bottom: 118px;
  display: none;
  max-width: min(420px, calc(100vw - 40px));
  border: 1px solid var(--dsw-alias-border-l2, rgba(255,255,255,.16));
  border-radius: 8px;
  padding: 10px 12px;
  background: var(--dsw-alias-bg-layer-3, #292b31);
  color: var(--dsw-alias-label-primary, #f7f7fb);
  box-shadow: 0 16px 44px rgba(0,0,0,.32);
  font-size: 12px;
  line-height: 1.45;
}

.dpm-toast[data-show="true"] {
  display: block;
}

@media (max-width: 720px) {
  #${ROOT_ID} {
    right: 12px;
    top: 66px;
  }

  .dpm-panel {
    right: 12px;
    top: 118px;
    width: calc(100vw - 24px);
  }

  .dpm-search {
    grid-template-columns: 1fr;
  }
}
`;

    function icon(path) {
      return `<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="${path}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
    }

    const icons = {
      box: icon("M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z M3.3 7 12 12l8.7-5 M12 22V12"),
      close: icon("M18 6 6 18 M6 6l12 12"),
      copy: icon("M8 8h10v10H8z M6 16H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"),
      external: icon("M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6 M15 3h6v6 M10 14 21 3"),
      refresh: icon("M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16 M3 21v-5h5 M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8 M16 8h5V3")
    };

    function ensureStyle() {
      if (document.getElementById(STYLE_ID)) return;
      const style = document.createElement("style");
      style.id = STYLE_ID;
      style.dataset.plugin = PLUGIN_ID;
      style.dataset.pluginCss = STYLE_ID;
      style.textContent = css;
      document.head.appendChild(style);
    }

    function text(value, fallback = "") {
      return typeof value === "string" && value.trim() ? value : fallback;
    }

    function formatCount(value) {
      const n = Number(value) || 0;
      if (n >= 10000) return `${(n / 10000).toFixed(n >= 100000 ? 0 : 1)}w`;
      if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
      return String(n);
    }

    function formatDate(value) {
      if (!value) return "unknown";
      const date = new Date(value);
      if (Number.isNaN(date.getTime())) return "unknown";
      return date.toLocaleDateString("zh-CN", { year: "numeric", month: "2-digit", day: "2-digit" });
    }

    function installCommand(repo) {
      return `dsh plugin --profile web add github:${repo.full_name}`;
    }

    function categoryLabel(category) {
      return {
        market: "市场",
        developer: "开发",
        workflow: "工作流",
        runtime: "运行时",
        manager: "管理",
        skin: "皮肤"
      }[category] || category || "插件";
    }

    function categoryOptions() {
      const counts = REGISTRY.reduce((map, plugin) => {
        map.set(plugin.category, (map.get(plugin.category) || 0) + 1);
        return map;
      }, new Map());
      return [
        { value: "", label: "全部", count: REGISTRY.length },
        ...["market", "manager", "skin", "workflow", "runtime", "developer"]
          .filter((value) => counts.has(value))
          .map((value) => ({ value, label: categoryLabel(value), count: counts.get(value) }))
      ];
    }

    function verifiedHealth(plugin) {
      const findings = [
        { label: `包名 ${plugin.verified.packageName}`, tone: "good" },
        { label: "有 dsh.bundle", tone: "good" },
        { label: `patch 存在 ${plugin.verified.bundlePatch}`, tone: "good" },
        { label: plugin.verified.client ? "Web client 入口" : "Host 插件", tone: plugin.verified.client ? "good" : "warn" }
      ];
      return {
        status: "good",
        title: "已验证：可作为 DSH 插件安装",
        note: `内置目录最后校验：${REGISTRY_UPDATED_AT}。安装前仍建议打开 GitHub 看 README。`,
        findings
      };
    }

    function registryRepo(plugin) {
      return {
        full_name: plugin.fullName,
        html_url: `https://github.com/${plugin.fullName}`,
        description: `${plugin.titleZh} · ${plugin.summaryZh}`,
        stargazers_count: plugin.stars,
        forks_count: 0,
        updated_at: REGISTRY_UPDATED_AT,
        language: plugin.language,
        default_branch: "main",
        dpmRegistry: true,
        dpmCategory: plugin.category,
        dpmTitle: plugin.titleZh,
        dpmHealth: verifiedHealth(plugin)
      };
    }

    function expandQuery(query) {
      const value = String(query || "").toLowerCase().trim();
      const expansions = [];
      const rules = [
        [/皮肤|主题/, "skin theme"],
        [/界面|ui/, "visual ui web-ui"],
        [/市场|商店|目录|插件库/, "market store directory marketplace manager"],
        [/搜索|github|发现/, "search github discovery"],
        [/安装|更新|卸载|管理/, "install update remove manager"],
        [/模板|开发|入门|示例/, "template developer hello-world"],
        [/会话|链接|分享|跳转/, "session deeplink routing share"],
        [/沙箱|执行|运行时|工具/, "sandbox execution runtime provider"]
      ];
      for (const [pattern, words] of rules) {
        if (pattern.test(value)) expansions.push(words);
      }
      return `${value} ${expansions.join(" ")}`.trim();
    }

    function registryMatches(plugin, query) {
      const raw = String(query || "").toLowerCase().trim();
      const expanded = expandQuery(query);
      if (!raw) return true;
      const haystack = [
        plugin.fullName,
        plugin.name,
        plugin.title,
        plugin.titleZh,
        plugin.summary,
        plugin.summaryZh,
        plugin.category,
        ...(plugin.tags || []),
        ...(plugin.keywordsZh || [])
      ].join(" ").toLowerCase();
      if (haystack.includes(raw)) return true;
      return expanded.split(/\s+/).filter((term) => term.length >= 2).some((term) => haystack.includes(term));
    }

    function registryData(query = "", category = "") {
      const items = REGISTRY
        .filter((plugin) => (!category || plugin.category === category) && registryMatches(plugin, query))
        .map(registryRepo);
      const categoryText = category ? `${categoryLabel(category)}分类，` : "";
      const suffixParts = [];
      if (category) suffixParts.push(`${categoryLabel(category)} ${items.length} 个`);
      if (query) suffixParts.push(`匹配 ${items.length} 个`);
      const suffix = suffixParts.length ? `，${suffixParts.join("，")}` : "";
      return {
        total_count: REGISTRY.length,
        items,
        dpmStatus: query && items.length === 0
          ? `内置目录${categoryText}没有匹配“${query}”的已验证插件。可以点“搜 GitHub”发现线索，未通过体检的结果不会启用安装命令。`
          : `内置目录：${REGISTRY.length} 个已验证 DSH 插件，${categoryText}最后校验 ${REGISTRY_UPDATED_AT}${suffix}。`
      };
    }

    function parseDirectRepoQuery(query) {
      const match = String(query || "").trim().match(/^(?:https:\/\/github\.com\/)?([A-Za-z0-9_.-]+)\/([A-Za-z0-9_.-]+)\/?$/);
      if (!match) return null;
      return { owner: match[1], repo: match[2] };
    }

    function fetchDirectRepo(query) {
      const direct = parseDirectRepoQuery(query);
      if (!direct) return null;
      const fullName = `${direct.owner}/${direct.repo}`;
      return {
        total_count: 1,
        items: [{
          full_name: fullName,
          html_url: `https://github.com/${fullName}`,
          description: "Direct repository lookup. Metadata is skipped to avoid GitHub API rate limits.",
          stargazers_count: 0,
          forks_count: 0,
          updated_at: "",
          language: "direct",
          default_branch: "main",
          dpmDirect: true
        }]
      };
    }

    function rawUrl(repo, branch, path) {
      const clean = String(path || "").replace(/^\.?\//, "");
      return `https://raw.githubusercontent.com/${repo.full_name}/${branch}/${clean}`;
    }

    async function fetchRepoFile(repo, path) {
      const branches = [text(repo.default_branch, "main"), "master"];
      let last = { ok: false, status: 0, text: "" };
      for (const branch of [...new Set(branches)]) {
        const controller = new AbortController();
        const timer = window.setTimeout(() => controller.abort(), 6000);
        try {
          const response = await fetch(rawUrl(repo, branch, path), { cache: "no-store", signal: controller.signal });
          if (response.ok) return { ok: true, status: response.status, text: await response.text(), branch };
          last = { ok: false, status: response.status, text: "" };
        } catch {
          last = { ok: false, status: 0, text: "" };
        } finally {
          window.clearTimeout(timer);
        }
      }
      return last;
    }

    function normalizePath(value) {
      return typeof value === "string" && value.trim() ? value.replace(/^\.?\//, "") : "";
    }

    function boolFinding(label, ok, good, bad) {
      return {
        label: ok ? good : bad,
        tone: ok ? "good" : "bad",
        detail: label
      };
    }

    async function checkRepo(repo) {
      if (healthCache.has(repo.full_name)) return healthCache.get(repo.full_name);

      const task = (async () => {
        const packageFile = await fetchRepoFile(repo, "package.json");
        if (!packageFile.ok) {
          return {
            status: "bad",
            title: "不可判断：没有公开 package.json",
            note: "这个仓库可能不是 npm/DSH 插件，或者 package.json 不在仓库根目录。",
            findings: [
              { label: "无 package.json", tone: "bad" },
              { label: `HTTP ${packageFile.status}`, tone: "warn" }
            ]
          };
        }

        let pkg;
        try {
          pkg = JSON.parse(packageFile.text);
        } catch {
          return {
            status: "bad",
            title: "不可安装：package.json 不是合法 JSON",
            note: "DSH profile 依赖安装会读取 package.json；JSON 坏了就不应该安装。",
            findings: [{ label: "package.json 损坏", tone: "bad" }]
          };
        }

        const bundlePatch = normalizePath(pkg?.dsh?.bundle?.patch);
        const hasBundle = Boolean(bundlePatch);
        const clientExport = normalizePath(pkg?.exports?.["./client"]);
        const hasClient = Boolean(pkg?.dsh?.client || clientExport);
        const patchFile = hasBundle ? await fetchRepoFile(repo, bundlePatch) : { ok: false, status: 0 };

        const findings = [
          { label: `包名 ${text(pkg.name, "unknown")}`, tone: "good" },
          boolFinding("dsh.bundle", hasBundle, "有 dsh.bundle", "无 dsh.bundle"),
          boolFinding("patch file", patchFile.ok, `patch 存在 ${bundlePatch}`, "patch 不存在"),
          { label: hasClient ? "Web client 入口" : "无 Web client", tone: hasClient ? "good" : "warn" }
        ];

        if (!hasBundle) {
          return {
            status: "bad",
            title: "不像可挂载的 DSH 插件",
            note: "缺少 package.json 里的 dsh.bundle.patch；复制安装命令也可能只会装成普通依赖。",
            findings
          };
        }

        if (!patchFile.ok) {
          return {
            status: "warn",
            title: "声明了 DSH bundle，但 patch 文件没取到",
            note: "可能是路径写错、分支不是默认分支，或仓库结构特殊。安装前要进 GitHub 手动确认。",
            findings
          };
        }

        return {
          status: "good",
          title: "看起来可以作为 DSH 插件安装",
          note: hasClient ? "检测到 bundle patch 和 Web client 入口。" : "检测到 bundle patch；它可能是 host-only 插件，不一定有界面。",
          findings
        };
      })();

      healthCache.set(repo.full_name, task);
      return task;
    }

    async function filterInstallableRepos(repos, isCurrent, onProgress) {
      const matches = [];
      const checked = [];
      for (let index = 0; index < repos.length; index += 1) {
        if (!isCurrent()) return null;
        let result;
        try {
          result = await checkRepo(repos[index]);
        } catch (error) {
          result = {
            status: "warn",
            title: "体检失败",
            note: explainFetchError(error),
            findings: [{ label: "GitHub 请求失败", tone: "warn" }]
          };
        }
        const repo = {
          ...repos[index],
          dpmHealth: result,
          dpmCandidateOnly: result.status !== "good"
        };
        checked.push(repo);
        if (result.status === "good") matches.push(repo);
        if (onProgress) onProgress(index + 1, repos.length, matches.length);
      }
      return { matches, checked };
    }

    function explainFetchError(error) {
      const message = error instanceof Error ? error.message : String(error);
      if (/Failed to fetch|NetworkError|Load failed/i.test(message)) {
        return "无法访问 GitHub Search API。请直接输入 owner/repo 检查，或确认网络/代理允许访问 api.github.com。";
      }
      return message;
    }

    async function copyText(value) {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        return;
      }
      const input = document.createElement("textarea");
      input.value = value;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }

    function createMarket() {
      const root = document.createElement("section");
      root.id = ROOT_ID;
      root.setAttribute("aria-label", "DSH plugin market");
      root.innerHTML = `
        <button class="dpm-launcher" type="button" aria-expanded="false">
          ${icons.box}
          <span>插件市场</span>
        </button>
        <div class="dpm-panel" role="dialog" aria-modal="false" aria-label="DSH 插件市场助手">
          <div class="dpm-header">
            <div class="dpm-title">
              <strong>DSH 插件商店</strong>
              <span>默认显示已验证目录；中文搜索走本地目录，GitHub 只用于发现线索。</span>
            </div>
            <button class="dpm-icon-button" type="button" data-dpm-refresh title="刷新">${icons.refresh}</button>
            <button class="dpm-icon-button" type="button" data-dpm-close title="关闭">${icons.close}</button>
          </div>
          <form class="dpm-search">
            <input class="dpm-input" name="query" value="${DEFAULT_QUERY}" placeholder="${QUERY_PLACEHOLDER}" aria-label="GitHub 搜索词" spellcheck="false" />
            <select class="dpm-select" name="sort" aria-label="排序">
              <option value="stars">按 star</option>
              <option value="updated">按更新</option>
              <option value="forks">按 fork</option>
            </select>
            <button class="dpm-button" type="submit">搜目录</button>
            <button class="dpm-button dpm-button-secondary" type="button" data-dpm-github>搜 GitHub</button>
          </form>
          <div class="dpm-categorybar" data-dpm-categories aria-label="插件分类"></div>
          <div class="dpm-results" data-dpm-results>
            <div class="dpm-status">正在加载内置目录...</div>
          </div>
          <div class="dpm-footer">
            <span>安装命令只在体检通过后启用；GitHub 结果默认只是线索。</span>
            <a href="https://github.com/topics/dsh-plugins" target="_blank" rel="noreferrer">GitHub topic</a>
          </div>
        </div>
        <div class="dpm-toast" data-dpm-toast role="status" aria-live="polite"></div>
      `;

      const launcher = root.querySelector(".dpm-launcher");
      const panel = root.querySelector(".dpm-panel");
      const form = root.querySelector(".dpm-search");
      const categoryBar = root.querySelector("[data-dpm-categories]");
      const results = root.querySelector("[data-dpm-results]");
      const toast = root.querySelector("[data-dpm-toast]");
      const searchButton = root.querySelector(".dpm-button");
      let activeCategory = "";
      let searchSeq = 0;
      let toastTimer = 0;

      function showToast(message) {
        window.clearTimeout(toastTimer);
        toast.textContent = message;
        toast.dataset.show = "true";
        toastTimer = window.setTimeout(() => {
          toast.dataset.show = "false";
        }, 2300);
      }

      function setOpen(open) {
        root.classList.toggle("dpm-open", open);
        launcher.setAttribute("aria-expanded", String(open));
      }

      function setStatus(message) {
        results.replaceChildren();
        const node = document.createElement("div");
        node.className = "dpm-status";
        node.textContent = message;
        results.appendChild(node);
      }

      function renderCategories() {
        categoryBar.replaceChildren();
        for (const option of categoryOptions()) {
          const button = document.createElement("button");
          button.type = "button";
          button.className = "dpm-category";
          button.dataset.category = option.value;
          button.dataset.active = String(option.value === activeCategory);
          button.textContent = `${option.label} ${option.count}`;
          button.addEventListener("click", () => {
            activeCategory = option.value;
            renderCategories();
            searchDirectory();
          });
          categoryBar.appendChild(button);
        }
      }

      function buildCard(repo) {
        const item = document.createElement("li");
        item.className = "dpm-card";
        const command = installCommand(repo);
        const homepage = text(repo.html_url, `https://github.com/${repo.full_name}`);
        const language = text(repo.language, "unknown");
        const description = text(repo.description, "No description.");

        const head = document.createElement("div");
        head.className = "dpm-card-head";

        const repoBox = document.createElement("div");
        repoBox.className = "dpm-repo";
        const link = document.createElement("a");
        link.href = homepage;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.textContent = repo.dpmTitle ? `${repo.dpmTitle} · ${repo.full_name}` : repo.full_name;
        const desc = document.createElement("p");
        desc.className = "dpm-desc";
        desc.textContent = description;
        repoBox.append(link, desc);

        const meta = document.createElement("div");
        meta.className = "dpm-meta";
        const fields = [
          repo.dpmCategory ? categoryLabel(repo.dpmCategory) : "",
          `star ${formatCount(repo.stargazers_count)}`,
          `fork ${formatCount(repo.forks_count)}`,
          `更新 ${formatDate(repo.updated_at)}`,
          language
        ].filter(Boolean);
        for (const value of fields) {
          const pill = document.createElement("span");
          pill.className = "dpm-pill";
          pill.textContent = value;
          meta.appendChild(pill);
        }

        const actions = document.createElement("div");
        actions.className = "dpm-actions";
        const check = document.createElement("button");
        check.type = "button";
        check.className = "dpm-action";
        check.textContent = "体检插件";
        const copy = document.createElement("button");
        copy.type = "button";
        copy.className = "dpm-action";
        copy.innerHTML = `${icons.copy}<span>复制安装命令</span>`;
        let currentCheck = repo.dpmHealth || null;
        function updateCopyState() {
          const canInstall = currentCheck?.status === "good";
          copy.disabled = !canInstall;
          copy.title = canInstall ? "" : "先体检通过后再复制安装命令";
        }
        copy.addEventListener("click", async () => {
          try {
            await copyText(command);
            showToast(`已复制：${command}`);
          } catch (error) {
            showToast(`复制失败：${error instanceof Error ? error.message : String(error)}`);
          }
        });
        const open = document.createElement("a");
        open.className = "dpm-action";
        open.href = homepage;
        open.target = "_blank";
        open.rel = "noreferrer";
        open.innerHTML = `${icons.external}<span>打开 GitHub</span>`;
        actions.append(check, copy, open);

        const checkResult = document.createElement("div");
        checkResult.className = "dpm-check-result";
        const checkTitle = document.createElement("div");
        checkTitle.className = "dpm-check-title";
        const findings = document.createElement("div");
        findings.className = "dpm-findings";
        const note = document.createElement("p");
        note.className = "dpm-check-note";
        checkResult.append(checkTitle, findings, note);

        function renderCheck(result) {
          currentCheck = result;
          checkResult.dataset.show = "true";
          checkTitle.textContent = result.title;
          findings.replaceChildren();
          for (const item of result.findings) {
            const pill = document.createElement("span");
            pill.className = "dpm-pill";
            pill.dataset.tone = item.tone;
            pill.textContent = item.label;
            findings.appendChild(pill);
          }
          note.textContent = result.note;
          updateCopyState();
        }

        check.addEventListener("click", async () => {
          check.disabled = true;
          check.textContent = "体检中...";
          try {
            renderCheck(await checkRepo(repo));
          } catch (error) {
            renderCheck({
              status: "warn",
              title: "体检失败",
              note: error instanceof Error ? error.message : String(error),
              findings: [{ label: "GitHub 请求失败", tone: "warn" }]
            });
          } finally {
            check.disabled = false;
            check.textContent = "重新体检";
          }
        });

        head.append(repoBox);
        item.append(head, meta, actions, checkResult);
        updateCopyState();
        if (repo.dpmHealth) renderCheck(repo.dpmHealth);
        return item;
      }

      function render(data) {
        results.replaceChildren();
        const total = Number(data.total_count) || 0;
        if (!Array.isArray(data.items) || data.items.length === 0) {
          setStatus(text(data.dpmStatus, "目录里没有匹配插件。可以换中文关键词，或点“搜 GitHub”发现线索。"));
          return;
        }
        const status = document.createElement("div");
        status.className = "dpm-status";
        status.textContent = text(data.dpmStatus, `GitHub 返回 ${formatCount(total)} 个匹配仓库，当前显示前 ${data.items.length} 个。`);
        const list = document.createElement("ul");
        list.className = "dpm-list";
        for (const repo of data.items) list.appendChild(buildCard(repo));
        results.append(status, list);
      }

      function searchDirectory() {
        const seq = ++searchSeq;
        const values = new FormData(form);
        const query = String(values.get("query") || "").trim();
        const directRepo = fetchDirectRepo(query);
        if (directRepo) {
          directRepo.dpmStatus = "直接仓库查询：已跳过 GitHub Search API。请点“体检插件”，通过后才能复制安装命令。";
          render(directRepo);
          return;
        }
        render(registryData(query, activeCategory));
      }

      async function discoverGithub() {
        const seq = ++searchSeq;
        const values = new FormData(form);
        const query = String(values.get("query") || "").trim();
        const sort = String(values.get("sort") || "stars");
        if (!query) {
          setStatus("搜 GitHub 前先输入关键词；中文词也可以，比如：插件市场、皮肤、沙箱、会话。");
          return;
        }
        searchButton.disabled = true;
        setStatus("正在搜索 GitHub...");
        try {
          const directRepo = fetchDirectRepo(query);
          if (directRepo) {
            directRepo.dpmStatus = "直接仓库查询：已跳过 GitHub Search API。请点“体检插件”，通过后才能复制安装命令。";
            if (seq === searchSeq) render(directRepo);
            return;
          }
          const githubQuery = /[\u4e00-\u9fff]/.test(query) ? `${expandQuery(query)} deepseek harness dsh plugin` : query;
          const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(githubQuery)}&sort=${encodeURIComponent(sort)}&order=desc&per_page=20`;
          const response = await fetch(url, {
            headers: {
              Accept: "application/vnd.github+json"
            }
          });
          const data = await response.json();
          if (!response.ok) {
            const message = text(data?.message, `GitHub API ${response.status}`);
            throw new Error(message);
          }

          if (seq === searchSeq) setStatus(`GitHub 返回 ${formatCount(data.total_count)} 个候选，正在体检前 ${data.items.length} 个...`);
          const filtered = await filterInstallableRepos(data.items || [], () => seq === searchSeq, (done, total, passed) => {
            if (seq === searchSeq) setStatus(`正在体检 ${done}/${total}，已通过 ${passed} 个 DSH 插件。`);
          });
          if (!filtered || seq !== searchSeq) return;
          if (filtered.matches.length === 0) {
            render({
              total_count: data.total_count,
              items: filtered.checked,
              dpmStatus: `GitHub 返回 ${formatCount(data.total_count)} 个候选，但前 ${data.items.length} 个没有体检通过的 DSH 插件。下面是原始候选，已禁用安装命令复制。`
            });
            return;
          }
          render({
            total_count: data.total_count,
            items: filtered.matches,
            dpmStatus: `GitHub 返回 ${formatCount(data.total_count)} 个候选，前 ${data.items.length} 个里体检通过 ${filtered.matches.length} 个 DSH 插件。`
          });
        } catch (error) {
          if (seq === searchSeq) setStatus(`搜索失败：${explainFetchError(error)}`);
        } finally {
          if (seq === searchSeq) searchButton.disabled = false;
        }
      }

      const onKeydown = (event) => {
        if (event.key === "Escape" && root.classList.contains("dpm-open")) setOpen(false);
      };

      launcher.addEventListener("click", () => setOpen(!root.classList.contains("dpm-open")));
      root.querySelector("[data-dpm-close]").addEventListener("click", () => setOpen(false));
      root.querySelector("[data-dpm-refresh]").addEventListener("click", () => searchDirectory());
      root.querySelector("[data-dpm-github]").addEventListener("click", () => discoverGithub());
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        searchDirectory();
      });
      document.addEventListener("keydown", onKeydown);
      document.body.appendChild(root);
      renderCategories();
      render(registryData("", activeCategory));

      return () => {
        window.clearTimeout(toastTimer);
        document.removeEventListener("keydown", onKeydown);
        root.remove();
      };
    }

    function mount() {
      if (document.getElementById(ROOT_ID)) return () => {};
      ensureStyle();
      return createMarket();
    }

    function apply(ctx) {
      ctx.effect(() => mount(), "dsh-plugin-market: browser helper");
    }

    exports.apply = apply;
    exports.inject = [];
    return module.exports;
  }
});
