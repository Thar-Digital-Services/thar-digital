/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    // Required for static export - images won't be optimized by Next.js
    unoptimized: true,
  },
  // Optimize for production
  compress: true,
  poweredByHeader: false,
  // SEO
  trailingSlash: false,
}

module.exports = nextConfig
