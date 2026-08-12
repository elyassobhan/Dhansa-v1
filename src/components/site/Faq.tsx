import { Phone } from "lucide-react";
import { COMPANY, FAQS } from "@/data/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export function Faq() {
  return (
    <section id="faq" className="section bg-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left — blue card */}
          <div className="rounded-3xl gradient-primary p-8 text-white shadow-lift self-start">
            <p className="eyebrow-white">FAQ</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.08] sm:text-4xl">
              Häufig gestellte Fragen
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/75">
              Von A wie Angebot bis Z wie Zufriedenheit — die wichtigsten Antworten rund um unsere
              Leistungen. Etwas nicht dabei? Sprechen Sie uns an.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <Button asChild variant="glass" size="pill" className="w-full">
                <a href="#kontakt">Frage stellen</a>
              </Button>
              <Button asChild variant="glassOutline" size="pill" className="w-full">
                <a href={COMPANY.phoneHref}>
                  <Phone className="size-4" />
                  Direkt anrufen
                </a>
              </Button>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { value: "5+", label: "Jahre Erfahrung" },
                { value: "100+", label: "Zufriedene Kunden" },
                { value: "24/7", label: "Erreichbarkeit" },
                { value: "40+", label: "Mitarbeiter:innen" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl bg-white/15 p-3 text-center">
                  <div className="font-display text-xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/65 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — accordion */}
          <Accordion type="single" collapsible defaultValue="faq-0" className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.q} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline hover:text-primary">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
