"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MascotReaction } from "@/components/games/MascotReaction";
import { Lightbulb, ShieldCheck, Briefcase } from "lucide-react";
import { PLATFORM_URL } from "@/lib/constants";
import { trackGameEvent } from "@/lib/games/analytics";
import type { GameSlug } from "@/types/games";

const ACHIEVEMENTS = [
  { icon: Lightbulb, label: "Поймите себя и свои сильные стороны" },
  { icon: ShieldCheck, label: "Научитесь избегать небезопасных предложений" },
  { icon: Briefcase, label: "Узнайте, что важно работодателям" },
];

function CompleteContent() {
  const searchParams = useSearchParams();
  const from = searchParams.get("from") as GameSlug | null;

  return (
    <main className="py-14 sm:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/[0.05] to-accent/[0.10] p-7 sm:p-12">
          {/* Subtle confetti accents — decorative, respects prefers-reduced-motion via no animation */}
          <span aria-hidden="true" className="absolute left-8 top-10 h-2.5 w-2.5 rounded-sm bg-mascot" />
          <span aria-hidden="true" className="absolute right-14 top-16 h-2 w-2 rounded-full bg-accent/70" />
          <span aria-hidden="true" className="absolute right-24 top-8 h-2.5 w-2.5 rotate-12 rounded-sm bg-secondary/70" />
          <span aria-hidden="true" className="absolute left-24 bottom-10 h-2 w-2 rounded-full bg-mascot/80" />

          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h1 className="font-heading text-[28px] font-bold text-ink sm:text-[36px]">
                Вы готовы сделать следующий шаг
              </h1>
              <p className="mt-4 text-[17px] leading-relaxed text-ink/70">
                Вы определили карьерное направление, научились замечать риски и увидели, что
                работодатели действительно ищут в молодых кандидатах.
              </p>
              <p className="mt-3 text-[17px] leading-relaxed text-ink/70">
                Теперь создайте свой профиль и посмотрите возможности, доступные на SkillBridge
                KZ.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  href={PLATFORM_URL}
                  size="lg"
                  fullWidthOnMobile
                  onClick={() => trackGameEvent("game_platform_cta_clicked", { slug: from ?? undefined })}
                >
                  Открыть платформу
                </Button>
                <Button
                  href="/games"
                  variant="secondary"
                  size="lg"
                  fullWidthOnMobile
                  onClick={() => trackGameEvent("game_other_game_clicked", { slug: from ?? undefined })}
                >
                  Пройти другую игру
                </Button>
              </div>
            </div>

            <MascotReaction
              pose="excited"
              alt="Талисман SkillBridge KZ радостно празднует завершение игры"
              width={190}
              float
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {ACHIEVEMENTS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-soft text-primary">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <p className="text-sm font-medium text-ink/70">{item.label}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </main>
  );
}

export default function GameCompletePage() {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <CompleteContent />
      </Suspense>
      <Footer />
    </div>
  );
}
