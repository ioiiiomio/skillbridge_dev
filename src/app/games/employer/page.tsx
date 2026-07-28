"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { GameShell } from "@/components/games/GameShell";
import { StartScreen } from "@/components/games/StartScreen";
import { ExitGameModal } from "@/components/games/ExitGameModal";
import { VacancyRequirements } from "@/components/games/employer/VacancyRequirements";
import { CandidateCard } from "@/components/games/employer/CandidateCard";
import { CandidateDetails } from "@/components/games/employer/CandidateDetails";
import { EmployerDecisionButtons } from "@/components/games/employer/EmployerDecisionButtons";
import { EmployerFeedback } from "@/components/games/employer/EmployerFeedback";
import { EmployerResult } from "@/components/games/employer/EmployerResult";
import { EMPLOYER_VACANCY } from "@/data/games/employer";
import { useEmployerGame } from "@/hooks/useEmployerGame";
import { trackGameEvent } from "@/lib/games/analytics";

export default function EmployerPage() {
  const router = useRouter();
  const [exitModalOpen, setExitModalOpen] = useState(false);
  const game = useEmployerGame();

  const handleExitClick = () => {
    if (game.hasProgress) {
      setExitModalOpen(true);
    } else {
      router.push("/games");
    }
  };

  return (
    <GameShell
      title="Вы — работодатель"
      duration="около 4–5 минут"
      progress={
        game.status === "playing"
          ? { current: game.index + 1, total: game.candidates.length }
          : undefined
      }
      onExitClick={handleExitClick}
    >
      {game.status === "intro" && (
        <StartScreen
          heading="Сегодня решение принимаете вы"
          text="У кандидатов нет идеальных резюме. У одного нет опыта, у другого не совпадает специальность, а третий не подтвердил заявленный навык. Ваша задача — понять, кто действительно подходит для конкретной вакансии."
          buttonLabel="Начать отбор"
          onStart={game.start}
          mascotPose="point"
          mascotAlt="Талисман SkillBridge KZ держит чек-лист кандидатов"
        />
      )}

      {game.status === "playing" && game.currentCandidate && (
        <div className="flex flex-col gap-6">
          <VacancyRequirements vacancy={EMPLOYER_VACANCY} />

          <div className="flex gap-2.5 overflow-x-auto pb-1 no-scrollbar">
            {game.candidates.map((c) => (
              <CandidateCard
                key={c.id}
                candidate={c}
                active={c.id === game.currentCandidate.id}
                decided={false}
                onSelect={() => {}}
              />
            ))}
          </div>

          <CandidateDetails candidate={game.currentCandidate} />

          <EmployerDecisionButtons
            selected={game.currentDecision}
            onSelect={game.decide}
            disabled={!!game.currentDecision}
          />

          {game.currentDecision && (
            <EmployerFeedback
              candidate={game.currentCandidate}
              onNext={game.goNext}
              isLast={game.index === game.candidates.length - 1}
            />
          )}
        </div>
      )}

      {game.status === "result" && (
        <EmployerResult
          totalScore={game.totalScore}
          maxScore={game.maxScore}
          onRestart={game.restart}
          onSeeProfile={() => {
            trackGameEvent("game_platform_cta_clicked", { slug: "employer" });
            router.push("/games/complete?from=employer");
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
