import type { Metadata } from "next";
import { AutodeskATCContent } from "@/components/autodesk-atc/AutodeskATCContent";

export const metadata: Metadata = {
  title: "Authorized Autodesk Training Centre | AET School of Design",
  description:
    "AET School of Design is an Authorized Autodesk Training Centre (ATC), offering official Autodesk software training across AutoCAD, Revit, 3ds Max and Maya.",
};

export default function AutodeskATCPage() {
  return <AutodeskATCContent />;
}
