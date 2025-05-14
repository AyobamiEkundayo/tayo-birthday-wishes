
import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function MessageSection() {
  return (
    <section className="py-20 px-4">
      <div className="container max-w-4xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <img 
              src="/lovable-uploads/50c5a0ca-edde-41ba-9bf3-3ed3f106f973.png" 
              alt="Tayo and his wife" 
              className="rounded-xl shadow-soft w-full h-auto"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Dearest Tayo
            </h2>
            
            <div className="flex items-center mb-6">
              <Heart className="text-primary mr-3" size={18} />
              <div className="h-0.5 flex-grow bg-primary/30 rounded"></div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              When I think of you, I think of mornings filled with laughter, evenings wrapped in thoughtful 
              conversation, and all the moments in between where your presence makes everything brighter.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Your strength isn't just in what you can carry, but in how you carry others through their 
              struggles. Your joy isn't just in your smile, but in how you bring out smiles in everyone around you.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Today, we celebrate not just another year in your life, but everything that makes you the 
              remarkable person you are. The years ahead hold nothing but promise with you by my side.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
