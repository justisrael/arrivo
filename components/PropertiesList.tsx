'use client';

import { useState, useMemo } from 'react';
import PropertyCard from './PropertyCard';
import PropertiesPagination from './PropertiesPagination';
import { Property } from '@/features/properties';

interface PropertiesListProps {
    initialProperties: Property[];
}

export default function PropertiesList({ initialProperties }: PropertiesListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(initialProperties.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleProperties = useMemo(() => {
        return initialProperties.slice(startIndex, startIndex + itemsPerPage);
    }, [initialProperties, startIndex, itemsPerPage]);
    console.log(visibleProperties);
    return (
        <section className="bg-background z-10 pt-48 pb-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <div className="flex items-center gap-1 mb-4">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-700">
                            <path d="M15 0L18 12L30 15L18 18L15 30L12 18L0 15L12 12L15 0Z" fill="currentColor" />
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-800">
                            <path d="M15 0L18 12L30 15L18 18L15 30L12 18L0 15L12 12L15 0Z" fill="currentColor" />
                        </svg>
                        <svg width="14" height="14" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-900">
                            <path d="M15 0L18 12L30 15L18 18L15 30L12 18L0 15L12 12L15 0Z" fill="currentColor" />
                        </svg>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Discover a World of Possibilities
                    </h2>
                    <p className="text-zinc-500 max-w-5xl leading-relaxed">
                        Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home
                    </p>
                </div>

                {/* Property Grid */}
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {visibleProperties.map((property) => (
                        <PropertyCard key={property.id} {...property} />
                    ))}
                </div>

                {/* Pagination */}
                <PropertiesPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </section>
    );
}
