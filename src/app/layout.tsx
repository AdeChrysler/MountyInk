import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Providers from "./components/Providers";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mounty Ink — Premium Tattoo Studio · Bali",
    template: "%s | Mounty Ink Bali",
  },
  description:
    "Where Balinese artistry meets luxury tattoo craftsmanship. Book your session at Mounty Ink, Bali's premier tattoo atelier for international travelers.",
  keywords: [
    "tattoo studio bali",
    "premium tattoo bali",
    "mounty ink",
    "bali tattoo artist",
    "luxury tattoo experience",
    "seminyak tattoo",
    "best tattoo bali",
  ],
  authors: [{ name: "Mounty Ink" }],
  creator: "Mounty Ink",
  metadataBase: new URL("https://mountyink.com"),
  openGraph: {
    title: "Mounty Ink — Premium Tattoo Studio · Bali",
    description:
      "Where Balinese artistry meets luxury tattoo craftsmanship. Book your session at Bali's premier tattoo atelier.",
    url: "https://mountyink.com",
    siteName: "Mounty Ink",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mounty Ink — Premium Tattoo Studio · Bali",
    description:
      "Where Balinese artistry meets luxury tattoo craftsmanship.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-body)]">
        {/* Skip to content — GUIDE §11 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-blue-electric focus:text-white focus:text-sm focus:tracking-wider"
        >
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
