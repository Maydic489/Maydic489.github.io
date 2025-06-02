const withNextra = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
  // optional: add `unstable_staticImage: true` to enable Nextra's auto image import
});

/** @type {import('next').NextConfig} */
const nextConfig = withNextra({
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Add this if your repo isn't at root of your GitHub account
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name/',
});

module.exports = nextConfig;
