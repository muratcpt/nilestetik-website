import type { MetadataRoute } from "next";

const BASE = "https://nil-estetik.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: [] },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
