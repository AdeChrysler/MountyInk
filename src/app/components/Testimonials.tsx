import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Melbourne, Australia",
    quote:
      "Mounty Ink gave me the tattoo experience of a lifetime. The studio is immaculate, the artists are true masters. My realism piece gets compliments everywhere I go.",
    style: "Realism Portrait",
    artist: "Monty",
  },
  {
    name: "James K.",
    location: "London, UK",
    quote:
      "I've been tattooed in London, Berlin, and Tokyo — Mounty Ink in Bali tops them all. The sacred geometry piece Dewa created is absolutely breathtaking.",
    style: "Sacred Geometry",
    artist: "Dewa",
  },
  {
    name: "Lisa T.",
    location: "Vancouver, Canada",
    quote:
      "The fine line work is pristine. Ari understood exactly what I wanted and elevated it beyond my imagination. A true luxury tattoo experience in paradise.",
    style: "Fine Line",
    artist: "Ari",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Client Stories"
          title="Words That Stay"
          description="From travelers who wear our art around the world."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.12}>
              <div className="bg-gradient-card border border-divider p-7 h-full flex flex-col">
                {/* Stars + Quote icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={12}
                        className="text-blue-electric fill-blue-electric"
                      />
                    ))}
                  </div>
                  <Quote size={16} className="text-blue-electric/30" />
                </div>

                {/* Quote */}
                <blockquote className="text-text-secondary text-sm leading-relaxed flex-grow">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Tattoo Photo */}
                <div className="img-placeholder aspect-[2.5/1] mt-5 mb-5">
                  <span>Healed {t.style} by {t.artist}</span>
                </div>

                {/* Client */}
                <div className="pt-5 border-t border-divider">
                  <p className="text-text-primary text-sm font-medium">
                    {t.name}
                  </p>
                  <p className="text-text-muted text-xs mt-0.5">{t.location}</p>
                  <p className="text-blue-electric text-[0.65rem] mt-2 tracking-[0.1em] uppercase">
                    {t.style} &middot; by {t.artist}
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
