"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MascotImage } from "@/components/ui/MascotImage";
import { Button } from "@/components/ui/Button";
import { ABOUT_FEATURES } from "@/lib/content";

const bubblePositions = [
  "left-[-4%] top-[6%] sm:left-[-10%]",
  "right-[-4%] top-[20%] sm:right-[-12%]",
  "left-[-8%] bottom-[16%] sm:left-[-14%]",
  "right-[-2%] bottom-[0%] sm:right-[-8%]",
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-14 sm:py-[72px] lg:py-28">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        {/* Left: mascot with orbiting feature bubbles */}
        <div className="relative order-2 mx-auto w-full max-w-[420px] lg:order-1 lg:max-w-none">
          <div className="relative aspect-square w-full max-w-[380px] mx-auto">
            <div
              aria-hidden="true"
              className="absolute inset-[10%] rounded-[50%] bg-gradient-to-tr from-tint to-soft"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <MascotImage
                pose="laptop"
                alt="Талисман SkillBridge KZ работает за ноутбуком"
                width={280}
                float
                className="w-[56%]"
              />
            </div>

            {ABOUT_FEATURES.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`absolute ${bubblePositions[i]} w-[168px] rounded-2xl border border-border bg-white/95 p-3 shadow-card backdrop-blur-sm sm:w-[180px]`}
                >
                  <span className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-soft text-primary">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <p className="text-[13px] font-medium leading-snug text-ink">
                    {feature.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: copy */}
        <div className="order-1 lg:order-2">
          <SectionLabel>О ПРОЕКТЕ</SectionLabel>
          <SectionHeading className="mt-5">
            Безопасный старт для будущих специалистов
          </SectionHeading>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            SkillBridge KZ помогает студентам колледжей безопасно находить
            практику и первую работу, а работодателям — находить
            мотивированных молодых специалистов.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/60">
            Каждый профиль проходит подтверждение колледжа, а каждый
            работодатель — модерацию. Это делает поиск первого опыта
            прозрачным и безопасным для всех сторон.
          </p>
          <Button href="#how-it-works" variant="secondary" size="md" className="mt-7">
            Подробнее о проекте
            <ArrowRight size={17} aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
