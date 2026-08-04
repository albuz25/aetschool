"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ProgramType } from "@/lib/types";

type FilterValue = ProgramType | "all";

const FILTERS: { label: string; value: FilterValue }[] = [
  { label: "All Programs", value: "all" },
  { label: "B.Voc Degrees", value: "bvoc" },
  { label: "Software Packages", value: "package" },
];

export function ProgramFilterBar({
  search,
  onSearchChange,
  activeType,
  onTypeChange,
}: {
  search: string;
  onSearchChange: (value: string) => void;
  activeType: FilterValue;
  onTypeChange: (value: FilterValue) => void;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
      <div className="relative w-full sm:max-w-xs">
        <Search className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by program or software (e.g. Revit)"
          className="pl-9"
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((filter) => (
          <Button
            key={filter.value}
            size="sm"
            variant={activeType === filter.value ? "default" : "outline"}
            className={cn(
              "rounded-full",
              activeType === filter.value && "bg-orange text-white hover:bg-orange-light"
            )}
            onClick={() => onTypeChange(filter.value)}
          >
            {filter.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
