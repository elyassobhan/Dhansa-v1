import { BadgeCheck, Clock, Leaf, MapPin, Phone, ShieldCheck, Users, Star, TrendingUp, Zap } from "lucide-react";
import { COMPANY, TRUST } from "@/data/site";
import { Button } from "@/components/ui/button";
import { PHOTO_ASSETS } from "@/data/site";

const STATS = [
  { value: "5+", label: "Jahre Erfahrung" },
  { value: "100+", label: "Zufriedene Kunden" },
  { value: "24/7", label: "Erreichbarkeit" },
  { value: "40+", label: "Mitarbeiter:innen" },
];

const TRUST_ICONS = [ShieldCheck, BadgeCheck, Users, Leaf];

const VALUES = [
  { icon: Zap, title: "Schnelle Reaktion", text: "Einsätze innerhalb von 24–48 Stunden organisiert." },
  { icon: TrendingUp, title: "Dokumentierte Qualität", text: "Jeder Einsatz wird protokolliert und nachvollziehbar dokumentiert." },
  { icon: Star, title: "Persönlicher Kontakt", text: "Kein Callcenter — ein fester Ansprechpartner für Sie." },
  { icon: ShieldCheck, title: "Voll versichert", text: "Betriebs- und Haftpflichtversicherung für alle Leistungen." },
  { icon: Users, title: "Eigene Teams", text: "Keine anonymen Subunternehmer — nur geprüfte Eigenmitarbeiter." },
  { icon: Leaf, title: "Nachhaltig", text: "Umweltfreundliche Mittel und ressourcenschonende Prozesse." },
];

export function About() {
  return (
    <>
      {/* Section 1 — white bg, intro + stats */}
      <section id="ueber-uns" className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <p className="eyebrow">Willkommen bei {COMPANY.name}</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl">
              Hamburger Wurzeln.{" "}
              <span className="text-primary">Norddeutscher Anspruch.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Als inhabergeführtes Unternehmen aus Hamburg verbinden wir die Bandbreite eines
              Full-Service-Dienstleisters mit der Verbindlichkeit eines persönlichen Ansprechpartners.
            </p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mb-16">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border-2 border-primary/15 bg-blue-light-section p-6 text-center">
                <div className="font-display text-3xl font-bold text-primary">{s.value}</div>
                <div className="mt-1 text-sm font-medium text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-start">
            {/* Left */}
            <div>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                Was als kleines Hamburger Familienunternehmen begann, ist heute ein eingespieltes
                Team mit eigener Fahrzeugflotte und festen Ansprechpartnern. Reinigung, Umzüge,
                Galabau, Winterdienst und Personal — zuverlässig aus einer Hand.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Unser Versprechen: Termine, die gehalten werden. Qualität, die nachvollziehbar
                dokumentiert wird. Und ein direkter Kontakt, den Sie nicht erst über eine Hotline
                suchen müssen.
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-primary shrink-0" />
                <span>
                  Hauptsitz <strong className="text-foreground">Hamburg</strong> · Einsatz in ganz Norddeutschland
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="pill" className="shadow-blue">
                  <a href="#kontakt">Jetzt Angebot anfordern</a>
                </Button>
                <Button asChild variant="outline" size="pill">
                  <a href={COMPANY.phoneHref}>
                    <Phone className="size-4" />
                    {COMPANY.phone}
                  </a>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 grid grid-cols-2 gap-3">
                {TRUST.map((t, i) => {
                  const Icon = TRUST_ICONS[i]!;
                  return (
                    <div key={t.title} className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4 shadow-soft">
                      <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{t.title}</div>
                        <div className="text-xs text-muted-foreground">{t.text}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: photos */}
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <img src={PHOTO_ASSETS.photo01} alt="DHANSA Team" className="rounded-2xl object-cover w-full h-52" />
                <img src={PHOTO_ASSETS.photo04} alt="DHANSA Leistungen" className="rounded-2xl object-cover w-full h-52" />
              </div>
              <img src={PHOTO_ASSETS.photo07} alt="DHANSA Hamburg" className="rounded-2xl object-cover w-full h-48" />

              {/* 24/7 card */}
              <div className="rounded-3xl gradient-primary p-6 text-white shadow-lift">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="size-4" />
                  <span className="font-display text-sm font-semibold">Notfall am Wochenende?</span>
                </div>
                <p className="text-sm leading-relaxed opacity-90">
                  Wir sind 365 Tage erreichbar — auch nachts und sonntags.
                </p>
                <Button asChild variant="glass" size="pill" className="mt-4">
                  <a href={COMPANY.phoneHref}><Phone className="size-4" />{COMPANY.phone}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — deep blue bg, values grid */}
      <section className="section bg-blue-deep text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="eyebrow-white">Unsere Werte</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] sm:text-5xl">
              Warum Kunden DHANSA vertrauen
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-white/10 bg-white/[0.07] p-6">
                <div className="grid size-11 place-items-center rounded-xl bg-primary/30">
                  <v.icon className="size-5 text-primary-glow" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
