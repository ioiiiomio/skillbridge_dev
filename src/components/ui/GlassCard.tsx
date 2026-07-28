import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padded?: boolean;
}

/**
 * Elevated glass surface — used sparingly for floating labels and
 * AI-related elements, per brand direction. Includes a solid-color
 * fallback so text stays readable even without backdrop-filter support.
 */
export function GlassCard({
  children,
  className,
  padded = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/60 bg-white/90 shadow-glass backdrop-blur-xl supports-[backdrop-filter]:bg-white/70",
        padded && "p-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
