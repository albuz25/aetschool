import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { AdsLandingPage } from "@/components/ads/AdsLandingPage";
import { adsLandings, getAdsLanding, getAdsLandingProgram } from "@/lib/adsLandings";
import { SITE_NAME } from "@/lib/seo";

export function generateStaticParams() {
  return adsLandings.map((landing) => ({ slug: landing.slug }));
}

export async function generateMetadata(
  props: PageProps<"/ads/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const landing = getAdsLanding(slug);
  const program = getAdsLandingProgram(slug);

  if (!landing || !program) {
    return { title: "Program Not Found", robots: { index: false, follow: false } };
  }

  return {
    title: landing.headline,
    description: landing.subhead,
    robots: { index: false, follow: false },
    alternates: { canonical: `/ads/${landing.slug}` },
    openGraph: {
      title: `${landing.headline} | ${SITE_NAME}`,
      description: landing.subhead,
      url: `/ads/${landing.slug}`,
    },
  };
}

export default async function AdsLandingRoute(props: PageProps<"/ads/[slug]">) {
  const { slug } = await props.params;
  const landing = getAdsLanding(slug);
  const program = getAdsLandingProgram(slug);

  if (!landing || !program) {
    notFound();
  }

  return <AdsLandingPage landing={landing} program={program} />;
}
