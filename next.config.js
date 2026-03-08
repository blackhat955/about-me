/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three"],
  images: {
    remotePatterns: [
      { hostname: "github-readme-stats-eight-theta.vercel.app" },
      { hostname: "github-readme-activity-graph.vercel.app" },
      { hostname: "github-profile-trophy.vercel.app" },
      { hostname: "github-readme-streak-stats.herokuapp.com" },
    ],
  },
};

module.exports = nextConfig;
