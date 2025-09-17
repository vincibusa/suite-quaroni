"use client";

import { useState } from "react";

interface FilterState {
  search: string;
  priceRange: [number, number];
  amenities: string[];
  sortBy: string;
}

interface RoomFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  totalResults: number;
}

const amenityOptions = [
  "King-size bed",
  "Queen-size bed", 
  "Private balcony",
  "Private terrace",
  "City views",
  "Cathedral views",
  "Garden views",
  "Free Wi-Fi",
  "Work desk",
  "Family-friendly",
  "Luxury bathroom"
];

export default function RoomFilters({ onFilterChange, totalResults }: RoomFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    priceRange: [100, 300],
    amenities: [],
    sortBy: "price-asc"
  });

  const handleFilterUpdate = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  const toggleAmenity = (amenity: string) => {
    const newAmenities = filters.amenities.includes(amenity)
      ? filters.amenities.filter(a => a !== amenity)
      : [...filters.amenities, amenity];
    handleFilterUpdate({ amenities: newAmenities });
  };

  const clearFilters = () => {
    const resetFilters = {
      search: "",
      priceRange: [100, 300] as [number, number],
      amenities: [],
      sortBy: "price-asc"
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-lg border border-gray-200 sticky top-20 md:top-24 z-40">
      {/* Mobile Filter Toggle */}
      <div className="md:hidden p-3 md:p-4 border-b border-gray-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-left touch-manipulation"
        >
          <div>
            <span className="font-semibold text-text-primary text-sm md:text-base">Filter & Search</span>
            <span className="block text-xs md:text-sm text-text-secondary">{totalResults} rooms found</span>
          </div>
          <span className="material-symbols-outlined text-lg">
            {isOpen ? 'expand_less' : 'expand_more'}
          </span>
        </button>
      </div>

      {/* Filter Content */}
      <div className={`p-4 md:p-6 space-y-4 md:space-y-6 ${isOpen ? 'block' : 'hidden md:block'}`}>
        {/* Search Bar */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-primary">Search Rooms</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search by room name or feature..."
              value={filters.search}
              onChange={(e) => handleFilterUpdate({ search: e.target.value })}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400">
              search
            </span>
          </div>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-text-primary">Price Range (per night)</label>
          <div className="space-y-3">
            <input
              type="range"
              min="100"
              max="300"
              step="10"
              value={filters.priceRange[1]}
              onChange={(e) => handleFilterUpdate({ 
                priceRange: [filters.priceRange[0], parseInt(e.target.value)] 
              })}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-sm text-text-secondary">
              <span>€{filters.priceRange[0]}</span>
              <span>€{filters.priceRange[1]}+</span>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="space-y-3">
          <label className="text-sm font-semibold text-text-primary">Amenities</label>
          <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
            {amenityOptions.map((amenity) => (
              <label key={amenity} className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <input
                  type="checkbox"
                  checked={filters.amenities.includes(amenity)}
                  onChange={() => toggleAmenity(amenity)}
                  className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                />
                <span className="text-sm text-text-primary">{amenity}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Sort By */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-text-primary">Sort By</label>
          <select
            value={filters.sortBy}
            onChange={(e) => handleFilterUpdate({ sortBy: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary"
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name A-Z</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>

        {/* Active Filters & Clear */}
        {(filters.search || filters.amenities.length > 0) && (
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-text-primary">Active Filters</span>
              <button
                onClick={clearFilters}
                className="text-sm text-primary hover:text-primary-color font-medium"
              >
                Clear All
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.search && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Search: "{filters.search}"
                  <button onClick={() => handleFilterUpdate({ search: "" })}>
                    <span className="material-symbols-outlined text-xs">close</span>
                  </button>
                </span>
              )}
              {filters.amenities.map((amenity) => (
                <span key={amenity} className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  {amenity}
                  <button onClick={() => toggleAmenity(amenity)}>
                    <span className="material-symbols-outlined text-xs">close</span>
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <span className="text-text-secondary">
              <strong className="text-text-primary">{totalResults}</strong> rooms available
            </span>
            <span className="flex items-center gap-1 text-green-600">
              <span className="material-symbols-outlined text-sm">verified</span>
              Live availability
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}