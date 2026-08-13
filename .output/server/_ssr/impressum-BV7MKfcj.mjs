import { l as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { o as COMPANY } from "./router-C6eV2DS2.mjs";
import { n as SiteHeader, t as SiteFooter } from "./SiteFooter-Bhoj6r68.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/impressum-BV7MKfcj.js
var import_jsx_runtime = require_jsx_runtime();
function ImpressumPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "section pt-36",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-4xl px-5 lg:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Rechtliches"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl",
							children: "Impressum"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 space-y-8 rounded-3xl border border-border bg-white p-8 shadow-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl font-bold text-foreground",
									children: "Angaben gemaess § 5 TMG"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: [
										COMPANY.legal,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Hamburg, Deutschland"
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl font-bold text-foreground",
									children: "Vertreten durch"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: [
										"Inhaber: ",
										COMPANY.owner,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										COMPANY.hra,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										COMPANY.ustId,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										COMPANY.taxNumber
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl font-bold text-foreground",
									children: "Kontakt"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: [
										"Telefon: ",
										COMPANY.phone,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"E-Mail: ",
										COMPANY.email
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl font-bold text-foreground",
									children: "EU-Streitschlichtung"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: "Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "font-display text-xl font-bold text-foreground",
									children: "Haftung fuer Inhalte"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: "Als Diensteanbieter sind wir gemaess den allgemeinen Gesetzen fuer eigene Inhalte auf diesen Seiten verantwortlich. Fuer die Richtigkeit, Vollstaendigkeit und Aktualitaet der Inhalte uebernehmen wir jedoch keine Gewaehr."
								})] })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ImpressumPage as component };
