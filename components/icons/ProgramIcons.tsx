import type { ReactNode } from "react";

/**
 * Hand-coded duotone icon set for program category tiles (QuickProgramsGrid).
 * Each icon uses currentColor at two opacities (line art + solid accent) so a
 * single white `text-white` class on the tile produces the duotone effect
 * against any of the red/gold/near-black tile backgrounds.
 */
export type ProgramIconName =
  | "clapperboard"
  | "armchair"
  | "palette"
  | "bar-chart"
  | "megaphone"
  | "ruler"
  | "sparkle"
  | "database"
  | "boxes";

function IconBase({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      {children}
    </svg>
  );
}

export function ProgramIcon({ name, className }: { name: ProgramIconName; className?: string }) {
  switch (name) {
    case "clapperboard":
      return (
        <IconBase className={className}>
          <path
            d="M4 10.5h16V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.5Z"
            fill="currentColor"
            fillOpacity="0.35"
          />
          <path
            d="M3.5 6.8 4.6 4l3.3.7-1 2.6M9.9 5 11 2.2l3.3.7-1 2.7M16.2 6l1.1-2.8 3.2.9-.9 2.7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 10.5h16v-2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </IconBase>
      );
    case "armchair":
      return (
        <IconBase className={className}>
          <path
            d="M6 13v6.5h12V13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M5.5 10.5A2.5 2.5 0 0 1 8 8h8a2.5 2.5 0 0 1 2.5 2.5V14h-13v-3.5Z"
            fill="currentColor"
            fillOpacity="0.35"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 12.5A1.5 1.5 0 0 1 6 14v2.5H4v-3a1 1 0 0 1 .5-.5ZM19.5 12.5A1.5 1.5 0 0 0 18 14v2.5h2v-3a1 1 0 0 0-.5-.5Z"
            fill="currentColor"
          />
          <path d="M7 19.5V21M17 19.5V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </IconBase>
      );
    case "palette":
      return (
        <IconBase className={className}>
          <path
            d="M12 3a9 8 0 1 0 0 16c1.1 0 2-.7 2-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H16.5c1.9 0 3.5-1.5 3.5-3.4C20 6.2 16.4 3 12 3Z"
            fill="currentColor"
            fillOpacity="0.35"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="8.2" cy="9.5" r="1.2" fill="currentColor" />
          <circle cx="8.2" cy="14" r="1.2" fill="currentColor" />
          <circle cx="12.2" cy="7" r="1.2" fill="currentColor" />
          <circle cx="16" cy="9.2" r="1.2" fill="currentColor" />
        </IconBase>
      );
    case "bar-chart":
      return (
        <IconBase className={className}>
          <path d="M4 20V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M9 20V6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path d="M14 20V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M19 20V4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
          <rect x="2.3" y="10" width="3.4" height="10" rx="1" fill="currentColor" fillOpacity="0.35" />
          <rect x="7.3" y="6" width="3.4" height="14" rx="1" fill="currentColor" fillOpacity="0.2" />
          <rect x="12.3" y="13" width="3.4" height="7" rx="1" fill="currentColor" fillOpacity="0.35" />
          <rect x="17.3" y="4" width="3.4" height="16" rx="1" fill="currentColor" fillOpacity="0.2" />
        </IconBase>
      );
    case "megaphone":
      return (
        <IconBase className={className}>
          <path
            d="M3 10v4a1 1 0 0 0 1 1h2l1.5 4.5a1 1 0 0 0 1 .7H10l-1-5.2h1L19 19V5l-9 4H4a1 1 0 0 0-1 1Z"
            fill="currentColor"
            fillOpacity="0.35"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M21 9.5v5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </IconBase>
      );
    case "ruler":
      return (
        <IconBase className={className}>
          <path
            d="M3 16.5 7.5 21 21 7.5 16.5 3 3 16.5Z"
            fill="currentColor"
            fillOpacity="0.35"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="m7 13 1.7 1.7M9.5 10.5l1.7 1.7M12 8l1.7 1.7M14.5 5.5l1.7 1.7"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </IconBase>
      );
    case "sparkle":
      return (
        <IconBase className={className}>
          <path
            d="M12 2.5c.6 3.4 1.4 5.3 3 6.9 1.6 1.6 3.5 2.4 6.9 3-3.4.6-5.3 1.4-6.9 3-1.6 1.6-2.4 3.5-3 6.9-.6-3.4-1.4-5.3-3-6.9-1.6-1.6-3.5-2.4-6.9-3 3.4-.6 5.3-1.4 6.9-3 1.6-1.6 2.4-3.5 3-6.9Z"
            fill="currentColor"
            fillOpacity="0.35"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinejoin="round"
          />
          <path
            d="M19 2.5c.25 1.4.6 2.2 1.5 3 .9.8 1.7 1.15 3 1.5-1.3.35-2.1.7-3 1.5-.9.8-1.25 1.6-1.5 3-.25-1.4-.6-2.2-1.5-3-.9-.8-1.7-1.15-3-1.5 1.3-.35 2.1-.7 3-1.5.9-.8 1.25-1.6 1.5-3Z"
            fill="currentColor"
          />
        </IconBase>
      );
    case "database":
      return (
        <IconBase className={className}>
          <path
            d="M4 6c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3Z"
            fill="currentColor"
            fillOpacity="0.35"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </IconBase>
      );
    case "boxes":
      return (
        <IconBase className={className}>
          <path
            d="M12 3 5 6.5v6.9l7 3.4 7-3.4V6.5L12 3Z"
            fill="currentColor"
            fillOpacity="0.35"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M5 6.5 12 10l7-3.5M12 10v6.8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          <path
            d="M8.5 4.7 15.5 8.2"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            opacity="0.7"
          />
        </IconBase>
      );
  }
}
