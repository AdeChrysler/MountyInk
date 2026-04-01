"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../lib/config";

export default function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.8, y: show ? 0 : 20 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-6 right-6 z-50 w-13 h-13 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/20 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300"
      aria-label="Chat on WhatsApp"
      style={{ pointerEvents: show ? "auto" : "none" }}
    >
      <MessageCircle size={22} className="text-white" />
    </motion.a>
  );
}
