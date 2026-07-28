"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, GraduationCap, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { MascotImage } from "@/components/ui/MascotImage";
import { HERO_TRUST_ITEMS } from "@/lib/content";
import { PLATFORM_URL } from "@/lib/constants";

const floatingCards = [
  { icon: ShieldCheck, label: "Проверенный работодатель", position: "left-[-8%] top-[14%] sm:left-[-4%]" },
  { icon: Sparkles, label: "AI-подбор вакансий", position: "right-[-6%] top-[6%] sm:right-[-2%]" },
  { icon: GraduationCap, label: "Поддержка колледжа", position: "left-[2%] bottom-[2%] sm:left-[6%]" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-14 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28">
      {/* Ambient background gradient + soft blobs, decorative only */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-bg" />
        <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-radial-soft opacity-80" />
        <div className="absolute top-24 right-[-120px] h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        {/* Left: copy */}
        <motion.div
          initial="hidden"
          animate="show"
          className="max-w-xl"
        >
          <motion.div custom={0} variants={fadeUp}>
            <SectionLabel>ПЛАТФОРМА ДЛЯ ПЕРВОГО КАРЬЕРНОГО ШАГА</SectionLabel>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            className="mt-6 text-balance font-heading text-[38px] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-[46px] lg:text-[54px]"
          >
            Твой путь к первой работе начинается здесь
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="mt-5 text-lg leading-relaxed text-ink-soft text-ink/70 sm:text-xl"
          >
            SkillBridge KZ помогает студентам колледжей безопасно находить
            практику, стажировки и первую работу у проверенных работодателей.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={PLATFORM_URL}
              size="lg"
              id="hero-cta"
              fullWidthOnMobile
            >
              Попробовать SkillBridge
            </Button>
            <Button href="#how-it-works" variant="secondary" size="lg" fullWidthOnMobile>
              Как это работает
            </Button>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
          >
            {HERO_TRUST_ITEMS.map((item) => (
              <span key={item} className="flex items-center gap-1.5 text-sm font-medium text-ink/60">
                <Check size={16} className="text-success" aria-hidden="true" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: mascot composition */}
        <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center lg:max-w-none">
          <div className="relative aspect-square w-full max-w-[420px]">
            {/* Organic light-blue backdrop shape */}
            <div
              aria-hidden="true"
              className="absolute inset-[6%] rounded-[45%_55%_60%_40%/50%_45%_55%_50%] bg-gradient-to-br from-soft to-tint"
            />
            {/* Dashed orbit ring */}
            <svg
              aria-hidden="true"
              viewBox="0 0 400 400"
              className="absolute inset-0 h-full w-full motion-safe:animate-spinSlow"
            >
              <circle
                cx="200"
                cy="200"
                r="176"
                fill="none"
                stroke="#0B5FFF"
                strokeOpacity="0.18"
                strokeWidth="1.5"
                strokeDasharray="2 10"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex items-center justify-center">
              <MascotImage
                pose="wave"
                alt="Талисман SkillBridge KZ — дружелюбная звезда в синем рюкзаке приветственно машет рукой"
                width={300}
                float
                glow
                priority
                className="w-[62%] sm:w-[58%]"
              />
            </div>

            {floatingCards.map(({ icon: Icon, label, position }) => (
              <div
                key={label}
                className={`absolute ${position} hidden animate-fadeUp rounded-2xl border border-white/60 bg-white/90 px-3.5 py-2.5 shadow-glass backdrop-blur-xl sm:flex sm:items-center sm:gap-2`}
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-soft text-primary">
                  <Icon size={16} aria-hidden="true" />
                </span>
                <span className="whitespace-nowrap text-[13px] font-semibold text-ink">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
