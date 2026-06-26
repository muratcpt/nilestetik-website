import type { MetadataRoute } from "next";

const BASE = "https://nilestetik.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: [] },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
