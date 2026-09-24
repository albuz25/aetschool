import { courses } from "@/data/courses";

export interface NavLink {
  label: string;
  href: string;
}

export const mainNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const dataCourses = courses.filter((program) =>
  [
    "data-science-ai-package",
    "data-analytics-package",
    "power-bi-package",
    "sql-package",
    "gen-ai-creative-tech-package",
  ].includes(program.slug)
);

const designCourses = courses.filter((program) =>
  ["autodesk-revit-cad-package", "interior-design-3d-spatial-package"].includes(program.slug)
);

export const megaMenuColumns = [
  {
    heading: "Data & AI Courses",
    description: "Analytics, SQL, Power BI and generative AI",
    items: dataCourses.map((program) => ({
      title: program.shortTitle,
      slug: program.slug,
      duration: program.duration,
    })),
    viewAllHref: "/programs",
  },
  {
    heading: "Design Courses",
    description: "CAD, BIM and architecture visualization",
    items: designCourses.map((program) => ({
      title: program.shortTitle,
      slug: program.slug,
      duration: program.duration,
    })),
    viewAllHref: "/programs",
  },
];

export const footerLinks = {
  courses: courses.map((p) => ({ title: p.shortTitle, slug: p.slug })),
  company: [
    { title: "About AET", href: "/about" },
    { title: "Contact Us", href: "/contact" },
  ],
  legal: [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms & Conditions", href: "#" },
  ],
};
