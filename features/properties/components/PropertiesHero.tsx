'use client';

import { Search, MapPin, Home, DollarSign, Ruler, Calendar } from 'lucide-react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { PropertyFilters } from '@/features/properties/types';
import { getUniqueLocations, getUniqueTypes } from '@/features/properties/data';

interface PropertiesHeroProps {
    filters: PropertyFilters;
    onFilterChange: (key: keyof PropertyFilters, value: string) => void;
    onSearch: () => void;
    resultCount: number;
}

export default function PropertiesHero({ filters, onFilterChange, onSearch, resultCount }: PropertiesHeroProps) {
    const locations = getUniqueLocations();
    const types = getUniqueTypes();

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <section className="relative pt-32 pb-16 px-4 md:px-8 border-b border-[#262626] bg-[#0F0F0F]" aria-label="Property Search">
            {/* Horizontal Background Linear Gradient */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'linear-gradient(to right, rgba(38, 38, 38, 0.5) 0%, rgba(38, 38, 38, 0) 100%)'
                }}
                aria-hidden="true"
            />

            <div className="max-w-7xl mx-auto relative z-10 mt-[100px]">
                {/* Title & Description */}
                <div className="mb-12">
                    <Image
                        src="/images/heading-icon.svg"
                        alt=""
                        width={48}
                        height={48}
                        className="w-12 h-12 mb-4"
                        priority
                        sizes="48px"
                    />
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Find Your Dream Property
                    </h1>
                    <p className="text-slate-400 max-w-3xl leading-relaxed whitespace-normal">
                        Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to write your own. With our great services, your journey starts here.
                    </p>
                </div>

                {/* Search Bar & Filters Section */}
                <div className="mt-20 -mb-32 relative z-20" role="search" aria-label="Search properties">
                    {/* Search Bar */}
                    <div className="rounded-lg shadow-laptop xl:shadow-monitor max-w-[85%] mx-auto mb-7">
                        <div className="relative">
                            <label htmlFor="property-search" className="sr-only">Search for a property</label>
                            <Input
                                id="property-search"
                                type="text"
                                placeholder="Search For A Property"
                                value={filters.searchTerm}
                                onChange={(e) => onFilterChange('searchTerm', e.target.value)}
                                onKeyDown={handleKeyDown}
                                className="w-full bg-[#1A1A1A] border-[#262626] rounded-t-xl py-8 pl-6 pr-44 text-sm text-white placeholder-slate-500 focus-visible:ring-0 focus-visible:border-purple-500 shadow-laptop xl:shadow-monitor"
                                aria-label="Search properties by name, description, or location"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <Button
                                    onClick={onSearch}
                                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-lg flex items-center gap-2 transition-colors font-medium text-sm"
                                    aria-label={`Find property — ${resultCount} results`}
                                >
                                    <Search size={20} aria-hidden="true" />
                                    <span>Find Property</span>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Filters Row */}
                    <div className="max-w-[95%] mx-auto bg-[#1A1A1A] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5" role="group" aria-label="Property filters">
                        {/* Location */}
                        <div className="relative group bg-[#1A1A1A] border border-[#262626] rounded-lg shadow-laptop xl:shadow-monitor">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10 pointer-events-none" aria-hidden="true">
                                <MapPin size={18} />
                            </div>
                            {/* @ts-ignore */}
                            <Select modal={false} value={filters.location || undefined} onValueChange={(val) => onFilterChange('location', val)}>
                                <SelectTrigger className="w-full bg-transparent border-none py-7 pl-10 pr-4 text-white focus:ring-0 text-sm" aria-label="Filter by location">
                                    <SelectValue placeholder="Location" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#1A1A1A] border-[#262626] text-white">
                                    <SelectItem value="all">All Locations</SelectItem>
                                    {locations.map(loc => (
                                        <SelectItem key={loc} value={loc.toLowerCase()}>{loc}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Property Type */}
                        <div className="relative group bg-[#1A1A1A] border border-[#262626] rounded-lg shadow-laptop xl:shadow-monitor">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10 pointer-events-none" aria-hidden="true">
                                <Home size={18} />
                            </div>
                            {/* @ts-ignore */}
                            <Select modal={false} value={filters.propertyType || undefined} onValueChange={(val) => onFilterChange('propertyType', val)}>
                                <SelectTrigger className="w-full bg-transparent border-none py-7 pl-10 pr-4 text-white focus:ring-0 text-sm" aria-label="Filter by property type">
                                    <SelectValue placeholder="Property Type" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#1A1A1A] border-[#262626] text-white">
                                    <SelectItem value="all">All Types</SelectItem>
                                    {types.map(type => (
                                        <SelectItem key={type} value={type.toLowerCase()}>{type}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Pricing Range */}
                        <div className="relative group bg-[#1A1A1A] border border-[#262626] rounded-lg shadow-laptop xl:shadow-monitor">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10 pointer-events-none" aria-hidden="true">
                                <DollarSign size={18} />
                            </div>
                            {/* @ts-ignore */}
                            <Select modal={false} value={filters.priceRange || undefined} onValueChange={(val) => onFilterChange('priceRange', val)}>
                                <SelectTrigger className="w-full bg-transparent border-none py-7 pl-10 pr-4 text-white focus:ring-0 text-sm" aria-label="Filter by pricing range">
                                    <SelectValue placeholder="Pricing Range" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#1A1A1A] border-[#262626] text-white">
                                    <SelectItem value="all">All Prices</SelectItem>
                                    <SelectItem value="0-500k">$0 - $500K</SelectItem>
                                    <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                                    <SelectItem value="1m-2m">$1M - $2M</SelectItem>
                                    <SelectItem value="2m+">$2M+</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Property Size */}
                        <div className="relative group bg-[#1A1A1A] border border-[#262626] rounded-lg shadow-laptop xl:shadow-monitor">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10 pointer-events-none" aria-hidden="true">
                                <Ruler size={18} />
                            </div>
                            {/* @ts-ignore */}
                            <Select modal={false} value={filters.propertySize || undefined} onValueChange={(val) => onFilterChange('propertySize', val)}>
                                <SelectTrigger className="w-full bg-transparent border-none py-7 pl-10 pr-4 text-white focus:ring-0 text-sm" aria-label="Filter by property size">
                                    <SelectValue placeholder="Property Size" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#1A1A1A] border-[#262626] text-white">
                                    <SelectItem value="all">All Sizes</SelectItem>
                                    <SelectItem value="small">Small (&lt; 1k sqft)</SelectItem>
                                    <SelectItem value="medium">Medium (1k-2k sqft)</SelectItem>
                                    <SelectItem value="large">Large (2k-5k sqft)</SelectItem>
                                    <SelectItem value="xlarge">Extra Large (5k+ sqft)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Build Year */}
                        <div className="relative group bg-[#1A1A1A] border border-[#262626] rounded-lg shadow-laptop xl:shadow-monitor">
                            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 z-10 pointer-events-none" aria-hidden="true">
                                <Calendar size={18} />
                            </div>
                            {/* @ts-ignore */}
                            <Select modal={false} value={filters.buildYear || undefined} onValueChange={(val) => onFilterChange('buildYear', val)}>
                                <SelectTrigger className="w-full bg-transparent border-none py-7 pl-10 pr-4 text-white focus:ring-0 text-sm" aria-label="Filter by build year">
                                    <SelectValue placeholder="Build Year" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#1A1A1A] border-[#262626] text-white">
                                    <SelectItem value="all">All Years</SelectItem>
                                    <SelectItem value="2020+">2020+</SelectItem>
                                    <SelectItem value="2015-2019">2015 - 2019</SelectItem>
                                    <SelectItem value="2010-2014">2010 - 2014</SelectItem>
                                    <SelectItem value="before-2010">Before 2010</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
