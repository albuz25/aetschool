import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Learn about AET School of Design's university partnerships, mission and vision in Noida.",
  path: "/about",
  keywords: [
    "AET School of Design",
    "about AET",
    "design institute Noida",
    "university partnered B.Voc",
    "AET campus Sector 2 Noida",
  ],
});

export default function AboutPage() {
  return <AboutContent />;
}
