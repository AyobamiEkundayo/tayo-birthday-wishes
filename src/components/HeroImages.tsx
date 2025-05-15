
import React from "react";
import { motion } from "framer-motion";
import { BackgroundTexture } from "./ui/background-texture";

export default function HeroImages() {
  const images = [
    "/lovable-uploads/10fc4752-30d5-4743-ae6a-c0c0d3b4c2f8.png",
    "/lovable-uploads/4f033b12-c280-42db-b005-d199db3042a1.png",
    "/lovable-uploads/50c5a0ca-edde-41ba-9bf3-3ed3f106f973.png",
    "/lovable-uploads/24cdb714-b6a5-4d79-ad3e-610bdb4d1e35.png",
    "/lovable-uploads/1605e45b-384c-4950-8f6f-90cf99f7106c.png",
    "/lovable-uploads/742c3297-f39c-4f42-8060-6348dcee0450.png",
    "/lovable-uploads/63e0be3e-19a4-4297-beb8-83ceb7e9b673.png",
    "/lovable-uploads/00fcf5ad-9536-4e93-b8e2-dd36586b133e.png",
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <BackgroundTexture pattern="confetti" color="#9b87f5" opacity={0.1} />
      
      <div className="container px-4 mx-auto">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-lg shadow-soft h-64"
            >
              <div
                className="w-full h-full bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-white"
                  >
                    <h3 className="text-lg font-bold">Celebration Moment</h3>
                    <p className="text-sm text-white/80">Special memories</p>
                    {/* Birthday badge animation for random images */}
                    {(index === 2 || index === 5 || index === 7) && (
                      <motion.div
                        className="absolute top-3 right-3 bg-[#ea384c] text-white text-xs px-2 py-1 rounded-full transform -rotate-12"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        transition={{ 
                          type: "spring",
                          stiffness: 260,
                          damping: 20
                        }}
                      >
                        Birthday!
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 max-w-4xl mx-auto text-center"
        >
          <p className="text-xl font-heading">
            Wishing you a day filled with joy and laughter on your special day! 
            <span className="text-[#9b87f5] font-bold"> May 23rd</span> is your time to shine!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
