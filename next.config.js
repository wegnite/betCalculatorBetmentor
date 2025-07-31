/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Enable static export for Vercel deployment
  output: 'export',
  trailingSlash: true,
  
  // Image optimization
  images: {
    unoptimized: true,
  },
  
  // Environment variables
  env: {
    SITE_URL: 'https://bet-calculator-betmentor.com',
    SITE_NAME: 'Bet Calculator BetMentor',
  },
  
  // Webpack configuration for optimization
  webpack: (config, { isServer }) => {
    // Optimize bundle size
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
  
  // Experimental features - disabled for compatibility
  // experimental: {
  //   optimizeCss: true,
  // },
};

module.exports = nextConfig;