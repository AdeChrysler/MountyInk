import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { MapPin, Mail, Clock, Instagram, MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "../lib/config";

const mapEmbed = siteConfig.location.mapEmbed;

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-28 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Get in Touch"
          title="Visit Us"
          description="Whether you're booking a session, exploring a collaboration, or just saying hello."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Map */}
          <ScrollReveal direction="left">
            {mapEmbed ? (
              <iframe
                src={mapEmbed}
                className="w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[360px] border-0 grayscale"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mounty Ink studio location"
              />
            ) : (
              <div className="img-placeholder aspect-[4/3] lg:aspect-auto lg:h-full min-h-[360px] flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={28} className="text-blue-electric mx-auto mb-3" strokeWidth={1.5} />
                  <p className="text-text-muted text-sm">Bali, Indonesia</p>
                  <p className="text-text-muted/50 text-xs mt-1">Map coming soon</p>
                </div>
              </div>
            )}
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal direction="right">
            <div className="space-y-7">
              <div className="flex gap-4 items-start">
                <MapPin size={17} className="text-blue-electric mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-text-primary font-semibold text-sm mb-1">Location</h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {siteConfig.location.street}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Clock size={17} className="text-blue-electric mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-text-primary font-semibold text-sm mb-1">Hours</h4>
                  <p className="text-text-muted text-sm">
                    {siteConfig.hours.weekday}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail size={17} className="text-blue-electric mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="text-text-primary font-semibold text-sm mb-1">Email</h4>
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-blue-electric text-sm hover:underline underline-offset-2">
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Social */}
              <div className="pt-4 border-t border-divider">
                <p className="text-text-muted text-[0.6rem] tracking-[0.25em] uppercase mb-3">
                  Connect With Us
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: "Instagram", href: siteConfig.contact.instagram },
                    { icon: MessageCircle, label: "WhatsApp", href: getWhatsAppUrl() },
                  ].map(({ icon: Icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-divider text-text-muted hover:text-blue-electric hover:border-blue-electric transition-all text-xs tracking-[0.08em] uppercase"
                    >
                      <Icon size={14} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-blue-electric text-white font-semibold tracking-[0.12em] uppercase text-[0.75rem] hover:bg-blue-deep transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
