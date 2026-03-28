import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    title: "Artistry",
    description: "Every piece is a custom collaboration — no flash, no templates. Your story, our craft.",
  },
  {
    title: "Precision",
    description: "World-class technique across every style — from single-needle fine line to bold traditional work.",
  },
  {
    title: "Hygiene",
    description: "Single-use needles, sterilized equipment, premium inks. Your safety comes first, always.",
  },
  {
    title: "Experience",
    description: "A sanctuary in Bali designed for comfort. Relax while we create something you'll wear forever.",
  },
];

export default function StatsCounter() {
  return (
    <section className="py-20 md:py-24 bg-bg-primary border-y border-divider">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {pillars.map((pillar, i) => (
            <ScrollReveal key={pillar.title} delay={i * 0.1}>
              <div className="text-center">
                <h3 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-blue-electric font-semibold mb-3">
                  {pillar.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
