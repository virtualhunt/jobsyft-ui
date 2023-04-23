/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS:process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    DB_URL:process.env.DB_URL,
    ANALYZE: process.env.ANALYZE
  },
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer(nextConfig)
}
// nextConfig
