import { PROCESS } from "@/data/site";
import { PHOTO_ASSETS } from "@/data/site";

const STRENGTHS = [
  { num: "01", title: "Professionelles Gebäudemanagement", text: "Höchster Qualitätsanspruch bei jedem Einsatz." },
  { num: "02", title: "Feste Ansprechpartner vor Ort", text: "Persönliche Betreuung — kein Callcenter." },
  { num: "03", title: "Rund um die Uhr erreichbar", text: "24/7 Service, 365 Tage im Jahr." },
  { num: "04", title: "Transparente Kostenplanung", text: "Keine versteckten Kosten, klare Angebote." },
  { num: "05", title: "Qualifizierte Fachkräfte", text: "Geprüftes, eigenes Personal — keine Subunternehmer." },
  { num: "06", title: "Eigene Fahrzeugflotte", text: "Schnelle Reaktionszeiten durch eigene Logistik." },
];

export function Strengths() {
  return (
    <>
      {/* Section 1 — navy bg */}
      <section id="staerke" className="section bg-navy text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <p className="eyebrow-white">Unser Team aus Hamburg</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] sm:text-5xl">
                Menschen. Lösungen.{" "}
                <span className="text-primary-glow">Vertrauen.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                Was als kleines Hamburger Familienunternehmen begann, ist heute ein eingespieltes
                Team mit eigener Fahrzeugflotte und festen Ansprechpartnern für alle Leistungsbereiche.
              </p>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {STRENGTHS.map((s) => (
                  <div key={s.num} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 hover:bg-white/10 transition-colors">
                    <span className="font-display text-xs font-bold text-primary-glow">{s.num}</span>
                    <h3 className="mt-2 font-display text-sm font-semibold text-white">{s.title}</h3>
                    <p className="mt-1 text-xs text-white/55">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo grid */}
            <div className="grid grid-cols-2 gap-3">
              <img src={PHOTO_ASSETS.photo02} alt="DHANSA Team" className="rounded-2xl object-cover w-full h-52" />
              <img src={PHOTO_ASSETS.photo05} alt="DHANSA Leistungen" className="rounded-2xl object-cover w-full h-52 mt-8" />
              <img src={PHOTO_ASSETS.photo06} alt="DHANSA Hamburg" className="rounded-2xl object-cover w-full h-44" />
              <img src={PHOTO_ASSETS.photo08} alt="DHANSA Service" className="rounded-2xl object-cover w-full h-44 mt-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — primary blue bg, process */}
      <section id="ablauf" className="section bg-blue-mid text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-14">
            <p className="eyebrow-white">So arbeiten wir</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] sm:text-5xl">
              Direkt, klar und zuverlässig.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
              Von Ihrer Anfrage bis zur passenden Leistung — übersichtlich und persönlich.
            </p>
          </div>

          <ol className="grid gap-4 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <li key={p.step} className="relative rounded-2xl border border-white/20 bg-white/10 p-7">
                {i < PROCESS.length - 1 && (
                  <div className="absolute top-10 -right-2 hidden h-px w-4 bg-white/30 lg:block" />
                )}
                <span className="grid size-12 place-items-center rounded-xl bg-white font-display text-lg font-bold text-primary shadow-blue">
                  {p.step}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}

export function Process() {
  return null; // merged into Strengths above
}
