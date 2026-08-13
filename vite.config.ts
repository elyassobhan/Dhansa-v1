// Vite config for the DHANSA project.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const STATIC_PAGES = [
  { path: "/" },
  { path: "/karriere" },
  { path: "/impressum" },
  { path: "/datenschutz" },
  { path: "/agb" },
  { path: "/leistungen/umzug" },
  { path: "/leistungen/transport-logistik" },
  { path: "/leistungen/galabau" },
  { path: "/leistungen/tiefbau" },
  { path: "/leistungen/winterdienst" },
  { path: "/leistungen/personal" },
  { path: "/leistungen/reinigung" },
];

export default defineConfig({
  vite: {
    assetsInclude: ["**/*.mp4"],
  },
  // Skip Nitro so the production output is HTML/CSS/JS only (no server runtime).
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // Used only at build time to prerender HTML; the published site is static files.
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: false,
      autoStaticPathsDiscovery: true,
      autoSubfolderIndex: true,
      failOnError: true,
    },
    pages: STATIC_PAGES,
  },
});
