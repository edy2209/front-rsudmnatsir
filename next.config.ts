import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
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