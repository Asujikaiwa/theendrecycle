import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { locales, hreflang } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [hreflang[l], `${site.domain}/${l}`]));
  return locales.map((l) => ({
    url: `${site.domain}/${l}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: l === "th" ? 1 : 0.8,
    alternates: { languages },
  }));
}
