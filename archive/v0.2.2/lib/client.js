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
    const QUERY_PLACEHOLDER = "owner/repo 或 topic:dsh-plugins -user:deepseek-ai";
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
  border-bottom: 1px solid var(--dsw-alias-border-l2, rgba(255,255,255,.12));
}

.dpm-filter {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 36px;
  border: 1px solid var(--dsw-alias-border-l2, rgba(255,255,255,.16));
  border-radius: 8px;
  padding: 0 10px;
  background: var(--dsw-alias-bg-layer-3, #26282e);
  color: var(--dsw-alias-label-secondary, #d7d9e0);
  font-size: 12px;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
}

.dpm-filter input {
  width: 14px;
  height: 14px;
  margin: 0;
  accent-color: var(--dsw-alias-brand-primary, #4f7cff);
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
      for (let index = 0; index < repos.length; index += 1) {
        if (!isCurrent()) return null;
        try {
          const result = await checkRepo(repos[index]);
          if (result.status === "good") matches.push(repos[index]);
        } catch {
          // Keep the market strict: failed checks are hidden by default.
        }
        if (onProgress) onProgress(index + 1, repos.length, matches.length);
      }
      return matches;
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
              <strong>DSH 插件市场助手</strong>
              <span>只读搜索 GitHub；也支持直接粘贴 owner/repo，复制安装命令，不自动安装。</span>
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
            <label class="dpm-filter" title="开启后只显示体检通过的 DSH bundle">
              <input type="checkbox" name="strict" checked />
              <span>只显示插件</span>
            </label>
            <button class="dpm-button" type="submit">搜索</button>
          </form>
          <div class="dpm-results" data-dpm-results>
            <div class="dpm-status">默认不会自动联网。建议先输入 <code>owner/repo</code> 直接检查；关键词搜索需要能访问 GitHub Search API。</div>
          </div>
          <div class="dpm-footer">
            <span>命令只是候选；仓库必须声明 <code>dsh.bundle</code> 才能作为插件挂载。</span>
            <a href="https://github.com/topics/dsh-plugins" target="_blank" rel="noreferrer">GitHub topic</a>
          </div>
        </div>
        <div class="dpm-toast" data-dpm-toast role="status" aria-live="polite"></div>
      `;

      const launcher = root.querySelector(".dpm-launcher");
      const panel = root.querySelector(".dpm-panel");
      const form = root.querySelector(".dpm-search");
      const results = root.querySelector("[data-dpm-results]");
      const toast = root.querySelector("[data-dpm-toast]");
      const searchButton = root.querySelector(".dpm-button");
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
        link.textContent = repo.full_name;
        const desc = document.createElement("p");
        desc.className = "dpm-desc";
        desc.textContent = description;
        repoBox.append(link, desc);

        const meta = document.createElement("div");
        meta.className = "dpm-meta";
        const fields = [
          `star ${formatCount(repo.stargazers_count)}`,
          `fork ${formatCount(repo.forks_count)}`,
          `更新 ${formatDate(repo.updated_at)}`,
          language
        ];
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
        return item;
      }

      function render(data) {
        results.replaceChildren();
        const total = Number(data.total_count) || 0;
        if (!Array.isArray(data.items) || data.items.length === 0) {
          setStatus("没有匹配仓库。换个关键词试试，比如 topic:dsh-plugins -user:deepseek-ai，或直接输入 owner/repo。");
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

      async function search() {
        const seq = ++searchSeq;
        const values = new FormData(form);
        const query = String(values.get("query") || "").trim();
        const sort = String(values.get("sort") || "stars");
        const strict = values.get("strict") === "on";
        if (!query) {
          setStatus("先输入 owner/repo 直接检查，或输入关键词再走 GitHub 搜索。");
          return;
        }
        searchButton.disabled = true;
        setStatus("正在搜索 GitHub...");
        try {
          const directRepo = fetchDirectRepo(query);
          if (directRepo) {
            directRepo.dpmStatus = "直接仓库查询：已跳过 GitHub Search API。请点“体检插件”确认是否可安装。";
            if (seq === searchSeq) render(directRepo);
            return;
          }
          const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=${encodeURIComponent(sort)}&order=desc&per_page=20`;
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
          if (!strict) {
            if (seq === searchSeq) render(data);
            return;
          }

          if (seq === searchSeq) setStatus(`GitHub 返回 ${formatCount(data.total_count)} 个候选，正在体检前 ${data.items.length} 个...`);
          const filtered = await filterInstallableRepos(data.items || [], () => seq === searchSeq, (done, total, passed) => {
            if (seq === searchSeq) setStatus(`正在体检 ${done}/${total}，已通过 ${passed} 个 DSH 插件。`);
          });
          if (!filtered || seq !== searchSeq) return;
          if (filtered.length === 0) {
            setStatus(`GitHub 返回 ${formatCount(data.total_count)} 个候选，但前 ${data.items.length} 个没有体检通过的 DSH 插件。可以关闭“只显示插件”查看原始结果。`);
            return;
          }
          render({
            total_count: data.total_count,
            items: filtered,
            dpmStatus: `GitHub 返回 ${formatCount(data.total_count)} 个候选，前 ${data.items.length} 个里体检通过 ${filtered.length} 个 DSH 插件。`
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
      root.querySelector("[data-dpm-refresh]").addEventListener("click", () => search());
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        void search();
      });
      document.addEventListener("keydown", onKeydown);
      document.body.appendChild(root);

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
