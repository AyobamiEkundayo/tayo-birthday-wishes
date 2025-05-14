
import React from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-10 px-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/3 -top-24 w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
        <div className="absolute right-1/3 top-1/2 w-80 h-80 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 tracking-tight">
          Happy Birthday
          <span className="text-gradient block mt-2">Tayo</span>
        </h1>

        <div className="flex items-center justify-center mb-8">
          <div className="h-0.5 w-10 bg-primary/70 rounded"></div>
          <Heart className="text-primary mx-4 animate-heartbeat" size={28} />
          <div className="h-0.5 w-10 bg-primary/70 rounded"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            To the man who brightens every moment with his smile, whose heart is as boundless as the sky, 
            and whose strength carries us through each day. On this special birthday, we celebrate you and 
            all the wonderful ways you make our world better.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full max-w-lg mx-auto overflow-hidden rounded-xl shadow-soft"
        >
          <img 
            src="/lovable-uploads/742c3297-f39c-4f42-8060-6348dcee0450.png" 
            alt="Tayo and his wife" 
            className="w-full h-auto object-cover transition-all duration-300 hover:scale-105"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
