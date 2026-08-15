# Changelog

## v0.2.3

- Keep search usable when strict filtering finds no verified plugins.
- Show checked raw candidates with their health result instead of an empty message.
- Disable install command copying until a repository passes the DSH plugin health check.

## v0.2.2

- Stop auto-searching GitHub when the panel opens.
- Show an explicit empty-query state instead of making a network request.
- Explain `Failed to fetch` as a GitHub Search API/network access problem and point users to direct `owner/repo` lookup.

## v0.2.1

- Enable strict search by default.
- Hide normal search results unless they pass the DSH bundle health check.
- Add a "只显示插件" switch for falling back to raw GitHub results.
- Add raw file request timeouts while checking repositories.

## v0.2.0

- Add direct `owner/repo` and GitHub repository URL lookup without using the GitHub Search API.
- Add per-repository plugin health checks.
- Detect root `package.json`.
- Detect `dsh.bundle.patch` declarations.
- Verify the declared patch file exists on the repository default branch.
- Flag likely Web UI plugins by checking `dsh.client` or `exports["./client"]`.
- Keep the v0.1.0 source snapshot under `archive/v0.1.0/`.

## v0.1.0

- First public MVP.
- Search GitHub DSH plugin repositories.
- Show repository stars, forks, language, update time, and description.
- Copy candidate install commands.
