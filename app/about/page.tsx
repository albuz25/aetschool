import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About Us | AET School of Design",
  description:
    "Learn about AET School of Design's university partnerships, Authorized Autodesk Training Centre status, mission and vision.",
};

export default function AboutPage() {
  return <AboutContent />;
}
