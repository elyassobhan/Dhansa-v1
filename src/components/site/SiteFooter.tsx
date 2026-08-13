import { ArrowUp, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { COMPANY, SERVICES } from "@/data/site";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <>
      {/* CTA Banner — primary blue */}
      <section className="gradient-primary py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Bereit anzufangen?</h2>
            <p className="mt-2 text-base opacity-85">Kostenfreies Angebot innerhalb von 24 Stunden.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="glass" size="pill">
              <a href="#kontakt">Anfrage starten</a>
            </Button>
            <Button asChild variant="glassOutline" size="pill">
              <a href={COMPANY.phoneHref}>
                <Phone className="size-4" />
                {COMPANY.phone}
              </a>
            </Button>
            <Button asChild size="pill" className="bg-white text-primary font-semibold hover:bg-white/90 rounded-full">
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4 text-[#25D366]" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer — navy */}
      <footer className="bg-navy text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

            {/* Brand — logo + DHANSA */}
            <div>
              <div className="flex items-center gap-3">
                <img src={logo} alt="DHANSA" className="h-20 w-auto object-contain brightness-0 invert" />
                <div className="flex flex-col leading-tight">
                  <span className="font-brand text-2xl font-extrabold text-white">DHANSA</span>
                  <span className="text-xs font-medium text-white/55 tracking-wide">Personal &amp; Dienstleistungen e.K.</span>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
                Professionell Galabau, Tiefbau &amp; Erdarbeiten, zuverlässige Umzüge &amp;
                Entrümpelungen, Winterdienst und Personal sowie Gebäudereinigung — alles aus
                einer Hand für Privat- und Gewerbekunden.
              </p>
              <p className="mt-4 font-display text-sm font-semibold text-primary-glow">
                {COMPANY.tagline}
              </p>
              {/* Social / contact quick links */}
              <div className="mt-6 flex gap-3">
                <a href={COMPANY.phoneHref}
                  className="grid size-10 place-items-center rounded-xl border border-white/15 bg-white/10 text-white hover:bg-primary transition-colors">
                  <Phone className="size-4" />
                </a>
                <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="grid size-10 place-items-center rounded-xl border border-white/15 bg-white/10 text-white hover:bg-[#25D366] transition-colors">
                  <MessageCircle className="size-4" />
                </a>
                <a href={`mailto:${COMPANY.email}`}
                  className="grid size-10 place-items-center rounded-xl border border-white/15 bg-white/10 text-white hover:bg-primary transition-colors">
                  <Mail className="size-4" />
                </a>
              </div>
            </div>

            {/* Leistungen */}
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">
                Leistungen
              </h3>
              <ul className="space-y-3 text-sm">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <Link
                      to="/leistungen/$serviceId"
                      params={{ serviceId: s.id }}
                      className="flex items-center gap-2 text-white/60 transition-colors hover:text-white"
                    >
                      <s.icon className="size-3.5 text-primary-light shrink-0" />
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">
                Navigation
              </h3>
              <ul className="space-y-3 text-sm">
                {[
                  { label: "Home", href: "/" },
                  { label: "Über uns", href: "/#ueber-uns" },
                  { label: "Leistungen", href: "/#leistungen" },
                  { label: "Einsatzgebiet", href: "/#einsatzgebiet" },
                  { label: "Unsere Stärke", href: "/#staerke" },
                  { label: "Bewertungen", href: "/#bewertungen" },
                  { label: "FAQ", href: "/#faq" },
                  { label: "Karriere", href: "/karriere" },
                  { label: "Kontakt", href: "/#kontakt" },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-white/60 transition-colors hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontakt */}
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white/40 mb-5">
                Kontakt
              </h3>
              <ul className="space-y-4 text-sm text-white/60">
                <li>
                  <a href={COMPANY.phoneHref} className="flex items-start gap-2 hover:text-white transition-colors">
                    <Phone className="size-4 mt-0.5 shrink-0 text-primary-light" />
                    <span>{COMPANY.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-2 hover:text-white transition-colors">
                    <MessageCircle className="size-4 mt-0.5 shrink-0 text-[#25D366]" />
                    <span>WhatsApp kontaktieren</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-2 hover:text-white transition-colors">
                    <Mail className="size-4 mt-0.5 shrink-0 text-primary-light" />
                    <span>{COMPANY.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="size-4 mt-0.5 shrink-0 text-primary-light" />
                  <span>Hamburg, Deutschland</span>
                </li>
              </ul>

              {/* Opening hours */}
              <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Erreichbarkeit</p>
                <p className="text-sm text-white/80">Mo – So: 24/7 Service</p>
                <p className="text-xs text-white/50 mt-1">Notfälle jederzeit</p>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row">
            <p>© {new Date().getFullYear()} {COMPANY.legal} · Alle Rechte vorbehalten</p>
            <div className="flex items-center gap-4">
              <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
              <Link to="/agb" className="hover:text-white transition-colors">AGB</Link>
              <a href="#home" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                <ArrowUp className="size-3.5" />
                Nach oben
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
