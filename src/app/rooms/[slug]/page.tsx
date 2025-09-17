import { Metadata } from "next";
import { notFound } from "next/navigation";
import ImageGallery from "@/components/ui/ImageGallery";
import BookingWidget from "@/components/booking/BookingWidget";
import AmenityItem from "@/components/room/AmenityItem";
import { roomStructuredData, breadcrumbStructuredData } from "@/lib/structured-data";

// Mock data - in a real app this would come from a database
const rooms = {
  "teatro-massimo": {
    id: "1",
    name: "Teatro Massimo",
    description: "Experience the epitome of luxury in our Teatro Massimo suite, featuring a king-size bed, a private balcony with stunning city views, and a spacious living area. The suite is elegantly furnished with modern amenities, including a flat-screen TV, a minibar, and a coffee machine. The en-suite bathroom boasts a walk-in shower and premium toiletries.",
    price: 180,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCEnCwxikKHiythwFVDnEbxk_vFt26jLlUVwmxIubozq2ZAFlcZgttruoSk6x4Yd9QsLAyZ_MUEkcnaIAwBeJTI_stpxlrwQAKgsc7u7bfJVUr8Iq80LTT_agz-sjP6-7L30iBlpXURZgStpqnjzsVuUmTi0414kOjjnq3C-zWTsLbl4e5bjzIWGC5oA-q1e5hCsGIUt1qAnmtCirA-rPW2XIu1n1BIPL3KS1Ixlad5JFHd9DYEkHf5E8TC5Q95PkwxUsn2AC1ffl_8",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDN5XuVzCEuEskOvORZg4YpA2rmUncJTCh1DJBpMPOnRgreoPph7GJMwCzPYg-0wSEf2ZCxM0h-hJl_dbhyioNJC8WfzEI1sjNdEgV1R47AjQJ-BoYSozQba-CcK3t4F3KXemx7EkkShdBs4F6OwhkF0bq87oo_Ouwv1gnX1axrJ1B5yQhk7skm3d-way-xnc_WvJAYx854y_iqsy54n7BbY7q8bs-Gyj_7TQiMc1mpiyglYeJr-UxCnh0MFgRQHqePrIBUPCV9oW-R"
    ],
    amenities: [
      { icon: "king_bed", label: "King-size bed" },
      { icon: "balcony", label: "Private balcony" },
      { icon: "location_city", label: "City views" },
      { icon: "living", label: "Living area" },
      { icon: "tv", label: "Flat-screen TV" },
      { icon: "local_bar", label: "Minibar" },
      { icon: "coffee_maker", label: "Coffee machine" },
      { icon: "shower", label: "Walk-in shower" },
      { icon: "soap", label: "Premium toiletries" },
      { icon: "wifi", label: "Free Wi-Fi" }
    ]
  },
  "cattedrale": {
    id: "2",
    name: "Cattedrale",
    description: "A spacious room with a view of the historic cathedral, ideal for families. This elegantly decorated room features traditional Sicilian design elements combined with modern comfort. The room includes a comfortable seating area, work desk, and all essential amenities for a memorable stay.",
    price: 160,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdGN6HM23hlvuAgaN7JVwnxe7k05TrgWTcXkzupOqE8PgWSzWjXuX-G5zMYzLQeRL27oJxW8TIfKGqsE0WovzG1TOQCOr7xUDSeT8g3nhkTPGnMS3bTZDt-QttFxxo7x8emhAQuUS-WDto0ZSOOuejZMgMR11V-hrmfT81yT_kCesj935jx25dq5e8Xw0utBfeGMRCxQm281BxQHeWJ_6hOtr7538EYPjcTP8oba4lLMvbjyeGDRn-Nl2YkqLKeuuMvlpHcbWl4uxe"
    ],
    amenities: [
      { icon: "bed", label: "Queen-size bed" },
      { icon: "church", label: "Cathedral views" },
      { icon: "family_restroom", label: "Family-friendly" },
      { icon: "chair", label: "Seating area" },
      { icon: "desk", label: "Work desk" },
      { icon: "tv", label: "Flat-screen TV" },
      { icon: "shower", label: "Private bathroom" },
      { icon: "wifi", label: "Free Wi-Fi" }
    ]
  },
  "palazzo-dei-normanni": {
    id: "3",
    name: "Palazzo dei Normanni",
    description: "An elegant room with a private terrace, offering a tranquil retreat. This sophisticated suite captures the essence of Norman architecture with contemporary luxury. The private terrace provides a peaceful outdoor space perfect for morning coffee or evening aperitifs.",
    price: 200,
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhv8SeezH-MXEgSK-wPODlw5uDGRPhEo3BKpRgT__etyGH5PigdBmwlFykjfrvH13HmHupRxDF_qb3KFH27QE-2AwPGuYCQKmV1-RSVNeVIAjsjzwusIv-NS9WdqX8NJy2-XBgVnGx7YYxO2MJS4UluSowYDeQr1-De6hWL5--hTb6oPs_4vYhso7gnEAcb0ou0HJSRHES7zoBoWgvrSZmxwdD62Etil6OZXEiQxxS_PrjDheDBWf95BmYPx2T-0lA2HayGg-t6gmZ"
    ],
    amenities: [
      { icon: "king_bed", label: "King-size bed" },
      { icon: "deck", label: "Private terrace" },
      { icon: "nature", label: "Garden views" },
      { icon: "chair", label: "Elegant furnishing" },
      { icon: "local_bar", label: "Minibar" },
      { icon: "coffee_maker", label: "Coffee machine" },
      { icon: "bathtub", label: "Luxury bathroom" },
      { icon: "wifi", label: "Free Wi-Fi" }
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = rooms[slug as keyof typeof rooms];
  
  if (!room) {
    return {
      title: "Room Not Found"
    };
  }

  return {
    title: `${room.name} Room`,
    description: room.description,
    openGraph: {
      title: `${room.name} Room | Suite Quaroni`,
      description: room.description,
      images: [room.images[0]],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(rooms).map((slug) => ({
    slug,
  }));
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const room = rooms[slug as keyof typeof rooms];

  if (!room) {
    notFound();
  }

  const roomData = roomStructuredData({
    name: room.name,
    description: room.description,
    price: room.price,
    image: room.images[0],
    amenities: room.amenities.map(a => a.label)
  });

  const breadcrumbData = breadcrumbStructuredData([
    { name: "Home", item: "https://suitequaroni.com" },
    { name: "Rooms", item: "https://suitequaroni.com/rooms" },
    { name: room.name, item: `https://suitequaroni.com/rooms/${slug}` }
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(roomData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      <div className="px-10 sm:px-20 md:px-40 flex flex-1 justify-center py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl w-full">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <ImageGallery 
              images={room.images}
              alt={room.name}
              className="mb-8"
            />

            {/* Room Details */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-text-primary tracking-tight mb-4">
                {room.name}
              </h1>
              <p className="text-text-secondary text-base leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-2xl font-bold text-text-primary tracking-tight mb-6">
                Amenities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
                {room.amenities.map((amenity, index) => (
                  <AmenityItem 
                    key={index}
                    icon={amenity.icon}
                    label={amenity.label}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <BookingWidget 
              price={room.price}
              roomName={room.name}
            />
          </div>
        </div>
      </div>
    </>
  );
}