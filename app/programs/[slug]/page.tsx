import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { allPrograms, getProgramBySlug } from "@/data/courses";
import { ProgramDetailView } from "@/components/programs/ProgramDetailView";

export function generateStaticParams() {
  return allPrograms.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata(
  props: PageProps<"/programs/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const program = getProgramBySlug(slug);

  if (!program) {
    return { title: "Program Not Found | AET School of Design" };
  }

  return {
    title: `${program.title} | AET School of Design`,
    description: program.tagline,
  };
}

export default async function ProgramDetailPage(props: PageProps<"/programs/[slug]">) {
  const { slug } = await props.params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return <ProgramDetailView program={program} />;
}
