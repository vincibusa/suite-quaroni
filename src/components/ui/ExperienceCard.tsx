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
    <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-105 glassmorphism">
      {/* Image */}
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
            {category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2 leading-tight">{title}</h3>
        <p className="text-sm text-gray-200 mb-4 leading-relaxed">{description}</p>
        <Button variant="primary" size="sm" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all">
          Discover More 
          <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">arrow_forward</span>
        </Button>
      </div>
    </div>
  );
}