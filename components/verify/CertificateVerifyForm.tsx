"use client";

import { useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Calendar, Loader2, Search, SearchX, ShieldCheck, ShieldX } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { certIdSchema, type CertificateLookupResult, type CertificateRecord } from "@/lib/validations/certificate";

const formSchema = z.object({
  certId: certIdSchema,
});

type FormValues = z.infer<typeof formSchema>;

type VerifyStatus = "idle" | "loading" | "valid" | "revoked" | "not_found" | "error";

function formatDate(value: string) {
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

function statusFromResult(result: CertificateLookupResult | null): VerifyStatus {
  if (!result) return "idle";
  if (result.success) return result.certificate.status === "revoked" ? "revoked" : "valid";
  if (result.status === 404) return "not_found";
  return "error";
}

export function CertificateVerifyForm({
  initialId = "",
  initialResult = null,
}: {
  initialId?: string;
  initialResult?: CertificateLookupResult | null;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<VerifyStatus>(() =>
    initialId ? statusFromResult(initialResult) : "idle"
  );
  const [certificate, setCertificate] = useState<CertificateRecord | null>(() =>
    initialResult?.success ? initialResult.certificate : null
  );
  const [errorMessage, setErrorMessage] = useState(() =>
    initialResult && !initialResult.success ? initialResult.error : ""
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { certId: initialId },
  });

  async function onSubmit(values: FormValues) {
    setStatus("loading");
    setCertificate(null);
    setErrorMessage("");
    router.replace(`/verify?id=${encodeURIComponent(values.certId)}`, { scroll: false });

    try {
      const res = await fetch(`/api/certificates/verify?id=${encodeURIComponent(values.certId)}`);
      const data = await res.json();

      if (res.status === 404) {
        setStatus("not_found");
        return;
      }

      if (!res.ok || !data.success) {
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      const record = data.certificate as CertificateRecord;
      setCertificate(record);
      setStatus(record.status === "revoked" ? "revoked" : "valid");
    } catch {
      setErrorMessage("Something went wrong. Please try again shortly.");
      setStatus("error");
    }
  }

  return (
    <div className="mx-auto w-full max-w-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-2xl border border-border bg-white p-5 shadow-xl sm:p-7"
        noValidate
      >
        <Label htmlFor="cert-id" className="text-navy">
          Certificate ID
        </Label>
        <div className="mt-2 flex flex-col gap-2.5 sm:flex-row">
          <Input
            id="cert-id"
            placeholder="e.g. AET-2026-001"
            autoComplete="off"
            className="h-11 flex-1 text-sm"
            {...register("certId")}
          />
          <Button
            type="submit"
            size="lg"
            disabled={status === "loading"}
            className="h-11 bg-orange text-white hover:bg-orange-light sm:w-auto"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                <Search className="size-4" />
                Verify
              </>
            )}
          </Button>
        </div>
        {errors.certId ? (
          <p className="mt-2 text-xs text-destructive">{errors.certId.message}</p>
        ) : (
          <p className="mt-2 text-xs text-muted-foreground">
            Enter the ID printed on the certificate. Letters, numbers, and hyphens only.
          </p>
        )}
      </form>

      <AnimatePresence mode="wait">
        {status === "valid" && certificate ? (
          <ResultCard
            key="valid"
            tone="valid"
            icon={<ShieldCheck className="size-7" />}
            title="Certificate verified"
            subtitle="This certificate is authentic and currently active."
            certificate={certificate}
          />
        ) : null}

        {status === "revoked" && certificate ? (
          <ResultCard
            key="revoked"
            tone="revoked"
            icon={<ShieldX className="size-7" />}
            title="Certificate revoked"
            subtitle="This certificate was issued by AET but is no longer valid."
            certificate={certificate}
          />
        ) : null}

        {status === "not_found" ? (
          <motion.div
            key="not-found"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            className="mt-6 rounded-2xl border border-border bg-white p-6 text-center shadow-sm"
          >
            <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <SearchX className="size-6" />
            </span>
            <h3 className="mt-4 font-heading text-lg font-bold text-navy">No certificate found</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              We could not find a matching record. Check the ID and try again.
            </p>
          </motion.div>
        ) : null}

        {status === "error" ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.3 }}
            className="mt-6 rounded-2xl border border-destructive/20 bg-white p-6 text-center shadow-sm"
          >
            <h3 className="font-heading text-lg font-bold text-navy">Unable to verify</h3>
            <p className="mt-1 text-sm text-muted-foreground">{errorMessage}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

function ResultCard({
  tone,
  icon,
  title,
  subtitle,
  certificate,
}: {
  tone: "valid" | "revoked";
  icon: ReactNode;
  title: string;
  subtitle: string;
  certificate: CertificateRecord;
}) {
  const isValid = tone === "valid";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mt-6 overflow-hidden rounded-2xl border border-border bg-white shadow-xl"
    >
      <div
        className={
          isValid
            ? "flex items-start gap-3 bg-emerald-600 px-5 py-4 text-white sm:px-6"
            : "flex items-start gap-3 bg-orange px-5 py-4 text-white sm:px-6"
        }
      >
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/15">
          {icon}
        </span>
        <div>
          <p className="font-heading text-lg font-bold">{title}</p>
          <p className="text-sm text-white/85">{subtitle}</p>
        </div>
      </div>

      <dl className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
        <Detail label="Student name" value={certificate.student_name} wide />
        <Detail label="Certificate ID" value={certificate.cert_id} />
        <Detail
          label="Course"
          value={certificate.course_name}
          icon={<Award className="size-3.5" />}
          wide
        />
        <Detail
          label="Completion date"
          value={formatDate(certificate.completion_date)}
          icon={<Calendar className="size-3.5" />}
        />
        <Detail
          label="Issue date"
          value={formatDate(certificate.issue_date)}
          icon={<Calendar className="size-3.5" />}
        />
      </dl>
    </motion.div>
  );
}

function Detail({
  label,
  value,
  icon,
  wide = false,
}: {
  label: string;
  value: string;
  icon?: ReactNode;
  wide?: boolean;
}) {
  return (
    <div className={wide ? "sm:col-span-2" : undefined}>
      <dt className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase">
        {icon}
        {label}
      </dt>
      <dd className="mt-1 font-heading text-base font-semibold text-navy">{value}</dd>
    </div>
  );
}
