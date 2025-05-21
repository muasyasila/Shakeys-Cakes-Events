// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.VERCEL ? "standalone" : undefined, // Auto-detect Vercel
  images: {
    unoptimized: true // Disable if you're not using Next.js Image Optimization
  }
};

export default nextConfig;