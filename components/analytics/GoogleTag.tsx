import Script from "next/script";

import { GOOGLE_ADS_ID, isValidGoogleAdsId } from "@/lib/googleAds";

export function GoogleTag() {
  if (!isValidGoogleAdsId(GOOGLE_ADS_ID)) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');
        `}
      </Script>
    </>
  );
}
