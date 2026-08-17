import { z } from "zod";

export const certIdSchema = z
  .string()
  .trim()
  .min(3, { message: "Please enter a valid certificate ID." })
  .max(50, { message: "Certificate ID looks too long." })
  .regex(/^[A-Za-z0-9-]+$/, {
    message: "Certificate ID can only include letters, numbers, and hyphens.",
  });

export const certificateRecordSchema = z.object({
  cert_id: z.string(),
  student_name: z.string(),
  course_name: z.string(),
  completion_date: z.string(),
  issue_date: z.string(),
  status: z.enum(["active", "revoked"]),
});

export type CertificateRecord = z.infer<typeof certificateRecordSchema>;

export type CertificateLookupResult =
  | { success: true; certificate: CertificateRecord }
  | { success: false; status: 400 | 404 | 503 | 500; error: string };
