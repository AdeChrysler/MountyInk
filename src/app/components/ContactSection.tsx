import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { MapPin, Mail, Phone, Clock, Instagram, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    content: (
      <>
        Jl. Raya Seminyak No. 88<br />
        Seminyak, Kuta, Badung<br />
        Bali 80361, Indonesia
      </>
    ),
  },
  {
    icon: Clock,
    title: "Hours",
    content: (
      <>
        Monday — Saturday: 10:00 AM — 8:00 PM<br />
        Sunday: By appointment only
      </>
    ),
  },
];

const contactLinks = [
  {
    icon: Mail,
    title: "Email",
    text: "hello@mountyink.com",
    href: "mailto:hello@mountyink.com",
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    text: "+62 812 3456 7890",
    href: "tel:+6281234567890",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          subtitle="Get in Touch"
          title="Visit Us"
          description="Whether you're booking a session, exploring a collaboration, or just saying hello."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Map */}
          <ScrollReveal direction="left">
            <div className="img-placeholder aspect-[4/3] lg:aspect-auto lg:h-full min-h-[360px]">
              <span>Google Maps — Seminyak, Bali studio location</span>
            </div>
          </ScrollReveal>

          {/* Info */}
          <ScrollReveal direction="right">
            <div className="space-y-7">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <item.icon
                    size={17}
                    className="text-blue-electric mt-1 shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h4 className="text-text-primary font-semibold text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}

              {contactLinks.map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <item.icon
                    size={17}
                    className="text-blue-electric mt-1 shrink-0"
                    strokeWidth={1.5}
                  />
                  <div>
                    <h4 className="text-text-primary font-semibold text-sm mb-1">
                      {item.title}
                    </h4>
                    <a
                      href={item.href}
                      className="text-blue-electric text-sm hover:underline underline-offset-2"
                    >
                      {item.text}
                    </a>
                  </div>
                </div>
              ))}

              {/* Divider */}
              <div className="pt-4 border-t border-divider">
                <p className="text-text-muted text-[0.6rem] tracking-[0.25em] uppercase mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, label: "Instagram", href: "#" },
                    {
                      icon: MessageCircle,
                      label: "WhatsApp",
                      href: "https://wa.me/6281234567890",
                    },
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
                  href="mailto:hello@mountyink.com"
                  className="inline-block px-8 py-3 bg-blue-electric text-white font-semibold tracking-[0.12em] uppercase text-[0.75rem] hover:bg-blue-deep transition-colors"
                >
                  Send an Inquiry
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
