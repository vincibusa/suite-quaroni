import { Metadata } from "next";
import ExperienceCard from "@/components/ui/ExperienceCard";

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
    <div className="relative min-h-screen w-full bg-cover bg-center bg-fixed"
         style={{fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif'}}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      
      <div className="relative z-10 flex justify-center py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="w-full max-w-7xl flex flex-col items-center">
            {/* Page Title */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-extrabold leading-tight text-black tracking-tight">
                Explore Palermo
              </h1>
              <p className="mt-4 max-w-3xl text-lg text-black">
                Discover the rich tapestry of Palermo's art, history, culture, and culinary delights with our curated activities. Each experience is designed to immerse you in the heart of this vibrant city.
              </p>
            </div>

            {/* Experience Categories */}
            <div className="w-full space-y-16">
              {Object.entries(experiences).map(([category, items]) => (
                <section key={category}>
                  <h2 className="text-3xl font-bold tracking-tight text-black px-4 pb-8">
                    {category}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-black mb-4">
                  Ready to Explore Palermo?
                </h2>
                <p className="text-black mb-6">
                  Contact us to book these experiences or get personalized recommendations for your stay.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="inline-block">
                    <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all">
                      Contact Us
                    </button>
                  </a>
                  <a href="/rooms" className="inline-block">
                    <button className="border border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary/10 transition-all">
                      Book Your Stay
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}