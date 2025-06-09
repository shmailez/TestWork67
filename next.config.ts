import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  sassOptions: {
    additionalData: `$var: red;`,
  },
};

export default nextConfig;
