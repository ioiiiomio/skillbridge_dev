import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MascotImage } from "@/components/ui/MascotImage";
import { VideoReviewsCarousel } from "./VideoReviewsCarousel";
import { TextReviewsMarquee } from "./TextReviewsMarquee";

export function ResultsSection() {
  return (
      <section id="results" className="relative py-14 sm:py-[72px] lg:py-28">
        <Container>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionLabel>РЕЗУЛЬТАТЫ</SectionLabel>
              <SectionHeading className="mt-5">
                Истории первых карьерных шагов
              </SectionHeading>
            </div>
            <MascotImage
                pose="excited"
                alt="Талисман SkillBridge KZ радостно празднует первые успехи студентов"
                width={110}
                className="hidden w-[100px] shrink-0 sm:block"
            />
          </div>

          <div className="mt-11">
            <VideoReviewsCarousel />
          </div>
        </Container>

        <div className="mt-12">
          <TextReviewsMarquee />
        </div>

        <Container>
          <p className="mt-6 text-center text-sm text-ink/45">
            Отзывы собраны среди участников пилотного тестирования SkillBridge KZ.
          </p>
        </Container>
      </section>
  );
}