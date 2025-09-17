"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  slug: string;
  amenities: string[];
}

interface RoomsPreviewProps {
  rooms: Room[];
}

export default function RoomsPreview({ rooms }: RoomsPreviewProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % rooms.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [rooms.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % rooms.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + rooms.length) % rooms.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {rooms.map((room) => (
            <Link key={room.id} href={`/rooms/${room.slug}`} className="block cursor-pointer w-full flex-shrink-0">
              <div className="relative h-[500px] group">
                {/* Room Image */}
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="max-w-2xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-3">{room.name}</h3>
                    <p className="text-gray-200 text-lg mb-4 leading-relaxed">{room.description}</p>
                    
                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {room.amenities.slice(0, 3).map((amenity, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm"
                        >
                          {amenity}
                        </span>
                      ))}
                      {room.amenities.length > 3 && (
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                          +{room.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    {/* Price and CTA */}
                    <div className="pb-4">
                      <div className="space-y-1">
                        <div className="text-2xl font-bold">€{room.price}</div>
                        <div className="text-gray-300 text-sm">per night</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>


      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {rooms.map((_, index) => (
          <Button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-primary scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}