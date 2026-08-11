"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { testimonials } from "@/data/testimonials";

const VISIBLE_COUNT = 3;

export function Testimonials() {
  const [index, setIndex] = useState(0);

  function go(direction: 1 | -1) {
    setIndex((prev) => (prev + direction + testimonials.length) % testimonials.length);
  }

  const visible = Array.from(
    { length: VISIBLE_COUNT },
    (_, offset) => testimonials[(index + offset) % testimonials.length]
  );

  return (
    <section className="bg-offwhite py-16 sm:py-20">
      <Container>
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <SectionHeading
            eyebrow="Student Success"
            title="What Our Students Say"
            description="Real feedback shared by learners across our B.Voc degrees and software packages."
            align="left"
            className="mx-0 max-w-xl"
          />
          <div className="flex shrink-0 items-center gap-2 rounded-full border border-border bg-white px-4 py-2 shadow-sm">
            <div className="flex text-blue-light">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-blue-light" />
              ))}
            </div>
            <span className="text-sm font-semibold text-navy">4.8</span>
            <span className="text-xs text-muted-foreground">· 300+ Google Reviews</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <Quote className="size-6 text-orange/50" />
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center justify-between gap-2">
                  <div>
                    <p className="font-heading text-sm font-semibold text-navy">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.program}</p>
                  </div>
                  <div className="flex shrink-0 text-blue-light">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-blue-light" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonials"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:bg-muted"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonials"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-white text-navy transition-colors hover:bg-muted"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </Container>
    </section>
  );
}
