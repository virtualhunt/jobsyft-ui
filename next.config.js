/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS:process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
    DB_URL:process.env.DB_URL
  },
}

module.exports = nextConfig
