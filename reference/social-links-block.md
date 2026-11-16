# Social Links block (7.1)

Official: [Social Links Blocks](https://support.squarespace.com/hc/en-us/articles/205814468-Social-Links-Blocks)

Work on **https://drum-scarlet-4t54.squarespace.com/** only.

## Empty block vs invisible icons

| Symptom | Fix |
|---------|-----|
| Empty box, nothing to click | **Content** tab → **Add social link** → URL → **Display Social Icon** on |
| Clicks work but nothing visible | Site Styles **Main Color** is white — see below |
| Visible in editor, not when logged out | Broken **Code Injection** HTML, or Custom CSS not saved on **this** site |

## Colors (Site Styles — required once if palette is all white)

GitHub CSS sets icon colors, but Squarespace still applies **section color themes**:

1. Edit the **footer** (or page with the block).
2. **Site Styles** (paintbrush) → **Colors**.
3. Click the **pencil** on the **footer section’s** color theme (not only global).
4. Scroll to **Social links block** → set **Main Color** to `#6DA091`, **Secondary** to `#D27A62` if shown.
5. Save.

## Block **Design** tab (easiest visible combo on white)

- **Border:** Circle  
- **Style:** **Solid** or **Outline** (avoid Knockout until Main Color is fixed)  
- **Size:** M or L  

## Custom CSS on staging

Must be on **drum-scarlet**, not production.

1. Open **Pages → Custom Code → Custom CSS**.
2. **Select all, delete**, then paste the **entire** `code-injection/custom-css-import.css` file from the repo.

That file is two parts:

- `@import` → GitHub theme CSS  
- Rules **after** the import → footer social overrides that beat an all-white palette (they must stay in Squarespace below the import line; do not paste only the `@import` by itself).