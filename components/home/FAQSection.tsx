import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { generalFaqs } from "@/data/courses";
import type { ProgramFAQ } from "@/lib/types";

export function FAQSection({
  extraFaqs,
  className,
}: {
  extraFaqs?: ProgramFAQ[];
  className?: string;
}) {
  const faqs = [...generalFaqs, ...(extraFaqs ?? [])];

  return (
    <section className={className ?? "bg-offwhite py-16 sm:py-20"}>
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQs" title="Let's Clear Up Some Doubts" />
        <Accordion className="mt-10 rounded-2xl border border-border bg-white px-6">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-base">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
