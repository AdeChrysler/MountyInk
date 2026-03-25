"use client";

import Image from "next/image";
import { useState } from "react";

const LOGO = "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-needle-rose-bali.png";
const TATTOOED_ARM = "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-tattooed-arm-art.png";
const ROTARY = "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-rotary-machine-mandala.png";
const INK_BOTTLE = "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-ink-bottle-mandala-ring.png";

const IG_POSTS = [
  "https://s3.zenova.id/ads/monty-ink/brand/v2/ig-post-1.jpg",
  "https://s3.zenova.id/ads/monty-ink/brand/v2/ig-post-2.jpg",
  "https://s3.zenova.id/ads/monty-ink/brand/v2/ig-post-3.jpg",
  "https://s3.zenova.id/ads/monty-ink/brand/v2/ig-post-4.jpg",
  "https://s3.zenova.id/ads/monty-ink/brand/v2/ig-post-5.jpg",
  "https://s3.zenova.id/ads/monty-ink/brand/v2/ig-post-6.jpg",
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

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F5F5F7]" style={{ fontFamily: "var(--font-inter)" }}>

      {/* Sticky WhatsApp - mobile */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => triggerWALead()}
        className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 px-5 py-3 shadow-lg shadow-[#2E7BFF]/30 text-sm font-medium text-[#F5F5F7] tracking-wide"
        style={{ background: "linear-gradient(135deg, #1A3A6B, #2E7BFF)", fontFamily: "var(--font-cinzel)" }}
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.057 23.714a.5.5 0 00.617.639l5.945-1.566A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.846 0-3.577-.474-5.085-1.307l-.364-.209-3.772.993.994-3.734-.228-.374A9.963 9.963 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
        Begin Your Piece
      </a>

      {/* Header */}
      <header className="py-6 px-6 flex items-center justify-between max-w-5xl mx-auto">
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
          className="hidden md:block px-6 py-2.5 text-xs tracking-[0.2em] uppercase text-[#F5F5F7] transition-all hover:shadow-lg hover:shadow-[#2E7BFF]/30"
          style={{ fontFamily: "var(--font-cinzel)", background: "linear-gradient(135deg, #1A3A6B, #2E7BFF)" }}
        >
          Begin Your Piece
        </a>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 md:py-32 px-6"
        style={{ background: "linear-gradient(135deg, #0A0A0F 0%, #0D2244 50%, #1A3A6B 100%)" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 60% at 60% 50%, rgba(46,123,255,0.12) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Premium Tattoo Studio · Bali
            </p>
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight text-[#F5F5F7] mb-6"
              style={{ fontFamily: "var(--font-cinzel)" }}
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
              className="text-[#C8D0DC]/80 text-lg leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Custom tattoos only. No templates, no rush. Just exceptional art on skin,
              created in Bali by artists who have spent their lives mastering this craft.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => triggerWALead()}
              className="inline-block px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium text-[#F5F5F7] transition-all duration-300 hover:shadow-xl hover:shadow-[#2E7BFF]/30 hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-cinzel)", background: "linear-gradient(135deg, #1A3A6B, #2E7BFF)" }}
            >
              Begin Your Piece — Free Consult
            </a>
            <p
              className="text-xs text-[#C8D0DC]/40 mt-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              No commitment required. We&apos;ll discuss your vision first.
            </p>
          </div>

          <div className="relative aspect-[3/4] max-w-sm mx-auto w-full">
            <Image
              src={TATTOOED_ARM}
              alt="Monty Ink tattoo art"
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to bottom, transparent 60%, #0A0A0F 100%)" }}
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-6 border-y border-[#1A3A6B]/30">
        <div className="max-w-5xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center mb-16">
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "★ 4.9", label: "Average Rating" },
              { value: "12+", label: "Years in Bali" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  className="text-2xl md:text-4xl font-bold text-[#2E7BFF] mb-1"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {s.value}
                </div>
                <div
                  className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#C8D0DC]/50"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Reviews */}
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="p-6 border border-[#1A3A6B]/40 bg-[#0D0D12]"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <span key={i} className="text-[#2E7BFF] text-sm">★</span>
                  ))}
                </div>
                <p
                  className="text-[#C8D0DC]/80 text-sm leading-relaxed mb-4 italic"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  &ldquo;{r.text}&rdquo;
                </p>
                <div>
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

      {/* Portfolio Strip */}
      <section className="py-20 px-6 bg-[#0D0D12]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Recent Work
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F5F5F7]"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The Portfolio
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {IG_POSTS.map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden group">
                <Image
                  src={src}
                  alt={`Portfolio ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "rgba(46,123,255,0.2)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Monty Ink */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Why Us
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F5F5F7]"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Why Monty Ink
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {valueProps.map((v) => (
              <div
                key={v.title}
                className="flex gap-5 p-6 border border-[#1A3A6B]/40 hover:border-[#2E7BFF]/40 transition-colors"
              >
                <div
                  className="text-[#2E7BFF] text-2xl shrink-0 mt-0.5"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {v.icon}
                </div>
                <div>
                  <h3
                    className="text-base font-semibold text-[#F5F5F7] mb-2"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-sm text-[#C8D0DC]/70 leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-[#0D0D12]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              How It Works
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F5F5F7]"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              3 Steps to Your Piece
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Consult",
                description:
                  "Tell us your idea via WhatsApp. We discuss placement, style, and size — no commitment required.",
                image: INK_BOTTLE,
              },
              {
                step: "02",
                title: "Design",
                description:
                  "Your artist drafts a custom design exclusively for you. We refine until it's perfect.",
                image: ROTARY,
              },
              {
                step: "03",
                title: "Ink",
                description:
                  "The session. Clean studio, expert hands, art that lasts a lifetime.",
                image: TATTOOED_ARM,
              },
            ].map((p) => (
              <div key={p.step} className="relative">
                <div className="relative aspect-square mb-5 overflow-hidden">
                  <Image src={p.image} alt={p.title} fill className="object-cover" />
                  <div
                    className="absolute inset-0 flex items-end p-4"
                    style={{ background: "linear-gradient(to top, rgba(10,10,15,0.8) 0%, transparent 60%)" }}
                  >
                    <span
                      className="text-4xl font-bold text-[#2E7BFF]/30"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      {p.step}
                    </span>
                  </div>
                </div>
                <h3
                  className="text-xl font-bold text-[#F5F5F7] mb-2"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm text-[#C8D0DC]/70 leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {p.description}
                </p>
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
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(46,123,255,0.12) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="relative w-14 h-14">
              <Image src={LOGO} alt="Monty Ink" fill className="object-contain" />
            </div>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#F5F5F7] mb-4"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Ready to Wear Your Story?
          </h2>
          <p
            className="text-[#C8D0DC]/70 mb-8 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Message us now — tell us your idea and we&apos;ll get back to you within a few hours.
            Consultation is always free.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => triggerWALead("lp-bottom-cta")}
            className="inline-block px-12 py-5 text-sm tracking-[0.2em] uppercase font-medium text-[#F5F5F7] transition-all duration-300 hover:shadow-xl hover:shadow-[#2E7BFF]/30 hover:-translate-y-0.5"
            style={{ fontFamily: "var(--font-cinzel)", background: "linear-gradient(135deg, #1A3A6B, #2E7BFF)" }}
          >
            Begin Your Piece
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#0D0D12]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Common Questions
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#F5F5F7]"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              FAQ
            </h2>
          </div>

          <div className="space-y-2">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="border border-[#1A3A6B]/40 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-[#1A3A6B]/10 transition-colors"
                >
                  <span
                    className="text-sm font-medium text-[#F5F5F7] leading-relaxed"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`text-[#2E7BFF] shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p
                      className="text-sm text-[#C8D0DC]/70 leading-relaxed"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {f.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A3A6B]/30 py-10 px-6 bg-[#0A0A0F]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-6 h-6">
              <Image src={LOGO} alt="Monty Ink" fill className="object-contain" />
            </div>
            <span
              className="text-sm tracking-[0.25em] uppercase text-[#C8D0DC]/60"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Monty Ink
            </span>
          </div>
          <p
            className="text-xs text-[#C8D0DC]/30"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            © 2024 Monty Ink · Seminyak, Bali · All rights reserved
          </p>
          <a
            href="/"
            className="text-xs tracking-[0.15em] uppercase text-[#C8D0DC]/40 hover:text-[#2E7BFF] transition-colors"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Company Profile →
          </a>
        </div>
      </footer>
    </div>
  );
}
