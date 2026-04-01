import { Instagram, MessageCircle, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig, getWhatsAppUrl } from "../lib/config";

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
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
              {siteConfig.brand.tagline}. Premium tattoo artistry in Bali.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Instagram, label: "Instagram", href: siteConfig.contact.instagram },
                { icon: MessageCircle, label: "WhatsApp", href: getWhatsAppUrl() },
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
                { label: "Gallery", href: "/#portfolio" },
                { label: "Our Artists", href: "/#artists" },
                { label: "Styles", href: "/#styles" },
                { label: "Get in Touch", href: "/#booking" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-text-muted hover:text-blue-electric text-sm transition-colors duration-200">
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
                { label: "FAQ", href: "/#faq" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-text-muted hover:text-blue-electric text-sm transition-colors duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-blue-electric mt-1 shrink-0" />
                <p className="text-text-muted text-sm leading-relaxed">
                  {siteConfig.location.street}
                </p>
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-text-muted hover:text-blue-electric text-sm flex items-center gap-3 transition-colors"
              >
                <Mail size={14} className="text-blue-electric shrink-0" />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-divider flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-text-muted/60 text-xs tracking-[0.15em]">
            &copy; 2026 {siteConfig.brand.name} &middot; Tattoo Studio &middot; Bali
          </p>
          <p className="text-text-muted/30 text-xs tracking-[0.1em]">
            Crafted with precision
          </p>
        </div>
      </div>
    </footer>
  );
}
