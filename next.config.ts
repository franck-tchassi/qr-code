import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // Ignore les erreurs ESLint lors du processus de build
  },
};

export default nextConfig;
