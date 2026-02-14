'use client';

import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PropertyCard } from './property-card';
import { PROPERTIES } from '@/features/properties';


const FEATURED_PROPERTIES = PROPERTIES.map(({ id, title, description, price, bedrooms, bathrooms, sqft, image, slug }) => ({
  id,
  title,
  description,
  price,
  bedrooms,
  bathrooms,
  sqft,
  image,
  slug,
}));

export function FeaturedProperties() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, FEATURED_PROPERTIES.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleProperties = useMemo(() => FEATURED_PROPERTIES.slice(currentIndex, currentIndex + itemsPerView), [currentIndex, itemsPerView]);

  return (
    <section className="bg-[#141414] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Properties</h2>
            <p className="text-gray-400">Discover a curated selection f exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
          </div>
          <button className="mt-6 md:mt-0 text-purple-500 hover:text-purple-400 font-semibold transition-colors">
            View All Properties
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
            {visibleProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <div className="text-gray-400 text-sm">
              {currentIndex + 1} of {FEATURED_PROPERTIES.length}
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
            {Array.from({ length: FEATURED_PROPERTIES.length - itemsPerView + 1 }).map((_, idx) => (
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
