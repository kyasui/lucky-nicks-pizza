import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const parts = ["src/tokens.css", "src/overrides.css"];
const pages = JSON.parse(
  readFileSync(join(root, "config/pages.json"), "utf8"),
);

const cssName = pages.stylesheetFile;
const docsOut = join(root, "docs", cssName);
const headerOut = join(root, "code-injection", "header.html");
const customCssOut = join(root, "code-injection", "custom-css-import.css");

const body = parts
  .map((rel) => readFileSync(join(root, rel), "utf8").trim())
  .filter(Boolean)
  .join("\n\n");

mkdirSync(join(root, "docs"), { recursive: true });
writeFileSync(docsOut, `${body}\n`, "utf8");

const base = `https://${pages.owner}.github.io/${pages.repo}/${cssName}`;
const href = pages.cacheBust ? `${base}?v=${pages.cacheBust}` : base;

const existingHeader = readFileSync(headerOut, "utf8");
const rest = existingHeader
  .split("\n")
  .filter((line) => !line.includes("github.io") && line.trim() !== "")
  .join("\n");

const linkLine = `<link rel="stylesheet" href="${href}">`;
const header =
  rest.trim().length > 0 ? `${linkLine}\n${rest.trim()}\n` : `${linkLine}\n`;

writeFileSync(headerOut, header, "utf8");

const criticalPath = join(root, "src", "critical-after-import.css");
const critical = readFileSync(criticalPath, "utf8").trim();
writeFileSync(
  customCssOut,
  `@import url("${href}");\n\n${critical}\n`,
  "utf8",
);

process.stdout.write(`Wrote ${docsOut}\n`);
process.stdout.write(`Wrote ${headerOut}\n`);
process.stdout.write(`Wrote ${customCssOut}\n`);