"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "../lib/config";

const filters = ["All", "Realism", "Japanese", "Balinese", "Black & Grey"];

const portfolioItems = [
  { id: 1, category: "Japanese", aspect: "aspect-[3/4]", src: "/images/portfolio-japanese-real.jpg", alt: "Japanese dragon koi half-sleeve tattoo in vibrant red and orange" },
  { id: 2, category: "Realism", aspect: "aspect-[3/4]", src: "/images/portfolio-realism-real.jpg", alt: "Egyptian Bastet cat and scarab realistic forearm tattoo in black and grey" },
  { id: 3, category: "Black & Grey", aspect: "aspect-[3/4]", src: "/images/portfolio-blackgrey-real.jpg", alt: "Zeus and eagle Greek mythology full sleeve tattoo in black and grey" },
  { id: 4, category: "Balinese", aspect: "aspect-[3/4]", src: "/images/portfolio-balinese-real.jpg", alt: "Full sleeve tattoo with Balinese Barong mural backdrop" },
  { id: 5, category: "Realism", aspect: "aspect-[3/4]", src: "/images/portfolio-realism-real-02.jpg", alt: "Lion with roses and roman numerals full sleeve tattoo" },
  { id: 6, category: "Balinese", aspect: "aspect-[3/4]", src: "/images/portfolio-balinese-real-02.jpg", alt: "Full back Balinese Barong demon mask tattoo masterpiece" },
  { id: 7, category: "Black & Grey", aspect: "aspect-[3/4]", src: "/images/portfolio-blackgrey-real-02.jpg", alt: "Phoenix eagle chest piece tattoo in black and grey" },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="py-16 md:py-28 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Our Work"
          title="Portfolio"
          description="Each piece tells a story. Curated selections from our finest work across every style."
        />

        {/* Filter Bar */}
        <ScrollReveal className="flex flex-wrap justify-center gap-1.5 md:gap-2 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-3 md:px-5 py-1.5 md:py-2 text-[0.7rem] tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${
                active === filter
                  ? "bg-blue-electric text-white"
                  : "border border-divider text-text-muted hover:border-blue-electric/50 hover:text-text-secondary"
              }`}
            >
              {filter}
            </button>
          ))}
        </ScrollReveal>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-3 [&>*]:mb-3"
          >
            {filtered.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.07}>
                <div
                  className={`group relative overflow-hidden cursor-pointer break-inside-avoid ${item.aspect}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover img-crop group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />

                  {/* Logo Watermark */}
                  <div className="absolute bottom-3 right-3 z-10 opacity-20 pointer-events-none">
                    <Image
                      src="/logo.png"
                      alt=""
                      width={60}
                      height={24}
                      className="object-contain"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-2">
                    <p className="text-blue-electric text-[0.65rem] tracking-[0.25em] uppercase font-medium">
                      {item.category}
                    </p>
                    <span className="mt-2 w-8 h-px bg-blue-electric" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>

        <ScrollReveal className="text-center mt-14">
          <a
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-blue-electric/60 text-blue-electric tracking-[0.12em] uppercase text-[0.75rem] font-medium hover:bg-blue-electric hover:text-white transition-all duration-300"
          >
            View Full Gallery
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
