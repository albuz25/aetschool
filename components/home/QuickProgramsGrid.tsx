import Link from "next/link";
import { ArrowRight, LayoutGrid } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProgramIcon, type ProgramIconName } from "@/components/icons/ProgramIcons";
import { allPrograms } from "@/data/courses";

const PROGRAM_ICONS: Record<string, ProgramIconName> = {
  "bvoc-animation-vfx": "clapperboard",
  "bvoc-interior-design": "armchair",
  "bvoc-fine-arts": "palette",
  "bvoc-data-science": "bar-chart",
  "bvoc-digital-marketing": "megaphone",
  "autodesk-revit-cad-package": "ruler",
  "gen-ai-creative-tech-package": "sparkle",
  "data-science-ai-package": "database",
  "data-analytics-package": "bar-chart",
  "power-bi-package": "bar-chart",
  "sql-package": "database",
  "interior-design-3d-spatial-package": "boxes",
};

const TILE_COLORS = ["bg-orange", "bg-blue-light", "bg-navy"];

export function getProgramIconName(slug: string): ProgramIconName | undefined {
  return PROGRAM_ICONS[slug];
}

export function ProgramIconGlyph({ slug, className }: { slug: string; className?: string }) {
  const iconName = PROGRAM_ICONS[slug];
  return iconName ? (
    <ProgramIcon name={iconName} className={className} />
  ) : (
    <LayoutGrid className={className} />
  );
}

export function QuickProgramsGrid() {
  return (
    <section className="bg-white py-14">
      <Container>
        <SectionHeading
          eyebrow="All Programs"
          title="Explore Top Programs"
          description="A quick look at every degree and software package we offer — click through for full curriculum, fees and career details."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {allPrograms.map((program, index) => {
            const tileColor = TILE_COLORS[index % TILE_COLORS.length];
            return (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="group flex flex-col items-center gap-2.5 rounded-xl border border-border bg-white p-4 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-md"
              >
                <span
                  className={`flex size-12 items-center justify-center rounded-lg text-white transition-transform group-hover:scale-105 ${tileColor}`}
                >
                  <ProgramIconGlyph slug={program.slug} className="size-6" />
                </span>
                <span className="text-xs font-semibold text-navy sm:text-sm">{program.shortTitle}</span>
                <span className="text-[10px] font-medium text-muted-foreground uppercase">
                  {program.type === "bvoc" ? "B.Voc Degree" : "Software Package"}
                </span>
                <span className="flex items-center gap-1 text-[10px] font-semibold text-orange opacity-0 transition-opacity group-hover:opacity-100">
                  Learn More
                  <ArrowRight className="size-3" />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
