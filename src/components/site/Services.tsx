import { useRef } from "react";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { COMPANY, SERVICES } from "@/data/site";
import { Button } from "@/components/ui/button";

/* Each service gets its own colour scheme */
const SCHEMES = [
  {
    // 01 Gebäudereinigung — white bg, primary blue accent
    section: "bg-white",
    badge: "bg-primary/10 text-primary border border-primary/20",
    numColor: "text-primary/20",
    titleColor: "text-foreground",
    claimColor: "text-primary",
    descColor: "text-muted-foreground",
    checkBg: "bg-primary text-white",
    tagBg: "bg-blue-light-section border border-primary/20 text-primary",
    photoBg: "from-primary-deep/90 via-primary/50 to-transparent",
    statBorder: "border-white/25 bg-white/15",
    eyebrowColor: "text-primary",
    ctaPrimary: "hero",
    ctaSecondary: "outline",
  },
  {
    // 02 Umzüge — deep navy bg, white text
    section: "bg-blue-deep text-white",
    badge: "bg-white/10 text-white/80 border border-white/20",
    numColor: "text-white/10",
    titleColor: "text-white",
    claimColor: "text-primary-glow",
    descColor: "text-white/70",
    checkBg: "bg-primary-glow/20 text-primary-glow border border-primary-glow/30",
    tagBg: "bg-white/10 border border-white/20 text-white/80",
    photoBg: "from-ink/90 via-ink/40 to-transparent",
    statBorder: "border-white/20 bg-white/10",
    eyebrowColor: "text-primary-glow",
    ctaPrimary: "glass",
    ctaSecondary: "glassOutline",
  },
  {
    // 03 Galabau — primary blue bg, white text
    section: "bg-blue-mid text-white",
    badge: "bg-white/15 text-white border border-white/25",
    numColor: "text-white/10",
    titleColor: "text-white",
    claimColor: "text-yellow-300",
    descColor: "text-white/75",
    checkBg: "bg-white/20 text-white border border-white/30",
    tagBg: "bg-white/15 border border-white/25 text-white",
    photoBg: "from-primary-deep/95 via-primary-deep/50 to-transparent",
    statBorder: "border-white/20 bg-white/15",
    eyebrowColor: "text-yellow-300",
    ctaPrimary: "glass",
    ctaSecondary: "glassOutline",
  },
  {
    // 04 Tiefbau & Erdarbeiten — stone blue bg, dark text
    section: "bg-slate-100 text-foreground",
    badge: "bg-primary/10 text-primary border border-primary/20",
    numColor: "text-primary/15",
    titleColor: "text-foreground",
    claimColor: "text-primary",
    descColor: "text-muted-foreground",
    checkBg: "bg-primary text-white",
    tagBg: "bg-white border border-primary/20 text-primary",
    photoBg: "from-primary-deep/90 via-primary/40 to-transparent",
    statBorder: "border-primary/20 bg-white/80",
    eyebrowColor: "text-primary",
    ctaPrimary: "hero",
    ctaSecondary: "outline",
  },
  {
    // 05 Winterdienst — sky blue bg, dark text
    section: "bg-blue-light",
    badge: "bg-primary/10 text-primary border border-primary/20",
    numColor: "text-primary/15",
    titleColor: "text-foreground",
    claimColor: "text-primary",
    descColor: "text-muted-foreground",
    checkBg: "bg-primary text-white",
    tagBg: "bg-white border border-primary/20 text-primary",
    photoBg: "from-primary-deep/90 via-primary/40 to-transparent",
    statBorder: "border-primary/20 bg-white/80",
    eyebrowColor: "text-primary",
    ctaPrimary: "hero",
    ctaSecondary: "outline",
  },
  {
    // 06 Personal — navy gradient bg, white text
    section: "bg-navy text-white",
    badge: "bg-primary/30 text-white border border-primary/40",
    numColor: "text-white/8",
    titleColor: "text-white",
    claimColor: "text-primary-glow",
    descColor: "text-white/70",
    checkBg: "bg-primary text-white",
    tagBg: "bg-white/10 border border-white/20 text-white/80",
    photoBg: "from-ink/95 via-ink/50 to-transparent",
    statBorder: "border-white/20 bg-white/10",
    eyebrowColor: "text-primary-glow",
    ctaPrimary: "glass",
    ctaSecondary: "glassOutline",
  },
] as const;

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div id="leistungen">
      {/* ── Intro header ── */}
      <div className="bg-white py-20 text-center">
        <div className="mx-auto max-w-3xl px-5">
          <p className="eyebrow">Unsere Leistungen</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl">
            Sechs Bereiche. Ein Partner.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Jeder Bereich mit eigenem Team, eigener Ausrüstung und festem Ansprechpartner —
            verbunden durch ein Versprechen: Verlässlichkeit aus Hamburg.
          </p>
          {/* Quick-nav pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {SERVICES.map((s, i) => (
              <a
                key={s.id}
                href={`#service-${s.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-semibold text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-white"
              >
                <span className="text-xs opacity-50">0{i + 1}</span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── One full-width spread per service ── */}
      <div ref={sectionRef}>
        {SERVICES.map((service, i) => {
          const sc = SCHEMES[i]!;
          const isEven = i % 2 === 0; // photo left vs right

          return (
            <section
              key={service.id}
              id={`service-${service.id}`}
              className={`${sc.section} relative overflow-hidden`}
            >
              {/* Decorative large number watermark */}
              <div
                className={`pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 font-display text-[18rem] font-black leading-none select-none ${sc.numColor}`}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
                <div
                  className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                    !isEven ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* ── Text side ── */}
                  <div className="group">
                    {/* Bereich badge */}
                    <div className="mb-5 flex items-center gap-3">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold ${sc.badge}`}
                      >
                        <service.icon className="size-3.5" />
                        Bereich {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`text-xs font-semibold tracking-widest uppercase ${sc.eyebrowColor}`}>
                        {service.kicker}
                      </span>
                    </div>

                    <h2
                      className={`font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl ${sc.titleColor} transition-transform duration-500`}
                    >
                      {service.title}
                    </h2>
                    <p className={`mt-3 font-display text-xl font-semibold sm:text-2xl ${sc.claimColor}`}>
                      {service.claim}
                    </p>
                    <p className={`mt-5 text-base leading-relaxed sm:text-lg ${sc.descColor}`}>
                      {service.description}
                    </p>

                    {/* Checklist */}
                    <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 transition-transform duration-200 hover:translate-x-1"
                        >
                          <span
                            className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full text-xs font-bold ${sc.checkBg}`}
                          >
                            ✓
                          </span>
                          <span className={`text-sm font-medium ${sc.titleColor}`}>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Sub-links */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.subLinks.map((link) => (
                        <span
                          key={link}
                          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${sc.tagBg}`}
                        >
                          {link}
                        </span>
                      ))}
                    </div>

                    {/* Stats row */}
                    <div className="mt-8 flex flex-wrap gap-3">
                      {service.stats.map((st) => (
                        <div
                          key={st.label}
                          className={`rounded-2xl border px-5 py-3 text-center ${sc.statBorder}`}
                        >
                          <div className={`font-display text-xl font-bold ${sc.titleColor}`}>
                            {st.value}
                          </div>
                          <div className={`text-xs mt-0.5 ${sc.descColor}`}>{st.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="mt-10 flex flex-wrap gap-3">
                      <Button
                        asChild
                        variant={sc.ctaPrimary as any}
                        size="pill"
                        className="shadow-blue transition-transform hover:-translate-y-0.5"
                      >
                        <a href="#kontakt">
                          Angebot anfordern
                          <ArrowRight className="size-4" />
                        </a>
                      </Button>
                      <Button
                        asChild
                        variant={sc.ctaSecondary as any}
                        size="pill"
                        className="transition-transform hover:-translate-y-0.5"
                      >
                        <Link to="/leistungen/$serviceId" params={{ serviceId: service.id }}>
                          Mehr erfahren
                          <ArrowRight className="size-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="ghost"
                        size="pill"
                        className={`transition-transform hover:-translate-y-0.5 ${
                          i % 2 !== 0 ? "text-white hover:bg-white/10" : ""
                        }`}
                      >
                        <a href={COMPANY.phoneHref}>
                          <Phone className="size-4" />
                          {COMPANY.phone}
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* ── Photo side ── */}
                  <div className="relative">
                    {/* Floating accent ring */}
                    <div className="absolute -inset-4 rounded-3xl border-2 border-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative overflow-hidden rounded-3xl shadow-lift">
                      <img
                        src={service.photo}
                        alt={service.title}
                        className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-[520px]"
                      />
                      {/* Bottom overlay with stats */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${sc.photoBg}`}
                      />
                      <div className="absolute bottom-0 inset-x-0 p-7">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="grid size-10 place-items-center rounded-xl bg-white/20">
                            <service.icon className="size-5 text-white" />
                          </div>
                          <p className="font-display text-lg font-bold text-white">{service.claim}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          {service.stats.map((st) => (
                            <div
                              key={st.label}
                              className="rounded-xl border border-white/20 bg-white/15 p-3 text-center backdrop-blur-sm"
                            >
                              <div className="font-display text-base font-bold text-white">
                                {st.value}
                              </div>
                              <div className="text-xs text-white/70 mt-0.5">{st.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Floating "Zur Seite" badge */}
                    <Link
                      to="/leistungen/$serviceId"
                      params={{ serviceId: service.id }}
                      className="absolute -top-4 -right-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 text-sm font-bold text-primary shadow-lift transition-all hover:-translate-y-1 hover:shadow-blue"
                    >
                      Zur Seite
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Bottom divider wave */}
              {i < SERVICES.length - 1 && (
                <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />
              )}
            </section>
          );
        })}
      </div>

      {/* ── Bottom CTA strip ── */}
      <div className="bg-white py-16 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <p className="eyebrow">Alle Leistungen</p>
          <h3 className="mt-3 font-display text-3xl font-bold text-foreground">
            Nicht das Richtige dabei?
          </h3>
          <p className="mt-3 text-base text-muted-foreground">
            Sprechen Sie uns an — wir finden gemeinsam die passende Lösung.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="pill" className="shadow-blue">
              <a href="#kontakt">
                Angebot anfordern <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="pill">
              <a href={COMPANY.phoneHref}>
                <Phone className="size-4" />
                {COMPANY.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
