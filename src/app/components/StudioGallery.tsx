import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const studioImages = [
  {
    src: "/images/studio-reception.png",
    alt: "Mounty Ink reception lounge — marble floors, leather sofa, art shelves",
    className: "col-span-2 row-span-2",
  },
  {
    src: "/images/studio-room.png",
    alt: "Tattoo room — luxury beds, dark blue walls, marble floor",
    className: "col-span-2 row-span-1",
  },
  {
    src: "/images/studio-exterior.png",
    alt: "Mounty Ink Bali studio exterior at dusk",
    className: "col-span-2 row-span-1",
  },
];

export default function StudioGallery() {
  return (
    <section id="studio" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="The Space"
          title="Our Studio"
          description="A sanctuary designed for art. Step inside Mounty Ink."
        />

        <ScrollReveal>
          <div className="grid grid-cols-4 gap-2 md:gap-3 auto-rows-[220px] md:auto-rows-[260px]">
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
