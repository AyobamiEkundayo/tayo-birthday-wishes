
import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
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

// Define the slide type to match the VideoSlideProps interface
type TextPositionType = "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right";
type GraphicType = "hearts" | "stars" | "confetti" | "balloons" | "waves" | "circles" | "birthday" | "none";

interface SlideType {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  backgroundSize: string;
  backgroundPosition: string;
  mobileBackgroundSize?: string;
  mobileBackgroundPosition?: string;
  textPosition: TextPositionType;
  overlayColor: string;
  graphicType: GraphicType;
  textColor: string;
  highlightColor: string;
}

export default function VideoAnimation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [showDebug, setShowDebug] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const slides: SlideType[] = [
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

  // Create audio element for birthday song and handle loading state
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log("Setting up audio...");
      // Use a small file size happy birthday song
      const birthdaySong = 'https://www.bensound.com/bensound-music/bensound-happybirthday.mp3';
      
      audioRef.current = new Audio(birthdaySong);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
      
      // Add event listener to track when audio is ready
      if (audioRef.current) {
        const handleCanPlayThrough = () => {
          console.log("Audio loaded successfully!");
          setAudioLoaded(true);
        };
        
        const handleError = (e: Event | string) => {
          console.error("Audio loading error:", e);
          setAudioLoaded(false);
        };
        
        audioRef.current.addEventListener('canplaythrough', handleCanPlayThrough);
        audioRef.current.addEventListener('error', handleError);
        
        return () => {
          if (audioRef.current) {
            audioRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
            audioRef.current.removeEventListener('error', handleError);
            audioRef.current.pause();
            audioRef.current.src = '';
          }
        };
      }
    }
  }, []);

  // Handle audio playing state
  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isAudioPlaying && !isMuted) {
      console.log("Attempting to play audio...");
      audioRef.current.play().catch(e => {
        console.log("Audio play failed, user interaction may be needed:", e);
      });
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isAudioPlaying, isMuted, audioLoaded]);

  // Set up a timer for automatic slideshow when playing
  useEffect(() => {
    let interval: number;
    
    if (isPlaying) {
      console.log("Starting slideshow timer");
      interval = window.setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
    
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, slides.length]);

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
            
            <div className="absolute bottom-4 right-4 z-30 flex items-center gap-2">
              {(isAudioPlaying || isPlaying) && (
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
                <span className="text-xs text-white">Birthday Slideshow</span>
              </motion.div>
            )}
          </motion.div>
          
          {/* Debug Information */}
          {showDebug && (
            <div className="mt-4 p-4 bg-gray-100 rounded text-xs text-left">
              <p>Debug - Audio State:</p>
              <ul>
                <li>Audio Loaded: {audioLoaded ? 'Yes' : 'No'}</li>
                <li>Is Playing: {isPlaying ? 'Yes' : 'No'}</li>
                <li>Is Audio Playing: {isAudioPlaying ? 'Yes' : 'No'}</li>
                <li>Is Muted: {isMuted ? 'Yes' : 'No'}</li>
                <li>Current Slide: {currentSlide}</li>
              </ul>
            </div>
          )}
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
        
        {/* Debug toggle button */}
        <div className="text-center mt-2">
          <button 
            onClick={() => setShowDebug(!showDebug)}
            className="text-xs text-gray-400 hover:text-gray-600"
          >
            {showDebug ? "Hide Debug Info" : ""}
          </button>
        </div>
      </div>
    </section>
  );
}
