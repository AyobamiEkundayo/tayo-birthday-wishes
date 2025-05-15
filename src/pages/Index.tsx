
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
import BirthdayHeader from "@/components/BirthdayHeader";

// Add a helper component for responsive meta tags
const ResponsiveMetaTags = () => (
  <React.Fragment>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="theme-color" content="#9b87f5" />
    <link rel="manifest" href="/manifest.json" />
  </React.Fragment>
);

const Index = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    // Add class to body for better mobile handling
    document.body.classList.add('overflow-x-hidden');
    
    // Delay confetti to ensure it loads properly
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 500);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('overflow-x-hidden');
    };
  }, []);

  // Add the head tags for better responsiveness
  useEffect(() => {
    // Create viewport meta tag if it doesn't exist
    if (!document.querySelector('meta[name="viewport"]')) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
      document.head.appendChild(meta);
    }
    
    // Theme color for mobile browsers
    if (!document.querySelector('meta[name="theme-color"]')) {
      const themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      themeColor.content = '#9b87f5';
      document.head.appendChild(themeColor);
    }
  }, []);

  return (
    <div className="min-h-screen max-w-full">
      {showConfetti && <Confetti />}
      <BirthdayHeader />
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
