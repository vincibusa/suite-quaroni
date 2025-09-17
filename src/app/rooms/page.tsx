import { Metadata } from "next";
import RoomsPageClient from "./RoomsPageClient";

export const metadata: Metadata = {
  title: "Luxury Rooms in Palermo | Suite Quaroni - Modern Comfort Meets Sicilian Style",
  description: "Discover our collection of elegantly appointed rooms in the heart of Palermo. Each room combines modern luxury with authentic Sicilian charm, offering the perfect base for your Palermo adventure.",
  keywords: "luxury hotel Palermo, boutique rooms Sicily, Palermo accommodation, historic center hotels"
};

export default function RoomsPage() {
  return <RoomsPageClient />;
}