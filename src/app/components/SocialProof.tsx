import ScrollReveal from "./ScrollReveal";
import { Instagram } from "lucide-react";
import { siteConfig } from "../lib/config";

export default function SocialProof() {
  return (
    <section className="py-24 md:py-32 bg-bg-primary">
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

        {/* Instagram grid placeholder */}
        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {[
              "Latest tattoo work",
              "Studio behind-the-scenes",
              "Artist at work",
              "Healed tattoo result",
              "Bali studio vibes",
              "Client experience",
            ].map((label, i) => (
              <div
                key={i}
                className="group relative img-placeholder aspect-square cursor-pointer"
              >
                <span className="!text-[0.5rem]">{label}</span>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-electric/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram size={20} className="text-white" />
                </div>
              </div>
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
