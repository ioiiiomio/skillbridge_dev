import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MascotImage } from "@/components/ui/MascotImage";
import { FAQAccordion } from "./FAQAccordion";
import { FAQ_ITEMS } from "@/lib/content";

export function FAQSection() {
  return (
    <section id="faq" className="relative py-14 sm:py-[72px] lg:py-28">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <SectionLabel>FAQ</SectionLabel>
          <SectionHeading className="mt-5">
            Часто задаваемые вопросы
          </SectionHeading>
          <p className="mt-5 max-w-sm text-[17px] leading-relaxed text-ink/70">
            Если ответа на ваш вопрос здесь нет, напишите нам — мы поможем
            разобраться.
          </p>
          <MascotImage
            pose="thinking"
            alt="Талисман SkillBridge KZ задумчиво размышляет над вопросом"
            width={160}
            className="mt-8 w-[130px] sm:w-[150px] lg:w-[160px]"
          />
        </div>

        <FAQAccordion items={FAQ_ITEMS} />
      </Container>
    </section>
  );
}
