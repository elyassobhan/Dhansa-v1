import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Process, Strengths } from "@/components/site/Strengths";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "DHANSA Hamburg | Personal, Reinigung, Logistik & Galabau";
const DESCRIPTION =
  "DHANSA Personal & Dienstleistungen e.K. aus Hamburg: Arbeitnehmerüberlassung, Transport & Logistik, Gebäudereinigung, Garten- & Landschaftsbau, Tiefbau und Hausmeisterservice.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <Strengths />
        <Process />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
