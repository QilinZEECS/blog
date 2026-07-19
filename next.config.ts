import type { NextConfig } from "next";

// basePath 由 CI 通过 NEXT_PUBLIC_BASE_PATH 注入（GitHub Pages 自动推导），
// 本地开发为空。源码中不硬编码仓库名或用户名。
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
