import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glassmorphism" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", padding = "md", children, ...props }, ref) => {
    const baseClasses = "rounded-2xl transition-all duration-300";
    
    const variants = {
      default: "bg-white border border-gray-200 shadow-md hover:shadow-lg",
      glassmorphism: "glassmorphism shadow-lg hover:shadow-2xl",
      elevated: "bg-white shadow-xl hover:shadow-2xl hover:scale-105"
    };

    const paddings = {
      none: "",
      sm: "p-4",
      md: "p-6",
      lg: "p-8"
    };

    return (
      <div
        className={cn(
          baseClasses,
          variants[variant],
          paddings[padding],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;