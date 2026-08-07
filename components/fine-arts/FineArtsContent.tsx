"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Download, Palette, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/shared/Container";
import { useLeadModalStore } from "@/store/useLeadModalStore";

const pathways = [
  {
    title: "B.Voc in Fine Arts",
    badge: "University Degree",
    description:
      "A comprehensive degree that combines drawing, painting, sculpture and digital illustration for a professional creative career.",
    details: ["3 years · 6 semesters", "10+2 eligibility", "Portfolio development"],
    href: "/programs/bvoc-fine-arts",
    brochure: "/brochures/bvoc-fine-arts.pdf",
  },
  {
    title: "Diploma in Fine Arts",
    badge: "Diploma Program",
    description:
      "A focused, practical route for aspiring artists to build core fine-art skills and a portfolio for further study or creative work.",
    details: ["Practical studio learning", "Drawing, painting & composition", "Portfolio guidance"],
  },
];

export function FineArtsContent() {
  const openModal = useLeadModalStore((state) => state.open);

  return (
    <div className="bg-offwhite pb-16">
      <section className="relative overflow-hidden bg-navy">
        <Image
          src="/images/programs/fine-arts.svg"
          alt=""
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
        <Container className="relative py-16 sm:py-24">
          <Badge className="border-none bg-orange text-white">Fine Arts at AET</Badge>
          <h1 className="mt-5 max-w-2xl font-heading text-4xl font-extrabold text-white sm:text-5xl">
            Create your path in Fine Arts.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
            Choose a degree or diploma pathway that builds your creative foundation, practical skills and
            portfolio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              className="bg-orange text-white hover:bg-orange-light"
              onClick={() => openModal({ source: "fine-arts-hero", programTitle: "Fine Arts" })}
            >
              Talk to a Counselor
              <ArrowRight className="size-4" />
            </Button>
            <Button
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              nativeButton={false}
              render={<a href="/brochures/bvoc-fine-arts.pdf" download />}
            >
              <Download className="size-4" />
              Download B.Voc Brochure
            </Button>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-orange uppercase">Choose your pathway</p>
          <h2 className="mt-2 font-heading text-3xl font-extrabold text-navy">
            Two ways to begin your creative journey
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {pathways.map((pathway) => (
            <article
              key={pathway.title}
              className="flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-11 items-center justify-center rounded-xl bg-orange/10 text-orange">
                  {pathway.href ? <BookOpen className="size-5" /> : <Palette className="size-5" />}
                </span>
                <Badge className="border-none bg-navy/5 text-navy">{pathway.badge}</Badge>
              </div>
              <h3 className="mt-5 font-heading text-2xl font-bold text-navy">{pathway.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pathway.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-navy/85">
                {pathway.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <Sparkles className="size-4 shrink-0 text-orange" />
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                {pathway.href ? (
                  <>
                    <Button
                      className="bg-navy text-white hover:bg-navy/90"
                      nativeButton={false}
                      render={<Link href={pathway.href} />}
                    >
                      Explore B.Voc Program
                      <ArrowRight className="size-4" />
                    </Button>
                    <Button
                      variant="outline"
                      nativeButton={false}
                      render={<a href={pathway.brochure} download />}
                    >
                      <Download className="size-4" />
                      Brochure
                    </Button>
                  </>
                ) : (
                  <Button
                    className="bg-orange text-white hover:bg-orange-light"
                    onClick={() =>
                      openModal({
                        source: "fine-arts-diploma",
                        programTitle: pathway.title,
                        programInterest: "diploma-fine-arts",
                        heading: "Get Diploma in Fine Arts Details",
                        subheading: "Share your details and our counselor will send the diploma brochure and batch information.",
                      })
                    }
                  >
                    Get Diploma Details
                    <ArrowRight className="size-4" />
                  </Button>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
