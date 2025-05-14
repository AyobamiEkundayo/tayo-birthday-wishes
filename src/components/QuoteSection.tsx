
import React from "react";
import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <div className="container max-w-4xl">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <blockquote className="font-heading text-2xl md:text-4xl italic text-gray-800 mb-8 leading-relaxed">
            "The best birthday gift is having you in my life every day. Your kindness, your humor, 
            your strength - they're the real celebration, today and always."
          </blockquote>
          
          <div className="h-0.5 w-24 mx-auto bg-primary/50 mb-4"></div>
          
          <p className="text-gray-600 font-medium">With love, on your special day</p>
        </motion.div>
      </div>
    </section>
  );
}
