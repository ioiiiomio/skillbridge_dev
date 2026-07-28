"use client";

import { useCallback, useEffect, useState } from "react";
import { CANDIDATES } from "@/data/games/employer";
import { loadGameState, saveGameState, clearGameState } from "@/lib/games/game-storage";
import { trackGameEvent } from "@/lib/games/analytics";
import type { EmployerDecision, EmployerFeedback, GameStatus } from "@/types/games";

const STORAGE_KEY = "employer";

interface PersistedState {
  status: GameStatus;
  index: number;
  feedbackHistory: EmployerFeedback[];
}

export function useEmployerGame() {
  const [status, setStatus] = useState<GameStatus>("intro");
  const [index, setIndex] = useState(0);
  const [feedbackHistory, setFeedbackHistory] = useState<EmployerFeedback[]>([]);
  const [currentDecision, setCurrentDecision] = useState<EmployerDecision | null>(null);

  useEffect(() => {
    const saved = loadGameState<PersistedState>(STORAGE_KEY);
    if (saved && saved.status === "playing") {
      setStatus(saved.status);
      setIndex(saved.index);
      setFeedbackHistory(saved.feedbackHistory);
    }
    trackGameEvent("game_opened", { slug: "employer" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const persist = useCallback((next: PersistedState) => saveGameState(STORAGE_KEY, next), []);

  const start = useCallback(() => {
    setStatus("playing");
    setIndex(0);
    setFeedbackHistory([]);
    setCurrentDecision(null);
    persist({ status: "playing", index: 0, feedbackHistory: [] });
    trackGameEvent("game_started", { slug: "employer" });
  }, [persist]);

  const currentCandidate = CANDIDATES[index];

  const decide = useCallback(
    (decision: EmployerDecision) => {
      if (!currentCandidate || currentDecision) return;
      const score = currentCandidate.decisionScore[decision];
      setCurrentDecision(decision);
      const feedback: EmployerFeedback = { candidateId: currentCandidate.id, decision, score };
      const next = [...feedbackHistory, feedback];
      setFeedbackHistory(next);
      persist({ status: "playing", index, feedbackHistory: next });
      trackGameEvent("game_question_answered", { slug: "employer", index, score });
    },
    [currentCandidate, currentDecision, feedbackHistory, index, persist]
  );

  const goNext = useCallback(() => {
    if (index < CANDIDATES.length - 1) {
      const next = index + 1;
      setIndex(next);
      setCurrentDecision(null);
      persist({ status: "playing", index: next, feedbackHistory });
    } else {
      setStatus("result");
      clearGameState(STORAGE_KEY);
      trackGameEvent("game_completed", { slug: "employer" });
    }
  }, [feedbackHistory, index, persist]);

  const restart = useCallback(() => {
    setStatus("intro");
    setIndex(0);
    setFeedbackHistory([]);
    setCurrentDecision(null);
    clearGameState(STORAGE_KEY);
    trackGameEvent("game_restarted", { slug: "employer" });
  }, []);

  const totalScore = feedbackHistory.reduce((sum, f) => sum + f.score, 0);
  const maxScore = CANDIDATES.length * 3;

  return {
    status,
    candidates: CANDIDATES,
    currentCandidate,
    index,
    currentDecision,
    totalScore,
    maxScore,
    start,
    decide,
    goNext,
    restart,
    hasProgress: status === "playing" && feedbackHistory.length > 0,
  };
}
