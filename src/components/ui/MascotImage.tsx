import Image from "next/image";
import { cn } from "@/lib/cn";

export type MascotPose =
  | "wave"
  | "laptop"
  | "thinking"
  | "point"
  | "book"
  | "excited"
  | "run"
  | "thumbsup"
  | "front";

const POSE_SRC: Record<MascotPose, string> = {
  wave: "/mascot/mascot-wave.png",
  laptop: "/mascot/mascot-laptop.png",
  thinking: "/mascot/mascot-thinking.png",
  point: "/mascot/mascot-point.png",
  book: "/mascot/mascot-book.png",
  excited: "/mascot/mascot-excited.png",
  run: "/mascot/mascot-run.png",
  thumbsup: "/mascot/mascot-thumbsup.png",
  front: "/mascot/mascot-front.png",
};

// Native aspect ratios of each cropped sprite (width / height),
// so Next/Image can reserve layout space without distorting the mascot.
const POSE_RATIO: Record<MascotPose, number> = {
  wave: 343 / 371,
  laptop: 334 / 358,
  thinking: 299 / 375,
  point: 342 / 372,
  book: 298 / 369,
  excited: 330 / 375,
  run: 325 / 379,
  thumbsup: 314 / 366,
  front: 374 / 452,
};

interface MascotImageProps {
  pose: MascotPose;
  alt: string;
  width: number;
  float?: boolean;
  glow?: boolean;
  priority?: boolean;
  className?: string;
}

export function MascotImage({
  pose,
  alt,
  width,
  float = false,
  glow = false,
  priority = false,
  className,
}: MascotImageProps) {
  const height = Math.round(width / POSE_RATIO[pose]);

  return (
    <div className={cn("relative inline-block", float && "motion-safe:animate-float", className)}>
      {glow && (
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 scale-90 rounded-full bg-mascot/25 blur-3xl"
        />
      )}
      <Image
        src={POSE_SRC[pose]}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full select-none"
        draggable={false}
      />
    </div>
  );
}
