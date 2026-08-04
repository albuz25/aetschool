import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" ? "text-center" : "text-left ml-0",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase",
            dark
              ? "bg-white/10 text-orange-light"
              : "bg-orange/10 text-orange"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-heading text-3xl font-bold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 text-base leading-relaxed", dark ? "text-white/70" : "text-muted-foreground")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
