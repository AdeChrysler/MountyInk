import { User } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const artists = [
  { specialty: "Realism & Portraits" },
  { specialty: "Balinese & Japanese" },
  { specialty: "Black & Grey" },
];

export default function ArtistSpotlight() {
  return (
    <section id="artists" className="py-16 md:py-28 bg-bg-primary">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          subtitle="The Artists"
          title="Meet Our Team"
          description="A collective of passionate artists, each bringing their own unique style and expertise to every piece."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {artists.map((artist, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group">
                <div className="relative aspect-[3/4] mb-5 overflow-hidden bg-gradient-card border border-divider flex items-center justify-center">
                  <User size={48} className="text-text-muted/20" strokeWidth={1} />
                </div>
                <div className="text-center">
                  <div className="w-8 h-px bg-blue-electric/40 mx-auto mb-4" />
                  <p className="text-text-secondary text-xs tracking-[0.2em] uppercase">
                    {artist.specialty}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="text-center mt-14">
          <p className="text-text-muted text-sm leading-relaxed max-w-lg mx-auto">
            Our team of dedicated artists specializes in a wide range of styles
            — from fine line and realism to traditional Balinese and Japanese work.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
