import { imageHosts } from './image-hosts.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  distDir: process.env.DIST_DIR || '.next',

  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: imageHosts,
    minimumCacheTTL: 60,
    qualities: [75, 85, 100],
  },

  webpack(
    config,
    {
      dev: dev
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

    return config;
  },

  async headers() {
    const csp = [
      // Only allow loading from same origin by default
      `default-src 'self'`,

      // Scripts: self + GTM + GA + Google Ads + Rocket.new platform scripts
      `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://ssl.google-analytics.com https://analytics.google.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com https://connect.facebook.net https://static.rocket.new`,

      // Styles: self + Google Fonts + inline styles (Tailwind)
      `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`,

      // Fonts: self + Google Fonts CDN
      `font-src 'self' https://fonts.gstatic.com data:`,

      // Images: self + data URIs + all configured remote image hosts + Google/GTM tracking pixels
      `img-src 'self' data: blob: https: http:`,

      // Frames: GTM noscript iframe + Google reCAPTCHA
      `frame-src https://www.googletagmanager.com https://td.doubleclick.net https://www.google.com`,

      // XHR/Fetch: self + GA + GTM + Google Ads + Resend API
      `connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://api.resend.com https://appanalytics.rocket.new`,

      // Media: self only
      `media-src 'self'`,

      // Object/embed: none
      `object-src 'none'`,

      // Base URI: self only (prevents base tag injection)
      `base-uri 'self'`,

      // Form actions: self (contact form posts to own API)
      `form-action 'self'`,

      // Worker scripts: self + blob (Next.js uses blob workers)
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
    ];
  },
};
export default nextConfig;