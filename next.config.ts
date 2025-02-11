import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "logos-world.net",
      "images.remotePatterns",
      "th.bing.com",
    ], // Add the domain here
  },
};

export default nextConfig;
