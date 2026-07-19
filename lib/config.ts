// 站点身份配置 —— 不含任何真实身份信息。
// 线上网址通过环境变量 NEXT_PUBLIC_BASE_URL 注入（见 .github/workflows/deploy.yml），
// 源码里不硬编码任何 GitHub 用户名。
export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const SITE_NAME = "Whoever's Blog";
export const SITE_DESCRIPTION = "一个匿名博客";
export const AUTHOR = "Whoever";
