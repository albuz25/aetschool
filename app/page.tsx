import { HeroSection } from "@/components/home/HeroSection";
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

export default function Home() {
  return (
    <>
      <HeroSection />
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
