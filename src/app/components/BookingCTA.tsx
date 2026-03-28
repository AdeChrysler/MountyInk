import ScrollReveal from "./ScrollReveal";

export default function BookingCTA() {
  return (
    <section id="booking" className="py-24 md:py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-cta" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(46,123,255,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <ScrollReveal>
          <p className="text-white/50 text-xs tracking-[0.35em] uppercase font-medium mb-5">
            Ready?
          </p>

          <h2 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-semibold leading-[1.05] tracking-tight">
            Get Inked
            <br />
            in Bali
          </h2>

          <p className="mt-6 text-white/60 text-base md:text-lg max-w-md mx-auto leading-relaxed">
            Book your consultation today. Walk in with an idea, walk out with a masterpiece you&apos;ll carry forever.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="px-10 py-4 bg-white text-blue-deep font-semibold tracking-[0.12em] uppercase text-sm hover:bg-text-primary transition-colors duration-300"
            >
              Book a Session
            </a>
            <a
              href="https://wa.me/6281234567890?text=Hi%20Mounty%20Ink!%20I'd%20like%20to%20book%20a%20session."
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/25 text-white font-semibold tracking-[0.12em] uppercase text-sm hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>

          <p className="mt-8 text-white/30 text-[0.65rem] tracking-[0.15em] uppercase">
            Free consultation &middot; No commitment &middot; Reply within 2 hours
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
