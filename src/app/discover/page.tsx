import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Discover Palermo",
  description: "Your gateway to the heart of Sicily. Explore Palermo's UNESCO World Heritage sites, savor the flavors, and wander through the historical city center.",
};

export default function DiscoverPage() {
  return (
    <div className="relative min-h-screen w-full">
      
      {/* Modern Hero Section */}
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
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-white">Discover</span>
            </nav>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter fade-in-up">
              Discover
              <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Palermo's Magic
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-200 fade-in-up-delay-1 px-2">
              Your gateway to the heart of Sicily. Explore UNESCO World Heritage sites, savor authentic flavors, and wander through the historical city center.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-8 items-center justify-center mt-6 md:mt-8 fade-in-up-delay-2">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-blue-400 text-lg">landmark</span>
                <span className="font-semibold text-sm md:text-base">UNESCO Heritage</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-green-400 text-lg">restaurant</span>
                <span className="font-semibold text-sm md:text-base">Authentic Cuisine</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-yellow-400 text-lg">history</span>
                <span className="font-semibold text-sm md:text-base">Rich History</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* UNESCO Section */}
          <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-24 fade-in-up">
            <div className="order-2 md:order-1">
              <div className="  p-6 md:p-8 ">
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">A UNESCO World Heritage Site</h2>
                <p className="text-text-secondary leading-relaxed">
                  Palermo, a city steeped in history and culture, proudly holds the prestigious title of a UNESCO World Heritage Site. Its unique blend of architectural styles, from Arab-Norman to Baroque, reflects the city's rich and diverse past. Explore the magnificent Palermo Cathedral, a testament to centuries of artistic and cultural exchange, and wander through the historic city center, where every corner reveals a story waiting to be discovered.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl">
                <Image 
                  alt="Palermo Cathedral" 
                  className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwGd5QJaNRdk0n9fUC9swrAHk3Y3lX9eUzPvy-ATqutNHb2kMAAcLPTYuNieR5UHOYkfW6L9-QTuNVfJFUavLnWFsTh_VZkooCu42FsROsAredS9cNMhkxUb2tviQDBMNvltPdLhjQWStF0vb88Yi_ysIgw-2JEpyJDLdesa64trSGceH4m01mM4e7GPpnXmmB_fwVD2LDud61hvU6XghNmyG09qPI22eNcOro6We6ScTzsVDXuJkDXVEACBXC_5jb1sioCVeC_g6C"
                  width={600}
                  height={450}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </section>

          {/* Food Section */}
          <div className="relative py-8 md:py-12 mb-16 md:mb-24">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-100 -skew-y-2 rounded-2xl"></div>
            <section className="relative grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-2">
                <div className=" p-6 md:p-8 ">
                  <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">Savor the Flavors of Palermo</h2>
                  <p className="text-text-secondary leading-relaxed">
                    Palermo is a paradise for food lovers, renowned for its vibrant street food scene. Indulge in local delicacies such as arancini, panelle, and cannoli. Explore the bustling markets, where the aroma of fresh produce and spices fills the air, and experience the authentic taste of Sicilian cuisine. From traditional trattorias to modern eateries, Palermo offers a culinary journey that will tantalize your taste buds.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-1">
                <div className="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl">
                  <Image 
                    alt="Palermo street food" 
                    className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWifZRSVC-RsRdrq6ycCNNeITOjNhKGFUQWOvI2nXbx8440vbhGxaz6h4gaqMFlug6CyzZBVsiumq51u35oFmWUes6UZhNovHqmAnmDdHBV7cZJqB1qN1VaRq_CWhej4iknNb0N8tFwO7p_Y854RfjcbRavXoErcPC2LmZ1P54pjr4qeGqf-0oh264w2SsULAK82yitKA-Yy8_Y83ILJmHJWwALmYH0GpXRqZ1VyBDi94z3E93q-2mrYTzSdrFQXT8bZf2BhAuAZ1O"
                    width={600}
                    height={450}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </section>
          </div>

          {/* Historic Center Section */}
          <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center fade-in-up">
            <div className="order-2 md:order-1">
              <div className=" p-6 md:p-8 ">
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">Wander Through the Historical City Center</h2>
                <p className="text-text-secondary leading-relaxed">
                  The historical city center of Palermo is a labyrinth of narrow streets, hidden squares, and architectural gems. Lose yourself in the charm of its ancient alleyways, discover hidden courtyards, and admire the grandeur of its palaces and churches. From the Quattro Canti to the Pretoria Fountain, every step is a journey through time. Experience the vibrant atmosphere of the local markets and immerse yourself in the authentic spirit of Palermo.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl">
                <Image 
                  alt="Historical street in Palermo" 
                  className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvuwBGzqI9oeVchr0_JPB8EXffY1u1M8c0St60_ZRNzEdzKrgvj4pI2RFBijaBbUpkrSfMisEcHUApcxQYRRs-mE3MdPf-edZ3WMYWc7DBhbyHFnWC4doomJFHnCWPAj1plEgUsIYQFnjeyWPJ3CfknkP-U-LZdL8qlaguvdUHUhb-uqZKM_fPZYURXQXij2qn3gUuDhczkl338ztLB1TKBsZ0V0bW1TDPyK9YX_9iFL5U_RjdVOyTitjhPFFjJwSIJni-DU4VDazg"
                  width={600}
                  height={450}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}