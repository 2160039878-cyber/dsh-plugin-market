# DSH Plugin Market

> The loud little plugin radar DeepSeek Harness should have shipped with.

[![DeepSeek Harness](https://img.shields.io/badge/DeepSeek%20Harness-0.1.0--rc.6-black)](https://deepseek.com/harness/)
[![Plugin](https://img.shields.io/badge/DSH-plugin-blueviolet)](https://github.com/topics/dsh-plugins)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

`dsh-plugin-market` adds a floating GitHub-powered plugin browser to DeepSeek Harness Web. It is intentionally small, fast, and non-invasive: search repositories, compare stars, inspect whether a repository looks installable, open GitHub, copy the install command, then decide for yourself.

![DSH Plugin Market screenshot](docs/screenshot.png)

## Why This Exists

DeepSeek Harness says everything is a plugin. Great. But the ecosystem is already noisy: topics, awesome lists, random forks, half-working experiments, and hidden gems are all mixed together.

This plugin gives you a radar inside DSH:

- Find DSH-related repositories without leaving the app.
- Paste an exact `owner/repo` or GitHub repository URL when search indexing is slow.
- See stars, forks, language, update time, and descriptions at a glance.
- Copy a candidate `dsh plugin --profile web add ...` command.
- Run a quick installability check for `package.json`, `dsh.bundle.patch`, patch files, and Web client entry points.
- Stay safe: no automatic remote install, no API key access, no hidden writes.

## Features

- Default search: `topic:dsh-plugins -user:deepseek-ai`.
- Direct repository lookup without the GitHub Search API: `2160039878-cyber/dsh-plugin-market` or `https://github.com/2160039878-cyber/dsh-plugin-market`.
- Sort by stars, update time, or forks.
- Open matching repositories on GitHub.
- Check whether a repository looks like a real DSH bundle.
- Copy install commands.
- Works as a DSH Web client plugin.
- No build step.
- No dependencies.
- No token storage.

## Install

```powershell
dsh plugin --profile web add github:2160039878-cyber/dsh-plugin-market
dsh web
```

Open `http://127.0.0.1:3080/` and look for the `插件市场` button in the top-right corner.

## Local Development

```powershell
git clone https://github.com/2160039878-cyber/dsh-plugin-market.git
cd dsh-plugin-market
npm run check
dsh plugin --profile web add file:$PWD
dsh web
```

## Rollback

```powershell
dsh plugin --profile web remove dsh-plugin-market
```

## Safety Model

This project is a browser-side helper. It reads public GitHub repository search results through the GitHub Search API and renders them in DSH Web.

It does not:

- read DSH API keys;
- install remote code automatically;
- write to your DSH profile by itself;
- call private GitHub APIs;
- persist repository lists locally.

## Status

MVP. Useful now, intentionally not clever yet.

Planned only if needed:

- installed-plugin detection;
- richer plugin verification;
- better category filters;
- GitHub rate-limit status;
- one-click install behind explicit confirmation.

## Historical Versions

Historical source snapshots are kept in [`archive/`](archive/) in addition to Git tags and GitHub releases.

- [`archive/v0.1.0`](archive/v0.1.0): first public MVP, search + copy install command.
- [`archive/v0.1.0.zip`](archive/v0.1.0.zip): the same snapshot as a zip package.

## License

MIT
