import React, { useEffect, useState } from 'react';
import { Play, Pause } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ResponsiveImageWithAspectRatio } from "@/components/ui/responsive-image";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSlide {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  mobileBackgroundSize?: string;
  mobileBackgroundPosition?: string;
  overlayColor?: string;
  textPosition?: "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right";
  graphicType?: "hearts" | "stars" | "confetti" | "balloons" | "waves" | "circles" | "none";
  textColor?: string;
  highlightColor?: string;
}

export default function VideoAnimation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: ImageSlide[] = [
    { 
      src: "/lovable-uploads/63e0be3e-19a4-4297-beb8-83ceb7e9b673.png", 
      alt: "Tayo and his wife in matching outfits",
      title: "Perfect Match",
      subtitle: "A beautiful journey together",
      backgroundSize: "cover",
      backgroundPosition: "center",
      textPosition: "bottom-left",
      overlayColor: "rgba(0,0,0,0.4)",
      graphicType: "hearts",
      textColor: "#ffffff",
      highlightColor: "#ea384c"
    },
    { 
      src: "/lovable-uploads/4f033b12-c280-42db-b005-d199db3042a1.png", 
      alt: "Tayo and his wife on a boat ride",
      title: "Adventure Awaits",
      subtitle: "Sailing through life's journey",
      backgroundSize: "cover",
      backgroundPosition: "center 30%",
      textPosition: "top-right",
      overlayColor: "rgba(0,0,0,0.3)",
      graphicType: "waves",
      textColor: "#ffffff",
      highlightColor: "#33C3F0"
    },
    { 
      src: "/lovable-uploads/00fcf5ad-9536-4e93-b8e2-dd36586b133e.png", 
      alt: "Tayo celebrating his birthday",
      title: "Happy Birthday!",
      subtitle: "May 23rd - Celebrating You",
      backgroundSize: "cover", 
      backgroundPosition: "center",
      mobileBackgroundSize: "contain",
      textPosition: "bottom-right",
      overlayColor: "rgba(155,135,245,0.4)",
      graphicType: "balloons",
      textColor: "#ffffff",
      highlightColor: "#D6BCFA"
    },
    { 
      src: "/lovable-uploads/24cdb714-b6a5-4d79-ad3e-610bdb4d1e35.png", 
      alt: "Tayo and his wife looking at each other",
      title: "Love & Laughter",
      subtitle: "Creating memories that last forever",
      backgroundSize: "cover",
      backgroundPosition: "center",
      textPosition: "top-right",
      overlayColor: "rgba(255,100,121,0.3)",
      graphicType: "stars",
      textColor: "#ffffff",
      highlightColor: "#FEC6A1" 
    },
    { 
      src: "/lovable-uploads/10fc4752-30d5-4743-ae6a-c0c0d3b4c2f8.png",
      alt: "Tayo special moment",
      title: "Cherished Moments",
      subtitle: "Every second counts",
      backgroundSize: "cover",
      backgroundPosition: "center",
      mobileBackgroundSize: "cover",
      mobileBackgroundPosition: "center 30%",
      textPosition: "bottom-center",
      overlayColor: "rgba(249,115,22,0.4)",
      graphicType: "circles",
      textColor: "#ffffff",
      highlightColor: "#F97316"
    },
    { 
      src: "/lovable-uploads/1605e45b-384c-4950-8f6f-90cf99f7106c.png",
      alt: "Tayo and his wife in airplane",
      title: "Sky High Dreams",
      subtitle: "Exploring the world together",
      backgroundSize: "cover",
      backgroundPosition: "center",
      mobileBackgroundPosition: "top center",
      textPosition: "center-left",
      overlayColor: "rgba(51,195,240,0.4)",
      graphicType: "circles",
      textColor: "#ffffff",
      highlightColor: "#33C3F0"
    },
    {
      src: "/lovable-uploads/742c3297-f39c-4f42-8060-6348dcee0450.png",
      alt: "Tayo portrait",
      title: "The Man of the Hour",
      subtitle: "Celebrating another year of awesomeness",
      backgroundSize: "cover",
      backgroundPosition: "center",
      textPosition: "bottom-left",
      overlayColor: "rgba(139,92,246,0.4)",
      graphicType: "confetti",
      textColor: "#ffffff",
      highlightColor: "#8B5CF6"
    },
    {
      src: "/lovable-uploads/50c5a0ca-edde-41ba-9bf3-3ed3f106f973.png",
      alt: "Tayo and his wife special moment",
      title: "Special Moments",
      subtitle: "Every day is a gift with you",
      backgroundSize: "cover",
      backgroundPosition: "center",
      textPosition: "center",
      overlayColor: "rgba(249,115,22,0.3)",
      graphicType: "circles",
      textColor: "#ffffff",
      highlightColor: "#F97316"
    }
  ];

  useEffect(() => {
    let interval: number;
    
    if (isPlaying) {
      interval = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  // Generate graphics elements based on the type
  const renderGraphics = (type?: string, highlightColor?: string) => {
    const color = highlightColor || "#9b87f5";
    
    switch(type) {
      case "hearts":
        return (
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-primary-foreground opacity-80"
                initial={{ scale: 0, rotate: 0, x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` }}
                animate={{ 
                  scale: [0, 1, 0.8], 
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
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-yellow-400"
                initial={{ scale: 0, x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%` }}
                animate={{ 
                  scale: [0, 1.2, 0], 
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
            {[...Array(20)].map((_, i) => {
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
                    opacity: [1, 1, 0],
                    rotate: Math.random() * 360
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
            {[...Array(5)].map((_, i) => {
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
                    opacity: [0, 1, 1, 0],
                    rotate: [0, 10, -10, 5]
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
            {[...Array(8)].map((_, i) => {
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
                    scale: [0, 1.5, 2],
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
      default:
        return null;
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Moments in Motion
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A celebration of life's beautiful journey captured in motion
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden shadow-soft"
          >
            {isPlaying ? (
              <AnimatePresence mode="wait">
                <motion.div 
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="relative aspect-w-16 aspect-h-9"
                >
                  <div className="relative w-full h-full">
                    <ResponsiveImageWithAspectRatio
                      src={slides[currentSlide].src}
                      alt={slides[currentSlide].alt}
                      aspectRatio={16/9}
                      backgroundSize={slides[currentSlide].backgroundSize}
                      backgroundPosition={slides[currentSlide].backgroundPosition}
                      mobileBackgroundSize={slides[currentSlide].mobileBackgroundSize}
                      mobileBackgroundPosition={slides[currentSlide].mobileBackgroundPosition}
                      className="transition-opacity duration-1000"
                    />
                    
                    {/* Overlay with gradient */}
                    <div 
                      className="absolute inset-0 pointer-events-none" 
                      style={{ backgroundColor: slides[currentSlide].overlayColor || 'rgba(0,0,0,0.2)' }}
                    />
                    
                    {/* Dynamic graphics */}
                    {renderGraphics(slides[currentSlide].graphicType, slides[currentSlide].highlightColor)}
                    
                    {/* Text overlay - Positioned better to avoid covering faces */}
                    <div className={`absolute inset-0 flex flex-col p-6 z-20 ${getTextPositionClasses(slides[currentSlide].textPosition)}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="bg-black/30 backdrop-blur-sm p-3 rounded-lg max-w-sm"
                        style={{ color: slides[currentSlide].textColor || "white" }}
                      >
                        {slides[currentSlide].title && (
                          <motion.h3 
                            className="font-heading text-xl md:text-2xl font-bold mb-1"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                          >
                            <span className="text-shadow-lg">{slides[currentSlide].title}</span>
                          </motion.h3>
                        )}
                        {slides[currentSlide].subtitle && (
                          <motion.p 
                            className="text-xs md:text-sm"
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            style={{ color: slides[currentSlide].textColor || "white" }}
                          >
                            <span className="text-shadow-sm">{slides[currentSlide].subtitle}</span>
                          </motion.p>
                        )}
                        
                        {/* Removed the animated timeline indicator */}
                      </motion.div>
                    </div>
                    
                    {/* Slide number indicator */}
                    <div className="absolute bottom-4 left-4 z-30 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs">
                      {currentSlide + 1} / {slides.length}
                    </div>
                    
                    {/* Added celebration text for random slides */}
                    {currentSlide % 2 === 0 && (
                      <motion.div 
                        className="absolute top-4 left-4 z-30 transform -rotate-12"
                        initial={{ scale: 0, rotate: -30 }}
                        animate={{ scale: 1, rotate: -12 }}
                        transition={{ delay: 0.7, type: "spring" }}
                      >
                        <span 
                          className="inline-block px-4 py-2 font-bold text-white rounded-lg"
                          style={{ 
                            backgroundColor: slides[currentSlide].highlightColor || "#9b87f5",
                            boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                          }}
                        >
                          {currentSlide === 0 ? "Cheers!" : currentSlide === 2 ? "Hooray!" : "Celebrate!"}
                        </span>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            ) : (
              <Carousel className="w-full">
                <CarouselContent>
                  {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="relative w-full h-full">
                          <ResponsiveImageWithAspectRatio
                            src={slide.src}
                            alt={slide.alt}
                            aspectRatio={16/9}
                            backgroundSize={slide.backgroundSize}
                            backgroundPosition={slide.backgroundPosition}
                            mobileBackgroundSize={slide.mobileBackgroundSize}
                            mobileBackgroundPosition={slide.mobileBackgroundPosition}
                          />
                          
                          {/* Overlay with gradient */}
                          <div 
                            className="absolute inset-0 pointer-events-none" 
                            style={{ backgroundColor: slide.overlayColor || 'rgba(0,0,0,0.2)' }}
                          />
                          
                          {/* Dynamic graphics for carousel view too */}
                          {renderGraphics(slide.graphicType, slide.highlightColor)}
                          
                          {/* Text overlay with improved styling */}
                          <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-white ${getTextPositionClasses(slide.textPosition)}`}>
                            <div className="bg-black/30 backdrop-blur-sm p-3 rounded-lg">
                              {slide.title && (
                                <h3 className="font-heading text-xl md:text-3xl font-bold mb-1 text-shadow-lg">
                                  {slide.title}
                                </h3>
                              )}
                              {slide.subtitle && (
                                <p className="text-xs md:text-sm text-shadow-sm">
                                  {slide.subtitle}
                                </p>
                              )}
                            </div>
                          </div>
                          
                          {/* Slide number for carousel */}
                          <div className="absolute bottom-2 right-2 z-10 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs">
                            {index + 1} / {slides.length}
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="lg:-left-12 left-2" />
                <CarouselNext className="lg:-right-12 right-2" />
              </Carousel>
            )}
            
            <button
              onClick={togglePlayback}
              className={`absolute bottom-4 right-4 z-30 p-3 rounded-full transition-all duration-300 ${isPlaying ? 'bg-white text-primary' : 'bg-primary text-white'}`}
            >
              {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
          </motion.div>
        </div>
        
        {/* Added instructions text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6 text-gray-600 text-sm"
        >
          {isPlaying ? 
            "Enjoying the slideshow! Click pause to browse manually." : 
            "Click play to start an automatic slideshow of Tayo's special moments."}
        </motion.div>
      </div>
    </section>
  );
}

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
