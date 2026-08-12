import { Quote, Star } from "lucide-react";
import { COMPANY, TESTIMONIALS } from "@/data/site";

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="size-6">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.7 18.9 12 24 12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.2 26.8 36 24 36c-5.1 0-9.5-3.3-11.1-8l-6.5 5C9.8 39.6 16.3 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.2 5.5-6 7l6.2 5.2C39.1 36.9 44 31 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section id="bewertungen" className="section bg-blue-light overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Bewertungen</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl">
            Was Kunden über uns sagen
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-white px-5 py-2.5 shadow-soft">
            <span className="flex gap-0.5 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </span>
            <span className="text-sm font-bold text-foreground">5.0 / 5 auf Google</span>
          </div>

          <div className="mx-auto mt-7 max-w-xl rounded-2xl border border-primary/20 bg-white p-4 shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <GoogleLogo />
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">Google Unternehmensprofil</p>
                  <p className="text-xs text-muted-foreground">DHANSA Personal &amp; Dienstleistungen e.K.</p>
                </div>
              </div>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">5.0 Sterne</span>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="animate-review-float flex flex-col rounded-2xl border border-primary/10 bg-white p-7 shadow-lift"
              style={{ animationDelay: `${i * 0.18}s` }}
            >
              <div className="flex gap-0.5 text-yellow-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="size-3.5 fill-current" />
                ))}
              </div>
              <Quote className="mt-3 size-6 text-primary/25" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                „{t.quote}"
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <div className="font-display text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={COMPANY.googleHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white px-6 py-3 text-sm font-semibold text-primary shadow-soft transition-all hover:bg-primary hover:text-white"
          >
            <span className="flex gap-0.5 text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
            </span>
            Alle Google Bewertungen lesen
          </a>
        </div>
      </div>
    </section>
  );
}
