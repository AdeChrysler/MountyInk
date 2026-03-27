"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(value / 60));
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Tattoos Completed" },
  { value: 12, suffix: "+", label: "Years in Bali" },
  { value: 3, suffix: "", label: "Master Artists" },
  { value: 100, suffix: "%", label: "Custom Designs" },
];

export default function AnimatedStats() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map((s) => (
        <div key={s.label}>
          <div
            className="text-3xl md:text-4xl font-bold text-[#2E7BFF] mb-1"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            <Counter value={s.value} suffix={s.suffix} />
          </div>
          <div
            className="text-xs tracking-[0.2em] uppercase text-[#C8D0DC]/60"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
