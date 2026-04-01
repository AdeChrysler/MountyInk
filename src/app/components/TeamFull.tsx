import { User } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const artists = [
  { specialty: "Realism & Portraits" },
  { specialty: "Balinese & Japanese" },
  { specialty: "Black & Grey" },
];

export default function TeamFull() {
  return (
    <section id="team" className="py-16 md:py-28 bg-bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          subtitle="The People"
          title="Our Artists"
          description="A team of passionate artists dedicated to creating meaningful, wearable art."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {artists.map((artist, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="relative aspect-[3/4] mb-5 overflow-hidden bg-gradient-card border border-divider flex items-center justify-center">
                  <User size={48} className="text-text-muted/20" strokeWidth={1} />
                </div>
                <div className="w-6 h-px bg-blue-electric/30 mx-auto mb-3" />
                <p className="text-text-secondary text-xs tracking-[0.2em] uppercase">
                  {artist.specialty}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-16">
          <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Each artist at Mounty Ink brings a distinct perspective and mastery
            — spanning realism, fine line, sacred geometry, traditional Balinese,
            Japanese, and watercolor styles.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
