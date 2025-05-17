
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
    console.log("Setting up audio...");
    // Use a small file size happy birthday song, but host on a more reliable CDN
    const birthdaySong = 'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0c6ff1bab.mp3';
    
    const audio = new Audio(birthdaySong);
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
    
    // Start preloading
    audio.load();
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('canplaythrough', handleCanPlayThrough);
        audioRef.current.removeEventListener('error', handleError);
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  // Handle audio playing state
  useEffect(() => {
    if (!audioRef.current || !audioLoaded) return;
    
    if (isPlaying && !isMuted) {
      console.log("Attempting to play audio...");
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(e => {
          console.log("Audio play failed, user interaction may be needed:", e);
        });
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
