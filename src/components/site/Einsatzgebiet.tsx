import { MapPinned } from "lucide-react";
import { StandortKarte } from "@/components/site/StandortKarte";

export function Einsatzgebiet() {
  return (
    <section id="einsatzgebiet" className="section relative overflow-hidden bg-[#f5f8fc]">
      <div className="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-8 h-64 w-64 rounded-full bg-blue-light-section blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Einsatzgebiet</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-slate-900 sm:text-5xl">
            Hamburg als Standort. Deutschland als Einsatzfeld.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Unser Hauptsitz liegt in Hamburg. Von dort aus versorgen wir Kunden in Norddeutschland und
            koordinieren größere Einsätze flexibel auch bundesweit.
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-lift">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.14em] text-primary uppercase">
              <MapPinned className="size-3.5" />
              Standorte
            </div>
            <div className="text-[0.68rem] font-medium tracking-[0.12em] text-slate-500 uppercase">
              Hamburg · Norddeutschland · deutschlandweit
            </div>
          </div>

          <div className="p-3 sm:p-4">
            <StandortKarte />
          </div>
        </div>
      </div>
    </section>
  );
}
