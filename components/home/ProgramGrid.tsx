import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { courses } from "@/data/courses";

export function ProgramGrid() {
  return (
    <section className="bg-offwhite py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our Courses"
          title="Choose the Course That Fits Your Goals"
          description="Job-focused classroom courses in data, design and creative tech — pick what fits your timeline and career path."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((program, index) => (
            <ProgramCard key={program.slug} program={program} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
