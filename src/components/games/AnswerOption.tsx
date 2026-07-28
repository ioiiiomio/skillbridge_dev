import { Check } from "lucide-react";
import { cn } from "@/lib/cn";

interface AnswerOptionProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
  name: string;
}

export function AnswerOption({ label, selected, onSelect, name }: AnswerOptionProps) {
  return (
    <label
      className={cn(
        "flex min-h-[44px] cursor-pointer items-center gap-3 rounded-2xl border px-5 py-4 text-left text-[15px] font-medium transition-all duration-150",
        selected
          ? "border-primary bg-soft text-ink shadow-[0_0_0_1px_#0B5FFF]"
          : "border-border bg-surface text-ink/80 hover:border-primary/40 hover:bg-soft/60"
      )}
    >
      <input
        type="radio"
        name={name}
        checked={selected}
        onChange={onSelect}
        className="sr-only"
      />
      <span
        aria-hidden="true"
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
          selected ? "border-primary bg-primary text-white" : "border-border bg-white"
        )}
      >
        {selected && <Check size={12} strokeWidth={3} />}
      </span>
      {label}
    </label>
  );
}
