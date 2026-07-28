"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { GameShell } from "@/components/games/GameShell";
import { StartScreen } from "@/components/games/StartScreen";
import { LoadingAnalysis } from "@/components/games/LoadingAnalysis";
import { ExitGameModal } from "@/components/games/ExitGameModal";
import { Button } from "@/components/ui/Button";
import { QuestionCard } from "@/components/games/career-profile/QuestionCard";
import { CareerResult } from "@/components/games/career-profile/CareerResult";
import { useCareerProfileGame } from "@/hooks/useCareerProfileGame";
import { trackGameEvent } from "@/lib/games/analytics";

const LOADING_MESSAGES = [
  "Анализируем ваши решения…",
  "Определяем сильные стороны…",
  "Сравниваем карьерные направления…",
  "Формируем рекомендацию…",
];

export default function CareerProfilePage() {
  const router = useRouter();
  const [exitModalOpen, setExitModalOpen] = useState(false);
  const game = useCareerProfileGame();

  const handleExitClick = () => {
    if (game.hasProgress) {
      setExitModalOpen(true);
    } else {
      router.push("/games");
    }
  };

  return (
    <GameShell
      title="Ваш карьерный профиль"
      duration="около 2 минут"
      progress={
        game.status === "playing"
          ? { current: game.questionIndex + 1, total: game.questions.length }
          : undefined
      }
      onExitClick={handleExitClick}
    >
      {game.status === "intro" && (
        <StartScreen
          heading="Не выбирайте профессию вслепую"
          text="Ответьте на пять ситуационных вопросов. Мы проанализируем ваш подход к работе и покажем направления, в которых ваши сильные стороны могут раскрыться лучше всего."
          hint="Здесь нет правильных ответов. Выбирайте тот вариант, который действительно ближе вам."
          buttonLabel="Начать игру"
          onStart={game.start}
          mascotPose="laptop"
          mascotAlt="Талисман SkillBridge KZ с ноутбуком"
        />
      )}

      {game.status === "playing" && game.currentQuestion && (
        <div className="flex flex-col gap-6">
          <QuestionCard
            question={game.currentQuestion}
            selectedOptionId={game.selectedOptionId}
            onSelect={game.selectOption}
          />
          <div className="flex justify-end">
            <Button size="lg" disabled={!game.selectedOptionId} onClick={game.goNext}>
              {game.questionIndex === game.questions.length - 1 ? "Завершить" : "Далее"}
            </Button>
          </div>
        </div>
      )}

      {game.status === "loading" && (
        <LoadingAnalysis
          messages={LOADING_MESSAGES}
          onComplete={game.finishLoading}
          mascotPose="thinking"
          mascotAlt="Талисман SkillBridge KZ анализирует ответы"
        />
      )}

      {game.status === "result" && game.result && (
        <CareerResult
          result={game.result}
          onRestart={game.restart}
          onSeeOpportunities={() => {
            trackGameEvent("game_platform_cta_clicked", { slug: "career-profile" });
            router.push("/games/complete?from=career-profile");
          }}
        />
      )}

      <ExitGameModal
        open={exitModalOpen}
        onConfirm={() => router.push("/games")}
        onCancel={() => setExitModalOpen(false)}
      />
    </GameShell>
  );
}
