import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Renders the official AET logo file. The source image has a solid white
 * background, so on dark surfaces (Header/Footer) it's wrapped in a white
 * rounded chip to avoid an ugly hard-edged box; on light surfaces it's
 * rendered directly.
 */
export function Logo({
  theme = "onDark",
  className,
}: {
  theme?: "onDark" | "onLight";
  className?: string;
}) {
  const isOnDark = theme === "onDark";

  return (
    <span
      className={cn(
        "inline-flex items-center",
        isOnDark && "rounded-lg bg-white px-2.5 py-1.5",
        className
      )}
    >
      <Image
        src="/images/site/aet-logo.jpeg"
        alt="AET School of Design"
        width={1471}
        height={723}
        priority
        className="h-9 w-auto object-contain sm:h-10 lg:h-11"
      />
    </span>
  );
}
