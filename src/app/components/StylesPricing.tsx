import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const styles = [
  {
    name: "Fine Line",
    description: "Delicate, precise linework with intricate detail. Perfect for minimalist designs and botanical illustrations.",
    src: "/images/style-fineline.png",
  },
  {
    name: "Realism",
    description: "Photorealistic portraits and nature scenes. Breathtaking depth and dimension that captures life on skin.",
    src: "/images/style-realism.png",
  },
  {
    name: "Balinese Traditional",
    description: "Sacred Balinese motifs — Barong, lotus, mandala. Cultural artistry meets modern technique.",
    src: "/images/style-balinese.png",
  },
  {
    name: "Black & Grey",
    description: "Classic shading and contrast. Timeless pieces built on masterful gradients that age beautifully.",
    src: "/images/style-blackgrey.png",
  },
  {
    name: "Watercolor",
    description: "Vibrant, flowing color work that captures the freedom and spontaneity of paint on canvas.",
    src: "/images/style-watercolor.png",
  },
  {
    name: "Japanese",
    description: "Bold traditional Irezumi. Dragons, koi, waves — the art of the masters, respected and reimagined.",
    src: "/images/style-japanese.png",
  },
];

export default function StylesPricing() {
  return (
    <section id="styles" className="py-24 md:py-32 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="What We Do"
          title="Our Styles"
          description="Every style, mastered. Contact us for a personalized quote tailored to your unique design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {styles.map((style, i) => (
            <ScrollReveal key={style.name} delay={i * 0.08}>
              <div className="group bg-gradient-card border border-divider hover:border-blue-electric/30 transition-all duration-500 h-full flex flex-col overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={style.src}
                    alt={`${style.name} tattoo style`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover img-crop group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                <div className="p-7 flex flex-col flex-grow">
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
