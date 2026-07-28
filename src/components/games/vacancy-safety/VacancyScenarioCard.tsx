import { MapPin, Wallet, Briefcase } from "lucide-react";
import { cn } from "@/lib/cn";
import type { VacancyScenario } from "@/types/games";

interface VacancyScenarioCardProps {
  vacancy: VacancyScenario;
  /** When set (after an answer), the highlighted detail is visually marked. */
  showHighlight?: boolean;
}

export function VacancyScenarioCard({ vacancy, showHighlight }: VacancyScenarioCardProps) {
  function renderLine(text: string) {
    const isHighlighted = showHighlight && text === vacancy.highlightedDetail;
    return (
      <span
        className={cn(
          isHighlighted &&
            "rounded-md bg-warning/15 px-1.5 py-0.5 font-semibold text-[#8a5a00] outline outline-1 outline-warning/40"
        )}
      >
        {text}
      </span>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
      <h2 className="font-heading text-xl font-bold text-ink sm:text-2xl">{vacancy.title}</h2>
      <p className="mt-1 text-[15px] font-medium text-ink/60">{vacancy.company}</p>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink/60">
        <span className="inline-flex items-center gap-1.5">
          <MapPin size={15} aria-hidden="true" /> {vacancy.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Briefcase size={15} aria-hidden="true" /> {vacancy.workFormat}
        </span>
        <span className="inline-flex items-center gap-1.5 font-semibold text-ink/80">
          <Wallet size={15} aria-hidden="true" /> {vacancy.salary}
        </span>
      </div>

      <p className="mt-5 text-[15px] leading-relaxed text-ink/70">{vacancy.description}</p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wide text-ink/40">Обязанности</h3>
          <ul className="mt-2 flex flex-col gap-1.5 text-sm text-ink/70">
            {vacancy.responsibilities.map((item) => (
              <li key={item}>{renderLine(item)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wide text-ink/40">Требования</h3>
          <ul className="mt-2 flex flex-col gap-1.5 text-sm text-ink/70">
            {vacancy.requirements.map((item) => (
              <li key={item}>{renderLine(item)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wide text-ink/40">Условия</h3>
          <ul className="mt-2 flex flex-col gap-1.5 text-sm text-ink/70">
            {vacancy.conditions.map((item) => (
              <li key={item}>{renderLine(item)}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
