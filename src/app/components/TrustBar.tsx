"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Star, Users, Award, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Star, value: "5.0", label: "Google Rating" },
  { icon: Award, value: "8+", label: "Expert Artists" },
  { icon: ShieldCheck, value: "100%", label: "Sterilized" },
];

export default function TrustBar() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduced = useReducedMotion();

  return (
    <section className="border-y border-divider bg-bg-secondary/40" ref={ref}>
      <div className="max-w-6xl mx-auto px-6 py-7 md:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduced ? {} : { opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-3 justify-center"
            >
              <stat.icon
                size={18}
                className="text-blue-electric shrink-0"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-text-primary font-semibold text-base leading-none">
                  {stat.value}
                </p>
                <p className="text-text-muted text-[0.65rem] tracking-[0.12em] uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
