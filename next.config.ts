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
};

export default nextConfig;
