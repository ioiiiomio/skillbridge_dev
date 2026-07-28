import { cn } from "@/lib/cn";

interface SectionLabelProps {
  children: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}

export function SectionLabel({
  children,
  align = "left",
  tone = "light",
  className,
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-[0.14em] font-sans",
        align === "center" && "mx-auto",
        tone === "light"
          ? "border-border bg-soft text-primary"
          : "border-white/20 bg-white/10 text-white backdrop-blur-sm",
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "light" ? "bg-primary" : "bg-mascot"
        )}
        aria-hidden="true"
      />
      {children}
    </div>
  );
}
