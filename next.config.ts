import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['indebtedly-yeld-marcy.ngrok-free.dev'],  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
