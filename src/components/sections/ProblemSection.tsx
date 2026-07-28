import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MascotImage } from "@/components/ui/MascotImage";
import { ProblemCard } from "./ProblemCard";
import { PROBLEMS } from "@/lib/content";

export function ProblemSection() {
  return (
    <section className="relative bg-gradient-to-b from-transparent via-soft/40 to-transparent py-14 sm:py-[72px] lg:py-28">
      <Container>
        <div className="max-w-2xl">
          <SectionLabel>ПРОБЛЕМА</SectionLabel>
          <SectionHeading className="mt-5">
            Первый опыт получить сложно, если все уже требуют опыт
          </SectionHeading>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Студенты часто ищут практику и первую работу через Telegram,
            социальные сети и случайные объявления, где сложно проверить
            работодателя и понять, подходит ли возможность их специальности.
          </p>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((item, i) => (
            <ProblemCard key={item.title} item={item} alt={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-8 flex items-center gap-4 sm:mt-10">
          <MascotImage
            pose="thinking"
            alt="Талисман SkillBridge KZ задумчиво размышляет над проблемой поиска первой работы"
            width={92}
            className="w-[76px] sm:w-[92px]"
          />
          <p className="max-w-sm text-sm leading-relaxed text-ink/55">
            Именно поэтому SkillBridge KZ строит один безопасный процесс —
            вместо десятка разрозненных каналов.
          </p>
        </div>
      </Container>
    </section>
  );
}
