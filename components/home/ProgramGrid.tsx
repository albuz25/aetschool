"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { bvocPrograms, softwarePackages } from "@/data/courses";

export function ProgramGrid() {
  return (
    <section className="bg-offwhite py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Our Programs"
          title="Choose Your Path: Degree or Skill Package"
          description="From full university-partnered B.Voc degrees to fast, job-focused software packages — pick what fits your goals and timeline."
        />

        <Tabs defaultValue="bvoc" className="mt-10">
          <div className="flex justify-center">
            <TabsList className="h-11 rounded-full bg-white p-1 shadow-sm">
              <TabsTrigger value="bvoc" className="rounded-full px-5 text-sm">
                University Degrees (B.Voc)
              </TabsTrigger>
              <TabsTrigger value="package" className="rounded-full px-5 text-sm">
                Software Packages
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="bvoc" className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {bvocPrograms.map((program, index) => (
                <ProgramCard key={program.slug} program={program} index={index} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="package" className="mt-10">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {softwarePackages.map((program, index) => (
                <ProgramCard key={program.slug} program={program} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
}
