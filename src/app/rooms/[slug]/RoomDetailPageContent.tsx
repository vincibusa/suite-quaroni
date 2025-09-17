"use client";

import { useState } from "react";
import Image from "next/image";
import BookingWidget from "@/components/booking/BookingWidget";
import ImageModal from "@/components/ui/ImageModal";

interface Room {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  price: number;
  maxGuests: number;
  size: number;
  images: string[];
  amenities: { icon: string; label: string; }[];
  features: string[];
  landmark: { name: string; description: string; };
  location: { floor: string; view: string; special?: string; };
  popular?: boolean;
}

interface RoomDetailPageContentProps {
  room: Room;
}

export default function RoomDetailPageContent({ room }: RoomDetailPageContentProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const openModal = (index: number) => {
    setModalImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* Hero Section - Single Image */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <div className="cursor-pointer" onClick={() => openModal(0)}>
          <Image 
            src={room.images[0]}
            alt={`Camera ${room.name}`}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/60 hover:bg-black/50 transition-colors"></div>
          <div className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full">
            <span className="material-symbols-outlined">zoom_in</span>
          </div>
        </div>
        <div className="absolute bottom-10 left-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {room.name}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            {room.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 py-12">
        
        {/* Mobile - Amenities First */}
        <div className="lg:hidden mb-8">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            Room <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">Amenities</span>
          </h2>
          <div className="overflow-x-auto pb-4 -mx-3 px-3">
            <div className="flex space-x-4 min-w-max">
              {room.amenities.map((amenity, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg min-w-max flex-shrink-0"
                >
                  <span className="material-symbols-outlined text-lg text-blue-600">
                    {amenity.icon}
                  </span>
                  <span className="text-text-primary text-sm font-medium">
                    {amenity.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          
          {/* Left Column - Description */}
          <div className="lg:col-span-2">
            
            {/* Room Description */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                About This <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">Room</span>
              </h2>
              <div className="space-y-4">
                <p className="text-text-secondary text-lg leading-relaxed">
                  {room.description}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-text-primary mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-600">{room.landmark.name === 'Teatro Massimo' ? 'theater_comedy' : room.landmark.name === 'Cattedrale di Palermo' ? 'church' : room.landmark.name === 'La Cala' ? 'sailing' : room.landmark.name === 'Quattro Canti' ? 'crossroads' : room.landmark.name === 'Monreale' ? 'account_balance' : 'water_drop'}</span>
                    Dedicata a: {room.landmark.name}
                  </h3>
                  <p className="text-text-secondary text-sm">{room.landmark.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="text-black">
                    <span className="font-semibold">Capacità:</span> fino a {room.maxGuests} {room.maxGuests === 1 ? 'persona' : 'persone'}
                  </div>
                  <div className="text-black">
                    <span className="font-semibold">Dimensione:</span> {room.size} m²
                  </div>
                  <div className="text-black">
                    <span className="font-semibold">Piano:</span> {room.location.floor}
                  </div>
                  <div className="text-black">
                    <span className="font-semibold">Vista:</span> {room.location.view}
                  </div>
                </div>
                {room.location.special && (
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-800 text-sm font-medium flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-600">star</span>
                      {room.location.special}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Booking Widget (Desktop only) */}
            <div className="mt-12 hidden lg:block">
              <BookingWidget 
                price={room.price}
                roomName={room.name}
              />
            </div>

          </div>

          {/* Right Column - Amenities (Desktop only) */}
          <div className="hidden lg:block lg:col-span-1">
            
            {/* Amenities */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Room <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">Amenities</span>
              </h2>
              <div className="space-y-3">
                {room.amenities.map((amenity, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3"
                  >
                    <span className="material-symbols-outlined text-xl text-blue-600 flex-shrink-0">
                      {amenity.icon}
                    </span>
                    <span className="text-text-primary">
                      {amenity.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Booking Widget (Mobile only) */}
        <div className="mt-12 lg:hidden">
          <BookingWidget 
            price={room.price}
            roomName={room.name}
          />
        </div>

      </div>

      {/* Gallery Section */}
      {room.images.length > 1 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Photo Gallery <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">{room.name}</span>
              </h2>
              <p className="text-text-secondary text-lg">
                Discover all the details and ambience of this beautiful room
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {room.images.slice(1).map((image, index) => (
                <div 
                  key={index} 
                  className="group relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
                  onClick={() => openModal(index + 1)}
                >
                  <Image
                    src={image}
                    alt={`Camera ${room.name} - Foto ${index + 2}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-2 bg-white/90 rounded-full">
                      <span className="material-symbols-outlined text-gray-800">zoom_in</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image Modal */}
      <ImageModal
        images={room.images}
        currentIndex={modalImageIndex}
        isOpen={modalOpen}
        onClose={closeModal}
        alt={`Camera ${room.name}`}
      />
    </>
  );
}