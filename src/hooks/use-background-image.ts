
import { useState, useEffect } from 'react';
import { useIsMobile } from './use-mobile';

export interface BackgroundImageSettings {
  src: string;
  alt: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  mobileBackgroundSize?: string;
  mobileBackgroundPosition?: string;
  overlayColor?: string;
}

export function useBackgroundImage(settings: BackgroundImageSettings) {
  const isMobile = useIsMobile();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  useEffect(() => {
    const image = new Image();
    image.src = settings.src;
    image.onload = () => setIsImageLoaded(true);
    
    return () => {
      image.onload = null;
    };
  }, [settings.src]);
  
  const bgStyle = {
    backgroundImage: `url(${settings.src})`,
    backgroundSize: isMobile && settings.mobileBackgroundSize 
      ? settings.mobileBackgroundSize 
      : settings.backgroundSize || 'cover',
    backgroundPosition: isMobile && settings.mobileBackgroundPosition 
      ? settings.mobileBackgroundPosition 
      : settings.backgroundPosition || 'center',
    backgroundRepeat: "no-repeat",
  };
  
  return { bgStyle, isImageLoaded };
}

// Provides a utility to adjust background position and size for different screen sizes
export function getBackgroundSettings(image: BackgroundImageSettings) {
  const isMobile = window.innerWidth < 768;
  
  return {
    backgroundSize: isMobile && image.mobileBackgroundSize 
      ? image.mobileBackgroundSize 
      : image.backgroundSize || 'cover',
    backgroundPosition: isMobile && image.mobileBackgroundPosition 
      ? image.mobileBackgroundPosition 
      : image.backgroundPosition || 'center',
  };
}
