
import React, { useEffect, useState, useCallback } from 'react';
import { Play, Pause, Music, Volume2, VolumeX } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import VideoAnimationSlide from './VideoAnimationSlide';
import { Button } from "@/components/ui/button";

export default function VideoAnimation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  
  const slides = [
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
      graphicType: "birthday",
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
      textPosition: "bottom-left",
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
      graphicType: "balloons",
      textColor: "#ffffff",
      highlightColor: "#F97316"
    }
  ];

  // Set up a timer for automatic slideshow when playing
  useEffect(() => {
    let interval: number;
    
    if (isPlaying) {
      interval = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  // Set up background music
  useEffect(() => {
    // Create audio element only on client-side
    if (typeof window !== 'undefined') {
      const audio = new Audio('https://www.bensound.com/bensound-music/bensound-happybirthday.mp3');
      audio.loop = true;
      audio.volume = 0.3;
      
      if (isAudioPlaying && !isMuted) {
        audio.play().catch(e => console.log("Audio play failed:", e));
      } else {
        audio.pause();
      }
      
      return () => {
        audio.pause();
        audio.src = '';
      };
    }
  }, [isAudioPlaying, isMuted]);

  const togglePlayback = useCallback(() => {
    setIsPlaying(!isPlaying);
    // Start audio when slideshow starts
    if (!isPlaying && !isAudioPlaying) {
      setIsAudioPlaying(true);
    }
  }, [isPlaying, isAudioPlaying]);

  const toggleAudio = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);

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
                >
                  <VideoAnimationSlide 
                    {...slides[currentSlide]}
                    slideNumber={currentSlide}
                    totalSlides={slides.length}
                  />
                </motion.div>
              </AnimatePresence>
            ) : (
              <Carousel className="w-full">
                <CarouselContent>
                  {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <VideoAnimationSlide 
                          {...slide}
                          slideNumber={index}
                          totalSlides={slides.length}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="lg:-left-12 left-2" />
                <CarouselNext className="lg:-right-12 right-2" />
              </Carousel>
            )}
            
            <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2">
              {isAudioPlaying && (
                <Button
                  onClick={toggleAudio}
                  className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
                  size="icon"
                  variant="ghost"
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </Button>
              )}
              <Button
                onClick={togglePlayback}
                className={`p-3 rounded-full ${isPlaying ? 'bg-white text-primary' : 'bg-primary text-white'}`}
                size="icon"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </Button>
            </div>
            
            {isPlaying && (
              <motion.div 
                className="absolute top-4 right-4 z-30 flex items-center gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Music size={16} className="text-white" />
                <span className="text-xs text-white">Birthday Slideshow</span>
              </motion.div>
            )}
          </motion.div>
        </div>
        
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
