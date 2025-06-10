import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "standalone",
  sassOptions: {
    includePaths: [path.join(__dirname, "/src")],
  },
  webpack: config => {
    config.resolve.alias["@@"] = path.resolve(__dirname, "./*");
    return config;
  },
};

export default nextConfig;
