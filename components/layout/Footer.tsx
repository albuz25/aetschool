import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { footerLinks } from "@/data/navigation";
import { CONTACT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-lg bg-orange font-heading text-lg font-bold text-white">
              AET
            </span>
            <span className="font-heading text-base font-bold text-white">AET School of Design</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            University-partnered B.Voc degrees and industry-aligned software skill packages for creative and
            technology careers.
          </p>
        </div>

        <FooterColumn
          heading="University Degrees"
          links={footerLinks.programs.map((p) => ({ title: p.title, href: `/programs/${p.slug}` }))}
        />
        <FooterColumn
          heading="Software Packages"
          links={footerLinks.packages.map((p) => ({ title: p.title, href: `/programs/${p.slug}` }))}
        />
        <FooterColumn
          heading="Company"
          links={footerLinks.company.map((l) => ({ title: l.title, href: l.href }))}
        />

        <div>
          <p className="mb-3 text-sm font-semibold text-white">Get in Touch</p>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" />
              <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-white">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} AET School of Design. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link) => (
              <Link key={link.title} href={link.href} className="hover:text-white/80">
                {link.title}
              </Link>
            ))}
          </div>
        </Container>
        <Container className="pb-6 text-[11px] leading-relaxed text-white/40">
          Disclaimer: Program names, durations, fees and university partnerships referenced on this site are
          illustrative placeholders for demonstration purposes. Software product names are trademarks of their
          respective owners.
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  heading,
  links,
}: {
  heading: string;
  links: { title: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-semibold text-white">{heading}</p>
      <ul className="space-y-2.5 text-sm text-white/60">
        {links.map((link) => (
          <li key={link.href + link.title}>
            <Link href={link.href} className="hover:text-white">
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
