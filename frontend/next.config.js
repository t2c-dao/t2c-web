/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects() {
    return [
      {
        source: '/resume',
        destination: '/Ashutosh-Resume.pdf',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
