import { User } from "lucide-react";
import { cn } from "@/lib/cn";
import type { CandidateProfile } from "@/types/games";

interface CandidateCardProps {
  candidate: CandidateProfile;
  active: boolean;
  decided: boolean;
  onSelect: () => void;
}

export function CandidateCard({ candidate, active, decided, onSelect }: CandidateCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={active}
      className={cn(
        "flex min-h-[44px] shrink-0 flex-col items-start gap-1 rounded-2xl border px-4 py-3 text-left transition-all",
        active ? "border-primary bg-soft" : "border-border bg-surface hover:border-primary/40"
      )}
    >
      <span className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-card">
          <User size={15} aria-hidden="true" />
        </span>
        {decided && (
          <span className="h-2 w-2 rounded-full bg-success" aria-label="Решение принято" />
        )}
      </span>
      <span className="font-heading text-sm font-bold text-ink">{candidate.name}</span>
      <span className="text-xs text-ink/50">{candidate.ageRange}</span>
    </button>
  );
}
