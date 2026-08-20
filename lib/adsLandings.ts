import type { Program } from "@/lib/types";
import { getProgramBySlug } from "@/data/courses";

export interface AdsLandingCopy {
  slug: string;
  programSlug: string;
  headline: string;
  subhead: string;
  bullets: string[];
  source: string;
  testimonialPrograms: string[];
}

export const adsLandings: AdsLandingCopy[] = [
  {
    slug: "data-science",
    programSlug: "data-science-ai-package",
    headline: "Data Science Course in Noida — Python, SQL, ML & Deep Learning",
    subhead:
      "6-month job-ready package at AET School of Design. Live projects, counselor callback, EMI available.",
    bullets: [
      "6 months: Python to machine learning and deep learning",
      "SQL, MongoDB, statistics, Scikit-learn and TensorFlow",
      "Classroom case studies plus a capstone project",
      "Noida campus · Certificate of Completion · EMI available",
    ],
    source: "google-ads-data-science",
    testimonialPrograms: ["Data Science & AI Package", "B.Voc Digital Marketing"],
  },
  {
    slug: "data-analytics",
    programSlug: "data-analytics-package",
    headline: "Data Analytics Course in Noida — Excel, SQL, Tableau & Power BI",
    subhead:
      "5-month business analytics package. Turn data into dashboards and decisions. Free counseling this week.",
    bullets: [
      "5 months: Python, Excel, SQL, statistics and BI tools",
      "Tableau (14 hrs) + Power BI (14 hrs) in the same program",
      "Hackathon sprint with executive reporting practice",
      "Noida campus · Certificate of Completion · EMI available",
    ],
    source: "google-ads-data-analytics",
    testimonialPrograms: ["Data Science & AI Package", "B.Voc Digital Marketing"],
  },
  {
    slug: "architecture-design",
    programSlug: "interior-design-3d-spatial-package",
    headline: "Architecture Design Course in Noida — AutoCAD, SketchUp, Revit & V-Ray",
    subhead:
      "4-month visualization package for architects and interior designers. Portfolio-ready 3D skills.",
    bullets: [
      "4 months: AutoCAD, SketchUp, 3ds Max, V-Ray and Revit",
      "Full 2D-to-3D visualization pipeline",
      "Photorealistic rendering and portfolio project",
      "Noida campus · Certificate of Completion · EMI available",
    ],
    source: "google-ads-architecture-design",
    testimonialPrograms: ["Autodesk Revit & CAD Package", "B.Voc Interior Design"],
  },
];

export function getAdsLanding(slug: string) {
  return adsLandings.find((landing) => landing.slug === slug);
}

export function getAdsLandingProgram(slug: string): Program | undefined {
  const landing = getAdsLanding(slug);
  if (!landing) return undefined;
  return getProgramBySlug(landing.programSlug);
}
