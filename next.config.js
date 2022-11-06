/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: (`${process.env.NEXT_PUBLIC_WORDPRESS_URL}`).slice(8),
  //       port: '443',
  //       pathname: '/wp-content/uploads/**',
  //     },
  //   ],
  // },
  images: {
    domains: [(`${process.env.NEXT_PUBLIC_WORDPRESS_URL}`).slice(8),
              "github.com"],
  },
}

module.exports = nextConfig
