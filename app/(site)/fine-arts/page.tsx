import type { Metadata } from "next";

import { FineArtsContent } from "@/components/fine-arts/FineArtsContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Fine Arts Programs",
  description:
    "Explore Fine Arts pathways at AET School of Design, including the B.Voc in Fine Arts and Diploma in Fine Arts.",
  path: "/fine-arts",
  keywords: [
    "Fine Arts Noida",
    "B.Voc Fine Arts",
    "Diploma in Fine Arts",
    "AET Fine Arts",
    "painting drawing course Noida",
  ],
});

export default function FineArtsPage() {
  return <FineArtsContent />;
}
