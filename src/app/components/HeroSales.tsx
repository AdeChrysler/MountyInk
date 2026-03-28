"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HeroSales() {
  const reduced = useReducedMotion();
  const animate = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
        };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-sales.png"
          alt="Tattoo artist at work in Mounty Ink studio"
          fill
          priority
          sizes="100vw"
          className="object-cover img-crop"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/70 via-bg-primary/40 to-bg-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#05050790_70%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl pt-20">
        <motion.p
          {...animate(0.3)}
          className="text-blue-electric text-xs tracking-[0.35em] uppercase font-medium mb-6"
        >
          Premium Tattoo Studio &middot; Bali
        </motion.p>

        <motion.h1
          {...animate(0.5)}
          className="font-[family-name:var(--font-heading)] text-[2.75rem] leading-[1] sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-text-primary tracking-tight"
        >
          Your Story,
          <br />
          <span className="text-blue-deep">Inked</span> in Paradise
        </motion.h1>

        <motion.p
          {...animate(0.7)}
          className="mt-7 text-text-secondary text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
        >
          Where world-class artists transform your vision into wearable
          masterpieces — in the heart of Bali.
        </motion.p>

        <motion.div
          {...animate(0.9)}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#booking"
            className="group px-10 py-4 bg-blue-electric text-white font-semibold tracking-[0.12em] uppercase text-sm hover:bg-blue-deep transition-all duration-300 animate-glow-pulse"
          >
            Book Your Session
          </a>
          <a
            href="#portfolio"
            className="px-10 py-4 border border-text-muted/25 text-text-primary font-semibold tracking-[0.12em] uppercase text-sm hover:border-blue-electric hover:text-blue-electric transition-all duration-300"
          >
            View Gallery
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={reduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted/40 text-[0.6rem] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={reduced ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-text-muted/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
