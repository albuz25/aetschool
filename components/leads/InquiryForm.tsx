"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

import { leadFormSchema, type LeadFormValues } from "@/lib/validations/lead";
import { allPrograms } from "@/data/courses";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface InquiryFormProps {
  source: string;
  programSlug?: string;
  initialProgramInterest?: string;
  compact?: boolean;
  onSuccess?: () => void;
  submitLabel?: string;
  className?: string;
}

export function InquiryForm({
  source,
  programSlug,
  initialProgramInterest,
  compact = false,
  onSuccess,
  submitLabel = "Unlock Brochure & Fee Details",
  className,
}: InquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      programInterest: programSlug ?? initialProgramInterest ?? "",
      city: "",
      source,
    },
  });

  const programInterest = watch("programInterest");

  async function onSubmit(values: LeadFormValues) {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }

      toast.success("Thanks! Our counseling team will reach out shortly.", {
        description: "Check your email for the brochure and program details.",
      });
      reset({
        name: "",
        email: "",
        phone: "",
        programInterest: programSlug ?? initialProgramInterest ?? "",
        city: "",
        source,
      });
      onSuccess?.();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-4", className)} noValidate>
      <div className={cn("grid gap-4", compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2")}>
        <div className="space-y-1.5">
          <Label htmlFor={`${source}-name`}>Full Name</Label>
          <Input id={`${source}-name`} placeholder="Your full name" {...register("name")} />
          {errors.name ? <FieldError message={errors.name.message} /> : null}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor={`${source}-phone`}>Mobile Number</Label>
          <Input
            id={`${source}-phone`}
            placeholder="10-digit mobile number"
            inputMode="numeric"
            {...register("phone")}
          />
          {errors.phone ? <FieldError message={errors.phone.message} /> : null}
        </div>
      </div>

      <div className="space-y-1.5">
          <Label htmlFor={`${source}-email`}>Email Address (optional)</Label>
        <Input id={`${source}-email`} type="email" placeholder="you@example.com" {...register("email")} />
        {errors.email ? <FieldError message={errors.email.message} /> : null}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor={`${source}-program`}>Program Interest</Label>
        <Select
          value={programInterest}
          onValueChange={(value) =>
            setValue("programInterest", value ?? "", { shouldValidate: true })
          }
        >
          <SelectTrigger id={`${source}-program`} className="w-full">
            <SelectValue placeholder="Select a program" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="diploma-fine-arts">Diploma in Fine Arts</SelectItem>
            {allPrograms.map((program) => (
              <SelectItem key={program.slug} value={program.slug}>
                {program.shortTitle}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.programInterest ? <FieldError message={errors.programInterest.message} /> : null}
      </div>

      <div className="space-y-1.5">
        <div className="space-y-1.5">
          <Label htmlFor={`${source}-city`}>City</Label>
          <Input id={`${source}-city`} placeholder="Your city" {...register("city")} />
          {errors.city ? <FieldError message={errors.city.message} /> : null}
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-orange text-white hover:bg-orange-light" size="lg">
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            {submitLabel}
            <Send className="size-4" />
          </>
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        By submitting, you agree to be contacted by AET School of Design regarding admissions.
      </p>
    </form>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-xs text-destructive">{message}</p>;
}
