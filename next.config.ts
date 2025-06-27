import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: '/prismic-app' /* http://localhost:3000/prismic-app/about */
  env: {
    appName: 'Prismic App',
  },
  async rewrites() {
    return [
      {
        source: '/admin/:path*',
        destination: 'http://localhost:3500/admin/:path*', // Proxy to admin app
      },
    ]
  },
  logging: {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
  },
};

export default nextConfig;
