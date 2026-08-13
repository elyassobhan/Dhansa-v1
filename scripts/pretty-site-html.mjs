import { copyFile, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { formatHtml } from "./format-html.mjs";

const SITE = path.resolve("site");

function extractRuntime(html) {
  return html.replace(
    /<script>\s*\(function\s*\(\)\s*\{[\s\S]*?\}\)\(\);\s*<\/script>/,
    '<script src="site.js"></script>',
  );
}

const files = (await readdir(SITE)).filter((name) => name.endsWith(".html"));

await copyFile(path.resolve("scripts/site-runtime.js"), path.join(SITE, "site.js"));

for (const name of files) {
  const file = path.join(SITE, name);
  const raw = await readFile(file, "utf8");
  const formatted = formatHtml(extractRuntime(raw));
  await writeFile(file, formatted);
  const lines = formatted.split("\n").length;
  const maxLine = Math.max(...formatted.split("\n").map((line) => line.length));
  console.log(`${name}: ${lines} lines, max ${maxLine} chars`);
}
