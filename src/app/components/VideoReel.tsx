"use client";

import { useRef, useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";

const reelVideos = [
  "/videos/reel-07.mp4",
  "/videos/reel-08.mp4",
  "/videos/reel-14.mp4",
  "/videos/reel-20.mp4",
];

function ReelItem({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          videoRef.current?.play();
        } else {
          videoRef.current?.pause();
        }
      },
      { rootMargin: "50px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex-none w-[160px] sm:w-[200px] md:w-[220px] aspect-[9/16] overflow-hidden bg-bg-card border border-divider snap-start"
    >
      {isVisible && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
}

export default function VideoReel() {
  return (
    <section className="py-20 md:py-28 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12">
          <p className="text-blue-electric text-xs tracking-[0.3em] uppercase font-medium mb-4">
            The Process
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-text-primary font-semibold tracking-tight">
            Art in Motion
          </h2>
          <p className="mt-4 text-text-muted text-sm max-w-md mx-auto">
            Every tattoo is a journey. Watch the precision and passion behind our work.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex gap-2 md:gap-3 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {reelVideos.map((src, i) => (
              <ReelItem key={i} src={src} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
