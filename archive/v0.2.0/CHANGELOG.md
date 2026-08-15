# Changelog

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
