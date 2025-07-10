import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'rsudmnatsir.sumbarprov.go.id',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'rsudmnatsir.sumbarprov.go.id',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
