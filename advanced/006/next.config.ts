import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/html/advanced/006" : "",
  assetPrefix: isProd ? "/html/advanced/006" : "",
};

export default nextConfig;
