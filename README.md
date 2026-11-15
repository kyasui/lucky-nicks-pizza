# Lucky Nick's Pizza — Squarespace kit

Version-controlled CSS, code injection, and copy for [luckynickspizza.com](https://www.luckynickspizza.com/). Squarespace is the CMS; **GitHub Pages** serves the custom stylesheet so you edit CSS in git instead of pasting into Custom CSS.

## Layout

| Path | Purpose |
|------|---------|
| `src/tokens.css` | Brand CSS variables |
| `src/overrides.css` | Squarespace selectors and layout tweaks |
| `docs/squarespace-custom.css` | Built file published to GitHub Pages |
| `code-injection/header.html` | Includes `<link>` to GitHub Pages CSS (+ fonts, etc.) |
| `config/pages.json` | GitHub Pages owner, repo name, cache-bust version |
| `content/` | Page copy, nav, SEO |
| `reference/staging.md` | Copy-site / injection checklist |

## CSS workflow (GitHub Pages)

```bash
pnpm build
```

1. Edit `src/tokens.css` and `src/overrides.css`.
2. Run `pnpm build` (writes `docs/squarespace-custom.css` and refreshes the `<link>` in `code-injection/header.html`).
3. Commit and push to `main`.
4. GitHub Actions rebuilds on `src/**` changes and deploys `docs/` to Pages.

**Live stylesheet URL**

`https://kyasui.github.io/lucky-nicks-pizza/squarespace-custom.css`

## Squarespace setup

On the **staging copy** (see `reference/staging.md`):

1. **Website → Website Tools → Code Injection → Header** — paste `code-injection/header.html`.
2. Do **not** duplicate the same rules in **Custom CSS** unless debugging.
3. After deploy, hard-refresh the site. If styles look stale, increment `cacheBust` in `config/pages.json` and push again.

Requires a plan that includes Code Injection (Core and above on current plans).

## Enable GitHub Pages (one time)

Repo **Settings → Pages → Build and deployment**: **GitHub Actions** (the `pages.yml` workflow deploys the `docs/` folder).

Or use **Deploy from branch → main → /docs** if you prefer branch-based Pages without Actions.

## Squarespace MCP (Cursor)

`.cursor/mcp.json` points at Squarespace's remote MCP for domains and commerce—not theme editing.

## Redesign checklist

- [ ] Staging copy pinned in Squarespace dashboard
- [ ] Code injection on copy
- [ ] Pages deploy green; stylesheet URL loads in browser
- [ ] Match **Site Styles** to `brand/colors.md` / `src/tokens.css`
- [ ] Nav matches `content/navigation.md`
- [ ] Production cutover per `reference/staging.md`