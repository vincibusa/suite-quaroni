"use client";

import Link from "next/link";
import RoomCard from "@/components/room/RoomCard";
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

  return (
    <div className="relative min-h-screen">
      {/* Modern Hero Section - Mobile Optimized */}
      <section className="relative h-[60vh] md:h-[70vh] min-h-[400px] md:min-h-[500px] overflow-hidden">
        {/* Background with Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
          <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 text-xs md:text-sm text-gray-300 mb-4 md:mb-6 fade-in-up">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-white">Rooms</span>
            </nav>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter fade-in-up">
              Exquisite
              <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Accommodations
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-200 fade-in-up-delay-1 px-2">
              Each room at Suite Quaroni tells a story of Palermo's rich heritage while offering modern luxury and comfort for the discerning traveler.
            </p>
            
            {/* Quick Stats - Mobile Stack */}
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-8 items-center justify-center mt-6 md:mt-8 fade-in-up-delay-2">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-blue-400 text-lg">bed</span>
                <span className="font-semibold text-sm md:text-base">3 Unique Rooms</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-green-400 text-lg">eco</span>
                <span className="font-semibold text-sm md:text-base">Sustainable Luxury</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-yellow-400 text-lg">star</span>
                <span className="font-semibold text-sm md:text-base">4.9/5 Guest Rating</span>
              </div>
            </div>
          </div>
          

        </div>
      </section>

      {/* Main Content - Clean Layout */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Our Exquisite Rooms
            </h2>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Choose from our carefully curated selection of luxury accommodations, each inspired by Palermo's most iconic landmarks.
            </p>
            <div className="flex items-center justify-center space-x-4 text-xs md:text-sm text-text-secondary mt-4">
              <span className="flex items-center space-x-1">
                <span className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></span>
                <span>Live availability</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="material-symbols-outlined text-blue-400 text-sm">verified</span>
                <span>Best rates guaranteed</span>
              </span>
            </div>
          </div>

          {/* Rooms Grid - Centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {rooms.map((room, index) => (
              <div key={room.id} className="fade-in-up w-full" style={{animationDelay: `${index * 0.1}s`}}>
                <RoomCard
                  id={room.id}
                  name={room.name}
                  description={room.description}
                  image={room.image}
                  price={room.price}
                  slug={room.slug}
                />
                {room.popular && (
                  <div className="relative -mt-3 md:-mt-4 mb-3 md:mb-4">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 md:px-3 py-1 rounded-full inline-flex items-center space-x-1">
                      <span className="material-symbols-outlined text-xs">trending_up</span>
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12 md:mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-sm">
              <h3 className="text-lg md:text-xl font-bold text-text-primary mb-3">
                Need Help Choosing?
              </h3>
              <p className="text-text-secondary mb-4 md:mb-6 text-sm md:text-base">
                Our expert team is here to help you find the perfect room for your stay in Palermo. Contact us for personalized recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Link href="/contact">
                  <button className="w-full sm:w-auto bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all text-sm md:text-base">
                    Contact Us
                  </button>
                </Link>
                <a href="tel:+39021234567">
                  <button className="w-full sm:w-auto border border-primary text-primary px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold hover:bg-primary/10 transition-all text-sm md:text-base">
                    Call Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Reviews Section */}
      <GuestReviews />

      {/* Advanced CTA Section - Mobile Optimized */}
      <section className="py-12 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Ready to Experience
              <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Sicilian Luxury?
              </span>
            </h2>
            <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 leading-relaxed px-4">
              Our concierge team is standing by to help you choose the perfect room and plan your Palermo adventure.
            </p>
            
            {/* CTA Options - Mobile Stack */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="modern-card rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                <span className="material-symbols-outlined text-3xl md:text-4xl text-blue-400 mb-3 md:mb-4 block">call</span>
                <h3 className="font-bold text-base md:text-lg mb-2">Call Direct</h3>
                <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4">Speak with our team for personalized recommendations</p>
                <a href="tel:+39021234567" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors text-sm md:text-base">
                  +39 02 123 4567
                </a>
              </div>
              
              <div className="modern-card rounded-xl md:rounded-2xl p-4 md:p-6 text-center">
                <span className="material-symbols-outlined text-3xl md:text-4xl text-green-400 mb-3 md:mb-4 block">chat</span>
                <h3 className="font-bold text-base md:text-lg mb-2">Live Chat</h3>
                <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4">Get instant answers to your questions</p>
                <button className="text-green-400 font-semibold hover:text-green-300 transition-colors text-sm md:text-base">
                  Start Chat
                </button>
              </div>
              
              <div className="modern-card rounded-xl md:rounded-2xl p-4 md:p-6 text-center sm:col-span-2 md:col-span-1">
                <span className="material-symbols-outlined text-3xl md:text-4xl text-purple-400 mb-3 md:mb-4 block">mail</span>
                <h3 className="font-bold text-base md:text-lg mb-2">Email Us</h3>
                <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4">Detailed inquiries and special requests</p>
                <a href="mailto:info@suitequaroni.com" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors text-sm md:text-base">
                  Send Email
                </a>
              </div>
            </div>
            
            {/* Primary CTA - Mobile Full Width */}
            <div className="flex flex-col items-center justify-center mb-8 md:mb-12">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="group gradient-button w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 text-lg md:text-xl font-bold rounded-full shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-2 md:gap-3">
                  Book Your Perfect Room
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </Link>
            </div>
            
            {/* Trust Indicators - Mobile Stack */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-8 text-xs md:text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-green-400 text-sm">verified</span>
                <span>Secure Booking</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-blue-400 text-sm">schedule</span>
                <span>24h Cancellation</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
                <span>Best Price Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}