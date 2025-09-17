"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface BookingWidgetProps {
  price: number;
  roomName: string;
  className?: string;
}

export default function BookingWidget({ price, roomName, className = "" }: BookingWidgetProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [isLoading, setIsLoading] = useState(false);

  const handleBooking = async () => {
    setIsLoading(true);
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    // In a real app, this would navigate to payment or send to booking system
    alert(`Booking request sent for ${roomName}!`);
  };

  return (
    <div className={`sticky top-28 ${className}`}>
      <Card variant="elevated" className="shadow-lg">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-4xl font-black text-text-primary tracking-tighter">
              €{price}
            </span>
            <span className="text-base font-bold text-text-secondary">per night</span>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            {/* Check-in */}
            <div>
              <label htmlFor="check-in" className="block text-sm font-medium text-text-primary mb-1">
                Check-in
              </label>
              <input
                type="date"
                id="check-in"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Check-out */}
            <div>
              <label htmlFor="check-out" className="block text-sm font-medium text-text-primary mb-1">
                Check-out
              </label>
              <input
                type="date"
                id="check-out"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                min={checkIn || new Date().toISOString().split('T')[0]}
              />
            </div>

            {/* Guests */}
            <div>
              <label htmlFor="guests" className="block text-sm font-medium text-text-primary mb-1">
                Guests
              </label>
              <select
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="1">1 guest</option>
                <option value="2">2 guests</option>
                <option value="3">3 guests</option>
                <option value="4">4 guests</option>
              </select>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full mb-4"
            onClick={handleBooking}
            isLoading={isLoading}
            disabled={!checkIn || !checkOut}
          >
            {isLoading ? "Processing..." : "Book Now"}
          </Button>

          <p className="text-xs text-center text-text-secondary">
            You won't be charged yet
          </p>
        </div>
      </Card>
    </div>
  );
}