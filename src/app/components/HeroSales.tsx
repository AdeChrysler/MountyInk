"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { getWhatsAppUrl } from "../lib/config";

export default function HeroSales() {
  const anim = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Video background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/portfolio-balinese-real-02.jpg"
          className="w-full h-full object-cover img-crop"
        >
          <source src="/videos/reel-02.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Fallback image for no-video support */}
      <noscript>
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/portfolio-balinese-real-02.jpg"
            alt="Full back Balinese Barong tattoo — Mounty Ink portfolio showcase"
            fill
            priority
            sizes="100vw"
            className="object-cover img-crop"
          />
        </div>
      </noscript>

      {/* Overlay gradients for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/70 via-bg-primary/30 to-bg-primary/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#00000066_80%)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl pt-20">
        <motion.p
          {...anim(0.3)}
          className="text-blue-electric text-xs tracking-[0.35em] uppercase font-medium mb-6"
        >
          Premium Tattoo Studio &middot; Bali
        </motion.p>

        <motion.h1
          {...anim(0.5)}
          className="font-[family-name:var(--font-heading)] text-[2.75rem] leading-[1] sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-text-primary tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.8)]"
        >
          Your Story,
          <br />
          <span className="text-blue-electric">Inked</span> in Paradise
        </motion.h1>

        <motion.p
          {...anim(0.7)}
          className="mt-7 text-text-secondary text-base sm:text-lg md:text-xl max-w-xl mx-auto leading-relaxed"
        >
          Where world-class artists transform your vision into wearable
          masterpieces — in the heart of Bali.
        </motion.p>

        <motion.div
          {...anim(0.9)}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 sm:px-10 py-4 bg-blue-electric text-white font-semibold tracking-[0.12em] uppercase text-sm rounded-full hover:bg-blue-deep transition-all duration-300 animate-glow-pulse"
          >
            Book via WhatsApp
          </a>
          <a
            href="#portfolio"
            className="px-6 sm:px-10 py-4 border border-text-muted/25 text-text-primary font-semibold tracking-[0.12em] uppercase text-sm rounded-full hover:border-blue-electric hover:text-blue-electric transition-all duration-300"
          >
            Explore Our Work
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted/40 text-[0.6rem] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-text-muted/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
