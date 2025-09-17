"use client";

import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerClasses = "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm";
  const containerClasses = "flex items-center justify-between glassmorphism px-6 py-5 shadow-sm w-full";
  const textColor = "text-text-primary";
  const linkColor = "text-text-primary hover:text-primary-color";

  return (
    <header className={`${headerClasses} ${className}`}>
      <div className={containerClasses}>
        {/* Logo */}
        <Link href="/" className={`flex items-center gap-3 ${textColor}`}>
          <svg 
            className="h-8 w-8 text-primary-color" 
            fill="none" 
            viewBox="0 0 48 48" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              clipRule="evenodd" 
              d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" 
              fill="currentColor" 
              fillRule="evenodd"
            />
          </svg>
          <h2 className="text-xl font-bold">Suite Quaroni</h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className={`text-sm font-medium transition-colors ${linkColor}`}>
            Home
          </Link>
          <Link href="/rooms" className={`text-sm font-medium transition-colors ${linkColor}`}>
            Rooms
          </Link>
          <Link href="/experiences" className={`text-sm font-medium transition-colors ${linkColor}`}>
            Experiences
          </Link>
          <Link href="/discover" className={`text-sm font-medium transition-colors ${linkColor}`}>
            Discover Palermo
          </Link>
          <Link href="/contact" className={`text-sm font-medium transition-colors ${linkColor}`}>
            Contact
          </Link>
        </nav>

        {/* Desktop Book Now Button */}
        <button className="hidden md:flex items-center justify-center rounded-xl h-10 px-6 bg-primary text-white text-sm font-bold shadow-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
          Book Now
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`material-symbols-outlined text-3xl ${textColor}`}>
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link 
              href="/" 
              className="text-sm font-medium text-text-primary hover:text-primary-color transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/rooms" 
              className="text-sm font-medium text-text-primary hover:text-primary-color transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Rooms
            </Link>
            <Link 
              href="/experiences" 
              className="text-sm font-medium text-text-primary hover:text-primary-color transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Experiences
            </Link>
            <Link 
              href="/discover" 
              className="text-sm font-medium text-text-primary hover:text-primary-color transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Discover Palermo
            </Link>
            <Link 
              href="/contact" 
              className="text-sm font-medium text-text-primary hover:text-primary-color transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button className="mt-2 w-full flex items-center justify-center rounded-xl h-12 px-6 bg-primary text-white text-sm font-bold shadow-lg hover:bg-opacity-90 transition-all">
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}