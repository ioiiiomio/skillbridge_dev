import { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  children: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  size?: "md" | "lg";
  className?: string;
  id?: string;
}

export function SectionHeading({
  children,
  align = "left",
  tone = "light",
  size = "md",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={cn(
        "font-heading font-bold tracking-tight text-balance",
        size === "lg"
          ? "text-[32px] leading-[1.1] sm:text-[40px] lg:text-[44px]"
          : "text-[28px] leading-[1.15] sm:text-[34px] lg:text-[40px]",
        align === "center" && "text-center",
        tone === "light" ? "text-ink" : "text-white",
        className
      )}
    >
      {children}
    </h2>
  );
}
