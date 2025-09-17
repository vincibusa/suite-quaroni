"use client";

import { useState } from "react";
import Image from "next/image";

interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  avatar?: string;
  roomStayed: string;
  verified: boolean;
}

const reviews: Review[] = [
  {
    id: "1",
    name: "Marco Rossi",
    location: "Milan, Italy",
    rating: 5,
    date: "2024-01-15",
    comment: "Exceptional hospitality and beautiful rooms in the heart of Palermo. The personalized service made our stay unforgettable. Suite Quaroni truly captures the essence of Sicilian warmth.",
    roomStayed: "Teatro Massimo",
    verified: true
  },
  {
    id: "2", 
    name: "Sophie Laurent",
    location: "Paris, France",
    rating: 5,
    date: "2024-01-10",
    comment: "The location is perfect for exploring Palermo's historic center. The room was immaculate and the breakfast was delightful. Highly recommend for couples seeking a romantic getaway.",
    roomStayed: "Cattedrale",
    verified: true
  },
  {
    id: "3",
    name: "James Wilson",
    location: "London, UK", 
    rating: 5,
    date: "2024-01-08",
    comment: "Outstanding value for money. The staff went above and beyond to make our family vacation special. The kids loved the area and we felt safe exploring the neighborhood.",
    roomStayed: "Palazzo dei Normanni",
    verified: true
  },
  {
    id: "4",
    name: "Ana García",
    location: "Barcelona, Spain",
    rating: 5,
    date: "2024-01-05",
    comment: "Beautiful traditional Sicilian architecture meets modern luxury. The attention to detail is incredible. Perfect base for discovering the authentic Palermo culture.",
    roomStayed: "Teatro Massimo", 
    verified: true
  }
];

export default function GuestReviews() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            What Our <span className="text-gradient bg-clip-text text-transparent">Guests Say</span>
          </h2>
          <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
            Read authentic reviews from travelers who have experienced the warmth and luxury of Suite Quaroni.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex items-center justify-center space-x-8 mt-8">
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map((i) => (
                  <span key={i} className="material-symbols-outlined text-lg">star</span>
                ))}
              </div>
              <span className="text-text-primary font-semibold">4.9/5 Average</span>
            </div>
            <div className="flex items-center space-x-2 text-green-600">
              <span className="material-symbols-outlined">verified</span>
              <span className="font-semibold">All Verified Guests</span>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Review Card */}
            <div className="modern-card rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                
                {/* Guest Avatar & Info */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <div className="w-20 h-20 mx-auto md:mx-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {reviews[currentReview].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-text-primary">{reviews[currentReview].name}</h4>
                    <p className="text-text-secondary text-sm">{reviews[currentReview].location}</p>
                    <div className="flex items-center justify-center md:justify-start space-x-1">
                      <span className="material-symbols-outlined text-green-500 text-sm">verified</span>
                      <span className="text-green-600 text-xs font-medium">Verified Guest</span>
                    </div>
                  </div>
                </div>

                {/* Review Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(reviews[currentReview].rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined">star</span>
                      ))}
                    </div>
                    <div className="text-text-secondary text-sm">
                      {formatDate(reviews[currentReview].date)}
                    </div>
                  </div>
                  
                  <blockquote className="text-text-primary text-lg md:text-xl font-medium leading-relaxed mb-4 italic">
                    "{reviews[currentReview].comment}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4 text-sm text-text-secondary">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                      Stayed in {reviews[currentReview].roomStayed}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all z-10"
            >
              <span className="material-symbols-outlined text-primary">chevron_left</span>
            </button>
            
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:shadow-xl transition-all z-10"
            >
              <span className="material-symbols-outlined text-primary">chevron_right</span>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentReview 
                    ? 'bg-primary scale-125 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">245</div>
            <div className="text-text-secondary text-sm">Total Reviews</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">4.9</div>
            <div className="text-text-secondary text-sm">Average Rating</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">96%</div>
            <div className="text-text-secondary text-sm">Would Recommend</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-text-secondary text-sm">Return Guests</div>
          </div>
        </div>
      </div>
    </section>
  );
}