import Image from "next/image";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import Button from "./Button";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: "sm" | "md" | "lg" | "xl" | "full";
  overlay?: "light" | "medium" | "dark";
  textAlign?: "left" | "center" | "right";
  children?: ReactNode;
  showCTA?: boolean;
  ctaText?: string;
  ctaHref?: string;
  onCTAClick?: () => void;
  className?: string;
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  height = "lg",
  overlay = "medium",
  textAlign = "center",
  children,
  showCTA = false,
  ctaText = "Book Now",
  ctaHref,
  onCTAClick,
  className = ""
}: HeroProps) {
  const heights = {
    sm: "h-[50vh] min-h-[400px]",
    md: "h-[60vh] min-h-[500px]",
    lg: "h-[85vh] min-h-[600px]",
    xl: "h-[100vh] min-h-[700px]",
    full: "h-screen"
  };

  const overlays = {
    light: "bg-black/20",
    medium: "bg-black/40",
    dark: "bg-black/60"
  };

  const textAlignments = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end"
  };

  return (
    <section className={cn("relative w-full", heights[height], className)}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      
      {/* Overlay */}
      <div className={cn("absolute inset-0", overlays[overlay])} />
      
      {/* Hero Gradient (optional) */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Content */}
      <div className={cn(
        "relative z-10 flex h-full flex-col justify-center px-4",
        textAlignments[textAlign]
      )}>
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tighter mb-4 text-white drop-shadow-lg">
            {title}
          </h1>
          
          {subtitle && (
            <p className="max-w-2xl text-lg md:text-xl font-light mb-8 text-gray-200 drop-shadow-md">
              {subtitle}
            </p>
          )}
          
          {showCTA && (
            <div className="mb-8">
              {ctaHref ? (
                <a href={ctaHref}>
                  <Button size="xl" className="shadow-2xl">
                    {ctaText}
                  </Button>
                </a>
              ) : (
                <Button size="xl" onClick={onCTAClick} className="shadow-2xl">
                  {ctaText}
                </Button>
              )}
            </div>
          )}
          
          {children}
        </div>
      </div>
    </section>
  );
}