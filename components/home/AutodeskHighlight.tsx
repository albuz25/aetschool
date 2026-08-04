"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, GraduationCap, Layers } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { useLeadModalStore } from "@/store/useLeadModalStore";

const SOFTWARE = ["AutoCAD", "Revit Architecture", "Revit MEP", "3ds Max", "Maya", "SketchUp"];

const BENEFITS = [
  {
    icon: BadgeCheck,
    title: "Official Autodesk Curriculum",
    description: "Training content and licensing follow official Autodesk ATC standards.",
  },
  {
    icon: Layers,
    title: "Integrated Into Core Programs",
    description: "AutoCAD & Revit are woven directly into our Interior Design and B.Voc curricula.",
  },
  {
    icon: GraduationCap,
    title: "Certification-Ready",
    description: "Structured to prepare you for Autodesk Certified User/Professional exams.",
  },
];

export function AutodeskHighlight() {
  const openModal = useLeadModalStore((state) => state.open);

  return (
    <section className="bg-navy py-16 text-white sm:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-orange px-3 py-1 text-xs font-semibold text-white">
              Authorized Autodesk Training Centre
            </span>
            <h2 className="mt-5 font-heading text-3xl font-bold sm:text-4xl">
              Learn on Official Autodesk Software
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/70">
              As an Authorized Autodesk Training Centre (ATC), AET delivers hands-on training on genuine,
              industry-standard Autodesk products — giving you real-world skills employers trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {SOFTWARE.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                className="bg-orange text-white hover:bg-orange-light"
                nativeButton={false}
                render={<Link href="/autodesk-atc" />}
              >
                Explore Autodesk ATC
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                onClick={() => openModal({ source: "autodesk-atc" })}
              >
                Talk to Counselor
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange/20 text-orange">
                  <benefit.icon className="size-5" />
                </span>
                <div>
                  <p className="font-heading text-sm font-semibold text-white">{benefit.title}</p>
                  <p className="mt-1 text-sm text-white/60">{benefit.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
