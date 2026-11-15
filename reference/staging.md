# Staging (Squarespace copy)

Work on the duplicated site (**Lucky Nick's Pizza (Copy)**). Production stays on **www.luckynickspizza.com** until cutover.

## Code injection

1. On the **copy** site: **Website → Website Tools → Code Injection**.
2. Paste the full contents of `code-injection/header.html` into **Header**.
3. Paste `code-injection/footer.html` into **Footer** when needed.
4. Leave **Website → Custom CSS** empty unless you need a one-off override; theme CSS should load from GitHub Pages.

## Stylesheet URL

After the GitHub repo is live and Pages is enabled, the sheet is served at:

`https://kyasui.github.io/lucky-nicks-pizza/squarespace-custom.css`

The copy in `code-injection/header.html` includes `?v=` cache busting — bump `cacheBust` in `config/pages.json` and run `pnpm build` if Squarespace caches an old file.

## Cutover

- [ ] Redesign approved on copy
- [ ] Commerce/payment re-tested if Shop changed
- [ ] Match header injection on production (or swap domain to copy per Squarespace plan)
- [ ] Remove trial restrictions / billing on final site