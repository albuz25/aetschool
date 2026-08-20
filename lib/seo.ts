import type { Metadata } from "next";

import { CONTACT } from "@/lib/constants";

export const SITE_URL = "https://aetschoolofdesign.com";
export const SITE_NAME = "AET School of Design";
export const OG_IMAGE = "/images/site/aet-logo.jpeg";

export const DEFAULT_TITLE = "AET School of Design | Design, Technology & Gen AI Programs";
export const DEFAULT_DESCRIPTION =
  "AET School of Design offers university-partnered B.Voc degrees and industry-aligned software skill packages in Animation, Interior Design, Data Science, Digital Marketing and more.";

export const DEFAULT_KEYWORDS = [
  "AET School of Design",
  "AET Noida",
  "design school Noida",
  "B.Voc Noida",
  "admissions Noida",
  "Animation and VFX course",
  "Interior Design course",
  "Fine Arts course",
  "Digital Marketing course",
  "Data Science course",
  "Gen AI course",
  "CAD Revit training",
  "university partnered degree",
  "software skill packages",
  "Data Science course in Noida",
  "data science institute Noida",
  "data analytics course in Noida",
  "Power BI course in Noida",
  "SQL course in Noida",
  "architecture design course in Noida",
  "AutoCAD Revit course Noida",
  "CAD training Sector 2 Noida",
  "software training Delhi NCR",
];

export function pageUrl(path: string) {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path}`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = DEFAULT_KEYWORDS,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = pageUrl(path);
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [{ url: OG_IMAGE, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: pageUrl(OG_IMAGE),
    email: CONTACT.email,
    telephone: CONTACT.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: "B-134, Lower Ground Floor, Sector 2",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN",
    },
    areaServed: ["Noida", "Greater Noida", "Delhi NCR", "Ghaziabad"],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.585,
      longitude: 77.311,
    },
  };
}
