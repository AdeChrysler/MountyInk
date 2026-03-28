import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const studioImages = [
  { label: "Reception & lounge — dark wood, low lighting, art on walls", className: "col-span-2 row-span-2" },
  { label: "Tattoo station — adjustable chair, overhead light", className: "col-span-1 row-span-1" },
  { label: "Sterilization room — autoclave, organized", className: "col-span-1 row-span-1" },
  { label: "Design consultation — iPad, reference books", className: "col-span-1 row-span-1" },
  { label: "Exterior — Balinese gate, tropical plants, night", className: "col-span-1 row-span-1" },
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[220px]">
            {studioImages.map((img, i) => (
              <div
                key={i}
                className={`img-placeholder group cursor-pointer hover:brightness-110 transition-all duration-500 ${img.className}`}
              >
                <span>{img.label}</span>
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
