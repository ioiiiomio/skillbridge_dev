import type { GameAnalyticsEvent, GameSlug } from "@/types/games";

/**
 * No real analytics provider is connected. This abstraction exists so a
 * provider (e.g. GA4, Amplitude, PostHog) can be plugged in later without
 * touching game components. Never pass answer text or personal data here —
 * only the event name, the game slug, and small numeric/boolean metadata.
 */
export function trackGameEvent(
  event: GameAnalyticsEvent,
  payload?: { slug?: GameSlug; [key: string]: unknown }
): void {
  if (process.env.NODE_ENV !== "production") {
    // eslint-disable-next-line no-console
    console.debug("[game_analytics]", event, payload ?? {});
  }
  // TODO: forward to a real analytics provider once one is connected.
}
