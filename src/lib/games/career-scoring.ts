import { CAREER_QUESTIONS, CAREER_PROFILES } from "@/data/games/career-profile";
import type {
  CareerAnswer,
  CareerDimension,
  CareerProfileResult,
} from "@/types/games";

const DIMENSIONS: CareerDimension[] = [
  "analytical",
  "social",
  "creative",
  "practical",
  "organised",
  "entrepreneurial",
];

export function scoreCareerAnswers(answers: CareerAnswer[]): CareerProfileResult {
  const scores: Record<CareerDimension, number> = {
    analytical: 0,
    social: 0,
    creative: 0,
    practical: 0,
    organised: 0,
    entrepreneurial: 0,
  };

  for (const answer of answers) {
    const question = CAREER_QUESTIONS.find((q) => q.id === answer.questionId);
    const option = question?.options.find((o) => o.id === answer.optionId);
    if (!option) continue;
    for (const [dimension, weight] of Object.entries(option.weights)) {
      scores[dimension as CareerDimension] += weight ?? 0;
    }
  }

  const ranked = [...DIMENSIONS].sort((a, b) => scores[b] - scores[a]);
  const topScore = scores[ranked[0]] || 1;

  const primary = CAREER_PROFILES[ranked[0]];
  const alternatives = ranked.slice(1, 4).map((dimension) => ({
    ...CAREER_PROFILES[dimension],
    matchPercent: Math.max(35, Math.round((scores[dimension] / topScore) * 100)),
  }));

  return { primary, alternatives, scores };
}
