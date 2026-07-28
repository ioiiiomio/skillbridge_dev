import type { EmployerVacancy } from "@/types/games";

interface VacancyRequirementsProps {
  vacancy: EmployerVacancy;
}

export function VacancyRequirements({ vacancy }: VacancyRequirementsProps) {
  return (
    <div className="rounded-3xl border border-border bg-soft/60 p-6 sm:p-7">
      <p className="text-xs font-bold uppercase tracking-wide text-primary/70">Вакансия</p>
      <h2 className="mt-1 font-heading text-xl font-bold text-ink">{vacancy.title}</h2>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wide text-ink/40">Обязанности</h3>
          <ul className="mt-1.5 flex flex-col gap-1 text-sm text-ink/70">
            {vacancy.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wide text-ink/40">Ключевые навыки</h3>
          <p className="mt-1.5 text-sm text-ink/70">{vacancy.requiredSkills.join(", ")}</p>
          <h3 className="mt-3 text-xs font-bold uppercase tracking-wide text-ink/40">
            Будет плюсом
          </h3>
          <p className="mt-1.5 text-sm text-ink/70">{vacancy.preferredSkills.join(", ")}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-ink/60">
        <span className="rounded-full bg-white px-3 py-1.5">{vacancy.schedule}</span>
        <span className="rounded-full bg-white px-3 py-1.5">{vacancy.workFormat}</span>
        <span className="rounded-full bg-white px-3 py-1.5">{vacancy.educationExpectation}</span>
      </div>
    </div>
  );
}
