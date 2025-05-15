
import React from "react";
import { motion } from "framer-motion";

interface BackgroundTextureProps {
  pattern?: "confetti" | "dots" | "waves" | "grid" | "noise" | "stars";
  opacity?: number;
  color?: string;
  className?: string;
}

export function BackgroundTexture({
  pattern = "confetti",
  opacity = 0.15,
  color = "#9b87f5",
  className
}: BackgroundTextureProps) {
  const getPatternStyles = () => {
    // Base style with opacity
    const baseStyle = {
      opacity,
      mixBlendMode: "overlay" as const,
    };
    
    switch(pattern) {
      case "dots":
        return {
          ...baseStyle,
          backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        };
      case "waves":
        return {
          ...baseStyle,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${encodeURIComponent(color)}' fill-opacity='0.4'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        };
      case "grid":
        return {
          ...baseStyle,
          backgroundImage: `linear-gradient(to right, ${color} 1px, transparent 1px), linear-gradient(to bottom, ${color} 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        };
      case "stars":
        return {
          ...baseStyle,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8 0l1.5 4.5H15l-3.5 3.5L13 15 8 11l-5 4 1.5-7L0 4.5h5.5L8 0z' fill='${encodeURIComponent(color)}' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        };
      case "noise":
        // This is a simplified noise pattern (actual noise would require canvas or a pre-generated image)
        return {
          ...baseStyle,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        };
      case "confetti":
      default:
        return {
          ...baseStyle,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${encodeURIComponent(color)}' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM6.2 6.2c1.93-1.93 5.05-1.93 6.98 0 1.93 1.93 1.93 5.05 0 6.98-1.93 1.93-5.05 1.93-6.98 0-1.93-1.93-1.93-5.05 0-6.98zm32.6 7.78a8 8 0 0 1 0 11.31c-3.12 3.12-8.19 3.12-11.31 0a8 8 0 0 1 0-11.31c3.12-3.12 8.19-3.12 11.31 0zm-7-7a8 8 0 0 1 0-11.31c3.12-3.12 8.19-3.12 11.31 0a8 8 0 0 1 0 11.31c-3.12 3.12-8.19 3.12-11.31 0z' /%3E%3C/g%3E%3C/svg%3E")`,
        };
    }
  };
  
  return (
    <motion.div
      className={`absolute inset-0 pointer-events-none z-0 ${className || ''}`}
      style={getPatternStyles()}
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      transition={{ duration: 1.5 }}
    />
  );
}
