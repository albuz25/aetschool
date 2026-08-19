import type { Metadata } from "next";

import { HeroSection } from "@/components/home/HeroSection";
import { HomeCounselingSection } from "@/components/home/HomeCounselingSection";
import { ValuePropsStrip } from "@/components/home/ValuePropsStrip";
import { TrustStats } from "@/components/home/TrustStats";
import { QuickProgramsGrid } from "@/components/home/QuickProgramsGrid";
import { HiringPartners } from "@/components/home/HiringPartners";
import { UpcomingBatches } from "@/components/home/UpcomingBatches";
import { ProgramGrid } from "@/components/home/ProgramGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyAET } from "@/components/home/WhyAET";
import { GuidanceCTA } from "@/components/home/GuidanceCTA";
import { FAQSection } from "@/components/home/FAQSection";
import { DEFAULT_DESCRIPTION, DEFAULT_KEYWORDS, DEFAULT_TITLE, OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: DEFAULT_TITLE },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  alternates: { canonical: "/" },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    type: "website",
    images: [{ url: OG_IMAGE, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeCounselingSection />
      <ValuePropsStrip />
      <TrustStats />
      <QuickProgramsGrid />
      <HiringPartners />
      <UpcomingBatches />
      <ProgramGrid />
      <Testimonials />
      <WhyAET />
      <GuidanceCTA />
      <FAQSection />
    </>
  );
}
