import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Discover Palermo",
  description: "Your gateway to the heart of Sicily. Explore Palermo's UNESCO World Heritage sites, savor the flavors, and wander through the historical city center.",
};

export default function DiscoverPage() {
  return (
    <div className="text-black">

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative h-[60vh] bg-cover bg-center" 
                   style={{backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuCmmMyAPso4PC0SwsYa_qgSp7LxgIliUPyPQWoKSLmNZ-GX5BV3uO8_0GcBqngwngn-PUlaF93Ils87uvywFNJ0lUUstpd5nq4DdZn0p8H8MHH0V4GRzSNQcs5LIy3CMyh6t0-uz7paOBQ2SDg4mB98G4v0NdhP5e6AmqSp6iluD9s1rfCsTyGRP4YieRQFWpBwWf_yzotbqjOJLBMrsuxDvxtcBlR994lXv4dH8GIaEJBwoU4CjlZJaFpBJxBn1A1UXOzuht37fXmP")'}}>
            <div className="absolute inset-0 flex items-end justify-start p-8 md:p-16">
              <div className="max-w-2xl text-black">
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-2">Discover Palermo</h1>
                <p className="text-lg md:text-xl font-light">Your gateway to the heart of Sicily</p>
              </div>
            </div>
          </section>

          <div className="container mx-auto px-6 py-16 md:py-24 space-y-20">
            {/* UNESCO Section */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-black mb-4">A UNESCO World Heritage Site</h2>
                <p className="text-black leading-relaxed">
                  Palermo, a city steeped in history and culture, proudly holds the prestigious title of a UNESCO World Heritage Site. Its unique blend of architectural styles, from Arab-Norman to Baroque, reflects the city's rich and diverse past. Explore the magnificent Palermo Cathedral, a testament to centuries of artistic and cultural exchange, and wander through the historic city center, where every corner reveals a story waiting to be discovered.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Image 
                  alt="Palermo Cathedral" 
                  className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-[4/3]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwGd5QJaNRdk0n9fUC9swrAHk3Y3lX9eUzPvy-ATqutNHb2kMAAcLPTYuNieR5UHOYkfW6L9-QTuNVfJFUavLnWFsTh_VZkooCu42FsROsAredS9cNMhkxUb2tviQDBMNvltPdLhjQWStF0vb88Yi_ysIgw-2JEpyJDLdesa64trSGceH4m01mM4e7GPpnXmmB_fwVD2LDud61hvU6XghNmyG09qPI22eNcOro6We6ScTzsVDXuJkDXVEACBXC_5jb1sioCVeC_g6C"
                  width={600}
                  height={450}
                />
              </div>
            </section>

            {/* Food Section */}
            <div className="relative py-12">
              <div className="absolute inset-0 bg-[var(--primary-color-light)] -skew-y-2 rounded-2xl"></div>
              <section className="relative grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-2">
                  <h2 className="text-3xl font-bold text-black mb-4">Savor the Flavors of Palermo</h2>
                  <p className="text-black leading-relaxed">
                    Palermo is a paradise for food lovers, renowned for its vibrant street food scene. Indulge in local delicacies such as arancini, panelle, and cannoli. Explore the bustling markets, where the aroma of fresh produce and spices fills the air, and experience the authentic taste of Sicilian cuisine. From traditional trattorias to modern eateries, Palermo offers a culinary journey that will tantalize your taste buds.
                  </p>
                </div>
                <div className="order-1 md:order-1">
                  <Image 
                    alt="Palermo street food" 
                    className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-[4/3]" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWifZRSVC-RsRdrq6ycCNNeITOjNhKGFUQWOvI2nXbx8440vbhGxaz6h4gaqMFlug6CyzZBVsiumq51u35oFmWUes6UZhNovHqmAnmDdHBV7cZJqB1qN1VaRq_CWhej4iknNb0N8tFwO7p_Y854RfjcbRavXoErcPC2LmZ1P54pjr4qeGqf-0oh264w2SsULAK82yitKA-Yy8_Y83ILJmHJWwALmYH0GpXRqZ1VyBDi94z3E93q-2mrYTzSdrFQXT8bZf2BhAuAZ1O"
                    width={600}
                    height={450}
                  />
                </div>
              </section>
            </div>

            {/* Historic Center Section */}
            <section className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-black mb-4">Wander Through the Historical City Center</h2>
                <p className="text-black leading-relaxed">
                  The historical city center of Palermo is a labyrinth of narrow streets, hidden squares, and architectural gems. Lose yourself in the charm of its ancient alleyways, discover hidden courtyards, and admire the grandeur of its palaces and churches. From the Quattro Canti to the Pretoria Fountain, every step is a journey through time. Experience the vibrant atmosphere of the local markets and immerse yourself in the authentic spirit of Palermo.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <Image 
                  alt="Historical street in Palermo" 
                  className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-[4/3]" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvuwBGzqI9oeVchr0_JPB8EXffY1u1M8c0St60_ZRNzEdzKrgvj4pI2RFBijaBbUpkrSfMisEcHUApcxQYRRs-mE3MdPf-edZ3WMYWc7DBhbyHFnWC4doomJFHnCWPAj1plEgUsIYQFnjeyWPJ3CfknkP-U-LZdL8qlaguvdUHUhb-uqZKM_fPZYURXQXij2qn3gUuDhczkl338ztLB1TKBsZ0V0bW1TDPyK9YX_9iFL5U_RjdVOyTitjhPFFjJwSIJni-DU4VDazg"
                  width={600}
                  height={450}
                />
              </div>
            </section>
          </div>
        </main>

        </div>

  );
}