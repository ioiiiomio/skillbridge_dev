import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface GameFooterActionsProps {
  primaryLabel: string;
  onPrimaryClick?: () => void;
  primaryHref?: string;
  onRestart: () => void;
}

export function GameFooterActions({
  primaryLabel,
  onPrimaryClick,
  primaryHref,
  onRestart,
}: GameFooterActionsProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {primaryHref ? (
        <Button href={primaryHref} size="lg" fullWidthOnMobile onClick={onPrimaryClick}>
          {primaryLabel}
        </Button>
      ) : (
        <Button size="lg" fullWidthOnMobile onClick={onPrimaryClick}>
          {primaryLabel}
        </Button>
      )}
      <Button variant="secondary" size="lg" fullWidthOnMobile onClick={onRestart}>
        Пройти ещё раз
      </Button>
      <Link
        href="/games"
        className="inline-flex h-[52px] items-center justify-center rounded-2xl px-6 text-[15px] font-semibold text-primary transition-colors hover:bg-soft"
      >
        К списку игр
      </Link>
    </div>
  );
}
