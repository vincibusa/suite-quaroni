"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import RoomCard from "@/components/room/RoomCard";
import RoomFilters from "@/components/room/RoomFilters";
import GuestReviews from "@/components/ui/GuestReviews";

interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  slug: string;
  amenities: string[];
  popular?: boolean;
  size: number;
}

// Enhanced room data with amenities
const rooms: Room[] = [
  {
    id: "1",
    name: "Teatro Massimo",
    description: "A luxurious suite with a balcony overlooking the city, perfect for couples seeking romance and comfort.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN5XuVzCEuEskOvORZg4YpA2rmUncJTCh1DJBpMPOnRgreoPph7GJMwCzPYg-0wSEf2ZCxM0h-hJl_dbhyioNJC8WfzEI1sjNdEgV1R47AjQJ-BoYSozQba-CcK3t4F3KXemx7EkkShdBs4F6OwhkF0bq87oo_Ouwv1gnX1axrJ1B5yQhk7skm3d-way-xnc_WvJAYx854y_iqsy54n7BbY7q8bs-Gyj_7TQiMc1mpiyglYeJr-UxCnh0MFgRQHqePrIBUPCV9oW-R",
    price: 180,
    slug: "teatro-massimo",
    amenities: ["King-size bed", "Private balcony", "City views", "Free Wi-Fi", "Work desk"],
    popular: true,
    size: 35
  },
  {
    id: "2", 
    name: "Cattedrale",
    description: "A spacious room with a view of the historic cathedral, ideal for families and cultural enthusiasts.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdGN6HM23hlvuAgaN7JVwnxe7k05TrgWTcXkzupOqE8PgWSzWjXuX-G5zMYzLQeRL27oJxW8TIfKGqsE0WovzG1TOQCOr7xUDSeT8g3nhkTPGnMS3bTZDt-QttFxxo7x8emhAQuUS-WDto0ZSOOuejZMgMR11V-hrmfT81yT_kCesj935jx25dq5e8Xw0utBfeGMRCxQm281BxQHeWJ_6hOtr7538EYPjcTP8oba4lLMvbjyeGDRn-Nl2YkqLKeuuMvlpHcbWl4uxe",
    price: 160,
    slug: "cattedrale",
    amenities: ["Queen-size bed", "Cathedral views", "Family-friendly", "Work desk", "Free Wi-Fi"],
    size: 28
  },
  {
    id: "3",
    name: "Palazzo dei Normanni", 
    description: "An elegant room with a private terrace, offering a tranquil retreat in the heart of the city.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhv8SeezH-MXEgSK-wPODlw5uDGRPhEo3BKpRgT__etyGH5PigdBmwlFykjfrvH13HmHupRxDF_qb3KFH27QE-2AwPGuYCQKmV1-RSVNeVIAjsjzwusIv-NS9WdqX8NJy2-XBgVnGx7YYxO2MJS4UluSowYDeQr1-De6hWL5--hTb6oPs_4vYhso7gnEAcb0ou0HJSRHES7zoBoWgvrSZmxwdD62Etil6OZXEiQxxS_PrjDheDBWf95BmYPx2T-0lA2HayGg-t6gmZ",
    price: 200,
    slug: "palazzo-dei-normanni",
    amenities: ["King-size bed", "Private terrace", "Garden views", "Luxury bathroom", "Free Wi-Fi"],
    size: 42
  }
];

