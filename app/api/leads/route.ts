import { NextResponse } from "next/server";
import { randomUUID } from "crypto";

import { leadFormSchema } from "@/lib/validations/lead";

// import { supabaseServerClient } from "@/lib/supabase/server";

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
    receivedAt: new Date().toISOString(),
  };

  try {
    // Structured server-side log — replace/augment with your CRM, email (Resend) or
    // webhook integration as needed. This keeps the lead flow fully functional today.
    console.log("[AET Lead Captured]", JSON.stringify(lead, null, 2));

    // TODO (next stage): insert into Supabase once project credentials are wired up.
    // const { error } = await supabaseServerClient
    //   .from("leads")
    //   .insert({
    //     name: lead.name,
    //     email: lead.email,
    //     phone: lead.phone,
    //     program_interest: lead.programInterest,
    //     city: lead.city,
    //     state: lead.state,
    //     source: lead.source,
    //   });
    // if (error) throw error;

    return NextResponse.json({ success: true, id: lead.id });
  } catch (error) {
    console.error("[AET Lead Error]", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again shortly." },
      { status: 500 }
    );
  }
}
