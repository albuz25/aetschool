import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

import { leadFormSchema } from "@/lib/validations/lead";
import { supabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const result = leadFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Please check the form for errors.",
        issues: result.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const lead = {
    id: randomUUID(),
    ...result.data,
  };

  if (!supabaseServerClient) {
    console.error("[AET Lead Error] Supabase environment variables are not configured.");
    return NextResponse.json(
      { success: false, error: "Enquiries are temporarily unavailable. Please call us directly." },
      { status: 503 }
    );
  }

  try {
    const { error } = await supabaseServerClient.from("leads").insert({
      id: lead.id,
      name: lead.name,
      email: lead.email || null,
      phone: lead.phone,
      program_interest: lead.programInterest,
      city: lead.city,
      source: lead.source,
    });

    if (error) throw error;

    return NextResponse.json({ success: true, id: lead.id });
  } catch (error) {
    console.error("[AET Lead Error]", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again shortly." },
      { status: 500 }
    );
  }
}
