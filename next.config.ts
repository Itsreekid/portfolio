
import type { NextConfig } from "next";

// const repo = "/Portfolio-ahmed-abidi"; // Commented out for local development

const nextConfig: NextConfig = {
  output: "export",
  // basePath: repo, // Removed for local development
  // assetPrefix: repo, // Removed for local development
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: false,
  // env: {
  //   NEXT_PUBLIC_BASE_PATH: repo,
  // },
};

export default nextConfig;
