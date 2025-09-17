import { Metadata } from "next";
import { notFound } from "next/navigation";
import { roomStructuredData, breadcrumbStructuredData } from "@/lib/structured-data";
import { suiteQuaroniRooms, getRoomBySlug } from "@/data/suite-quaroni-rooms";
import RoomDetailPageContent from "./RoomDetailPageContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = getRoomBySlug(slug);
  
  if (!room) {
    return {
      title: "Camera Non Trovata"
    };
  }

  return {
    title: `Camera ${room.name} | Suite Quaroni Palermo`,
    description: room.description,
    openGraph: {
      title: `Camera ${room.name} | Suite Quaroni B&B Centro Storico Palermo`,
      description: room.description,
      images: [room.images[0]],
    },
  };
}

export async function generateStaticParams() {
  return suiteQuaroniRooms.map((room) => ({
    slug: room.slug,
  }));
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  const roomData = roomStructuredData({
    name: room.name,
    description: room.description,
    price: room.price,
    image: room.images[0],
    amenities: room.amenities.map((a) => a.label)
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
      <RoomDetailPageContent room={room} />
    </>
  );
}

