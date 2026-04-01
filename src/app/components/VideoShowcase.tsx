"use client";

import { useRef, useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { Play } from "lucide-react";

const videos = [
  { src: "/videos/reel-01.mp4", label: "Tattoo Session" },
  { src: "/videos/reel-02.mp4", label: "Artist at Work" },
  { src: "/videos/reel-03.mp4", label: "Detail Work" },
  { src: "/videos/reel-04.mp4", label: "Shading Process" },
  { src: "/videos/reel-05.mp4", label: "Line Work" },
  { src: "/videos/reel-06.mp4", label: "Studio Session" },
];

function VideoCard({ src, label, index }: { src: string; label: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "100px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ScrollReveal delay={index * 0.06}>
      <div
        ref={containerRef}
        className="group relative aspect-[9/16] overflow-hidden bg-bg-card border border-divider cursor-pointer"
        onMouseEnter={() => videoRef.current?.play()}
        onMouseLeave={() => {
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }}
        onTouchStart={() => videoRef.current?.play()}
      >
        {isVisible && (
          <video
            ref={videoRef}
            src={src}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        )}
        {/* Play icon */}
        <div className="absolute inset-0 flex items-center justify-center bg-bg-primary/20 group-hover:bg-transparent transition-all duration-500">
          <div className="w-9 h-9 md:w-10 md:h-10 border border-white/30 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
            <Play size={14} className="text-white/70 ml-0.5" fill="currentColor" />
          </div>
        </div>
        {/* Label */}
        <div className="absolute bottom-0 left-0 right-0 p-2.5 md:p-3 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-text-primary text-[0.6rem] md:text-[0.65rem] tracking-[0.12em] uppercase">
            {label}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function VideoShowcase() {
  return (
    <section className="py-20 md:py-28 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          subtitle="Behind the Needle"
          title="Watch Us Work"
          description="Real sessions, real artistry. See the craft behind every piece."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
          {videos.map((video, i) => (
            <VideoCard key={i} src={video.src} label={video.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
