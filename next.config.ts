import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  devIndicators: false,
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
