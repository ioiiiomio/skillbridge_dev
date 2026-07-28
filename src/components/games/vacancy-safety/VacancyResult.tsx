import { MascotReaction } from "@/components/games/MascotReaction";
import { GameFooterActions } from "@/components/games/GameFooterActions";
import { SafetyRules } from "./SafetyRules";

interface VacancyResultProps {
  correctCount: number;
  total: number;
  onRestart: () => void;
  onGoToVacancies: () => void;
}

function getTier(correctCount: number) {
  if (correctCount === 6) {
    return {
      heading: "Вас сложно обмануть",
      text: "Вы внимательно изучаете условия и замечаете даже те риски, которые скрыты за профессиональным оформлением.",
    };
  }
  if (correctCount >= 4) {
    return {
      heading: "Вы замечаете большинство рисков",
      text: "Но некоторые опасные условия всё ещё могут выглядеть как обычная часть трудоустройства.",
    };
  }
  if (correctCount >= 2) {
    return {
      heading: "Не спешите отправлять отклик",
      text: "Перед передачей документов или личных данных стоит внимательнее проверять компанию и условия работы.",
    };
  }
  return {
    heading: "Профессиональное оформление ещё не означает безопасность",
    text: "Проверяйте работодателя, не переводите деньги и не используйте личные банковские реквизиты для рабочих операций.",
  };
}

export function VacancyResult({ correctCount, total, onRestart, onGoToVacancies }: VacancyResultProps) {
  const tier = getTier(correctCount);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-gradient-to-br from-accent/[0.05] to-accent/[0.12] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="text-sm font-semibold text-primary/70">
            {correctCount} из {total} правильных решений
          </p>
          <h2 className="mt-2 font-heading text-[26px] font-bold text-ink sm:text-[32px]">
            {tier.heading}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{tier.text}</p>
        </div>
        <MascotReaction
          pose="thumbsup"
          alt="Талисман SkillBridge KZ держит проверенный щит безопасности"
          width={150}
          float
        />
      </div>

      <SafetyRules />

      <GameFooterActions
        primaryLabel="Перейти к проверенным вакансиям"
        onPrimaryClick={onGoToVacancies}
        onRestart={onRestart}
      />

      <p className="text-xs leading-relaxed text-ink/40">
        Результат основан на демонстрационной модели и служит образовательным примером, а не
        полной проверкой безопасности вакансий.
      </p>
    </div>
  );
}
