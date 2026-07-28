import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MascotImage } from "@/components/ui/MascotImage";
import { Button } from "@/components/ui/Button";
import { PartnerCategoryCard } from "./PartnerCategoryCard";
import { PARTNER_CATEGORIES } from "@/lib/content";
import { PARTNER_EMAIL } from "@/lib/constants";

// TODO: replace these neutral placeholders with real partner logos
// once colleges and employers are confirmed. Do not add fabricated brands.
const LOGO_PLACEHOLDER_COUNT = 5;

export function PartnersSection() {
  return (
    <section id="partners" className="relative py-14 sm:py-[72px] lg:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary to-accent px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-mascot/20 blur-3xl"
          />

          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
            <div>
              <SectionLabel tone="dark">СОТРУДНИЧЕСТВО</SectionLabel>
              <SectionHeading tone="dark" className="mt-5">
                Первую карьерную возможность невозможно создать в одиночку
              </SectionHeading>
              <p className="mt-5 text-[17px] leading-relaxed text-white/80">
                SkillBridge KZ развивается вместе с колледжами, работодателями
                и организациями, которые готовы инвестировать время и знания
                в будущее молодых специалистов.
              </p>

              <div className="mt-8 hidden lg:flex lg:items-end lg:gap-4">
                <MascotImage
                  pose="point"
                  alt="Талисман SkillBridge KZ указывает на категории партнёров"
                  width={150}
                  className="w-[130px] xl:w-[150px]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {PARTNER_CATEGORIES.map((category) => (
                <PartnerCategoryCard key={category.title} category={category} />
              ))}
            </div>
          </div>

          {/* Placeholder logo strip for future partner logos */}
          <div className="relative mt-14 border-t border-white/15 pt-8">
            <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.14em] text-white/50">
              Партнёры платформы
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {Array.from({ length: LOGO_PLACEHOLDER_COUNT }).map((_, i) => (
                <div
                  key={i}
                  aria-hidden="true"
                  className="flex h-12 w-28 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-[11px] font-semibold uppercase tracking-wide text-white/40"
                >
                  Logo
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-12 flex flex-col items-center gap-5 text-center">
            <p className="max-w-xl text-[17px] leading-relaxed text-white/85">
              Мы открыты к сотрудничеству с организациями, которые хотят дать
              студентам безопасный и честный старт.
            </p>
            <Button href={`mailto:${PARTNER_EMAIL}`} variant="white" size="lg">
              Стать партнёром
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
