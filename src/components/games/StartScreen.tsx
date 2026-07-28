import { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { MascotReaction } from "./MascotReaction";
import type { MascotPose } from "@/components/ui/MascotImage";

interface StartScreenProps {
  heading: string;
  text: string;
  hint?: string;
  buttonLabel: string;
  onStart: () => void;
  mascotPose: MascotPose;
  mascotAlt: string;
  metaBadges?: ReactNode;
}

export function StartScreen({
  heading,
  text,
  hint,
  buttonLabel,
  onStart,
  mascotPose,
  mascotAlt,
  metaBadges,
}: StartScreenProps) {
  return (
    <div className="flex flex-col items-start gap-8 rounded-3xl border border-border bg-surface p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
      <div className="max-w-xl">
        {metaBadges && <div className="mb-4 flex flex-wrap gap-2">{metaBadges}</div>}
        <h2 className="font-heading text-[26px] font-bold leading-tight text-ink sm:text-[32px]">
          {heading}
        </h2>
        <p className="mt-4 text-[17px] leading-relaxed text-ink/70">{text}</p>
        {hint && (
          <p className="mt-4 rounded-xl bg-soft px-4 py-3 text-sm leading-relaxed text-primary">
            {hint}
          </p>
        )}
        <Button onClick={onStart} size="lg" className="mt-7">
          {buttonLabel}
        </Button>
      </div>
      <MascotReaction pose={mascotPose} alt={mascotAlt} width={168} float className="mx-auto lg:mx-0" />
    </div>
  );
}
