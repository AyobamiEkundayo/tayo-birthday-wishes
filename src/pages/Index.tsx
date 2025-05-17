
import React, { useEffect, useState } from "react";
import HeroSection from "@/components/HeroSection";
import QuoteSection from "@/components/QuoteSection";
import MessageSection from "@/components/MessageSection";
import GallerySection from "@/components/GallerySection";
import WishesSection from "@/components/WishesSection";
import FooterSection from "@/components/FooterSection";
import AnimatedHeroBanner from "@/components/AnimatedHeroBanner";
import VideoAnimation from "@/components/VideoAnimation";
import { Confetti } from "@/components/ui/confetti";
import HeroImages from "@/components/HeroImages";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);

  // Setup page and mark as loaded
  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Show confetti after page is loaded
  useEffect(() => {
    if (!pageLoaded) return;
    
    // Add class to body for better mobile handling
    document.body.classList.add('overflow-x-hidden');
    
    // Show confetti after a short delay
    const timer = setTimeout(() => {
      try {
        setShowConfetti(true);
        console.log("Showing confetti");
        
        // Show welcome toast
        toast({
          title: "Happy Birthday Tayo! 🎉",
          description: "Welcome to your special birthday celebration",
          duration: 5000,
        });
      } catch (error) {
        console.error("Error showing confetti:", error);
      }
    }, 1500); // Increased delay to ensure page loads first

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('overflow-x-hidden');
    };
  }, [pageLoaded]);

  // Add the head tags for better responsiveness
  useEffect(() => {
    try {
      // Create viewport meta tag if it doesn't exist
      let metaViewport = document.querySelector('meta[name="viewport"]');
      if (!metaViewport) {
        metaViewport = document.createElement('meta');
        metaViewport.setAttribute('name', 'viewport');
        metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        document.head.appendChild(metaViewport);
      }
      
      // Theme color for mobile browsers
      let themeColor = document.querySelector('meta[name="theme-color"]');
      if (!themeColor) {
        themeColor = document.createElement('meta');
        themeColor.setAttribute('name', 'theme-color');
        themeColor.setAttribute('content', '#9b87f5');
        document.head.appendChild(themeColor);
      }
    } catch (error) {
      console.error("Error setting up meta tags:", error);
    }
  }, []);

  return (
    <div className="min-h-screen max-w-full">
      {showConfetti && <Confetti duration={5000} />}
      <HeroSection />
      <AnimatedHeroBanner />
      <HeroImages />
      <QuoteSection />
      <MessageSection />
      <VideoAnimation />
      <GallerySection />
      <WishesSection />
      <FooterSection />
    </div>
  );
}

export default Index;
