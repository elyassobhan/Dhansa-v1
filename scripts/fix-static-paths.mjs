import { cp, mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = path.resolve("dist/client");
const OUT = path.resolve("site");

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

const VANILLA_JS = `
(function () {
  var header = document.getElementById("site-header");
  var menu = document.getElementById("mobile-menu");
  var toggle = document.getElementById("menu-toggle");
  var cookie = document.getElementById("cookie-consent");
  var isCareer = /karriere\\.html$/i.test(location.pathname) || /karriere\\.html$/i.test(location.href);

  function onScroll() {
    if (!header) return;
    var scrolled = window.scrollY > 40;
    header.classList.toggle("is-scrolled", scrolled);
    header.classList.toggle("border-b", scrolled || isCareer);
    header.classList.toggle("border-border", scrolled);
    header.classList.toggle("bg-white", scrolled);
    header.classList.toggle("shadow-soft", scrolled);
    header.classList.toggle("bg-transparent", !scrolled && !isCareer);
    header.querySelectorAll(".js-header-brand").forEach(function (el) {
      el.classList.toggle("text-foreground", scrolled);
      el.classList.toggle("text-white", !scrolled);
    });
    header.querySelectorAll(".js-header-sub").forEach(function (el) {
      el.classList.toggle("text-muted-foreground", scrolled);
      el.classList.toggle("text-white/70", !scrolled);
    });
    header.querySelectorAll(".js-header-link").forEach(function (el) {
      el.classList.toggle("text-muted-foreground", scrolled);
      el.classList.toggle("text-white/85", !scrolled);
    });
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("hidden");
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        menu.classList.add("hidden");
      });
    });
  }

  document.querySelectorAll("form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var fd = new FormData(form);
      var service = fd.get("service") || "";
      var body = [
        service ? "Leistungsbereich: " + service : "",
        "Name: " + (fd.get("name") || ""),
        "Telefon: " + (fd.get("phone") || ""),
        "E-Mail: " + (fd.get("email") || ""),
        "",
        String(fd.get("message") || ""),
      ].filter(Boolean).join("\\n");
      var subject = service ? "Anfrage: " + service : "Anfrage";
      location.href = "mailto:info@dhansa.de?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  });

  document.querySelectorAll(".js-service-pick").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var form = btn.closest("form");
      var hidden = form && form.querySelector('input[name="service"]');
      if (hidden) hidden.value = btn.getAttribute("data-service") || "";
      form.querySelectorAll(".js-service-pick").forEach(function (other) {
        other.className = other.className
          .replace("border-primary bg-primary text-white", "border-border bg-secondary text-muted-foreground");
      });
      btn.className = btn.className
        .replace("border-border bg-secondary text-muted-foreground", "border-primary bg-primary text-white");
    });
  });

  document.querySelectorAll('[data-orientation="vertical"]').forEach(function (root) {
    if (root.parentElement && root.parentElement.getAttribute("data-orientation") === "vertical") return;
    var items = [].slice.call(root.children).filter(function (el) {
      return el.getAttribute("data-orientation") === "vertical";
    });
    items.forEach(function (item) {
      var btn = item.querySelector("button");
      var panel = item.querySelector('[role="region"]');
      if (!btn || !panel) return;
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        var willOpen = item.getAttribute("data-state") !== "open";
        items.forEach(function (other) {
          var oBtn = other.querySelector("button");
          var oPanel = other.querySelector('[role="region"]');
          other.setAttribute("data-state", "closed");
          if (oBtn) {
            oBtn.setAttribute("data-state", "closed");
            oBtn.setAttribute("aria-expanded", "false");
          }
          if (oPanel) {
            oPanel.setAttribute("data-state", "closed");
            oPanel.hidden = true;
          }
        });
        if (willOpen) {
          item.setAttribute("data-state", "open");
          btn.setAttribute("data-state", "open");
          btn.setAttribute("aria-expanded", "true");
          panel.setAttribute("data-state", "open");
          panel.hidden = false;
        }
      });
    });
  });

  if (cookie) {
    try {
      if (!localStorage.getItem("dhansa_cookie_consent_v1")) cookie.classList.remove("hidden");
    } catch (err) {}
    function hideCookie(value) {
      try {
        localStorage.setItem("dhansa_cookie_consent_v1", JSON.stringify({ value: value, at: new Date().toISOString(), version: 1 }));
      } catch (err) {}
      cookie.classList.add("hidden");
    }
    var acceptAll = document.getElementById("cookie-accept-all");
    var acceptEssential = document.getElementById("cookie-accept-essential");
    if (acceptAll) acceptAll.addEventListener("click", function () { hideCookie("all"); });
    if (acceptEssential) acceptEssential.addEventListener("click", function () { hideCookie("essential"); });
  }
})();
`;

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
  next = next.replace("</body>", `<script>${VANILLA_JS}</script></body>`);
  return next;
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
