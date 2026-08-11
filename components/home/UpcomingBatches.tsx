"use client";

import { CalendarDays, PhoneCall, Star } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { ProgramIconGlyph } from "@/components/home/QuickProgramsGrid";
import { useLeadModalStore } from "@/store/useLeadModalStore";
import { getProgramBySlug } from "@/data/courses";
import { getUpcomingBatchDates } from "@/lib/batchDates";

const CURATED_SLUGS = [
  "bvoc-animation-vfx",
  "bvoc-interior-design",
  "bvoc-digital-marketing",
  "gen-ai-creative-tech-package",
];

export function UpcomingBatches() {
  const openModal = useLeadModalStore((state) => state.open);
  const batchDates = getUpcomingBatchDates(CURATED_SLUGS.length);

  const batches = CURATED_SLUGS.map((slug, index) => {
    const program = getProgramBySlug(slug);
    if (!program) return null;
    return { program, startDate: batchDates[index] };
  }).filter((entry): entry is { program: NonNullable<ReturnType<typeof getProgramBySlug>>; startDate: string } => Boolean(entry));

  return (
    <section className="bg-muted/40 py-14">
      <Container>
        <SectionHeading
          eyebrow="Batches Filling Fast"
          title="Upcoming Batches"
          description="Reserve your seat in the next batch for these popular programs — new batches start every few weeks."
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {batches.map(({ program, startDate }) => {
            return (
              <div
                key={program.slug}
                className="flex flex-col rounded-2xl border border-border bg-white p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-orange text-white">
                    <ProgramIconGlyph slug={program.slug} className="size-5" />
                  </span>
                  <span className="flex items-center gap-0.5 text-amber-400">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="size-3.5 fill-current" />
                    ))}
                  </span>
                </div>
                <h3 className="mt-3.5 font-heading text-sm font-bold text-navy">{program.shortTitle}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <CalendarDays className="size-3.5 text-orange" />
                  Starting {startDate}
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="mt-4 border-orange/30 text-orange hover:bg-orange/10 hover:text-orange"
                  onClick={() =>
                    openModal({
                      source: "upcoming-batches",
                      programSlug: program.slug,
                      programTitle: program.title,
                      heading: "Request a Call Back",
                      subheading: `Get batch timings and fee details for ${program.shortTitle}.`,
                    })
                  }
                >
                  <PhoneCall className="size-3.5" />
                  Request a Call Back
                </Button>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-center text-[11px] text-muted-foreground/70">
          Batch dates shown are indicative. Confirm exact schedule with our admissions team.
        </p>
      </Container>
    </section>
  );
}
