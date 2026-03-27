"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const portfolioItems = [
  {
    src: "https://s3.zenova.id/ads/monty-ink/portfolio/mandala-1.png",
    style: "Mandala",
    title: "Sacred Circle",
    category: "Mandala",
    featured: true,
  },
  {
    src: "https://s3.zenova.id/ads/monty-ink/portfolio/blackwork-1.png",
    style: "Blackwork",
    title: "Shadow Geometry",
    category: "Blackwork",
    featured: true,
  },
  {
    src: "https://s3.zenova.id/ads/monty-ink/portfolio/fineline-1.png",
    style: "Fine Line",
    title: "Botanical Whisper",
    category: "Fine Line",
    featured: false,
  },
  {
    src: "https://s3.zenova.id/ads/monty-ink/portfolio/balinese-1.png",
    style: "Balinese",
    title: "Barong Legacy",
    category: "Balinese",
    featured: false,
  },
  {
    src: "https://s3.zenova.id/ads/monty-ink/portfolio/realism-1.png",
    style: "Realism",
    title: "Living Detail",
    category: "Realism",
    featured: false,
  },
  {
    src: "https://s3.zenova.id/ads/monty-ink/portfolio/geometric-1.png",
    style: "Geometric",
    title: "Sacred Form",
    category: "Geometric",
    featured: false,
  },
  {
    src: "https://s3.zenova.id/ads/monty-ink/portfolio/mandala-2.png",
    style: "Mandala",
    title: "Infinite Pattern",
    category: "Mandala",
    featured: false,
  },
  {
    src: "https://s3.zenova.id/ads/monty-ink/portfolio/blackwork-2.png",
    style: "Blackwork",
    title: "Dark Architecture",
    category: "Blackwork",
    featured: false,
  },
];

const CATEGORIES = [
  "All",
  "Mandala",
  "Fine Line",
  "Blackwork",
  "Balinese",
  "Realism",
  "Geometric",
];

function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
}: {
  item: (typeof portfolioItems)[0];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center lightbox-enter"
      style={{ background: "rgba(10,10,15,0.96)" }}
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 text-[#C8D0DC]/60 hover:text-[#F5F5F7] text-4xl transition-colors leading-none w-10 h-10 flex items-center justify-center"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        ×
      </button>

      <button
        className="absolute left-3 md:left-6 text-[#C8D0DC]/60 hover:text-[#2E7BFF] text-5xl transition-colors p-3 leading-none"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
      >
        ‹
      </button>

      <div
        className="relative w-full max-w-lg mx-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-square">
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 80vw, 500px"
            priority
          />
        </div>
        <div className="mt-4 text-center">
          <p
            className="text-[10px] tracking-[0.3em] uppercase text-[#2E7BFF] mb-1"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {item.style}
          </p>
          <h3
            className="text-lg text-[#F5F5F7] tracking-wide"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            {item.title}
          </h3>
        </div>
      </div>

      <button
        className="absolute right-3 md:right-6 text-[#C8D0DC]/60 hover:text-[#2E7BFF] text-5xl transition-colors p-3 leading-none"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  );
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((i) => i.category === activeCategory);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-4 py-2 text-xs tracking-[0.2em] uppercase transition-all duration-200 min-h-[40px]"
            style={{
              fontFamily: "var(--font-inter)",
              border:
                activeCategory === cat
                  ? "1px solid #2E7BFF"
                  : "1px solid rgba(200,208,220,0.2)",
              color: activeCategory === cat ? "#2E7BFF" : "#C8D0DC",
              background:
                activeCategory === cat
                  ? "rgba(46,123,255,0.1)"
                  : "transparent",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Portfolio grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {filtered.map((item, i) => (
          <div
            key={item.src}
            className={`relative overflow-hidden group cursor-pointer${
              item.featured && activeCategory === "All"
                ? " md:row-span-2"
                : ""
            }`}
            style={{
              aspectRatio: "1/1",
              opacity: 0,
              transform: "translateY(20px)",
              animation: `fadeInUp 0.5s ease ${i * 60}ms both`,
            }}
            onClick={() => setLightboxIndex(i)}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
            />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2"
              style={{ background: "rgba(10,10,15,0.72)" }}
            >
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[#2E7BFF]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {item.style}
              </span>
              <span
                className="text-sm tracking-wide text-[#F5F5F7]"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                {item.title}
              </span>
              <span
                className="text-[10px] tracking-[0.2em] uppercase text-[#C8D0DC]/50 mt-1"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                View ↗
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          item={filtered[lightboxIndex]}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((i) =>
              i === null ? null : (i - 1 + filtered.length) % filtered.length
            )
          }
          onNext={() =>
            setLightboxIndex((i) =>
              i === null ? null : (i + 1) % filtered.length
            )
          }
        />
      )}
    </div>
  );
}
