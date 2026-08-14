import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/guides/", "/about", "/contact", "/acceptable-use", "/privacy-policy", "/terms", "/cookie-policy", "/disclaimer", "/ads.txt"],
        disallow: ["/api/", "/admin/", "/*?*"],
      },
    ],
    sitemap: "https://www.fakereviewgenerator.com/sitemap.xml",
    host: "https://www.fakereviewgenerator.com",
  };
}
