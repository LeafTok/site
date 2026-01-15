/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // Trailing slash required for GitHub Pages
  trailingSlash: true,

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Optimize for production
  reactStrictMode: true,

  // Experimental features for build optimization
  experimental: {
    // Optimize package imports to reduce bundle size
    optimizePackageImports: ['schema-dts'],
  },

  // Generate static pages with better performance
  generateBuildId: async () => {
    return `build-${Date.now()}`;
  },
};

module.exports = nextConfig;
