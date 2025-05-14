
import React, { useEffect, useState } from 'react';
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ResponsiveImageWithAspectRatio } from "@/components/ui/responsive-image";
import { motion } from "framer-motion";

interface ImageSlide {
  src: string;
  alt: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  mobileBackgroundSize?: string;
  mobileBackgroundPosition?: string;
}

export default function VideoAnimation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: ImageSlide[] = [
    { 
      src: "/lovable-uploads/63e0be3e-19a4-4297-beb8-83ceb7e9b673.png", 
      alt: "Tayo and his wife in matching outfits",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    { 
      src: "/lovable-uploads/4f033b12-c280-42db-b005-d199db3042a1.png", 
      alt: "Tayo and his wife on a boat ride",
      backgroundSize: "cover",
      backgroundPosition: "center 30%"
    },
    { 
      src: "/lovable-uploads/00fcf5ad-9536-4e93-b8e2-dd36586b133e.png", 
      alt: "Tayo celebrating his birthday",
      backgroundSize: "cover", 
      backgroundPosition: "center",
      mobileBackgroundSize: "contain"
    },
    { 
      src: "/lovable-uploads/24cdb714-b6a5-4d79-ad3e-610bdb4d1e35.png", 
      alt: "Tayo and his wife looking at each other",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    { 
      src: "/lovable-uploads/1605e45b-384c-4950-8f6f-90cf99f7106c.png",
      alt: "Tayo and his wife in airplane",
      backgroundSize: "cover",
      backgroundPosition: "center",
      mobileBackgroundPosition: "top center"
    },
    {
      src: "/lovable-uploads/742c3297-f39c-4f42-8060-6348dcee0450.png",
      alt: "Tayo portrait",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    {
      src: "/lovable-uploads/50c5a0ca-edde-41ba-9bf3-3ed3f106f973.png",
      alt: "Tayo and his wife special moment",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }
  ];

  useEffect(() => {
    let interval: number;
    
    if (isPlaying) {
      interval = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 1500);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
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
              <div className="relative aspect-w-16 aspect-h-9">
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
              </div>
            ) : (
              <Carousel className="w-full">
                <CarouselContent>
                  {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <ResponsiveImageWithAspectRatio
                          src={slide.src}
                          alt={slide.alt}
                          aspectRatio={16/9}
                          backgroundSize={slide.backgroundSize}
                          backgroundPosition={slide.backgroundPosition}
                          mobileBackgroundSize={slide.mobileBackgroundSize}
                          mobileBackgroundPosition={slide.mobileBackgroundPosition}
                        />
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
              className={`absolute bottom-4 right-4 z-10 p-3 rounded-full transition-all duration-300 ${isPlaying ? 'bg-white text-primary' : 'bg-primary text-white'}`}
            >
              <Play size={24} fill={isPlaying ? "currentColor" : "none"} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
