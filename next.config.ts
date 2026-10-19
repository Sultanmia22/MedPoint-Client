import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/100',
        search: '?img=47',
      },
    ],
  },
};

export default nextConfig;
