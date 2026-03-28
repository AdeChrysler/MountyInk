import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { ShieldCheck, Syringe, Sparkles, Award } from "lucide-react";

const standards = [
  {
    icon: Syringe,
    title: "Single-Use Everything",
    description:
      "Every needle, tube, and grip is brand new and disposed of after each session. Zero cross-contamination risk. Period.",
  },
  {
    icon: ShieldCheck,
    title: "Hospital-Grade Sterilization",
    description:
      "Autoclave sterilization for all reusable equipment. Surfaces sanitized between every client with medical-grade disinfectant.",
  },
  {
    icon: Sparkles,
    title: "Premium Inks Only",
    description:
      "We use only certified, vegan-friendly inks from world-leading brands. Safe for all skin types, vibrant for life.",
  },
  {
    icon: Award,
    title: "Licensed & Certified",
    description:
      "Fully licensed by Bali health authorities. All artists hold bloodborne pathogen and first aid certifications.",
  },
];

export default function HygieneStandards() {
  return (
    <section className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Your Safety"
          title="Hygiene & Standards"
          description="International standards, Balinese care. Your wellbeing is non-negotiable."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {standards.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="flex gap-5 p-6 md:p-7 border border-divider bg-gradient-card hover:border-blue-electric/25 transition-all duration-500">
                <div className="w-11 h-11 shrink-0 border border-blue-electric/20 flex items-center justify-center">
                  <item.icon
                    size={20}
                    className="text-blue-electric"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold text-[0.95rem] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
