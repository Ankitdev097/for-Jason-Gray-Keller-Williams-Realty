# Agent Instructions

## Deployment & Dependency Management (Cloudflare & GitHub)

- Before pushing any changes to GitHub, always ensure `package.json` and `package-lock.json` are fully synchronized.
- Verify that `npm ci` succeeds.
- If dependencies change, automatically regenerate and commit the updated `package-lock.json` file.
- Do not output code or configuration that would fail Cloudflare deployment (e.g., ensure no lingering bun.lock / bun.lockb files exist, ensure `package-lock.json` matches).
