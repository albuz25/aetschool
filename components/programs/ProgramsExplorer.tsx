"use client";

import { useMemo, useState } from "react";
import { ProgramFilterBar } from "@/components/programs/ProgramFilterBar";
import { ProgramCard } from "@/components/programs/ProgramCard";
import { allPrograms } from "@/data/courses";
import type { ProgramType } from "@/lib/types";

type FilterValue = ProgramType | "all";

export function ProgramsExplorer({ initialType = "all" }: { initialType?: FilterValue }) {
  const [search, setSearch] = useState("");
  const [activeType, setActiveType] = useState<FilterValue>(initialType);

  const filteredPrograms = useMemo(() => {
    const query = search.trim().toLowerCase();
    return allPrograms.filter((program) => {
      const matchesType = activeType === "all" || program.type === activeType;
      if (!matchesType) return false;
      if (!query) return true;
      const haystack = [
        program.title,
        program.shortTitle,
        ...program.softwareTools.map((tool) => tool.name),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }, [search, activeType]);

  return (
    <div className="space-y-8">
      <ProgramFilterBar
        search={search}
        onSearchChange={setSearch}
        activeType={activeType}
        onTypeChange={setActiveType}
      />

      {filteredPrograms.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPrograms.map((program, index) => (
            <ProgramCard key={program.slug} program={program} index={index} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-white py-16 text-center text-sm text-muted-foreground">
          No programs match your search. Try a different keyword or filter.
        </div>
      )}
    </div>
  );
}
