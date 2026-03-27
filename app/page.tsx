import Image from "next/image";
import Navbar from "../components/Navbar";
import Reveal from "../components/Reveal";
import AnimatedStats from "../components/AnimatedStats";
import PortfolioSection from "../components/PortfolioSection";

const LOGO =
  "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-needle-rose-bali.png";
const TATTOOED_ARM =
  "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-tattooed-arm-art.png";

const WA_LINK =
  "https://wa.me/6282144441888?text=Hi%20Monty%20Ink%2C%20I%27d%20like%20to%20begin%20my%20piece.";

const studioImages = [
  {
    src: "https://s3.zenova.id/ads/monty-ink/studio/studio-interior.png",
    alt: "Monty Ink studio interior",
  },
  {
    src: "https://s3.zenova.id/ads/monty-ink/studio/equipment.png",
    alt: "Professional tattoo equipment",
  },
  {
    src: "https://s3.zenova.id/ads/monty-ink/studio/artist-at-work.png",
    alt: "Artist at work",
  },
];

const artists = [
  {
    name: "Wayan Monty",
    role: "Founder & Lead Artist",
    specialty: "Blackwork · Balinese Traditional · Fine Line",
    experience: "12 years",
    bio: "Born in Ubud, Wayan channels the spiritual energy of Bali into every piece. His blackwork is meditative — each dot placed with intention.",
    image: "https://s3.zenova.id/ads/monty-ink/artists/wayan-monty.png",
  },
  {
    name: "Made Surya",
    role: "Senior Artist",
    specialty: "Geometric · Mandala · Neo-Traditional",
    experience: "8 years",
    bio: "Made trained in classical Balinese painting before discovering tattooing. His geometric mandalas carry the precision of sacred architecture.",
    image: "https://s3.zenova.id/ads/monty-ink/artists/made-surya.png",
  },
  {
    name: "Ketut Artha",
    role: "Artist",
    specialty: "Watercolor · Realism · Fine Line",
    experience: "5 years",
    bio: "Ketut approaches tattoo like a watercolorist — soft gradients, living forms, and a delicate touch that makes every fine-line piece breathe.",
    image: "https://s3.zenova.id/ads/monty-ink/artists/ketut-artha.png",
  },
];

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

const testimonials = [
  {
    name: "Sarah M.",
    location: "Melbourne, Australia",
    rating: 5,
    text: "Wayan created something I never thought possible — my grandmother's batik pattern translated into the most breathtaking arm piece. People stop me on the street every week. Monty Ink is not a tattoo studio, it is an art collaboration.",
  },
  {
    name: "James R.",
    location: "London, UK",
    rating: 5,
    text: "I have been collecting tattoos for fifteen years on four continents. The fine line botanical sleeve Made designed for me is the finest work I own. The consultation process alone is worth the flight to Bali.",
  },
  {
    name: "Yuki T.",
    location: "Tokyo, Japan",
    rating: 5,
    text: "Ketut understood my vision after just one conversation. The realism piece on my shoulder is so precise people ask if it is a photograph. The studio is immaculate, the atmosphere is calm. I will return every year.",
  },
  {
    name: "Marco L.",
    location: "Milan, Italy",
    rating: 5,
    text: "The Balinese geometric mandala Wayan created covers my entire back. Six sessions, each more refined than the last. A masterpiece I wear. If you want work that carries true meaning, this is the only studio in Southeast Asia.",
  },
];

function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-[#2E7BFF]/40" />
      <svg
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill="none"
        style={{ color: "rgba(46,123,255,0.5)" }}
      >
        <circle cx="10" cy="10" r="1.5" fill="currentColor" />
        <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="0.6" />
        <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="0.6" />
        <line x1="10" y1="1" x2="10" y2="19" stroke="currentColor" strokeWidth="0.6" />
        <line x1="1" y1="10" x2="19" y2="10" stroke="currentColor" strokeWidth="0.6" />
      </svg>
      <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-[#2E7BFF]/40" />
    </div>
  );
}

