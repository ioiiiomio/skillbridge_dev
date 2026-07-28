import { CheckCircle2 } from "lucide-react";
import { MascotReaction } from "@/components/games/MascotReaction";
import { GameFooterActions } from "@/components/games/GameFooterActions";
import { CareerDirectionCard } from "./CareerDirectionCard";
import { CAREER_RECOMMENDATIONS } from "@/data/games/career-profile";
import type { CareerProfileResult } from "@/types/games";

interface CareerResultProps {
  result: CareerProfileResult;
  onRestart: () => void;
  onSeeOpportunities: () => void;
}

export function CareerResult({ result, onRestart, onSeeOpportunities }: CareerResultProps) {
  const PrimaryIcon = result.primary.icon;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start gap-6 rounded-3xl border border-border bg-gradient-to-br from-primary/[0.05] to-secondary/[0.10] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-heading text-[26px] font-bold text-ink sm:text-[32px]">
            Ваш карьерный профиль готов
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-primary/70">
            Наиболее подходящее направление
          </p>
          <div className="mt-3 flex items-center gap-3">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-button">
              <PrimaryIcon size={22} aria-hidden="true" />
            </span>
            <h3 className="font-heading text-xl font-bold text-ink">{result.primary.title}</h3>
          </div>

          <h4 className="mt-6 font-heading text-base font-bold text-ink">
            Почему вам подходит эта профессия?
          </h4>
          <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{result.primary.explanation}</p>
        </div>
        <MascotReaction pose="point" alt="Талисман SkillBridge KZ указывает на рекомендацию" width={150} float />
      </div>

      <div>
        <h4 className="font-heading text-lg font-bold text-ink">
          Ещё три направления, которые стоит рассмотреть
        </h4>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {result.alternatives.map((alt) => (
            <CareerDirectionCard key={alt.dimension} direction={alt} />
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
        <h4 className="font-heading text-lg font-bold text-ink">Что поможет сделать первый шаг</h4>
        <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {CAREER_RECOMMENDATIONS.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink/70">
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-success" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <GameFooterActions
        primaryLabel="Посмотреть подходящие возможности"
        onPrimaryClick={onSeeOpportunities}
        onRestart={onRestart}
      />

      <p className="text-xs leading-relaxed text-ink/40">
        Результат основан на демонстрационной модели и служит карьерной рекомендацией, а не
        профессиональной диагностикой.
      </p>
    </div>
  );
}
