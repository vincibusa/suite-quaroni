import Image from "next/image";
import { hotelStructuredData } from "@/lib/structured-data";

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
          <section className="relative h-[85vh] min-h-[600px] w-full">
            <div className="absolute inset-0 bg-cover bg-center" 
                 style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7pg-7TsuO_BE07_1U-tE08RdPhxZqsTNpE2UgdjOe6Yn-qk_svcWdgPaCYkpSWE4VCOmcBWjVZ37K5hT7jksHCXRnYKp0x-YJ5rsH_LAojfjj2pjKSZPPUbRPyBsVhjmcGewRznStg-16OIHxAlS5XDUMI9XagcaH3ksTDhKm-1Hk_62UJyGXnLQUuFhL61Co2qwk6J1LlJLRxevT0BSmnjKwL4-2a4wSl9budZ9CVXFFlp6C6kfNhyVcUnIBAmQMcA7qH3TWPJ4J")'}}>
            </div>
            <div className="absolute inset-0 hero-gradient"></div>
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-4" 
                  style={{textShadow: '2px 2px 8px rgba(0,0,0,0.7)'}}>
                Your Sicilian Escape Awaits
              </h1>
              <p className="max-w-2xl text-lg md:text-xl font-light mb-8">
                Experience the charm of Palermo in our elegant B&B. Book your stay today and enjoy exclusive benefits.
              </p>
              <button className="flex items-center justify-center rounded-2xl h-14 px-8 bg-[var(--primary-color)] text-white text-lg font-bold shadow-xl hover:bg-opacity-90 transition-all transform hover:scale-105">
                Book Your Stay Now
              </button>
            </div>
          </section>

          {/* Welcome Section */}
          <section className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Welcome to Suite Quaroni</h2>
                <p className="text-text-secondary text-lg">
                  Nestled in the vibrant heart of Palermo, Suite Quaroni offers a unique blend of modern comfort and timeless Sicilian style. Our rooms are designed to be your relaxing retreat after a day of exploring the city's wonders. We are committed to providing exceptional service and ensuring a memorable stay for every guest.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Why Book Directly With Us?</h2>
                <p className="text-text-secondary text-lg max-w-2xl mx-auto">Enjoy exclusive perks and our undivided attention when you reserve your room through our website.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glassmorphism rounded-2xl p-8 text-center border-slate-200 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="mb-4 inline-block p-4 bg-primary-color/10 rounded-full">
                    <span className="material-symbols-outlined text-4xl text-primary-color">sell</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Best Price Guarantee</h3>
                  <p className="text-text-secondary">We promise you won't find a better price for our rooms anywhere else.</p>
                </div>
                <div className="glassmorphism rounded-2xl p-8 text-center border-slate-200 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="mb-4 inline-block p-4 bg-primary-color/10 rounded-full">
                    <span className="material-symbols-outlined text-4xl text-primary-color">event_available</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Flexible Cancellation</h3>
                  <p className="text-text-secondary">Life happens. We offer flexible cancellation policies for your peace of mind.</p>
                </div>
                <div className="glassmorphism rounded-2xl p-8 text-center border-slate-200 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="mb-4 inline-block p-4 bg-primary-color/10 rounded-full">
                    <span className="material-symbols-outlined text-4xl text-primary-color">support_agent</span>
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-2">Personalized Service</h3>
                  <p className="text-text-secondary">From local tips to special requests, our team is here to make your stay perfect.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Recognition Section */}
          <section className="py-20 md:py-28 bg-slate-50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Our Recognitions</h2>
                <p className="text-text-secondary text-lg max-w-2xl mx-auto">We're proud to be recognized for our commitment to excellence.</p>
              </div>
              <div className="flex justify-center">
                <div className="glassmorphism rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-3xl border-slate-200 shadow-lg">
                  <Image 
                    alt="Tripadvisor Traveler's Choice Award 2022" 
                    className="w-48 h-48 object-cover rounded-2xl" 
                    src="/tripadvisor_2022.png"
                    width={192}
                    height={192}
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary mb-2">Tripadvisor Traveler's Choice 2022</h3>
                    <p className="text-text-secondary">
                      Awarded for consistently earning great reviews from travelers and being ranked within the top 10% of properties on Tripadvisor. We are honored by our guests' feedback!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  );
}
