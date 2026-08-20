import type { Program } from "@/lib/types";

export const LOCAL_SEO_SLUGS = [
  "data-science-ai-package",
  "data-analytics-package",
  "power-bi-package",
  "sql-package",
  "interior-design-3d-spatial-package",
] as const;

export type LocalSeoSlug = (typeof LOCAL_SEO_SLUGS)[number];

export function isLocalSeoSlug(slug: string): slug is LocalSeoSlug {
  return (LOCAL_SEO_SLUGS as readonly string[]).includes(slug);
}

export const localSeoMeta: Record<
  LocalSeoSlug,
  { title: string; description: string; keywords: string[] }
> = {
  "data-science-ai-package": {
    title: "Data Science Course in Noida",
    description:
      "6-month data science course in Noida at AET School of Design, Sector 2. Classroom training in Python, SQL, machine learning and deep learning for Delhi NCR students and working professionals.",
    keywords: [
      "data science course in Noida",
      "data science institute in Noida",
      "Python machine learning course Noida",
      "data science training Delhi NCR",
      "data science classes Sector 2 Noida",
      "AET School of Design Noida",
    ],
  },
  "data-analytics-package": {
    title: "Data Analytics Course in Noida",
    description:
      "Data analytics course in Noida covering Excel, SQL, Python, Tableau and Power BI. Classroom batches at AET Sector 2 for data analyst roles across Delhi NCR.",
    keywords: [
      "data analytics course in Noida",
      "data analyst course Noida",
      "Excel SQL Power BI course Noida",
      "business analytics training Noida",
      "data analytics institute Delhi NCR",
    ],
  },
  "power-bi-package": {
    title: "Power BI Course in Noida",
    description:
      "14-hour Power BI training in Noida at AET School of Design. Learn Power Query, DAX and dashboards in classroom batches at Sector 2.",
    keywords: [
      "Power BI course in Noida",
      "Power BI training institute Noida",
      "Power BI DAX course Noida",
      "Microsoft Power BI classes Delhi NCR",
    ],
  },
  "sql-package": {
    title: "SQL Course in Noida",
    description:
      "1-month SQL training in Noida: joins, window functions and reporting queries, plus a MongoDB intro. Classroom course at AET Sector 2.",
    keywords: [
      "SQL course in Noida",
      "SQL training Noida",
      "SQL Server classes Noida",
      "database course Delhi NCR",
    ],
  },
  "interior-design-3d-spatial-package": {
    title: "Architecture Design Course in Noida",
    description:
      "Architecture design course in Noida covering AutoCAD, Revit, SketchUp, 3ds Max and V-Ray. 4-month classroom training at AET Sector 2 for CAD and BIM roles.",
    keywords: [
      "architecture design course in Noida",
      "AutoCAD Revit course Noida",
      "3ds Max SketchUp training Noida",
      "BIM course Noida",
      "CAD training institute Noida",
    ],
  },
};

export function courseJsonLd(program: Program) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.seoH1 ?? program.title,
    description: program.overview,
    provider: {
      "@type": "EducationalOrganization",
      name: "AET School of Design",
      address: {
        "@type": "PostalAddress",
        streetAddress: "B-134, Lower Ground Floor, Sector 2",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201301",
        addressCountry: "IN",
      },
    },
    timeRequired: program.duration,
    occupationalCredentialAwarded: program.certificationBody,
    teaches: program.softwareTools.map((tool) => tool.name),
  };
}

export function faqJsonLd(program: Program) {
  if (!program.faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: program.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
