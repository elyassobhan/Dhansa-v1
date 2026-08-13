import { Phone, MessageCircle, Star, ShieldCheck, Clock3, Truck, Users } from "lucide-react";
import { COMPANY, STATS_HERO } from "@/data/site";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/elb.mp4";

const FEATURE_PILLS = [
  { icon: ShieldCheck, label: "Geprüfte Qualität" },
  { icon: Clock3, label: "24/7 verfügbar" },
  { icon: Truck, label: "Zuverlässige Logistik" },
  { icon: Users, label: "Persönlicher Kontakt" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate min-h-[100svh] overflow-hidden bg-ink">
      {/* MP4 Video — full opacity, no blur */}
      <video
        className="absolute inset-0 size-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      {/* Single dark gradient — left side only so right stays clear */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-16 pt-28 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
            <span className="size-1.5 rounded-full bg-green-400" />
            24/7 Service · Hamburg &amp; Norddeutschland
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Verlässliche Lösungen
            <br />
            für jeden Einsatz.
          </h1>
          <p className="mt-3 font-display text-2xl font-semibold text-primary-glow sm:text-3xl">
            Professionell. Sicher. Persönlich.
          </p>

          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            Professionell Galabau, Tiefbau &amp; Erdarbeiten, professionelle Gebäudereinigung,
            zuverlässige Umzüge &amp; Entrümpelungen, Winterdienst und Personal — alles aus
            einer Hand für Privat- und Gewerbekunden.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="pill" className="shadow-blue">
              <a href={COMPANY.phoneHref}>
                <Phone className="size-4" />
                Jetzt anrufen
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="pill">
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </Button>
            <Button asChild size="pill" className="rounded-full bg-white font-semibold text-primary hover:bg-white/90">
              <a href="#kontakt">Angebot anfragen</a>
            </Button>
            <Button asChild variant="outline" size="pill" className="border-white/25 bg-white/5 text-white hover:bg-white/10">
              <a href="/karriere">Karriere</a>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.18em] text-white/65">
            <span>Personal</span>
            <span className="text-white/30">•</span>
            <span>Reinigung</span>
            <span className="text-white/30">•</span>
            <span>Logistik</span>
            <span className="text-white/30">•</span>
            <span>Service</span>
          </div>

          {/* Google stars */}
          <div className="mt-8 flex items-center gap-3">
            <div className="flex gap-0.5 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-semibold text-white">5.0 / 5</span>
            <span className="text-sm text-white/60">Hervorragend auf Google bewertet</span>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-14 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
          {STATS_HERO.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/20 bg-white/10 px-4 py-4 text-center"
            >
              <div className="font-display text-2xl font-bold text-white">{s.value}</div>
              <div className="mt-1 text-xs text-white/65">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid max-w-3xl gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {FEATURE_PILLS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 backdrop-blur-sm"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-primary/15 text-primary-glow">
                <Icon className="size-4" />
              </span>
              <span className="text-sm font-medium text-white/85">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
