import type { Metadata } from "next";

import { findCertificateById } from "@/lib/certificates";
import type { CertificateLookupResult } from "@/lib/validations/certificate";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CertificateVerifyForm } from "@/components/verify/CertificateVerifyForm";

export const metadata: Metadata = {
  title: "Verify Certificate | AET School of Design",
  description:
    "Confirm the authenticity of an AET School of Design certificate by entering the certificate ID.",
};

export default async function VerifyPage(props: PageProps<"/verify">) {
  const searchParams = await props.searchParams;
  const idParam = Array.isArray(searchParams?.id) ? searchParams.id[0] : searchParams?.id;
  const initialId = typeof idParam === "string" ? idParam.trim() : "";

  let initialResult: CertificateLookupResult | null = null;
  if (initialId) {
    initialResult = await findCertificateById(initialId);
  }

  return (
    <div className="bg-offwhite py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Certificate Verification"
          title="Verify an AET Certificate"
          description="Enter the certificate ID to confirm whether a credential was issued by AET School of Design and is still valid."
        />
        <div className="mt-10">
          <CertificateVerifyForm initialId={initialId} initialResult={initialResult} />
        </div>
      </Container>
    </div>
  );
}
