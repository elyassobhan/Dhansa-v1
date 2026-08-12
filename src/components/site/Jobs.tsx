import { Briefcase, MapPin, ArrowRight } from "lucide-react";
import { JOBS, COMPANY } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Jobs() {
  return (
    <section id="karriere" className="section bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <p className="eyebrow">Wir stellen ein</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-foreground sm:text-5xl">
              Werde Teil des{" "}
              <span className="text-primary">DHANSA Teams</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Wir wachsen — und suchen Verstärkung in Reinigung, Umzug, Galabau und
              Hausmeisterdienst. Faire Bezahlung, festes Team, Standort Hamburg.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Faire & pünktliche Bezahlung",
                "Geregelte Arbeitszeiten",
                "Festes Team, keine Subunternehmer",
                "Quereinsteiger willkommen",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="size-2 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <Button asChild variant="hero" size="pill" className="mt-8">
              <a href={`mailto:${COMPANY.email}?subject=Bewerbung`}>
                Initiativ-Bewerbung
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>

          {/* Right: job cards */}
          <div className="grid gap-3">
            {JOBS.map((job) => (
              <a
                key={job.title}
                href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(`Bewerbung: ${job.title}`)}`}
                className="group flex items-center justify-between rounded-2xl border border-border bg-white p-5 shadow-soft transition-all hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-11 place-items-center rounded-xl bg-primary/10">
                    <Briefcase className="size-5 text-primary" />
                  </span>
                  <div>
                    <div className="font-display text-base font-semibold text-foreground">
                      {job.title}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-foreground">
                      <MapPin className="size-3" />
                      {job.location}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-primary">{job.pay}</div>
                  <ArrowRight className="size-4 text-muted-foreground mt-1 ml-auto transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
