import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
