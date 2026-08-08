/**
 * Maps a program's `iconLabel` (see data/courses.ts) to a real software logo
 * file in public/images/software/. Tools without an entry here fall back to
 * a generic icon in the UI.
 */
export const softwareLogos: Record<string, string> = {
  maya: "/images/software/maya.png",
  "3dsmax": "/images/software/3dsmax.png",
  aftereffects: "/images/software/aftereffects.png",
  nuke: "/images/software/nuke.jpg",
  photoshop: "/images/software/photoshop.png",
  illustrator: "/images/software/illustrator.png",
  autocad: "/images/software/autocad.webp",
  sketchup: "/images/software/sketchup.png",
  revit: "/images/software/revit.png",
  vray: "/images/software/vray.png",
  procreate: "/images/software/procreate.png",
  python: "/images/software/python.webp",
  sql: "/images/software/sql.png",
  powerbi: "/images/software/powerbi.png",
  tableau: "/images/software/tableau.png",
  googleads: "/images/software/googleads.webp",
  analytics: "/images/software/analytics.png",
  meta: "/images/software/meta.png",
  semrush: "/images/software/semrush.png",
};

export function getSoftwareLogo(iconLabel: string): string | undefined {
  return softwareLogos[iconLabel];
}
