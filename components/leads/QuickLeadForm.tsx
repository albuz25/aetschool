import { ShieldCheck } from "lucide-react";
import { InquiryForm } from "@/components/leads/InquiryForm";

export function QuickLeadForm() {
  return (
    <div className="rounded-2xl border border-border bg-white p-4 shadow-xl sm:p-7">
      <div className="mb-3 sm:mb-5">
        <h3 className="font-heading text-base font-bold text-navy sm:text-lg">Get Free Counseling</h3>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
          Fill this form to unlock the brochure, fees & scholarship details.
        </p>
      </div>
      <InquiryForm source="hero-quick-form" compact submitLabel="Get Free Counseling" />
      <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground sm:mt-4 sm:text-xs">
        <ShieldCheck className="size-3.5 shrink-0 text-blue sm:size-4" />
        Your information is safe and will only be used for admissions counseling.
      </div>
    </div>
  );
}
