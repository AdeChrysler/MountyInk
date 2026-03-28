"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Palette, ShieldCheck, Sparkles, MapPin } from "lucide-react";

const highlights = [
  { icon: Palette, label: "Custom Designs Only" },
  { icon: ShieldCheck, label: "International Hygiene Standards" },
  { icon: Sparkles, label: "Premium Certified Inks" },
  { icon: MapPin, label: "Located in Bali" },
];

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  return (
    <section className="border-y border-divider bg-bg-secondary/40" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 py-7 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={reduced ? {} : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-3 justify-center"
            >
              <item.icon
                size={16}
                className="text-blue-electric shrink-0"
                strokeWidth={1.5}
              />
              <p className="text-text-secondary text-[0.7rem] tracking-[0.08em] uppercase leading-tight">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
