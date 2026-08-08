import { MessageCircle, Phone } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";

export function GuidanceCTA() {
  return (
    <section className="bg-gradient-to-r from-navy via-navy to-blue py-12">
      <Container className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
            Get Expert Guidance — Call or WhatsApp Us Today
          </h2>
          <p className="mt-2 text-sm text-white/70 sm:text-base">
            Our counselors are ready to help you choose the right program and answer every question.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button
            size="lg"
            className="bg-orange text-white hover:bg-orange-light"
            nativeButton={false}
            render={<a href={`tel:${CONTACT.phoneTel}`} />}
          >
            <Phone className="size-4" />
            Call {CONTACT.phoneDisplay}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            nativeButton={false}
            render={
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
                  "Hi AET, I'd like to know more about your programs."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <MessageCircle className="size-4" />
            WhatsApp Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
