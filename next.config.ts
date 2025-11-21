import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
     formats: ['image/avif', 'image/webp'],
    domains: [
      "i.pravatar.cc", // For pravatar service
      "avatars.githubusercontent.com", // For GitHub avatars
      "lh3.googleusercontent.com", // For Google OAuth profile pictures
      "robohash.org", // For fallback avatars
    ],
  },
   compress: true,
    swcMinify: true,
      compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@heroui/react', 'framer-motion'],
  },
};

export default nextConfig;

