import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { CandidateProfile } from "@/types/games";

interface EmployerFeedbackProps {
  candidate: CandidateProfile;
  onNext: () => void;
  isLast: boolean;
}

export function EmployerFeedback({ candidate, onNext, isLast }: EmployerFeedbackProps) {
  return (
    <div className="mt-6 rounded-2xl border border-border bg-soft/60 p-6" role="status" aria-live="polite">
      <div className="flex items-start gap-3">
        <Sparkles size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
        <div>
          <p className="font-heading text-[15px] font-bold text-ink">Решение работодателя</p>
          <p className="mt-1 text-sm font-semibold text-ink/60">Что оказалось важным?</p>
        </div>
      </div>
      <p className="mt-3 text-[15px] leading-relaxed text-ink/70">
        Не наличие идеального резюме, а соответствие кандидата конкретным задачам вакансии.
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{candidate.explanation}</p>
      <div className="mt-4">
        <Button onClick={onNext} size="md">
          {isLast ? "Посмотреть итог" : "Следующий кандидат"}
        </Button>
      </div>
    </div>
  );
}