export default function RoomsPageClient() {
  const [filters, setFilters] = useState({
    search: "",
    priceRange: [100, 300] as [number, number],
    amenities: [] as string[],
    sortBy: "price-asc"
  });

  // Filter and sort rooms based on current filters
  const filteredRooms = useMemo(() => {
    let result = rooms.filter(room => {
      // Search filter
      const matchesSearch = filters.search === "" || 
        room.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        room.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        room.amenities.some(amenity => amenity.toLowerCase().includes(filters.search.toLowerCase()));
      
      // Price filter
      const matchesPrice = room.price <= filters.priceRange[1];
      
      // Amenities filter
      const matchesAmenities = filters.amenities.length === 0 ||
        filters.amenities.every(filterAmenity => room.amenities.includes(filterAmenity));
      
      return matchesSearch && matchesPrice && matchesAmenities;
    });

    // Apply sorting
    switch (filters.sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "popular":
        result.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
    }

    return result;
  }, [filters]);

  return (
    <div className="relative min-h-screen">
      {/* Modern Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
          <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-gray-300 mb-6 fade-in-up">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-white">Rooms</span>
            </nav>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter fade-in-up">
              Exquisite
              <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Accommodations
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light leading-relaxed text-gray-200 fade-in-up-delay-1">
              Each room at Suite Quaroni tells a story of Palermo's rich heritage while offering modern luxury and comfort for the discerning traveler.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8 fade-in-up-delay-2">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-blue-400">bed</span>
                <span className="font-semibold">3 Unique Rooms</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-green-400">eco</span>
                <span className="font-semibold">Sustainable Luxury</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-yellow-400">star</span>
                <span className="font-semibold">4.9/5 Guest Rating</span>
              </div>
            </div>
          </div>
          

        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar with Filters */}
            <div className="lg:col-span-1">
              <RoomFilters 
                onFilterChange={setFilters} 
                totalResults={filteredRooms.length}
              />
            </div>

            {/* Rooms Grid */}
            <div className="lg:col-span-3">
              {/* Results Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-text-primary">
                    Available Rooms
                  </h2>
                  <p className="text-text-secondary">
                    {filteredRooms.length} room{filteredRooms.length !== 1 ? 's' : ''} found
                  </p>
                </div>
                <div className="hidden md:flex items-center space-x-4 text-sm text-text-secondary">
                  <span className="flex items-center space-x-1">
                    <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                    <span>Live availability</span>
                  </span>
                </div>
              </div>

              {/* Rooms Grid */}
              {filteredRooms.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {filteredRooms.map((room, index) => (
                    <div key={room.id} className="fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
                      <RoomCard
                        id={room.id}
                        name={room.name}
                        description={room.description}
                        image={room.image}
                        price={room.price}
                        slug={room.slug}
                      />
                      {room.popular && (
                        <div className="relative -mt-4 mb-4">
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-flex items-center space-x-1">
                            <span className="material-symbols-outlined text-xs">trending_up</span>
                            <span>Most Popular</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <span className="material-symbols-outlined text-6xl text-gray-300 mb-4 block">search_off</span>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">No rooms found</h3>
                  <p className="text-text-secondary mb-6">Try adjusting your filters to see more results</p>
                  <button 
                    onClick={() => setFilters({ search: "", priceRange: [100, 300], amenities: [], sortBy: "price-asc" })}
                    className="gradient-button px-6 py-3 text-white font-semibold rounded-xl transition-all"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Guest Reviews Section */}
      <GuestReviews />

      {/* Advanced CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Experience
              <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Sicilian Luxury?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Our concierge team is standing by to help you choose the perfect room and plan your Palermo adventure.
            </p>
            
            {/* CTA Options */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="modern-card rounded-2xl p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-blue-400 mb-4 block">call</span>
                <h3 className="font-bold text-lg mb-2">Call Direct</h3>
                <p className="text-gray-300 text-sm mb-4">Speak with our team for personalized recommendations</p>
                <a href="tel:+39021234567" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                  +39 02 123 4567
                </a>
              </div>
              
              <div className="modern-card rounded-2xl p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-green-400 mb-4 block">chat</span>
                <h3 className="font-bold text-lg mb-2">Live Chat</h3>
                <p className="text-gray-300 text-sm mb-4">Get instant answers to your questions</p>
                <button className="text-green-400 font-semibold hover:text-green-300 transition-colors">
                  Start Chat
                </button>
              </div>
              
              <div className="modern-card rounded-2xl p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-purple-400 mb-4 block">mail</span>
                <h3 className="font-bold text-lg mb-2">Email Us</h3>
                <p className="text-gray-300 text-sm mb-4">Detailed inquiries and special requests</p>
                <a href="mailto:info@suitequaroni.com" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                  Send Email
                </a>
              </div>
            </div>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="group gradient-button px-10 py-5 text-xl font-bold rounded-full shadow-2xl transition-all transform hover:scale-105 flex items-center gap-3">
                  Book Your Perfect Room
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 mt-12 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-green-400">verified</span>
                <span>Secure Booking</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-blue-400">schedule</span>
                <span>24h Cancellation</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-yellow-400">star</span>
                <span>Best Price Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}