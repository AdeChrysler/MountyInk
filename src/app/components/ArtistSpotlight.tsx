import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const artists = [
  {
    name: "Mr A",
    specialty: "Japanese & Traditional Color",
    bio: "A master of vibrant Japanese-style tattoos with bold color palettes. Known for full back pieces and sleeve work that blend traditional motifs with modern precision. Has tattooed internationally across Melbourne, Singapore, and Perth.",
    image: "/images/artists/artist-a.jpg",
    instagram: "@payouk_khandraink",
    followers: "3.7K",
    portfolioSamples: [
      { src: "/images/portfolio-japanese-real.jpg", alt: "Japanese dragon koi tattoo" },
    ],
  },
  {
    name: "Mr B",
    specialty: "Black & Grey Realism",
    bio: "Specializing in dark, detailed black and grey realism. Expert in chest pieces, full leg sleeves, and arm work with incredible depth and shadow detail. A freelance artist based in Legian, Badung — always open for appointments.",
    image: "/images/artists/artist-b.jpg",
    instagram: "@astart_ink",
    followers: "447",
    portfolioSamples: [
      { src: "/images/portfolio-blackgrey-real.jpg", alt: "Black and grey Zeus mythology tattoo" },
    ],
  },
  {
    name: "Mr C",
    specialty: "Realism & Mixed Media",
    bio: "One of Bali's most followed tattoo artists with 10K+ followers. A true seniman (artist) whose portfolio spans hyperrealistic portraits, animal realism, and mythology-inspired full sleeves. Has worked across Jakarta, Dubai, and beyond.",
    image: "/images/artists/artist-c.jpg",
    instagram: "@nanda_soveink",
    followers: "10.8K",
    portfolioSamples: [
      { src: "/images/portfolio-realism-real.jpg", alt: "Egyptian Bastet cat realism tattoo" },
      { src: "/images/portfolio-realism-real-02.jpg", alt: "Lion and roses full sleeve tattoo" },
    ],
  },
  {
    name: "Mr D",
    specialty: "Japanese Color & Mixed Styles",
    bio: "A versatile artist bridging traditional Japanese color work with contemporary black and grey techniques. Known for bold koi fish, dragons, and floral compositions that command attention. Part of the Khandra Ink collective.",
    image: "/images/artists/artist-d.jpg",
    instagram: "@kunci_khandra.ink",
    followers: "",
    portfolioSamples: [
      { src: "/images/portfolio-balinese-real.jpg", alt: "Balinese Barong full sleeve tattoo" },
    ],
  },
  {
    name: "Mr E",
    specialty: "Black & Grey Mythology",
    bio: "A Bali-based artist with deep expertise in mythological and religious-themed black and grey work. Creates intricate full sleeve compositions with incredible detail — from sacred imagery to dark fantasy. Every piece tells a story.",
    image: "/images/artists/artist-e.jpg",
    instagram: "@budi13_khandra.ink",
    followers: "310",
    portfolioSamples: [
      { src: "/images/portfolio-balinese-real-02.jpg", alt: "Full back Balinese Barong tattoo" },
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
