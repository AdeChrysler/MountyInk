import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monty Ink — Premium Custom Tattoo Studio in Bali",
  description:
    "Begin your permanent piece at Monty Ink, Bali's premium custom tattoo studio in Seminyak. Mandala, Fine Line, Realism, Japanese, Geometric & Blackwork. 4.9 rated. Free consultation.",
  keywords: [
    "tattoo bali",
    "custom tattoo bali",
    "monty ink",
    "bali tattoo studio",
    "seminyak tattoo",
    "mandala tattoo bali",
    "fine line tattoo bali",
    "japanese tattoo bali",
    "blackwork tattoo bali",
    "geometric tattoo bali",
    "realism tattoo bali",
    "tattoo consultation bali",
  ],
  openGraph: {
    title: "Monty Ink — Premium Custom Tattoo Studio in Bali",
    description:
      "Begin your permanent piece at Monty Ink. Custom designs only — Mandala, Fine Line, Realism, Japanese, Geometric & Blackwork. 4.9 rated. Free consultation.",
    url: "https://mountyink.zenova.id/lp",
    siteName: "Monty Ink",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://s3.zenova.id/ads/monty-ink/lp-hero/hero-studio.jpg",
        width: 1200,
        height: 630,
        alt: "Monty Ink — Premium Tattoo Studio, Bali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monty Ink — Premium Custom Tattoo Studio in Bali",
    description: "Custom tattoos only. Mandala, Fine Line, Realism, Japanese, Geometric & Blackwork. Seminyak, Bali.",
    images: ["https://s3.zenova.id/ads/monty-ink/lp-hero/hero-studio.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return children;
}
