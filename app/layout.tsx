import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadCaptureModal } from "@/components/leads/LeadCaptureModal";
import { SkillUpgradePopup } from "@/components/leads/SkillUpgradePopup";
import { FloatingContactBar } from "@/components/shared/FloatingContactBar";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AET School of Design | Design, Technology & Gen AI Programs",
  description:
    "AET School of Design offers university-partnered B.Voc degrees and industry-aligned software skill packages in Animation, Interior Design, Data Science, Digital Marketing and more.",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <LeadCaptureModal />
        <SkillUpgradePopup />
        <FloatingContactBar />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
