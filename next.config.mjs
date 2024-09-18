/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nsdysbxlabtmtxscxqvw.supabase.co',
        pathname: '/storage/v1/object/public/personal-website/**',
      },
    ],
  },
};

export default nextConfig;
