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
    "Premium tattoo studio in Bali. Custom tattoos, traditional Balinese artistry, and modern design. Begin your piece with Monty Ink.",
  keywords: ["tattoo bali", "tattoo studio bali", "custom tattoo", "monty ink", "bali tattoo artist"],
  openGraph: {
    title: "Monty Ink — Born in Bali. Drawn for Life.",
    description: "Premium tattoo studio in Bali.",
    url: "https://mountyink.zenova.id",
    siteName: "Monty Ink",
    locale: "en_US",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col bg-[#0A0A0F] text-[#F5F5F7]" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
