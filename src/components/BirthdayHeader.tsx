
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
    <div className="w-full py-6 overflow-hidden">
      <div className="container">
        <div className="relative">
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
        </div>
      </div>
    </div>
  );
}
