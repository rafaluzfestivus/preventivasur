import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Required for local/sandbox environments that block TLS to Google Fonts
    turbopackUseSystemTlsCerts: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  compress: true,
};

export default nextConfig;
