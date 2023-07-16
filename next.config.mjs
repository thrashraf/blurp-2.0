/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [process?.env.NEXT_PUBLIC_APP_DOMAIN || 'localhost'],
  },
}

export default nextConfig
