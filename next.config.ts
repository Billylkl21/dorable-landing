import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
