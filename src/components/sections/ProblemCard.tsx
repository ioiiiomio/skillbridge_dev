import type { ProblemItem } from "@/lib/types";
import { cn } from "@/lib/cn";

interface ProblemCardProps {
  item: ProblemItem;
  alt?: boolean;
}

export function ProblemCard({ item, alt = false }: ProblemCardProps) {
  const Icon = item.icon;
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover sm:p-7",
        alt ? "bg-soft" : "bg-white"
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-primary transition-transform duration-300 group-hover:scale-x-100"
      />
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-ai text-white shadow-button">
        <Icon size={20} aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-heading text-[17px] font-bold leading-snug text-ink">
        {item.title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-ink/60">
        {item.description}
      </p>
    </div>
  );
}
