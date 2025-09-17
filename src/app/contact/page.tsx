import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Suite Quaroni",
  description: "Get in touch with Suite Quaroni. Fill out the form to book your stay or ask any questions about our luxury B&B in Palermo, Sicily.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen w-full">
      
      {/* Modern Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] min-h-[300px] md:min-h-[400px] overflow-hidden">
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
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-white">Contact</span>
            </nav>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter fade-in-up">
              Get in
              <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Touch
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-200 fade-in-up-delay-1 px-2">
              Ready to experience Sicilian luxury? Our team is here to help you plan your perfect stay in Palermo.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            
            {/* Contact Form */}
            <div className="glassmorphic rounded-2xl p-6 md:p-8 shadow-lg fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">Send Us a Message</h2>
              <p className="text-text-secondary mb-6 md:mb-8">Fill out the form to book your stay or ask any questions.</p>
              
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-text-primary pb-2">Check-in</label>
                    <input className="w-full rounded-xl border border-gray-200 bg-white/90 p-3 md:p-4 text-base text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all" type="date"/>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-text-primary pb-2">Check-out</label>
                    <input className="w-full rounded-xl border border-gray-200 bg-white/90 p-3 md:p-4 text-base text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all" type="date"/>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-text-primary pb-2">Adults</label>
                    <input className="w-full rounded-xl border border-gray-200 bg-white/90 p-3 md:p-4 text-base text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all" min="1" placeholder="2" type="number"/>
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm font-medium text-text-primary pb-2">Children</label>
                    <input className="w-full rounded-xl border border-gray-200 bg-white/90 p-3 md:p-4 text-base text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all" min="0" placeholder="0" type="number"/>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-text-primary pb-2">Name</label>
                  <input className="w-full rounded-xl border border-gray-200 bg-white/90 p-3 md:p-4 text-base text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="Your full name" type="text"/>
                </div>
                
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-text-primary pb-2">Email</label>
                  <input className="w-full rounded-xl border border-gray-200 bg-white/90 p-3 md:p-4 text-base text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all" placeholder="your.email@example.com" type="email"/>
                </div>
                
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-text-primary pb-2">Message</label>
                  <textarea className="w-full rounded-xl border border-gray-200 bg-white/90 p-3 md:p-4 text-base text-text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none" placeholder="Any special requests or questions?" rows={4}></textarea>
                </div>
                
                <button className="w-full cursor-pointer rounded-xl bg-primary px-4 py-3 md:py-4 text-base md:text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl" type="submit">
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8 flex flex-col justify-center fade-in-up-delay-1">
              <div className="glassmorphic rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-4 md:mb-6">Contact Information</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex h-12 w-12 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <span className="material-symbols-outlined text-xl md:text-2xl">location_on</span>
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-semibold text-text-primary">Address</p>
                      <p className="text-text-secondary text-sm md:text-base">Via Roma, 123, Palermo, Italy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex h-12 w-12 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <span className="material-symbols-outlined text-xl md:text-2xl">mail</span>
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-semibold text-text-primary">Email</p>
                      <a className="text-text-secondary text-sm md:text-base hover:text-primary transition-colors" href="mailto:info@suitequaroni.com">info@suitequaroni.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex h-12 w-12 md:h-14 md:w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <span className="material-symbols-outlined text-xl md:text-2xl">phone</span>
                    </div>
                    <div>
                      <p className="text-base md:text-lg font-semibold text-text-primary">Phone</p>
                      <a className="text-text-secondary text-sm md:text-base hover:text-primary transition-colors" href="tel:+39021234567">+39 02 123 4567</a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Info */}
              <div className="glassmorphic rounded-2xl p-6 md:p-8 shadow-lg text-center">
                <h4 className="text-lg md:text-xl font-bold text-text-primary mb-3 md:mb-4">Quick Response</h4>
                <p className="text-text-secondary text-sm md:text-base mb-4 md:mb-6">
                  We typically respond to inquiries within 2 hours during business hours.
                </p>
                <div className="flex items-center justify-center space-x-2 text-xs md:text-sm text-text-secondary">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span>Available now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}