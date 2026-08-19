import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us",
  description:
    "Get in touch with AET School of Design for admissions, fee structure and program details. Visit our Noida campus or send us an enquiry.",
  path: "/contact",
  keywords: [
    "AET School of Design contact",
    "admissions Noida",
    "AET phone number",
    "design school Sector 2 Noida",
    "AET enquiry",
  ],
});

export default function ContactPage() {
  return <ContactContent />;
}
