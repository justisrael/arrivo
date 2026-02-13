'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import TestimonialCard from './TestimonialCard';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [itemsPerView, setItemsPerView] = useState(3);
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex(Math.max(0, currentIndex - 1));
    } else {
      setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = currentIndex * (100 / itemsPerView);
      carouselRef.current.style.transform = `translateX(-${scrollAmount}%)`;
    }
  }, [currentIndex]);

  return (
    <section className="py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Image
              src="/images/heading-icon.svg"
              alt=""
              width={48}
              height={48}
              className="w-12 h-12 mb-4"
            />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">What Our Clients Say</h2>
            <p className="text-gray-400">
              Read the success stories and hear testimonials from our satisfied clients. Discover why they chose Estatein.
            </p>
          </div>
          <a href="#" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
            View All Testimonials
          </a>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${(testimonials.length / itemsPerView) * 100}%`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full sm:w-1/2 lg:w-1/3 px-3 flex-shrink-0"
                >
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-gray-400">
              {currentIndex + 1} of {testimonials.length}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={currentIndex === 0}
                className="p-2 border border-gray-700 rounded-lg hover:border-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <ChevronLeft size={20} className="text-gray-400" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={currentIndex === maxIndex}
                className="p-2 border border-gray-700 rounded-lg hover:border-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
              >
                <ChevronRight size={20} className="text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
