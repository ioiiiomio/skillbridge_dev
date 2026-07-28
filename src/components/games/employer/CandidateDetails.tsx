import { AlertCircle, CheckCircle2, HelpCircle } from "lucide-react";
import type { CandidateProfile } from "@/types/games";

interface CandidateDetailsProps {
  candidate: CandidateProfile;
}

export function CandidateDetails({ candidate }: CandidateDetailsProps) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="font-heading text-xl font-bold text-ink">{candidate.name}</h2>
        <span className="text-sm text-ink/50">{candidate.ageRange}</span>
      </div>

      <dl className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-ink/40">Специальность</dt>
          <dd className="text-ink/70">{candidate.speciality}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-ink/40">Локация</dt>
          <dd className="text-ink/70">{candidate.location}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-ink/40">Доступность</dt>
          <dd className="text-ink/70">{candidate.availability}</dd>
        </div>
        <div>
          <dt className="text-xs font-bold uppercase tracking-wide text-ink/40">Образование</dt>
          <dd className="text-ink/70">{candidate.education}</dd>
        </div>
        <div className="sm:col-span-2">
          <dt className="text-xs font-bold uppercase tracking-wide text-ink/40">Опыт</dt>
          <dd className="text-ink/70">{candidate.experience}</dd>
        </div>
      </dl>

      {candidate.projects.length > 0 && (
        <div className="mt-4">
          <h3 className="text-xs font-bold uppercase tracking-wide text-ink/40">Проекты</h3>
          <ul className="mt-1.5 flex flex-col gap-1 text-sm text-ink/70">
            {candidate.projects.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-4">
        <h3 className="text-xs font-bold uppercase tracking-wide text-ink/40">Навыки</h3>
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {candidate.skills.map((s) => (
            <span key={s} className="rounded-full bg-soft px-2.5 py-1 text-xs font-medium text-primary">
              {s}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div>
          <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-success">
            <CheckCircle2 size={13} aria-hidden="true" /> Сильные стороны
          </h3>
          <ul className="mt-1.5 flex flex-col gap-1 text-sm text-ink/70">
            {candidate.strengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-warning">
            <AlertCircle size={13} aria-hidden="true" /> На что обратить внимание
          </h3>
          <ul className="mt-1.5 flex flex-col gap-1 text-sm text-ink/70">
            {candidate.concerns.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        {candidate.missingInformation.length > 0 && (
          <div>
            <h3 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink/40">
              <HelpCircle size={13} aria-hidden="true" /> Не хватает информации
            </h3>
            <ul className="mt-1.5 flex flex-col gap-1 text-sm text-ink/70">
              {candidate.missingInformation.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
