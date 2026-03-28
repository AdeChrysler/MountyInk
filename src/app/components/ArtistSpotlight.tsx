import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const artists = [
  { src: "/images/artist-01.png", alt: "Tattoo artist portrait 1" },
  { src: "/images/artist-02.png", alt: "Tattoo artist portrait 2" },
  { src: "/images/artist-03.png", alt: "Tattoo artist portrait 3" },
];

export default function ArtistSpotlight() {
  return (
    <section id="artists" className="py-24 md:py-32 bg-bg-primary">
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
                <div className="relative aspect-[3/4] mb-5 overflow-hidden">
                  <Image
                    src={artist.src}
                    alt={artist.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover img-crop group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <div className="w-8 h-px bg-blue-electric/40 mx-auto mb-4" />
                  <p className="text-text-muted text-xs tracking-[0.2em] uppercase">
                    Artist Profile
                  </p>
                  <p className="text-text-muted/50 text-[0.65rem] mt-2 tracking-wider">
                    Coming Soon
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
