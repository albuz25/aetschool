import type { Metadata } from "next";

import { FineArtsContent } from "@/components/fine-arts/FineArtsContent";

export const metadata: Metadata = {
  title: "Fine Arts Programs | AET School of Design",
  description:
    "Explore Fine Arts pathways at AET School of Design, including the B.Voc in Fine Arts and Diploma in Fine Arts.",
};

export default function FineArtsPage() {
  return <FineArtsContent />;
}
