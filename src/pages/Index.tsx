
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

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Add class to body for better mobile handling
    document.body.classList.add('overflow-x-hidden');
    
    // Show confetti after a short delay
    const timer = setTimeout(() => {
      setShowConfetti(true);
      console.log("Showing confetti");
    }, 1500); // Increased delay to ensure page loads first

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('overflow-x-hidden');
    };
  }, []);

  // Add the head tags for better responsiveness
  useEffect(() => {
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
