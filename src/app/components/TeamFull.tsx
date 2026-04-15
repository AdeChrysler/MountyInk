import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const artists = [
  {
    name: "Mr A",
    specialty: "Japanese & Traditional Color",
    bio: "A tattoo artist specializing in vibrant Japanese-style work and traditional color tattoos. Known for samurai pieces, lion tattoos, and bold full-color compositions. Based in Badung, Bali and part of the Khandra Ink collective.",
    image: "https://s3.zenova.id/ads/monty-ink/avatars/mountyink-avatar-a.jpg",
    instagram: "@payouk_khandraink",
    followers: "3.9K",
  },
  {
    name: "Mr B",
    specialty: "Black & Grey Realism",
    bio: "A freelance tattoo artist specializing in black and grey realism with striking depth and shadow detail. Focused on delivering clean, bold work — always open for appointments in Bali.",
    image: "https://s3.zenova.id/ads/monty-ink/avatars/mountyink-avatar-b.jpg",
    instagram: "@astart_ink",
    followers: "447",
  },
  {
    name: "Mr C",
    specialty: "Realism & Mixed Media",
    bio: "A seniman (artist) and tattoo artist at G'Day Ink Legian Bali. Specializes in realism and mixed media work — from hyperrealistic portraits to animal realism and mythology-inspired compositions.",
    image: "https://s3.zenova.id/ads/monty-ink/avatars/mountyink-avatar-c.jpg",
    instagram: "@nanda_soveink",
    followers: "",
  },
  {
    name: "Mr D",
    specialty: "Japanese Color & Mixed Styles",
    bio: "A versatile tattoo artist at Khandra Ink Seminyak, Bali. His portfolio spans geometric designs, Greek mythology, elephant realism, and intricate mandala work — bridging traditional Japanese color with contemporary techniques.",
    image: "https://s3.zenova.id/ads/monty-ink/avatars/mountyink-avatar-d.jpg",
    instagram: "@kunci_khandra.ink",
    followers: "",
  },
  {
    name: "Mr E",
    specialty: "Black & Grey Mythology",
    bio: "A Bali-based tattoo artist at Khandra Ink specializing in black and grey work with mythological and religious themes. Creates detailed compositions that blend sacred imagery with dark fantasy elements.",
    image: "https://s3.zenova.id/ads/monty-ink/avatars/mountyink-avatar-e.jpg",
    instagram: "@budi13_khandra.ink",
    followers: "310",
  },
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

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {artists.map((artist, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group text-center">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg border border-divider">
                  <Image
                    src={artist.image}
                    alt={`${artist.name} - ${artist.specialty} tattoo artist`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
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
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
