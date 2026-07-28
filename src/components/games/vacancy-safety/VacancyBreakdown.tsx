import { CheckCircle2, Info } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { VacancyFeedback, VacancyScenario } from "@/types/games";

interface VacancyBreakdownProps {
  vacancy: VacancyScenario;
  feedback: VacancyFeedback;
  showDetails: boolean;
  onReview: () => void;
  onNext: () => void;
  isLast: boolean;
}

export function VacancyBreakdown({
  vacancy,
  feedback,
  showDetails,
  onReview,
  onNext,
  isLast,
}: VacancyBreakdownProps) {
  return (
    <div
      className="mt-6 rounded-2xl border border-border bg-soft/60 p-6"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <CheckCircle2
          size={20}
          className={feedback.isCorrect ? "mt-0.5 shrink-0 text-success" : "mt-0.5 shrink-0 text-primary"}
          aria-hidden="true"
        />
        <p className="font-heading text-[15px] font-bold text-ink">
          {feedback.isCorrect
            ? "Точно! Вы заметили важную деталь."
            : "Эта вакансия выглядит убедительно, но в ней скрыт серьёзный риск."}
        </p>
      </div>

      {!showDetails ? (
        <button
          type="button"
          onClick={onReview}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          <Info size={16} aria-hidden="true" />
          Разобрать вакансию
        </button>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          <p className="text-[15px] leading-relaxed text-ink/70">{vacancy.explanation}</p>
          <p className="rounded-xl bg-white px-4 py-3 text-sm leading-relaxed text-ink/70">
            <span className="font-semibold text-ink">Что стоит проверять: </span>
            {vacancy.safetyTip}
          </p>
          <div className="mt-2">
            <Button onClick={onNext} size="md">
              {isLast ? "Посмотреть результат" : "Следующая вакансия"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
