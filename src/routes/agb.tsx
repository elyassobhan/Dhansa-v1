import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { COMPANY } from "@/data/site";

export const Route = createFileRoute("/agb")({
  component: AgbPage,
  head: () => ({
    meta: [
      { title: "AGB | DHANSA" },
      { name: "description", content: "Allgemeine Geschaeftsbedingungen von DHANSA Personal & Dienstleistungen e.K." },
    ],
  }),
});

function AgbPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="section pt-36">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="eyebrow">Rechtliches</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">AGB</h1>

          <div className="mt-8 space-y-8 rounded-3xl border border-border bg-white p-8 shadow-soft">
            <section>
              <h2 className="font-display text-xl font-bold text-foreground">1. Geltungsbereich</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Diese Allgemeinen Geschaeftsbedingungen gelten fuer alle Leistungen von {COMPANY.legal},
                soweit nicht schriftlich etwas anderes vereinbart wurde.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">2. Angebot und Vertragsschluss</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Angebote sind freibleibend. Ein Vertrag kommt durch schriftliche Bestaetigung,
                Auftragsfreigabe oder tatsaechliche Leistungserbringung zustande.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">3. Preise und Zahlung</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Es gelten die im Angebot vereinbarten Preise. Rechnungen sind innerhalb der
                vereinbarten Frist ohne Abzug zahlbar.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">4. Haftung</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Wir haften nach den gesetzlichen Vorschriften bei Vorsatz und grober Fahrlaessigkeit.
                Bei leichter Fahrlaessigkeit haften wir nur bei Verletzung wesentlicher Vertragspflichten.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-bold text-foreground">5. Schlussbestimmungen</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Sollten einzelne Bestimmungen unwirksam sein oder werden, bleibt die Wirksamkeit der
                uebrigen Bestimmungen unberuehrt. Es gilt deutsches Recht.
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
