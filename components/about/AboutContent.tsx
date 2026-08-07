"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, GraduationCap, Target } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { useLeadModalStore } from "@/store/useLeadModalStore";

const VALUES = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To make industry-relevant design and technology education accessible, practical and career-outcome focused.",
  },
  {
    icon: GraduationCap,
    title: "Our Vision",
    description:
      "To be the region's most trusted institute for vocational design and technology education, bridging academia and industry.",
  },
];

const PARTNERSHIP_POINTS = [
  "B.Voc degrees are jointly designed and awarded with our university partner under the National Skills Qualification Framework (NSQF).",
  "Curriculum reviewed periodically to stay aligned with evolving industry and university standards.",
  "Graduates receive a recognized university degree alongside practical, portfolio-ready skills.",
  "Credit transfer and further academic progression pathways available for eligible students.",
];

export function AboutContent() {
  const openModal = useLeadModalStore((state) => state.open);

  return (
    <div>
      <section className="relative overflow-hidden bg-navy py-16 text-white sm:py-24">
        <Image
          src="/images/site/about-campus.svg"
          alt="AET School of Design campus"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/70 to-navy/40" />
        <Container className="relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="mx-auto max-w-2xl font-heading text-3xl font-extrabold sm:text-5xl">
              About AET School of Design
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm text-white/70 sm:text-base">
              A vocational design and technology institute built on university partnerships and practical,
              industry-relevant learning.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {VALUES.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-offwhite p-7">
                <span className="flex size-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  <value.icon className="size-5" />
                </span>
                <p className="mt-4 font-heading text-lg font-bold text-navy">{value.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-offwhite py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="University Partnership"
            title="Accredited Degrees, Backed by University Standards"
            description="Our B.Voc programs are not standalone diplomas — they are awarded through a formal university partnership."
          />
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-blue/20 bg-blue/5 p-7">
            <div className="flex items-center gap-3">
              <Building2 className="size-6 text-blue" />
              <p className="font-heading text-base font-semibold text-navy">
                University Partnership Accreditation Notice
              </p>
            </div>
            <ul className="mt-5 space-y-3">
              {PARTNERSHIP_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-16 text-white sm:py-20">
        <Container className="text-center">
          <h2 className="font-heading text-2xl font-bold sm:text-3xl">Want to Know More About AET?</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-white/70">
            Reach out to our team to learn more about our university partnerships, faculty and campus facilities.
          </p>
          <Button
            size="lg"
            className="mt-6 bg-orange text-white hover:bg-orange-light"
            onClick={() => openModal({ source: "about" })}
          >
            Talk to Us
          </Button>
        </Container>
      </section>
    </div>
  );
}
