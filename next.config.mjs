import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  distDir: process.env.DIST_DIR || '.next',

  compress: true,

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: imageHosts,
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    qualities: [65, 75, 80, 85],
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
  },

  experimental: {
    optimizePackageImports: ['@heroicons/react', 'recharts'],
  },

  webpack(
    config,
    {
      dev: dev,
      isServer: isServer
    }
  ) {
    if (dev) {
      const ignoredPaths = (process.env.WATCH_IGNORED_PATHS || '')
        .split(',')
        .map((p) => p.trim())
        .filter(Boolean);
      config.watchOptions = {
        ignored: ignoredPaths.length
          ? ignoredPaths.map((p) => `**/${p.replace(/^\/+|\/+$/g, '')}/**`)
          : undefined,
      };
    }

    if (dev) {
      config.module.rules.push({
        test: /\.(jsx|tsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: '@dhiwise/component-tagger/nextLoader',
        }],
      });
    }

    // @dhiwise/component-tagger removed — was causing SSR/client hydration mismatch

    return config;
  },

  async headers() {
    const csp = [
      `default-src 'self'`,
      `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://tagmanager.google.com https://www.google-analytics.com https://ssl.google-analytics.com https://analytics.google.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://td.doubleclick.net https://www.gstatic.com https://www.google.com https://pagead2.googlesyndication.com https://connect.facebook.net https://static.rocket.new`,
      `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://www.googletagmanager.com https://tagmanager.google.com`,
      `font-src 'self' https://fonts.gstatic.com data:`,
      `img-src 'self' data: blob: https: http:`,
      `frame-src https://www.googletagmanager.com https://td.doubleclick.net https://googleads.g.doubleclick.net https://www.google.com`,
      `connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://stats.g.doubleclick.net https://*.g.doubleclick.net https://www.googletagmanager.com https://tagmanager.google.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://ad.doubleclick.net https://pagead2.googlesyndication.com https://www.google.com https://google.com https://www.google.co.in https://region1.google-analytics.com https://fonts.googleapis.com https://api.resend.com https://appanalytics.rocket.new https://static.rocket.new`,
      `media-src 'self'`,
      `object-src 'none'`,
      `base-uri 'self'`,
      `form-action 'self'`,
      `worker-src 'self' blob:`,
    ].join('; ');

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: csp,
          },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
    ];
  },
};
export default nextConfig;