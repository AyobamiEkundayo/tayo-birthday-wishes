
import React, { useEffect, useState, useCallback } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import VideoAnimationSlide from './VideoAnimationSlide';
import VideoAnimationAudio from './VideoAnimationAudio';
import VideoAnimationControls from './VideoAnimationControls';
import { slides } from './VideoAnimationData';

export default function VideoAnimation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true); // Start muted to avoid autoplay issues
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Mark component as loaded after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      console.log("VideoAnimation component loaded");
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Set up a timer for automatic slideshow when playing
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (isPlaying) {
      console.log("Starting slideshow timer");
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying]);

  const togglePlayback = useCallback(() => {
    console.log("Toggle playback, current state:", isPlaying);
    setIsPlaying(!isPlaying);
    // Start audio when slideshow starts
    if (!isPlaying && !isAudioPlaying) {
      setIsAudioPlaying(true);
    }
  }, [isPlaying, isAudioPlaying]);

  const toggleAudio = useCallback(() => {
    console.log("Toggle audio, current muted state:", isMuted);
    setIsMuted(!isMuted);
  }, [isMuted]);

  // If not loaded yet, show a loading placeholder
  if (!isLoaded) {
    return (
      <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              Moments in Motion
            </h2>
            <p className="text-gray-600">Loading special memories...</p>
            <div className="max-w-4xl mx-auto h-64 bg-gray-100 animate-pulse rounded-xl mt-8"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
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
            
            {/* Audio Component */}
            <VideoAnimationAudio 
              isPlaying={isAudioPlaying} 
              isMuted={isMuted} 
            />
            
            {/* Controls Component */}
            <VideoAnimationControls
              isPlaying={isPlaying}
              isMuted={isMuted}
              isAudioPlaying={isAudioPlaying}
              onTogglePlayback={togglePlayback}
              onToggleAudio={toggleAudio}
            />
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-6 text-gray-600 text-sm"
        >
          {isPlaying ? 
            "Enjoying the slideshow with birthday music! Click pause to browse manually." : 
            "Click play to start an automatic slideshow with birthday music."}
        </motion.div>
      </div>
    </section>
  );
}
