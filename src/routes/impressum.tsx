import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/impressum")({
  component: ImpressumPage,
  head: () => ({
    meta: [
      { title: "Impressum | DHANSA" },
      { name: "description", content: "Impressum von DHANSA Personal & Dienstleistungen e.K." },
    ],
  }),
});

function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="section pt-36">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="eyebrow">Rechtliches</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">Impressum</h1>

          <div className="mt-8 space-y-8 rounded-3xl border border-border bg-white p-8 shadow-soft">
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Angaben gemaess § 5 TMG</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {COMPANY.legal}
                <br />
                Hamburg, Deutschland
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Kontakt</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Telefon: {COMPANY.phone}
                <br />
                E-Mail: {COMPANY.email}
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">EU-Streitschlichtung</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                https://ec.europa.eu/consumers/odr/
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">Haftung fuer Inhalte</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Als Diensteanbieter sind wir gemaess den allgemeinen Gesetzen fuer eigene Inhalte auf diesen
                Seiten verantwortlich. Fuer die Richtigkeit, Vollstaendigkeit und Aktualitaet der Inhalte
                uebernehmen wir jedoch keine Gewaehr.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
