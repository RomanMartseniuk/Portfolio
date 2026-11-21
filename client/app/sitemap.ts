import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Update lastModified when the content changes. Project pages get added here later.
const LAST_UPDATED = "2026-11-21";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
