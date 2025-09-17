import Image from "next/image";
import Button from "./Button";

interface ExperienceCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
}

export default function ExperienceCard({ title, description, image, category }: ExperienceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 glassmorphism">
      {/* Image */}
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
        <Button variant="primary" size="sm" className="inline-flex items-center gap-2">
          Learn More 
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Button>
      </div>
    </div>
  );
}