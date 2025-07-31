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
  
  // SEO and internationalization
  i18n: {
    locales: ['es', 'en', 'pt'],
    defaultLocale: 'es',
    localeDetection: true,
  },
  
  // Headers for security and SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/calculadora',
        destination: '/',
        permanent: true,
      },
      {
        source: '/calculator',
        destination: '/en',
        permanent: true,
      },
    ];
  },
  
  // Environment variables
  env: {
    SITE_URL: 'https://betcalc-pro.com',
    SITE_NAME: 'BetCalc Pro',
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
  
  // Experimental features
  experimental: {
    optimizeCss: true,
    legacyBrowsers: false,
  },
};

module.exports = nextConfig;