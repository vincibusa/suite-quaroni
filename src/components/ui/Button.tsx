import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: "bg-primary text-white shadow-lg hover:bg-opacity-90 hover:shadow-xl hover:scale-105",
      secondary: "bg-white text-primary border border-primary shadow-md hover:bg-gray-50 hover:shadow-lg",
      outline: "border border-gray-300 text-text-primary hover:bg-gray-50 hover:border-gray-400",
      ghost: "text-text-primary hover:bg-gray-100"
    };

    const sizes = {
      sm: "h-8 px-4 text-xs",
      md: "h-10 px-6 text-sm",
      lg: "h-12 px-8 text-base",
      xl: "h-14 px-10 text-lg"
    };

    return (
      <button
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          isLoading && "pointer-events-none",
          className
        )}
        disabled={disabled || isLoading}
        ref={ref}
        {...props}
      >
        {isLoading && (
          <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;