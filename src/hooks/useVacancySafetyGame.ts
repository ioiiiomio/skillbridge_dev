"use client";

import { useCallback, useEffect, useState } from "react";
import { VACANCY_SCENARIOS } from "@/data/games/vacancy-safety";
import { loadGameState, saveGameState, clearGameState } from "@/lib/games/game-storage";
import { trackGameEvent } from "@/lib/games/analytics";
import type { GameStatus, VacancyDecision, VacancyFeedback } from "@/types/games";

const STORAGE_KEY = "vacancy-safety";

interface PersistedState {
  status: GameStatus;
  index: number;
  feedbackHistory: VacancyFeedback[];
}

export function useVacancySafetyGame() {
  const [status, setStatus] = useState<GameStatus>("intro");
  const [index, setIndex] = useState(0);
  const [feedbackHistory, setFeedbackHistory] = useState<VacancyFeedback[]>([]);
  const [currentDecision, setCurrentDecision] = useState<VacancyDecision | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const saved = loadGameState<PersistedState>(STORAGE_KEY);
    if (saved && saved.status === "playing") {
      setStatus(saved.status);
      setIndex(saved.index);
      setFeedbackHistory(saved.feedbackHistory);
    }
    trackGameEvent("game_opened", { slug: "vacancy-safety" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const persist = useCallback((next: PersistedState) => saveGameState(STORAGE_KEY, next), []);

  const start = useCallback(() => {
    setStatus("playing");
    setIndex(0);
    setFeedbackHistory([]);
    setCurrentDecision(null);
    setShowDetails(false);
    persist({ status: "playing", index: 0, feedbackHistory: [] });
    trackGameEvent("game_started", { slug: "vacancy-safety" });
  }, [persist]);

  const currentVacancy = VACANCY_SCENARIOS[index];

  const decide = useCallback(
    (decision: VacancyDecision) => {
      if (!currentVacancy || currentDecision) return;
      const isCorrect = (decision === "safe") === currentVacancy.isSafe;
      setCurrentDecision(decision);
      const feedback: VacancyFeedback = { scenarioId: currentVacancy.id, decision, isCorrect };
      const next = [...feedbackHistory, feedback];
      setFeedbackHistory(next);
      persist({ status: "playing", index, feedbackHistory: next });
      trackGameEvent("game_question_answered", { slug: "vacancy-safety", index, isCorrect });
    },
    [currentDecision, currentVacancy, feedbackHistory, index, persist]
  );

  const reviewDetails = useCallback(() => setShowDetails(true), []);

  const goNext = useCallback(() => {
    if (index < VACANCY_SCENARIOS.length - 1) {
      const next = index + 1;
      setIndex(next);
      setCurrentDecision(null);
      setShowDetails(false);
      persist({ status: "playing", index: next, feedbackHistory });
    } else {
      setStatus("result");
      clearGameState(STORAGE_KEY);
      trackGameEvent("game_completed", { slug: "vacancy-safety" });
    }
  }, [feedbackHistory, index, persist]);

  const restart = useCallback(() => {
    setStatus("intro");
    setIndex(0);
    setFeedbackHistory([]);
    setCurrentDecision(null);
    setShowDetails(false);
    clearGameState(STORAGE_KEY);
    trackGameEvent("game_restarted", { slug: "vacancy-safety" });
  }, []);

  const correctCount = feedbackHistory.filter((f) => f.isCorrect).length;

  return {
    status,
    scenarios: VACANCY_SCENARIOS,
    currentVacancy,
    index,
    currentDecision,
    showDetails,
    correctCount,
    start,
    decide,
    reviewDetails,
    goNext,
    restart,
    hasProgress: status === "playing" && feedbackHistory.length > 0,
  };
}
