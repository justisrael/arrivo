'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

export default function FAQ({ faqs }: FAQProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Number of items visible on large screens
  const totalItems = faqs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  return (
    <section className="py-24 px-4 md:px-6 lg:px-12 bg-background border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-4xl">
            <Image
              src="/images/heading-icon.svg"
              alt=""
              width={48}
              height={48}
              className="w-12 h-12 mb-4"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
              Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
            </p>
          </div>
          <Button variant="outline" className="bg-[#1A1A1A] border-zinc-800 text-white hover:bg-zinc-800 rounded-lg whitespace-nowrap px-6">
            View All FAQ's
          </Button>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden mb-12">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] border border-zinc-800 rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[300px]"
              >
                <div>
                  <h3 className="text-xl font-bold text-white mb-6 leading-tight">
                    {faq.question}
                  </h3>
                  <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8">
                    {faq.answer}
                  </p>
                </div>
                <Button variant="outline" className="w-fit bg-[#1A1A1A] border-zinc-800 text-white hover:bg-zinc-800 rounded-lg px-6">
                  Read More
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="flex items-center justify-between pt-8 border-t border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">
              {(currentIndex + 1).toString().padStart(2, '0')}
            </span>
            <span className="text-zinc-600">of {totalItems.toString().padStart(2, '0')}</span>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="bg-zinc-900 border-zinc-800 rounded-full hover:bg-zinc-800 h-12 w-12"
            >
              <ChevronLeft size={24} className="text-white" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="bg-zinc-900 border-zinc-800 rounded-full hover:bg-zinc-800 h-12 w-12"
            >
              <ChevronRight size={24} className="text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
