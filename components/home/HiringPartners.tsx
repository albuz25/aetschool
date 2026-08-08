"use client";

import { motion } from "framer-motion";
import { Building2, Star, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { hiringPartners } from "@/data/hiringPartners";

export function HiringPartners() {
  return (
    <section className="bg-navy py-12 text-white sm:py-14">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-xs font-semibold tracking-wide text-orange uppercase">Placement Network</p>
            <h2 className="mt-1 font-heading text-xl font-bold sm:text-2xl">
              Where Our Graduates Build Their Careers
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <Stat icon={Users} value="500+" label="Students Placed" />
            <Stat icon={Building2} value="50+" label="Hiring Partners" />
            <Stat icon={Star} value="4.8★" label="Google Rating" />
          </div>
        </div>

        <div
          className="mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          aria-hidden={false}
        >
          <motion.div
            className="flex w-max items-center gap-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
          >
            {[...hiringPartners, ...hiringPartners].map((name, index) => (
              <span
                key={`${name}-${index}`}
                className="shrink-0 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium whitespace-nowrap text-white/80"
              >
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ icon: Icon, value, label }: { icon: LucideIcon; value: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
        <Icon className="size-4" />
      </span>
      <div className="text-left">
        <p className="font-heading text-sm font-bold leading-tight">{value}</p>
        <p className="text-[11px] leading-tight text-white/60">{label}</p>
      </div>
    </div>
  );
}
