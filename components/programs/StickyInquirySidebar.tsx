"use client";

import { CalendarCheck, Clock, GraduationCap, IndianRupee } from "lucide-react";
import { InquiryForm } from "@/components/leads/InquiryForm";
import { Button } from "@/components/ui/button";
import { useLeadModalStore } from "@/store/useLeadModalStore";
import type { Program } from "@/lib/types";

export function StickyInquirySidebar({ program }: { program: Program }) {
  const openModal = useLeadModalStore((state) => state.open);

  return (
    <>
      {/* Desktop sticky sidebar */}
      <div className="hidden lg:block">
        <div className="sticky top-24 space-y-4">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-md">
            <h3 className="font-heading text-lg font-bold text-navy">{program.title}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Clock className="size-4 text-orange" />
                {program.duration}
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap className="size-4 text-orange" />
                {program.eligibility}
              </li>
              <li className="flex items-center gap-2">
                <IndianRupee className="size-4 text-orange" />
                {program.fees}
              </li>
            </ul>

            <Button
              className="mt-5 w-full bg-orange text-white hover:bg-orange-light"
              onClick={() =>
                openModal({
                  source: "program-detail",
                  programSlug: program.slug,
                  programTitle: program.title,
                  heading: "Download Syllabus & Fee Details",
                  subheading: `Get the complete curriculum, fees and career outcomes for ${program.title}.`,
                })
              }
            >
              <CalendarCheck className="size-4" />
              Book Free Counseling
            </Button>
          </div>

          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <p className="mb-3 text-sm font-semibold text-navy">Quick Enquiry</p>
            <InquiryForm
              source="program-sidebar"
              programSlug={program.slug}
              compact
              submitLabel="Get Details"
            />
          </div>
        </div>
      </div>

      {/* Mobile bottom CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-between gap-3 border-t border-border bg-white p-3 shadow-[0_-4px_12px_rgba(0,0,0,0.06)] lg:hidden">
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-navy">{program.shortTitle}</p>
          <p className="text-[11px] text-muted-foreground">{program.duration}</p>
        </div>
        <Button
          className="shrink-0 bg-orange text-white hover:bg-orange-light"
          onClick={() =>
            openModal({
              source: "program-detail-mobile",
              programSlug: program.slug,
              programTitle: program.title,
            })
          }
        >
          Enquire Now
        </Button>
      </div>
    </>
  );
}
