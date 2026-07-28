import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MascotImage } from "@/components/ui/MascotImage";
import { CatalogueGameCard } from "@/components/games/CatalogueGameCard";
import { GAME_CATALOGUE } from "@/data/games/catalogue";

export const metadata = {
  title: "Карьерные игры — SkillBridge KZ",
  description:
    "Короткие карьерные игры помогают лучше понять свои интересы, навыки и готовность к собеседованию.",
};

export default function GamesCataloguePage() {
  return (
    <div>
      <Header />
      <main className="py-14 sm:py-[72px] lg:py-24">
        <Container>
          <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-xl">
              <SectionLabel>ИНТЕРАКТИВНЫЕ ИНСТРУМЕНТЫ</SectionLabel>
              <SectionHeading className="mt-5">Проверь себя перед первым откликом</SectionHeading>
              <p className="mt-5 text-lg leading-relaxed text-ink/70">
                Короткие карьерные игры помогают лучше понять свои интересы, навыки и готовность к
                собеседованию.
              </p>
            </div>
            <MascotImage
              pose="book"
              alt="Талисман SkillBridge KZ читает книгу, готовясь к карьерным играм"
              width={132}
              className="hidden w-[110px] shrink-0 sm:block lg:w-[132px]"
            />
          </div>

          <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {GAME_CATALOGUE.map((game) => (
              <CatalogueGameCard key={game.route} game={game} />
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
