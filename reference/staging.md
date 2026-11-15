# Staging (Squarespace copy)

Work on **Lucky Nick's Pizza (Copy)**. Production stays on **www.luckynickspizza.com** until cutover.

Navigation details: **`squarespace-custom-code.md`** in this folder.

## Load theme CSS (recommended)

1. **Pages → Custom Code → Custom CSS** (scroll to the bottom of the Pages panel).
2. Paste `code-injection/custom-css-import.css` from this repo.
3. Save.

Works on every billing plan, including Basic.

## Optional header / footer

**Pages → Custom Code → Code Injection** (requires Core, Plus, or Advanced — or eligible legacy plan).

- **Header:** `code-injection/header.html` only if you also want a `<link>` tag there, or for font snippets.
- **Footer:** `code-injection/footer.html` when needed.

Avoid duplicating the stylesheet in both Custom CSS and Header unless debugging.

## Stylesheet URL

`https://kyasui.github.io/lucky-nicks-pizza/squarespace-custom.css`

Bump `cacheBust` in `config/pages.json` and push if the site caches an old file.

## Cutover

- [ ] Redesign approved on copy
- [ ] Commerce/payment re-tested if Shop changed
- [ ] Same Custom CSS import on production (or domain swap to copy)
- [ ] Billing on final site