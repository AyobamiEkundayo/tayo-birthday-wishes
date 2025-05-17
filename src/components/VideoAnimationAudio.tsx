
import { useEffect, useRef, useState } from 'react';
import { toast } from "@/components/ui/use-toast";

interface VideoAnimationAudioProps {
  isPlaying: boolean;
  isMuted: boolean;
}

export default function VideoAnimationAudio({ isPlaying, isMuted }: VideoAnimationAudioProps) {
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Create audio element for birthday song and handle loading state
  useEffect(() => {
    console.log("Setting up audio...");
    // Use a more reliable and smaller audio source for better compatibility
    const birthdaySong = 'https://assets.mixkit.co/music/preview/mixkit-happy-birthday-saxaphone-545.mp3';
    
    try {
      const audio = new Audio();
      audio.loop = true;
      audio.volume = 0.3;
      audioRef.current = audio;
      
      // Add event listener to track when audio is ready
      const handleCanPlayThrough = () => {
        console.log("Audio loaded successfully!");
        setAudioLoaded(true);
      };
      
      const handleError = (e: Event) => {
        console.error("Audio loading error:", e);
        setAudioLoaded(false);
      };
      
      audio.addEventListener('canplaythrough', handleCanPlayThrough);
      audio.addEventListener('error', handleError);
      
      // Set the source after adding listeners
      audio.src = birthdaySong;
      audio.load();
      
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
          audioRef.current.removeEventListener('error', handleError);
          audioRef.current.pause();
          audioRef.current = null;
        }
      };
    } catch (error) {
      console.error("Audio initialization error:", error);
    }
  }, []);

  // Handle audio playing state
  useEffect(() => {
    if (!audioRef.current || !audioLoaded) return;
    
    if (isPlaying && !isMuted) {
      console.log("Attempting to play audio...");
      try {
        const playPromise = audioRef.current.play();
        
        if (playPromise !== undefined) {
          playPromise.catch(e => {
            console.log("Audio play failed, user interaction may be needed:", e);
            // Show a gentle toast notification about audio restrictions
            toast({
              title: "Audio couldn't play automatically",
              description: "Click on the screen to enable audio playback",
              duration: 5000,
            });
          });
        }
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying, isMuted, audioLoaded]);

  // Handle mute state
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.muted = isMuted;
  }, [isMuted]);

  return null; // Audio component doesn't render anything
}
