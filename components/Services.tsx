const services = [
  {
    code: "SVC-01",
    title: "Custom Design",
    description:
      "Fully bespoke tattoo design created in collaboration with you. We draw from your story, your references, and our artistic vision to create something that has never existed before.",
    duration: "Consultation + Design Session",
    detail: "Every piece begins with a conversation.",
  },
  {
    code: "SVC-02",
    title: "Blackwork & Mandala",
    description:
      "Intricate geometric patterns and mandala work executed with surgical precision. Bold linework and dotwork that ages beautifully over decades.",
    duration: "3–8 hours depending on size",
    detail: "Geometry as meditation.",
  },
  {
    code: "SVC-03",
    title: "Fine Line",
    description:
      "Delicate, precise linework for those who want subtlety with impact. Botanical, portrait, and illustrative styles rendered in the finest gauge.",
    duration: "1–4 hours depending on complexity",
    detail: "Less is permanent.",
  },
  {
    code: "SVC-04",
    title: "Balinese Traditional",
    description:
      "Sacred Balinese motifs — Barong, Kala, Rangda, and the sacred geometry of the island's spiritual tradition. Rooted in meaning, not decoration.",
    duration: "4–10 hours",
    detail: "Carry the spirit of Bali.",
  },
  {
    code: "SVC-05",
    title: "Full Sleeve / Back Piece",
    description:
      "Large-scale, multi-session masterworks that transform the body into a canvas. Planned across sessions for optimal healing and coherence.",
    duration: "Multiple sessions",
    detail: "Architecture for the body.",
  },
  {
    code: "SVC-06",
    title: "Cover-Up",
    description:
      "Thoughtful transformation of existing tattoos. We assess, plan, and execute cover-ups that honor your evolution — not your past regrets.",
    duration: "Consultation required",
    detail: "Every story deserves revision.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden bg-[#0D2244]/20">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #0A0A0F 0%, #0D2244/10 50%, #0A0A0F 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-4"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            // 03 — Services
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#F5F5F7] mb-6"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            What We Create
          </h2>
          <div className="w-16 h-px bg-[#2E7BFF] mb-8" />
          <p
            className="text-[#C8D0DC]/60 max-w-xl"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Every style demands different mastery. We&apos;ve spent years perfecting each one.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1A3A6B]/20">
          {services.map((service) => (
            <div
              key={service.code}
              className="bg-[#0A0A0F] p-8 group hover:bg-[#0D2244]/50 transition-colors duration-300"
            >
              <p
                className="text-xs text-[#2E7BFF]/60 mb-4 tracking-widest"
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                {service.code}
              </p>
              <h3
                className="text-xl font-bold text-[#F5F5F7] mb-4 group-hover:text-[#2E7BFF] transition-colors"
                style={{ fontFamily: "var(--font-cinzel), serif" }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm text-[#C8D0DC]/60 leading-relaxed mb-6"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {service.description}
              </p>
              <div className="border-t border-[#1A3A6B]/40 pt-4">
                <p
                  className="text-xs text-[#C8D0DC]/30 mb-1"
                  style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                >
                  {service.duration}
                </p>
                <p
                  className="text-xs italic text-[#2E7BFF]/50"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {service.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-24">
          <p
            className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-8"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            // The Process
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", label: "Consultation", desc: "Share your vision. We listen, ask, and understand." },
              { step: "02", label: "Design", desc: "Your concept is translated into a unique artwork." },
              { step: "03", label: "Session", desc: "The permanent work begins. Precision over speed." },
              { step: "04", label: "Aftercare", desc: "We guide you through healing for a lifetime result." },
            ].map((p) => (
              <div key={p.step} className="relative">
                <p
                  className="text-5xl font-bold text-[#1A3A6B]/40 mb-4"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  {p.step}
                </p>
                <h4
                  className="text-[#F5F5F7] font-semibold mb-2"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  {p.label}
                </h4>
                <p
                  className="text-sm text-[#C8D0DC]/50"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
