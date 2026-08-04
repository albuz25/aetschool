"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { InquiryForm } from "@/components/leads/InquiryForm";
import { AutodeskBadge } from "@/components/shared/AutodeskBadge";
import { useLeadModalStore } from "@/store/useLeadModalStore";

const SOURCE_COPY: Record<string, { heading: string; subheading: string }> = {
  header: {
    heading: "Let's find your right program",
    subheading: "Share your details to unlock the brochure, fee structure and scholarship info.",
  },
  "mobile-header": {
    heading: "Let's find your right program",
    subheading: "Share your details to unlock the brochure, fee structure and scholarship info.",
  },
  "hero-download": {
    heading: "Download the AET Prospectus",
    subheading: "Get the full prospectus with course details, fees and career outcomes.",
  },
  "program-card": {
    heading: "Get Program Details",
    subheading: "Unlock the detailed curriculum, fee structure and scholarship info for this program.",
  },
  "autodesk-atc": {
    heading: "Learn on Official Autodesk Software",
    subheading: "Talk to our ATC counseling team about certification-ready programs.",
  },
  "check-fees": {
    heading: "Check Fees & Scholarships",
    subheading: "Share your details and our team will send you the exact fee breakdown.",
  },
  "book-counseling": {
    heading: "Book a Free Counseling Session",
    subheading: "Our academic counselors will help you choose the right program for your goals.",
  },
  general: {
    heading: "Get in Touch with AET",
    subheading: "Share your details and our admissions team will reach out shortly.",
  },
};

export function LeadCaptureModal() {
  const { isOpen, context, close } = useLeadModalStore();

  const copy = context?.heading
    ? { heading: context.heading, subheading: context.subheading ?? "" }
    : SOURCE_COPY[context?.source ?? "general"] ?? SOURCE_COPY.general;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && close()}>
      <DialogContent className="max-h-[90vh] w-[calc(100%-2rem)] max-w-lg overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <AutodeskBadge className="mb-1 w-fit" variant="outline" />
          <DialogTitle className="font-heading text-xl">
            {context?.programTitle ? `${copy.heading} — ${context.programTitle}` : copy.heading}
          </DialogTitle>
          <DialogDescription>{copy.subheading}</DialogDescription>
        </DialogHeader>
        <InquiryForm
          source={context?.source ?? "general"}
          programSlug={context?.programSlug}
          onSuccess={close}
        />
      </DialogContent>
    </Dialog>
  );
}
