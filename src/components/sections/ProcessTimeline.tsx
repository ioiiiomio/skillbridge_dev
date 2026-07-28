"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/content";

const WAVE_TOP = ["46%", "18%", "74%", "18%", "46%"];
const WAVE_LEFT = ["2%", "26%", "50%", "74%", "98%"];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();

  return (
    <div ref={containerRef}>
      {/* Desktop / tablet: horizontal wave timeline */}
      <div className="relative hidden lg:block">
        <svg
          aria-hidden="true"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          className="absolute left-0 right-0 top-[27px] h-14 w-full"
        >
          <path
            d="M20,50 C 175,15 225,85 300,50 C 375,15 425,85 500,50 C 575,15 625,85 700,50 C 775,15 825,85 900,50 C 940,35 960,42 980,50"
            fill="none"
            stroke="#0B5FFF"
            strokeOpacity="0.22"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="1 11"
          />
        </svg>

        {!reduceMotion && (
          <motion.span
            aria-hidden="true"
            className="absolute top-3 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center text-mascot drop-shadow-[0_2px_6px_rgba(255,216,77,0.6)]"
            initial={{ left: "2%", top: "46%", opacity: 0 }}
            animate={
              inView
                ? { left: WAVE_LEFT, top: WAVE_TOP, opacity: 1 }
                : { opacity: 0 }
            }
            transition={{ duration: 2.4, ease: "easeInOut", delay: 0.3 }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M12 1.5l2.94 6.62 7.17.7-5.4 4.86 1.6 7.06L12 17.1l-6.31 3.64 1.6-7.06-5.4-4.86 7.17-.7L12 1.5z" />
            </svg>
          </motion.span>
        )}

        <div className="relative grid grid-cols-5 gap-4 pt-1">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-gradient-primary text-white shadow-button">
                  <Icon size={22} aria-hidden="true" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] font-bold text-primary shadow-card">
                    {step.order}
                  </span>
                </span>
                <p className="mt-4 max-w-[168px] text-[14.5px] font-semibold leading-snug text-ink">
                  {step.title}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Mobile: vertical connected timeline */}
      <div className="relative flex flex-col gap-7 lg:hidden">
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-6 top-6 w-px border-l-2 border-dashed border-primary/25"
        />
        {PROCESS_STEPS.map((step, i) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="relative flex items-center gap-4"
            >
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white bg-gradient-primary text-white shadow-button">
                <Icon size={19} aria-hidden="true" />
                <span className="absolute -right-1 -top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-white text-[10px] font-bold text-primary shadow-card">
                  {step.order}
                </span>
              </span>
              <p className="text-[15px] font-semibold leading-snug text-ink">
                {step.title}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
