import { bvocPrograms, softwarePackages } from "@/data/courses";

export interface NavLink {
  label: string;
  href: string;
}

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Fine Arts", href: "/fine-arts" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const megaMenuColumns = [
  {
    heading: "University Degrees (B.Voc)",
    description: "3-year degrees awarded with our university partner",
    items: bvocPrograms.map((program) => ({
      title: program.shortTitle,
      slug: program.slug,
      duration: program.duration,
    })),
    viewAllHref: "/programs?type=bvoc",
  },
  {
    heading: "Software Packages & Certifications",
    description: "Short-term, job-focused skill packages",
    items: softwarePackages.map((program) => ({
      title: program.shortTitle,
      slug: program.slug,
      duration: program.duration,
    })),
    viewAllHref: "/programs?type=package",
  },
];

export const footerLinks = {
  programs: bvocPrograms.map((p) => ({ title: p.shortTitle, slug: p.slug })),
  packages: softwarePackages.map((p) => ({ title: p.shortTitle, slug: p.slug })),
  company: [
    { title: "About AET", href: "/about" },
    { title: "Fine Arts Programs", href: "/fine-arts" },
    { title: "Contact Us", href: "/contact" },
  ],
  legal: [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms & Conditions", href: "#" },
  ],
};
