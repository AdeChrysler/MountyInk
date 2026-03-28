import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { MessageSquare, Palette, Pen } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Consult",
    description:
      "Share your vision. We discuss design ideas, placement, size, and match you with the perfect artist for your style.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Design",
    description:
      "Your artist creates a custom design tailored to your body and story. We refine together until it's exactly right.",
  },
  {
    icon: Pen,
    number: "03",
    title: "Ink",
    description:
      "Relax in our premium studio while your artist brings the design to life. Every line, every shade — pure artistry.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          subtitle="The Process"
          title="How It Works"
          description="From first conversation to finished masterpiece — a seamless, three-step journey."
        />

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-[52px] left-[16.67%] right-[16.67%] h-px bg-divider" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.15}>
              <div className="text-center relative">
                {/* Icon container */}
                <div className="relative z-10 w-[72px] h-[72px] mx-auto mb-7 bg-bg-primary border border-divider flex items-center justify-center group-hover:border-blue-electric transition-all duration-500">
                  <step.icon
                    size={26}
                    className="text-blue-electric"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Step number */}
                <p className="font-[family-name:var(--font-heading)] text-5xl text-blue-deep/40 font-bold mb-3">
                  {step.number}
                </p>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-heading)] text-2xl text-text-primary mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-text-muted text-sm leading-relaxed max-w-[280px] mx-auto">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
