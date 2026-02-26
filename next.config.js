/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  reactStrictMode: true,
  output: 'export'
  // swcMinify: true,
};
  
module.exports = nextConfig;
  