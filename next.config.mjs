/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.patriciosalazar.dev',
      },
    ],
  },
};

export default nextConfig;
