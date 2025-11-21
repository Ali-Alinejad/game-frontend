/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    minimumCacheTTL: 60 * 60 * 24 * 365,
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // یا دامنه خاص CDN
      },
    ],
    
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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

module.exports = nextConfig;