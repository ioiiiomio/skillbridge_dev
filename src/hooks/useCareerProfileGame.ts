"use client";

import { useCallback, useEffect, useState } from "react";
import { CAREER_QUESTIONS } from "@/data/games/career-profile";
import { scoreCareerAnswers } from "@/lib/games/career-scoring";
import { loadGameState, saveGameState, clearGameState } from "@/lib/games/game-storage";
import { trackGameEvent } from "@/lib/games/analytics";
import type { CareerAnswer, CareerProfileResult, GameStatus } from "@/types/games";

const STORAGE_KEY = "career-profile";

interface PersistedState {
  status: GameStatus;
  answers: CareerAnswer[];
  questionIndex: number;
}

export function useCareerProfileGame() {
  const [status, setStatus] = useState<GameStatus>("intro");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<CareerAnswer[]>([]);
  const [result, setResult] = useState<CareerProfileResult | null>(null);

  useEffect(() => {
    const saved = loadGameState<PersistedState>(STORAGE_KEY);
    if (saved && saved.status === "playing") {
      setStatus(saved.status);
      setAnswers(saved.answers);
      setQuestionIndex(saved.questionIndex);
    }
    trackGameEvent("game_opened", { slug: "career-profile" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const persist = useCallback((next: PersistedState) => {
    saveGameState(STORAGE_KEY, next);
  }, []);

  const start = useCallback(() => {
    setStatus("playing");
    setQuestionIndex(0);
    setAnswers([]);
    persist({ status: "playing", answers: [], questionIndex: 0 });
    trackGameEvent("game_started", { slug: "career-profile" });
  }, [persist]);

  const currentQuestion = CAREER_QUESTIONS[questionIndex];
  const selectedOptionId =
    answers.find((a) => a.questionId === currentQuestion?.id)?.optionId ?? null;

  const selectOption = useCallback(
    (optionId: string) => {
      if (!currentQuestion) return;
      setAnswers((prev) => {
        const next = [
          ...prev.filter((a) => a.questionId !== currentQuestion.id),
          { questionId: currentQuestion.id, optionId },
        ];
        persist({ status: "playing", answers: next, questionIndex });
        return next;
      });
      trackGameEvent("game_question_answered", { slug: "career-profile", questionIndex });
    },
    [currentQuestion, persist, questionIndex]
  );

  const goNext = useCallback(() => {
    if (questionIndex < CAREER_QUESTIONS.length - 1) {
      const next = questionIndex + 1;
      setQuestionIndex(next);
      persist({ status: "playing", answers, questionIndex: next });
    } else {
      setStatus("loading");
      persist({ status: "loading" as GameStatus, answers, questionIndex });
    }
  }, [answers, persist, questionIndex]);

  const finishLoading = useCallback(() => {
    const computed = scoreCareerAnswers(answers);
    setResult(computed);
    setStatus("result");
    clearGameState(STORAGE_KEY);
    trackGameEvent("game_completed", { slug: "career-profile" });
  }, [answers]);

  const restart = useCallback(() => {
    setStatus("intro");
    setAnswers([]);
    setQuestionIndex(0);
    setResult(null);
    clearGameState(STORAGE_KEY);
    trackGameEvent("game_restarted", { slug: "career-profile" });
  }, []);

  return {
    status,
    questions: CAREER_QUESTIONS,
    currentQuestion,
    questionIndex,
    selectedOptionId,
    result,
    start,
    selectOption,
    goNext,
    finishLoading,
    restart,
    hasProgress: status === "playing" && answers.length > 0,
  };
}
