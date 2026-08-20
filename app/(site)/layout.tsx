import type { ReactNode } from "react";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadCaptureModal } from "@/components/leads/LeadCaptureModal";
import { SkillUpgradePopup } from "@/components/leads/SkillUpgradePopup";
import { FloatingContactBar } from "@/components/shared/FloatingContactBar";

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <LeadCaptureModal />
      <SkillUpgradePopup />
      <FloatingContactBar />
    </>
  );
}
