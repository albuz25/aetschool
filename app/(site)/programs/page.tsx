import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProgramsExplorer } from "@/components/programs/ProgramsExplorer";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "All Courses",
  description:
    "Explore industry-aligned courses at AET School of Design — Data Science, Analytics, Power BI, SQL, Architecture Design, Revit & CAD, and Gen AI.",
  path: "/programs",
  keywords: [
    "AET courses",
    "Interior Design course",
    "Data Science course",
    "Gen AI course",
    "Power BI course Noida",
    "SQL course Noida",
  ],
});

export default async function ProgramsPage(props: PageProps<"/programs">) {
  const searchParams = await props.searchParams;

  const searchQueryParam = Array.isArray(searchParams?.search)
    ? searchParams?.search[0]
    : searchParams?.search;
  const initialSearch = searchQueryParam ?? "";

  return (
    <div className="bg-offwhite py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="All Courses"
          title="Find the Right Course for Your Goals"
          description="Browse our catalog of job-focused classroom courses in data, design and creative tech."
        />
        <div className="mt-10">
          <ProgramsExplorer initialSearch={initialSearch} />
        </div>
      </Container>
    </div>
  );
}
