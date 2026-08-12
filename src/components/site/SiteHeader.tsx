import { useEffect, useState } from "react";
import { Menu, Phone, X, ChevronDown, MessageCircle } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";
import { COMPANY, SERVICES } from "@/data/site";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const NAV = [
  { label: "Home", href: "/" },
  { label: "Leistungen", href: "/#leistungen", hasDropdown: true },
  { label: "Einsatzgebiet", href: "/#einsatzgebiet" },
  { label: "Über uns", href: "/#ueber-uns" },
  { label: "Bewertungen", href: "/#bewertungen" },
  { label: "FAQ", href: "/#faq" },
  { label: "Karriere", href: "/karriere" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isCareerPage = location.pathname === "/karriere";
  const useDarkHeader = isCareerPage && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-white shadow-soft"
          : useDarkHeader
            ? "border-b border-white/10 bg-ink/60 backdrop-blur-sm"
            : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-28 max-w-7xl items-center justify-between gap-6 px-5 lg:px-8">

        {/* Logo + DHANSA text */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="DHANSA" className="h-20 w-auto object-contain" />
          <div className="flex flex-col leading-tight">
            <span className={`font-brand text-2xl font-extrabold tracking-tight transition-colors ${scrolled ? "text-foreground" : "text-white"}`}>
              DHANSA
            </span>
            <span className={`text-xs font-medium tracking-wide transition-colors ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              Personal &amp; Dienstleistungen e.K.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      : "text-white/85 hover:text-white"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="size-3.5" />
                </a>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2">
                    <div className="rounded-2xl border border-border bg-white p-2 shadow-xl">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.id}
                          to="/leistungen/$serviceId"
                          params={{ serviceId: s.id }}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-blue-light-section"
                        >
                          <s.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>
                            <span className="block text-sm font-semibold text-foreground">{s.title}</span>
                            <span className="block text-xs text-muted-foreground">{s.kicker}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-2 shrink-0">
          <Button asChild variant="ghost" size="pill"
            className={`hidden md:inline-flex ${scrolled ? "text-foreground" : "text-white hover:bg-white/10"}`}>
            <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4 text-[#25D366]" />
              WhatsApp
            </a>
          </Button>
          <Button asChild variant="hero" size="pill" className="hidden sm:inline-flex shadow-blue">
            <a href={COMPANY.phoneHref}>
              <Phone className="size-4" />
              {COMPANY.phone}
            </a>
          </Button>
          <button
            type="button"
            aria-label="Menü öffnen"
            onClick={() => setOpen((v) => !v)}
            className={`grid size-11 place-items-center rounded-xl border lg:hidden transition-colors ${
              scrolled
                ? "border-border bg-white text-foreground"
                : "border-white/30 bg-white/10 text-white"
            }`}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-white px-5 pb-6 pt-3 lg:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-3.5 text-base font-semibold text-foreground last:border-0"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 border-t border-border pt-3">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Leistungen</p>
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                to="/leistungen/$serviceId"
                params={{ serviceId: s.id }}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-2.5 text-sm font-medium text-muted-foreground hover:text-primary"
              >
                <s.icon className="size-4 text-primary" />
                {s.title}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3">
            <Button asChild variant="hero" size="pill" className="w-full">
              <a href={COMPANY.phoneHref}><Phone className="size-4" />{COMPANY.phone}</a>
            </Button>
            <Button asChild variant="whatsapp" size="pill" className="w-full">
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />WhatsApp kontaktieren
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
