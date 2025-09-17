import Image from "next/image";
import Link from "next/link";
import { hotelStructuredData } from "@/lib/structured-data";
import CounterStats from "@/components/ui/CounterStats";
import RoomsPreview from "@/components/ui/RoomsPreview";
import { suiteQuaroniRooms } from "@/data/suite-quaroni-rooms";

// Tutte le 6 camere autentiche Suite Quaroni per l'homepage
const featuredRooms = suiteQuaroniRooms.map(room => ({
  id: room.id,
  name: room.name,
  description: room.shortDescription,
  image: room.images[0],
  price: room.price,
  slug: room.slug,
  amenities: room.features.slice(0, 4)
}));
 
const heroImages = [
  "/images/slideshow/suite-quaroni-slide-04.jpg",
  "/images/slideshow/suite-quaroni-slide-05.jpg", 
  "/images/slideshow/suite-quaroni-slide-06.jpg",
  "/images/slideshow/suite-quaroni-slide-07.jpg"
];

const heroBackground = heroImages[0]; // Default fallback
 
const stats = [
  { number: 124, label: "TripAdvisor Reviews", suffix: "+" },
  { number: 10, label: "Top Hotels Globally", suffix: "%" },
  { number: 6, label: "Boutique Rooms", suffix: "" },
  { number: 2022, label: "Traveler's Choice", suffix: "" }
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hotelStructuredData),
        }}
      />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        {/* Background with Parallax Effect */}
        <div className="absolute inset-0 hero-parallax">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed"
               style={{backgroundImage: `url(${heroBackground})`}}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tighter fade-in-up">
              B&B Suite Quaroni
              <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Historical City Center
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl md:text-2xl font-light leading-relaxed fade-in-up-delay-1">
              A boutique B&B in the historical center of Palermo. Where modern comfort meets authentic Sicilian hospitality in the heart of UNESCO World Heritage city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up-delay-2">
              <Link href="/rooms">
                <button className="group gradient-button px-8 py-4 text-lg font-bold text-white rounded-full shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 flex items-center gap-2 min-w-[280px]">
                  Book Your Stay Now
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </button>
              </Link>
              <Link href="/discover">
                <button className="px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 backdrop-blur-sm rounded-full hover:bg-white/10 transition-all min-w-[280px]">
                  Explore Palermo
                </button>
              </Link>
            </div>
          </div>
          

        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-cyan-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Travelers Worldwide
            </h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Proud recipients of TripAdvisor's Traveler's Choice Award 2022, recognized among the top 10% of hotels worldwide
            </p>
          </div>
          <CounterStats stats={stats} />
        </div>
      </section>

      {/* Rooms Preview Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Discover Our Exquisite Rooms
            </h2>
            <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
              Each of our 6 boutique rooms is named and designed after a historic landmark in Palermo. The minimalistic elegant furnishings create bright and quiet environments, with carefully selected beds and sound-proofing for quality sleep.
            </p>
          </div>
          <RoomsPreview rooms={featuredRooms} />
          <div className="text-center mt-12">
            <Link href="/rooms">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-lg">
                View All Rooms
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                Welcome to 
                <span className="block text-gradient bg-clip-text text-transparent">
                  Suite Quaroni
                </span>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed">
                Suite Quaroni is a modern and comfortable boutique B&B located in the city center of Via Maqueda, inside the walls of the historical Palazzo Quaroni, designed by the Roman architect Ludovico Quaroni. We are at walking distance from the opera house Teatro Massimo and Palermo Central Station.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Palermo's main monuments and attractions, as well as the historical markets, can be reached on foot within minutes. The B&B has 6 boutique rooms, each named and designed after a historic landmark in the city of Palermo, with minimalistic elegant furnishings creating a bright and quiet environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/discover">
                  <button className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-opacity-90 transition-all min-w-[200px]">
                    Explore Palermo
                  </button>
                </Link>
                <Link href="/experiences">
                  <button className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/10 transition-all min-w-[200px]">
                    Local Experiences
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="floating-animation">
                <Image 
                  src="/images/interior/suite-quaroni-design-box-home.jpg"
                  alt="Suite Quaroni B&B Design - Historical Center Palermo"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Why Book <span className="text-gradient bg-clip-text text-transparent">Directly</span> With Us?
            </h2>
            <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
              Book directly from our website with the best rate guaranteed! Experience the personalized service that makes Suite Quaroni special. We also offer convenient private garage parking in the heart of Palermo's historical center.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="group relative">
              <div className="modern-card rounded-3xl p-8 text-center h-full transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-6 inline-block p-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="material-symbols-outlined text-4xl text-white">sell</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">Best Price Guarantee</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Book directly from our website with the best rate guaranteed! We promise you won't find a better price for our rooms anywhere else.
                  </p>
                  <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-primary font-semibold">
                    <span>Instant Match</span>
                    <span className="material-symbols-outlined text-base">verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="group relative">
              <div className="modern-card rounded-3xl p-8 text-center h-full transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-6 inline-block p-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="material-symbols-outlined text-4xl text-white">event_available</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">Flexible Cancellation</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Life happens. We offer flexible cancellation policies for your peace of mind, with free cancellation up to 24 hours before arrival.
                  </p>
                  <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-green-600 font-semibold">
                    <span>Free Cancellation</span>
                    <span className="material-symbols-outlined text-base">schedule</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="group relative">
              <div className="modern-card rounded-3xl p-8 text-center h-full transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-6 inline-block p-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="material-symbols-outlined text-4xl text-white">support_agent</span>
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-4">Personalized Service</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Experience authentic Sicilian hospitality with personalized local recommendations. We also offer private garage parking and car rental drop-off services in the historical center.
                  </p>
                  <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-purple-600 font-semibold">
                    <span>24/7 Support</span>
                    <span className="material-symbols-outlined text-base">favorite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                ))}
              </div>
              <span className="text-text-primary font-semibold">TripAdvisor Traveler's Choice 2022</span>
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map((i) => (
                  <span key={i} className="material-symbols-outlined text-sm">star</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Award-Winning <span className="text-gradient bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-text-secondary text-xl max-w-3xl mx-auto leading-relaxed">
              We're proud to be recognized for our commitment to excellence and the unforgettable experiences we create for our guests.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Award */}
            <div className="relative group">
              <div className="modern-card rounded-3xl p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="relative">
                    <Image 
                      alt="Tripadvisor Traveler's Choice Award 2022" 
                      className="w-32 h-32 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300" 
                      src="/tripadvisor_2022.png"
                      width={128}
                      height={128}
                    />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-sm">star</span>
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold text-text-primary mb-3">
                      TripAdvisor Traveler's Choice Award 2022
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      Pride and proud to have received this important award and be part of the 10% of the best hotels in the world. Thanks TripAdvisor! This recognition reflects our commitment to exceptional hospitality in Palermo's historic center.
                    </p>
                    <div className="flex items-center justify-center md:justify-start space-x-1">
                      {[1,2,3,4,5].map((i) => (
                        <span key={i} className="material-symbols-outlined text-yellow-400">star</span>
                      ))}
                      <span className="ml-2 text-text-secondary font-semibold">4.8/5 Average</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="space-y-8">
              <div className="modern-card rounded-3xl p-8 relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">format_quote</span>
                </div>
                <div className="space-y-4">
                  <p className="text-text-primary text-lg font-medium italic leading-relaxed">
                    "Suite Quaroni is the perfect starting point to explore Palermo on foot. The sound-proofed rooms provided quality sleep after exploring the UNESCO World Heritage sites. The location on Via Maqueda puts you minutes away from Teatro Massimo and the historical markets."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                      MR
                    </div>
                    <div>
                      <div className="font-semibold text-text-primary">Giuseppe Palermo</div>
                      <div className="text-text-secondary text-sm">Roma, Italy</div>
                    </div>
                    <div className="ml-auto flex text-yellow-400">
                      {[1,2,3,4,5].map((i) => (
                        <span key={i} className="material-symbols-outlined text-sm">star</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">6</div>
                  <div className="text-sm text-text-secondary">Boutique Rooms</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">Via Maqueda</div>
                  <div className="text-sm text-text-secondary">Historic Location</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-primary">UNESCO</div>
                  <div className="text-sm text-text-secondary">World Heritage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
}
