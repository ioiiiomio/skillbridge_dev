import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MascotImage } from "@/components/ui/MascotImage";
import { PLATFORM_URL, PARTNER_EMAIL } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section id="final-cta" className="relative py-14 sm:py-[72px] lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-primary px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute -top-20 left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-mascot/25 blur-3xl"
          />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="text-center lg:text-left">
              <h2 className="text-balance font-heading text-[32px] font-extrabold leading-[1.1] text-white sm:text-[40px] lg:text-[44px]">
                Готовы сделать первый шаг?
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[17px] leading-relaxed text-white/85 lg:mx-0">
                Создайте профиль и начните искать практику, стажировку или
                первую работу у проверенных работодателей.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Button href={PLATFORM_URL} variant="white" size="lg" fullWidthOnMobile>
                  Открыть платформу
                </Button>
                <Button
                  href={`mailto:${PARTNER_EMAIL}`}
                  variant="outlineWhite"
                  size="lg"
                  fullWidthOnMobile
                >
                  Стать партнёром
                </Button>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[220px] lg:max-w-none lg:justify-self-end">
              <MascotImage
                pose="run"
                alt="Талисман SkillBridge KZ радостно прыгает от волнения"
                width={240}
                float
                className="w-[180px] sm:w-[220px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
