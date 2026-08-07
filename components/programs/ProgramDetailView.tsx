import Image from "next/image";
import { Clock, Download, GraduationCap } from "lucide-react";

import type { Program } from "@/lib/types";
import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/ui/badge";
import { SoftwareToolsGrid } from "@/components/programs/SoftwareToolsGrid";
import { CurriculumAccordion } from "@/components/programs/CurriculumAccordion";
import { CareerRoles } from "@/components/programs/CareerRoles";
import { StickyInquirySidebar } from "@/components/programs/StickyInquirySidebar";
import { FAQSection } from "@/components/home/FAQSection";

export function ProgramDetailView({ program }: { program: Program }) {
  return (
    <div className="pb-24 lg:pb-16">
      <section className="relative overflow-hidden bg-navy">
        <Image
          src={program.heroImage}
          alt={program.title}
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40" />
        <Container className="relative py-14 sm:py-20">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border-none bg-white/10 text-white">
              {program.type === "bvoc" ? "B.Voc Degree" : "Software Package"}
            </Badge>
          </div>
          <h1 className="mt-4 max-w-2xl font-heading text-3xl font-extrabold text-white sm:text-4xl">
            {program.title}
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            {program.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-5 text-sm text-white/80">
            <span className="flex items-center gap-2">
              <Clock className="size-4 text-orange" />
              {program.duration}
            </span>
            <span className="flex items-center gap-2">
              <GraduationCap className="size-4 text-orange" />
              {program.eligibility}
            </span>
          </div>
          {program.brochurePath ? (
            <a
              href={program.brochurePath}
              download
              className="mt-7 inline-flex h-10 items-center gap-2 rounded-lg bg-orange px-4 text-sm font-semibold text-white transition-colors hover:bg-orange-light"
            >
              <Download className="size-4" />
              Download Brochure
            </a>
          ) : null}
        </Container>
      </section>

      <Container className="mt-10 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-3">
        <div className="space-y-12 lg:col-span-2">
          <div>
            <h2 className="font-heading text-xl font-bold text-navy">Program Overview</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{program.overview}</p>
            <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {program.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-lg bg-orange/5 px-3 py-2 text-sm text-navy/90"
                >
                  {highlight}
                </li>
              ))}
            </ul>
            {program.accreditation ? (
              <p className="mt-5 rounded-xl border border-blue/20 bg-blue/5 p-4 text-sm text-blue">
                {program.accreditation}
              </p>
            ) : null}
            {program.certificationBody ? (
              <p className="mt-5 rounded-xl border border-orange/20 bg-orange/5 p-4 text-sm text-orange">
                Certification: {program.certificationBody}
              </p>
            ) : null}
          </div>

          <SoftwareToolsGrid tools={program.softwareTools} />
          <CurriculumAccordion modules={program.curriculum} />
          <CareerRoles roles={program.careerRoles} />
        </div>

        <StickyInquirySidebar program={program} />
      </Container>

      <div className="mt-16">
        <FAQSection extraFaqs={program.faqs} className="bg-white py-16 sm:py-20" />
      </div>
    </div>
  );
}
