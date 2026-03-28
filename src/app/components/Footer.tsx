import { Instagram, MessageCircle, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Mounty Ink"
                width={130}
                height={46}
                className="h-9 w-auto mb-5"
              />
            </Link>
            <p className="text-text-muted text-sm leading-relaxed max-w-[260px]">
              Where Balinese artistry meets luxury tattoo craftsmanship. Your story, permanently beautiful.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/6281234567890" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-divider text-text-muted hover:text-blue-electric hover:border-blue-electric transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-5">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Gallery", href: "#portfolio" },
                { label: "Our Artists", href: "#artists" },
                { label: "Styles & Pricing", href: "#styles" },
                { label: "Book a Session", href: "#booking" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-text-muted hover:text-blue-electric text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/company" },
                { label: "Our Story", href: "/company#story" },
                { label: "Hygiene & Safety", href: "/company#vision" },
                { label: "Careers", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-text-muted hover:text-blue-electric text-sm transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-5">
              Visit Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-blue-electric mt-1 shrink-0" />
                <p className="text-text-muted text-sm leading-relaxed">
                  Jl. Raya Seminyak No. 88<br />
                  Seminyak, Bali 80361
                </p>
              </div>
              <a
                href="mailto:hello@mountyink.com"
                className="text-text-muted hover:text-blue-electric text-sm flex items-center gap-3 transition-colors"
              >
                <Mail size={14} className="text-blue-electric shrink-0" />
                hello@mountyink.com
              </a>
              <a
                href="tel:+6281234567890"
                className="text-text-muted hover:text-blue-electric text-sm flex items-center gap-3 transition-colors"
              >
                <Phone size={14} className="text-blue-electric shrink-0" />
                +62 812 3456 7890
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-divider flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-text-muted/60 text-xs tracking-[0.15em]">
            &copy; {new Date().getFullYear()} Mounty Ink &middot; Tattoo Studio &middot; Bali
          </p>
          <p className="text-text-muted/30 text-xs tracking-[0.1em]">
            Crafted with precision &middot; Six Zenith
          </p>
        </div>
      </div>
    </footer>
  );
}
