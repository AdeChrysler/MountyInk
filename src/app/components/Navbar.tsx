"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  variant?: "sales" | "company";
}

const salesLinks = [
  { label: "Gallery", href: "#portfolio" },
  { label: "Artists", href: "#artists" },
  { label: "Styles", href: "#styles" },
  { label: "FAQ", href: "#faq" },
];

const companyLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Vision", href: "#vision" },
  { label: "Team", href: "#team" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ variant = "sales" }: NavbarProps) {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = variant === "sales" ? salesLinks : companyLinks;
  const ctaLabel = variant === "sales" ? "Book Now" : "Inquire";
  const ctaHref = variant === "sales" ? "#booking" : "#contact";

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setScrolled(currentY > 60);

    if (currentY < 60) {
      setVisible(true);
      return;
    }

    // Track scroll direction via stored value
    const prevY = Number(document.documentElement.dataset.scrollY || "0");
    setVisible(currentY < prevY || currentY < 200);
    document.documentElement.dataset.scrollY = String(currentY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass py-3" : "py-5 bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-10 shrink-0">
            <Image
              src="/logo.png"
              alt="Mounty Ink — Tattoo Studio Bali"
              width={140}
              height={48}
              className="h-9 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-text-primary text-[0.8rem] tracking-[0.15em] uppercase transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-blue-electric after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href={ctaHref}
              className="ml-2 px-7 py-2.5 bg-blue-electric text-white text-[0.75rem] font-semibold tracking-[0.15em] uppercase hover:bg-blue-deep transition-colors duration-300"
            >
              {ctaLabel}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-10 text-text-primary p-2 -mr-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-bg-primary/98 backdrop-blur-2xl flex flex-col items-center justify-center"
            role="dialog"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col items-center gap-7">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="font-[family-name:var(--font-heading)] text-3xl text-text-primary hover:text-blue-electric transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={ctaHref}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + links.length * 0.06 }}
                className="mt-4 px-12 py-3.5 bg-blue-electric text-white text-sm font-semibold tracking-[0.15em] uppercase"
              >
                {ctaLabel}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
