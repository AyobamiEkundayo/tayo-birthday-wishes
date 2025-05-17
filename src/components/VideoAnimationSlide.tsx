
import React from "react";
import { motion } from "framer-motion";
import { useBackgroundImage } from "@/hooks/use-background-image";

// Helper function to determine text position classes based on the position prop
function getTextPositionClasses(position?: string) {
  switch(position) {
    case "top-left":
      return "justify-start items-start text-left";
    case "top-center":
      return "justify-start items-center text-center";
    case "top-right":
      return "justify-start items-end text-right";
    case "center-left":
      return "justify-center items-start text-left";
    case "center":
      return "justify-center items-center text-center";
    case "center-right":
      return "justify-center items-end text-right";
    case "bottom-left":
      return "justify-end items-start text-left";
    case "bottom-center":
      return "justify-end items-center text-center";
    case "bottom-right":
      return "justify-end items-end text-right";
    default:
      return "justify-center items-center text-center";
  }
}

interface GraphicProps {
  type?: string;
  color?: string;
  intensity?: "light" | "medium" | "heavy";
}

export function SlideGraphics({ type, color = "#9b87f5", intensity = "medium" }: GraphicProps) {
  const count = intensity === "light" ? 4 : intensity === "medium" ? 6 : 10;
  
  switch(type) {
    case "hearts":
      return (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {[...Array(count)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary-foreground opacity-80"
              initial={{ scale: 0, rotate: 0, x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` }}
              animate={{ 
                scale: [0, 1, 0], 
                rotate: [0, 10, -10, 0],
                opacity: [0, 0.8, 0] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4, 
                delay: i * 0.8,
                ease: "easeInOut" 
              }}
            >
              <span className="text-2xl md:text-4xl">❤️</span>
            </motion.div>
          ))}
        </div>
      );
    case "stars":
      return (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {[...Array(count)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-400"
              initial={{ scale: 0, x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` }}
              animate={{ 
                scale: [0, 1, 0], 
                opacity: [0, 1, 0] 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3, 
                delay: i * 0.6,
                ease: "easeInOut" 
              }}
            >
              <span className="text-xl md:text-3xl">⭐</span>
            </motion.div>
          ))}
        </div>
      );
    case "confetti":
      return (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {[...Array(Math.min(count * 3, 12))].map((_, i) => {
            const colors = ["#ea384c", "#9b87f5", "#D6BCFA", color, "#F97316"];
            const size = Math.random() * 8 + 4;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{ 
                  width: size, 
                  height: size,
                  backgroundColor: colors[i % colors.length]
                }}
                initial={{ 
                  x: `${50 + (Math.random() * 40 - 20)}%`, 
                  y: "-10%", 
                  opacity: 1 
                }}
                animate={{ 
                  y: "110%", 
                  x: `${50 + (Math.random() * 100 - 50)}%`,
                  opacity: [1, 1, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2.5 + Math.random() * 2, 
                  delay: i * 0.2,
                  ease: "easeInOut" 
                }}
              />
            );
          })}
        </div>
      );
    case "balloons":
      return (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {[...Array(Math.min(count, 5))].map((_, i) => {
            const emojis = ["🎈", "🎁", "🎂", "🎊", "🎉"];
            return (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  y: "120%", 
                  x: `${Math.random() * 100}%`, 
                  opacity: 1 
                }}
                animate={{ 
                  y: "-20%",
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 8, 
                  delay: i * 1.5,
                  ease: "easeInOut" 
                }}
              >
                <span className="text-3xl md:text-5xl">{emojis[i % emojis.length]}</span>
              </motion.div>
            );
          })}
        </div>
      );
    case "waves":
      return (
        <div className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none z-10 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 left-0 right-0"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ 
                repeat: Infinity, 
                duration: 10, 
                delay: i * 2,
                ease: "linear" 
              }}
              style={{
                height: `${10 + i*5}%`,
                bottom: `${i*5}%`,
                opacity: 0.2 - i*0.05,
                borderRadius: "50% 50% 0 0",
                backgroundColor: color
              }}
            />
          ))}
        </div>
      );
    case "circles":
      return (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {[...Array(Math.min(count, 5))].map((_, i) => {
            const size = 40 + Math.random() * 60;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full border-2 border-opacity-40"
                style={{ 
                  width: size, 
                  height: size,
                  borderColor: color
                }}
                initial={{ 
                  x: `${Math.random() * 100}%`, 
                  y: `${Math.random() * 100}%`, 
                  scale: 0,
                  opacity: 0 
                }}
                animate={{ 
                  scale: [0, 1.5, 0],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4 + Math.random() * 3, 
                  delay: i * 0.7,
                  ease: "easeOut" 
                }}
              />
            );
          })}
        </div>
      );
    case "birthday":
      return (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {/* Birthday text animation */}
          <motion.div 
            className="absolute top-4 left-0 right-0 flex justify-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {["H","A","P","P","Y","","B","I","R","T","H","D","A","Y","!"].map((letter, idx) => (
              <motion.span
                key={idx}
                className="inline-block font-bold text-xl md:text-3xl"
                style={{ 
                  color: letter === "!" ? "#ea384c" : "#9b87f5",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                  marginLeft: letter === "" ? "8px" : "0",
                }}
                animate={{ 
                  y: [0, -10, 0], 
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: idx * 0.1,
                  repeatDelay: 3
                }}
              >
                {letter === "" ? " " : letter}
              </motion.span>
            ))}
          </motion.div>
          
          {/* Birthday cake emoji with animation */}
          <motion.div
            className="absolute bottom-8 right-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1,
              scale: 1,
              y: [0, -5, 0]
            }}
            transition={{
              duration: 2,
              delay: 1,
              repeat: Infinity,
              repeatDelay: 5
            }}
          >
            <span className="text-4xl md:text-6xl filter drop-shadow-lg">🎂</span>
          </motion.div>
          
          {/* Confetti particles - limited for better performance */}
          {[...Array(8)].map((_, i) => {
            const colors = ["#ea384c", "#9b87f5", "#F97316", "#33C3F0", "#D6BCFA"];
            const size = Math.random() * 6 + 3;
            return (
              <motion.div
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{ 
                  width: size, 
                  height: size,
                  backgroundColor: colors[i % colors.length]
                }}
                initial={{ 
                  x: `${Math.random() * 100}%`, 
                  y: `${Math.random() * 100}%`, 
                  opacity: 0 
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3 + Math.random() * 2, 
                  delay: i * 0.3,
                  ease: "easeInOut" 
                }}
              />
            );
          })}
        </div>
      );
    default:
      return null;
  }
}

