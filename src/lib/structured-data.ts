export const hotelStructuredData = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Suite Quaroni",
  "description": "Experience the charm of Palermo in our elegant B&B. Luxury accommodations in the heart of Sicily with personalized service and authentic Sicilian hospitality.",
  "url": "https://suitequaroni.com",
  "image": [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD7pg-7TsuO_BE07_1U-tE08RdPhxZqsTNpE2UgdjOe6Yn-qk_svcWdgPaCYkpSWE4VCOmcBWjVZ37K5hT7jksHCXRnYKp0x-YJ5rsH_LAojfjj2pjKSZPPUbRPyBsVhjmcGewRznStg-16OIHxAlS5XDUMI9XagcaH3ksTDhKm-1Hk_62UJyGXnLQUuFhL61Co2qwk6J1LlJLRxevT0BSmnjKwL4-2a4wSl9budZ9CVXFFlp6C6kfNhyVcUnIBAmQMcA7qH3TWPJ4J"
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via Roma, 123",
    "addressLocality": "Palermo",
    "addressRegion": "Sicily",
    "postalCode": "90133",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 38.1157,
    "longitude": 13.3615
  },
  "telephone": "+39 02 123 4567",
  "email": "info@suitequaroni.com",
  "priceRange": "€€",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "Free WiFi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification", 
      "name": "Air conditioning",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Private bathroom",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "City views",
      "value": true
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "124"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Marco Rossi"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Exceptional hospitality and beautiful rooms in the heart of Palermo. The personalized service made our stay unforgettable."
    }
  ]
};

export const breadcrumbStructuredData = (items: Array<{name: string, item: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.item
  }))
});

export const roomStructuredData = (room: {
  name: string;
  description: string;
  price: number;
  image: string;
  amenities: string[];
}) => ({
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": `${room.name} - Suite Quaroni`,
  "description": room.description,
  "image": room.image,
  "offers": {
    "@type": "Offer",
    "price": room.price,
    "priceCurrency": "EUR",
    "availability": "https://schema.org/InStock"
  },
  "amenityFeature": room.amenities.map(amenity => ({
    "@type": "LocationFeatureSpecification",
    "name": amenity,
    "value": true
  }))
});