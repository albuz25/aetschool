import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProgramsExplorer } from "@/components/programs/ProgramsExplorer";

export const metadata: Metadata = {
  title: "All Programs | AET School of Design",
  description:
    "Explore university-partnered B.Voc degrees and industry-aligned software skill packages offered by AET School of Design.",
};

export default async function ProgramsPage(props: PageProps<"/programs">) {
  const searchParams = await props.searchParams;
  const typeParam = Array.isArray(searchParams?.type) ? searchParams?.type[0] : searchParams?.type;
  const initialType = typeParam === "bvoc" || typeParam === "package" ? typeParam : "all";

  return (
    <div className="bg-offwhite py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="All Programs"
          title="Find the Right Program for Your Goals"
          description="Browse our full catalog of university-partnered B.Voc degrees and short-term software skill packages."
        />
        <div className="mt-10">
          <ProgramsExplorer initialType={initialType} />
        </div>
      </Container>
    </div>
  );
}
