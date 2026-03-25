"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Blackwork", "Mandala", "Fine Line", "Geometric", "Balinese"];

const portfolioItems = [
  {
    id: 1,
    category: "Mandala",
    title: "Sacred Geometry — Spine",
    style: "Mandala · Blackwork",
    image: "https://s3.zenova.id/ads/monty-ink/brand/v2/ig-post-1",
  },
  {
    id: 2,
    category: "Blackwork",
    title: "Dark Floral Sleeve",
    style: "Blackwork · Neo-Traditional",
    image: "https://s3.zenova.id/ads/monty-ink/brand/v2/ig-post-2",
  },
  {
    id: 3,
    category: "Fine Line",
    title: "Minimal Botanical",
    style: "Fine Line · Illustrative",
    image: "https://s3.zenova.id/ads/monty-ink/brand/v2/ig-post-3",
  },
  {
    id: 4,
    category: "Geometric",
    title: "Mandala Sternum",
    style: "Geometric · Ornamental",
    image: "https://s3.zenova.id/ads/monty-ink/brand/v2/ig-post-4",
  },
  {
    id: 5,
    category: "Balinese",
    title: "Barong Guardian",
    style: "Balinese Traditional",
    image: "https://s3.zenova.id/ads/monty-ink/brand/v2/ig-post-5",
  },
  {
    id: 6,
    category: "Mandala",
    title: "Lotus Mandala — Back",
    style: "Mandala · Dotwork",
    image: "https://s3.zenova.id/ads/monty-ink/brand/v2/ig-post-6",
  },
];

function PlaceholderImage({ index, title }: { index: number; title: string }) {
  const gradients = [
    "from-[#0D2244] via-[#1A3A6B] to-[#0A0A0F]",
    "from-[#0A0A0F] via-[#0D2244] to-[#1A3A6B]",
    "from-[#1A3A6B] via-[#0D2244] to-[#0A0A0F]",
    "from-[#0D2244] via-[#0A0A0F] to-[#2E7BFF]/20",
    "from-[#0A0A0F] via-[#1A3A6B] to-[#0D2244]",
    "from-[#2E7BFF]/10 via-[#0D2244] to-[#0A0A0F]",
  ];
  const patterns = ["⊕", "◈", "⬡", "⊞", "◉", "⬢"];

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} flex flex-col items-center justify-center`}
    >
      {/* Decorative mandala-like SVG */}
      <svg
        className="w-24 h-24 text-[#2E7BFF]/20 mb-4"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="0.5" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1="50"
            y1="5"
            x2="50"
            y2="95"
            stroke="currentColor"
            strokeWidth="0.3"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
          <circle
            key={angle}
            cx="50"
            cy="15"
            r="2"
            fill="currentColor"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
      </svg>
      <p className="text-3xl text-[#2E7BFF]/30">{patterns[index % patterns.length]}</p>
      <p className="text-xs text-[#C8D0DC]/20 mt-2 tracking-widest" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
        {title}
      </p>
    </div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: "radial-gradient(ellipse at 20% 50%, #0D2244 0%, transparent 60%)" }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-4"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            // 02 — Portfolio
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#F5F5F7] mb-6"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            The Work Speaks
          </h2>
          <div className="w-16 h-px bg-[#2E7BFF] mb-8" />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#2E7BFF] text-[#0A0A0F]"
                  : "border border-[#1A3A6B]/50 text-[#C8D0DC]/50 hover:border-[#2E7BFF]/50 hover:text-[#C8D0DC]"
              }`}
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="group relative aspect-square bg-[#0D2244]/50 border border-[#1A3A6B]/30 overflow-hidden hover:border-[#2E7BFF]/50 transition-all duration-500"
            >
              {/* Placeholder image with brand aesthetic */}
              <PlaceholderImage index={idx} title={item.title} />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#0A0A0F]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                <h3
                  className="text-[#F5F5F7] font-bold text-center mb-2"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-xs text-[#2E7BFF] tracking-widest"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  {item.style}
                </p>
              </div>

              {/* Category tag */}
              <div className="absolute top-4 left-4">
                <span
                  className="text-[10px] tracking-[0.2em] uppercase text-[#2E7BFF] bg-[#0A0A0F]/70 px-2 py-1"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
          <p
            className="text-sm text-[#C8D0DC]/50 mb-4"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            See the full collection on Instagram
          </p>
          <a
            href="https://instagram.com/montyink.bali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm tracking-[0.15em] uppercase text-[#C8D0DC] border border-[#1A3A6B]/50 px-6 py-3 hover:border-[#2E7BFF] hover:text-[#2E7BFF] transition-all"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @montyink.bali
          </a>
        </div>
      </div>
    </section>
  );
}
