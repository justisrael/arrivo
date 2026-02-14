'use client';

import { useState, useCallback, memo } from 'react';
import { Search } from 'lucide-react';

interface SearchFilterProps {
  onSearch?: (filters: any) => void;
}

const SearchFilter = memo(function SearchFilter({ onSearch }: SearchFilterProps) {
  const [filters, setFilters] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
    propertySize: '',
    buildYear: '',
  });

  const handleFilterChange = useCallback((key: string, value: string) => {
    const updated = { ...filters, [key]: value };
    setFilters(updated);
    onSearch?.(updated);
  }, [filters, onSearch]);

  return (
    <div className="w-full bg-slate-900 border border-slate-800 rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
        {/* Location */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-slate-400">Location</label>
          <select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-purple-500"
          >
            <option value="">Select Location</option>
            <option value="new-york">New York</option>
            <option value="los-angeles">Los Angeles</option>
            <option value="chicago">Chicago</option>
            <option value="houston">Houston</option>
          </select>
        </div>

        {/* Property Type */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-slate-400">Property Type</label>
          <select
            value={filters.propertyType}
            onChange={(e) => handleFilterChange('propertyType', e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-purple-500"
          >
            <option value="">Select Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="commercial">Commercial</option>
          </select>
        </div>

        {/* Pricing Range */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-slate-400">Pricing Range</label>
          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-purple-500"
          >
            <option value="">Select Range</option>
            <option value="0-500k">$0 - $500K</option>
            <option value="500k-1m">$500K - $1M</option>
            <option value="1m-2m">$1M - $2M</option>
            <option value="2m+">$2M+</option>
          </select>
        </div>

        {/* Property Size */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-slate-400">Property Size</label>
          <select
            value={filters.propertySize}
            onChange={(e) => handleFilterChange('propertySize', e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-purple-500"
          >
            <option value="">Select Size</option>
            <option value="small">Small (Under 1000 sqft)</option>
            <option value="medium">Medium (1000-2000 sqft)</option>
            <option value="large">Large (2000-5000 sqft)</option>
            <option value="xlarge">Extra Large (5000+ sqft)</option>
          </select>
        </div>

        {/* Build Year */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-slate-400">Build Year</label>
          <select
            value={filters.buildYear}
            onChange={(e) => handleFilterChange('buildYear', e.target.value)}
            className="bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none focus:border-purple-500"
          >
            <option value="">Select Year</option>
            <option value="2020-2024">2020 - 2024</option>
            <option value="2015-2019">2015 - 2019</option>
            <option value="2010-2014">2010 - 2014</option>
            <option value="before-2010">Before 2010</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-lg flex items-center gap-2 transition-colors">
          <Search size={18} />
          Find Property
        </button>
      </div>
    </div>
  );
});

export default SearchFilter;
