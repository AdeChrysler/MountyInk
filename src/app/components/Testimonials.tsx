import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          subtitle="Client Stories"
          title="What They Say"
          description="Real stories from clients who wear our art around the world."
        />

        {/* Placeholder — replace with real testimonials when available */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <ScrollReveal key={i} delay={i * 0.12}>
              <div className="bg-gradient-card border border-divider p-7 h-full flex flex-col items-center text-center">
                <Quote size={20} className="text-blue-electric/20 mb-5" />

                <div className="img-placeholder aspect-square w-16 h-16 rounded-full mb-5">
                  <span className="!text-[0.45rem]">Client</span>
                </div>

                <p className="text-text-muted text-sm leading-relaxed italic flex-grow">
                  &ldquo;Client testimonial coming soon. Real reviews from real
                  people who experienced Mounty Ink.&rdquo;
                </p>

                <div className="mt-5 pt-5 border-t border-divider w-full">
                  <p className="text-text-muted/40 text-xs tracking-[0.15em] uppercase">
                    Review Coming Soon
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-12">
          <p className="text-text-muted text-sm">
            We&apos;re just getting started — your review could be here.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
