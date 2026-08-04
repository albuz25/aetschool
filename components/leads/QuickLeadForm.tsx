import { ShieldCheck } from "lucide-react";
import { InquiryForm } from "@/components/leads/InquiryForm";

export function QuickLeadForm() {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-xl sm:p-7">
      <div className="mb-5">
        <h3 className="font-heading text-lg font-bold text-navy">Get Free Counseling</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Fill this form to unlock the brochure, fees & scholarship details.
        </p>
      </div>
      <InquiryForm source="hero-quick-form" compact submitLabel="Get Free Counseling" />
      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="size-4 text-blue" />
        Your information is safe and will only be used for admissions counseling.
      </div>
    </div>
  );
}
