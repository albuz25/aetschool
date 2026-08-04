"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Users2 } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const PILLARS = [
  {
    icon: Award,
    title: "Autodesk Certified Faculty",
    description: "Learn directly from instructors trained and certified on official Autodesk curriculum.",
  },
  {
    icon: GraduationCap,
    title: "University-Recognized Degree",
    description: "Our B.Voc programs are awarded in partnership with an accredited university.",
  },
  {
    icon: Briefcase,
    title: "Placement Support",
    description: "Resume building, mock interviews and hiring-partner introductions for every graduate.",
  },
  {
    icon: Users2,
    title: "Hands-on Industry Projects",
    description: "Every program includes live, portfolio-ready projects — not just theory.",
  },
];

export function WhyAET() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why AET"
          title="Built for Real Careers, Not Just Certificates"
          description="Everything about our programs is designed around one outcome: helping you get hired or build a thriving creative practice."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-offwhite p-6 text-center"
            >
              <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-orange/10 text-orange">
                <pillar.icon className="size-6" />
              </span>
              <p className="mt-4 font-heading text-base font-semibold text-navy">{pillar.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
