"use client";

/**
 * Thin sessionStorage wrapper used to persist in-progress game state for the
 * current browser session only. No authentication, no backend — this is a
 * demo-safe, client-only persistence layer.
 */

const PREFIX = "skillbridge:games:";

function isBrowser() {
  return typeof window !== "undefined";
}

export function loadGameState<T>(key: string): T | null {
  if (!isBrowser()) return null;
  try {
    const raw = window.sessionStorage.getItem(PREFIX + key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function saveGameState<T>(key: string, value: T): void {
  if (!isBrowser()) return;
  try {
    window.sessionStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // sessionStorage may be unavailable (private mode, quota) — fail silently,
    // the game still works without persistence.
  }
}

export function clearGameState(key: string): void {
  if (!isBrowser()) return;
  try {
    window.sessionStorage.removeItem(PREFIX + key);
  } catch {
    // ignore
  }
}
