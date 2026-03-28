"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const LOGO = "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-needle-rose-bali.png";
const LP_HERO = "https://s3.zenova.id/ads/monty-ink/lp-hero/hero-studio.jpg";

const PORTFOLIO = [
  { label: "Mandala", sub: "Sacred Geometry", img: "https://s3.zenova.id/ads/monty-ink/lp-portfolio/mandala.jpg" },
  { label: "Fine Line", sub: "Delicate Precision", img: "https://s3.zenova.id/ads/monty-ink/lp-portfolio/fineline.jpg" },
  { label: "Realism", sub: "Photo-Perfect Detail", img: "https://s3.zenova.id/ads/monty-ink/lp-portfolio/realism.jpg" },
  { label: "Japanese", sub: "Traditional Irezumi", img: "https://s3.zenova.id/ads/monty-ink/lp-portfolio/japanese.jpg" },
  { label: "Geometric", sub: "Precise Linework", img: "https://s3.zenova.id/ads/monty-ink/lp-portfolio/geometric.jpg" },
  { label: "Blackwork", sub: "Bold & Timeless", img: "https://s3.zenova.id/ads/monty-ink/lp-portfolio/blackwork.jpg" },
];

const WA_LINK = "https://wa.me/6282144441888?text=Hi%20Monty%20Ink%2C%20I%27d%20like%20to%20begin%20my%20piece.";

const reviews = [
  {
    name: "Sarah M.",
    country: "🇦🇺 Australia",
    text: "Absolutely stunning work. Wayan understood my vision immediately and delivered something beyond what I imagined. Worth every rupiah.",
    rating: 5,
  },
  {
    name: "James T.",
    country: "🇬🇧 UK",
    text: "Best tattoo experience of my life. The studio is immaculate, the artists are world-class, and the result speaks for itself.",
    rating: 5,
  },
  {
    name: "Yuki K.",
    country: "🇯🇵 Japan",
    text: "I flew back to Bali specifically for my second piece with Monty Ink. That tells you everything.",
    rating: 5,
  },
  {
    name: "Lucas B.",
    country: "🇩🇪 Germany",
    text: "The consultation was seamless and the final piece exceeded all expectations. True artistry, not just tattooing.",
    rating: 5,
  },
];

const valueProps = [
  {
    icon: "✦",
    title: "Custom Designs Only",
    description: "No flash sheets. No off-the-shelf art. Every tattoo is drawn exclusively for you.",
  },
  {
    icon: "◈",
    title: "Premium Bali Studio",
    description: "Private, air-conditioned space in Seminyak. Relaxed atmosphere, serious craft.",
  },
  {
    icon: "★",
    title: "Award-Winning Artists",
    description: "International tattoo convention recognition. 12+ years of combined Bali experience.",
  },
  {
    icon: "✚",
    title: "Medical-Grade Hygiene",
    description: "Single-use needles, hospital-grade sterilization. Your safety is never compromised.",
  },
];

const faqs = [
  {
    q: "Will a tattoo heal properly in Bali's tropical climate?",
    a: "Yes — with proper aftercare. We provide a full aftercare kit and detailed written instructions. Most fresh tattoos heal well in 2–3 weeks regardless of climate when cared for correctly. We also recommend waiting 48–72 hours before swimming.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend booking at least 5–7 days ahead for custom work, as we need time to draft your design. Walk-ins are welcome for consultations, but confirmed slots require a deposit.",
  },
  {
    q: "Do you require a deposit?",
    a: "Yes — a 30% deposit is required to confirm your appointment. This covers the design time and secures your slot. Deposits are non-refundable but transferable to a rescheduled date with 48+ hours notice.",
  },
  {
    q: "What is the typical price range?",
    a: "Our work starts from IDR 800,000 for small pieces. Larger custom work is priced by complexity and artist time. Contact us via WhatsApp with your idea for a quote — we are always transparent about pricing upfront.",
  },
  {
    q: "Can you accommodate walk-in tourists?",
    a: "Yes, we welcome walk-ins for consultations. However, same-day tattoos are subject to artist availability. For a guaranteed slot, book ahead via WhatsApp.",
  },
];

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function triggerWALead(utm?: string) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", "Lead", { content_name: "WhatsApp CTA", utm_source: utm || "" });
  }
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get("utm_source") || "";
  const utmMedium = params.get("utm_medium") || "";
  const utmCampaign = params.get("utm_campaign") || "";
  const msg = encodeURIComponent(
    `Hi Monty Ink, I'd like to begin my piece.${utmCampaign ? ` (ref: ${utmCampaign})` : ""}`
  );
  window.open(
    `https://wa.me/6282144441888?text=${msg}&utm_source=${utmSource}&utm_medium=${utmMedium}`,
    "_blank"
  );
}