export interface VideoSlideProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  mobileBackgroundSize?: string;
  mobileBackgroundPosition?: string;
  textPosition?: "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right";
  overlayColor?: string;
  graphicType?: "hearts" | "stars" | "confetti" | "balloons" | "waves" | "circles" | "birthday" | "none";
  textColor?: string;
  highlightColor?: string;
  graphicIntensity?: "light" | "medium" | "heavy";
  slideNumber?: number;
  totalSlides?: number;
  showIndicator?: boolean;
  blurBackground?: boolean;
}

export default function VideoAnimationSlide({
  src,
  alt,
  title,
  subtitle,
  backgroundSize = "cover",
  backgroundPosition = "center",
  mobileBackgroundSize,
  mobileBackgroundPosition,
  overlayColor = "rgba(0,0,0,0.3)",
  textPosition = "center",
  graphicType = "none",
  textColor = "#ffffff",
  highlightColor = "#9b87f5",
  graphicIntensity = "medium",
  slideNumber,
  totalSlides,
  showIndicator = true,
  blurBackground = false
}: VideoSlideProps) {
  const { bgStyle } = useBackgroundImage({
    src,
    alt,
    backgroundSize,
    backgroundPosition,
    mobileBackgroundSize,
    mobileBackgroundPosition
  });

  return (
    <div className="relative w-full h-full">
      <div className="relative aspect-w-16 aspect-h-9">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-500 ${blurBackground ? "scale-105 blur-sm" : ""}`} 
          style={bgStyle}
        />
        
        {/* Overlay with gradient */}
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ backgroundColor: overlayColor }}
        />
        
        {/* Dynamic graphics */}
        <SlideGraphics 
          type={graphicType} 
          color={highlightColor} 
          intensity={graphicIntensity}
        />
        
        {/* Text overlay */}
        <div className={`absolute inset-0 flex flex-col p-6 z-20 ${getTextPositionClasses(textPosition)}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="backdrop-blur-sm bg-black/30 p-3 rounded-lg max-w-sm"
            style={{ color: textColor }}
          >
            {title && (
              <motion.h3 
                className="font-heading text-xl md:text-2xl font-bold mb-1"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <span className="text-shadow-lg">{title}</span>
              </motion.h3>
            )}
            {subtitle && (
              <motion.p 
                className="text-xs md:text-sm"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{ color: textColor }}
              >
                <span className="text-shadow-sm">{subtitle}</span>
              </motion.p>
            )}
          </motion.div>
        </div>
        
        {/* Slide number indicator */}
        {showIndicator && slideNumber !== undefined && totalSlides && (
          <div className="absolute bottom-4 left-4 z-30 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
            {slideNumber + 1} / {totalSlides}
          </div>
        )}
      </div>
    </div>
  );
}
