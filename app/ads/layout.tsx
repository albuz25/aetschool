import type { ReactNode } from "react";
import { Phone } from "lucide-react";

import { Logo } from "@/components/shared/Logo";
import { CONTACT } from "@/lib/constants";

export default function AdsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
          <Logo theme="onLight" />
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="inline-flex h-9 items-center gap-1.5 rounded-md bg-navy px-3 text-xs font-semibold tracking-wide text-white uppercase sm:text-sm"
            >
              <Phone className="size-4" />
              <span className="hidden sm:inline">{CONTACT.phoneDisplay}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(
                "Hi AET, I saw your Google ad and want course details."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 items-center rounded-md bg-[#25D366] px-3 text-xs font-semibold tracking-wide text-white uppercase sm:text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border bg-navy py-5 text-center text-xs text-white/60">
        <p>AET School of Design · {CONTACT.address}</p>
        <p className="mt-1">
          <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-white">
            {CONTACT.phoneDisplay}
          </a>
          {" · "}
          <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
            {CONTACT.email}
          </a>
        </p>
      </footer>
    </>
  );
}
