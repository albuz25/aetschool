import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export function AutodeskBadge({
  className,
  variant = "solid",
}: {
  className?: string;
  variant?: "solid" | "outline";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        variant === "solid"
          ? "bg-orange text-white"
          : "border border-orange/40 bg-orange/10 text-orange",
        className
      )}
    >
      <BadgeCheck className="size-3.5" />
      Authorized Autodesk Training Centre
    </span>
  );
}
