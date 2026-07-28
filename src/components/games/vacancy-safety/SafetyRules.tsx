import { ShieldCheck } from "lucide-react";

const RULES = [
  "Не платите за получение работы.",
  "Не проводите чужие деньги через личную карту.",
  "Проверяйте компанию и её контакты.",
  "Читайте обязанности и условия полностью.",
  "Передавайте документы только после официального предложения.",
];

export function SafetyRules() {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-ai text-white">
          <ShieldCheck size={18} aria-hidden="true" />
        </span>
        <h4 className="font-heading text-lg font-bold text-ink">Пять правил безопасного поиска</h4>
      </div>
      <ol className="mt-4 flex flex-col gap-2.5">
        {RULES.map((rule, i) => (
          <li key={rule} className="flex items-start gap-3 text-[15px] text-ink/70">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-soft text-xs font-bold text-primary">
              {i + 1}
            </span>
            {rule}
          </li>
        ))}
      </ol>
    </div>
  );
}
