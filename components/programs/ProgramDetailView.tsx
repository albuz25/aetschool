import Image from "next/image";
import { Clock, Download, GraduationCap, MapPin } from "lucide-react";

import type { Program } from "@/lib/types";
import { CONTACT } from "@/lib/constants";
import { courseJsonLd, faqJsonLd } from "@/lib/localSeo";
import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/ui/badge";
import { SoftwareToolsGrid } from "@/components/programs/SoftwareToolsGrid";
import { CurriculumAccordion } from "@/components/programs/CurriculumAccordion";
import { CareerRoles } from "@/components/programs/CareerRoles";
import { StickyInquirySidebar } from "@/components/programs/StickyInquirySidebar";
import { FAQSection } from "@/components/home/FAQSection";

export function ProgramDetailView({ program }: { program: Program }) {
  const heading = program.seoH1 ?? program.title;
  const courseSchema = program.localSeo ? courseJsonLd(program) : null;
  const faqSchema = program.localSeo ? faqJsonLd(program) : null;

  return (
    <div className="pb-24 lg:pb-16">
      {courseSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
      ) : null}
      {faqSchema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      ) : null}

      <section className="relative overflow-hidden bg-navy">
        <Image
          src={program.heroImage}
          alt={heading}
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
            {heading}
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
            {program.localSeo ? (
              <div className="mt-5 rounded-xl border border-navy/10 bg-navy/[0.03] p-4 sm:p-5">
                <p className="flex items-start gap-2 font-heading text-sm font-bold text-navy">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-orange" />
                  Training in Sector 2, Noida
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Classroom batches at {CONTACT.address}. Students commute from Greater Noida,
                  Ghaziabad and other Delhi NCR locations. Instructor-led labs, EMI options, and
                  counselor-scheduled timings for working professionals. Call {CONTACT.phoneDisplay}{" "}
                  to confirm the next batch.
                </p>
              </div>
            ) : null}
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
