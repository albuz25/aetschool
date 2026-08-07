"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, GraduationCap, Menu, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Container } from "@/components/shared/Container";
import { mainNavLinks, megaMenuColumns } from "@/data/navigation";
import { useLeadModalStore } from "@/store/useLeadModalStore";
import { cn } from "@/lib/utils";

export function Header() {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const openModal = useLeadModalStore((state) => state.open);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/site/aet-logo.jpeg"
            alt="AET School of Design"
            width={160}
            height={48}
            priority
            className="h-10 w-auto object-contain lg:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setIsProgramsOpen(true)}
            onMouseLeave={() => setIsProgramsOpen(false)}
          >
            <button
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-navy transition-colors hover:bg-muted"
              aria-expanded={isProgramsOpen}
            >
              Programs
              <ChevronDown className={cn("size-4 transition-transform", isProgramsOpen && "rotate-180")} />
            </button>

            {isProgramsOpen ? (
              <div className="absolute top-full left-1/2 w-[640px] -translate-x-1/2 pt-3">
                <div className="grid grid-cols-2 gap-6 rounded-2xl border border-border bg-popover p-6 shadow-xl">
                  {megaMenuColumns.map((column) => (
                    <div key={column.heading}>
                      <div className="mb-3 flex items-center gap-2">
                        {column.heading.includes("Degree") ? (
                          <GraduationCap className="size-4 text-orange" />
                        ) : (
                          <Wrench className="size-4 text-blue" />
                        )}
                        <p className="text-sm font-semibold text-navy">{column.heading}</p>
                      </div>
                      <ul className="space-y-1">
                        {column.items.map((item) => (
                          <li key={item.slug}>
                            <Link
                              href={`/programs/${item.slug}`}
                              className="flex items-center justify-between rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-navy"
                            >
                              <span>{item.title}</span>
                              <span className="text-xs text-muted-foreground/70">{item.duration}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={column.viewAllHref}
                        className="mt-2 inline-block text-xs font-semibold text-orange hover:underline"
                      >
                        View All →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {mainNavLinks
            .filter((link) => link.label !== "Programs" && link.label !== "Home")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-navy transition-colors hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            className="hidden bg-orange text-white hover:bg-orange-light sm:inline-flex"
            onClick={() => openModal({ source: "header" })}
          >
            Enquire Now
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </Button>
        </div>
      </Container>

      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetContent side="right" className="w-[85vw] sm:max-w-sm">
          <SheetHeader>
            <SheetTitle>AET School of Design</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-1 overflow-y-auto px-4 pb-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-navy hover:bg-muted"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-2 border-t border-border pt-3">
              {megaMenuColumns.map((column) => (
                <div key={column.heading} className="mb-4">
                  <p className="mb-2 px-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {column.heading}
                  </p>
                  {column.items.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/programs/${item.slug}`}
                      onClick={() => setIsMobileOpen(false)}
                      className="block rounded-md px-3 py-2 text-sm text-navy hover:bg-muted"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            <Button
              className="mt-2 bg-orange text-white hover:bg-orange-light"
              onClick={() => {
                setIsMobileOpen(false);
                openModal({ source: "mobile-header" });
              }}
            >
              Enquire Now
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
