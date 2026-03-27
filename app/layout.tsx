import type { Metadata } from "next";
import { Cinzel, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Monty Ink — Born in Bali. Drawn for Life.",
  description:
    "Premium custom tattoo studio in Seminyak, Bali. Specializing in Balinese traditional tattoos, fine line, blackwork, and geometric designs. Begin your piece with Monty Ink.",
  keywords: [
    "tattoo bali",
    "tattoo studio bali",
    "custom tattoo bali",
    "monty ink",
    "bali tattoo artist",
    "seminyak tattoo",
    "balinese tattoo",
    "fine line tattoo bali",
    "blackwork tattoo bali",
    "mandala tattoo bali",
  ],
  openGraph: {
    title: "Monty Ink — Born in Bali. Drawn for Life.",
    description:
      "Premium custom tattoo studio in Seminyak, Bali. Balinese artistry meets modern precision.",
    url: "https://mountyink.zenova.id",
    siteName: "Monty Ink",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-needle-rose-bali.png",
        width: 1200,
        height: 630,
        alt: "Monty Ink — Premium Tattoo Studio, Bali",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Monty Ink",
  description:
    "Premium custom tattoo studio in Seminyak, Bali. Specializing in Balinese traditional tattoos, fine line, blackwork, and geometric designs.",
  url: "https://mountyink.zenova.id",
  telephone: "+62821-4444-1888",
  email: "info@montyink.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Kayu Jati No. 12",
    addressLocality: "Seminyak",
    addressRegion: "Bali",
    postalCode: "80361",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -8.696,
    longitude: 115.158,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  image: "https://s3.zenova.id/ads/monty-ink/brand/v10/v10-needle-rose-bali.png",
  priceRange: "$$",
  currenciesAccepted: "IDR, USD",
  paymentAccepted: "Cash, Bank Transfer",
  hasMap: "https://maps.google.com/?q=Seminyak+Bali+Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-[#0A0A0F] text-[#F5F5F7]"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
