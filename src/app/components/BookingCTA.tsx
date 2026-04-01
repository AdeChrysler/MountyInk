import ScrollReveal from "./ScrollReveal";
import { siteConfig, getWhatsAppUrl } from "../lib/config";

export default function BookingCTA() {
  return (
    <section id="booking" className="py-16 md:py-28 relative overflow-hidden">
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
            Start your journey today. Reach out and let&apos;s create something
            you&apos;ll carry forever.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="px-10 py-4 bg-white text-blue-deep font-semibold tracking-[0.12em] uppercase text-sm hover:bg-text-primary transition-colors duration-300"
            >
              Get in Touch
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-white/25 text-white font-semibold tracking-[0.12em] uppercase text-sm hover:border-white/60 hover:bg-white/5 transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>

          <p className="mt-8 text-white/30 text-[0.65rem] tracking-[0.15em] uppercase">
            Free consultation &middot; No commitment
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
