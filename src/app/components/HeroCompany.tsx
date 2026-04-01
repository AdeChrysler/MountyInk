"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { getWhatsAppUrl } from "@/app/lib/config";

export default function HeroCompany() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary">

      {/* ── Background depth layers ── */}

      {/* Noise grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* Radial glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,#1A3A6B28_0%,transparent_65%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_15%_65%,#1A3A6B18_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_30%_at_85%_70%,#2E7BFF08_0%,transparent_50%)]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#2E7BFF 1px, transparent 1px), linear-gradient(90deg, #2E7BFF 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-electric/25 to-transparent" />

      {/* Corner brackets */}
      <div className="absolute top-24 left-10 w-14 h-14 border-l border-t border-blue-electric/12 hidden sm:block" />
      <div className="absolute top-24 right-10 w-14 h-14 border-r border-t border-blue-electric/12 hidden sm:block" />
      <div className="absolute bottom-24 left-10 w-14 h-14 border-l border-b border-blue-electric/12 hidden sm:block" />
      <div className="absolute bottom-24 right-10 w-14 h-14 border-r border-b border-blue-electric/12 hidden sm:block" />

      {/* Floating particles */}
      <motion.div
        animate={reduced ? {} : { y: [0, -10, 0], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[38%] left-[22%] w-1.5 h-1.5 rounded-full bg-blue-electric/45"
      />
      <motion.div
        animate={reduced ? {} : { y: [0, 9, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-[62%] right-[28%] w-1 h-1 rounded-full bg-blue-electric/35"
      />
      <motion.div
        animate={reduced ? {} : { y: [0, -7, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute top-[45%] right-[18%] w-1 h-1 rounded-full bg-blue-deep/70"
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 pt-20 max-w-2xl mx-auto">

        {/* Eyebrow */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-blue-electric/40" />
          <span className="text-blue-electric/60 text-[0.6rem] tracking-[0.45em] uppercase font-light">
            Bali, Indonesia
          </span>
          <span className="h-px w-8 bg-blue-electric/40" />
        </motion.div>

        {/* Logo */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="mb-8"
        >
          <Image
            src="/logo.png"
            alt="Mounty Ink — Premium Tattoo Atelier, Bali"
            width={420}
            height={150}
            className="h-24 sm:h-32 md:h-40 w-auto mx-auto drop-shadow-[0_0_48px_rgba(46,123,255,0.18)]"
            priority
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-text-secondary text-base sm:text-lg md:text-xl tracking-[0.18em] uppercase font-light"
        >
          Where Art Meets Skin
        </motion.p>

        {/* Slash divider */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-7 flex justify-center"
        >
          <span className="line-slash" />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-7 text-text-muted text-xs tracking-[0.3em] uppercase"
        >
          Premium Tattoo Atelier &middot; Bali, Indonesia
        </motion.p>

        {/* Description */}
        <motion.p
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7 }}
          className="mt-5 text-text-muted/65 text-sm sm:text-base leading-relaxed max-w-sm mx-auto font-light"
        >
          Bespoke tattoo artistry by world-class artists. From fine line to Japanese traditional — every piece is made for you.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="mt-10 flex items-center justify-center gap-10 sm:gap-14"
        >
          {[
            { value: "500+", label: "Works" },
            { value: "6", label: "Styles" },
            { value: "5★", label: "Rated" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-text-primary text-lg sm:text-xl font-light tracking-wide">
                {stat.value}
              </div>
              <div className="text-text-muted text-[0.58rem] tracking-[0.28em] uppercase mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-7 py-3 bg-blue-electric text-white text-xs tracking-[0.14em] uppercase font-light transition-all duration-300 hover:bg-blue-electric/85 hover:shadow-[0_0_28px_rgba(46,123,255,0.45)]"
          >
            <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Book a Session
          </a>
          <a
            href="#portfolio"
            className="flex items-center gap-2 px-7 py-3 border border-blue-electric/25 text-text-secondary text-xs tracking-[0.14em] uppercase font-light transition-all duration-300 hover:border-blue-electric/55 hover:text-text-primary"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={reduced ? {} : { scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 2.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-blue-electric/40 to-blue-electric origin-top"
      />
    </section>
  );
}
