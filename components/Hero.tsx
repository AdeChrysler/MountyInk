import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0A0A0F 0%, #0D2244 35%, #1A3A6B 70%, #2E7BFF 100%)",
        }}
      />

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-[#0A0A0F]/60" />

      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #C8D0DC 0, #C8D0DC 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #C8D0DC 0, #C8D0DC 1px, transparent 1px, transparent 60px)",
        }}
      />

      {/* Background brand imagery */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="relative w-[600px] h-[600px]">
          <Image
            src="https://s3.zenova.id/ads/monty-ink/brand/v10/v10-rotary-machine-mandala.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Primary logo */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 mb-8">
          <Image
            src="https://s3.zenova.id/ads/monty-ink/brand/v10/v10-needle-rose-bali.png"
            alt="Monty Ink — Needle Rose Bali"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Wordmark */}
        <p
          className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-4"
          style={{ fontFamily: "var(--font-jetbrains), monospace" }}
        >
          Est. Bali, Indonesia
        </p>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            background: "linear-gradient(135deg, #F5F5F7 0%, #C8D0DC 50%, #2E7BFF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none",
          }}
        >
          Monty Ink
        </h1>

        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#2E7BFF] to-transparent mb-6" />

        <p
          className="text-lg md:text-xl text-[#C8D0DC] tracking-[0.15em] uppercase mb-10"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          Born in Bali. Drawn for Life.
        </p>

        <p
          className="text-base text-[#C8D0DC]/60 max-w-xl leading-relaxed mb-12"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Where ancient Balinese artistry meets precision tattooing. Every line intentional. Every piece permanent.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="px-8 py-4 text-sm tracking-[0.2em] uppercase text-[#0A0A0F] bg-[#2E7BFF] hover:bg-[#C8D0DC] transition-colors duration-300"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            Begin Your Piece
          </a>
          <a
            href="#portfolio"
            className="px-8 py-4 text-sm tracking-[0.2em] uppercase text-[#C8D0DC] border border-[#C8D0DC]/30 hover:border-[#2E7BFF] hover:text-[#2E7BFF] transition-all duration-300"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            View Portfolio
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#C8D0DC]/40" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-[#2E7BFF]/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
