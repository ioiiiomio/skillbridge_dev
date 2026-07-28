import type { PartnerCategory } from "@/lib/types";

interface PartnerCategoryCardProps {
  category: PartnerCategory;
}

export function PartnerCategoryCard({ category }: PartnerCategoryCardProps) {
  const Icon = category.icon;
  return (
    <div className="group rounded-2xl border border-white/70 bg-white/90 p-6 shadow-glass backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:p-7">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-button">
        <Icon size={22} aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-heading text-lg font-bold text-ink">
        {category.title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-ink/60">
        {category.description}
      </p>
    </div>
  );
}
