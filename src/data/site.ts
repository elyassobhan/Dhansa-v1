import {
  SprayCan,
  Truck,
  Trees,
  Snowflake,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import photo01 from "@/assets/bau-arbeit.jpeg";
import photo02 from "@/assets/Gebaeudereinung-02.jpeg";
import photo03 from "@/assets/strasse-bau.jpeg";
import photo04 from "@/assets/Gebaeudereinung-03.jpeg";
import photo05 from "@/assets/Personal.jpeg";
import photo06 from "@/assets/Transport-umzug.jpeg";
import photo07 from "@/assets/Winter-diesnt.jpeg";
import photo08 from "@/assets/Winter-diesnt-02.jpeg";
import photo09 from "@/assets/Winter-diesnt-03.jpeg";
import transportVan from "@/assets/transport-van.jpeg";

export const COMPANY = {
  name: "DHANSA",
  legal: "DHANSA Personal & Dienstleistungen e.K.",
  owner: "Daryush Hassanzadeh",
  hra: "HRA 133407",
  ustId: "USt-IdNr.: DE352561439",
  taxNumber: "Steuernummer: 46/088/05457",
  tagline: "Menschen. Lösungen. Vertrauen.",
  phone: "0162 3179 432",
  phoneHref: "tel:+491623179432",
  whatsapp: "491623179432",
  email: "info@dhansa.de",
  address: "Hamburg",
  city: "Hamburg",
  googleHref:
    "https://www.google.com/search?q=DHANSA+Personal+%26+Dienstleistungen+e.K.+Hamburg",
};

export const PHOTO_ASSETS = {
  photo01,
  photo02,
  photo03,
  photo04,
  photo05,
  photo06,
  photo07,
  photo08,
  photo09,
  transportVan,
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
    id: "umzug",
    icon: Truck,
    title: "Umzüge & Entrümpelung",
    kicker: "Privat · Gewerbe · Transport",
    claim: "Zuverlässig. Sorgfältig. Persönlich.",
    headline: "Professioneller Umzug mit klarer Organisation und persönlicher Betreuung.",
    description:
      "DHANSA Personal & Dienstleistungen unterstützt Sie beim sicheren Transport Ihrer Möbel und persönlichen Gegenstände – von der Vorbereitung bis zum Einzug. Wir organisieren Umzüge, Entrümpelungen, Montageservice und Einlagerung mit einem festen Ablauf und persönlichem Kontakt.",
    items: [
      "Privatumzüge",
      "Möbeltransport",
      "Entrümpelungen",
      "Montageservice",
      "Einlagerung",
      "Umzugsservice",
    ],
    subLinks: [
      "Umzüge",
      "Entrümpelungen",
      "Montageservice",
      "Einlagerung",
    ],
    stats: [
      { value: "Sorgfältig", label: "Behandlung" },
      { value: "Strukturiert", label: "Ablauf" },
      { value: "Flexibel", label: "Leistungsumfang" },
    ],
    photo: photo06,
  },
  {
    id: "transport-logistik",
    icon: Truck,
    title: "Transport & Logistik",
    kicker: "Transportlösungen aus Hamburg",
    claim: "Professionell. Zuverlässig. Termingerecht.",
    headline: "Transportlösungen aus Hamburg für Unternehmen, Gewerbekunden und öffentliche Auftraggeber.",
    description:
      "Wir übernehmen Transporte zuverlässig und flexibel – für Unternehmen, Gewerbekunden und öffentliche Auftraggeber. Mit erfahrenem Personal und passenden Transportfahrzeugen sorgen wir für eine termingerechte Abwicklung in Hamburg und Umgebung.",
    items: [
      "Private & gewerbliche Umzüge sorgfältig und termingerecht",
      "Kurier- & Direktfahrten für schnelle Zustellungen",
      "Gewerbliche Transporte für Unternehmen & Gewerbe",
      "Paket- & Warenversand zuverlässig und kontrolliert",
      "Flexible Koordination nach Terminplan",
      "Persönliche Betreuung mit klarer Kommunikation",
    ],
    subLinks: [
      "Umzüge",
      "Kurier & Direktfahrten",
      "Gewerbliche Transporte",
      "Paket & Ware",
    ],
    stats: [
      { value: "Termingerecht", label: "Ablauf" },
      { value: "Zuverlässig", label: "Service" },
      { value: "Flexibel", label: "Planung" },
    ],
    photo: transportVan,
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
    photo: "/Galabau-hero.jpg",
  },
  {
    id: "tiefbau",
    icon: Wrench,
    title: "Tiefbau & Erdarbeiten",
    kicker: "Bau · Erdarbeiten · Infrastruktur",
    claim: "Präzise. Sicher. Vor Ort.",
    headline: "Erdarbeiten, Gräben und Bauvorbereitung mit sauberem Ablauf.",
    description:
      "DHANSA übernimmt professionelle Erdarbeiten, Baugruben, Entwässerungsarbeiten und infrastrukturelle Vorbereitungen für Wohnbau, Gewerbe und öffentliche Projekte. Unser Team arbeitet sicher, termintreu und mit modernem Equipment.",
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
      "Mehr auf Anfrage",
    ],
    subLinks: [
      "Erdarbeiten Hamburg",
      "Baugruben",
      "Kanalbau",
      "Entwässerung",
      "Leitungsgräben",
    ],
    stats: [
      { value: "Sicher", label: "Ausführung" },
      { value: "Flexibel", label: "Projektgröße" },
      { value: "Vor Ort", label: "Koordination" },
    ],
    photo: "/Tief-bau.jpeg",
  },
  {
    id: "winterdienst",
    icon: Snowflake,
    title: "Winterdienst & Hausmeister",
    kicker: "Schnee · Streu · Werterhalt",
    claim: "Flexibel. Zuverlässig. Für Sie da.",
    headline: "Sichere Wege an 365 Tagen.",
    description:
      "Unser Winterdienst rückt vor 7 Uhr aus und hält Gehwege, Zufahrten und Parkflächen frei. Ergänzend kümmern wir uns ganzjährig als Hausmeister um Kontrollgänge, Kleinreparaturen und die Pflege Ihrer Immobilie. Wir sind Mo–So 24/7 erreichbar.",
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
      { value: "Mo–So", label: "24/7" },
      { value: "365 Tage", label: "Im Jahr" },
    ],
    photo: photo07,
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
    photo: photo05,
  },
  {
    id: "reinigung",
    icon: SprayCan,
    title: "Gebäudereinigung",
    kicker: "Gewerbe · Objekte · Reinigung",
    claim: "Professionelle Reinigung für Gewerbe & Objekte.",
    headline: "Verlässliche, gründliche und flexible Reinigungsleistungen aus Hamburg.",
    description:
      "DHANSA steht für zuverlässige, gründliche und flexible Reinigungsleistungen. Wir betreuen Unternehmen, Gewerbeobjekte und öffentliche Einrichtungen – regelmäßig, individuell und mit geschultem Personal.",
    items: [
      "Unterhaltsreinigung",
      "Büroreinigung",
      "Sanitärreinigung",
      "Treppenhausreinigung",
      "Praxis- & medizinische Objekte",
      "Fitnessstudios & Freizeit",
      "Industriereinigung",
      "Grund- & Baureinigung",
      "Weitere Leistungen auf Anfrage",
    ],
    subLinks: [
      "Glasreinigung",
      "Sonderreinigung",
      "Küchenreinigung",
      "Desinfektion",
      "Endreinigung",
    ],
    stats: [
      { value: "Regelmäßig", label: "Einsatzplan" },
      { value: "Individuell", label: "Leistungsumfang" },
      { value: "Geprüft", label: "Personal" },
    ],
    photo: photo02,
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
    a: "Umzüge & Entrümpelung, Galabau & Grünpflege, Tiefbau & Erdarbeiten, Winterdienst & Hausmeisterservice, Personal & Arbeitnehmerüberlassung sowie Gebäudereinigung — alles aus einer Hand.",
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

export const CAREER_OPENINGS = [
  {
    title: "Galabau-Mitarbeiter / Landschaftsgärtner",
    type: "Vollzeit",
    location: "Hamburg",
    pay: "ab 14,50 €/Std.",
    summary:
      "Garten- und Landschaftsbau vor Ort: Pflege, Pflanzung, Schnittarbeiten und Instandhaltung von Grünanlagen für Privat- und Gewerbekunden.",
    requirements: [
      "Körperlich fit und einsatzbereit im Außenbereich",
      "Sorgfältiger Umgang mit Pflanzen, Geräten und Maschinen",
      "Teamfähigkeit und zuverlässige Arbeitsweise",
    ],
  },
  {
    title: "Tiefbau-Mitarbeiter / Erdarbeiten",
    type: "Vollzeit",
    location: "Hamburg",
    pay: "ab 15,00 €/Std.",
    summary:
      "Erdarbeiten, Baugruben, Gräben und Bauvorbereitung — präzise, sicher und termintreu auf Baustellen in Hamburg und Umgebung.",
    requirements: [
      "Körperlich belastbar und sicherheitsbewusst",
      "Erfahrung oder Interesse an Erdarbeiten und Baustelleneinsätzen",
      "Zuverlässigkeit und klare Teamkommunikation",
    ],
  },
  /*
  {
    title: "Transportmitarbeiter / Fahrer",
    type: "Vollzeit",
    location: "Hamburg",
    pay: "ab 15,00 €/Std.",
    summary:
      "Verantwortung für sichere Transporte, zuverlässige Lieferungen und professionelle Kundenbetreuung in Hamburg und Umgebung.",
    requirements: [
      "Verlässliche und pünktliche Arbeitsweise",
      "Sicherer Umgang mit Fahrzeug und Transportaufgaben",
      "Gute Kommunikation mit Kunden und Team",
    ],
  },
  {
    title: "Möbelpacker / Umzugshelfer",
    type: "Vollzeit / Teilzeit",
    location: "Hamburg",
    pay: "ab 14,50 €/Std.",
    summary:
      "Sorgfältiger Umgang mit Möbeln, Verpackung und Organisation von Umzügen für Privat- und Gewerbekunden.",
    requirements: [
      "Körperlich fit und belastbar",
      "Achtsamkeit beim Handling von Gegenständen",
      "Teamfähigkeit und sauberer Arbeitsstil",
    ],
  },
  {
    title: "Reinigungskraft für Gewerbe",
    type: "Teilzeit / Nachtschicht",
    location: "Hamburg",
    pay: "ab 14,50 €/Std.",
    summary:
      "Selbstständige und gründliche Arbeit in Büros, Praxisräumen, Gebäuden und Gewerbeobjekten.",
    requirements: [
      "Saubere Arbeitsweise und Verantwortungsgefühl",
      "Pünktlichkeit und Zuverlässigkeit",
      "Gute Organisation und Hygieneverständnis",
    ],
  },
  {
    title: "IT Manager / Systemadministrator",
    type: "Vollzeit",
    location: "Hamburg",
    pay: "ab 19,00 €/Std.",
    summary:
      "Verantwortung für die IT-Infrastruktur, Systemadministration und technische Unterstützung im Unternehmen.",
    requirements: [
      "Erfahrung in der IT-Administration",
      "Kenntnisse in Netzwerken und Systemen",
      "Problemlösungsfähigkeiten und Teamfähigkeit",
    ],
  },
  {
    title: "Hausmeister / Winterdienst",
    type: "Vollzeit",
    location: "Hamburg",
    pay: "ab 14,00 €/Std.",
    summary:
      "Wartung, Kontrolle und zuverlässige Umsetzung von Außen- und Winterdienstaufgaben an verschiedenen Objekten.",
    requirements: [
      "Verantwortungsbewusstes Arbeiten",
      "Flexibilität bei Außeneinsätzen",
      "Sicherer Umgang mit dem Objektbereich",
    ],
  },
  */
];

export const JOBS = CAREER_OPENINGS.map(({ title, location, pay }) => ({
  title,
  location,
  pay,
}));

export const CAREER_BENEFITS = [
  "Faire und transparente Vergütung",
  "Kleines, stabiles Team mit klaren Verantwortlichkeiten",
  "Flexible Einsatzzeiten und gute Einbindung",
  "Schneller Einstieg mit Einarbeitung vor Ort",
  "Quereinsteiger willkommen",
];

export const CAREER_PROCESS = [
  "Kontaktaufnahme per Mail oder Telefon",
  "Persönliches Gespräch & kurze Einschätzung",
  "Einsatz- und Termineinigung",
  "Schneller Start in Ihrem Bereich",
];
