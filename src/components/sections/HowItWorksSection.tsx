import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessTimeline } from "./ProcessTimeline";

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-14 sm:py-[72px] lg:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel align="center" className="mx-auto flex w-fit">
            КАК ЭТО РАБОТАЕТ
          </SectionLabel>
          <SectionHeading align="center" className="mt-5">
            От профиля до первой практики — пять понятных шагов
          </SectionHeading>
        </div>

        <div className="mt-14 sm:mt-16">
          <ProcessTimeline />
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center text-[15px] leading-relaxed text-ink/55 sm:mt-16">
          Студент получает безопасный старт. Работодатель — подходящего
          кандидата. Колледж — прозрачный процесс прохождения практики.
        </p>
      </Container>
    </section>
  );
}
