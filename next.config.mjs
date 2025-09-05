/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // bagus untuk deploy via PM2/Node agar dependency runtime lebih ringkas
  output: "standalone"
};


export default nextConfig;
