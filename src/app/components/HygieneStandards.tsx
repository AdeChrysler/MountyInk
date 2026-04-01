import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { ShieldCheck, Syringe, Sparkles, Award } from "lucide-react";

const standards = [
  {
    icon: Syringe,
    title: "Single-Use Equipment",
    description:
      "Every needle, tube, and grip is brand new and disposed of after each session.",
  },
  {
    icon: ShieldCheck,
    title: "Sterilized Environment",
    description:
      "All reusable equipment is autoclaved. Surfaces are sanitized between every client.",
  },
  {
    icon: Sparkles,
    title: "Premium Inks",
    description:
      "We use certified, high-quality inks from reputable brands — designed for vibrant, lasting results.",
  },
  {
    icon: Award,
    title: "Professional Standards",
    description:
      "Our artists follow strict hygiene protocols and maintain a clean, professional studio environment.",
  },
];

export default function HygieneStandards() {
  return (
    <section className="py-16 md:py-28 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Your Safety"
          title="Hygiene & Standards"
          description="Your wellbeing is our priority. We maintain strict protocols for every session."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {standards.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="flex gap-5 p-6 md:p-7 border border-divider bg-gradient-card hover:border-blue-electric/25 transition-all duration-500">
                <div className="w-11 h-11 shrink-0 border border-blue-electric/20 flex items-center justify-center">
                  <item.icon size={20} className="text-blue-electric" strokeWidth={1.5} />
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
