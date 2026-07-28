"use client";

import { TEXT_TESTIMONIALS } from "@/lib/content";

export function TextReviewsMarquee() {
    // duplicated so the CSS loop is seamless
    const items = [...TEXT_TESTIMONIALS, ...TEXT_TESTIMONIALS];

    return (
        <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
                {items.map((review, i) => (
                    <div
                        key={i}
                        aria-hidden={i >= TEXT_TESTIMONIALS.length}
                        className="w-[300px] shrink-0 rounded-2xl border border-border bg-white p-5 shadow-card sm:w-[340px]"
                    >
                        <p className="text-sm leading-relaxed text-ink/70">{review.text}</p>
                        <p className="mt-4 font-heading text-sm font-bold text-ink">{review.studentName}</p>
                        <p className="text-xs text-ink/50">{review.college}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}