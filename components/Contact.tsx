"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    style: "",
    placement: "",
    size: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to an API endpoint
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    "Hello Monty Ink! I'd like to begin my piece. Can we schedule a consultation?"
  );

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0A0A0F 0%, #0D2244/30 50%, #0A0A0F 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, #2E7BFF 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p
            className="text-xs tracking-[0.4em] uppercase text-[#2E7BFF] mb-4"
            style={{ fontFamily: "var(--font-jetbrains), monospace" }}
          >
            // 05 — Begin Your Piece
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-[#F5F5F7] mb-6"
            style={{ fontFamily: "var(--font-cinzel), serif" }}
          >
            Start the Conversation
          </h2>
          <div className="w-16 h-px bg-[#2E7BFF] mx-auto mb-8" />
          <p
            className="text-[#C8D0DC]/60 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Every great piece begins with a conversation. Tell us your vision — we&apos;ll take it from there.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="border border-[#2E7BFF]/30 bg-[#0D2244]/40 p-10 text-center">
                <div className="w-12 h-12 border border-[#2E7BFF] flex items-center justify-center mx-auto mb-6">
                  <svg className="w-5 h-5 text-[#2E7BFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  className="text-xl text-[#F5F5F7] mb-3"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  Message Received
                </h3>
                <p
                  className="text-sm text-[#C8D0DC]/60"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  We&apos;ll be in touch within 24 hours to schedule your consultation.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs tracking-[0.15em] uppercase text-[#C8D0DC]/40 mb-2"
                      style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0D2244]/30 border border-[#1A3A6B]/50 text-[#F5F5F7] px-4 py-3 text-sm focus:outline-none focus:border-[#2E7BFF] transition-colors"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs tracking-[0.15em] uppercase text-[#C8D0DC]/40 mb-2"
                      style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#0D2244]/30 border border-[#1A3A6B]/50 text-[#F5F5F7] px-4 py-3 text-sm focus:outline-none focus:border-[#2E7BFF] transition-colors"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs tracking-[0.15em] uppercase text-[#C8D0DC]/40 mb-2"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    Style
                  </label>
                  <select
                    name="style"
                    value={formData.style}
                    onChange={handleChange}
                    className="w-full bg-[#0D2244]/30 border border-[#1A3A6B]/50 text-[#F5F5F7] px-4 py-3 text-sm focus:outline-none focus:border-[#2E7BFF] transition-colors appearance-none"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    <option value="">Select a style...</option>
                    <option value="blackwork">Blackwork</option>
                    <option value="mandala">Mandala</option>
                    <option value="fine-line">Fine Line</option>
                    <option value="geometric">Geometric</option>
                    <option value="balinese">Balinese Traditional</option>
                    <option value="cover-up">Cover-Up</option>
                    <option value="custom">Custom / Not Sure</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block text-xs tracking-[0.15em] uppercase text-[#C8D0DC]/40 mb-2"
                      style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                    >
                      Placement
                    </label>
                    <input
                      type="text"
                      name="placement"
                      value={formData.placement}
                      onChange={handleChange}
                      className="w-full bg-[#0D2244]/30 border border-[#1A3A6B]/50 text-[#F5F5F7] px-4 py-3 text-sm focus:outline-none focus:border-[#2E7BFF] transition-colors"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      placeholder="e.g. forearm, back, chest"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs tracking-[0.15em] uppercase text-[#C8D0DC]/40 mb-2"
                      style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                    >
                      Approximate Size
                    </label>
                    <input
                      type="text"
                      name="size"
                      value={formData.size}
                      onChange={handleChange}
                      className="w-full bg-[#0D2244]/30 border border-[#1A3A6B]/50 text-[#F5F5F7] px-4 py-3 text-sm focus:outline-none focus:border-[#2E7BFF] transition-colors"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      placeholder="e.g. palm-sized, half sleeve"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs tracking-[0.15em] uppercase text-[#C8D0DC]/40 mb-2"
                    style={{ fontFamily: "var(--font-jetbrains), monospace" }}
                  >
                    Your Vision *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-[#0D2244]/30 border border-[#1A3A6B]/50 text-[#F5F5F7] px-4 py-3 text-sm focus:outline-none focus:border-[#2E7BFF] transition-colors resize-none"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    placeholder="Describe your concept, references, inspiration..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-sm tracking-[0.2em] uppercase bg-[#2E7BFF] text-[#0A0A0F] font-semibold hover:bg-[#C8D0DC] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  Begin Your Piece
                </button>
              </form>
            )}
          </div>

          {/* Contact details */}
          <div className="space-y-8">
            {/* WhatsApp CTA */}
            <div className="border border-[#1A3A6B]/30 p-6 bg-[#0D2244]/20">
              <p
                className="text-xs text-[#2E7BFF] tracking-widest uppercase mb-3"
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                Prefer Direct Contact?
              </p>
              <p
                className="text-sm text-[#C8D0DC]/60 mb-4"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Message us directly on WhatsApp for faster responses.
              </p>
              <a
                href={`https://wa.me/6281234567890?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm tracking-[0.1em] uppercase text-[#0A0A0F] bg-[#2E7BFF] px-6 py-3 hover:bg-[#C8D0DC] transition-colors"
                style={{ fontFamily: "var(--font-cinzel), serif" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Hours */}
            <div className="border-t border-[#1A3A6B]/30 pt-8">
              <p
                className="text-xs text-[#2E7BFF] tracking-widest uppercase mb-4"
                style={{ fontFamily: "var(--font-jetbrains), monospace" }}
              >
                Studio Hours
              </p>
              <div className="space-y-2">
                {[
                  { days: "Monday – Saturday", hours: "10:00 – 20:00 WITA" },
                  { days: "Sunday", hours: "By appointment only" },
                ].map((item) => (
                  <div key={item.days} className="flex justify-between text-sm">
                    <span className="text-[#C8D0DC]/50" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                      {item.days}
                    </span>
                    <span className="text-[#C8D0DC]/70" style={{ fontFamily: "var(--font-jetbrains), monospace" }}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="border-t border-[#1A3A6B]/30 pt-8">
              <p
                className="text-xs text-[#C8D0DC]/30 italic leading-relaxed"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                All bookings require a non-refundable deposit to secure your session. Walk-ins welcome subject to availability — but premium work deserves a consultation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
