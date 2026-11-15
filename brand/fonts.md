# Fonts

Replace placeholders after Site Styles or Code Injection fonts are chosen.

| Role | Squarespace / Web | File variable |
|------|-------------------|---------------|
| Display | TBD | `--ln-font-display` in `src/tokens.css` |
| Body | TBD | `--ln-font-body` in `src/tokens.css` |

## Code injection

If fonts load via Adobe or Google Fonts, add the link tags in `code-injection/header.html`, then set `--ln-font-*` to match those family names.