
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function BirthdayHeader() {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    setAnimate(true);
    
    // Reset animation every 10 seconds for continuous effect
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => setAnimate(true), 100);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  const birthdayLetters = "Happy Birthday Tayo!".split("");
  
  return (
    <div className="w-full py-6 bg-gradient-to-r from-[#ea384c]/30 to-[#9b87f5]/30 overflow-hidden">
      <div className="container">
        <div className="relative">
          {/* Decorative elements */}
          <motion.div 
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 0.7, scale: 1 }} 
            transition={{ duration: 1 }}
            className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-[#ea384c]/20"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 0.7, scale: 1 }} 
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-[#9b87f5]/20"
          />
          
          <div className="flex items-center justify-center py-2 relative z-10">
            <div className="flex items-center justify-center">
              {birthdayLetters.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: -20, opacity: 0 }}
                  animate={animate ? { 
                    y: [0, -10, 0],
                    opacity: 1,
                    color: [
                      "#9b87f5", 
                      "#ea384c", 
                      "#F97316", 
                      "#9b87f5"
                    ]
                  } : {}}
                  transition={{
                    duration: 2,
                    delay: index * 0.1,
                    ease: "easeInOut",
                    repeat: 0,
                    color: { duration: 4, repeat: Infinity }
                  }}
                  className={cn(
                    "inline-block font-heading font-bold text-3xl md:text-5xl",
                    letter === " " ? "mx-2" : "mx-0.5"
                  )}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </div>
        
          {/* Birthday cake and gift icons */}
          <div className="flex justify-center mt-2 gap-4">
            {["🎂", "🎁", "🎉", "🎈", "🥳"].map((emoji, index) => (
              <motion.span 
                key={index}
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0, 1.2, 1],
                  rotate: [-10, 10, 0],
                }}
                transition={{ 
                  delay: 1 + (index * 0.2),
                  duration: 0.6,
                  type: "spring"
                }}
                className="text-2xl md:text-3xl"
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
