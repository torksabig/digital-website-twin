/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export → produces ./out, deployable on Cloudflare Pages
  // exactly like the previous static site (no server runtime needed).
  output: "export",
  images: {
    // next/image optimization is server-side; disable for static export.
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
