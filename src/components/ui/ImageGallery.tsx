"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  alt: string;
  className?: string;
}

export default function ImageGallery({ images, alt, className = "" }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className={`relative overflow-hidden rounded-xl shadow-lg ${className}`}>
      {/* Main Image */}
      <div className="relative w-full h-96">
        <Image
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
        
        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </>
        )}
      </div>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-0 p-4 flex justify-center items-center glassmorphism">
          <div className="flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}