/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'images.microcms-assets.io'],
  },
  pageExtensions: ['page.tsx', 'page.ts'],
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
  },
  webpack: (config, options) => {
    if (process.env.NODE_ENV === 'production') {
      // sourceMappingURLを出力しないようにする
      config.devtool = 'hidden-source-map';
    }
    return config;
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
