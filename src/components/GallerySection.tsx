
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const images: GalleryImage[] = [
    { 
      src: "/lovable-uploads/63e0be3e-19a4-4297-beb8-83ceb7e9b673.png", 
      alt: "Tayo and his wife in matching outfits" 
    },
    { 
      src: "/lovable-uploads/4f033b12-c280-42db-b005-d199db3042a1.png", 
      alt: "Tayo and his wife on a boat ride" 
    },
    { 
      src: "/lovable-uploads/00fcf5ad-9536-4e93-b8e2-dd36586b133e.png", 
      alt: "Tayo celebrating his birthday" 
    },
    { 
      src: "/lovable-uploads/10fc4752-30d5-4743-ae6a-c0c0d3b4c2f8.png", 
      alt: "Tayo and his wife at a park" 
    },
    { 
      src: "/lovable-uploads/24cdb714-b6a5-4d79-ad3e-610bdb4d1e35.png", 
      alt: "Tayo and his wife looking at each other" 
    },
    {
      src: "/lovable-uploads/1605e45b-384c-4950-8f6f-90cf99f7106c.png",
      alt: "Tayo and his wife in airplane"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-3"
          >
            Cherished Moments
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            A gallery of beautiful memories we've collected along the way
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="overflow-hidden rounded-xl shadow-soft bg-white aspect-[4/3]"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[90vw] p-1 bg-transparent border-none">
          <img 
            src={selectedImage || ''} 
            alt="Gallery image" 
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
}
