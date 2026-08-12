import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  Check,
  Clock3,
  Handshake,
  MapPin,
  MessageSquareText,
  Phone,
  TrendingUp,
  Users,
} from "lucide-react";

import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Button } from "@/components/ui/button";
import {
  CAREER_BENEFITS,
  CAREER_OPENINGS,
  CAREER_PROCESS,
  COMPANY,
} from "@/data/site";
import transportVan from "@/assets/transport-van.jpeg";

export const Route = createFileRoute("/karriere")({
  head: () => ({
    meta: [
      { title: "Karriere | DHANSA Personal & Dienstleistungen e.K." },
      {
        name: "description",
        content:
          "Karriere bei DHANSA: Verlässliche Jobs in Transport & Logistik, Reinigung, Hausmeisterservice und mehr aus Hamburg.",
      },
    ],
  }),
  component: KarrierePage,
});

const whyJoin = [
  {
    icon: Users,
    title: "Stabiles Team",
    text: "Wir arbeiten klar, respektvoll und zuverlässig zusammen – mit echten Menschen und einer guten Zusammenarbeit.",
  },
  {
    icon: Clock3,
    title: "Flexible Arbeitszeit",
    text: "Einsatzpläne mit Sinn, fairen Rahmenbedingungen und verständlichen Abläufen.",
  },
  {
    icon: TrendingUp,
    title: "Perspektive",
    text: "Ein klarer Start, echte Verantwortung und die Möglichkeit, sich im Team weiterzuentwickeln.",
  },
  {
    icon: Handshake,
    title: "Faire Kultur",
    text: "Vertrauen, Transparenz und respektvoller Umgang gehören für uns jeden Tag dazu.",
  },
];

const quickFacts = [
  { value: "24/7", label: "Einsatzbereit" },
  { value: "5+", label: "Jahre Erfahrung" },
  { value: "100%", label: "Teamorientiert" },
  { value: "Hamburg", label: "Standort" },
];

const valuesPillars = [
  "Verlässlichkeit",
  "Respekt im Team",
  "Klare Kommunikation",
  "Faire Zusammenarbeit",
];

const hiringHighlights = [
  "Faire Vergütung",
  "Schnelle Einarbeitung",
  "Klares Team",
  "Verlässliche Einsatzzeiten",
];

function KarrierePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-28">
        <section className="relative isolate overflow-hidden bg-navy text-white">
          <img
            src="/HR.jpg"
            alt="HR-Team bei DHANSA"
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/60" />
          <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.18),_transparent_55%)] lg:block" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-glow backdrop-blur-sm">
                <Briefcase className="size-3.5" />
                Karriere bei DHANSA
              </span>

              <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Werde Teil eines <span className="text-primary-glow">starken Teams</span>.
              </h1>

              <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
                Bei DHANSA liefern wir professionelle Lösungen für Transport, Logistik,
                Gebäudereinigung und Service – zuverlässig, persönlich und mit Verantwortung. Wenn
                du verlässlich, teamorientiert und engagiert bist, passt du zu uns.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="pill" className="shadow-blue">
                  <a href="#offene-stellen">
                    Offene Stellen
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="glassOutline" size="pill">
                  <a href={`mailto:${COMPANY.email}?subject=Bewerbung%20DHANSA`}>
                    Bewerbung senden
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/75">
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck className="size-4 text-primary-glow" />
                  Faire Bedingungen
                </span>
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck className="size-4 text-primary-glow" />
                  Verlässlicher Alltag
                </span>
                <span className="inline-flex items-center gap-2">
                  <BadgeCheck className="size-4 text-primary-glow" />
                  Hamburg &amp; Umgebung
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {valuesPillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/70"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/15 bg-white/8 p-4 shadow-2xl backdrop-blur-sm">
                <div className="overflow-hidden rounded-[1.5rem] border border-white/15">
                  <img
                    src="/HR.jpg"
                    alt="HR & Team bei DHANSA"
                    className="h-[420px] w-full object-cover"
                  />
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {quickFacts.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                      <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                      <div className="mt-1 text-[10px] uppercase tracking-[0.14em] text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-18">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="eyebrow">Warum bei DHANSA?</p>
              <h2 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
                Für Menschen, die Verantwortung übernehmen.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {whyJoin.map((item) => (
                <div key={item.title} className="rounded-3xl border border-border bg-secondary p-6 shadow-soft">
                  <div className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="offene-stellen" className="bg-blue-light py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-10 text-center">
              <p className="eyebrow">Offene Stellen</p>
              <h2 className="mt-4 font-display text-4xl font-bold text-foreground sm:text-5xl">
                Aktuell suchen wir Verstärkung.
              </h2>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {hiringHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {CAREER_OPENINGS.map((job) => (
                <article key={job.title} className="rounded-[1.75rem] border border-primary/10 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                        {job.type}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-bold text-foreground">{job.title}</h3>
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                      {job.pay}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="size-4 text-primary" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Building2 className="size-4 text-primary" />
                      {job.type}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>

                  <ul className="mt-5 space-y-2">
                    {job.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-sm text-foreground">
                        <span className="mt-0.5 grid size-5 place-items-center rounded-full bg-primary text-white">
                          <Check className="size-3" />
                        </span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild variant="hero" size="pill">
                      <a href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(`Bewerbung: ${job.title}`)}`}>
                        Jetzt bewerben
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="pill">
                      <a href={COMPANY.phoneHref}>
                        <Phone className="size-4" />
                        Anrufen
                      </a>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="eyebrow">Unsere Werte</p>
                <h2 className="mt-4 font-display text-4xl font-bold text-foreground">
                  Professionell, zuverlässig und ehrlich.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  Wir glauben daran, dass gute Arbeit mit klaren Standards, respektvoller Haltung und
                  verlässlicher Kommunikation entsteht. Genau deshalb sind wir bei DHANSA so
                  erfolgreich im täglichen Einsatz.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {CAREER_BENEFITS.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 rounded-2xl border border-border bg-secondary p-4">
                    <span className="mt-0.5 grid size-6 place-items-center rounded-full bg-primary text-white">
                      <Check className="size-3.5" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-navy py-20 text-white">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="eyebrow-white">So läuft es</p>
              <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
                Einfacher Bewerbungsprozess.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {CAREER_PROCESS.map((step, index) => (
                <div key={step} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 text-center">
                  <div className="mx-auto grid size-12 place-items-center rounded-full bg-primary/20 text-lg font-bold text-primary-glow">
                    {index + 1}
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-white/75">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
            <div className="rounded-[2rem] bg-gradient-to-r from-primary to-blue-700 p-8 text-white shadow-blue sm:p-12">
              <MessageSquareText className="mx-auto size-10 text-primary-glow" />
              <h2 className="mt-5 font-display text-3xl font-bold sm:text-5xl">
                Bewerben Sie sich jetzt.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80">
                Sie haben Interesse an einer Stelle oder möchten Ihre Bewerbung unverbindlich
                einreichen? Schreiben Sie uns einfach direkt an – wir freuen uns auf Sie.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild variant="glass" size="pill">
                  <a href={`mailto:${COMPANY.email}?subject=Bewerbung%20DHANSA`}>
                    E-Mail senden
                  </a>
                </Button>
                <Button asChild size="pill" className="bg-white text-primary hover:bg-white/90">
                  <a href={COMPANY.phoneHref}>
                    <Phone className="size-4" />
                    {COMPANY.phone}
                  </a>
                </Button>
              </div>

              <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-4 text-left text-sm text-white/80">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <span className="font-medium text-white">Bewerbung per E-Mail</span>
                  <a href={`mailto:${COMPANY.email}?subject=Bewerbung%20DHANSA`} className="font-semibold text-primary-glow underline decoration-white/40 underline-offset-4">
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
