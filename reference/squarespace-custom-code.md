# Squarespace custom code (2026 UI)

Official references:

- [The Pages panel](https://support.squarespace.com/hc/en-us/articles/217644727-The-Pages-panel) (updated July 29, 2026)
- [Code injection](https://support.squarespace.com/hc/en-us/articles/205815908-Customize-parts-of-your-site-with-code-injection) (updated September 16, 2026)
- [Add custom code to your site](https://support.squarespace.com/hc/en-us/articles/205815928-Add-custom-code-to-your-site) (updated August 27, 2026)

## Where Code Injection lives now (7.1)

`Website Tools` under Settings is **out of date** for most 7.1 sites.

1. Open the site editor (click **WEBSITE** on the project card, or pick the copy site from the dashboard).
2. In the left sidebar, click **Pages** (under **Website**).
3. Scroll to the **bottom** of the Pages panel — below Main Navigation, Not Linked, Marketing Tools, and System Pages.
4. Expand or click **Custom Code**.
5. Click **Code Injection** (sibling item: **Custom CSS**).

**Squarespace 7.0 only:** the same options may appear under **Website Tools** at the bottom of Pages instead of **Custom Code**.

## Fastest way to open it

- Press **`/`** in the dashboard (or use the **search** icon), type **Code Injection**, and open the result.

## Plan / trial notes

- **Code Injection** requires **Core, Plus, Advanced**, or eligible legacy business/commerce plans — not **Basic**. See [Choosing the right plan](https://support.squarespace.com/hc/en-us/articles/3539385411341).
- A **duplicated site** is a separate **trial**; it still includes premium features during the trial, except Squarespace documents that **lock screen** code injection is not available on trial.
- If **Code Injection** does not appear in search, the copy may be on **Basic** or a plan tier without injection — upgrade the copy or use the Custom CSS method below.

## Recommended: load GitHub Pages CSS via Custom CSS

Squarespace recommends the **Custom CSS** editor for styling (not Code Injection). External stylesheets work with `@import` in Custom CSS on **all plans**.

1. **Pages → Custom Code → Custom CSS**
2. Paste the contents of `code-injection/custom-css-import.css` from this repo (or run `pnpm build`, which refreshes that file).
3. Save.

Keep **Code Injection → Header** for fonts, analytics, and scripts only — not the main theme sheet.

## Code Injection fields

| Field | Use |
|-------|-----|
| Header | Pasted HTML/scripts before `</head>` on every page |
| Footer | Before `</body>` on every page |

Per-page: **Pages → hover page → ⚙ → Advanced → Page Header Code Injection**.