const BATCH_OFFSETS_DAYS = [7, 14, 21, 28];
const SHORT_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 * Computes upcoming batch start dates relative to today, so the site never
 * shows stale hardcoded dates. Returns formatted strings like "18 Aug".
 */
export function getUpcomingBatchDates(count: number = BATCH_OFFSETS_DAYS.length): string[] {
  const today = new Date();

  return BATCH_OFFSETS_DAYS.slice(0, count).map((offset) => {
    const date = new Date(today);
    date.setUTCDate(date.getUTCDate() + offset);
    return `${date.getUTCDate()} ${SHORT_MONTHS[date.getUTCMonth()]}`;
  });
}
