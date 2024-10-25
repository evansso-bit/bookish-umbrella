import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    dynamicIO: true,
    ppr: true,
    cacheLife: {
      tmdbDaily: {
        stale: 60 * 60, // 1 hour
        revalidate: 60 * 60 * 24, // 24 hours
        expire: 60 * 60 * 24 * 2, // 48 hours
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig