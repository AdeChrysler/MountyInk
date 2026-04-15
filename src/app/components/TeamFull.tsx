import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";

const artists = [
  {
    name: "Mr A",
    specialty: "Japanese & Traditional Color",
    bio: "A tattoo artist based in Badung, Bali and part of the Khandra Ink collective. Specializes in vibrant Japanese-style tattoos — from full-back dragon pieces and koi fish compositions to samurai-themed full sleeves in bold traditional color.",
    image: "https://s3.zenova.id/ads/monty-ink/avatars/mountyink-avatar-a.jpg",
    instagram: "@payouk_khandraink",
    followers: "3.7K",
  },
  {
    name: "Mr B",
    specialty: "Japanese & Realism",
    bio: "A freelance tattoo artist based in Legian, Bali. Works across Japanese and realism styles — from oni mask and full-sleeve Japanese compositions to detailed skull pieces and Balinese barong designs. Open for appointments.",
    image: "https://s3.zenova.id/ads/monty-ink/avatars/mountyink-avatar-b.jpg",
    instagram: "@astart_ink",
    followers: "447",
  },
  {
    name: "Mr C",
    specialty: "Mixed Media & Cover-Ups",
    bio: "A seniman (artist) and tattoo artist based in Bali. The most followed artist on the team, known for a diverse portfolio spanning multiple techniques including detailed skull compositions, watercolor work, and expert cover-ups.",
    image: "https://s3.zenova.id/ads/monty-ink/avatars/mountyink-avatar-c.jpg",
    instagram: "@nanda_soveink",
    followers: "10.9K",
  },
  {
    name: "Mr D",
    specialty: "Geometric & Fineline",
    bio: "A versatile tattoo artist at Khandra Ink, Bali, specializing in fineline work. His portfolio spans geometric full-sleeve compositions, intricate mandala designs, Japanese koi and samurai pieces, Greek mythology themes, and detailed realism.",
    image: "https://s3.zenova.id/ads/monty-ink/avatars/mountyink-avatar-d.jpg",
    instagram: "@kunci_khandra.ink",
    followers: "1.5K",
  },
  {
    name: "Mr E",
    specialty: "Custom Tattoo Art",
    bio: "A Bali-based tattoo artist at Khandra Ink, Seminyak. A dedicated member of the collective with an extensive portfolio of custom work, bringing each client's vision to life with care and attention to detail.",
    image: "https://s3.zenova.id/ads/monty-ink/avatars/mountyink-avatar-e.jpg",
    instagram: "@budi13_khandra.ink",
    followers: "311",
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
