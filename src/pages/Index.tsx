
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
    // Delay confetti to ensure it loads properly
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {showConfetti && <Confetti />}
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
};

export default Index;
