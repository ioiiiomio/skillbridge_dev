"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { GameProgressBar } from "./GameProgressBar";
import type { GameProgress } from "@/types/games";

interface GameShellProps {
  title: string;
  duration: string;
  progress?: GameProgress;
  children: ReactNode;
  onExitClick?: () => void;
}

export function GameShell({ title, duration, progress, children, onExitClick }: GameShellProps) {
  return (
    <div>
      <Header />
      <main className="py-10 sm:py-14">
        <Container>
          <div className="mb-6 flex items-center justify-between gap-4">
            {onExitClick ? (
              <button
                type="button"
                onClick={onExitClick}
                className="inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-soft"
              >
                <ChevronLeft size={18} aria-hidden="true" />
                К списку игр
              </button>
            ) : (
              <Link
                href="/games"
                className="inline-flex items-center gap-1.5 rounded-full px-2 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-soft"
              >
                <ChevronLeft size={18} aria-hidden="true" />
                К списку игр
              </Link>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <h1 className="font-heading text-2xl font-bold text-ink sm:text-[32px]">{title}</h1>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-soft px-3.5 py-1.5 text-sm font-medium text-ink/60">
              {duration}
            </span>
          </div>

          {progress && (
            <div className="mt-6">
              <GameProgressBar progress={progress} />
            </div>
          )}

          <div className="mt-8">{children}</div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
