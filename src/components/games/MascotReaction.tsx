import { MascotImage, type MascotPose } from "@/components/ui/MascotImage";
import { cn } from "@/lib/cn";

interface MascotReactionProps {
  pose: MascotPose;
  alt: string;
  width?: number;
  className?: string;
  float?: boolean;
}

export function MascotReaction({ pose, alt, width = 120, className, float }: MascotReactionProps) {
  return (
    <MascotImage
      pose={pose}
      alt={alt}
      width={width}
      float={float}
      className={cn("shrink-0", className)}
    />
  );
}
