# Social Links block (7.1 — website component)

Official: [Social Links Blocks](https://support.squarespace.com/hc/en-us/articles/205814468-Social-Links-Blocks)

Staging: **https://drum-scarlet-4t54.squarespace.com/**

## Empty block (most common)

If markup looks like this, **CSS cannot help**:

```html
<nav class="sqs-svg-icon--list">
</nav>
```

There are **zero** links inside the list. Add accounts:

1. Click the block → pencil.
2. **Content** → **Add social link** (or connect Instagram, etc.).
3. Enter URL, turn **Display social icon** on.
4. Save the page.

Until `<nav class="sqs-svg-icon--list">` contains `<a>` / icon wrappers, the footer stays blank.

## New component markup

Squarespace now uses `data-definition-name="website.components.socialLinks"` and icon color variables **`--si-primary`**, **`--si-fill-icon`**, not only the old `socialaccountlinks-v2-block` classes.

This repo sets those in GitHub CSS and in the snippet **below** the `@import` in `custom-css-import.css`.

## Custom CSS on staging

**Pages → Custom Code → Custom CSS** — paste the **entire** `code-injection/custom-css-import.css` (import + trailing rules). Update `?v=` when the repo bumps `cacheBust`.

## All-white Site Styles

After links exist, if icons are still white, block **Design** → try **Solid** + **Circle**; or **Site Styles → Colors** → edit the **footer section** theme → **Social links block → Main color** → `#6DA091`.