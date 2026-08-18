import type { MetadataRoute } from "next";
import { platformMeta } from "./platform/platformPageFactory";
import { BLOG_POSTS } from "@/lib/blog-data";
import { GUIDES } from "@/lib/guides-data";

const baseUrl = "https://www.fakereviewgenerator.com";

const chatPlatforms = [
  "whatsapp",
  "messenger",
  "instagram",
  "telegram",
  "twitter",
  "discord",
  "imessage",
];

const paymentPlatforms = [
  "paytm",
  "stripe",
  "googlepay",
  "upi",
  "phonepay",
  "phonepe",
  "gpay",
  "bhim",
  "googlewallet",
  "applepay",
  "venmo",
  "fonepay",
  "cashapp",
];

const billPlatforms = ["amazon", "walmart", "supplement"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/acceptable-use`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ai-generator`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bill-generator`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/chat`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/payment`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const chatRoutes: MetadataRoute.Sitemap = chatPlatforms.map((platform) => ({
    url: `${baseUrl}/chat/${platform}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const paymentRoutes: MetadataRoute.Sitemap = paymentPlatforms.map(
    (platform) => ({
      url: `${baseUrl}/payment/${platform}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  const billRoutes: MetadataRoute.Sitemap = billPlatforms.map((platform) => ({
    url: `${baseUrl}/bill-generator/${platform}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const guideRoutes: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const platformRoutes: MetadataRoute.Sitemap = Object.keys(platformMeta).map(
    (platform) => ({
      url: `${baseUrl}/platform/${platform}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }),
  );

  return [
    ...staticRoutes,
    ...chatRoutes,
    ...paymentRoutes,
    ...billRoutes,
    ...guideRoutes,
    ...blogRoutes,
    ...platformRoutes,
  ];
}

