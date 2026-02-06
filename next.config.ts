import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Production optimizations
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
            exclude: ["error", "warn"],
          }
        : false,
  },

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Enable compression
  compress: true,

  // External packages
  serverExternalPackages: ["web-vitals"],

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "next-themes"],
  },

  // Turbopack config
  turbopack: {},

  // Additional performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
