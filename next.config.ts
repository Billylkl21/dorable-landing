import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/safety',
        destination: '/support',
        permanent: true,
      },
      {
        source: '/security',
        destination: '/support',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/creators',
        destination: 'https://dorable-creator-saas.vercel.app/creators',
      },
      {
        source: '/creators/:path*',
        destination: 'https://dorable-creator-saas.vercel.app/creators/:path*',
      },
    ];
  },
};

export default nextConfig;
