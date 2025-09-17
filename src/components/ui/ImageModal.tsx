"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  alt: string;
}

export default function ImageModal({ 
  images, 
  currentIndex: initialIndex, 
  isOpen, 
  onClose, 
  alt 
}: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
          break;
        case 'ArrowRight':
          setCurrentIndex((prev) => (prev + 1) % images.length);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length, onClose]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsZoomed(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        aria-label="Close modal"
      >
        <span className="material-symbols-outlined text-2xl">close</span>
      </button>

      {/* Image counter */}
      <div className="absolute top-6 left-6 z-50 px-4 py-2 bg-black/50 text-white rounded-full text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Zoom button */}
      <button
        onClick={toggleZoom}
        className="absolute top-20 right-6 z-50 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
        aria-label={isZoomed ? "Zoom out" : "Zoom in"}
      >
        <span className="material-symbols-outlined text-xl">
          {isZoomed ? 'zoom_out' : 'zoom_in'}
        </span>
      </button>

      {/* Main image container */}
      <div className={`relative w-full h-full flex items-center justify-center overflow-hidden ${isZoomed ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'}`}>
        <div className={`relative max-w-[90vw] max-h-[90vh] transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}>
          <Image
            src={images[currentIndex]}
            alt={`${alt} - Foto ${currentIndex + 1}`}
            width={1200}
            height={800}
            className="max-w-full max-h-full object-contain"
            onClick={toggleZoom}
            priority
          />
        </div>
      </div>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            aria-label="Previous image"
          >
            <span className="material-symbols-outlined text-2xl">chevron_left</span>
          </button>
          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
            aria-label="Next image"
          >
            <span className="material-symbols-outlined text-2xl">chevron_right</span>
          </button>
        </>
      )}

      {/* Thumbnail strip */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 max-w-[90vw] overflow-x-auto">
          <div className="flex gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsZoomed(false);
                }}
                className={`relative w-16 h-12 rounded-md overflow-hidden flex-shrink-0 transition-all ${
                  index === currentIndex 
                    ? 'ring-2 ring-white scale-110' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Click outside to close */}
      <div 
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  );
}