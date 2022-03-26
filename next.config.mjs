/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  future: { strictPostcssConfiguration: true },
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  // experimental: { concurrentFeatures: true, serverComponents: true },
  images: {
    domains: [DOMAIN],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};

export default nextConfig;
