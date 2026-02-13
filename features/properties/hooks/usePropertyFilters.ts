'use client';

import { useState, useMemo, useCallback } from 'react';
import { Property, PropertyFilters } from '../types';

const DEFAULT_FILTERS: PropertyFilters = {
    searchTerm: '',
    location: '',
    propertyType: '',
    priceRange: '',
    propertySize: '',
    buildYear: '',
};

function parsePriceRange(range: string): [number, number] {
    switch (range) {
        case '0-500k': return [0, 500000];
        case '500k-1m': return [500000, 1000000];
        case '1m-2m': return [1000000, 2000000];
        case '2m+': return [2000000, Infinity];
        default: return [0, Infinity];
    }
}

function parseSizeRange(size: string): [number, number] {
    switch (size) {
        case 'small': return [0, 1000];
        case 'medium': return [1000, 2000];
        case 'large': return [2000, 5000];
        case 'xlarge': return [5000, Infinity];
        default: return [0, Infinity];
    }
}

function parseBuildYearRange(year: string): [number, number] {
    switch (year) {
        case '2020+': return [2020, Infinity];
        case '2015-2019': return [2015, 2019];
        case '2010-2014': return [2010, 2014];
        case 'before-2010': return [0, 2009];
        default: return [0, Infinity];
    }
}

export function usePropertyFilters(properties: Property[]) {
    const [filters, setFilters] = useState<PropertyFilters>(DEFAULT_FILTERS);

    const setFilter = useCallback((key: keyof PropertyFilters, value: string) => {
        setFilters((prev: PropertyFilters) => ({ ...prev, [key]: value }));
    }, []);

    const resetFilters = useCallback(() => {
        setFilters(DEFAULT_FILTERS);
    }, []);

    const filteredProperties = useMemo(() => {
        return properties.filter(property => {
            // Text search — matches title, description, location
            if (filters.searchTerm) {
                const term = filters.searchTerm.toLowerCase();
                const searchable = `${property.title} ${property.description} ${property.location ?? ''}`.toLowerCase();
                if (!searchable.includes(term)) return false;
            }

            // Location filter
            if (filters.location && property.location?.toLowerCase() !== filters.location.toLowerCase()) {
                return false;
            }

            // Property type filter
            if (filters.propertyType && property.type.toLowerCase() !== filters.propertyType.toLowerCase()) {
                return false;
            }

            // Price range filter
            if (filters.priceRange) {
                const [min, max] = parsePriceRange(filters.priceRange);
                if (property.numericPrice < min || property.numericPrice > max) return false;
            }

            // Property size filter
            if (filters.propertySize) {
                const [min, max] = parseSizeRange(filters.propertySize);
                if (property.numericSqft < min || property.numericSqft > max) return false;
            }

            // Build year filter
            if (filters.buildYear) {
                const [min, max] = parseBuildYearRange(filters.buildYear);
                if (property.buildYear < min || property.buildYear > max) return false;
            }

            return true;
        });
    }, [properties, filters]);

    return {
        filters,
        setFilter,
        resetFilters,
        filteredProperties,
        hasActiveFilters: Object.values(filters).some(v => v !== ''),
    };
}
