import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const artists = [
  {
    name: "Mr A",
    specialty: "Japanese & Traditional Color",
    bio: "A tattoo artist based in Abiansemal, Badung, Bali and part of the Khandra Ink collective. Specializes in vibrant Japanese-style tattoos — from full-back dragon pieces and koi fish compositions to samurai-themed full sleeves and expert cover-ups. International guest spots in Melbourne, Singapore, and Perth.",
    image: "https://s3.zenova.id/ads/monty-ink/avatars/mountyink-avatar-a.jpg",
    instagram: "@payouk_khandraink",
    followers: "3.7K",
    portfolioSamples: [
      { src: "/images/portfolio-japanese-real.jpg", alt: "Japanese dragon koi tattoo" },
    ],
  },
  {
    name: "Mr B",
    specialty: "Japanese & Realism",
    bio: "A freelance tattoo artist based in Legian, Bali. Works across Japanese and realism styles — from oni mask and full-sleeve Japanese compositions to detailed skull pieces and Balinese barong designs. Open for appointments.",
    image: "https://s3.zenova.id/ads/monty-ink/avatars/mountyink-avatar-b.jpg",
    instagram: "@astart_ink",
    followers: "447",
    portfolioSamples: [
      { src: "/images/portfolio-blackgrey-real.jpg", alt: "Black and grey skull realism tattoo" },
    ],
  },
  {
    name: "Mr C",
    specialty: "Mixed Media & Cover-Ups",
    bio: "A seniman (artist) and tattoo artist based in Bali with over 600 works in his portfolio. The most followed artist on the team, known for fierce animal portraits, mythology-inspired full sleeves, and expert cover-ups. Has worked internationally including Jakarta and Dubai.",
    image: "https://s3.zenova.id/ads/monty-ink/avatars/mountyink-avatar-c.jpg",
    instagram: "@nanda_soveink",
    followers: "10.8K",
    portfolioSamples: [
      { src: "/images/portfolio-realism-real.jpg", alt: "Detailed skull composition tattoo" },
      { src: "/images/portfolio-realism-real-02.jpg", alt: "Watercolor mixed media tattoo" },
    ],
  },
  {
    name: "Mr D",
    specialty: "Geometric & Fineline",
    bio: "A versatile tattoo artist at Khandra Ink, Bali, specializing in fineline work. His portfolio spans geometric full-sleeve compositions, intricate mandala designs, Japanese koi and samurai pieces, Greek mythology themes, and detailed realism.",
    image: "https://s3.zenova.id/ads/monty-ink/avatars/mountyink-avatar-d.jpg",
    instagram: "@kunci_khandra.ink",
    followers: "1.5K",
    portfolioSamples: [
      { src: "/images/portfolio-balinese-real.jpg", alt: "Geometric mandala full sleeve tattoo" },
    ],
  },
  {
    name: "Mr E",
    specialty: "Black & Grey Mythology",
    bio: "A Bali-based tattoo artist at Khandra Ink, Seminyak. With over 300 pieces in his portfolio, he specializes in black and grey work with mythological and religious themes — creating detailed full-body compositions that blend sacred imagery with dark fantasy elements.",
    image: "https://s3.zenova.id/ads/monty-ink/avatars/mountyink-avatar-e.jpg",
    instagram: "@budi13_khandra.ink",
    followers: "310",
    portfolioSamples: [
      { src: "/images/portfolio-balinese-real-02.jpg", alt: "Custom tattoo art piece" },
    ],
  },
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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {artists.map((artist, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg border border-divider">
                  <Image
                    src={artist.image}
                    alt={`${artist.name} - ${artist.specialty} tattoo artist`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="text-center px-1">
                  <h3 className="font-[family-name:var(--font-heading)] text-xl text-text-primary font-semibold mb-1">
                    {artist.name}
                  </h3>
                  <p className="text-blue-electric text-[10px] tracking-[0.2em] uppercase font-medium mb-2">
                    {artist.specialty}
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed line-clamp-3 mb-3">
                    {artist.bio}
                  </p>
                  <span className="text-text-muted text-[11px]">
                    {artist.instagram}
                    {artist.followers && (
                      <span className="ml-1 opacity-60">· {artist.followers}</span>
                    )}
                  </span>
                  {artist.portfolioSamples.length > 0 && (
                    <div className="flex justify-center gap-2 mt-3">
                      {artist.portfolioSamples.map((sample, j) => (
                        <a
                          key={j}
                          href="#portfolio"
                          className="relative overflow-hidden rounded border border-divider hover:border-blue-electric/50 transition-colors flex-shrink-0"
                          style={{ width: 68, height: 68 }}
                          aria-label={`View ${artist.name}'s work in portfolio`}
                        >
                          <Image
                            src={sample.src}
                            alt={sample.alt}
                            fill
                            sizes="68px"
                            className="object-cover transition-opacity duration-300 hover:opacity-80"
                          />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
