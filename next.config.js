/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: process.env.API_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
  headers: [{ "Content-Type": "application/json; charset=utf8" }],
  rewrites: [
    {
      source: "/api/:path*",
      destination: "http://localhost:3000/:path*",
    },
  ],
};

module.exports = nextConfig;
