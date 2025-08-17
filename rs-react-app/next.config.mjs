/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // output: 'export', // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
