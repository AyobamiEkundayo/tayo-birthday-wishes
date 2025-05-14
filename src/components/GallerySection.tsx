
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ResponsiveImage, ResponsiveImageWithAspectRatio } from "@/components/ui/responsive-image";

interface GalleryImage {
  src: string;
  alt: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  mobileBackgroundSize?: string;
  mobileBackgroundPosition?: string;
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  const images: GalleryImage[] = [
    { 
      src: "/lovable-uploads/63e0be3e-19a4-4297-beb8-83ceb7e9b673.png", 
      alt: "Tayo and his wife in matching outfits",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    { 
      src: "/lovable-uploads/4f033b12-c280-42db-b005-d199db3042a1.png", 
      alt: "Tayo and his wife on a boat ride",
      backgroundSize: "cover",
      backgroundPosition: "center 30%"
    },
    { 
      src: "/lovable-uploads/00fcf5ad-9536-4e93-b8e2-dd36586b133e.png", 
      alt: "Tayo celebrating his birthday",
      backgroundSize: "cover", 
      backgroundPosition: "center",
      mobileBackgroundSize: "contain"
    },
    { 
      src: "/lovable-uploads/10fc4752-30d5-4743-ae6a-c0c0d3b4c2f8.png", 
      alt: "Tayo and his wife at a park",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    { 
      src: "/lovable-uploads/24cdb714-b6a5-4d79-ad3e-610bdb4d1e35.png", 
      alt: "Tayo and his wife looking at each other",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    {
      src: "/lovable-uploads/1605e45b-384c-4950-8f6f-90cf99f7106c.png",
      alt: "Tayo and his wife in airplane",
      backgroundSize: "cover",
      backgroundPosition: "center",
      mobileBackgroundPosition: "top center"
    },
    {
      src: "/lovable-uploads/742c3297-f39c-4f42-8060-6348dcee0450.png", 
      alt: "Tayo portrait",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    {
      src: "/lovable-uploads/50c5a0ca-edde-41ba-9bf3-3ed3f106f973.png", 
      alt: "Tayo and his wife special moment",
      backgroundSize: "cover",
      backgroundPosition: "center"
    },
    // Repeating some images with different crops to add more variety
    { 
      src: "/lovable-uploads/63e0be3e-19a4-4297-beb8-83ceb7e9b673.png", 
      alt: "Tayo and his wife - close up",
      backgroundSize: "cover",
      backgroundPosition: "top center"
    },
    { 
      src: "/lovable-uploads/4f033b12-c280-42db-b005-d199db3042a1.png", 
      alt: "Tayo and his wife boat adventure",
      backgroundSize: "cover",
      backgroundPosition: "bottom center"
    },
    { 
      src: "/lovable-uploads/00fcf5ad-9536-4e93-b8e2-dd36586b133e.png", 
      alt: "Tayo's birthday celebration",
      backgroundSize: "cover", 
      backgroundPosition: "center 25%",
      mobileBackgroundSize: "contain"
    },
    { 
      src: "/lovable-uploads/24cdb714-b6a5-4d79-ad3e-610bdb4d1e35.png", 
      alt: "Tayo's romantic moment",
      backgroundSize: "cover",
      backgroundPosition: "center 30%"
    }
  ];

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Cherished Moments
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A gallery of beautiful memories we've collected along the way
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="overflow-hidden rounded-xl shadow-soft bg-white"
            >
              <ResponsiveImageWithAspectRatio
                src={image.src}
                alt={image.alt}
                aspectRatio={4/3}
                backgroundSize={image.backgroundSize}
                backgroundPosition={image.backgroundPosition}
                mobileBackgroundSize={image.mobileBackgroundSize}
                mobileBackgroundPosition={image.mobileBackgroundPosition}
                onClick={() => setSelectedImage(image)}
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[90vw] p-1 bg-transparent border-none">
          {selectedImage && (
            <ResponsiveImage
              src={selectedImage.src}
              alt={selectedImage.alt || 'Gallery image'}
              backgroundSize={selectedImage.backgroundSize}
              backgroundPosition={selectedImage.backgroundPosition}
              mobileBackgroundSize={selectedImage.mobileBackgroundSize}
              mobileBackgroundPosition={selectedImage.mobileBackgroundPosition}
              className="w-full h-[80vh] rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
