"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { VIDEO_TESTIMONIALS } from "@/lib/content";

export function VideoReviewsCarousel() {
    const trackRef = useRef<HTMLDivElement>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const count = VIDEO_TESTIMONIALS.length;

    const scrollToIndex = useCallback(
        (index: number) => {
            const track = trackRef.current;
            if (!track) return;
            const clamped = Math.max(0, Math.min(index, count - 1));
            const card = track.children[clamped] as HTMLElement | undefined;
            if (card) {
                track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
            }
        },
        [count]
    );

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        let frame: number;
        const onScroll = () => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(() => {
                const children = Array.from(track.children) as HTMLElement[];
                let closest = 0;
                let closestDist = Infinity;
                children.forEach((child, i) => {
                    const dist = Math.abs(child.offsetLeft - track.offsetLeft - track.scrollLeft);
                    if (dist < closestDist) {
                        closestDist = dist;
                        closest = i;
                    }
                });
                setActiveIndex(closest);
            });
        };
        track.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            track.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(frame);
        };
    }, []);

    const togglePlay = (index: number) => {
        const video = videoRefs.current[index];
        if (!video) return;

        // only one video plays at a time
        videoRefs.current.forEach((v, i) => {
            if (v && i !== index && !v.paused) v.pause();
        });

        if (video.paused) {
            video.play();
            setPlayingIndex(index);
        } else {
            video.pause();
            setPlayingIndex(null);
        }
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowRight") {
            e.preventDefault();
            scrollToIndex(activeIndex + 1);
        } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            scrollToIndex(activeIndex - 1);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-end gap-2 pb-5">
                <button
                    type="button"
                    onClick={() => scrollToIndex(activeIndex - 1)}
                    disabled={activeIndex === 0}
                    aria-label="Предыдущее видео"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
                >
                    <ChevronLeft size={20} aria-hidden="true" />
                </button>
                <button
                    type="button"
                    onClick={() => scrollToIndex(activeIndex + 1)}
                    disabled={activeIndex === count - 1}
                    aria-label="Следующее видео"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-ink transition-colors hover:border-primary hover:text-primary disabled:opacity-40"
                >
                    <ChevronRight size={20} aria-hidden="true" />
                </button>
            </div>

            <div
                ref={trackRef}
                role="region"
                aria-label="Видеоотзывы — слайдер"
                tabIndex={0}
                onKeyDown={onKeyDown}
                className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-5 pb-2"
            >
                {VIDEO_TESTIMONIALS.map((story, i) => (
                    <div
                        key={i}
                        role="group"
                        aria-label={`Слайд ${i + 1} из ${count}`}
                        className="relative flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-card sm:w-[320px]"
                    >
                        <div className="relative aspect-video bg-ink/5">
                            <video
                                ref={(el) => {
                                    videoRefs.current[i] = el;
                                }}
                                src={story.videoSrc}
                                poster={story.poster}
                                preload="none"
                                playsInline
                                controls={playingIndex === i}
                                onEnded={() => setPlayingIndex(null)}
                                onPause={() => setPlayingIndex((cur) => (cur === i ? null : cur))}
                                className="h-full w-full object-cover"
                            />
                            {playingIndex !== i && (
                                <button
                                    type="button"
                                    onClick={() => togglePlay(i)}
                                    aria-label={`Смотреть видео отзыв — ${story.studentName}`}
                                    className="absolute inset-0 z-10 flex items-center justify-center bg-ink/10 transition-colors hover:bg-ink/20"
                                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary shadow-card">
                    <Play size={20} fill="currentColor" aria-hidden="true" />
                  </span>
                                </button>
                            )}
                        </div>
                        <div className="p-5">
                            <p className="font-heading text-base font-bold text-ink">{story.studentName}</p>
                            <p className="mt-1 text-sm text-ink/55">{story.college}</p>
                            <p className="mt-3 text-[13px] font-semibold uppercase tracking-wide text-primary/70">
                                {story.speciality}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-5 flex items-center justify-center gap-2" role="tablist" aria-label="Навигация по видео">
                {VIDEO_TESTIMONIALS.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        role="tab"
                        aria-selected={activeIndex === i}
                        aria-label={`Перейти к слайду ${i + 1}`}
                        onClick={() => scrollToIndex(i)}
                        className={`h-2 rounded-full transition-all ${
                            activeIndex === i ? "w-6 bg-primary" : "w-2 bg-border"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}