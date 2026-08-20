import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { allPrograms, getProgramBySlug } from "@/data/courses";
import { ProgramDetailView } from "@/components/programs/ProgramDetailView";
import { isLocalSeoSlug, localSeoMeta } from "@/lib/localSeo";
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

  if (isLocalSeoSlug(program.slug)) {
    const local = localSeoMeta[program.slug];
    return buildPageMetadata({
      title: local.title,
      description: local.description,
      path: `/programs/${program.slug}`,
      keywords: local.keywords,
    });
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
