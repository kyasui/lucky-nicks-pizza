# Colors (from logo)

Sampled from `brand/assets/logo.png`. Canonical tokens: `src/tokens.css`.

| Role | Token | Hex | Logo use |
|------|-------|-----|----------|
| Background | `--ln-color-white` | `#ffffff` | Logo field |
| Primary | `--ln-color-sage` | `#6da091` | “Lucky Nick's” script |
| Primary hover / depth | `--ln-color-sage-dark` | `#5a8779` | Buttons, hover states |
| Secondary / CTA | `--ln-color-terracotta` | `#d27a62` | Horseshoe, “PIZZA”, 7 |
| Secondary hover | `--ln-color-terracotta-dark` | `#b8654f` | Link/button hover |
| Body text | `--ln-color-text` | `#2a3533` | Readable on white |
| Muted text | `--ln-color-text-muted` | `#4d5c59` | Captions, meta |

## Squarespace Site Styles (optional)

Match **Site Styles → Colors** to sage / terracotta / white so native blocks and your GitHub CSS stay aligned. Details can stay in git CSS.

After token changes: push `main`, then bump `cacheBust` in `config/pages.json` if the live site caches the stylesheet.