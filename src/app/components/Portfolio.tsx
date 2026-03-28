"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const filters = ["All", "Realism", "Fine Line", "Balinese", "Black & Grey", "Color"];

const portfolioItems = [
  { id: 1, category: "Realism", aspect: "aspect-[3/4]", label: "Photorealistic portrait — black & grey" },
  { id: 2, category: "Fine Line", aspect: "aspect-[4/3]", label: "Botanical fine line — forearm" },
  { id: 3, category: "Balinese", aspect: "aspect-square", label: "Barong mandala — upper arm" },
  { id: 4, category: "Black & Grey", aspect: "aspect-[3/4]", label: "Lion chest piece — heavy shading" },
  { id: 5, category: "Color", aspect: "aspect-[4/3]", label: "Watercolor hummingbird — shoulder" },
  { id: 6, category: "Balinese", aspect: "aspect-square", label: "Sacred geometry dotwork — hand" },
  { id: 7, category: "Realism", aspect: "aspect-[3/4]", label: "Nature scene — half sleeve" },
  { id: 8, category: "Fine Line", aspect: "aspect-[4/3]", label: "Minimalist wave — inner wrist" },
  { id: 9, category: "Color", aspect: "aspect-square", label: "Japanese koi — half sleeve" },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === active);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Our Work"
          title="Portfolio"
          description="Each piece tells a story. Curated selections from our finest work across every style."
        />

        {/* Filter Bar */}
        <ScrollReveal className="flex flex-wrap justify-center gap-2 md:gap-3 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-4 md:px-5 py-2 text-[0.7rem] tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${
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
            className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4"
          >
            {filtered.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.07}>
                <div
                  className={`group relative overflow-hidden cursor-pointer break-inside-avoid ${item.aspect}`}
                >
                  <div className="img-placeholder w-full h-full">
                    <span>{item.label}</span>
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
            href="#"
            className="inline-block px-8 py-3 border border-blue-electric/60 text-blue-electric tracking-[0.12em] uppercase text-[0.75rem] font-medium hover:bg-blue-electric hover:text-white transition-all duration-300"
          >
            View Full Gallery
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
