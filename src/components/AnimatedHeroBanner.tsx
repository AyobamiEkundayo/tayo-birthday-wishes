
import React from "react";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function AnimatedHeroBanner() {
  return (
    <div className="relative w-full py-10 overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10">
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl md:text-4xl font-heading font-bold mb-4"
            >
              The Big Day
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center mb-4 text-primary"
            >
              <Calendar className="mr-2" />
              <span className="font-semibold">May 23rd</span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-gray-700"
            >
              Celebrating another year of amazing memories and looking forward to many more wonderful moments ahead. May this special day bring you joy, love, and everything your heart desires!
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:w-1/2 relative"
          >
            <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-lg shadow-soft">
              <motion.div 
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/lovable-uploads/10fc4752-30d5-4743-ae6a-c0c0d3b4c2f8.png')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-heading font-semibold">Happy Birthday <span className="text-[#8B5CF6]">Tayo</span>!</h3>
                    <p className="text-sm text-white/80">May 23rd</p>
                  </motion.div>
                </div>
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, rotate: -5, x: 30 }}
              animate={{ opacity: 1, rotate: 0, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-lg shadow-soft overflow-hidden border-4 border-white"
            >
              <div 
                className="w-full h-full bg-cover bg-center" 
                style={{ backgroundImage: "url('/lovable-uploads/4f033b12-c280-42db-b005-d199db3042a1.png')" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated decorative elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="absolute top-10 left-10 w-24 h-24 rounded-full bg-primary/20"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 0.6 }}
        className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-accent/20"
      />
      
      {/* Additional floating elements */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: [0, -15, 0], opacity: 1 }}
        transition={{ y: { repeat: Infinity, duration: 3, ease: "easeInOut" }, opacity: { duration: 1 } }}
        className="absolute top-20 right-1/4 w-16 h-16 rounded-full bg-[#8B5CF6]/30"
      />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: [0, 15, 0], opacity: 1 }}
        transition={{ y: { repeat: Infinity, duration: 4, ease: "easeInOut" }, opacity: { duration: 1, delay: 0.5 } }}
        className="absolute bottom-20 left-1/4 w-20 h-20 rounded-full bg-[#8B5CF6]/20"
      />
    </div>
  );
}
