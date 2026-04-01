import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { Sparkles, ShieldCheck, Landmark } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    title: "Artistry First",
    description:
      "Every tattoo is a custom masterpiece. We never compromise on creative integrity — your skin deserves nothing less than gallery-worthy art.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Hygiene",
    description:
      "International health standards. Single-use needles. Hospital-grade sterilization. Your safety is as permanent as our ink.",
  },
  {
    icon: Landmark,
    title: "Rooted in Culture",
    description:
      "Balinese artistry runs through our DNA. We honor the island's sacred artistic traditions while pushing contemporary boundaries.",
  },
];

export default function VisionMission() {
  return (
    <section id="vision" className="py-16 md:py-28 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="What Drives Us"
          title="Our Values"
          description="Three pillars that define every decision we make, every line we draw."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.12}>
              <div className="group bg-gradient-card border border-divider p-8 md:p-10 text-center hover:border-blue-electric/25 transition-all duration-500 h-full">
                <div className="w-14 h-14 mx-auto mb-7 border border-blue-electric/20 flex items-center justify-center group-hover:border-blue-electric/50 group-hover:shadow-[0_0_30px_rgba(46,123,255,0.1)] transition-all duration-500">
                  <value.icon
                    size={24}
                    className="text-blue-electric"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-2xl text-text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Vision Statement */}
        <ScrollReveal className="mt-20 md:mt-24 text-center max-w-3xl mx-auto">
          <blockquote className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl text-text-primary font-light italic leading-snug">
            &ldquo;To make Bali the world&apos;s destination for
            <span className="text-blue-electric not-italic"> meaningful tattoo art</span>
            — one masterpiece at a time.&rdquo;
          </blockquote>
          <div className="mt-6 flex justify-center">
            <span className="line-slash" />
          </div>
          <p className="mt-5 text-text-muted text-xs tracking-[0.25em] uppercase">
            Our Vision
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
