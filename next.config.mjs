/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // Required for static export
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  basePath: "/Portfolio", // Ensure it matches your GitHub repo name
  assetPrefix: "/Portfolio/",
}

export default nextConfig;
