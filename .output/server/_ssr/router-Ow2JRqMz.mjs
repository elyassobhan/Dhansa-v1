import { r as __toESM } from "../_runtime.mjs";
import { c as Slot, l as require_jsx_runtime, u as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Truck, f as ShieldCheck, l as SprayCan, r as Wrench, s as Trees, u as Snowflake } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { A as notFound, c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-DV2cTGqd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold cursor-pointer transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-white rounded-xl hover:bg-primary/90 shadow-sm",
			outline: "border-2 border-primary text-primary rounded-xl hover:bg-primary hover:text-white",
			ghost: "text-foreground hover:bg-accent rounded-xl",
			secondary: "bg-secondary text-secondary-foreground rounded-xl hover:bg-secondary/80",
			destructive: "bg-destructive text-white rounded-xl hover:bg-destructive/90",
			hero: "bg-primary text-white rounded-full hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5",
			glass: "bg-white/15 text-white border border-white/30 rounded-full hover:bg-white/25 backdrop-blur",
			glassOutline: "bg-transparent text-white border border-white/40 rounded-full hover:bg-white/10",
			ink: "bg-foreground text-background rounded-full hover:bg-foreground/90",
			soft: "bg-accent text-accent-foreground rounded-full hover:bg-accent/80",
			link: "text-primary underline-offset-4 hover:underline",
			whatsapp: "bg-[#25D366] text-white rounded-full hover:bg-[#20bd5a] shadow-md hover:shadow-lg hover:-translate-y-0.5"
		},
		size: {
			default: "h-10 px-5 py-2 text-sm",
			sm: "h-8 px-4 text-xs",
			lg: "h-12 px-7 text-base",
			icon: "h-10 w-10",
			pill: "h-11 px-6 text-sm",
			pillLg: "h-12 px-8 text-base"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var bau_arbeit_default = "/assets/bau-arbeit-DJPq5Afd.jpeg";
var Gebaeudereinung_02_default = "/assets/Gebaeudereinung-02-BZyHVPNJ.jpeg";
var strasse_bau_default = "/assets/strasse-bau-CZavTSN8.jpeg";
var Gebaeudereinung_03_default = "/assets/Gebaeudereinung-03-L1ihJJmn.jpeg";
var Personal_default = "/assets/Personal-BBj7EZ-t.jpeg";
var Transport_umzug_default = "/assets/Transport-umzug-D_Uyfnoo.jpeg";
var Winter_diesnt_default = "/assets/Winter-diesnt-MTSFmDUY.jpeg";
var Winter_diesnt_02_default = "/assets/Winter-diesnt-02-DBZrW7SX.jpeg";
var Winter_diesnt_03_default = "/assets/Winter-diesnt-02-DBZrW7SX.jpeg";
var COMPANY = {
	name: "DHANSA",
	legal: "DHANSA Personal & Dienstleistungen e.K.",
	tagline: "Menschen. Lösungen. Vertrauen.",
	phone: "0162 3179 432",
	phoneHref: "tel:+491623179432",
	whatsapp: "491623179432",
	email: "info@dhansa.de",
	address: "Hamburg",
	city: "Hamburg",
	googleHref: "https://www.google.com/search?q=DHANSA+Personal+%26+Dienstleistungen+e.K.+Hamburg"
};
var PHOTO_ASSETS = {
	photo01: bau_arbeit_default,
	photo02: Gebaeudereinung_02_default,
	photo03: strasse_bau_default,
	photo04: Gebaeudereinung_03_default,
	photo05: Personal_default,
	photo06: Transport_umzug_default,
	photo07: Winter_diesnt_default,
	photo08: Winter_diesnt_02_default,
	photo09: Winter_diesnt_03_default
};
var SERVICES = [
	{
		id: "reinigung",
		icon: SprayCan,
		title: "Gebäudereinigung",
		kicker: "Gewerbe · Objekte · Reinigung",
		claim: "Professionelle Reinigung für Gewerbe & Objekte.",
		headline: "Verlässliche, gründliche und flexible Reinigungsleistungen aus Hamburg.",
		description: "DHANSA steht für zuverlässige, gründliche und flexible Reinigungsleistungen. Wir betreuen Unternehmen, Gewerbeobjekte und öffentliche Einrichtungen – regelmäßig, individuell und mit geschultem Personal.",
		items: [
			"Unterhaltsreinigung",
			"Büroreinigung",
			"Sanitärreinigung",
			"Treppenhausreinigung",
			"Praxis- & medizinische Objekte",
			"Fitnessstudios & Freizeit",
			"Industriereinigung",
			"Grund- & Baureinigung",
			"Weitere Leistungen auf Anfrage"
		],
		subLinks: [
			"Glasreinigung",
			"Sonderreinigung",
			"Küchenreinigung",
			"Desinfektion",
			"Endreinigung"
		],
		stats: [
			{
				value: "Regelmäßig",
				label: "Einsatzplan"
			},
			{
				value: "Individuell",
				label: "Leistungsumfang"
			},
			{
				value: "Geprüft",
				label: "Personal"
			}
		],
		photo: Gebaeudereinung_02_default
	},
	{
		id: "umzug",
		icon: Truck,
		title: "Umzüge & Entrümpelung",
		kicker: "Privat · Gewerbe · Transport",
		claim: "Zuverlässig. Sorgfältig. Persönlich.",
		headline: "Professioneller Umzug mit klarer Organisation und persönlicher Betreuung.",
		description: "DHANSA Personal & Dienstleistungen unterstützt Sie beim sicheren Transport Ihrer Möbel und persönlichen Gegenstände – von der Vorbereitung bis zum Einzug. Wir organisieren Umzüge, Entrümpelungen, Montageservice und Einlagerung mit einem festen Ablauf und persönlichem Kontakt.",
		items: [
			"Privatumzüge",
			"Möbeltransport",
			"Entrümpelungen",
			"Montageservice",
			"Einlagerung",
			"Umzugsservice"
		],
		subLinks: [
			"Umzüge",
			"Entrümpelungen",
			"Montageservice",
			"Einlagerung"
		],
		stats: [
			{
				value: "Sorgfältig",
				label: "Behandlung"
			},
			{
				value: "Strukturiert",
				label: "Ablauf"
			},
			{
				value: "Flexibel",
				label: "Leistungsumfang"
			}
		],
		photo: Transport_umzug_default
	},
	{
		id: "galabau",
		icon: Trees,
		title: "Galabau & Grünpflege",
		kicker: "Garten · Park · Landschaft",
		claim: "Natürlich. Nachhaltig. Professionell.",
		headline: "Ein gepflegtes Außenbild ist Ihre Visitenkarte.",
		description: "Ob privater Garten oder weitläufige Gewerbeflächen: Unser Galabau-Team übernimmt Pflanzungen, Pflege und Instandhaltung. Mit modernen Maschinen, festen Pflegeintervallen und nachhaltigen Konzepten.",
		items: [
			"Rasen-, Hecken- & Baumschnitt",
			"Neuanlagen, Bepflanzung & Saisongestaltung",
			"Pflege gewerblicher Außenanlagen",
			"Wege-, Pflaster- & Zaunarbeiten",
			"Baggerarbeiten & Tiefbau"
		],
		subLinks: [
			"Gartenpflege Hamburg",
			"Rasenpflege Hamburg",
			"Heckenschnitt Hamburg",
			"Garten- & Landschaftsbau Hamburg"
		],
		stats: [
			{
				value: "Ganzjährig",
				label: "Pflegeintervalle"
			},
			{
				value: "Eigene",
				label: "Maschinenflotte"
			},
			{
				value: "Nachhaltig",
				label: "Konzepte"
			}
		],
		photo: "/Galabau-hero.jpg"
	},
	{
		id: "tiefbau",
		icon: Wrench,
		title: "Tiefbau & Erdarbeiten",
		kicker: "Bau · Erdarbeiten · Infrastruktur",
		claim: "Präzise. Sicher. Vor Ort.",
		headline: "Erdarbeiten, Gräben und Bauvorbereitung mit sauberem Ablauf.",
		description: "DHANSA übernimmt professionelle Erdarbeiten, Baugruben, Entwässerungsarbeiten und infrastrukturelle Vorbereitungen für Wohnbau, Gewerbe und öffentliche Projekte. Unser Team arbeitet sicher, termintreu und mit modernem Equipment.",
		items: [
			"Erdarbeiten – Aushub, Bodenabtrag, Baugruben und Geländemodellierung",
			"Baugruben & Gründungsarbeiten – Vorbereitung für Fundamente und Gebäude",
			"Abbrucharbeiten – kleinere Abbruch- und Rückbauarbeiten",
			"Kanal- und Rohrleitungsbau – Verlegung von Leitungen und Schutzrohren",
			"Entwässerungsarbeiten – Regenwasser- und Entwässerungsleitungen",
			"Leitungsgräben – Vorbereitung und Verfüllung von Gräben für Versorgungsleitungen",
			"Kabel- und Leerrohrbau – Gräben und Verlegung von Schutz-/Leerrohren",
			"Pflaster- und Wegearbeiten – Gehwege, Zufahrten, Hofflächen und Außenanlagen",
			"Hausanschlüsse – Erdarbeiten für Wasser, Strom, Telekommunikation etc.",
			"Baggerarbeiten – mit Minibagger, Radlader und weiteren Geräten",
			"Mehr auf Anfrage"
		],
		subLinks: [
			"Erdarbeiten Hamburg",
			"Baugruben",
			"Kanalbau",
			"Entwässerung",
			"Leitungsgräben"
		],
		stats: [
			{
				value: "Sicher",
				label: "Ausführung"
			},
			{
				value: "Flexibel",
				label: "Projektgröße"
			},
			{
				value: "Vor Ort",
				label: "Koordination"
			}
		],
		photo: "/Tief-bau.jpeg"
	},
	{
		id: "winterdienst",
		icon: Snowflake,
		title: "Winterdienst & Hausmeister",
		kicker: "Schnee · Streu · Werterhalt",
		claim: "Flexibel. Zuverlässig. Für Sie da.",
		headline: "Sichere Wege an 365 Tagen.",
		description: "Unser Winterdienst rückt vor 7 Uhr aus und hält Gehwege, Zufahrten und Parkflächen frei. Ergänzend kümmern wir uns ganzjährig als Hausmeister um Kontrollgänge, Kleinreparaturen und die Pflege Ihrer Immobilie. Wir sind Mo–So 24/7 erreichbar.",
		items: [
			"Räum- & Streudienst rund um die Uhr",
			"Gehwege, Parkplätze & Firmenzufahrten",
			"Hausmeisterservice & Kontrollgänge",
			"Kleinreparaturen & Werterhalt",
			"Entrümpelung & Auflösungen"
		],
		subLinks: [
			"Winterdienst Hamburg",
			"Hausmeisterservice Hamburg",
			"Schneeräumung Hamburg",
			"Kleinreparaturen Hamburg"
		],
		stats: [
			{
				value: "Vor 7 Uhr",
				label: "Einsatzbereit"
			},
			{
				value: "Mo–So",
				label: "24/7"
			},
			{
				value: "365 Tage",
				label: "Im Jahr"
			}
		],
		photo: Winter_diesnt_default
	},
	{
		id: "personal",
		icon: Wrench,
		title: "Personal & Arbeitnehmerüberlassung",
		kicker: "Zeitarbeit · Vermittlung · Einsatzlösungen",
		claim: "Die richtigen Menschen. Für Ihren Erfolg.",
		headline: "Qualifiziertes Personal, genau dann, wenn Sie es brauchen.",
		description: "Wir stellen Ihnen geprüfte Fachkräfte und Helfer zur Seite — kurzfristig, flexibel und zuverlässig. Von der Auftragsspitze bis zur langfristigen Besetzung übernehmen wir Auswahl, Einsatzplanung und Betreuung.",
		items: [
			"Zeitarbeit & Arbeitnehmerüberlassung",
			"Personalvermittlung in Festanstellung",
			"Individuelle Einsatzlösungen",
			"Flexibel & zuverlässig — auch kurzfristig",
			"Qualifiziertes, geprüftes Personal"
		],
		subLinks: [
			"Zeitarbeit Hamburg",
			"Personalvermittlung Hamburg",
			"Arbeitnehmerüberlassung Hamburg",
			"Fachkräfte Hamburg"
		],
		stats: [
			{
				value: "24 h",
				label: "Rückmeldung"
			},
			{
				value: "0 €",
				label: "Erstberatung"
			},
			{
				value: "100 %",
				label: "Geprüfte Kräfte"
			}
		],
		photo: Personal_default
	}
];
var STATS_HERO = [
	{
		value: "5+",
		label: "Jahre Erfahrung"
	},
	{
		value: "100+",
		label: "Zufriedene Kunden"
	},
	{
		value: "24/7",
		label: "Erreichbarkeit"
	},
	{
		value: "40+",
		label: "Mitarbeiter:innen"
	}
];
var TRUST = [
	{
		title: "Voll versichert",
		text: "Betriebs- & Haftpflicht"
	},
	{
		title: "Zertifiziert",
		text: "Geprüfte Qualität"
	},
	{
		title: "Eigene Teams",
		text: "Keine Subunternehmer"
	},
	{
		title: "Nachhaltig",
		text: "Umweltfreundliche Mittel"
	}
];
var PROCESS = [
	{
		step: "1",
		title: "Anfrage",
		text: "Sie nennen uns den gewünschten Leistungsbereich und die wichtigsten Angaben."
	},
	{
		step: "2",
		title: "Abstimmung",
		text: "Wir klären Bedarf, Umfang, Termin und die passende Einsatzlösung."
	},
	{
		step: "3",
		title: "Umsetzung",
		text: "Unser Team führt die vereinbarte Leistung fachgerecht und zuverlässig aus."
	},
	{
		step: "4",
		title: "Abschluss",
		text: "Wir prüfen das Ergebnis und bleiben für weitere Leistungen an Ihrer Seite."
	}
];
var TESTIMONIALS = [
	{
		quote: "Absolut zuverlässig und gründlich. Unser Büro wird seit über zwei Jahren von DHANSA betreut — pünktlich, freundlich und immer sauber.",
		name: "M. Petersen",
		role: "Büroleitung, Hamburg-Mitte"
	},
	{
		quote: "Höchste Hygienestandards in unserer Praxis. Die Reinigungskräfte sind diskret, gründlich und sehr professionell.",
		name: "Dr. Behrens",
		role: "Praxisinhaber, Altona"
	},
	{
		quote: "Faires Angebot, saubere Umsetzung. Die Grünpflege auf unserem Firmengelände sieht seitdem jede Saison perfekt aus.",
		name: "T. Ronneburg",
		role: "Gewerbekunde, Harburg"
	},
	{
		quote: "Pünktlich, freundlich und sehr gründlich.",
		name: "Julia M.",
		role: "Eppendorf"
	},
	{
		quote: "Sehr professionell, jederzeit wieder.",
		name: "Karin S.",
		role: "Wandsbek"
	},
	{
		quote: "Sauber, ehrlich, unkompliziert.",
		name: "L. Petersen",
		role: "Blankenese"
	},
	{
		quote: "Der Umzug lief reibungslos. Schnelles Team, sorgfältiger Umgang mit den Möbeln und faire Preise. Klare Empfehlung!",
		name: "Anna L.",
		role: "Privatkundin, Eimsbüttel"
	},
	{
		quote: "Schnelle Reaktionszeit beim Winterdienst — selbst bei starkem Schneefall sind die Wege morgens immer geräumt. Top Organisation.",
		name: "Sandra K.",
		role: "Hausverwaltung, Winterhude"
	},
	{
		quote: "Wohnungsauflösung nach einem Trauerfall — einfühlsam, schnell und absolut diskret abgewickelt. Vielen Dank!",
		name: "Familie Becker",
		role: "Privatkunden, Bergedorf"
	}
];
var FAQS = [
	{
		category: "Allgemein",
		q: "Wie kann ich DHANSA beauftragen?",
		a: "Sie können uns ganz einfach beauftragen, indem Sie die gewünschten Leistungen festlegen und uns über das Kontaktformular oder telefonisch kontaktieren. Wir erstellen Ihnen ein maßgeschneidertes Angebot."
	},
	{
		category: "Allgemein",
		q: "Welche Leistungen kann ich anfragen?",
		a: "Gebäudereinigung, Umzüge & Entrümpelung, Galabau & Grünpflege, Winterdienst & Hausmeisterservice sowie Personal & Arbeitnehmerüberlassung — alles aus einer Hand."
	},
	{
		category: "Allgemein",
		q: "Welche Informationen sollte ich bereithalten?",
		a: "Leistungsbereich, Objekt- oder Einsatzort, gewünschter Zeitraum sowie Umfang (z. B. Fläche, Anzahl der Kräfte). Je konkreter die Angaben, desto genauer das Angebot."
	},
	{
		category: "Allgemein",
		q: "Sind kurzfristige Termine möglich?",
		a: "Ja. Für Personal, Transporte und Notfälle im Objekt organisieren wir Einsätze regelmäßig innerhalb von 24 bis 48 Stunden — abhängig von Umfang und Region."
	},
	{
		category: "Allgemein",
		q: "Ist die Besichtigung kostenpflichtig?",
		a: "Nein. Besichtigung und Erstberatung sind bei uns kostenlos und unverbindlich."
	},
	{
		category: "Allgemein",
		q: "Arbeiten Sie auch außerhalb von Hamburg?",
		a: "Unser Schwerpunkt liegt in Hamburg und Norddeutschland. Fernverlagerungen und größere Projekte übernehmen wir auf Anfrage auch überregional."
	}
];
var JOBS = [
	{
		title: "Reinigungskraft",
		location: "Hamburg",
		pay: "ab 14,50 €/Std."
	},
	{
		title: "Möbelpacker / Fahrer",
		location: "Hamburg",
		pay: "ab 15,00 €/Std."
	},
	{
		title: "Galabau-Mitarbeiter",
		location: "Hamburg",
		pay: "ab 2.900 € brutto"
	},
	{
		title: "Hausmeister / Winterdienst",
		location: "Hamburg",
		pay: "ab 14,00 €/Std."
	}
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-Ow2JRqMz.js
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
var styles_default = "/assets/styles-DKjycWuN.css";
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
var Route$5 = createRootRouteWithContext()({
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
				content: "Personal, Transport & Logistik, Gebäudereinigung, Galabau, Tiefbau und Services aus Hamburg — zuverlässig aus einer Hand."
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
				content: "Personal, Transport & Logistik, Gebäudereinigung, Galabau, Tiefbau und Services aus Hamburg — zuverlässig aus einer Hand."
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
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieConsent, {})]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-D2P-hndE.mjs");
var TITLE = "DHANSA Hamburg | Gebäudereinigung, Umzüge, Galabau, Tiefbau & Winterdienst";
var DESCRIPTION = "DHANSA Personal & Dienstleistungen e.K. aus Hamburg: Gebäudereinigung, Umzüge & Entrümpelung, Galabau & Grünpflege, Tiefbau & Erdarbeiten, Winterdienst & Hausmeisterservice sowie Personal — alles aus einer Hand.";
var Route$4 = createFileRoute("/")({
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
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./agb-45_BZmZK.mjs");
var Route$3 = createFileRoute("/agb")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: "AGB | DHANSA" }, {
		name: "description",
		content: "Allgemeine Geschaeftsbedingungen von DHANSA Personal & Dienstleistungen e.K."
	}] })
});
var $$splitComponentImporter$2 = () => import("./datenschutz-DHnkMb_P.mjs");
var Route$2 = createFileRoute("/datenschutz")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	head: () => ({ meta: [{ title: "Datenschutz | DHANSA" }, {
		name: "description",
		content: "Datenschutzhinweise von DHANSA Personal & Dienstleistungen e.K."
	}] })
});
var $$splitComponentImporter$1 = () => import("./impressum-CqDBD-yc.mjs");
var Route$1 = createFileRoute("/impressum")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: "Impressum | DHANSA" }, {
		name: "description",
		content: "Impressum von DHANSA Personal & Dienstleistungen e.K."
	}] })
});
var $$splitComponentImporter = () => import("../_serviceId-BCT-7gVu.mjs");
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
	IndexRoute: Route$4.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$5
	}),
	AgbRoute: Route$3.update({
		id: "/agb",
		path: "/agb",
		getParentRoute: () => Route$5
	}),
	DatenschutzRoute: Route$2.update({
		id: "/datenschutz",
		path: "/datenschutz",
		getParentRoute: () => Route$5
	}),
	ImpressumRoute: Route$1.update({
		id: "/impressum",
		path: "/impressum",
		getParentRoute: () => Route$5
	}),
	LeistungenServiceIdRoute: Route.update({
		id: "/leistungen/$serviceId",
		path: "/leistungen/$serviceId",
		getParentRoute: () => Route$5
	})
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
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
export { FAQS as a, PROCESS as c, TESTIMONIALS as d, TRUST as f, COMPANY as i, SERVICES as l, Route as n, JOBS as o, cn as p, Button as r, PHOTO_ASSETS as s, router_exports as t, STATS_HERO as u };
