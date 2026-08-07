"use client";

import { motion } from "framer-motion";
import { Award, Building2, Cpu, Users } from "lucide-react";
import { Container } from "@/components/shared/Container";

const STATS = [
  { icon: Users, value: "500+", label: "Students Trained" },
  { icon: Building2, value: "5", label: "University Partnerships" },
  { icon: Award, value: "Hands-on", label: "Learning Approach" },
  { icon: Cpu, value: "9+", label: "Industry Software Covered" },
];

export function TrustStats() {
  return (
    <section className="border-b border-border bg-white py-10">
      <Container>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex flex-col items-center gap-2 text-center"
            >
              <stat.icon className="size-6 text-orange" />
              <p className="font-heading text-2xl font-extrabold text-navy sm:text-3xl">{stat.value}</p>
              <p className="text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-[11px] text-muted-foreground/70">
          Figures shown are illustrative placeholders for demonstration purposes.
        </p>
      </Container>
    </section>
  );
}
