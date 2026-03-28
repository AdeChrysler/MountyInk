"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

const stats = [
  { target: 5, suffix: "+", label: "Years in Bali" },
  { target: 500, suffix: "+", label: "Tattoos Created" },
  { target: 8, suffix: "", label: "Artists" },
  { target: 40, suffix: "+", label: "Countries Served" },
  { target: 5.0, suffix: "", label: "Google Rating", decimal: true },
];

function AnimatedNumber({
  target,
  suffix,
  decimal,
  animate,
}: {
  target: number;
  suffix: string;
  decimal?: boolean;
  animate: boolean;
}) {
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!animate) return;
    if (reduced) {
      setValue(target);
      return;
    }

    const duration = 2000;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [animate, target, reduced]);

  const display = decimal ? value.toFixed(1) : Math.round(value).toString();

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 md:py-20 bg-bg-primary border-y border-divider" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-blue-electric font-bold leading-none">
                <AnimatedNumber
                  target={stat.target}
                  suffix={stat.suffix}
                  decimal={stat.decimal}
                  animate={isInView}
                />
              </p>
              <p className="mt-2 text-text-muted text-[0.6rem] tracking-[0.2em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
