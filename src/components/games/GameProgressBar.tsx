import type { GameProgress } from "@/types/games";

interface GameProgressBarProps {
  progress: GameProgress;
}

export function GameProgressBar({ progress }: GameProgressBarProps) {
  const { current, total } = progress;
  const percent = Math.min(100, Math.round((current / total) * 100));

  return (
    <div>
      <p className="mb-2 text-sm font-semibold text-ink/60">
        {current} из {total}
      </p>
      <div
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`Прогресс: вопрос ${current} из ${total}`}
        className="h-2 w-full overflow-hidden rounded-full bg-border"
      >
        <div
          className="h-full rounded-full bg-gradient-primary transition-[width] duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
