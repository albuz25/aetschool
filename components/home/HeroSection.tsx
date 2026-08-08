"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle2, ArrowRight, Download, Search } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { QuickLeadForm } from "@/components/leads/QuickLeadForm";
import { useLeadModalStore } from "@/store/useLeadModalStore";

const HIGHLIGHTS = [
  "University-partnered B.Voc degrees in Design & Tech",
  "Hands-on training with industry-standard software",
  "Job-focused Gen AI, Data Science & Design skill packages",
  "Placement support & industry mentorship on every program",
];

export function HeroSection() {
  const openModal = useLeadModalStore((state) => state.open);
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `/programs?search=${encodeURIComponent(trimmed)}` : "/programs");
  }

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
          <h1 className="font-heading text-4xl leading-tight font-extrabold text-white sm:text-5xl">
            Master Design, Tech &amp; <span className="text-orange">Gen AI</span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
            AET School of Design offers university-partnered B.Voc degrees and industry-aligned software
            packages designed for practical, career-focused learning.
          </p>

          <form onSubmit={handleSearch} className="mt-6 flex max-w-md gap-2">
            <div className="relative flex-1">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-white/50" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search your favourite course today"
                className="border-white/20 bg-white/10 pl-9 text-white placeholder:text-white/50 focus-visible:ring-orange"
              />
            </div>
            <Button type="submit" className="bg-orange text-white hover:bg-orange-light">
              <Search className="size-4" />
              Search
            </Button>
          </form>

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
