import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
      {
        protocol: "https",
        hostname: "robellemma.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "gsap"],
  },
};

export default nextConfig;
