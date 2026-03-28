import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { Instagram } from "lucide-react";

const team = [
  {
    name: "Monty",
    role: "Founder & Lead Artist",
    specialty: "Realism · Portraits · Black & Grey",
    experience: "12+ years",
    bio: "Born and raised in Bali, Monty trained under master realism artists across Asia and Europe before returning to his roots. His photorealistic portraits carry the emotional depth of the island — raw, spiritual, alive. Under his leadership, Mounty Ink has become Bali's premier tattoo destination for discerning travelers.",
  },
  {
    name: "Ari",
    role: "Senior Artist",
    specialty: "Fine Line · Minimalist · Micro Realism",
    experience: "8+ years",
    bio: "Ari's fine line work is legendary among Bali's tattoo community. Every line is placed with surgical precision, creating pieces that are delicate yet permanent. Clients travel from across the globe specifically to work with him — his waitlist often extends months in advance during peak season.",
  },
  {
    name: "Dewa",
    role: "Cultural Specialist",
    specialty: "Balinese Traditional · Sacred Geometry · Mandala",
    experience: "10+ years",
    bio: "A bridge between ancient Balinese artistic traditions and contemporary tattoo culture. Dewa's sacred geometry pieces are built on the mathematical proportions found in Bali's temples — the same ratios that have guided artisans for centuries. Each piece is spiritually resonant and technically flawless.",
  },
  {
    name: "Yuki",
    role: "Color Specialist",
    specialty: "Japanese · Watercolor · Neo-Traditional",
    experience: "7+ years",
    bio: "Trained in Tokyo's most prestigious tattoo studios, Yuki brings the discipline of Japanese Irezumi and the freedom of watercolor to every piece. Her vibrant color work captures the tropical energy of Bali in ways that make each tattoo feel like it's breathing with life.",
  },
];

export default function TeamFull() {
  return (
    <section id="team" className="py-24 md:py-32 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="The People"
          title="Our Artists"
          description="World-class talent, united by the pursuit of perfection."
        />

        <div className="space-y-20 md:space-y-28">
          {team.map((member, i) => {
            const imageFirst = i % 2 === 0;
            return (
              <ScrollReveal key={member.name}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  {/* Photo */}
                  <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                    <div className="img-placeholder aspect-[3/4] max-w-md mx-auto lg:max-w-none">
                      <span>{member.name} — professional portrait, moody lighting</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                    <p className="text-blue-electric text-xs tracking-[0.3em] uppercase font-medium mb-2">
                      {member.role}
                    </p>
                    <h3 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-text-primary font-semibold tracking-tight">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-text-muted text-xs tracking-[0.12em] uppercase">
                      {member.specialty} &middot; {member.experience}
                    </p>
                    <div className="mt-4">
                      <span className="line-slash" />
                    </div>
                    <p className="mt-5 text-text-secondary text-base leading-relaxed">
                      {member.bio}
                    </p>

                    <div className="mt-7 flex gap-3">
                      <a
                        href="#"
                        className="px-6 py-2.5 bg-blue-electric text-white text-[0.7rem] tracking-[0.12em] uppercase font-medium hover:bg-blue-deep transition-colors"
                      >
                        View Portfolio
                      </a>
                      <a
                        href="#"
                        aria-label={`${member.name} on Instagram`}
                        className="w-10 h-10 flex items-center justify-center border border-divider text-text-muted hover:text-blue-electric hover:border-blue-electric transition-all duration-300"
                      >
                        <Instagram size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
