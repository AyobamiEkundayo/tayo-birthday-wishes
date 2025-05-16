
import React from "react";
import { Heart, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="py-8 px-4 text-center text-gray-600 relative">
      <div className="container">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-12 bg-gray-300"></div>
          <Heart className="text-primary mx-3" size={18} />
          <div className="h-px w-12 bg-gray-300"></div>
        </div>
        
        <p className="mb-2">Created with love for Tayo's birthday</p>
        <p className="text-xs opacity-70">© 2025 Ayobami Ekundayo | All the best on your special day</p>
        
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <Button
              onClick={scrollToTop}
              className="rounded-full shadow-lg bg-primary hover:bg-primary/90 text-white p-4 w-12 h-12 flex items-center justify-center"
              aria-label="Scroll to top"
              size="icon"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </footer>
  );
}
