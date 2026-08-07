import { HeroSection } from "@/components/home/HeroSection";
import { TrustStats } from "@/components/home/TrustStats";
import { HiringPartners } from "@/components/home/HiringPartners";
import { ProgramGrid } from "@/components/home/ProgramGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { WhyAET } from "@/components/home/WhyAET";
import { FAQSection } from "@/components/home/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustStats />
      <HiringPartners />
      <ProgramGrid />
      <Testimonials />
      <WhyAET />
      <FAQSection />
    </>
  );
}
