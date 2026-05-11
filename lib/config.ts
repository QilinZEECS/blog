export const BASE_URL =
  process.env.GITHUB_PAGES === "true"
    ? "https://qilinzeecs.github.io/blog"
    : process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const SITE_NAME = "Qilin's Blog";
export const SITE_DESCRIPTION = "Qilin 的个人博客";
export const AUTHOR = "Qilin";
