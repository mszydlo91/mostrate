import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];

  return [
    "",
    "/templates/profesional",
    "/templates/comercio",
    "/templates/gastronomia",
    "/templates/bienestar",
  ].map((path, index) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: index === 0 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : 0.6,
  }));
}
