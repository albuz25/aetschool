"use client";

import { Mail, MessageCircle, Phone, Sparkles } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { useLeadModalStore } from "@/store/useLeadModalStore";
import { CONTACT } from "@/lib/constants";

export function TopBar() {
  const openModal = useLeadModalStore((state) => state.open);

  return (
    <div className="hidden bg-navy text-white/90 lg:block">
      <Container className="flex h-9 items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <a href={`tel:${CONTACT.phoneTel}`} className="flex items-center gap-1.5 transition-colors hover:text-white">
            <Phone className="size-3.5" />
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <MessageCircle className="size-3.5" />
            WhatsApp Us
          </a>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 transition-colors hover:text-white">
            <Mail className="size-3.5" />
            {CONTACT.email}
          </a>
        </div>
        <button
          type="button"
          onClick={() =>
            openModal({
              source: "demo-class",
              heading: "Book Your Free Demo Class",
              subheading: "Pick a program and our counselor will schedule your free demo session.",
            })
          }
          className="flex items-center gap-1.5 font-semibold text-orange transition-colors hover:text-orange-light"
        >
          <Sparkles className="size-3.5" />
          Book Free Demo Class
        </button>
      </Container>
    </div>
  );
}
