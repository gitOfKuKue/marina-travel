import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // TODO: Update this if your repository name is different from "marina-travel"
  basePath: isProd ? "/marina-travel" : "",
};

export default nextConfig;