// Scroll reveal hook using IntersectionObserver
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

// Animated number counter hook
function useCounter(target: number, enabled: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!enabled) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(target, Math.round(increment * step));
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, enabled]);
  return count;
}

// Stats with animated counters
function StatItem({ value, label, numericValue, suffix }: {
  value: string;
  label: string;
  numericValue?: number;
  suffix?: string;
}) {
  const { ref, visible } = useReveal();
  const count = useCounter(numericValue ?? 0, visible && !!numericValue);
  const displayValue = numericValue ? `${count}${suffix ?? ""}` : value;

  return (
    <div ref={ref} className={`reveal-item ${visible ? "revealed" : ""}`}>
      <div
        className="text-2xl md:text-4xl font-bold text-[#2E7BFF] mb-1.5"
        style={{ fontFamily: "var(--font-cinzel)", lineHeight: 1.2 }}
      >
        {displayValue}
      </div>
      <div
        className="text-[10px] md:text-xs tracking-wide md:tracking-[0.2em] uppercase text-[#C8D0DC]/50"
        style={{ fontFamily: "var(--font-inter)" }}
      >
        {label}
      </div>
    </div>
  );
}

// Section divider
function SectionDivider() {
  return (
    <div className="relative h-px mx-auto max-w-5xl px-6">
      <div style={{ background: "linear-gradient(90deg, transparent, rgba(46,123,255,0.3), transparent)", height: "1px" }} />
    </div>
  );
}

