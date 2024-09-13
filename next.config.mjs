/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    reactStrictMode: true,
    assetPrefix:  '/Hackathon24/' ,  // Add project name for GitHub Pages
    basePath:  '/Hackathon24'  
  };

export default nextConfig;
