"use client";

import { useEffect, useState } from "react";
import { MascotReaction } from "./MascotReaction";
import type { MascotPose } from "@/components/ui/MascotImage";

interface LoadingAnalysisProps {
  messages: string[];
  onComplete: () => void;
  mascotPose?: MascotPose;
  mascotAlt: string;
  /** Total duration in ms. Spec recommends ~2500-4000ms. */
  totalDuration?: number;
}

export function LoadingAnalysis({
  messages,
  onComplete,
  mascotPose = "thinking",
  mascotAlt,
  totalDuration = 3200,
}: LoadingAnalysisProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      const t = setTimeout(onComplete, 400);
      return () => clearTimeout(t);
    }

    const stepDuration = totalDuration / messages.length;
    const stepTimer = setInterval(() => {
      setIndex((i) => Math.min(i + 1, messages.length - 1));
    }, stepDuration);
    const doneTimer = setTimeout(onComplete, totalDuration);

    return () => {
      clearInterval(stepTimer);
      clearTimeout(doneTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages.length, totalDuration]);

  return (
    <div
      className="flex flex-col items-center gap-7 rounded-3xl border border-border bg-surface px-6 py-16 text-center"
      role="status"
      aria-live="polite"
    >
      <div className="relative flex h-40 w-40 items-center justify-center">
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 motion-safe:animate-spinSlow"
        />
        <MascotReaction pose={mascotPose} alt={mascotAlt} width={110} />
      </div>
      <p className="font-heading text-lg font-semibold text-ink">{messages[index]}</p>
      <p className="text-sm text-ink/50">Демонстрационный анализ ваших ответов</p>
    </div>
  );
}
