import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

export default function TeamFull() {
  return (
    <section id="team" className="py-24 md:py-32 bg-bg-secondary/30">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          subtitle="The People"
          title="Our Artists"
          description="A team of passionate artists dedicated to creating meaningful, wearable art."
        />

        {/* Placeholder — replace with real team data */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[1, 2, 3, 4].map((i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="img-placeholder aspect-[3/4] mb-5 max-w-[280px] mx-auto">
                  <span>Artist {i}</span>
                </div>
                <div className="w-6 h-px bg-blue-electric/30 mx-auto mb-3" />
                <p className="text-text-muted text-xs tracking-[0.2em] uppercase">
                  Artist Profile
                </p>
                <p className="text-text-muted/40 text-[0.6rem] mt-1.5 tracking-wider">
                  Coming Soon
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
          <p className="text-text-muted text-sm mt-4">
            Full artist profiles and portfolios are coming soon.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
