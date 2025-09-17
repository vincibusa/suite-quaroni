import { Metadata } from "next";
import ExperienceCard from "@/components/ui/ExperienceCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Explore Palermo - Experiences",
  description: "Discover the rich tapestry of Palermo's art, history, culture, and culinary delights with our curated activities. Each experience is designed to immerse you in the heart of this vibrant city.",
};

const experiences = {
  "Art & History": [
    {
      title: "Palermo's Architectural Wonders",
      description: "A journey through the city's most iconic buildings.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIJFE2m2cdTGoH_2BChA1bZB2aYacORi_doUaWspUGjuvC_eF_FeMBsSZTVcnVc7bQpEEor1EovW3rDZrZXG8tlRBixJv9h8Y9l9C7tFmymxE8nakkx56TYMQoW0qpVQK0wXyXrmkbF9XhTCK6e00OejzwsUGkXzm6iezZqZI76rjNPHy83ZXKhUZmAqhneXAVEgbvSnsh9C9HE4nQIA4TBwy2nnmlep9T7Dvs69EUGwmtgEYeDIMxWEMmW3X5hwNkR83EHx1L9Xkk"
    },
    {
      title: "Hidden Gems of the Historic Center",
      description: "Uncover the secrets of old Palermo.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArQZcrWmJXU59FvbD6EVelKW0x0SEurYZFVKexS8HimJZey2U2hu_ut9aufyWBiygTK0Y43NaoyqybACjU_0LSr5rlMT89KEDT_LedsuR-4_7xDiX5FmgQXNbW0mOorLNRPhBRdufgC5iKLqvjSR_sA9Q8UHShvJqeGxQOczYFsAPqaxLKtbxdWmfJ-luJ1-ZLF44wKcN1zEaJui9Wzip67RZbHqEm242o1O2HLIFTSpuIH6qkJR0gwhXZB2vLvQh0tFGr9fIKQreG"
    },
    {
      title: "Artistic Heritage Tour",
      description: "Explore museums and galleries with an expert guide.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC991uQJcxTxtHsCfZkYazXtKdv5ovoGpFwV5osNDXw1V9LR6YUXJ3cEfMc5ensHM_dktYwGkD8HpnXV6gV5_1G5m78HArWxbqYki3Rs30kYpg5zGHn3q907BPvLpX70BffpTOymGecTi1wdXCNiNcc-bXLBmBv0bAwKJGj0Geb3JyfA-2-Ywd1WmX7-tC4vL30Twa972kaqxN1cQl2XoyC6syB-qVjUDLTVOFZpmadcCYJHMtNrrpjMnkPE49v33eLxn35RbhwKSJL"
    }
  ],
  "Culture & Traditions": [
    {
      title: "Street Food Adventure",
      description: "Taste the authentic flavors of Palermo's streets.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkpK193X2ViZIr6MDc71DWRlHd_Ldl5xVLkDBL6w_aGWv_Dtd2VR_xibJ1fXwNnLSQQem2EwU-nHnocQYbgpRhym8yzVKPIW2b6T4ATd27GOhsJZs1s0gOlOS9d5S7o86nQ76NJJLsnBNgko-CTJENXuVpwdoBmG8agWxzin2ncS0fdwhSqxAdZujRtgCtogbs4aIbNt7k6ibT72A5ZUInEaH4Fne37WMdvkDJWxWK9d5bz9-S72J1pzEL1oJSR_5XFSLluoAeKUF6"
    },
    {
      title: "Traditional Crafts Workshop",
      description: "Learn ancient techniques from local artisans.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9GeX2-6kND2Kc0Yf2fRhZX7tgSP2WZ60f04l3o2m4lDtFri537iiEVBTU5DSgiyGPWNMiYptNr6xYIlHHxsEgTlnrzA6sHHtQLZdIGXjcjCNB_eKWBrVflULNsZxRveYPzCcUAkiJnyF_xFwAdsAoQZRQNM6Gonuumtw5vPYhvo-xhVTBBGFDG82mjQpD7uCWUbS1aeJz4Hi9PE0_o5Lgz402dS6cP1LWQfV__wCaDUK5MirC3UKui1-fexuecZGgCgZ_NQFMNCA5"
    },
    {
      title: "Local Market Exploration",
      description: "Experience the vibrant atmosphere of a Sicilian market.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDeuzidxfFUqwiExO37bWTj2qmDejkFdep2Zgm55o9Af7FM40DIcdU4YS3xLbPdfQeib1E3WQDnLOe-cnDFmm4nSU6VBEXGTerMue6VBNWX6Dvm9P9CVdOsu64iXIgyHFrOJFDn3VQWiRJsERlTNb_NniQpO3EZON-TIifV2qfRLMLisiUJTMtCAteGFLSEkhsqLWYmKWkSPqcwkp7MaOxNRWZvwLL0tO06xLHRbJdzWQuxf_WCEjSaSGGQuSp-ltvxG3kmcs7T6wLa"
    }
  ],
  "Food & Wine": [
    {
      title: "Sicilian Wine Tasting",
      description: "Savor the unique wines of the region.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIYhPkifSBI4d671RkS1Y8V1FjVZrpX1LhkN5qwkLfsePG5oiGs9g0Lu3PgfmHpvo6h3Ti47HQTzMn_m4lmnLcr20jwKAPt8VN_Qj8zviKU9oOpv6OyogKvYyBtxpEUsxEppijHn3gjiMuhrhgjmT5ZQfo_PUUOVQhnM3AsNPcmhrtbhYc6p7kp5z9Z7au1SglcfQhWr1FvnPsR7z1gR8VVkko6RTXgjlN9N9NwcME1IvfgJ_9ZVcI9bzzMeK4DDroANMX_JJLKYAE"
    },
    {
      title: "Cooking Class with a Local Chef",
      description: "Learn to cook authentic Sicilian dishes.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBc5oneYzfQZTgPoaFXA08qgdbQsn5nUc2p2DuSbHsj3gKWp6RKVvPrZf6FfT1m6KnzC67-K35QFcNXUM4jBhUYzIb74Bg7nGRhH_gI_4kbVWXxy1b_7lmu1Q-n14fsx65kL6EGqk30Z75sOITlNpX3bLahxhbjyaynYZm0dv_lmvbfRQuMtwQr2tvT5DD84XgpnFuk0_iqoaNgy9fBc7ZfdNgn3iN2InfHmMStlDg-s3-IY4h3f7WZL_DfgJhQH9PblaYtAQOXSv1y"
    },
    {
      title: "Gourmet Food Tour",
      description: "Indulge in a curated culinary journey.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAfKF8wijfdnnl2nFL4QJgvQRtO0FK1cqNK2AD87XUhhodmWKVbbZUQievi_nzBHMmopzSIfczu6fD0zN1xzdD_fyDy8SXCQCp6OH3pLr568q0QQZSl_t88qIi6LZbcm0k9uc6SqgX6RvkLZadKSF1IQ-YDhMy-fuRcyKRN_9-zyQTlFBEn17JKyHz8nYv3JPNa7bzO5JxO63hEJjCFzDm36HBHXLmErqLyJU4oalLYoqo2RXPnDk8NO0MoqiF4EgqZByHKpYmTJLwm"
    }
  ]
};

