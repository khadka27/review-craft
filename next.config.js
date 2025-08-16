/** @type {import('next').NextConfig} */
const nextConfig = {


  images: {
    domains: ['api.dicebear.com'],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

module.exports = nextConfig