import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // รูปมาจาก Unsplash / Wikimedia โดยตรง (ปรับขนาดผ่าน URL ต้นทางแล้ว)
    // ถ้าโหลดรูปมาเก็บใน /public/images แล้ว สามารถเปลี่ยนเป็น false ได้
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "commons.wikimedia.org" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
  poweredByHeader: false,
};

export default nextConfig;
