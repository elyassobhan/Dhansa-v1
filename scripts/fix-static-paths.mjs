import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { formatHtml } from "./format-html.mjs";

const SRC = path.resolve("dist/client");
const OUT = path.resolve("site");
const RUNTIME_SRC = path.resolve("scripts/site-runtime.js");

const PAGE_FILES = {
  "/": "index.html",
  "/karriere": "karriere.html",
  "/impressum": "impressum.html",
  "/datenschutz": "datenschutz.html",
  "/agb": "agb.html",
  "/leistungen/umzug": "leistungen-umzug.html",
  "/leistungen/transport-logistik": "leistungen-transport-logistik.html",
  "/leistungen/galabau": "leistungen-galabau.html",
  "/leistungen/tiefbau": "leistungen-tiefbau.html",
  "/leistungen/winterdienst": "leistungen-winterdienst.html",
  "/leistungen/personal": "leistungen-personal.html",
  "/leistungen/reinigung": "leistungen-reinigung.html",
};

const ASSET_PREFIXES = [
  "/assets/",
  "/logo/",
  "/favicon",
  "/HR.jpg",
  "/Galabau",
  "/Tief-bau",
  "/galabau-werk",
  "/map-svg",
  "/standorte-karte",
];

const COPY_ENTRIES = [
  "assets",
  "logo",
  "Galabau-01.jpg",
  "Galabau-02.jpg",
  "Galabau-03.jpg",
  "Galabau-hero.jpg",
  "HR.jpg",
  "Tief-bau.jpeg",
  "favicon-dhansa-white.svg",
  "galabau-werk-01.jpeg",
  "map-svg-3.svg",
  "robots.txt",
];

function rewriteHref(href) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const hashIndex = href.indexOf("#");
  const queryIndex = href.indexOf("?");
  let end = href.length;
  if (hashIndex >= 0) end = Math.min(end, hashIndex);
  if (queryIndex >= 0) end = Math.min(end, queryIndex);
  const pathname = href.slice(0, end) || "/";
  const rest = href.slice(end);
  const file = PAGE_FILES[pathname];
  if (file) return file + rest;
  if (pathname === "/") return "index.html" + rest;
  return href;
}

function rewriteHtml(html) {
  let next = html;
  for (const prefix of ASSET_PREFIXES) {
    next = next.replaceAll(`"${prefix}`, `"${prefix.slice(1)}`);
    next = next.replaceAll(`'${prefix}`, `'${prefix.slice(1)}`);
  }
  next = next.replace(/href="(\/[^"]*)"/g, (_, href) => `href="${rewriteHref(href)}"`);
  next = next.replace(/<link rel="modulepreload"[^>]*>/g, "");
  next = next.replace(/<script type="module"[^>]*><\/script>/g, "");
  next = next.replace(/<script type="module"[^>]*>[\s\S]*?<\/script>/g, "");
  next = next.replace(/<script class="\$tsr"[\s\S]*?<\/script>/g, "");
  next = next.replace(/<script[^>]*id="\$tsr-stream-barrier"[^>]*>[\s\S]*?<\/script>/g, "");
  next = next.replace(/<script>\(function\(a,f\)\{[\s\S]*?<\/script>/g, "");
  next = next.replace(/<!--\$-->/g, "");
  next = next.replace(/<!--\/\$-->/g, "");
  next = next.replace("</body>", `<script src="site.js"></script></body>`);
  return formatHtml(next);
}

await rm(OUT, { recursive: true, force: true });
await mkdir(OUT, { recursive: true });

for (const name of COPY_ENTRIES) {
  await cp(path.join(SRC, name), path.join(OUT, name), { recursive: true });
}

const assetDir = path.join(OUT, "assets");
const assetFiles = await readdir(assetDir);
for (const file of assetFiles) {
  if (file.endsWith(".js") || file.endsWith(".js.map")) {
    await rm(path.join(assetDir, file));
  }
}

await cp(RUNTIME_SRC, path.join(OUT, "site.js"));

for (const [urlPath, fileName] of Object.entries(PAGE_FILES)) {
  const srcFile =
    urlPath === "/"
      ? path.join(SRC, "index.html")
      : path.join(SRC, urlPath.replace(/^\//, ""), "index.html");
  const html = rewriteHtml(await readFile(srcFile, "utf8"));
  await writeFile(path.join(OUT, fileName), html);
  console.log(`static: ${urlPath} → site/${fileName}`);
}

console.log("\nOpen site/index.html in your browser. No server needed.");
