import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { PartnerMarquee } from "@/components/site/PartnerMarquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Strengths, Process } from "@/components/site/Strengths";
import { Einsatzgebiet } from "@/components/site/Einsatzgebiet";
import { Testimonials } from "@/components/site/Testimonials";
import { Jobs } from "@/components/site/Jobs";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

const TITLE = "DHANSA Hamburg | Galabau, Tiefbau, Umzüge, Winterdienst, Personal & Gebäudereinigung";
const DESCRIPTION =
  "DHANSA Personal & Dienstleistungen e.K. aus Hamburg: Galabau, Tiefbau & Erdarbeiten, Umzüge & Entrümpelung, Winterdienst & Hausmeisterservice, Personal sowie Gebäudereinigung — alles aus einer Hand.";

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
        <PartnerMarquee />
        <About />
        <Einsatzgebiet />
        <Services />
        <Strengths />
        <Process />
        <Testimonials />
        <Jobs />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
