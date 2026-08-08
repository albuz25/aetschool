import Link from "next/link";
import {
  BarChart3,
  Boxes,
  Clapperboard,
  Database,
  LayoutGrid,
  Megaphone,
  Palette,
  Ruler,
  Sofa,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { allPrograms } from "@/data/courses";

const PROGRAM_ICONS: Record<string, LucideIcon> = {
  "bvoc-animation-vfx": Clapperboard,
  "bvoc-interior-design": Sofa,
  "bvoc-fine-arts": Palette,
  "bvoc-data-science": BarChart3,
  "bvoc-digital-marketing": Megaphone,
  "autodesk-revit-cad-package": Ruler,
  "gen-ai-creative-tech-package": Sparkles,
  "data-science-ai-package": Database,
  "interior-design-3d-spatial-package": Boxes,
};

export function getProgramIcon(slug: string): LucideIcon {
  return PROGRAM_ICONS[slug] ?? LayoutGrid;
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
          {allPrograms.map((program) => {
            const Icon = getProgramIcon(program.slug);
            return (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="group flex flex-col items-center gap-2.5 rounded-xl border border-border bg-white p-4 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:border-orange/40 hover:shadow-md"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors group-hover:bg-orange/10 group-hover:text-orange">
                  <Icon className="size-5" />
                </span>
                <span className="text-xs font-semibold text-navy sm:text-sm">{program.shortTitle}</span>
                <span className="text-[10px] font-medium text-muted-foreground uppercase">
                  {program.type === "bvoc" ? "B.Voc Degree" : "Software Package"}
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
