/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Required for GitHub Pages: static export + base path for repo name
  output: "export",
  basePath: "/Resume_live",
  assetPrefix: "/Resume_live/",
  images: { unoptimized: true },
};

export default nextConfig;
