'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PropertyCard } from './property-card';

const PROPERTIES = [
  {
    id: 1,
    title: 'Seaside Serenity Villa',
    description: 'A stunning 5-bedroom villa with ocean views and private beach access.',
    price: '$650,000',
    bedrooms: 4,
    bathrooms: 3,
    sqft: '3,500',
    image: '/images/seaside-serenity-villa.png',
  },
  {
    id: 2,
    title: 'Metropolitan Haven',
    description: 'Modern apartment in the heart of the city with luxury amenities and gated security.',
    price: '$550,000',
    bedrooms: 3,
    bathrooms: 2,
    sqft: '2,800',
    image: '/images/metropolitan-haven.png',
  },
  {
    id: 3,
    title: 'Rustic Retreat Cottage',
    description: 'Charming countryside home perfect for a peaceful getaway with scenic views.',
    price: '$380,000',
    bedrooms: 3,
    bathrooms: 2,
    sqft: '2,200',
    image: '/images/rustic-retreat-cuttage.png',
  },
  {
    id: 4,
    title: 'Modern Mountain Estate',
    description: 'Contemporary mountain home with panoramic views and smart home integration.',
    price: '$720,000',
    bedrooms: 5,
    bathrooms: 4,
    sqft: '4,200',
    image: '/images/metropolitan-haven.png',
  },
  {
    id: 5,
    title: 'Urban Luxury Penthouse',
    description: 'Exclusive penthouse with floor-to-ceiling windows and rooftop access.',
    price: '$900,000',
    bedrooms: 3,
    bathrooms: 3,
    sqft: '3,100',
    image: '/images/rustic-retreat-cuttage.png',
  },
  {
    id: 6,
    title: 'Peaceful Country Haven',
    description: 'Spacious country estate with gardens and equestrian facilities.',
    price: '$480,000',
    bedrooms: 4,
    bathrooms: 3,
    sqft: '3,800',
    image: '/images/seaside-serenity-villa.png',
  },
];

export function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, PROPERTIES.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleProperties = PROPERTIES.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="bg-[#141414] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Properties</h2>
            <p className="text-gray-400">Discover a curated selection of exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
          </div>
          <button className="mt-6 md:mt-0 text-purple-500 hover:text-purple-400 font-semibold transition-colors">
            View All Properties
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <div className="text-gray-400 text-sm">
              {currentIndex + 1} of {PROPERTIES.length}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="bg-zinc-800 hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: PROPERTIES.length - itemsPerView + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${idx === currentIndex ? 'bg-purple-600' : 'bg-zinc-700'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
