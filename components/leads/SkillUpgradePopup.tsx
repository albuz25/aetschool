"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { Loader2, Send, TrendingUp, X } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trackGoogleAdsConversion } from "@/lib/googleAds";
import { useLeadModalStore } from "@/store/useLeadModalStore";
import { useSkillPopupStore } from "@/store/useSkillPopupStore";

const POPUP_DELAY_MS = 8000;
const SESSION_KEY = "aet-skill-popup-seen";

// Same Indian mobile number rule used by the main inquiry form.
const phoneRegex = /^(?:\+91[-\s]?|0)?[6-9]\d{9}$/;

const quickPopupSchema = z.object({
  name: z.string().trim().min(2, { message: "Please enter your name." }).max(80),
  phone: z
    .string()
    .trim()
    .regex(phoneRegex, { message: "Please enter a valid 10-digit mobile number." }),
});

type QuickPopupValues = z.infer<typeof quickPopupSchema>;

export function SkillUpgradePopup() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isOpen = useSkillPopupStore((state) => state.isOpen);
  const setOpen = useSkillPopupStore((state) => state.setOpen);
  const isLeadModalOpen = useLeadModalStore((state) => state.isOpen);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuickPopupValues>({
    resolver: zodResolver(quickPopupSchema),
    defaultValues: { name: "", phone: "" },
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;

    const timer = window.setTimeout(() => {
      if (!useLeadModalStore.getState().isOpen) {
        setOpen(true);
      }
    }, POPUP_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [setOpen]);

  function dismiss() {
    setOpen(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  }

  async function onSubmit(values: QuickPopupValues) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          email: "",
          programInterest: "general-inquiry",
          city: "Not specified",
          source: "skill-upgrade-popup",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      trackGoogleAdsConversion();
      toast.success("Thanks! Our counseling team will reach out shortly.");
      reset();
      dismiss();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isLeadModalOpen) return null;

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ y: 140, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 140, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-x-4 bottom-20 z-50 sm:inset-x-auto sm:bottom-6 sm:left-6"
          role="dialog"
          aria-label="Want to upgrade your skills?"
        >
          <div className="relative mx-auto w-full max-w-sm rounded-2xl border border-border bg-white p-5 shadow-2xl sm:mx-0">
            <button
              type="button"
              onClick={dismiss}
              aria-label="Close"
              className="absolute top-3 right-3 flex size-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-navy"
            >
              <X className="size-4" />
            </button>

            <div className="flex items-start gap-3 pr-6">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-orange text-white">
                <TrendingUp className="size-5" />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-navy">
                  Want to upgrade your skills?
                </h3>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Share your name & number — our counselor will call you back.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-2.5" noValidate>
              <div>
                <Label htmlFor="skill-popup-name" className="sr-only">
                  Full Name
                </Label>
                <Input id="skill-popup-name" placeholder="Your full name" {...register("name")} />
                {errors.name ? (
                  <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                ) : null}
              </div>
              <div>
                <Label htmlFor="skill-popup-phone" className="sr-only">
                  Mobile Number
                </Label>
                <Input
                  id="skill-popup-phone"
                  placeholder="10-digit mobile number"
                  inputMode="numeric"
                  {...register("phone")}
                />
                {errors.phone ? (
                  <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>
                ) : null}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange text-white hover:bg-orange-light"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Notify Me
                    <Send className="size-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
