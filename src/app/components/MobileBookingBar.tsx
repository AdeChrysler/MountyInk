"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { siteConfig, getWhatsAppUrl } from "../lib/config";

export default function MobileBookingBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      animate={{ y: show ? 0 : 100 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
      style={{ pointerEvents: show ? "auto" : "none" }}
    >
      <div className="bg-bg-primary/95 backdrop-blur-xl border-t border-divider px-4 py-3 flex gap-3">
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="flex-1 py-3 bg-blue-electric text-white text-center text-xs font-semibold tracking-[0.12em] uppercase"
        >
          Get in Touch
        </a>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-5 border border-divider text-text-primary text-center text-xs font-semibold tracking-[0.12em] uppercase"
        >
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
