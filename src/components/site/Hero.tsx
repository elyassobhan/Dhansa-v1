import { Phone, MessageCircle, Star } from "lucide-react";
import { COMPANY, STATS_HERO } from "@/data/site";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/elb.mp4";

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
            Gründlichkeit ist
            <br />
            unser Standard.
          </h1>
          <p className="mt-3 font-display text-2xl font-semibold text-primary-glow sm:text-3xl">
            Verlässlichkeit unser Versprechen.
          </p>

          <p className="mt-6 text-base leading-relaxed text-white/80 sm:text-lg">
            Professionelle Gebäudereinigung, zuverlässige Umzüge &amp; Entrümpelungen, Galabau,
            Winterdienst und Personal — alles aus einer Hand für Privat- und Gewerbekunden.
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
            <Button asChild size="pill"
              className="bg-white text-primary font-semibold hover:bg-white/90 rounded-full">
              <a href="#kontakt">Angebot anfordern</a>
            </Button>
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
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-2xl">
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

      </div>
    </section>
  );
}
