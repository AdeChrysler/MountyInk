import Image from "next/image";
import Navbar from "../components/Navbar";

const LOGO = "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-needle-rose-bali.png";
const ROTARY = "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-rotary-machine-mandala.png";
const COIL = "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-coil-machine-ink-flow.png";
const INK_BOTTLE = "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-ink-bottle-mandala-ring.png";
const TATTOOED_ARM = "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-tattooed-arm-art.png";

const IG_POSTS = [
  "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-tattooed-arm-art.png",
  "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-needle-rose-bali.png",
  "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-rotary-machine-mandala.png",
  "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-ink-bottle-mandala-ring.png",
  "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-coil-machine-ink-flow.png",
  "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-tattooed-arm-art.png",
];

const WA_LINK = "https://wa.me/6282144441888?text=Hi%20Monty%20Ink%2C%20I%27d%20like%20to%20begin%20my%20piece.";

const services = [
  {
    icon: "✦",
    title: "Custom Tattoos",
    description:
      "Every piece is drawn from scratch. We do not work from flash sheets — your tattoo is a singular work of art.",
  },
  {
    icon: "✦",
    title: "Traditional Balinese",
    description:
      "Ancient motifs, reinterpreted. Ulap-ulap, barong, and kala elements brought to life with contemporary precision.",
  },
  {
    icon: "✦",
    title: "Fine Line & Minimalist",
    description:
      "Ultra-fine linework for those who want detail in silence. Subtle, elegant, and built to last.",
  },
  {
    icon: "✦",
    title: "Blackwork & Geometric",
    description:
      "Bold contrasts, sacred geometry, and mandalas rooted in Balinese spiritual tradition.",
  },
];

