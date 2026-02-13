'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PropertyGalleryProps {
    images: string[];
}

export default function PropertyGallery({ images }: PropertyGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Extend images to simulate multiple slides as requested
    const displayImages = [
        ...images,
        '/images/estatein.png',
        '/images/estatein1.png',
        '/images/estatein.png',
        '/images/estatein1.png',
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (displayImages.length - 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + (displayImages.length - 1)) % (displayImages.length - 1));
    };

    return (
        <div className="bg-[#1A1A1A] border border-zinc-800 rounded-xl p-4 md:p-8">
            {/* Thumbnails Row */}
            <div className="bg-[#141414] border border-zinc-800 rounded-lg p-3 mb-6 hidden md:flex items-center gap-3 overflow-x-auto">
                {displayImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            "relative w-24 h-16 rounded-md overflow-hidden cursor-pointer transition-all border-2",
                            idx === currentIndex || idx === currentIndex + 1 ? "border-purple-600 opacity-100" : "border-transparent opacity-50 hover:opacity-100"
                        )}
                        onClick={() => setCurrentIndex(idx)}
                    >
                        <Image src={img} alt={`Thumb ${idx}`} fill className="object-cover" />
                    </div>
                ))}
            </div>

            {/* Main Images Grid (Two Side by Side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-800">
                    <Image
                        src={displayImages[currentIndex]}
                        alt="Property Main 1"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-800 hidden md:block">
                    <Image
                        src={displayImages[(currentIndex + 1) % displayImages.length]}
                        alt="Property Main 2"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
                <div className="flex items-center bg-[#141414] border border-zinc-800 rounded-full px-4 py-2 gap-4">
                    <button
                        onClick={prevSlide}
                        className="text-zinc-500 hover:text-white transition-colors"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Progress Indicator */}
                    <div className="flex gap-1.5">
                        {Array.from({ length: displayImages.length - 1 }).map((_, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    "h-1 rounded-full transition-all",
                                    idx === currentIndex ? "w-8 bg-purple-600" : "w-4 bg-zinc-800"
                                )}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="text-zinc-500 hover:text-white transition-colors"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
}
