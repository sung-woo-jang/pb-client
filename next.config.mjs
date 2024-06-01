/**
 *  @type {import('next').NextConfig}
 */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'backbone',
        port: '8000',
        pathname: '/**',
      },
    ],
  },
  output: 'standalone',
};

export default nextConfig;
