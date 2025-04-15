import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https',
        port: '',
      },
      {
        hostname: 'cdn.futura-sciences.com',
        protocol: 'https',
        port: '',
      },
    ],
  },
};

export default nextConfig;
