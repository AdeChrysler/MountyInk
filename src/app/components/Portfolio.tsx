"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { siteConfig, getWhatsAppUrl } from "../lib/config";
import { X } from "lucide-react";

const filters = ["All", "Realism", "Japanese", "Balinese", "Black & Grey"];

const portfolioItems = [
  {
    id: 1,
    category: "Japanese",
    src: "/images/portfolio-japanese-real.jpg",
    alt: "Japanese dragon koi half-sleeve tattoo in vibrant red and orange",
    title: "Dragon Koi Rising",
    story: "A bold tribute to Japanese Irezumi tradition — this half-sleeve captures the mythical koi mid-transformation into a dragon. Vivid reds and burnt oranges blaze against black wave work. Over 20 hours of dedication.",
  },
  {
    id: 2,
    category: "Realism",
    src: "/images/portfolio-realism-real.jpg",
    alt: "Egyptian Bastet cat and scarab realistic forearm tattoo",
    title: "Guardian of the Nile",
    story: "Egyptian mythology brought to life on skin. The goddess Bastet watches with piercing blue eyes while a sacred scarab anchors the piece below. Hyper-realistic detail in every scale and shadow.",
  },
  {
    id: 3,
    category: "Black & Grey",
    src: "/images/portfolio-blackgrey-real.jpg",
    alt: "Zeus and eagle Greek mythology full sleeve tattoo",
    title: "Wrath of Olympus",
    story: "Zeus commands the sky as his eagle descends in fury — a full sleeve that took three sessions to complete. Every muscle fiber, every feather rendered in photorealistic black and grey. Pure power on skin.",
  },
  {
    id: 4,
    category: "Balinese",
    src: "/images/portfolio-balinese-real.jpg",
    alt: "Full sleeve tattoo with Balinese Barong mural backdrop",
    title: "Soul of the Island",
    story: "Where modern realism meets ancient Bali. A portrait sleeve featuring sacred Barong imagery in the background — captured in front of our studio's hand-painted mural. Culture meets craft.",
  },
  {
    id: 5,
    category: "Realism",
    src: "/images/portfolio-realism-real-02.jpg",
    alt: "Lion with roses and roman numerals full sleeve tattoo",
    title: "King & Time",
    dark: true,
    story: "A roaring lion guards a vintage timepiece wrapped in roses — each element symbolizing strength, beauty, and the passage of time. Roman numerals mark a date close to the client's heart. A full sleeve of meaning.",
  },
  {
    id: 6,
    category: "Balinese",
    src: "/images/portfolio-balinese-real-02.jpg",
    alt: "Full back Balinese Barong demon mask tattoo masterpiece",
    title: "Barong Throne",
    story: "Our crown jewel — a full back piece depicting the sacred Barong in breathtaking detail. Over 40 hours across multiple sessions. Sacred geometry, ornamental patterns, and raw spiritual energy from shoulder to waist.",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<typeof portfolioItems[0] | null>(null);

  const filtered =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <>
      <section id="portfolio" className="py-16 md:py-28 bg-bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionHeading
            subtitle="Our Work"
            title="Portfolio"
            description="Every piece has a story. Tap to discover the art, the meaning, and the craft behind each tattoo."
          />

          {/* Filter Bar */}
          <ScrollReveal className="flex flex-wrap justify-center gap-2 md:gap-2.5 mb-10 md:mb-14">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`px-4 md:px-6 py-2 md:py-2.5 text-[0.65rem] md:text-[0.7rem] tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer rounded-full ${
                  active === filter
                    ? "bg-blue-electric text-white"
                    : "border border-divider text-text-muted hover:border-blue-electric/50 hover:text-text-secondary"
                }`}
              >
                {filter}
              </button>
            ))}
          </ScrollReveal>

          {/* Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4"
            >
              {filtered.map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 0.07}>
                  <div
                    onClick={() => setSelected(item)}
                    className="group relative overflow-hidden cursor-pointer rounded-lg aspect-[3/4]"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className={`object-cover group-hover:scale-105 transition-transform duration-700 ${
                        item.dark
                          ? "brightness-[0.55] contrast-[1.15] saturate-[0.85]"
                          : "img-crop"
                      }`}
                      loading="lazy"
                    />

                    {/* Logo Watermark */}
                    <div className="absolute bottom-3 right-3 z-10 opacity-15 pointer-events-none">
                      <Image
                        src="/logo.png"
                        alt=""
                        width={50}
                        height={20}
                        className="object-contain"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-bg-primary/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-1 px-4 rounded-lg">
                      <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl text-text-primary text-center">
                        {item.title}
                      </p>
                      <p className="text-blue-electric text-[0.6rem] tracking-[0.2em] uppercase mt-1">
                        {item.category}
                      </p>
                      <span className="mt-2 w-6 h-px bg-blue-electric/60" />
                      <p className="text-text-muted text-[0.6rem] tracking-wider mt-2 uppercase">
                        Tap to read story
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </motion.div>
          </AnimatePresence>

          <ScrollReveal className="text-center mt-10 md:mt-14">
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 border border-blue-electric/40 text-blue-electric tracking-[0.12em] uppercase text-[0.7rem] font-medium rounded-full hover:bg-blue-electric hover:text-white transition-all duration-300"
            >
              View Full Gallery
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 bg-bg-card border border-divider rounded-lg overflow-hidden max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Image */}
              <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[500px]">
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover ${
                    selected.dark
                      ? "brightness-[0.55] contrast-[1.15] saturate-[0.85]"
                      : "img-crop"
                  }`}
                  priority
                />
                {/* Logo Watermark */}
                <div className="absolute bottom-4 right-4 opacity-20 pointer-events-none">
                  <Image src="/logo.png" alt="" width={60} height={24} className="object-contain" aria-hidden="true" />
                </div>
              </div>

              {/* Story */}
              <div className="p-6 md:p-10 flex flex-col justify-center overflow-y-auto">
                <p className="text-blue-electric text-[0.6rem] tracking-[0.25em] uppercase font-medium mb-3">
                  {selected.category}
                </p>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-text-primary mb-4 leading-tight">
                  {selected.title}
                </h3>
                <div className="w-8 h-px bg-blue-electric/40 mb-5" />
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {selected.story}
                </p>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-block px-8 py-3 bg-blue-electric text-white text-[0.7rem] font-semibold tracking-[0.12em] uppercase rounded-full hover:bg-blue-deep transition-colors self-start"
                >
                  Book This Style
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
