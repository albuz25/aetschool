import type { MetadataRoute } from "next";

import { allPrograms } from "@/data/courses";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/contact",
    "/programs",
    "/fine-arts",
    "/verify",
  ].map((path) => ({
    url: path ? `${SITE_URL}${path}` : SITE_URL,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const programRoutes: MetadataRoute.Sitemap = allPrograms.map((program) => ({
    url: `${SITE_URL}/programs/${program.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...programRoutes];
}
