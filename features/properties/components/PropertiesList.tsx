'use client';

import { useState, useEffect } from 'react';
import PropertyCard from '@/features/properties/components/PropertyCard';
import PropertiesPagination from '@/features/properties/components/PropertiesPagination';
import { Property } from '@/features/properties/types';

interface PropertiesListProps {
    properties: Property[];
    hasActiveFilters?: boolean;
    onResetFilters?: () => void;
}

export default function PropertiesList({ properties, hasActiveFilters, onResetFilters }: PropertiesListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.max(1, Math.ceil(properties.length / itemsPerPage));

    // Reset to page 1 when filtered list changes
    useEffect(() => {
        setCurrentPage(1);
    }, [properties.length]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleProperties = properties.slice(startIndex, startIndex + itemsPerPage);
    

    return (
        <section className="bg-background z-10 pt-48 pb-16 px-4 md:px-8" aria-label="Property listings">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <div className="flex items-center gap-1 mb-4" aria-hidden="true">
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
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                                Discover a World of Possibilities
                            </h2>
                            <p className="text-zinc-500 max-w-5xl leading-relaxed">
                                Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home
                            </p>
                        </div>
                        <div aria-live="polite" className="text-sm text-zinc-400 whitespace-nowrap">
                            {properties.length} {properties.length === 1 ? 'property' : 'properties'} found
                        </div>
                    </div>
                </div>

                {/* Property Grid or Empty State */}
                {visibleProperties.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visibleProperties.map((property) => (
                            <PropertyCard key={property.id} {...property} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-24 text-center">
                        <div className="w-20 h-20 rounded-full bg-zinc-900 flex items-center justify-center mb-6" aria-hidden="true">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#525252" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">No Properties Found</h3>
                        <p className="text-zinc-500 mb-6 max-w-md">
                            We couldn&apos;t find any properties matching your filters. Try adjusting your search criteria.
                        </p>
                        {hasActiveFilters && onResetFilters && (
                            <button
                                onClick={onResetFilters}
                                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors font-medium text-sm"
                            >
                                Clear All Filters
                            </button>
                        )}
                    </div>
                )}

                {/* Pagination */}
                {visibleProperties.length > 0 && (
                    <PropertiesPagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                )}
            </div>
        </section>
    );
}
