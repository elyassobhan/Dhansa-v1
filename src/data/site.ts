import {
  SprayCan,
  Truck,
  Trees,
  Snowflake,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import photoBauArbeit from "@/assets/bau-arbeit.jpeg";
import photoGebaeudereinung02 from "@/assets/Gebaeudereinung-02.jpeg";
import photoStrasseBau from "@/assets/strasse-bau.jpeg";
import photoGebaeudereinung03 from "@/assets/Gebaeudereinung-03.jpeg";
import photoPersonal from "@/assets/Personal.jpeg";
import photoTransportUmzug from "@/assets/Transport-umzug.jpeg";
import photoWinterDienst from "@/assets/Winter-diesnt.jpeg";
import photoWinterDienst02 from "@/assets/Winter-diesnt-02.jpeg";
import photoWinterDienst03 from "@/assets/Winter-diesnt-03.jpeg";

export const COMPANY = {
  name: "DHANSA",
  legal: "DHANSA Personal & Dienstleistungen e.K.",
  tagline: "Menschen. Lösungen. Vertrauen.",
  phone: "01520 197 2975",
  phoneHref: "tel:+4915201972975",
  whatsapp: "4915201972975",
  email: "info@dhansa.de",
  address: "Hamburg",
  city: "Hamburg",
  googleHref:
    "https://www.google.com/search?q=DHANSA+Personal+%26+Dienstleistungen+e.K.+Hamburg",
};

export const PHOTO_ASSETS = {
  photo01: photoBauArbeit,
  photo02: photoGebaeudereinung02,
  photo03: photoStrasseBau,
  photo04: photoGebaeudereinung03,
  photo05: photoPersonal,
  photo06: photoTransportUmzug,
  photo07: photoWinterDienst,
  photo08: photoWinterDienst02,
  photo09: photoWinterDienst03,
} as const;

export type Service = {
  id: string;
  icon: LucideIcon;
  title: string;
  kicker: string;
  claim: string;
  headline: string;
  description: string;
  items: string[];
  subLinks: string[];
  stats: { value: string; label: string }[];
  photo: string;
};

export const SERVICES: Service[] = [
  {
    id: "reinigung",
    icon: SprayCan,
    title: "Gebäudereinigung",
    kicker: "Büro · Praxis · Sonderreinigung",
    claim: "Sauberkeit ist unser Anspruch.",
    headline: "Moderne Raumhygiene aus Hamburg.",
    description:
      "Unsere geschulten Reinigungsteams pflegen Ihre Räume nach festen Qualitätsplänen — mit dokumentierten Intervallen, zertifizierten Mitteln und diskretem Auftreten. Für Praxen, Büros und Wohnanlagen.",
    items: [
      "Unterhalts- & Grundreinigung",
      "Glas-, Fassaden- & Fensterreinigung",
      "Bauend-, Sonder- & Desinfektionsreinigung",
      "Treppenhaus- & Hausflurpflege",
      "Praxis- & Hygienereinigung",
    ],
    subLinks: [
      "Büroreinigung Hamburg",
      "Treppenhausreinigung Hamburg",
      "Glas- & Fensterreinigung Hamburg",
      "Praxis- & Klinikreinigung Hamburg",
    ],
    stats: [
      { value: "Geprüft", label: "Reinigungsmittel" },
      { value: "Fest", label: "Ansprechpartner" },
      { value: "Doku", label: "Nach jedem Einsatz" },
    ],
    photo: photoGebaeudereinung02,
  },
  {
    id: "umzug",
    icon: Truck,
    title: "Umzüge & Entrümpelung",
    kicker: "Privat · Gewerbe · Transport",
    claim: "Schnell. Sicher. Zuverlässig.",
    headline: "Vom ersten Karton bis zur besenreinen Übergabe.",
    description:
      "Erfahrene Teams begleiten Sie von der Begehung über die Möbeldemontage bis zur Endreinigung. Bei Wohnungsauflösungen sortieren wir wertschätzend, entsorgen umweltgerecht und übergeben den Raum besenrein.",
    items: [
      "Privat- & Firmenumzüge in Hamburg & deutschlandweit",
      "Möbelmontage, Verpackungsservice & Halteverbotszonen",
      "Wohnungsauflösungen & Haushaltsauflösungen",
      "Fachgerechte Entsorgung, Recycling & Schrottabholung",
      "Seniorenumzüge / Pflegebedürftige",
    ],
    subLinks: [
      "Umzugsunternehmen Hamburg",
      "Entrümpelung Hamburg",
      "Haushaltsauflösung Hamburg",
      "Firmenumzug Hamburg",
    ],
    stats: [
      { value: "1.500+", label: "Umzüge realisiert" },
      { value: "100 %", label: "Versichert" },
      { value: "0 €", label: "Erstberatung" },
    ],
    photo: photoTransportUmzug,
  },
  {
    id: "galabau",
    icon: Trees,
    title: "Galabau & Grünpflege",
    kicker: "Garten · Park · Landschaft",
    claim: "Natürlich. Nachhaltig. Professionell.",
    headline: "Ein gepflegtes Außenbild ist Ihre Visitenkarte.",
    description:
      "Ob privater Garten oder weitläufige Gewerbeflächen: Unser Galabau-Team übernimmt Pflanzungen, Pflege und Instandhaltung. Mit modernen Maschinen, festen Pflegeintervallen und nachhaltigen Konzepten.",
    items: [
      "Rasen-, Hecken- & Baumschnitt",
      "Neuanlagen, Bepflanzung & Saisongestaltung",
      "Pflege gewerblicher Außenanlagen",
      "Wege-, Pflaster- & Zaunarbeiten",
      "Baggerarbeiten & Tiefbau",
    ],
    subLinks: [
      "Gartenpflege Hamburg",
      "Rasenpflege Hamburg",
      "Heckenschnitt Hamburg",
      "Garten- & Landschaftsbau Hamburg",
    ],
    stats: [
      { value: "Ganzjährig", label: "Pflegeintervalle" },
      { value: "Eigene", label: "Maschinenflotte" },
      { value: "Nachhaltig", label: "Konzepte" },
    ],
    photo: photoBauArbeit,
  },
  {
    id: "winterdienst",
    icon: Snowflake,
    title: "Winterdienst & Hausmeister",
    kicker: "Schnee · Streu · Werterhalt",
    claim: "Flexibel. Zuverlässig. Für Sie da.",
    headline: "Sichere Wege an 365 Tagen.",
    description:
      "Unser Winterdienst rückt vor 7 Uhr aus und hält Gehwege, Zufahrten und Parkflächen frei. Ergänzend kümmern wir uns ganzjährig als Hausmeister um Kontrollgänge, Kleinreparaturen und die Pflege Ihrer Immobilie.",
    items: [
      "Räum- & Streudienst rund um die Uhr",
      "Gehwege, Parkplätze & Firmenzufahrten",
      "Hausmeisterservice & Kontrollgänge",
      "Kleinreparaturen & Werterhalt",
      "Entrümpelung & Auflösungen",
    ],
    subLinks: [
      "Winterdienst Hamburg",
      "Hausmeisterservice Hamburg",
      "Schneeräumung Hamburg",
      "Kleinreparaturen Hamburg",
    ],
    stats: [
      { value: "Vor 7 Uhr", label: "Einsatzbereit" },
      { value: "365 Tage", label: "Im Jahr" },
      { value: "Doku", label: "Per Einsatzprotokoll" },
    ],
    photo: photoWinterDienst,
  },
  {
    id: "personal",
    icon: Wrench,
    title: "Personal & Arbeitnehmerüberlassung",
    kicker: "Zeitarbeit · Vermittlung · Einsatzlösungen",
    claim: "Die richtigen Menschen. Für Ihren Erfolg.",
    headline: "Qualifiziertes Personal, genau dann, wenn Sie es brauchen.",
    description:
      "Wir stellen Ihnen geprüfte Fachkräfte und Helfer zur Seite — kurzfristig, flexibel und zuverlässig. Von der Auftragsspitze bis zur langfristigen Besetzung übernehmen wir Auswahl, Einsatzplanung und Betreuung.",
    items: [
      "Zeitarbeit & Arbeitnehmerüberlassung",
      "Personalvermittlung in Festanstellung",
      "Individuelle Einsatzlösungen",
      "Flexibel & zuverlässig — auch kurzfristig",
      "Qualifiziertes, geprüftes Personal",
    ],
    subLinks: [
      "Zeitarbeit Hamburg",
      "Personalvermittlung Hamburg",
      "Arbeitnehmerüberlassung Hamburg",
      "Fachkräfte Hamburg",
    ],
    stats: [
      { value: "24 h", label: "Rückmeldung" },
      { value: "0 €", label: "Erstberatung" },
      { value: "100 %", label: "Geprüfte Kräfte" },
    ],
    photo: photoPersonal,
  },
];

export const STATS_HERO = [
  { value: "5+", label: "Jahre Erfahrung" },
  { value: "100+", label: "Zufriedene Kunden" },
  { value: "24/7", label: "Erreichbarkeit" },
  { value: "40+", label: "Mitarbeiter:innen" },
];

export const TRUST = [
  { title: "Voll versichert", text: "Betriebs- & Haftpflicht" },
  { title: "Zertifiziert", text: "Geprüfte Qualität" },
  { title: "Eigene Teams", text: "Keine Subunternehmer" },
  { title: "Nachhaltig", text: "Umweltfreundliche Mittel" },
];

export const PROCESS = [
  {
    step: "1",
    title: "Anfrage",
    text: "Sie nennen uns den gewünschten Leistungsbereich und die wichtigsten Angaben.",
  },
  {
    step: "2",
    title: "Abstimmung",
    text: "Wir klären Bedarf, Umfang, Termin und die passende Einsatzlösung.",
  },
  {
    step: "3",
    title: "Umsetzung",
    text: "Unser Team führt die vereinbarte Leistung fachgerecht und zuverlässig aus.",
  },
  {
    step: "4",
    title: "Abschluss",
    text: "Wir prüfen das Ergebnis und bleiben für weitere Leistungen an Ihrer Seite.",
  },
];

export const REGIONS = [
  "Hamburg",
  "Bremen",
  "Lübeck",
  "Kiel",
  "Flensburg",
  "Hannover",
  "Rostock",
  "Schwerin",
  "Braunschweig",
  "Osnabrück",
  "Cuxhaven",
  "Oldenburg",
];

export const BUNDESLAENDER = [
  "Baden-Wuerttemberg",
  "Bayern",
  "Berlin",
  "Brandenburg",
  "Bremen",
  "Hamburg",
  "Hessen",
  "Mecklenburg-Vorpommern",
  "Niedersachsen",
  "Nordrhein-Westfalen",
  "Rheinland-Pfalz",
  "Saarland",
  "Sachsen",
  "Sachsen-Anhalt",
  "Schleswig-Holstein",
  "Thueringen",
];

export const PARTNER_LOGOS = [
  "Deutsche Post",
  "HASPA",
  "DB",
  "DAK",
  "HVV",
  "Hamburg Airport",
  "HHLA",
  "HAMBURG WASSER",
  "Stadtreinigung Hamburg",
  "Asklepios Hamburg",
];

export const GOOGLE_REVIEW_MARQUEE = [
  "Sehr professionell, puenktlich und freundlich.",
  "Top Reinigung und klare Kommunikation.",
  "Umzug lief schnell und absolut sauber.",
  "Faire Preise und zuverlaessige Mitarbeiter.",
  "Winterdienst morgens immer rechtzeitig da.",
  "Empfehlung fuer Gewerbe und Privatkunden.",
];

export const TESTIMONIALS = [
  {
    quote:
      "Absolut zuverlässig und gründlich. Unser Büro wird seit über zwei Jahren von DHANSA betreut — pünktlich, freundlich und immer sauber.",
    name: "M. Petersen",
    role: "Büroleitung, Hamburg-Mitte",
  },
  {
    quote:
      "Höchste Hygienestandards in unserer Praxis. Die Reinigungskräfte sind diskret, gründlich und sehr professionell.",
    name: "Dr. Behrens",
    role: "Praxisinhaber, Altona",
  },
  {
    quote:
      "Faires Angebot, saubere Umsetzung. Die Grünpflege auf unserem Firmengelände sieht seitdem jede Saison perfekt aus.",
    name: "T. Ronneburg",
    role: "Gewerbekunde, Harburg",
  },
  {
    quote: "Pünktlich, freundlich und sehr gründlich.",
    name: "Julia M.",
    role: "Eppendorf",
  },
  {
    quote: "Sehr professionell, jederzeit wieder.",
    name: "Karin S.",
    role: "Wandsbek",
  },
  {
    quote: "Sauber, ehrlich, unkompliziert.",
    name: "L. Petersen",
    role: "Blankenese",
  },
  {
    quote:
      "Der Umzug lief reibungslos. Schnelles Team, sorgfältiger Umgang mit den Möbeln und faire Preise. Klare Empfehlung!",
    name: "Anna L.",
    role: "Privatkundin, Eimsbüttel",
  },
  {
    quote:
      "Schnelle Reaktionszeit beim Winterdienst — selbst bei starkem Schneefall sind die Wege morgens immer geräumt. Top Organisation.",
    name: "Sandra K.",
    role: "Hausverwaltung, Winterhude",
  },
  {
    quote:
      "Wohnungsauflösung nach einem Trauerfall — einfühlsam, schnell und absolut diskret abgewickelt. Vielen Dank!",
    name: "Familie Becker",
    role: "Privatkunden, Bergedorf",
  },
];

export const FAQS = [
  {
    category: "Allgemein",
    q: "Wie kann ich DHANSA beauftragen?",
    a: "Sie können uns ganz einfach beauftragen, indem Sie die gewünschten Leistungen festlegen und uns über das Kontaktformular oder telefonisch kontaktieren. Wir erstellen Ihnen ein maßgeschneidertes Angebot.",
  },
  {
    category: "Allgemein",
    q: "Welche Leistungen kann ich anfragen?",
    a: "Gebäudereinigung, Umzüge & Entrümpelung, Galabau & Grünpflege, Winterdienst & Hausmeisterservice sowie Personal & Arbeitnehmerüberlassung — alles aus einer Hand.",
  },
  {
    category: "Allgemein",
    q: "Welche Informationen sollte ich bereithalten?",
    a: "Leistungsbereich, Objekt- oder Einsatzort, gewünschter Zeitraum sowie Umfang (z. B. Fläche, Anzahl der Kräfte). Je konkreter die Angaben, desto genauer das Angebot.",
  },
  {
    category: "Allgemein",
    q: "Sind kurzfristige Termine möglich?",
    a: "Ja. Für Personal, Transporte und Notfälle im Objekt organisieren wir Einsätze regelmäßig innerhalb von 24 bis 48 Stunden — abhängig von Umfang und Region.",
  },
  {
    category: "Allgemein",
    q: "Ist die Besichtigung kostenpflichtig?",
    a: "Nein. Besichtigung und Erstberatung sind bei uns kostenlos und unverbindlich.",
  },
  {
    category: "Allgemein",
    q: "Arbeiten Sie auch außerhalb von Hamburg?",
    a: "Unser Schwerpunkt liegt in Hamburg und Norddeutschland. Fernverlagerungen und größere Projekte übernehmen wir auf Anfrage auch überregional.",
  },
];

export const JOBS = [
  { title: "Reinigungskraft", location: "Hamburg", pay: "ab 14,50 €/Std." },
  { title: "Möbelpacker / Fahrer", location: "Hamburg", pay: "ab 15,00 €/Std." },
  { title: "Galabau-Mitarbeiter", location: "Hamburg", pay: "ab 2.900 € brutto" },
  { title: "Hausmeister / Winterdienst", location: "Hamburg", pay: "ab 14,00 €/Std." },
];
