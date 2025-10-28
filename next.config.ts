import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "i.pravatar.cc", // For pravatar service
      "avatars.githubusercontent.com", // For GitHub avatars
      "lh3.googleusercontent.com", // For Google OAuth profile pictures
      "robohash.org", // For fallback avatars
    ],
  },
};

export default nextConfig;
