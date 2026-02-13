'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialCard } from './testimonial-card';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Wade Warren',
    role: 'CEO, Founder',
    text: 'Exceptional Service! Our experience with Estatein was outstanding. They helped us understand the market and guided us through the entire process. Their team demonstrated expertise and professionalism.',
    rating: 5,
    image: '/images/wade.png',
  },
  {
    id: 2,
    name: 'Emily Thompson',
    role: 'Investor',
    text: 'Efficient and Reliable! Estatein exceeded our expectations with top-notch service. They helped us quickly find a great price. We couldn\'t be happier with the results and their commitment to our satisfaction.',
    rating: 5,
    image: '/images/emelie.png',
  },
  {
    id: 3,
    name: 'John Morris',
    role: 'Advisor',
    text: 'Trusted Advisors! The Estatein team provided expert guidance through the entire buying process. Their knowledge and commitment impressed us. We recommend them to anyone looking for quality real estate services.',
    rating: 5,
    image: '/images/john.png',
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    role: 'Property Owner',
    text: 'Outstanding support throughout our journey. The team at Estatein made the entire process seamless and transparent. Highly recommended for anyone seeking professional real estate guidance.',
    rating: 5,
    image: '/images/emelie.png',
  },
  {
    id: 5,
    name: 'Michael Chen',
    role: 'Investor',
    text: 'Best real estate experience we\'ve had. The Estatein team goes above and beyond to ensure client satisfaction. Their market insights proved invaluable in our investment decisions.',
    rating: 5,
    image: '/images/john.png',
  },
  {
    id: 6,
    name: 'Lisa Anderson',
    role: 'Homebuyer',
    text: 'Exceptional attention to detail and customer care. Estatein made finding our dream home easy and enjoyable. We\'ll definitely work with them again for future real estate needs.',
    rating: 5,
    image: '/images/wade.png',
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, TESTIMONIALS.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleTestimonials = TESTIMONIALS.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="bg-[#141414] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-gray-400">Read the success stories and testimonials from our satisfied clients. Discover why they chose Estatein for their real estate needs.</p>
          </div>
          <button className="mt-6 md:mt-0 text-purple-500 hover:text-purple-400 font-semibold transition-colors">
            View All Testimonials
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <div className="text-gray-400 text-sm">
              {currentIndex + 1} of {TESTIMONIALS.length}
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
            {Array.from({ length: TESTIMONIALS.length - itemsPerView + 1 }).map((_, idx) => (
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
