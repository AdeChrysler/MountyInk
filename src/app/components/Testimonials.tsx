import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { Star, MessageSquare } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-28 bg-bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          subtitle="Client Experiences"
          title="Your Story Starts Here"
          description="We're building a community of happy clients — your experience could be featured next."
        />

        {/* Star commitment banner */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} className="text-blue-electric fill-blue-electric" />
              ))}
            </div>
            <p className="text-text-secondary text-sm">
              We strive for a five-star experience — every client, every session.
            </p>
          </div>
        </ScrollReveal>

        {/* Promise cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
          {[
            {
              title: "Before Your Session",
              description: "A thorough consultation to understand your vision, answer every question, and design something truly personal.",
            },
            {
              title: "During Your Session",
              description: "A clean, comfortable studio. A focused artist. Premium equipment. And all the time your piece needs — no rushing.",
            },
            {
              title: "After Your Session",
              description: "Detailed aftercare guidance, follow-up support, and the confidence that your art will look beautiful for years to come.",
            },
          ].map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.12}>
              <div className="bg-gradient-card border border-divider p-5 md:p-7 h-full flex flex-col text-center">
                <div className="w-10 h-10 mx-auto mb-5 border border-blue-electric/20 flex items-center justify-center">
                  <MessageSquare size={16} className="text-blue-electric" strokeWidth={1.5} />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Review CTA */}
        <ScrollReveal className="text-center mt-14">
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-divider">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={10} className="text-blue-electric fill-blue-electric" />
              ))}
            </div>
            <p className="text-text-muted text-xs tracking-[0.1em] uppercase">
              Committed to Five-Star Experiences
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
