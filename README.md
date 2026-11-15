# Lucky Nick's Pizza — Squarespace kit

Version-controlled CSS, code injection, and copy for [luckynickspizza.com](https://www.luckynickspizza.com/). Squarespace is the CMS; **GitHub Pages** serves the custom stylesheet.

## Layout

| Path | Purpose |
|------|---------|
| `src/tokens.css` | Brand CSS variables |
| `src/overrides.css` | Squarespace selectors and layout tweaks |
| `docs/squarespace-custom.css` | Built file published to GitHub Pages |
| `code-injection/custom-css-import.css` | Single line to paste into Squarespace **Custom CSS** |
| `code-injection/header.html` | Optional `<link>` for Header injection (fonts, etc.) |
| `config/pages.json` | GitHub Pages owner, repo name, cache-bust version |
| `reference/squarespace-custom-code.md` | **2026 navigation** for Pages → Custom Code |

## CSS workflow (GitHub Pages)

```bash
pnpm build
```

1. Edit `src/tokens.css` and `src/overrides.css`.
2. Run `pnpm build`.
3. Commit and push to `main`.
4. GitHub Actions rebuilds on `src/**` changes and deploys `docs/` to Pages.

**Live stylesheet URL**

`https://kyasui.github.io/lucky-nicks-pizza/squarespace-custom.css`

## Squarespace setup (staging copy)

Full UI paths: **`reference/squarespace-custom-code.md`**.

### Primary method (all plans): Custom CSS

1. Open **Pages** in the site editor.
2. At the bottom of the panel, open **Custom Code → Custom CSS**.
3. Paste everything from `code-injection/custom-css-import.css`.
4. Save and preview (try a private window if logged-in preview looks wrong).

### Optional: Code Injection (Core+ plans)

Same panel: **Custom Code → Code Injection → Header** for `code-injection/header.html` when you add fonts or third-party scripts. Do not rely on **Website → Website Tools** on 7.1 — that path is outdated.

Use **`/`** search and type **Code Injection** or **Custom CSS** if the panel is hard to find.

If styles look stale, increment `cacheBust` in `config/pages.json`, run `pnpm build`, and push.

## Enable GitHub Pages (one time)

Repo **Settings → Pages → Build and deployment**: **GitHub Actions** (`pages.yml` deploys `docs/`).

## Squarespace MCP (Cursor)

`.cursor/mcp.json` points at Squarespace's remote MCP for domains and commerce—not theme editing.

## Redesign checklist

- [ ] Staging copy pinned in Squarespace dashboard
- [ ] `custom-css-import.css` pasted in **Custom CSS**
- [ ] Pages deploy green; stylesheet URL loads in browser
- [ ] Match **Site Styles** to `brand/colors.md` / `src/tokens.css`
- [ ] Nav matches `content/navigation.md`
- [ ] Production cutover per `reference/staging.md`