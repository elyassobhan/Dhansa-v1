import { r as __toESM } from "../_runtime.mjs";
import { l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as ShieldCheck } from "../_libs/lucide-react.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, j as notFound, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { d as SERVICES, n as Button } from "./router-C6eV2DS2.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C6eV2DS2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-B7JW0fwr.css";
function reportDhansaError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__dhansaEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__dhansaReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var STORAGE_KEY = "dhansa_cookie_consent_v1";
function saveConsent(value) {
	localStorage.setItem(STORAGE_KEY, JSON.stringify({
		value,
		at: (/* @__PURE__ */ new Date()).toISOString(),
		version: 1
	}));
}
function CookieConsent() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	const [settingsOpen, setSettingsOpen] = (0, import_react.useState)(false);
	const [allowAnalytics, setAllowAnalytics] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
	}, []);
	const acceptAll = () => {
		setAllowAnalytics(true);
		saveConsent("all");
		setVisible(false);
		setSettingsOpen(false);
	};
	const acceptEssential = () => {
		setAllowAnalytics(false);
		saveConsent("essential");
		setVisible(false);
		setSettingsOpen(false);
	};
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-[80] px-4 pb-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-5xl rounded-2xl border border-primary/20 bg-white p-4 shadow-lift sm:p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }), "Cookie-Einstellungen (DSGVO)"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: "Wir verwenden notwendige Cookies fuer den sicheren Betrieb der Website. Optionale Cookies helfen uns, Inhalte und Nutzererlebnis zu verbessern."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSettingsOpen((v) => !v),
							className: "mt-2 text-xs font-semibold text-primary underline-offset-2 hover:underline",
							children: settingsOpen ? "Einstellungen ausblenden" : "Einstellungen anzeigen"
						}),
						settingsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 rounded-xl border border-border bg-secondary p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-foreground",
									children: "Notwendige Cookies"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Immer aktiv fuer Sicherheit und Grundfunktionen."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-primary px-2 py-1 text-[10px] font-semibold text-white",
									children: "Aktiv"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold text-foreground",
									children: "Analyse-Cookies"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: "Optional fuer Statistiken und Performance-Verbesserung."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setAllowAnalytics((v) => !v),
									className: `h-7 w-12 rounded-full p-1 transition-colors ${allowAnalytics ? "bg-primary" : "bg-border"}`,
									"aria-label": "Analyse-Cookies umschalten",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block size-5 rounded-full bg-white transition-transform ${allowAnalytics ? "translate-x-5" : "translate-x-0"}` })
								})]
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2 sm:justify-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						size: "pill",
						onClick: acceptEssential,
						children: "Nur notwendige"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "hero",
						size: "pill",
						className: "shadow-blue",
						onClick: acceptAll,
						children: "Alle akzeptieren"
					})]
				})]
			})
		})
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportDhansaError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "DHANSA Personal & Dienstleistungen e.K. | Hamburg" },
			{
				name: "description",
				content: "Personal, Transport & Logistik, Galabau, Tiefbau, Umzüge, Winterdienst und Gebäudereinigung aus Hamburg — zuverlässig aus einer Hand."
			},
			{
				name: "author",
				content: "DHANSA Personal & Dienstleistungen e.K."
			},
			{
				property: "og:title",
				content: "DHANSA Personal & Dienstleistungen e.K. | Hamburg"
			},
			{
				property: "og:description",
				content: "Personal, Transport & Logistik, Galabau, Tiefbau, Umzüge, Winterdienst und Gebäudereinigung aus Hamburg — zuverlässig aus einer Hand."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=Unbounded:wght@700;800&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon-dhansa-white.svg",
				type: "image/svg+xml"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: "DHANSA Personal & Dienstleistungen e.K.",
				slogan: "Menschen. Lösungen. Vertrauen.",
				telephone: "+491623179432",
				areaServed: "Hamburg, Norddeutschland",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Hamburg",
					addressCountry: "DE"
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "de",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieConsent, {})]
	});
}
var $$splitComponentImporter$5 = () => import("./routes-DiC8NQQN.mjs");
var TITLE = "DHANSA Hamburg | Galabau, Tiefbau, Umzüge, Winterdienst, Personal & Gebäudereinigung";
var DESCRIPTION = "DHANSA Personal & Dienstleistungen e.K. aus Hamburg: Galabau, Tiefbau & Erdarbeiten, Umzüge & Entrümpelung, Winterdienst & Hausmeisterservice, Personal sowie Gebäudereinigung — alles aus einer Hand.";
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: TITLE },
		{
			name: "description",
			content: DESCRIPTION
		},
		{
			property: "og:title",
			content: TITLE
		},
		{
			property: "og:description",
			content: DESCRIPTION
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./agb-Coj5S8_J.mjs");
var Route$4 = createFileRoute("/agb")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: "AGB | DHANSA" }, {
		name: "description",
		content: "Allgemeine Geschaeftsbedingungen von DHANSA Personal & Dienstleistungen e.K."
	}] })
});
var $$splitComponentImporter$3 = () => import("./datenschutz-FdS54qp8.mjs");
var Route$3 = createFileRoute("/datenschutz")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "Datenschutz | DHANSA" }, {
		name: "description",
		content: "Datenschutzhinweise von DHANSA Personal & Dienstleistungen e.K."
	}] })
});
var $$splitComponentImporter$2 = () => import("./impressum-BV7MKfcj.mjs");
var Route$2 = createFileRoute("/impressum")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Impressum | DHANSA" }, {
		name: "description",
		content: "Impressum von DHANSA Personal & Dienstleistungen e.K."
	}] })
});
var $$splitComponentImporter$1 = () => import("./karriere-BxgVUKKg.mjs");
var Route$1 = createFileRoute("/karriere")({
	head: () => ({ meta: [{ title: "Karriere | DHANSA Personal & Dienstleistungen e.K." }, {
		name: "description",
		content: "Karriere bei DHANSA: Verlässliche Jobs in Transport & Logistik, Reinigung, Hausmeisterservice und mehr aus Hamburg."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_serviceId-BPXsVfA0.mjs");
var Route = createFileRoute("/leistungen/$serviceId")({
	loader: ({ params }) => {
		const service = SERVICES.find((s) => s.id === params.serviceId);
		if (!service) throw notFound();
		return { service };
	},
	head: ({ loaderData }) => ({ meta: [
		{ title: `${loaderData?.service.title} Hamburg | DHANSA` },
		{
			name: "description",
			content: loaderData?.service.description
		},
		{
			property: "og:title",
			content: `${loaderData?.service.title} Hamburg | DHANSA`
		},
		{
			property: "og:description",
			content: loaderData?.service.description
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$5.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$6
	}),
	AgbRoute: Route$4.update({
		id: "/agb",
		path: "/agb",
		getParentRoute: () => Route$6
	}),
	DatenschutzRoute: Route$3.update({
		id: "/datenschutz",
		path: "/datenschutz",
		getParentRoute: () => Route$6
	}),
	ImpressumRoute: Route$2.update({
		id: "/impressum",
		path: "/impressum",
		getParentRoute: () => Route$6
	}),
	KarriereRoute: Route$1.update({
		id: "/karriere",
		path: "/karriere",
		getParentRoute: () => Route$6
	}),
	LeistungenServiceIdRoute: Route.update({
		id: "/leistungen/$serviceId",
		path: "/leistungen/$serviceId",
		getParentRoute: () => Route$6
	})
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter as n, router_exports as r, Route as t };
