import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: '/prismic-app' /* http://localhost:3000/prismic-app/about */
  env: {
    appName: 'Prismic App',
  },
};

export default nextConfig;