// Ornament decoration
function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, rgba(46,123,255,0.5))" }} />
      <span className="text-[#2E7BFF]/60 text-xs">◈</span>
      <div className="h-px w-12" style={{ background: "linear-gradient(90deg, rgba(46,123,255,0.5), transparent)" }} />
    </div>
  );
}

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  // Parallax scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setHeaderScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Section reveal refs
  const heroTextRef = useRef<HTMLDivElement>(null);
  const socialProofRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const whyRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="min-h-screen bg-[#0A0A0F] text-[#F5F5F7] lp-page"
      style={{ fontFamily: "var(--font-inter)" }}
    >

      {/* Sticky WhatsApp - mobile */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => triggerWALead()}
        className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 px-5 py-3.5 shadow-lg shadow-[#2E7BFF]/40 text-sm font-semibold text-[#F5F5F7] tracking-wide"
        style={{
          background: "linear-gradient(135deg, #1A3A6B, #2E7BFF)",
          fontFamily: "var(--font-cinzel)",
          borderRadius: "4px",
          minHeight: "48px"
        }}
      >
        <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.057 23.714a.5.5 0 00.617.639l5.945-1.566A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.577-.474-5.085-1.307l-.364-.209-3.772.993.994-3.734-.228-.374A9.963 9.963 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
        Begin Your Piece
      </a>

      {/* Header */}
      <header
        className="sticky top-0 z-40 w-full transition-all duration-300"
        style={{
          backdropFilter: headerScrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: headerScrolled ? "blur(12px)" : "none",
          background: headerScrolled ? "rgba(10,10,15,0.8)" : "transparent",
          borderBottom: headerScrolled ? "1px solid rgba(26,58,107,0.3)" : "1px solid rgba(26,58,107,0.2)",
        }}
      >
        <div className="py-4 px-6 flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <Image src={LOGO} alt="Monty Ink" fill className="object-contain" />
          </div>
          <span
            className="text-sm tracking-[0.25em] uppercase text-[#C8D0DC]"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Monty Ink
          </span>
        </div>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => triggerWALead()}
          className="hidden md:block px-6 py-2.5 text-xs tracking-[0.2em] uppercase text-[#F5F5F7] transition-all hover:shadow-lg hover:shadow-[#2E7BFF]/30 hover:-translate-y-0.5"
          style={{
            fontFamily: "var(--font-cinzel)",
            background: "linear-gradient(135deg, #1A3A6B, #2E7BFF)",
            borderRadius: "3px",
            minHeight: "48px",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Begin Your Piece
        </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden min-h-[90vh] flex items-center py-20 md:py-32 px-6"
        style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #0D2244 50%, #1A3A6B 100%)" }}
      >
        {/* Noise texture overlay */}
        <div className="lp-noise-overlay absolute inset-0 pointer-events-none" />

        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(46,123,255,0.12) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          {/* Hero text — staggered entrance */}
          <div ref={heroTextRef} className="hero-text-enter">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 hero-badge"
              style={{
                background: "rgba(46,123,255,0.12)",
                border: "1px solid rgba(46,123,255,0.25)",
                borderRadius: "20px",
              }}
            >
              <span className="text-[#2E7BFF] text-xs">★</span>
              <span className="text-xs text-[#C8D0DC]/80 tracking-wide" style={{ fontFamily: "var(--font-inter)" }}>
                4.9 Rated · 500+ Happy Clients
              </span>
            </div>

            <p
              className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-5 hero-sub"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Premium Tattoo Studio · Bali
            </p>
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#F5F5F7] mb-6 hero-headline"
              style={{ fontFamily: "var(--font-cinzel)", lineHeight: 1.15 }}
            >
              Your Story.<br />
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(90deg, #2E7BFF, #C8D0DC)" }}
              >
                Permanently.
              </span>
            </h1>
            <p
              className="text-[#C8D0DC]/80 text-lg mb-8 max-w-md hero-body"
              style={{ fontFamily: "var(--font-inter)", lineHeight: 1.7 }}
            >
              Custom tattoos only. No templates, no rush. Just exceptional art on skin,
              created in Bali by artists who have spent their lives mastering this craft.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerWALead()}
              className="inline-block px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium text-[#F5F5F7] transition-all duration-300 hover:shadow-xl hover:shadow-[#2E7BFF]/30 hover:-translate-y-0.5 hero-cta"
              style={{
                fontFamily: "var(--font-cinzel)",
                background: "linear-gradient(135deg, #1A3A6B, #2E7BFF)",
                borderRadius: "3px",
                minHeight: "48px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Begin Your Piece — Free Consult
            </a>
            <p
              className="text-xs text-[#C8D0DC]/40 mt-3 hero-cta"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              No commitment required. We&apos;ll discuss your vision first.
            </p>
          </div>

          {/* Hero image with parallax */}
          <div
            className="relative aspect-[3/4] max-w-sm mx-auto w-full overflow-hidden hero-image-wrap"
            style={{ borderRadius: "6px" }}
          >
            <div
              className="absolute inset-0 w-full"
              style={{
                transform: `translateY(${scrollY * 0.12}px)`,
                transition: "transform 0.05s linear",
                height: "115%",
                top: "-7.5%",
              }}
            >
              <Image
                src={LP_HERO}
                alt="Monty Ink tattoo studio — artist at work"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div
              className="absolute inset-0 pointer-events-none z-10"
              style={{ background: "linear-gradient(to bottom, transparent 60%, #0A0A0F 100%)" }}
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Social Proof */}
      <section ref={socialProofRef} className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center mb-16">
            <StatItem value="500+" label="Happy Clients" numericValue={500} suffix="+" />
            <StatItem value="★ 4.9" label="Average Rating" />
            <StatItem value="12+" label="Years in Bali" numericValue={12} suffix="+" />
          </div>

          {/* Reviews */}
          <div className="lp-review-container">
            {reviews.map((r, idx) => (
              <div
                key={r.name}
                className="lp-review-card review-stagger"
                style={{
                  background: "#0D0D12",
                  border: "1px solid rgba(26,58,107,0.4)",
                  borderRadius: "6px",
                  boxShadow: "inset 0 1px 0 rgba(46,123,255,0.1), 0 4px 20px rgba(0,0,0,0.3)",
                  animationDelay: `${idx * 120}ms`,
                }}
              >
                {/* Quotation mark decoration */}
                <div
                  className="text-4xl leading-none text-[#2E7BFF]/15 font-serif mb-2"
                  style={{ fontFamily: "Georgia, serif" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} className="text-[#2E7BFF] text-sm">★</span>
                  ))}
                </div>
                <p
                  className="text-[#C8D0DC]/80 text-sm flex-1 italic"
                  style={{ fontFamily: "var(--font-inter)", lineHeight: 1.7 }}
                >
                  {r.text}
                </p>
                <div className="border-t border-[#1A3A6B]/30 pt-4 mt-4">
                  <div
                    className="text-sm font-semibold text-[#F5F5F7]"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {r.name}
                  </div>
                  <div
                    className="text-xs text-[#C8D0DC]/50 mt-0.5"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {r.country}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Portfolio */}
      <section ref={portfolioRef} className="py-24 md:py-32 px-6 bg-[#0D0D12]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 lp-section-header">
            <Ornament />
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our Work
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F5F5F7]"
              style={{ fontFamily: "var(--font-cinzel)", lineHeight: 1.2 }}
            >
              The Portfolio
            </h2>
            <p
              className="text-[#C8D0DC]/50 text-sm mt-3"
              style={{ fontFamily: "var(--font-inter)", lineHeight: 1.7 }}
            >
              Every piece is custom — designed exclusively for one client.
            </p>
          </div>

          {/* 6-image portfolio grid */}
          <div className="lp-portfolio-grid">
            {PORTFOLIO.map((item, idx) => (
              <div
                key={item.label}
                className="lp-portfolio-card portfolio-stagger group"
                style={{
                  animationDelay: `${idx * 80}ms`,
                  borderRadius: "5px",
                  overflow: "hidden",
                  border: "1px solid rgba(46,123,255,0.15)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={`${item.label} tattoo — Monty Ink`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(10,10,15,0.9) 0%, rgba(10,10,15,0.2) 60%, transparent 100%)" }}
                  />
                  {/* Label overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div
                      className="text-base font-bold text-[#F5F5F7] tracking-wide"
                      style={{ fontFamily: "var(--font-cinzel)", lineHeight: 1.2 }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-[10px] tracking-[0.15em] uppercase text-[#2E7BFF]/90 mt-0.5"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {item.sub}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerWALead("portfolio-cta")}
              className="inline-block px-8 py-3.5 text-xs tracking-[0.2em] uppercase text-[#2E7BFF] border border-[#2E7BFF]/40 hover:border-[#2E7BFF] hover:bg-[#2E7BFF]/10 transition-all"
              style={{ fontFamily: "var(--font-cinzel)", borderRadius: "3px", minHeight: "48px", display: "inline-flex", alignItems: "center" }}
            >
              Discuss Your Idea →
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Why Monty Ink */}
      <section ref={whyRef} className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 lp-section-header">
            <Ornament />
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Why Us
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F5F5F7]"
              style={{ fontFamily: "var(--font-cinzel)", lineHeight: 1.2 }}
            >
              Why Monty Ink
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {valueProps.map((v) => (
              <div
                key={v.title}
                className="flex gap-5 p-7 border border-[#1A3A6B]/40 bg-[#0D0D12] hover:border-[#2E7BFF]/40 transition-colors lp-value-card"
                style={{
                  borderRadius: "6px",
                  boxShadow: "inset 0 1px 0 rgba(46,123,255,0.08), 0 4px 20px rgba(0,0,0,0.25)",
                }}
              >
                <div
                  className="text-[#2E7BFF] text-xl shrink-0 mt-0.5 w-6 text-center"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {v.icon}
                </div>
                <div>
                  <h3
                    className="text-sm font-semibold text-[#F5F5F7] mb-2 tracking-wide"
                    style={{ fontFamily: "var(--font-cinzel)", lineHeight: 1.2 }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-sm text-[#C8D0DC]/60"
                    style={{ fontFamily: "var(--font-inter)", lineHeight: 1.7 }}
                  >
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Process */}
      <section ref={processRef} className="py-24 md:py-32 px-6 bg-[#0D0D12]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 lp-section-header">
            <Ornament />
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              How It Works
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F5F5F7]"
              style={{ fontFamily: "var(--font-cinzel)", lineHeight: 1.2 }}
            >
              3 Steps to Your Piece
            </h2>
          </div>

          {/* Desktop: horizontal with connector line */}
          <div className="hidden md:grid md:grid-cols-3 gap-px bg-[#1A3A6B]/20 rounded-md overflow-hidden relative">
            {/* Connecting line */}
            <div
              className="absolute top-10 left-[calc(33.33%-0px)] right-[calc(33.33%-0px)] h-px z-20 pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent 16%, rgba(46,123,255,0.4) 33%, rgba(46,123,255,0.4) 67%, transparent 84%)" }}
            />
            {[
              { step: "01", title: "Consult", description: "Message us on WhatsApp. We discuss your idea, placement, style, and size. No commitment — just conversation.", icon: "◎" },
              { step: "02", title: "Design", description: "Your artist drafts a custom design exclusively for you. We share it, refine together, perfect it.", icon: "◈" },
              { step: "03", title: "Ink", description: "The session. Clean studio, expert hands, music of your choice. Art that lasts a lifetime.", icon: "✦" },
            ].map((p, i) => (
              <div
                key={p.step}
                className="relative p-8 bg-[#0D0D12] flex flex-col gap-4 process-step"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className="text-3xl font-bold leading-none"
                    style={{ fontFamily: "var(--font-cinzel)", color: "rgba(46,123,255,0.2)" }}
                  >
                    {p.step}
                  </span>
                  <span className="text-[#2E7BFF] text-lg">{p.icon}</span>
                </div>
                <h3
                  className="text-xl font-bold text-[#F5F5F7]"
                  style={{ fontFamily: "var(--font-cinzel)", lineHeight: 1.2 }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm text-[#C8D0DC]/60"
                  style={{ fontFamily: "var(--font-inter)", lineHeight: 1.7 }}
                >
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="md:hidden space-y-0 relative">
            {/* Vertical line */}
            <div
              className="absolute left-5 top-5 bottom-5 w-px"
              style={{ background: "linear-gradient(to bottom, rgba(46,123,255,0.5), rgba(46,123,255,0.1))" }}
            />
            {[
              { step: "01", title: "Consult", description: "Message us on WhatsApp. Discuss your idea, placement, style, and size.", icon: "◎" },
              { step: "02", title: "Design", description: "Your artist drafts a custom design exclusively for you. Refine together.", icon: "◈" },
              { step: "03", title: "Ink", description: "The session. Clean studio, expert hands. Art that lasts a lifetime.", icon: "✦" },
            ].map((p, i) => (
              <div key={p.step} className="flex gap-6 pl-0 pb-10 last:pb-0 relative">
                <div
                  className="shrink-0 w-10 h-10 flex items-center justify-center z-10"
                  style={{
                    background: "#0A0A0F",
                    border: "1px solid rgba(46,123,255,0.4)",
                    borderRadius: "50%",
                  }}
                >
                  <span className="text-[#2E7BFF] text-sm">{p.icon}</span>
                </div>
                <div className="pt-1.5">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span
                      className="text-xs text-[#2E7BFF]/40 font-bold"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {p.step}
                    </span>
                    <h3
                      className="text-lg font-bold text-[#F5F5F7]"
                      style={{ fontFamily: "var(--font-cinzel)", lineHeight: 1.2 }}
                    >
                      {p.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm text-[#C8D0DC]/60"
                    style={{ fontFamily: "var(--font-inter)", lineHeight: 1.7 }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-28 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #0D2244 50%, #1A3A6B 100%)" }}
      >
        <div className="lp-noise-overlay absolute inset-0 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(46,123,255,0.12) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative w-16 h-16">
              <Image src={LOGO} alt="Monty Ink" fill className="object-contain" />
            </div>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#F5F5F7] mb-5"
            style={{ fontFamily: "var(--font-cinzel)", lineHeight: 1.2 }}
          >
            Ready to Wear Your Story?
          </h2>
          <p
            className="text-[#C8D0DC]/70 mb-10 max-w-lg mx-auto"
            style={{ fontFamily: "var(--font-inter)", lineHeight: 1.7 }}
          >
            Message us now — tell us your idea and we&apos;ll get back to you within a few hours.
            Consultation is always free.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerWALead("lp-bottom-cta")}
              className="inline-flex items-center gap-2 px-12 py-5 text-sm tracking-[0.2em] uppercase font-medium text-[#F5F5F7] transition-all duration-300 hover:shadow-xl hover:shadow-[#2E7BFF]/30 hover:-translate-y-0.5"
              style={{
                fontFamily: "var(--font-cinzel)",
                background: "linear-gradient(135deg, #1A3A6B, #2E7BFF)",
                borderRadius: "3px",
                minHeight: "48px",
              }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.057 23.714a.5.5 0 00.617.639l5.945-1.566A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.577-.474-5.085-1.307l-.364-.209-3.772.993.994-3.734-.228-.374A9.963 9.963 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Begin Your Piece
            </a>
            <a
              href="https://instagram.com/montyink.bali"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-5 text-sm tracking-[0.2em] uppercase text-[#C8D0DC]/60 border border-[#1A3A6B]/40 hover:border-[#2E7BFF]/40 hover:text-[#C8D0DC] transition-all"
              style={{ fontFamily: "var(--font-cinzel)", borderRadius: "3px", minHeight: "48px" }}
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ */}
      <section ref={faqRef} className="py-24 md:py-32 px-6 bg-[#0D0D12]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14 lp-section-header">
            <Ornament />
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Common Questions
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F5F5F7]"
              style={{ fontFamily: "var(--font-cinzel)", lineHeight: 1.2 }}
            >
              FAQ
            </h2>
          </div>

          <div className="space-y-2">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="border border-[#1A3A6B]/40 overflow-hidden transition-all duration-300"
                style={{
                  borderRadius: "5px",
                  borderLeftColor: openFaq === i ? "rgba(46,123,255,0.6)" : undefined,
                  borderLeftWidth: openFaq === i ? "2px" : "1px",
                  boxShadow: openFaq === i ? "inset 0 1px 0 rgba(46,123,255,0.08)" : undefined,
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-[#1A3A6B]/10 transition-colors"
                  style={{ minHeight: "48px" }}
                >
                  <span className="flex items-start gap-3">
                    <span
                      className="text-xs text-[#2E7BFF]/50 font-bold mt-0.5 shrink-0"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-sm font-medium text-[#F5F5F7]"
                      style={{ fontFamily: "var(--font-inter)", lineHeight: 1.6 }}
                    >
                      {f.q}
                    </span>
                  </span>
                  <span
                    className={`text-[#2E7BFF] text-xl shrink-0 leading-none transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="lp-faq-body"
                  style={{ maxHeight: openFaq === i ? "400px" : "0" }}
                >
                  <div className="px-6 pb-5 border-t border-[#1A3A6B]/30">
                    <p
                      className="text-sm text-[#C8D0DC]/60 pt-4"
                      style={{ fontFamily: "var(--font-inter)", lineHeight: 1.7 }}
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ CTA */}
          <div className="mt-10 text-center">
            <p className="text-sm text-[#C8D0DC]/50 mb-4" style={{ fontFamily: "var(--font-inter)" }}>
              Still have questions?
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerWALead("faq-cta")}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[0.15em] uppercase text-[#2E7BFF] border border-[#2E7BFF]/30 hover:border-[#2E7BFF]/60 hover:bg-[#2E7BFF]/5 transition-all"
              style={{ fontFamily: "var(--font-cinzel)", borderRadius: "3px", minHeight: "48px" }}
            >
              Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Footer */}
      <footer className="border-t border-[#1A3A6B]/30 py-12 px-6 bg-[#0A0A0F]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-7 h-7">
                  <Image src={LOGO} alt="Monty Ink" fill className="object-contain" />
                </div>
                <span
                  className="text-sm tracking-[0.25em] uppercase text-[#C8D0DC]/80"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Monty Ink
                </span>
              </div>
              <p
                className="text-xs text-[#C8D0DC]/40"
                style={{ fontFamily: "var(--font-inter)", lineHeight: 1.6 }}
              >
                Premium custom tattoo studio in Seminyak, Bali.
                Artistry meets permanent expression.
              </p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <h4
                className="text-xs tracking-[0.2em] uppercase text-[#C8D0DC]/50 mb-1"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Contact
              </h4>
              <a
                href="mailto:info@montyink.com"
                className="text-xs text-[#C8D0DC]/60 hover:text-[#2E7BFF] transition-colors flex items-center gap-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="text-[#2E7BFF]/60 text-xs">✉</span> info@montyink.com
              </a>
              <a
                href="tel:+6282144441888"
                className="text-xs text-[#C8D0DC]/60 hover:text-[#2E7BFF] transition-colors flex items-center gap-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="text-[#2E7BFF]/60 text-xs">☎</span> +62 821-4444-1888
              </a>
              <a
                href="https://instagram.com/montyinkbali"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C8D0DC]/60 hover:text-[#2E7BFF] transition-colors flex items-center gap-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="text-[#2E7BFF]/60 text-xs">◈</span> @montyinkbali
              </a>
            </div>

            {/* Hours */}
            <div className="flex flex-col gap-3">
              <h4
                className="text-xs tracking-[0.2em] uppercase text-[#C8D0DC]/50 mb-1"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                Hours & Location
              </h4>
              <p
                className="text-xs text-[#C8D0DC]/60 flex items-center gap-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="text-[#2E7BFF]/60 text-xs">◎</span>
                Open Daily 10:00 — 20:00
              </p>
              <p
                className="text-xs text-[#C8D0DC]/60 flex items-center gap-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <span className="text-[#2E7BFF]/60 text-xs">◎</span>
                Seminyak, Bali, Indonesia
              </p>
              <a
                href="/"
                className="text-xs tracking-[0.1em] uppercase text-[#C8D0DC]/40 hover:text-[#2E7BFF] transition-colors mt-1"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Company Profile →
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#1A3A6B]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-xs text-[#C8D0DC]/30"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              © 2025 Monty Ink · Seminyak, Bali · All rights reserved
            </p>
            <button
              onClick={scrollToTop}
              className="text-xs tracking-[0.15em] uppercase text-[#C8D0DC]/40 hover:text-[#2E7BFF] transition-colors flex items-center gap-1.5"
              style={{ fontFamily: "var(--font-inter)", minHeight: "48px", minWidth: "48px" }}
              aria-label="Back to top"
            >
              ↑ Back to top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
