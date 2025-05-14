
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react"; // Using Gift instead of Celebration

export default function WishesSection() {
  const [submitted, setSubmitted] = useState(false);
  const [wish, setWish] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (wish.trim()) {
      console.log("Wish submitted:", wish);
      setSubmitted(true);
      setWish("");
      
      // Reset the submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20 px-4">
      <div className="container max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Send Your Birthday Wishes
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="h-0.5 w-12 bg-primary/50"></div>
            <Gift className="text-primary mx-4" size={22} />
            <div className="h-0.5 w-12 bg-primary/50"></div>
          </div>
          <p className="text-gray-600 max-w-lg mx-auto">
            Leave a heartfelt message for Tayo on his special day. Your words will brighten his celebration!
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {submitted ? (
            <div className="bg-green-50 text-green-800 rounded-xl p-6 text-center shadow-soft">
              <motion.div 
                initial={{ scale: 0.8 }} 
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Gift className="mx-auto mb-4 text-green-600" size={32} />
                <h3 className="font-heading text-xl font-medium mb-2">Thank You!</h3>
                <p>Your birthday wish for Tayo has been sent. Your thoughtfulness means the world to him!</p>
              </motion.div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-soft p-6">
              <div className="mb-4">
                <label htmlFor="wish" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Birthday Wish
                </label>
                <textarea
                  id="wish"
                  value={wish}
                  onChange={(e) => setWish(e.target.value)}
                  placeholder="Write your heartfelt message to Tayo..."
                  className="w-full rounded-md border-gray-300 border p-3 focus:border-primary focus:ring focus:ring-primary/20 transition min-h-[120px]"
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Send Birthday Wish
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
