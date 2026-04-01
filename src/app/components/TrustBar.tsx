"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ShieldCheck, Sparkles, Award } from "lucide-react";

const highlights = [
  { icon: Star, label: "5-Star Experience", accent: true },
  { icon: ShieldCheck, label: "Sterile & Safe" },
  { icon: Sparkles, label: "Custom Art Only" },
  { icon: Award, label: "Premium Certified Inks" },
];

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="border-y border-divider bg-bg-secondary/40" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 py-7 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex items-center gap-3 justify-center"
            >
              {item.accent ? (
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={11} className="text-blue-electric fill-blue-electric" />
                  ))}
                </div>
              ) : (
                <item.icon size={16} className="text-blue-electric shrink-0" strokeWidth={1.5} />
              )}
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
