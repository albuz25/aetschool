import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { allPrograms, getProgramBySlug } from "@/data/courses";
import { ProgramDetailView } from "@/components/programs/ProgramDetailView";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return allPrograms.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata(
  props: PageProps<"/programs/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const program = getProgramBySlug(slug);

  if (!program) {
    return { title: "Program Not Found" };
  }

  return buildPageMetadata({
    title: program.title,
    description: program.tagline || program.overview,
    path: `/programs/${program.slug}`,
    keywords: [
      program.title,
      program.shortTitle,
      "AET School of Design",
      "Noida",
      ...program.softwareTools.map((tool) => tool.name),
      ...program.careerRoles,
    ],
  });
}

export default async function ProgramDetailPage(props: PageProps<"/programs/[slug]">) {
  const { slug } = await props.params;
  const program = getProgramBySlug(slug);

  if (!program) {
    notFound();
  }

  return <ProgramDetailView program={program} />;
}
