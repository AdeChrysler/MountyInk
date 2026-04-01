import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const studioImages = [
  {
    src: "/images/portfolio-balinese-real-02.jpg",
    alt: "Full back Balinese Barong demon mask tattoo masterpiece",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/portfolio-realism-real-02.jpg",
    alt: "Lion with roses and roman numerals full sleeve tattoo",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    src: "/images/portfolio-blackgrey-real.jpg",
    alt: "Zeus and eagle Greek mythology full sleeve in black and grey",
    className: "md:col-span-2 md:row-span-1",
  },
];

export default function StudioGallery() {
  return (
    <section id="studio" className="py-16 md:py-28 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="The Space"
          title="Our Studio"
          description="A sanctuary designed for art. Step inside Mounty Ink."
        />

        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[260px] md:auto-rows-[260px]">
            {studioImages.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden group ${img.className}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-14 text-center">
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Located in the heart of Seminyak, our studio blends traditional
            Balinese architecture with modern luxury — creating the perfect
            environment for transformative tattoo experiences.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
