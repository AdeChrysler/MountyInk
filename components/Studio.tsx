import Image from "next/image";

function StudioPlaceholder({ index }: { index: number }) {
  const configs = [
    { label: "Studio Interior", icon: "⬡" },
    { label: "Artist at Work", icon: "◈" },
    { label: "Bali Atmosphere", icon: "⊕" },
  ];

  const gradients = [
    "from-[#0A0A0F] via-[#0D2244] to-[#1A3A6B]/30",
    "from-[#0D2244] via-[#0A0A0F] to-[#1A3A6B]/20",
    "from-[#1A3A6B]/20 via-[#0D2244] to-[#0A0A0F]",
  ];

  const { label, icon } = configs[index % configs.length];

  return (
    <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} flex flex-col items-center justify-center`}>
      <span className="text-4xl text-[#2E7BFF]/20 mb-3">{icon}</span>
      <p className="text-xs text-[#C8D0DC]/20 tracking-widest" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
        {label}
      </p>
    </div>
  );
}

export default function Studio() {
  return (
    <section id="studio" className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at 60% 80%, #1A3A6B 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-4"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            // 04 — The Studio
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#F5F5F7] mb-6"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            Where Art Lives
          </h2>
          <div className="w-16 h-px bg-[#2E7BFF] mb-8" />
        </div>

        {/* Studio grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Images grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[4/5] col-span-2 bg-[#0D2244]/50 border border-[#1A3A6B]/30 overflow-hidden">
              <StudioPlaceholder index={0} />
              <div className="absolute inset-0">
                <Image
                  src="https://s3.zenova.id/ads/monty-ink/brand/v10/v10-tattooed-arm-art.png"
                  alt="Monty Ink Studio"
                  fill
                  className="object-cover opacity-40"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0A0A0F] to-transparent h-24" />
              <p
                className="absolute bottom-4 left-4 text-xs text-[#2E7BFF]/60"
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                Studio — Ubud, Bali
              </p>
            </div>
            <div className="relative aspect-square bg-[#0D2244]/50 border border-[#1A3A6B]/30 overflow-hidden">
              <StudioPlaceholder index={1} />
            </div>
            <div className="relative aspect-square bg-[#0D2244]/50 border border-[#1A3A6B]/30 overflow-hidden">
              <StudioPlaceholder index={2} />
            </div>
          </div>

          {/* Studio details */}
          <div>
            <p
              className="text-[#C8D0DC]/80 text-lg leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Set in the artistic heart of Ubud, Monty Ink occupies a space designed for focus, comfort, and creative energy. The studio is our sanctuary — and yours during your session.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  label: "Environment",
                  value: "Private rooms, blue-lit studio space, curated ambient sound",
                },
                {
                  label: "Hygiene",
                  value: "Single-use needles, autoclave sterilization, hospital-grade protocols",
                },
                {
                  label: "Equipment",
                  value: "Cheyenne, FK Irons, and handcrafted Balinese rotary machines",
                },
                {
                  label: "Inks",
                  value: "World Famed, Eternal, and Intenze — vegan-friendly, long-lasting",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 border-b border-[#1A3A6B]/20 pb-6">
                  <div className="w-2 h-2 rounded-full bg-[#2E7BFF] mt-1.5 shrink-0" />
                  <div>
                    <p
                      className="text-xs text-[#2E7BFF] mb-1 tracking-widest uppercase"
                      style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="text-sm text-[#C8D0DC]/60"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Location */}
            <div className="bg-[#0D2244]/40 border border-[#1A3A6B]/30 p-6">
              <p
                className="text-xs text-[#2E7BFF] mb-3 tracking-widest uppercase"
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                Location
              </p>
              <p
                className="text-[#C8D0DC]/80 text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Jl. Monkey Forest, Ubud<br />
                Bali, Indonesia 80571
              </p>
              <a
                href="https://maps.google.com/?q=Ubud+Bali+Tattoo+Studio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#2E7BFF] mt-4 hover:text-[#C8D0DC] transition-colors"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Map embed placeholder */}
        <div className="relative h-64 bg-[#0D2244]/30 border border-[#1A3A6B]/30 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-8 h-8 text-[#2E7BFF]/30 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-xs text-[#C8D0DC]/30" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                Ubud, Bali — Google Maps
              </p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.3!2d115.2621!3d-8.5069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzAnMjQuOCJTIDExNcKwMTUnNDMuNiJF!5e0!3m2!1sen!2sid!4v1234567890"
            className="absolute inset-0 w-full h-full opacity-30 grayscale"
            style={{ border: 0, filter: "invert(1) hue-rotate(180deg) brightness(0.3) saturate(2)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Monty Ink Studio Location"
          />
        </div>
      </div>
    </section>
  );
}
