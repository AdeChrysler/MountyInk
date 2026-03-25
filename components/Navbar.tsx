"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Services", href: "#services" },
    { label: "Studio", href: "#studio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0A0A0F]/95 backdrop-blur-md border-b border-[#1A3A6B]/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <Image
                src="https://s3.zenova.id/ads/monty-ink/brand/v10/v10-needle-rose-bali.png"
                alt="Monty Ink"
                fill
                className="object-contain"
              />
            </div>
            <span
              className="text-sm tracking-[0.25em] uppercase text-[#C8D0DC] group-hover:text-[#2E7BFF] transition-colors"
              style={{ fontFamily: "var(--font-cinzel), serif" }}
            >
              Monty Ink
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs tracking-[0.2em] uppercase text-[#C8D0DC]/70 hover:text-[#2E7BFF] transition-colors"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-xs tracking-[0.15em] uppercase px-5 py-2 border border-[#2E7BFF] text-[#2E7BFF] hover:bg-[#2E7BFF] hover:text-[#0A0A0F] transition-all duration-300"
              style={{ fontFamily: "var(--font-cinzel), serif" }}
            >
              Begin Your Piece
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-[#C8D0DC] transition-all ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block w-6 h-px bg-[#C8D0DC] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-[#C8D0DC] transition-all ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden pb-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-[0.2em] uppercase text-[#C8D0DC]/70 hover:text-[#2E7BFF] transition-colors"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-[0.15em] uppercase px-5 py-2.5 border border-[#2E7BFF] text-[#2E7BFF] text-center hover:bg-[#2E7BFF] hover:text-[#0A0A0F] transition-all"
              style={{ fontFamily: "var(--font-cinzel), serif" }}
            >
              Begin Your Piece
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