export default function ExperiencesPage() {
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
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-white">Experiences</span>
            </nav>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tighter fade-in-up">
              Discover
              <span className="block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                Palermo's Soul
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-200 fade-in-up-delay-1 px-2">
              Immerse yourself in the rich tapestry of Palermo's art, history, culture, and culinary delights with our curated experiences. Each activity is designed to connect you with the authentic heart of this vibrant city.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 md:space-x-8 items-center justify-center mt-6 md:mt-8 fade-in-up-delay-2">
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-blue-400 text-lg">palette</span>
                <span className="font-semibold text-sm md:text-base">Art & History</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-green-400 text-lg">restaurant</span>
                <span className="font-semibold text-sm md:text-base">Food & Wine</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="material-symbols-outlined text-yellow-400 text-lg">celebration</span>
                <span className="font-semibold text-sm md:text-base">Culture & Traditions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Curated Experiences
            </h2>
            <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Choose from our carefully selected activities that showcase the best of Palermo's rich heritage and vibrant contemporary culture.
            </p>
          </div>

          {/* Experience Categories */}
          <div className="w-full space-y-16">
            {Object.entries(experiences).map(([category, items]) => (
              <section key={category} className="fade-in-up">
                <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
                  {category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {items.map((experience, index) => (
                    <ExperienceCard
                      key={index}
                      title={experience.title}
                      description={experience.description}
                      image={experience.image}
                      category={category}
                    />
                  ))}
                </div>
              </section>
            ))}

            {/* Additional Info */}
            <div className="text-center mt-12 md:mt-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-text-primary mb-3">
                  Need Help Choosing?
                </h3>
                <p className="text-text-secondary mb-4 md:mb-6 text-sm md:text-base">
                  Our expert team is here to help you find the perfect experiences for your stay in Palermo. Contact us for personalized recommendations.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <a href="/contact">
                    <button className="w-full sm:w-auto bg-primary text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all text-sm md:text-base">
                      Contact Us
                    </button>
                  </a>
                  <a href="tel:+39021234567">
                    <button className="w-full sm:w-auto border border-primary text-primary px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold hover:bg-primary/10 transition-all text-sm md:text-base">
                      Call Now
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>
    
  );
}