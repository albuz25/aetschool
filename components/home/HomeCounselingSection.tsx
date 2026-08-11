"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Search } from "lucide-react";

import { QuickLeadForm } from "@/components/leads/QuickLeadForm";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HomeCounselingSection() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    router.push(trimmed ? `/programs?search=${encodeURIComponent(trimmed)}` : "/programs");
  }

  return (
    <section id="free-counseling" className="scroll-mt-28 bg-offwhite py-8 sm:py-16">
      <Container className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
        <div className="max-w-xl">
          <p className="text-xs font-semibold tracking-wide text-orange uppercase">Admissions Open</p>
          <h2 className="mt-3 font-heading text-3xl leading-tight font-bold text-navy sm:text-4xl">
            Find the right program for your career
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Explore career-focused degrees and software programs, or speak with our counselors for
            personalized guidance.
          </p>

          <form onSubmit={handleSearch} className="mt-7 flex max-w-lg flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search programs or software"
                className="h-11 bg-white pl-9"
              />
            </div>
            <Button type="submit" className="h-11 bg-navy text-white hover:bg-navy-light">
              Search Programs
              <ArrowRight className="size-4" />
            </Button>
          </form>
        </div>

        <QuickLeadForm />
      </Container>
    </section>
  );
}
