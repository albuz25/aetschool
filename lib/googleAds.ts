declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const ADS_ID_PATTERN = /^AW-\d+$/;
const SEND_TO_PATTERN = /^AW-\d+\/[A-Za-z0-9_-]+$/;

export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-18400665187";
export const GOOGLE_ADS_CONVERSION_SEND_TO =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_SEND_TO ||
  "AW-18400665187/M5L-CPam3eQcEOO8j8ZE";

export function isValidGoogleAdsId(id: string) {
  return ADS_ID_PATTERN.test(id);
}

export function isValidConversionSendTo(sendTo: string) {
  return SEND_TO_PATTERN.test(sendTo);
}

/** Fires the Google Ads conversion event after a successful lead submit. */
export function trackGoogleAdsConversion() {
  if (typeof window === "undefined") return;
  if (!isValidConversionSendTo(GOOGLE_ADS_CONVERSION_SEND_TO)) return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_CONVERSION_SEND_TO,
    value: 1.0,
    currency: "INR",
  });
}
