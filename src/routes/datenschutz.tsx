import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/datenschutz")({
  component: DatenschutzPage,
  head: () => ({
    meta: [
      { title: "Datenschutz | DHANSA" },
      { name: "description", content: "Datenschutzhinweise von DHANSA Personal & Dienstleistungen e.K." },
    ],
  }),
});

function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="section pt-36">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="eyebrow">Rechtliches</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">Datenschutz</h1>

          <div className="mt-8 space-y-8 rounded-3xl border border-border bg-white p-8 shadow-soft">
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">1. Verantwortliche Stelle</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Verantwortlich fuer die Datenverarbeitung ist {COMPANY.legal}, Hamburg.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">2. Verarbeitung von Zugriffsdaten</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Beim Besuch dieser Website koennen technische Informationen (z. B. Browsertyp,
                Betriebssystem, Uhrzeit, IP-Adresse) verarbeitet werden, soweit dies fuer den
                Betrieb und die Sicherheit erforderlich ist.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">3. Kontaktaufnahme</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Wenn Sie uns per Formular, Telefon oder E-Mail kontaktieren, verarbeiten wir Ihre
                Angaben zur Bearbeitung Ihrer Anfrage und fuer moegliche Anschlussfragen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">4. Ihre Rechte</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Sie haben das Recht auf Auskunft, Berichtigung, Loeschung, Einschraenkung der
                Verarbeitung, Datenuertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer Daten,
                soweit gesetzlich vorgesehen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">5. Cookies</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Diese Website verwendet notwendige Cookies fuer den Betrieb. Optionale Cookies werden
                nur nach Ihrer Einwilligung verarbeitet. Ihre Auswahl koennen Sie jederzeit anpassen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
