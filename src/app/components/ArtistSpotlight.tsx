"use client";

import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { Instagram } from "lucide-react";

const artists = [
  {
    name: "Monty",
    role: "Founder & Lead Artist",
    specialty: "Realism · Portraits",
    experience: "12+ years",
    bio: "Bali-born master of photorealistic work. Trained across Asia and Europe, his portraits carry emotional depth that defines the studio.",
  },
  {
    name: "Ari",
    role: "Senior Artist",
    specialty: "Fine Line · Minimalist",
    experience: "8+ years",
    bio: "Known for surgical precision in delicate linework. Clients travel from around the world for his minimalist approach.",
  },
  {
    name: "Dewa",
    role: "Cultural Specialist",
    specialty: "Balinese · Sacred Geometry",
    experience: "10+ years",
    bio: "A bridge between ancient Balinese artistic traditions and contemporary sacred geometry. Spiritually resonant, technically flawless.",
  },
  {
    name: "Yuki",
    role: "Color Specialist",
    specialty: "Japanese · Watercolor",
    experience: "7+ years",
    bio: "Trained in Tokyo, Yuki brings the discipline of Irezumi and the freedom of watercolor to vibrant, living color work.",
  },
];

export default function ArtistSpotlight() {
  return (
    <section id="artists" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="The Artists"
          title="Masters of Their Craft"
          description="World-class talent united by the pursuit of perfection. Every artist, a specialist."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {artists.map((artist, i) => (
            <ScrollReveal key={artist.name} delay={i * 0.1}>
              <div className="group">
                {/* Photo */}
                <div className="relative overflow-hidden mb-5">
                  <div className="img-placeholder aspect-[3/4]">
                    <span>{artist.name} — portrait</span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-end p-5">
                    <p className="text-text-secondary text-xs leading-relaxed mb-4">
                      {artist.bio}
                    </p>
                    <div className="flex gap-2">
                      <a
                        href="#booking"
                        className="px-4 py-2 bg-blue-electric text-white text-[0.65rem] tracking-[0.1em] uppercase font-medium hover:bg-blue-deep transition-colors"
                      >
                        Book
                      </a>
                      <a
                        href="#"
                        aria-label={`${artist.name} Instagram`}
                        className="w-8 h-8 flex items-center justify-center border border-divider text-text-muted hover:text-blue-electric hover:border-blue-electric transition-all"
                      >
                        <Instagram size={13} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-text-primary">
                  {artist.name}
                </h3>
                <p className="text-blue-electric text-xs mt-1 font-medium">
                  {artist.role}
                </p>
                <p className="text-text-muted text-[0.65rem] tracking-[0.1em] uppercase mt-1.5">
                  {artist.specialty}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
