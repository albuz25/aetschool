import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/fine-arts", destination: "/programs", permanent: true },
      { source: "/programs/bvoc-animation-vfx", destination: "/programs", permanent: true },
      { source: "/programs/bvoc-interior-design", destination: "/programs", permanent: true },
      { source: "/programs/bvoc-fine-arts", destination: "/programs", permanent: true },
      { source: "/programs/bvoc-data-science", destination: "/programs", permanent: true },
      { source: "/programs/bvoc-digital-marketing", destination: "/programs", permanent: true },
    ];
  },
};

export default nextConfig;
