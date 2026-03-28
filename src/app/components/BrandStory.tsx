import ScrollReveal from "./ScrollReveal";

export default function BrandStory() {
  return (
    <section id="story" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Row 1: Origin Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal direction="left">
            <div>
              <p className="text-blue-electric text-xs tracking-[0.3em] uppercase font-medium mb-5">
                Our Story
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-[3.5rem] text-text-primary font-semibold leading-[1.05] tracking-tight">
                Born in Bali,
                <br />
                <span className="text-blue-deep">Crafted</span> for the World
              </h2>
              <div className="mt-5">
                <span className="line-slash" />
              </div>
              <p className="mt-7 text-text-secondary text-base md:text-lg leading-relaxed">
                Mounty Ink was born from a simple belief — that getting a tattoo
                should be as transformative as the art itself. We created a space
                in Bali where world-class artistry meets the island&apos;s
                spiritual energy.
              </p>
              <p className="mt-5 text-text-muted text-sm md:text-base leading-relaxed">
                More than a studio, Mounty Ink is a destination for those who
                seek meaningful art on their skin — a permanent reminder of
                their journey through paradise.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="img-placeholder aspect-[4/5]">
              <span>Founder portrait — editorial style</span>
            </div>
          </ScrollReveal>
        </div>

        {/* Row 2: Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-24 md:mt-32">
          <ScrollReveal direction="left" className="order-2 lg:order-1">
            <div className="img-placeholder aspect-[4/3]">
              <span>Studio interior — luxurious, clean, atmospheric</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="order-1 lg:order-2">
            <div>
              <p className="text-blue-electric text-xs tracking-[0.3em] uppercase font-medium mb-5">
                The Philosophy
              </p>
              <h3 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl text-text-primary font-semibold leading-[1.1] tracking-tight">
                Not a Shop.
                <br />
                An <span className="text-blue-deep">Atelier.</span>
              </h3>
              <div className="mt-5">
                <span className="line-slash" />
              </div>
              <p className="mt-7 text-text-secondary text-base md:text-lg leading-relaxed">
                Every piece at Mounty Ink is a custom collaboration between
                artist and client — a conversation between your story and our
                craft. No flash off the wall, no rushing.
              </p>
              <p className="mt-5 text-text-muted text-sm md:text-base leading-relaxed">
                Our studio is designed to feel like a sanctuary. Balinese
                architecture, premium equipment, and an atmosphere that puts you
                at ease from the moment you walk in.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
