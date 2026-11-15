# Squarespace 7.1 — templates vs redesign

Official sources:

- [How site templates work in 7.0 and 7.1](https://support.squarespace.com/hc/en-us/articles/216562268-How-site-templates-work-in-versions-7-0-and-7-1)
- [Switching templates (7.0 only)](https://support.squarespace.com/hc/en-us/articles/205815598-Switching-templates-in-version-7-0) — states **you cannot change templates on 7.1**
- [Redesign or restart your site](https://support.squarespace.com/hc/en-us/articles/205815378-Redesign-or-restart-your-site) (updated July 6, 2026)

## There is no “pick Atlantic / switch template” on 7.1

Lucky Nick’s production site and the **(Copy)** duplicate are almost certainly **7.1**. On 7.1:

- You **do not** switch templates.
- There is **no** **Settings → Website → Design → Template** (that mental model is 7.0).
- The label at the bottom of the **Pages** panel (e.g. “7.1 · …”) is only what you **started from** at signup — not something you swap later.

Demos like Atlantic or Pine matter when **creating a brand-new trial** from the template gallery, or when manually rebuilding pages to resemble a demo.

## What to use instead on the staging copy

| Goal | Where (7.1) |
|------|----------------|
| Global fonts, colors, buttons | **Site Styles** — paintbrush icon while editing a page, or `/` search **Site Styles** |
| Quick visual refresh | **Site Styles → Themes** — preset style packs (Professional, Bold, Playful, etc.) per [Redesign or restart](https://support.squarespace.com/hc/en-us/articles/205815378-Redesign-or-restart-your-site) |
| New homepage / menu layout | Edit page → **+** section → pick a **section layout** (Fluid Engine) |
| New whole page | **Pages → + → Page Layouts** |
| Nuclear clean slate | New trial from a restaurant demo, rebuild, move domain later — or duplicate again from production |

## Premium / GitHub CSS

Site-wide overrides stay in this repo (`src/*.css` → GitHub Pages → Custom CSS `@import`). Squarespace **Site Styles** and GitHub CSS stack; agree on who owns fonts and colors to avoid fighting.

## 7.0 only (not this project unless verified)

Template install/preview/switch: **Design panel → Template** — see [Switching templates in 7.0](https://support.squarespace.com/hc/en-us/articles/205815598-Switching-templates-in-version-7-0).