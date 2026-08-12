const PARTNER_MARKS = [
  { src: "/logo/logo-prowin-international-rgb.jpg", alt: "PROWIN" },
  { src: "/logo/Kaercher_Logo.png", alt: "Kärcher" },
  { src: "/logo/bg-bau-logo.jpeg", alt: "BG Bau" },
  { src: "/logo/handelskammer.png", alt: "Handelskammer Hamburg" },
  { src: "/logo/handwerkskammer-hamburg-logo.webp", alt: "Handwerkskammer Hamburg" },
  { src: "/logo/Bosch.webp", alt: "Bosch" },
  { src: "/logo/makita_logo.webp", alt: "Makita" },
];

function LogoBadge({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-[92px] min-w-[180px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 shadow-[0_10px_25px_-18px_rgba(15,23,42,0.35)] transition-transform duration-200 hover:-translate-y-0.5 sm:min-w-[220px]">
      <img
        src={src}
        alt={alt}
        className="max-h-[52px] w-auto max-w-[160px] object-contain opacity-90 sm:max-h-[60px] sm:max-w-[180px]"
      />
    </div>
  );
}

export function PartnerMarquee() {
  const logos = [...PARTNER_MARKS, ...PARTNER_MARKS];

  return (
    <section className="relative w-full overflow-hidden border-y border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eff5ff_100%)] py-16 sm:py-20">
      <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#f8fbff] to-transparent" />
      <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#f8fbff] to-transparent" />

      <div className="relative w-full px-3 sm:px-5 lg:px-8">
        <div className="mx-auto mb-9 max-w-5xl text-center">
          <p className="eyebrow">Vertrauen aus Hamburg &amp; Umgebung</p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Zuverlässig im Einsatz — in der Region und darüber hinaus.
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white/80 p-3 shadow-soft backdrop-blur-sm sm:p-4">
          <div className="flex w-max animate-marquee gap-4 sm:gap-5">
            {logos.map((logo, idx) => (
              <LogoBadge key={`${logo.alt}-${idx}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
