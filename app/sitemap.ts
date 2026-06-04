import type { MetadataRoute } from "next";
import { navigation, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return navigation.map((item) => ({
    url: `${siteUrl}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
    changeFrequency: item.href === "/blog" ? "weekly" : "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
