export interface PropertyFees {
    label: string;
    value: string;
    note?: string;
}

export interface PropertyPricingDetails {
    additionalFees: PropertyFees[];
    monthlyCosts: PropertyFees[];
    initialCosts: PropertyFees[];
    monthlyExpenses: PropertyFees[];
}

export interface Property {
    id: number;
    slug: string;
    title: string;
    description: string;
    price: string;
    numericPrice: number;
    bedrooms: number;
    bathrooms: number;
    sqft: string;
    numericSqft: number;
    image: string;
    caption?: string;
    location?: string;
    type: 'Villa' | 'Apartment' | 'House' | 'Cottage' | 'Loft' | 'Penthouse' | 'Estate';
    buildYear: number;
    amenities?: string[];
    pricingDetails?: PropertyPricingDetails;
}

export interface PropertyFilters {
    searchTerm: string;
    location: string;
    propertyType: string;
    priceRange: string;
    propertySize: string;
    buildYear: string;
}
