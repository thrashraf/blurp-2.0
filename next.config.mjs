/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: [process?.env.NEXT_PUBLIC_APP_DOMAIN || '127.0.0.1'],
  },
  experimental: {
    serverActions: true
  }
}

export default nextConfig
