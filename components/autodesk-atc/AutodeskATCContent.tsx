"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, CheckCircle2, GraduationCap, Layers, ShieldCheck } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AutodeskBadge } from "@/components/shared/AutodeskBadge";
import { Button } from "@/components/ui/button";
import { allPrograms } from "@/data/courses";
import { useLeadModalStore } from "@/store/useLeadModalStore";

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Genuine, Licensed Software",
    description: "All training is delivered on official, fully licensed Autodesk software — never pirated tools.",
  },
  {
    icon: GraduationCap,
    title: "Standardized Curriculum",
    description: "Course content follows Autodesk's official training curriculum and learning outcomes.",
  },
  {
    icon: BadgeCheck,
    title: "Certification Pathway",
    description: "Structured preparation for Autodesk Certified User (ACU) and Certified Professional exams.",
  },
  {
    icon: Layers,
    title: "Industry-Recognized Skills",
    description: "Employers trust ATC-trained candidates for real-world, production-ready software skills.",
  },
];

export function AutodeskATCContent() {
  const openModal = useLeadModalStore((state) => state.open);
  const autodeskPrograms = allPrograms.filter((program) =>
    program.softwareTools.some((tool) => ["autocad", "revit", "3dsmax", "maya"].includes(tool.iconLabel))
  );

  return (
    <div>
      <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-24">
        <Image
          src="/images/site/autodesk-atc-hero.svg"
          alt="Authorized Autodesk Training Centre"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
        <Container className="relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AutodeskBadge className="mx-auto" />
            <h1 className="mx-auto mt-5 max-w-2xl font-heading text-3xl font-extrabold sm:text-5xl">
              Learn on Official Autodesk Software
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm text-white/70 sm:text-base">
              AET School of Design is proud to be an Authorized Autodesk Training Centre (ATC), delivering
              industry-standard training on AutoCAD, Revit, 3ds Max, Maya and more.
            </p>
            <Button
              size="lg"
              className="mt-8 bg-orange text-white hover:bg-orange-light"
              onClick={() => openModal({ source: "autodesk-atc" })}
            >
              Talk to a Counselor
              <ArrowRight className="size-4" />
            </Button>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why It Matters"
            title="What Being an Authorized Autodesk Training Centre Means for You"
            description="ATC status isn't just a badge — it shapes how we teach, license software and prepare you for certification."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-offwhite p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <benefit.icon className="size-5" />
                </span>
                <p className="mt-4 font-heading text-base font-semibold text-navy">{benefit.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Autodesk-Integrated Programs"
            title="Programs Featuring Official Autodesk Training"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {autodeskPrograms.map((program) => (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <div>
                  <p className="font-heading text-base font-semibold text-navy">{program.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{program.duration}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {program.softwareTools.map((tool) => (
                      <span
                        key={tool.name}
                        className="rounded-md bg-muted px-2 py-1 text-[11px] font-medium text-navy/80"
                      >
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowRight className="size-5 shrink-0 text-orange transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white sm:py-20">
        <Container className="text-center">
          <CheckCircle2 className="mx-auto size-10 text-orange" />
          <h2 className="mt-4 font-heading text-2xl font-bold sm:text-3xl">
            Ready to Learn on Industry-Standard Autodesk Tools?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/70">
            Speak with our admissions counselors to find the right Autodesk-integrated program for your career
            goals.
          </p>
          <Button
            size="lg"
            className="mt-6 bg-orange text-white hover:bg-orange-light"
            onClick={() => openModal({ source: "autodesk-atc" })}
          >
            Book Free Counseling
          </Button>
        </Container>
      </section>
    </div>
  );
}
