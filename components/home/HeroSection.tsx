"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Download } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { AutodeskBadge } from "@/components/shared/AutodeskBadge";
import { Button } from "@/components/ui/button";
import { QuickLeadForm } from "@/components/leads/QuickLeadForm";
import { useLeadModalStore } from "@/store/useLeadModalStore";

const HIGHLIGHTS = [
  "University-partnered B.Voc degrees in Design & Tech",
  "Learn on official Autodesk software as an Authorized ATC",
  "Job-focused Gen AI, Data Science & Design skill packages",
  "Placement support & industry mentorship on every program",
];

export function HeroSection() {
  const openModal = useLeadModalStore((state) => state.open);

  return (
    <section className="relative overflow-hidden bg-navy">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(249,115,22,0.25), transparent 40%), radial-gradient(circle at 85% 10%, rgba(37,99,235,0.3), transparent 45%)",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AutodeskBadge />
          <h1 className="mt-5 font-heading text-4xl leading-tight font-extrabold text-white sm:text-5xl">
            Master Design, Tech &amp; <span className="text-orange">Gen AI</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
            AET School of Design offers university-partnered B.Voc degrees and industry-aligned software
            packages — taught on official Autodesk tools as an Authorized Autodesk Training Centre.
          </p>

          <ul className="mt-6 space-y-3">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-orange" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-orange text-white hover:bg-orange-light"
              nativeButton={false}
              render={<Link href="/programs" />}
            >
              Explore Programs
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
              onClick={() => openModal({ source: "hero-download" })}
            >
              <Download className="size-4" />
              Download Prospectus
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <QuickLeadForm />
        </motion.div>
      </Container>
    </section>
  );
}
