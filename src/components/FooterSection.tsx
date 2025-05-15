
import React from "react";
import { Heart } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="py-8 px-4 text-center text-gray-600">
      <div className="container">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-12 bg-gray-300"></div>
          <Heart className="text-primary mx-3" size={18} />
          <div className="h-px w-12 bg-gray-300"></div>
        </div>
        
        <p className="mb-2">Created with love for Tayo's birthday</p>
        <p className="text-xs">© {new Date().getFullYear()} Ayobami Ekundayo | All the best on your special day</p>
      </div>
    </footer>
  );
}
