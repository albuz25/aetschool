import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LeadCaptureModal } from "@/components/leads/LeadCaptureModal";
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
  title: "AET School of Design | Authorized Autodesk Training Centre",
  description:
    "AET School of Design offers university-partnered B.Voc degrees and industry-aligned software skill packages in Animation, Interior Design, Data Science, Digital Marketing and more. Learn on official Autodesk software as an Authorized Autodesk Training Centre.",
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
        <FloatingContactBar />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
