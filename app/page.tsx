import { HeroSection } from "@/components/home/HeroSection";
import { TrustStats } from "@/components/home/TrustStats";
import { ProgramGrid } from "@/components/home/ProgramGrid";
import { AutodeskHighlight } from "@/components/home/AutodeskHighlight";
import { WhyAET } from "@/components/home/WhyAET";
import { FAQSection } from "@/components/home/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStats />
      <ProgramGrid />
      <AutodeskHighlight />
      <WhyAET />
      <FAQSection />
    </>
  );
}
