/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['fonts.googleapis.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    esmExternals: 'loose',
  },
};

export default nextConfig;
