import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const styles = [
  {
    name: "Realism",
    description: "Photorealistic portraits, animals, and nature. Breathtaking depth and dimension that captures life on skin.",
    src: "/images/portfolio-realism-real.jpg",
    alt: "Realism tattoo style — Egyptian Bastet cat forearm piece",
  },
  {
    name: "Balinese Traditional",
    description: "Sacred Balinese motifs — Barong, lotus, mandala. Cultural artistry meets modern technique rooted in the island's heritage.",
    src: "/images/portfolio-balinese-real-02.jpg",
    alt: "Balinese Traditional tattoo style — full back Barong demon mask",
  },
  {
    name: "Black & Grey",
    description: "Classic shading and contrast. Timeless pieces built on masterful gradients and intricate detail work that age beautifully.",
    src: "/images/portfolio-blackgrey-real.jpg",
    alt: "Black & Grey tattoo style — Zeus mythology full sleeve",
  },
  {
    name: "Japanese",
    description: "Bold traditional Irezumi. Dragons, koi, waves — the art of the masters, respected and reimagined with vivid color.",
    src: "/images/portfolio-japanese-real.jpg",
    alt: "Japanese tattoo style — dragon koi half-sleeve in vibrant color",
  },
];

export default function StylesPricing() {
  return (
    <section id="styles" className="py-16 md:py-28 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="What We Do"
          title="Our Styles"
          description="Every style, mastered. Contact us for a personalized quote tailored to your unique design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          {styles.map((style, i) => (
            <ScrollReveal key={style.name} delay={i * 0.08}>
              <div className="group bg-gradient-card border border-divider hover:border-blue-electric/30 transition-all duration-500 h-full flex flex-col overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={style.src}
                    alt={style.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover img-crop group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 md:p-7 flex flex-col flex-grow">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl text-text-primary mb-2">
                    {style.name}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed flex-grow">
                    {style.description}
                  </p>
                  <div className="mt-5 pt-5 border-t border-divider">
                    <a
                      href="#booking"
                      className="text-[0.7rem] text-blue-electric tracking-[0.1em] uppercase font-medium hover:text-text-primary transition-colors"
                    >
                      Contact for Quote &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
