"use client";

import { Mail, Phone } from "lucide-react";
import { useLeadModalStore } from "@/store/useLeadModalStore";
import { useSkillPopupStore } from "@/store/useSkillPopupStore";
import { CONTACT } from "@/lib/constants";

export function FloatingContactBar() {
  const isModalOpen = useLeadModalStore((state) => state.isOpen);
  const isPopupOpen = useSkillPopupStore((state) => state.isOpen);

  if (isModalOpen || isPopupOpen) return null;

  return (
    <div className="fixed right-4 bottom-20 z-40 flex flex-col items-end gap-3 sm:right-6 lg:bottom-6">
      <a
        href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
          "Hi AET, I'd like to know more about your programs."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <WhatsAppIcon className="size-6" />
      </a>
      <a
        href={`tel:${CONTACT.phoneTel}`}
        aria-label="Call AET admissions"
        className="flex size-12 items-center justify-center rounded-full bg-blue text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <Phone className="size-5" />
      </a>
      <a
        href={`mailto:${CONTACT.email}`}
        aria-label="Email AET admissions"
        className="flex size-12 items-center justify-center rounded-full bg-orange text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <Mail className="size-5" />
      </a>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.436.717 4.7 1.955 6.605L4.5 28.5l7.083-1.86A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7a9.66 9.66 0 0 1-4.93-1.352l-.354-.21-4.204 1.104 1.123-4.1-.23-.421A9.65 9.65 0 0 1 6.3 15c0-5.352 4.352-9.7 9.704-9.7 5.352 0 9.7 4.348 9.7 9.7 0 5.352-4.348 9.7-9.7 9.7Zm5.316-7.264c-.29-.146-1.716-.847-1.982-.943-.266-.097-.46-.146-.653.146-.194.29-.75.943-.92 1.137-.17.194-.34.218-.63.073-.29-.146-1.223-.451-2.33-1.437-.862-.768-1.444-1.717-1.613-2.007-.169-.29-.018-.447.127-.592.13-.13.29-.34.435-.51.145-.17.194-.29.29-.484.097-.194.049-.363-.024-.51-.073-.145-.653-1.575-.896-2.157-.236-.567-.476-.49-.653-.499l-.556-.01c-.194 0-.51.073-.777.363-.266.29-1.017.994-1.017 2.424s1.041 2.812 1.187 3.006c.145.194 2.05 3.13 4.966 4.389.694.3 1.235.479 1.657.613.696.221 1.33.19 1.831.115.559-.083 1.716-.702 1.958-1.38.242-.678.242-1.259.169-1.38-.073-.121-.266-.194-.556-.34Z" />
    </svg>
  );
}
