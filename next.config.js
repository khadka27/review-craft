/** @type {import('next').NextConfig} */
// Enhanced Next.js configuration for production-ready ReviewCraft

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Production optimizations
  reactStrictMode: true,
  poweredByHeader: false,

  // Image optimization
  images: {
    domains: [
      'randomuser.me',
      'ui-avatars.com',
      'images.unsplash.com',
      'via.placeholder.com'
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
          }
        ]
      }
    ];
  },

  // Environment variables
  env: {
    SITE_NAME: 'ReviewCraft',
    SITE_DESCRIPTION: 'AI-Powered Social Media Review Generator for Educational Purposes'
  },

  // Compression
  compress: true,

  // Experimental features for better performance
  experimental: {
    scrollRestoration: true,
  },

  // Analytics and tracking
  async rewrites() {
    return [
      {
        source: '/analytics/:path*',
        destination: 'https://www.google-analytics.com/:path*'
      }
    ];
  }
};

module.exports = nextConfig; module.exports = nextConfig