import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | AET School of Design",
  description:
    "Get in touch with AET School of Design for admissions, fee structure and program details. Visit our campus or send us an enquiry.",
};

export default function ContactPage() {
  return <ContactContent />;
}
