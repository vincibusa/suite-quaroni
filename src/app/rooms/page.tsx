import { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import RoomCard from "@/components/room/RoomCard";

export const metadata: Metadata = {
  title: "Our Exquisite Rooms",
  description: "Discover the unique charm of each room at Suite Quaroni, inspired by the landmarks of Palermo. Choose from our selection of luxury accommodations.",
};

// Mock data - in a real app this would come from a database or CMS
const rooms = [
  {
    id: "1",
    name: "Teatro Massimo",
    description: "A luxurious suite with a balcony overlooking the city, perfect for couples.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDN5XuVzCEuEskOvORZg4YpA2rmUncJTCh1DJBpMPOnRgreoPph7GJMwCzPYg-0wSEf2ZCxM0h-hJl_dbhyioNJC8WfzEI1sjNdEgV1R47AjQJ-BoYSozQba-CcK3t4F3KXemx7EkkShdBs4F6OwhkF0bq87oo_Ouwv1gnX1axrJ1B5yQhk7skm3d-way-xnc_WvJAYx854y_iqsy54n7BbY7q8bs-Gyj_7TQiMc1mpiyglYeJr-UxCnh0MFgRQHqePrIBUPCV9oW-R",
    price: 180,
    slug: "teatro-massimo"
  },
  {
    id: "2", 
    name: "Cattedrale",
    description: "A spacious room with a view of the historic cathedral, ideal for families.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdGN6HM23hlvuAgaN7JVwnxe7k05TrgWTcXkzupOqE8PgWSzWjXuX-G5zMYzLQeRL27oJxW8TIfKGqsE0WovzG1TOQCOr7xUDSeT8g3nhkTPGnMS3bTZDt-QttFxxo7x8emhAQuUS-WDto0ZSOOuejZMgMR11V-hrmfT81yT_kCesj935jx25dq5e8Xw0utBfeGMRCxQm281BxQHeWJ_6hOtr7538EYPjcTP8oba4lLMvbjyeGDRn-Nl2YkqLKeuuMvlpHcbWl4uxe",
    price: 160,
    slug: "cattedrale"
  },
  {
    id: "3",
    name: "Palazzo dei Normanni", 
    description: "An elegant room with a private terrace, offering a tranquil retreat.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhv8SeezH-MXEgSK-wPODlw5uDGRPhEo3BKpRgT__etyGH5PigdBmwlFykjfrvH13HmHupRxDF_qb3KFH27QE-2AwPGuYCQKmV1-RSVNeVIAjsjzwusIv-NS9WdqX8NJy2-XBgVnGx7YYxO2MJS4UluSowYDeQr1-De6hWL5--hTb6oPs_4vYhso7gnEAcb0ou0HJSRHES7zoBoWgvrSZmxwdD62Etil6OZXEiQxxS_PrjDheDBWf95BmYPx2T-0lA2HayGg-t6gmZ",
    price: 200,
    slug: "palazzo-dei-normanni"
  }
];

export default function RoomsPage() {
  return (
    <div className="relative min-h-screen w-full bg-cover bg-fixed bg-center bg-white" 
      >
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />
      
      <div className="relative z-10 flex-1 px-4 py-16 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            {/* Page Title */}
            <div className="text-center mb-16 text-black">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                Our Exquisite Rooms
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-black">
                Discover the unique charm of each room at Suite Quaroni, inspired by the landmarks of Palermo.
              </p>
            </div>

            {/* Rooms Grid */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
              {rooms.map((room) => (
                <RoomCard
                  key={room.id}
                  id={room.id}
                  name={room.name}
                  description={room.description}
                  image={room.image}
                  price={room.price}
                  slug={room.slug}
                />
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                  Need Help Choosing?
                </h2>
                <p className="text-text-secondary mb-6">
                  Our team is here to help you find the perfect room for your stay in Palermo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="inline-block">
                    <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-opacity-90 transition-all">
                      Contact Us
                    </button>
                  </a>
                  <a href="tel:+39021234567" className="inline-block">
                    <button className="border border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary/10 transition-all">
                      Call Now
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