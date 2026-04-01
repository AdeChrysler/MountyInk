import ScrollReveal from "./ScrollReveal";
import { Star, Check } from "lucide-react";

const commitments = [
  "A genuine consultation — we listen before we draw",
  "Transparent pricing with no hidden costs",
  "A clean, sterilized studio for every session",
  "Premium certified inks and single-use needles",
  "Your comfort and safety as our top priority",
  "Aftercare guidance and follow-up support",
  "Respect for your time, your skin, and your story",
];

export default function OurCommitment() {
  return (
    <section className="py-16 md:py-28 bg-bg-primary border-t border-divider">
      <div className="max-w-4xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <div className="flex items-center justify-center gap-1 mb-5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={16} className="text-blue-electric fill-blue-electric" />
            ))}
          </div>
          <p className="text-blue-electric text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Our Promise to You
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-text-primary font-semibold tracking-tight">
            The Mounty Ink Commitment
          </h2>
          <p className="mt-5 text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            We&apos;re building something special in Bali. Here&apos;s what every
            client can expect, every time.
          </p>
          <div className="mt-5 flex justify-center">
            <span className="line-slash" />
          </div>
        </ScrollReveal>

        <div className="max-w-lg mx-auto">
          {commitments.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <div className="flex items-start gap-4 py-4 border-b border-divider last:border-b-0">
                <div className="w-5 h-5 shrink-0 mt-0.5 border border-blue-electric/40 flex items-center justify-center">
                  <Check size={11} className="text-blue-electric" strokeWidth={2.5} />
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-14">
          <blockquote className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-text-primary font-light italic leading-snug max-w-2xl mx-auto">
            &ldquo;We don&apos;t just aim for satisfaction — we aim for art
            you&apos;re <span className="text-blue-electric not-italic">proud</span> to wear.&rdquo;
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
