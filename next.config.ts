import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Better debugging & performance optimizations
  experimental: {
    allowedDevOrigins: ["http://192.168.0.34"], // Dev origin allowed for CORS
    serverActions: { allowedOrigins: ["http://192.168.0.34"] }, // Enable new Next.js 14+ server actions (faster SSR)
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // Remove console logs in production
    styledComponents: true, // Optimize styled-components
  },
  images: {
    domains: ["bossmailer.co.za"], // Allow external images (optimize BossMailer assets)
    formats: ["image/avif", "image/webp"], // Use modern formats for faster loading
  },
  output: "standalone", // Optimize for deployment (smaller bundle, faster startup)
};

export default nextConfig;
