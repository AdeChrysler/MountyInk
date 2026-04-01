import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { Instagram } from "lucide-react";
import { siteConfig } from "../lib/config";

const instaImages = [
  { src: "/images/portfolio-japanese-real.jpg", alt: "Japanese dragon koi half-sleeve tattoo" },
  { src: "/images/portfolio-realism-real.jpg", alt: "Egyptian Bastet cat realistic forearm tattoo" },
  { src: "/images/portfolio-balinese-real.jpg", alt: "Balinese full sleeve tattoo with Barong backdrop" },
  { src: "/images/portfolio-blackgrey-real.jpg", alt: "Zeus mythology full sleeve in black and grey" },
  { src: "/images/portfolio-realism-real-02.jpg", alt: "Lion with roses and roman numerals sleeve" },
  { src: "/images/portfolio-balinese-real-02.jpg", alt: "Full back Balinese Barong demon mask" },
  { src: "/images/portfolio-blackgrey-real-02.jpg", alt: "Phoenix eagle chest piece in black and grey" },
  { src: "/images/portfolio-japanese-real.jpg", alt: "Japanese dragon koi half-sleeve detail" },
];

export default function SocialProof() {
  return (
    <section className="py-16 md:py-28 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal className="text-center mb-14">
          <p className="text-blue-electric text-xs tracking-[0.3em] uppercase font-medium mb-4">
            Follow the Journey
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-text-primary font-semibold tracking-tight">
            @mountyink
          </h2>
          <p className="mt-4 text-text-muted text-sm">
            Follow us on Instagram for our latest work, studio life, and Bali moments.
          </p>
        </ScrollReveal>

        {/* Instagram grid */}
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {instaImages.map((img, i) => (
              <a
                key={i}
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square cursor-pointer overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover img-crop group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-electric/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram size={20} className="text-white" />
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="text-center mt-10">
          <a
            href={siteConfig.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border border-blue-electric/50 text-blue-electric tracking-[0.12em] uppercase text-[0.75rem] font-medium hover:bg-blue-electric hover:text-white transition-all duration-300"
          >
            <Instagram size={15} />
            Follow on Instagram
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
