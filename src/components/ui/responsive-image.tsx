
import React from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: number;
  backgroundSize?: string;
  backgroundPosition?: string;
  mobileBackgroundSize?: string;
  mobileBackgroundPosition?: string;
  onClick?: () => void;
}

export function ResponsiveImage({
  src,
  alt,
  className,
  aspectRatio = 16 / 9,
  backgroundSize = "cover",
  backgroundPosition = "center",
  mobileBackgroundSize,
  mobileBackgroundPosition,
  onClick,
}: ResponsiveImageProps) {
  const isMobile = useIsMobile();
  
  const style = {
    backgroundImage: `url(${src})`,
    backgroundSize: isMobile && mobileBackgroundSize ? mobileBackgroundSize : backgroundSize,
    backgroundPosition: isMobile && mobileBackgroundPosition ? mobileBackgroundPosition : backgroundPosition,
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className={cn("w-full h-full cursor-pointer", className)}
      style={style}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      aria-label={onClick ? `View ${alt}` : undefined}
      title={alt}
    >
      <span className="sr-only">{alt}</span>
    </div>
  );
}

export function ResponsiveImageWithAspectRatio({
  aspectRatio = 16 / 9,
  ...props
}: ResponsiveImageProps) {
  return (
    <AspectRatio ratio={aspectRatio} className="w-full">
      <ResponsiveImage {...props} />
    </AspectRatio>
  );
}
