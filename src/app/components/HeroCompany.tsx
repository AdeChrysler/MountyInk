"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function HeroCompany() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,#1A3A6B12_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,#2E7BFF06_0%,transparent_40%)]" />

      <div className="relative z-10 text-center px-6 pt-20">
        {/* Logo */}
        <motion.div
          initial={reduced ? {} : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <Image
            src="/logo.png"
            alt="Mounty Ink — Premium Tattoo Atelier, Bali"
            width={420}
            height={150}
            className="h-24 sm:h-32 md:h-40 w-auto mx-auto"
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
      </div>

      {/* Scroll line */}
      <motion.div
        initial={reduced ? {} : { scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 2.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-blue-electric/40 to-blue-electric origin-top"
      />
    </section>
  );
}
