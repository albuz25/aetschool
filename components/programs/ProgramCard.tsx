"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";

import type { Program } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLeadModalStore } from "@/store/useLeadModalStore";

export function ProgramCard({ program, index = 0 }: { program: Program; index?: number }) {
  const openModal = useLeadModalStore((state) => state.open);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
      className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="flex items-center justify-between gap-2">
        <Badge
          className={
            program.type === "bvoc"
              ? "border-none bg-blue/10 text-blue"
              : "border-none bg-orange/10 text-orange"
          }
        >
          {program.type === "bvoc" ? "B.Voc Degree" : "Software Package"}
        </Badge>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Clock className="size-3.5" />
          {program.duration}
        </span>
      </div>

      <h3 className="mt-4 font-heading text-lg font-bold text-navy">{program.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{program.tagline}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {program.softwareTools.slice(0, 4).map((tool) => (
          <span
            key={tool.name}
            className="rounded-md bg-muted px-2 py-1 text-[11px] font-medium text-navy/80"
          >
            {tool.name}
          </span>
        ))}
      </div>

      <ul className="mt-4 space-y-1.5">
        {program.highlights.slice(0, 3).map((highlight) => (
          <li key={highlight} className="flex items-start gap-1.5 text-xs text-muted-foreground">
            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-orange" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-2 pt-2">
        <Button
          variant="outline"
          className="flex-1"
          nativeButton={false}
          render={<Link href={`/programs/${program.slug}`} />}
        >
          View Syllabus
        </Button>
        <Button
          className="flex-1 bg-orange text-white hover:bg-orange-light"
          onClick={() =>
            openModal({
              source: "program-card",
              programSlug: program.slug,
              programTitle: program.title,
            })
          }
        >
          Get Details
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </motion.div>
  );
}
