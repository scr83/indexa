/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  async redirects() {
    return [
      // keep a single canonical spelling of the Serbian route
      { source: '/sr/index', destination: '/sr', permanent: true },
    ];
  },
};

export default nextConfig;
