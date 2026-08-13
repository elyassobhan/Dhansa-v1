import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Phone,
  MessageCircle,
  Send,
  Star,
  Shield,
  Clock,
  Award,
  Users,
} from "lucide-react";
import { SERVICES, COMPANY, FAQS, TESTIMONIALS } from "@/data/site";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/leistungen/$serviceId")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.id === params.serviceId);
    if (!service) throw notFound();
    return { serviceId: service.id };
  },
  head: ({ loaderData }) => {
    const service = SERVICES.find((s) => s.id === loaderData?.serviceId);
    return {
      meta: [
        { title: `${service?.title} Hamburg | DHANSA` },
        { name: "description", content: service?.description },
        { property: "og:title", content: `${service?.title} Hamburg | DHANSA` },
        { property: "og:description", content: service?.description },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { serviceId } = Route.useLoaderData();
  const service = SERVICES.find((s) => s.id === serviceId);
  if (!service) throw notFound();
  const otherServices = SERVICES.filter((s) => s.id !== service.id);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* ── HERO — clear photo, minimal overlay, no blur ── */}
      <section className="relative isolate overflow-hidden bg-ink pt-20 min-h-[70vh] flex items-end">
        <img
          src={service.photo}
          alt={service.title}
          className="absolute inset-0 size-full object-cover"
        />
        {/* Only a bottom-to-top gradient so photo stays clear at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />

        <div className="relative w-full mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          {/* Breadcrumb */}
          <nav className="mb-6 flex items-center gap-2 text-sm text-white/50">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <a href="/#leistungen" className="hover:text-white transition-colors">Leistungen</a>
            <span>/</span>
            <span className="text-white/80">{service.title}</span>
          </nav>

          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold text-white mb-4">
              <service.icon className="size-3.5" />
              {service.kicker}
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-3 font-display text-xl font-semibold text-primary-glow">
              {service.claim}
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="pill" className="shadow-blue">
                <a href="#kontakt"><Send className="size-4" />Angebot anfordern</a>
              </Button>
              <Button asChild variant="whatsapp" size="pill">
                <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" />WhatsApp
                </a>
              </Button>
              <Button asChild size="pill" className="bg-white text-primary font-semibold hover:bg-white/90 rounded-full">
                <a href={COMPANY.phoneHref}><Phone className="size-4" />{COMPANY.phone}</a>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-3">
              {service.stats.map((st) => (
                <div key={st.label} className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-center min-w-[100px]">
                  <div className="font-display text-xl font-bold text-white">{st.value}</div>
                  <div className="text-xs text-white/60 mt-0.5">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 1 — white: details + sidebar ── */}
      <section className="section bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            {/* Left */}
            <div>
              <p className="eyebrow">Was wir leisten</p>
              <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
                {service.headline}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-border bg-secondary/50 p-3">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary">
                      <Check className="size-3 text-white" />
                    </span>
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Sub-links */}
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Unsere Leistungen in Hamburg
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.subLinks.map((link) => (
                    <a key={link} href="#kontakt"
                      className="rounded-full border-2 border-primary/20 bg-blue-light-section px-4 py-2 text-sm font-semibold text-primary transition-colors hover:border-primary hover:bg-primary hover:text-white">
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild variant="hero" size="pill" className="shadow-blue">
                  <a href="#kontakt">Jetzt Angebot anfordern <ArrowRight className="size-4" /></a>
                </Button>
                <Button asChild variant="outline" size="pill">
                  <a href={COMPANY.phoneHref}><Phone className="size-4" />{COMPANY.phone}</a>
                </Button>
              </div>
            </div>

            {/* Right sidebar */}
            <div className="flex flex-col gap-5">
              {/* Photo */}
              <img src={service.photo} alt={service.title}
                className="w-full rounded-3xl object-cover h-64 lg:h-72" />

              {/* Blue trust card */}
              <div className="rounded-3xl gradient-primary p-7 text-white shadow-lift">
                <service.icon className="size-8" />
                <h3 className="mt-4 font-display text-xl font-bold">{service.claim}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">
                  Kostenlose Besichtigung · Zertifiziert · Schnelle Termine
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2">
                  {service.stats.map((st) => (
                    <div key={st.label} className="rounded-xl bg-white/15 p-3 text-center">
                      <div className="font-display text-sm font-bold">{st.value}</div>
                      <div className="text-xs opacity-70 mt-0.5">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick contact — sky blue */}
              <div className="rounded-3xl border-2 border-primary/20 bg-blue-light-section p-6">
                <p className="font-display text-sm font-bold text-foreground mb-1">Kurzfristiger Bedarf?</p>
                <p className="text-xs text-muted-foreground mb-4">Einsätze innerhalb von 24–48 Stunden.</p>
                <div className="flex flex-col gap-2">
                  <Button asChild variant="hero" size="pill" className="w-full shadow-blue">
                    <a href={COMPANY.phoneHref}><Phone className="size-4" />{COMPANY.phone}</a>
                  </Button>
                  <Button asChild variant="whatsapp" size="pill" className="w-full">
                    <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="size-4" />WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — deep blue: why choose us ── */}
      <section className="section bg-blue-deep text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="eyebrow-white">Warum DHANSA</p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Ihr verlässlicher Partner für {service.title}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: "Voll versichert", text: "Betriebs- & Haftpflicht für alle Einsätze." },
              { icon: Award, title: "Zertifiziert", text: "Geprüfte Qualität nach festen Standards." },
              { icon: Users, title: "Eigene Teams", text: "Keine Subunternehmer — nur eigenes Personal." },
              { icon: Clock, title: "24/7 erreichbar", text: "Auch nachts und am Wochenende für Sie da." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 hover:bg-white/12 transition-colors">
                <div className="grid size-12 place-items-center rounded-xl bg-primary/40 mb-4">
                  <item.icon className="size-6 text-primary-glow" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — sky blue: testimonials ── */}
      <section className="section bg-blue-light">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow">Bewertungen</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Was Kunden über {service.title} sagen
            </h2>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 shadow-soft">
              <span className="flex gap-0.5 text-yellow-400">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
              </span>
              <span className="text-sm font-bold text-foreground">5.0 auf Google</span>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <figure key={t.name} className="flex flex-col rounded-2xl bg-white p-7 shadow-lift border border-primary/10">
                <div className="flex gap-0.5 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">„{t.quote}"</blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <div className="font-display text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          {/* Extra 3 — primary blue */}
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.slice(3, 6).map((t) => (
              <figure key={t.name} className="flex flex-col rounded-2xl bg-primary p-7 shadow-blue">
                <div className="flex gap-0.5 text-yellow-300">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white">„{t.quote}"</blockquote>
                <figcaption className="mt-5 border-t border-white/20 pt-4">
                  <div className="font-display text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/60">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — white: FAQ ── */}
      <section className="section bg-white">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Häufige Fragen zu {service.title}
            </h2>
          </div>
          <Accordion type="single" collapsible defaultValue="faq-0">
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
      </section>

      {/* ── SECTION 5 — deep blue: contact form ── */}
      <section id="kontakt" className="section bg-blue-deep text-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div>
              <p className="eyebrow-white">Kontakt</p>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
                Angebot für {service.title} anfordern
              </h2>
              <p className="mt-4 text-base text-white/70">
                Kostenlose Besichtigung · Rückmeldung innerhalb von 24 Stunden
              </p>

              {/* Contact cards */}
              <div className="mt-8 flex flex-col gap-3">
                {[
                  { icon: Phone, label: "Telefon", value: COMPANY.phone, href: COMPANY.phoneHref },
                  { icon: MessageCircle, label: "WhatsApp", value: "Jetzt schreiben", href: `https://wa.me/${COMPANY.whatsapp}` },
                ].map((item) => (
                  <a key={item.label} href={item.href}
                    className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4 hover:bg-white/15 transition-colors">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary">
                      <item.icon className="size-5 text-white" />
                    </span>
                    <div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">{item.label}</div>
                      <div className="font-display text-sm font-semibold text-white">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {service.stats.map((st) => (
                  <div key={st.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-center">
                    <div className="font-display text-xl font-bold text-white">{st.value}</div>
                    <div className="text-xs text-white/55 mt-1">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form — white card */}
            <ContactForm serviceTitle={service.title} />
          </div>
        </div>
      </section>

      {/* ── SECTION 6 — sky blue: other services ── */}
      <section className="section bg-blue-light">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow">Weitere Leistungen</p>
            <h2 className="mt-4 font-display text-3xl font-bold text-foreground sm:text-4xl">
              Alles aus einer Hand
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Entdecken Sie unsere weiteren Leistungsbereiche — alle mit eigenem Team und festem Ansprechpartner.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((s) => (
              <Link
                key={s.id}
                to="/leistungen/$serviceId"
                params={{ serviceId: s.id }}
                className="group rounded-2xl border-2 border-transparent bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lift"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-primary/10 mb-4">
                  <s.icon className="size-6 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.claim}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Mehr erfahren
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="size-4" />
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function ContactForm({ serviceTitle }: { serviceTitle: string }) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = [
      `Leistungsbereich: ${serviceTitle}`,
      `Name: ${form.get("name")}`,
      `Telefon: ${form.get("phone")}`,
      `E-Mail: ${form.get("email")}`,
      "",
      String(form.get("message") ?? ""),
    ].join("\n");
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      `Anfrage: ${serviceTitle}`,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-white p-8 shadow-lift sm:p-10">
      <h3 className="font-display text-2xl font-bold text-foreground">Anfrage senden</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Wir melden uns innerhalb von 24 Stunden mit einem unverbindlichen Angebot.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="sp-name" className="text-sm font-semibold text-foreground">Name</label>
          <input id="sp-name" name="name" required placeholder="Ihr Name"
            className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" />
        </div>
        <div className="grid gap-2">
          <label htmlFor="sp-phone" className="text-sm font-semibold text-foreground">Telefon</label>
          <input id="sp-phone" name="phone" placeholder="Für schnellen Rückruf"
            className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" />
        </div>
      </div>
      <div className="mt-4 grid gap-2">
        <label htmlFor="sp-email" className="text-sm font-semibold text-foreground">E-Mail</label>
        <input id="sp-email" name="email" type="email" required placeholder="name@firma.de"
          className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" />
      </div>
      <div className="mt-4 grid gap-2">
        <label htmlFor="sp-message" className="text-sm font-semibold text-foreground">Ihre Anfrage</label>
        <textarea id="sp-message" name="message" rows={4} required
          placeholder="Beschreiben Sie kurz Umfang, Ort und Wunschtermin."
          className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 resize-none" />
      </div>
      <Button type="submit" variant="hero" size="pillLg" className="mt-6 w-full shadow-blue">
        <Send className="size-4" />
        Angebot anfordern
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Kostenlose Besichtigung · Zertifiziert · Schnelle Termine
      </p>
    </form>
  );
}
