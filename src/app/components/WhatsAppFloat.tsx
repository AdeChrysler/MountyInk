"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="https://wa.me/6281234567890?text=Hi%20Mounty%20Ink!%20I'd%20like%20to%20book%20a%20tattoo%20session."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-50 w-13 h-13 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={22} className="text-white" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
