"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How do I book an appointment?",
    a: "You can reach us through WhatsApp, Instagram DM, or email. We recommend booking in advance, especially during Bali's peak tourist season.",
  },
  {
    q: "How much does a tattoo cost?",
    a: "Pricing depends on size, detail, placement, and style. Contact us for a free consultation where we'll discuss your design and provide a personalized quote.",
  },
  {
    q: "Is it safe to get tattooed in Bali?",
    a: "At Mounty Ink, we prioritize your safety. We use single-use needles, sterilized equipment, and premium certified inks. Our studio maintains strict hygiene protocols.",
  },
  {
    q: "How should I prepare for my session?",
    a: "Stay hydrated, eat a good meal beforehand, avoid alcohol for 24 hours, and get a good night's sleep. Wear comfortable clothing that allows easy access to the tattoo area.",
  },
  {
    q: "Do you accept walk-ins?",
    a: "We welcome walk-ins based on availability, but we recommend booking ahead to secure your preferred artist and time slot.",
  },
  {
    q: "What about aftercare?",
    a: "We provide aftercare instructions with every tattoo and our team is available for follow-up questions. Proper aftercare is essential for the best healing results.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-16 md:py-28 bg-bg-primary">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          subtitle="Common Questions"
          title="FAQ"
          description="Everything you need to know before your visit."
        />

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className={`border transition-colors duration-300 ${isOpen ? "border-blue-electric/30 bg-bg-card/50" : "border-divider"}`}>
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left group cursor-pointer"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                  >
                    <span className={`pr-4 text-sm md:text-[0.95rem] leading-snug transition-colors duration-300 ${isOpen ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"}`}>
                      {faq.q}
                    </span>
                    <span className="shrink-0 w-6 h-6 flex items-center justify-center">
                      {isOpen ? (
                        <Minus size={15} className="text-blue-electric" />
                      ) : (
                        <Plus size={15} className="text-text-muted" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 md:px-6 pb-5 md:pb-6 text-text-muted text-sm leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
