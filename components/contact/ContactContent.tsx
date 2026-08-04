"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { InquiryForm } from "@/components/leads/InquiryForm";
import { CONTACT } from "@/lib/constants";

const CONTACT_DETAILS = [
  { icon: Phone, label: "Call Us", value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phoneTel}` },
  {
    icon: MessageCircle,
    label: "WhatsApp Us",
    value: CONTACT.whatsappDisplay,
    href: `https://wa.me/${CONTACT.whatsappNumber}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  { icon: MapPin, label: "Visit Us", value: CONTACT.address },
  { icon: Clock, label: "Office Hours", value: "Mon – Sat, 10:00 AM – 6:30 PM" },
];

export function ContactContent() {
  return (
    <div className="bg-offwhite py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Contact Us"
          title="We'd Love to Hear From You"
          description="Have a question about admissions, fees or programs? Reach out and our counseling team will get back to you within 24 hours."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-6 lg:col-span-2"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {CONTACT_DETAILS.map((detail) => (
                <div key={detail.label} className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
                    <detail.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a href={detail.href} className="mt-1 block text-sm font-medium text-navy hover:text-orange">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-navy">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="AET School of Design campus location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`}
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-8 lg:col-span-3"
          >
            <h3 className="font-heading text-lg font-bold text-navy">Send Us an Enquiry</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill in your details and our admissions team will reach out with the information you need.
            </p>
            <div className="mt-6">
              <InquiryForm source="contact-page" submitLabel="Submit Enquiry" />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
