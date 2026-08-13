import { useState } from "react";
import { Clock, Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { COMPANY, SERVICES } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const [service, setService] = useState(SERVICES[0]!.title);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const body = [
      `Leistungsbereich: ${service}`,
      `Name: ${form.get("name")}`,
      `Telefon: ${form.get("phone")}`,
      `E-Mail: ${form.get("email")}`,
      "",
      String(form.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      `Anfrage: ${service}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="kontakt" className="section bg-blue-deep text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <p className="eyebrow-white">Kontakt</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.08] sm:text-5xl">
            Jetzt Angebot anfordern
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70">
            Mit DHANSA entscheiden Sie sich für einen Partner, der Kompetenz, Organisation und
            persönlichen Service bietet — in Hamburg und darüber hinaus.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Left: contact info */}
          <div className="flex flex-col gap-4">
            {[
              { icon: Phone, label: "Telefon", value: COMPANY.phone, href: COMPANY.phoneHref },
              { icon: MessageCircle, label: "WhatsApp", value: COMPANY.phone, href: `https://wa.me/${COMPANY.whatsapp}` },
              { icon: Mail, label: "E-Mail", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
              { icon: MapPin, label: "Adresse", value: "Hamburg, Deutschland" },
              { icon: Clock, label: "Erreichbarkeit", value: "24/7 Service · Mo–So" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary">
                  <item.icon className="size-5 text-white" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/50">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="font-display text-base font-semibold text-white hover:text-primary-glow transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <div className="font-display text-base font-semibold text-white">{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Quick CTA */}
            <div className="mt-2 rounded-2xl border border-white/15 bg-white/10 p-6">
              <p className="font-display text-sm font-semibold text-white mb-1">Kurzfristiger Bedarf?</p>
              <p className="text-xs text-white/60 mb-4">Einsätze in der Regel innerhalb von 24–48 Stunden.</p>
              <Button asChild variant="hero" size="pill" className="w-full shadow-blue">
                <a href={COMPANY.phoneHref}><Phone className="size-4" />{COMPANY.phone}</a>
              </Button>
            </div>
          </div>

          {/* Right: form — white card */}
          <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-7 shadow-lift sm:p-10">
            <h3 className="font-display text-2xl font-bold text-foreground">Anfrage senden</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen Angebot.
            </p>

            <div className="mt-7">
              <Label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Leistungsbereich
              </Label>
              <input type="hidden" name="service" value={service} />
              <div className="mt-3 flex flex-wrap gap-2">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    data-service={s.title}
                    className={`js-service-pick rounded-full border px-3.5 py-2 text-xs font-semibold transition-colors ${
                      service === s.title
                        ? "border-primary bg-primary text-white"
                        : "border-border bg-secondary text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                    onClick={() => setService(s.title)}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Ihr Name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Telefon</Label>
                <Input id="phone" name="phone" placeholder="Für schnellen Rückruf" />
              </div>
            </div>
            <div className="mt-4 grid gap-2">
              <Label htmlFor="email">E-Mail</Label>
              <Input id="email" name="email" type="email" required placeholder="name@firma.de" />
            </div>
            <div className="mt-4 grid gap-2">
              <Label htmlFor="message">Ihre Anfrage</Label>
              <Textarea id="message" name="message" rows={4} required placeholder="Beschreiben Sie kurz Umfang, Ort und Wunschtermin." />
            </div>

            <Button type="submit" variant="hero" size="pillLg" className="mt-7 w-full shadow-blue">
              <Send className="size-4" />
              Angebot anfordern
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Kostenlose Besichtigung · Zertifiziert · Schnelle Termine
            </p>
          </form>
        </div>

        <div className="mt-10 rounded-3xl border border-white/20 bg-white/10 p-3 shadow-lift">
          <div className="mb-3 px-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Standortkarte</p>
            <p className="text-sm text-white/80">DHANSA in Hamburg</p>
          </div>
          <iframe
            title="Standort DHANSA Hamburg"
            src="https://www.google.com/maps?q=Hamburg%20Deutschland&output=embed"
            className="h-72 w-full rounded-2xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
