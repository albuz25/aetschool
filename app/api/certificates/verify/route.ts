import { NextResponse } from "next/server";

import { findCertificateById } from "@/lib/certificates";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const result = await findCertificateById(searchParams.get("id") ?? "");

  if (!result.success) {
    return NextResponse.json(
      { success: false, error: result.error },
      { status: result.status }
    );
  }

  return NextResponse.json({
    success: true,
    certificate: result.certificate,
  });
}