function GradientDivider() {
  return (
    <div className="h-px bg-gradient-to-r from-transparent via-[#2E7BFF]/25 to-transparent" />
  );
}

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A0A0F 0%, #0D2244 35%, #1A3A6B 70%, #2E7BFF 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(46,123,255,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div
            className="flex justify-center mb-10"
            style={{ animation: "fadeInDown 0.8s ease both" }}
          >
            <div className="relative w-24 h-24">
              <Image
                src={LOGO}
                alt="Monty Ink Logo"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <p
            className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-6"
            style={{
              fontFamily: "var(--font-inter)",
              animation: "fadeInUp 0.8s ease 0.1s both",
            }}
          >
            Tattoo Studio · Bali, Indonesia
          </p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight text-[#F5F5F7] mb-6"
            style={{
              fontFamily: "var(--font-cinzel)",
              animation: "fadeInUp 0.8s ease 0.2s both",
            }}
          >
            Born in Bali.
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(90deg, #2E7BFF, #C8D0DC)",
              }}
            >
              Drawn for Life.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-[#C8D0DC]/80 max-w-xl mx-auto mb-12 leading-relaxed"
            style={{
              fontFamily: "var(--font-inter)",
              animation: "fadeInUp 0.8s ease 0.3s both",
            }}
          >
            Premium custom tattoos where Balinese artistry meets modern
            precision. Every piece is singular. Every line is intentional.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animation: "fadeInUp 0.8s ease 0.4s both" }}
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[48px] px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:shadow-lg hover:shadow-[#2E7BFF]/30 hover:-translate-y-0.5 flex items-center justify-center"
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
              className="w-full sm:w-auto min-h-[48px] px-8 py-4 text-sm tracking-[0.2em] uppercase text-[#C8D0DC] border border-[#C8D0DC]/30 hover:border-[#2E7BFF] hover:text-[#2E7BFF] transition-all duration-300 flex items-center justify-center"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              View Portfolio
            </a>
          </div>
        </div>

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

      {/* ── Stats Strip ── */}
      <section className="border-y border-[#1A3A6B]/40 bg-[#0A0A0F]">
        <AnimatedStats />
      </section>

      {/* ── About ── */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our Story
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F5F5F7] mb-4 leading-tight"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The Art of
              <br />
              Permanent Expression
            </h2>
            <SectionDivider />
            <div
              className="space-y-5 text-[#C8D0DC]/80 leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <p>
                Monty Ink was founded in Seminyak, Bali with one conviction:
                that a tattoo is not a product, it is a collaboration. Every
                client brings a story. Our artists bring the skill to make it
                permanent.
              </p>
              <p>
                We specialize in custom work only. No flash sheets, no
                off-the-shelf designs. From the first consultation to the final
                line, your piece is created exclusively for you.
              </p>
              <p>
                Rooted in Balinese artistic tradition, our studio fuses the
                island&apos;s spiritual heritage with contemporary tattooing
                techniques. The result is work that carries meaning beyond
                aesthetics.
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
          </Reveal>

          <Reveal delay={150}>
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={TATTOOED_ARM}
                  alt="Tattoo artistry at Monty Ink"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, #0A0A0F 0%, transparent 40%)",
                  }}
                />
              </div>
              <div
                className="absolute -bottom-4 -right-4 p-6 border border-[#1A3A6B]/60 bg-[#0A0A0F]"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                <div className="text-[#2E7BFF] text-sm">Studio</div>
                <div className="text-[#C8D0DC]/60 text-xs mt-1">
                  Seminyak, Bali
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <GradientDivider />

      {/* ── Portfolio ── */}
      <section id="portfolio" className="py-32 px-6 bg-[#0D0D12]">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-6">
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
            <SectionDivider />
          </Reveal>

          <PortfolioSection />

          <Reveal className="text-center mt-12">
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
          </Reveal>
        </div>
      </section>

      <GradientDivider />

      {/* ── Services ── */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-6">
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
            <SectionDivider />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="p-8 border border-[#1A3A6B]/40 hover:border-[#2E7BFF]/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#2E7BFF]/10 transition-all duration-300 group h-full">
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ── Testimonials ── */}
      <section className="py-32 px-6 bg-[#0D0D12]">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-6">
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-4"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Client Words
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-[#F5F5F7]"
              style={{ fontFamily: "var(--font-cinzel)" }}
            >
              The Reviews
            </h2>
            <SectionDivider />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="p-8 border border-[#1A3A6B]/40 hover:border-[#2E7BFF]/30 transition-colors h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span key={j} className="text-[#2E7BFF] text-sm">
                        ★
                      </span>
                    ))}
                  </div>
                  <p
                    className="text-[#C8D0DC]/80 leading-relaxed text-sm mb-6 italic"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 border border-[#1A3A6B] flex items-center justify-center shrink-0">
                      <span
                        className="text-[#2E7BFF] text-xs"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        {t.name[0]}
                      </span>
                    </div>
                    <div>
                      <div
                        className="text-sm text-[#F5F5F7] tracking-wide"
                        style={{ fontFamily: "var(--font-cinzel)" }}
                      >
                        {t.name}
                      </div>
                      <div
                        className="text-xs text-[#C8D0DC]/40"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ── Artists ── */}
      <section id="artists" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-6">
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
            <SectionDivider />
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {artists.map((a, i) => (
              <Reveal key={a.name} delay={i * 100}>
                <div className="group">
                  <div className="relative aspect-square overflow-hidden mb-5">
                    <Image
                      src={a.image}
                      alt={a.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, #0A0A0F 0%, transparent 50%)",
                      }}
                    />
                    {/* Bio overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5"
                      style={{ background: "rgba(10,10,15,0.88)" }}
                    >
                      <p
                        className="text-xs text-[#C8D0DC]/80 leading-relaxed"
                        style={{ fontFamily: "var(--font-inter)" }}
                      >
                        {a.bio}
                      </p>
                    </div>
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
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ── Studio ── */}
      <section id="studio" className="py-32 px-6 bg-[#0D0D12]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={studioImages[0].src}
                    alt={studioImages[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden mt-8">
                  <Image
                    src={studioImages[1].src}
                    alt={studioImages[1].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div
                  className="relative col-span-2 overflow-hidden"
                  style={{ aspectRatio: "2/1" }}
                >
                  <Image
                    src={studioImages[2].src}
                    alt={studioImages[2].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <p
                className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-4"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                The Space
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold text-[#F5F5F7] mb-4 leading-tight"
                style={{ fontFamily: "var(--font-cinzel)" }}
              >
                A Studio Built for Serious Work
              </h2>
              <SectionDivider />
              <div
                className="space-y-5 text-[#C8D0DC]/80 leading-relaxed text-sm"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <p>
                  Located in the heart of Seminyak, Monty Ink operates from a
                  purpose-built private studio. Each artist has a dedicated
                  station designed for focus and precision.
                </p>
                <p>
                  We maintain medical-grade hygiene standards. Every needle and
                  tube is single-use. Surfaces are hospital-grade sterile. Your
                  safety is non-negotiable.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { label: "Location", value: "Seminyak, Bali" },
                  { label: "Hours", value: "Open Daily 10:00 — 20:00" },
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
            </Reveal>
          </div>
        </div>
      </section>

      <GradientDivider />

      {/* ── CTA ── */}
      <section
        id="contact"
        className="py-32 px-6 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0A0A0F 0%, #0D2244 50%, #1A3A6B 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(46,123,255,0.1) 0%, transparent 70%)",
          }}
        />
        <Reveal className="relative z-10 max-w-3xl mx-auto text-center">
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
          <SectionDivider />
          <p
            className="text-[#C8D0DC]/70 mb-10 text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Ready to wear your story permanently? Let&apos;s talk about your
            vision. Consultations are free. Great tattoos are not rushed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto min-h-[52px] px-10 py-4 text-sm tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#2E7BFF]/30 hover:-translate-y-0.5 flex items-center justify-center"
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
              className="w-full sm:w-auto min-h-[52px] px-10 py-4 text-sm tracking-[0.2em] uppercase text-[#C8D0DC] border border-[#C8D0DC]/30 hover:border-[#2E7BFF] hover:text-[#2E7BFF] transition-all duration-300 flex items-center justify-center"
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
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#1A3A6B]/30 bg-[#0A0A0F] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-8 h-8">
                  <Image src={LOGO} alt="Monty Ink" fill className="object-contain" />
                </div>
                <span
                  className="text-sm tracking-[0.25em] uppercase text-[#F5F5F7]"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  Monty Ink
                </span>
              </div>
              <p
                className="text-xs text-[#C8D0DC]/50 leading-relaxed"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Premium custom tattoo studio in Seminyak, Bali. Born from
                tradition. Built for permanence.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-[10px] tracking-[0.3em] uppercase text-[#2E7BFF] mb-4"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Contact
              </h4>
              <ul
                className="space-y-3 text-xs text-[#C8D0DC]/60"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <li>
                  <a
                    href="mailto:info@montyink.com"
                    className="hover:text-[#2E7BFF] transition-colors"
                  >
                    info@montyink.com
                  </a>
                </li>
                <li>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#2E7BFF] transition-colors"
                  >
                    +62 821-4444-1888
                  </a>
                </li>
                <li className="text-[#C8D0DC]/40">Open Daily 10:00 — 20:00</li>
              </ul>
            </div>

            {/* Location */}
            <div>
              <h4
                className="text-[10px] tracking-[0.3em] uppercase text-[#2E7BFF] mb-4"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Location
              </h4>
              <p
                className="text-xs text-[#C8D0DC]/60 leading-relaxed mb-3"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Jl. Kayu Jati No. 12
                <br />
                Seminyak, Bali 80361
                <br />
                Indonesia
              </p>
              <a
                href="https://maps.google.com/?q=Seminyak+Bali+Indonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.2em] uppercase text-[#2E7BFF] hover:underline"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Open in Maps →
              </a>
            </div>

            {/* Social */}
            <div>
              <h4
                className="text-[10px] tracking-[0.3em] uppercase text-[#2E7BFF] mb-4"
                style={{ fontFamily: "var(--font-jetbrains)" }}
              >
                Follow
              </h4>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/montyinktattoo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#C8D0DC]/60 hover:text-[#2E7BFF] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <span className="text-[#2E7BFF]">▸</span> Instagram
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-[#C8D0DC]/60 hover:text-[#2E7BFF] transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  <span className="text-[#2E7BFF]">▸</span> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            className="mb-10 border border-[#1A3A6B]/30 overflow-hidden"
            style={{ height: "180px" }}
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=115.148%2C-8.706%2C115.168%2C-8.686&layer=mapnik"
              width="100%"
              height="180"
              style={{
                border: 0,
                filter:
                  "invert(0.9) hue-rotate(180deg) brightness(0.75) saturate(0.8)",
              }}
              loading="lazy"
              title="Monty Ink location — Seminyak, Bali"
            />
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-[#1A3A6B]/20">
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
        </div>
      </footer>
    </>
  );
}
