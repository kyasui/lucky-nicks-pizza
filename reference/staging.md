# Staging (Squarespace copy)

| | |
|---|---|
| **Staging URL** | https://drum-scarlet-4t54.squarespace.com/ |
| **Production** | https://www.luckynickspizza.com/ (unchanged until cutover) |

The copy is **password-protected** in Squarespace (Site availability). Store the password outside git (1Password, etc.) — do not commit it to this repo.

Navigation and Custom CSS paths: **`squarespace-custom-code.md`**.

## Load theme CSS (recommended)

1. **Pages → Custom Code → Custom CSS** on **drum-scarlet-4t54**, not production.
2. Paste the current import from `code-injection/custom-css-import.css` (includes `?v=` cache bust).
3. Save.

## Stylesheet URL

`https://kyasui.github.io/lucky-nicks-pizza/squarespace-custom.css`

After git pushes, bump `cacheBust` in `config/pages.json` and update the `?v=` in Squarespace Custom CSS.

## Cutover

- [ ] Redesign approved on staging copy
- [ ] Commerce/payment re-tested if Shop changed
- [ ] Custom CSS import on production (or domain swap to copy)
- [ ] Billing on final site