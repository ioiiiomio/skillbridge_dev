import { AnswerOption } from "@/components/games/AnswerOption";
import type { CareerQuestion } from "@/types/games";

interface QuestionCardProps {
  question: CareerQuestion;
  selectedOptionId: string | null;
  onSelect: (optionId: string) => void;
}

export function QuestionCard({ question, selectedOptionId, onSelect }: QuestionCardProps) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-6 sm:p-9">
      <p className="text-sm font-medium text-ink/50">{question.situation}</p>
      <h2 className="mt-3 font-heading text-xl font-bold text-ink sm:text-2xl">
        {question.question}
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-3" role="radiogroup" aria-label={question.question}>
        {question.options.map((option) => (
          <AnswerOption
            key={option.id}
            name={question.id}
            label={option.label}
            selected={selectedOptionId === option.id}
            onSelect={() => onSelect(option.id)}
          />
        ))}
      </div>
    </div>
  );
}
