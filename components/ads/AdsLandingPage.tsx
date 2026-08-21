import { CheckCircle2, Clock3, GraduationCap, MapPin, Phone, ShieldCheck, Star } from "lucide-react";

import { InquiryForm } from "@/components/leads/InquiryForm";
import { CurriculumAccordion } from "@/components/programs/CurriculumAccordion";
import { SoftwareToolsGrid } from "@/components/programs/SoftwareToolsGrid";
import { Container } from "@/components/shared/Container";
import { testimonials } from "@/data/testimonials";
import type { AdsLandingCopy } from "@/lib/adsLandings";
import type { Program } from "@/lib/types";
import { CONTACT } from "@/lib/constants";

export function AdsLandingPage({
  landing,
  program,
}: {
  landing: AdsLandingCopy;
  program: Program;
}) {
  const selectedTestimonials = testimonials
    .filter((item) => landing.testimonialPrograms.includes(item.program))
    .slice(0, 3);

  return (
    <div className="bg-offwhite">
      <section className="border-b border-border bg-navy py-10 text-white sm:py-14">
        <Container className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-blue-light uppercase">
              Admissions open · Noida campus
            </p>
            <h1 className="mt-3 font-heading text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl">
              {landing.headline}
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">{landing.subhead}</p>
            <ul className="mt-6 space-y-3">
              {landing.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-sm text-white/90 sm:text-base">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-blue-light" />
                  {bullet}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm font-semibold text-blue-light">EMI available · Counselor callback in 30 minutes</p>
          </div>

          <div id="enquire" className="lg:sticky lg:top-24">
            <EnquiryCard
              source={landing.source}
              programSlug={program.slug}
              programTitle={program.title}
            />
          </div>
        </Container>
      </section>

      <section className="bg-white py-8">
        <Container className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <TrustStat icon={Clock3} label="Duration" value={program.duration} />
          <TrustStat icon={GraduationCap} label="Tools" value={`${program.softwareTools.length}+ software`} />
          <TrustStat icon={MapPin} label="Campus" value="Sector 2, Noida" />
          <TrustStat icon={Phone} label="Next step" value="Counselor callback" />
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="space-y-10">
            <CurriculumAccordion modules={program.curriculum} />
            <SoftwareToolsGrid tools={program.softwareTools} />
            <div>
              <h2 className="font-heading text-xl font-bold text-navy">Career outcomes</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {program.careerRoles.map((role) => (
                  <li
                    key={role}
                    className="rounded-full border border-border bg-white px-3 py-1.5 text-sm font-medium text-navy"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-heading text-xl font-bold text-navy">What students say</h2>
            {selectedTestimonials.map((item) => (
              <blockquote key={item.name} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <div className="flex text-blue-light">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star key={index} className="size-4 fill-blue-light" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">&ldquo;{item.quote}&rdquo;</p>
                <p className="mt-3 text-sm font-semibold text-navy">{item.name}</p>
                <p className="text-xs text-muted-foreground">{item.program}</p>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-orange py-12">
        <Container className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="text-white">
            <h2 className="font-heading text-3xl font-bold">Ready to start {program.title}?</h2>
            <p className="mt-3 text-white/90">
              Share your details. An AET counselor will call you with fees, batch dates and EMI options.
            </p>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              <Phone className="size-4" />
              Or call {CONTACT.phoneDisplay}
            </a>
          </div>
          <EnquiryCard
            source={`${landing.source}-bottom`}
            programSlug={program.slug}
            programTitle={program.title}
          />
        </Container>
      </section>
    </div>
  );
}

function EnquiryCard({
  source,
  programSlug,
  programTitle,
}: {
  source: string;
  programSlug: string;
  programTitle: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white p-4 text-foreground shadow-xl sm:p-6">
      <h2 className="font-heading text-lg font-bold text-navy">Get free counseling</h2>
      <p className="mt-1 text-sm text-foreground">
        For {programTitle}. We will share fees, batches and EMI on your call.
      </p>
      <div className="mt-4">
        <InquiryForm
          source={source}
          programSlug={programSlug}
          compact
          submitLabel="Get Free Counseling"
        />
      </div>
      <div className="mt-3 flex items-center gap-2 text-[11px] text-foreground">
        <ShieldCheck className="size-3.5 shrink-0 text-blue" />
        Your number is only used by AET admissions.
      </div>
    </div>
  );
}

function TrustStat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock3;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-offwhite p-4 text-center">
      <Icon className="mx-auto size-5 text-orange" />
      <p className="mt-2 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">{label}</p>
      <p className="mt-1 text-sm font-bold text-navy">{value}</p>
    </div>
  );
}
