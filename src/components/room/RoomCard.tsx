import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

interface RoomCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: number;
  slug: string;
}

export default function RoomCard({ id, name, description, image, price, slug }: RoomCardProps) {
  return (
      <Link href={`/rooms/${slug}`}>
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 glassmorphism h-80">
      {/* Image */}
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={`${name} Room`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-sm text-gray-300 mb-3">{description}</p>
        {price && (
          <div className="mb-4">
            <span className="text-xl font-bold text-white">€{price}</span>
            <span className="text-gray-300 ml-1 text-sm">per night</span>
          </div>
        )}

      </div>
    </div>
    </Link>
  );
}