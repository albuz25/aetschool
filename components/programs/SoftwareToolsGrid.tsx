import { Layers } from "lucide-react";
import type { SoftwareTool } from "@/lib/types";

export function SoftwareToolsGrid({ tools }: { tools: SoftwareTool[] }) {
  return (
    <div>
      <h2 className="font-heading text-xl font-bold text-navy">Software &amp; Tools You&apos;ll Master</h2>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-white p-4 text-center shadow-sm"
          >
            <span className="flex size-11 items-center justify-center rounded-lg bg-navy/5 text-navy">
              <Layers className="size-5" />
            </span>
            <p className="text-sm font-medium text-navy">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
