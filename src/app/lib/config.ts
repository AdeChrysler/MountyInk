/**
 * Site configuration — single source of truth for all business data.
 * TODO: Replace all placeholder values with real data before launch.
 */

export const siteConfig = {
  brand: {
    name: "Mounty Ink",
    tagline: "Where Art Meets Skin",
    subtitle: "Premium Tattoo Atelier · Bali, Indonesia",
  },

  contact: {
    // TODO: Replace with real contact info
    phone: "+62 821-4222-237",
    email: "hello@mountyink.com",
    whatsapp: "628214222237",
    whatsappMessage: "Hi Mounty Ink! I'd like to book a tattoo session.",
    instagram: "https://www.instagram.com/mountyink.studio/"
  },

  location: {
    // TODO: Replace with real studio address
    street: "Bali, Indonesia",
    area: "",
    city: "Bali",
    postal: "",
    country: "Indonesia",
    mapEmbed: "", // TODO: Add Google Maps embed URL
  },

  hours: {
    // TODO: Replace with real operating hours
    weekday: "By Appointment",
    weekend: "By Appointment",
  },
} as const;

export function getWhatsAppUrl() {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;
}
