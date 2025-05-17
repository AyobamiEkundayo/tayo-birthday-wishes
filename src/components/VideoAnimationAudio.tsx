
import { useEffect, useRef, useState } from 'react';

interface VideoAnimationAudioProps {
  isPlaying: boolean;
  isMuted: boolean;
}

export default function VideoAnimationAudio({ isPlaying, isMuted }: VideoAnimationAudioProps) {
  const [audioLoaded, setAudioLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
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
    
    if (isPlaying && !isMuted && audioLoaded) {
      console.log("Attempting to play audio...");
      audioRef.current.play().catch(e => {
        console.log("Audio play failed, user interaction may be needed:", e);
      });
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isPlaying, isMuted, audioLoaded]);

  return null; // Audio component doesn't render anything
}