const artists = [
  {
    name: "Wayan Monty",
    role: "Founder & Lead Artist",
    specialty: "Blackwork · Balinese Traditional · Fine Line",
    experience: "12 years",
    image: ROTARY,
  },
  {
    name: "Made Surya",
    role: "Senior Artist",
    specialty: "Geometric · Mandala · Neo-Traditional",
    experience: "8 years",
    image: COIL,
  },
  {
    name: "Ketut Artha",
    role: "Artist",
    specialty: "Watercolor · Realism · Fine Line",
    experience: "5 years",
    image: INK_BOTTLE,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A0A0F 0%, #0D2244 35%, #1A3A6B 70%, #2E7BFF 100%)",
        }}
      >
        {/* Subtle noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(46,123,255,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex justify-center mb-10">
            <div className="relative w-24 h-24">
              <Image src={LOGO} alt="Monty Ink Logo" fill className="object-contain drop-shadow-2xl" />
            </div>
          </div>

          <p
            className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Tattoo Studio · Bali, Indonesia
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight text-[#F5F5F7] mb-6"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Born in Bali.<br />
            <span className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(90deg, #2E7BFF, #C8D0DC)" }}>
              Drawn for Life.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-[#C8D0DC]/80 max-w-xl mx-auto mb-12 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Premium custom tattoos where Balinese artistry meets modern precision.
            Every piece is singular. Every line is intentional.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#2E7BFF]/30 hover:-translate-y-0.5"
              style={{
                fontFamily: "var(--font-cinzel)",
                background: "linear-gradient(135deg, #1A3A6B, #2E7BFF)",
                color: "#F5F5F7",
              }}
            >
              Begin Your Piece
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 text-sm tracking-[0.2em] uppercase text-[#C8D0DC] border border-[#C8D0DC]/30 hover:border-[#2E7BFF] hover:text-[#2E7BFF] transition-all duration-300"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              View Portfolio
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#2E7BFF]" />
          <span
            className="text-[10px] tracking-[0.3em] uppercase text-[#C8D0DC]"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-[#1A3A6B]/40 bg-[#0A0A0F]">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: "Tattoos Completed" },
            { value: "12+", label: "Years in Bali" },
            { value: "3", label: "Master Artists" },
            { value: "100%", label: "Custom Designs" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="text-3xl md:text-4xl font-bold text-[#2E7BFF] mb-1"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                {s.value}
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
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our Story
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F5F5F7] mb-8 leading-tight"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The Art of<br />Permanent Expression
            </h2>
            <div
              className="space-y-5 text-[#C8D0DC]/80 leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <p>
                Monty Ink was founded in Seminyak, Bali with one conviction: that a tattoo
                is not a product, it is a collaboration. Every client brings a story. Our artists
                bring the skill to make it permanent.
              </p>
              <p>
                We specialize in custom work only. No flash sheets, no off-the-shelf designs.
                From the first consultation to the final line, your piece is created exclusively for you.
              </p>
              <p>
                Rooted in Balinese artistic tradition, our studio fuses the island&apos;s spiritual
                heritage with contemporary tattooing techniques. The result is work that carries
                meaning beyond aesthetics.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#1A3A6B]" />
              <span
                className="text-xs tracking-[0.3em] uppercase text-[#2E7BFF]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Est. 2012, Bali
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={TATTOOED_ARM}
                alt="Tattoo artistry at Monty Ink"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, #0A0A0F 0%, transparent 40%)" }} />
            </div>
            <div
              className="absolute -bottom-4 -right-4 p-6 border border-[#1A3A6B]/60 bg-[#0A0A0F]"
              style={{ fontFamily: "var(--font-jetbrains)" }}
            >
              <div className="text-[#2E7BFF] text-sm">Studio</div>
              <div className="text-[#C8D0DC]/60 text-xs mt-1">Seminyak, Bali</div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-28 px-6 bg-[#0D0D12]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Selected Work
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F5F5F7]"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {IG_POSTS.map((src, i) => (
              <div
                key={i}
                className="relative aspect-square overflow-hidden group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Portfolio piece ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(10,10,15,0.6)" }}
                >
                  <div
                    className="text-xs tracking-[0.3em] uppercase text-[#F5F5F7]"
                    style={{ fontFamily: "var(--font-cinzel)" }}
                  >
                    View
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/montyinktattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-[#C8D0DC]/70 hover:text-[#2E7BFF] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <span>Follow on Instagram</span>
              <span className="text-[#2E7BFF]">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              What We Do
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F5F5F7]"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Our Craft
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="p-8 border border-[#1A3A6B]/40 hover:border-[#2E7BFF]/40 transition-colors group"
              >
                <div
                  className="text-[#2E7BFF] text-xl mb-4 group-hover:text-[#F5F5F7] transition-colors"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {s.icon}
                </div>
                <h3
                  className="text-xl font-semibold text-[#F5F5F7] mb-3 tracking-wide"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-[#C8D0DC]/70 leading-relaxed text-sm"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists */}
      <section className="py-28 px-6 bg-[#0D0D12]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              The Team
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F5F5F7]"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Our Artists
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {artists.map((a) => (
              <div key={a.name} className="group">
                <div className="relative aspect-square overflow-hidden mb-5">
                  <Image
                    src={a.image}
                    alt={a.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, #0A0A0F 0%, transparent 50%)" }}
                  />
                </div>
                <h3
                  className="text-lg font-semibold text-[#F5F5F7] mb-1"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {a.name}
                </h3>
                <p
                  className="text-xs tracking-[0.15em] uppercase text-[#2E7BFF] mb-2"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {a.role}
                </p>
                <p
                  className="text-xs text-[#C8D0DC]/60"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {a.specialty}
                </p>
                <p
                  className="text-xs text-[#C8D0DC]/40 mt-1"
                  style={{ fontFamily: "var(--font-jetbrains)" }}
                >
                  {a.experience} experience
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio */}
      <section id="studio" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-square overflow-hidden">
                <Image src={ROTARY} alt="Studio equipment" fill className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden mt-8">
                <Image src={COIL} alt="Tattoo machine" fill className="object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden col-span-2">
                <Image src={INK_BOTTLE} alt="Ink collection" fill className="object-cover" />
              </div>
            </div>

            <div>
              <p
                className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                The Space
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#F5F5F7] mb-8 leading-tight"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                A Studio Built for Serious Work
              </h2>
              <div
                className="space-y-5 text-[#C8D0DC]/80 leading-relaxed text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <p>
                  Located in the heart of Seminyak, Monty Ink operates from a purpose-built
                  private studio. Each artist has a dedicated station designed for focus and precision.
                </p>
                <p>
                  We maintain medical-grade hygiene standards. Every needle and tube is single-use.
                  Surfaces are hospital-grade sterile. Your safety is non-negotiable.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { label: "Location", value: "Seminyak, Bali" },
                  { label: "Hours", value: "10am – 8pm Daily" },
                  { label: "Hygiene", value: "Medical Grade" },
                  { label: "Languages", value: "EN · ID · JP" },
                ].map((item) => (
                  <div key={item.label} className="border border-[#1A3A6B]/40 p-4">
                    <div
                      className="text-[10px] tracking-[0.3em] uppercase text-[#2E7BFF] mb-1"
                      style={{ fontFamily: "var(--font-jetbrains)" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-sm text-[#C8D0DC]"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="py-32 px-6 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A0A0F 0%, #0D2244 50%, #1A3A6B 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(46,123,255,0.1) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative w-16 h-16">
              <Image src={LOGO} alt="Monty Ink" fill className="object-contain" />
            </div>
          </div>
          <h2
            className="text-4xl md:text-6xl font-bold text-[#F5F5F7] mb-6"
            style={{ fontFamily: "var(--font-cinzel)" }}
          >
            Begin Your Piece
          </h2>
          <p
            className="text-[#C8D0DC]/70 mb-10 text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Ready to wear your story permanently? Let&apos;s talk about your vision.
            Consultations are free. Great tattoos are not rushed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#2E7BFF]/30 hover:-translate-y-0.5"
              style={{
                fontFamily: "var(--font-cinzel)",
                background: "linear-gradient(135deg, #1A3A6B, #2E7BFF)",
                color: "#F5F5F7",
              }}
            >
              Message on WhatsApp
            </a>
            <a
              href="https://www.instagram.com/montyinktattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 text-sm tracking-[0.2em] uppercase text-[#C8D0DC] border border-[#C8D0DC]/30 hover:border-[#2E7BFF] hover:text-[#2E7BFF] transition-all duration-300"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              View Instagram
            </a>
          </div>

          <div
            className="text-xs text-[#C8D0DC]/40 tracking-[0.2em]"
            style={{ fontFamily: "var(--font-jetbrains)" }}
          >
            Jl. Kayu Jati No. 12, Seminyak, Bali 80361
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A3A6B]/30 bg-[#0A0A0F] py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7">
              <Image src={LOGO} alt="Monty Ink" fill className="object-contain" />
            </div>
            <span
              className="text-sm tracking-[0.25em] uppercase text-[#C8D0DC]/60"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              Monty Ink
            </span>
          </div>

          <div
            className="text-xs text-[#C8D0DC]/40 tracking-[0.15em] text-center"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            © 2024 Monty Ink. All rights reserved. Seminyak, Bali, Indonesia.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/montyinktattoo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] uppercase text-[#C8D0DC]/50 hover:text-[#2E7BFF] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Instagram
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.2em] uppercase text-[#C8D0DC]/50 hover:text-[#2E7BFF] transition-colors"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
