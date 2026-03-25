import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.zenova.id",
        pathname: "/ads/monty-ink/**",
      },
    ],
  },
};

export default nextConfig;
