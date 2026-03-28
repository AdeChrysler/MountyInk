import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { Fingerprint, Clock, Heart, Globe, Palette, Shield } from "lucide-react";

const reasons = [
  {
    icon: Fingerprint,
    title: "100% Custom Work",
    description: "No flash, no templates. Every piece is designed from scratch — a one-of-one collaboration between you and your artist.",
  },
  {
    icon: Shield,
    title: "Safety You Can See",
    description: "Walk through our sterilization process before your session. Single-use needles, autoclave-sealed tools, spotless studio.",
  },
  {
    icon: Palette,
    title: "Multi-Style Mastery",
    description: "Fine line, realism, Balinese, Japanese, watercolor, black & grey — our team covers every major style at the highest level.",
  },
  {
    icon: Globe,
    title: "Made for Travelers",
    description: "English-speaking artists, international standards, and a booking process designed for visitors to Bali.",
  },
  {
    icon: Heart,
    title: "The Full Experience",
    description: "Not just a tattoo — a memory. Our studio is a sanctuary with Balinese architecture, curated atmosphere, and genuine hospitality.",
  },
  {
    icon: Clock,
    title: "Aftercare Support",
    description: "Your journey doesn't end at the door. We provide aftercare guidance and stay available for follow-up questions.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Why Mounty Ink"
          title="What Sets Us Apart"
          description="More than a tattoo studio — a destination for meaningful art."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <ScrollReveal key={reason.title} delay={i * 0.08}>
              <div className="group p-7 border border-divider hover:border-blue-electric/25 bg-gradient-card transition-all duration-500 h-full">
                <div className="w-11 h-11 mb-5 border border-blue-electric/20 flex items-center justify-center group-hover:border-blue-electric/50 group-hover:shadow-[0_0_24px_rgba(46,123,255,0.08)] transition-all duration-500">
                  <reason.icon size={20} className="text-blue-electric" strokeWidth={1.5} />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-text-primary mb-2">
                  {reason.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
