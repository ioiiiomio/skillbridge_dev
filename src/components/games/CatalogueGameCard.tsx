import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { CatalogueGame } from "@/data/games/catalogue";

const accentStyles: Record<CatalogueGame["accent"], { bg: string; icon: string; ring: string }> = {
  blue: {
    bg: "bg-gradient-to-br from-primary/[0.06] to-secondary/[0.10]",
    icon: "bg-gradient-primary text-white",
    ring: "hover:shadow-[0_20px_45px_-18px_rgba(11,95,255,0.35)]",
  },
  violet: {
    bg: "bg-gradient-to-br from-accent/[0.06] to-accent/[0.12]",
    icon: "bg-gradient-ai text-white",
    ring: "hover:shadow-[0_20px_45px_-18px_rgba(123,97,255,0.35)]",
  },
  yellow: {
    bg: "bg-gradient-to-br from-mascot/[0.10] to-mascot/[0.18]",
    icon: "bg-mascot text-ink",
    ring: "hover:shadow-[0_20px_45px_-18px_rgba(255,216,77,0.55)]",
  },
};

interface CatalogueGameCardProps {
  game: CatalogueGame;
}

export function CatalogueGameCard({ game }: CatalogueGameCardProps) {
  const Icon = game.icon;
  const style = accentStyles[game.accent];

  return (
    <Link
      href={game.route}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-border p-7 transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        style.bg,
        style.ring
      )}
    >
      <span className={cn("flex h-12 w-12 items-center justify-center rounded-xl shadow-button", style.icon)}>
        <Icon size={22} aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-heading text-lg font-bold leading-snug text-ink">{game.title}</h3>
      <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink/60">{game.description}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-ink/40">{game.meta}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 self-start rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-primary shadow-card transition-transform group-hover:-translate-y-0.5">
        {game.buttonLabel}
        <ArrowUpRight size={16} aria-hidden="true" />
      </span>
    </Link>
  );
}
