import { certIdSchema, type CertificateLookupResult } from "@/lib/validations/certificate";
import { getSupabaseLookupClient } from "@/lib/supabase/server";

export async function findCertificateById(rawId: string): Promise<CertificateLookupResult> {
  const parsed = certIdSchema.safeParse(rawId);

  if (!parsed.success) {
    return {
      success: false,
      status: 400,
      error: parsed.error.issues[0]?.message ?? "Please enter a valid certificate ID.",
    };
  }

  const supabase = getSupabaseLookupClient();

  if (!supabase) {
    console.error("[AET Certificate Error] Supabase environment variables are not configured.");
    return {
      success: false,
      status: 503,
      error: "Certificate verification is temporarily unavailable. Please try again later.",
    };
  }

  try {
    const { data, error } = await supabase
      .from("certificates")
      .select("cert_id, student_name, course_name, completion_date, issue_date, status")
      .ilike("cert_id", parsed.data)
      .maybeSingle();

    if (error) throw error;

    if (!data) {
      return { success: false, status: 404, error: "No certificate found for this ID." };
    }

    const status = data.status === "revoked" ? "revoked" : "active";

    return {
      success: true,
      certificate: {
        cert_id: data.cert_id,
        student_name: data.student_name,
        course_name: data.course_name,
        completion_date: data.completion_date,
        issue_date: data.issue_date,
        status,
      },
    };
  } catch (error) {
    console.error("[AET Certificate Error]", error);
    return {
      success: false,
      status: 500,
      error: "Something went wrong. Please try again shortly.",
    };
  }
}
