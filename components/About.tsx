import Image from "next/image";

const artists = [
  {
    name: "Monty",
    role: "Founder & Lead Artist",
    specialty: "Blackwork · Mandala · Balinese Traditional",
    image: "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-tattooed-arm-art.png",
    bio: "Over a decade of ink mastery rooted in the spiritual geometry of Bali. Monty translates sacred symbolism into permanent art.",
  },
  {
    name: "Ayu",
    role: "Senior Artist",
    specialty: "Fine Line · Floral · Geometric",
    image: "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-ink-bottle-mandala-ring.png",
    bio: "Trained in both classical Balinese illustration and contemporary fine-line technique. Precision in every micron.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at 80% 50%, #0D2244 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <p
            className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-4"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            // 01 — About
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#F5F5F7] mb-6"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            The Art Behind the Ink
          </h2>
          <div className="w-16 h-px bg-[#2E7BFF] mb-8" />
        </div>

        {/* Studio story */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mb-24 items-center">
          <div>
            <p
              className="text-[#C8D0DC]/80 text-lg leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Monty Ink was born from a single belief: that tattoo art deserves the same reverence as any fine art. Rooted in Bali&apos;s spiritual energy, we create work that carries meaning beyond the surface.
            </p>
            <p
              className="text-[#C8D0DC]/60 leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Our studio blends ancient Balinese symbolism with modern tattooing precision. No templates. No rush. Every consultation is a creative partnership between artist and client — the result is permanent, so it must be right.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "10+", label: "Years of Experience" },
                { value: "2000+", label: "Pieces Created" },
                { value: "40+", label: "Countries Represented" },
              ].map((stat) => (
                <div key={stat.label} className="border-t border-[#1A3A6B] pt-4">
                  <p
                    className="text-2xl font-bold text-[#2E7BFF] mb-1"
                    style={{ fontFamily: "var(--font-cinzel), serif" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs text-[#C8D0DC]/50 leading-tight"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 border border-[#1A3A6B]/50 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0D2244] to-[#0A0A0F] border border-[#1A3A6B]/30">
                <Image
                  src="https://s3.zenova.id/ads/monty-ink/brand/v10/v10-coil-machine-ink-flow.png"
                  alt="Monty Ink Studio — Coil Machine"
                  fill
                  className="object-contain p-8 opacity-80"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#2E7BFF]/10 border border-[#2E7BFF]/30 px-4 py-3">
                <p className="text-xs text-[#2E7BFF]" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                  Studio · Ubud, Bali
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Artists */}
        <div>
          <p
            className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-8"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            // The Artists
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {artists.map((artist) => (
              <div
                key={artist.name}
                className="bg-[#0D2244]/30 border border-[#1A3A6B]/30 p-6 flex gap-6 hover:border-[#2E7BFF]/40 transition-colors group"
              >
                <div className="relative w-20 h-20 shrink-0 bg-[#0A0A0F] border border-[#1A3A6B]/50">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-contain p-2 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <div>
                  <h3
                    className="text-[#F5F5F7] font-bold mb-1"
                    style={{ fontFamily: "var(--font-cinzel), serif" }}
                  >
                    {artist.name}
                  </h3>
                  <p
                    className="text-xs text-[#2E7BFF] mb-2"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    {artist.role}
                  </p>
                  <p
                    className="text-xs text-[#C8D0DC]/40 mb-3"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {artist.specialty}
                  </p>
                  <p
                    className="text-sm text-[#C8D0DC]/60 leading-relaxed"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {artist.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
