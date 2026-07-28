import { MascotReaction } from "@/components/games/MascotReaction";
import { GameFooterActions } from "@/components/games/GameFooterActions";

interface EmployerResultProps {
  totalScore: number;
  maxScore: number;
  onRestart: () => void;
  onSeeProfile: () => void;
}

function getTier(ratio: number) {
  if (ratio >= 0.8) {
    return {
      heading: "Вы оцениваете потенциал, а не только резюме",
      text: "Вы умеете сопоставлять требования вакансии с реальными навыками кандидата и не отказываете только из-за отсутствия опыта.",
    };
  }
  if (ratio >= 0.5) {
    return {
      heading: "Вы принимаете взвешенные решения",
      text: "Но иногда совпадение специальности или наличие опыта влияет на вас сильнее, чем практические навыки кандидата.",
    };
  }
  return {
    heading: "Хороший кандидат не всегда выглядит идеально",
    text: "Для первой работы особенно важно учитывать учебные проекты, мотивацию, переносимые навыки и готовность учиться.",
  };
}

export function EmployerResult({ totalScore, maxScore, onRestart, onSeeProfile }: EmployerResultProps) {
  const ratio = maxScore > 0 ? totalScore / maxScore : 0;
  const tier = getTier(ratio);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-gradient-to-br from-mascot/[0.12] to-mascot/[0.20] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-heading text-[26px] font-bold text-ink sm:text-[32px]">{tier.heading}</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{tier.text}</p>
        </div>
        <MascotReaction
          pose="excited"
          alt="Талисман SkillBridge KZ поддерживает ваше решение"
          width={150}
          float
        />
      </div>

      <GameFooterActions
        primaryLabel="Посмотреть, как выглядит сильный профиль"
        onPrimaryClick={onSeeProfile}
        onRestart={onRestart}
      />

      <p className="text-xs leading-relaxed text-ink/40">
        Результат основан на демонстрационной модели и служит образовательным примером, а не
        реальной оценкой ваших управленческих навыков.
      </p>
    </div>
  );
}
