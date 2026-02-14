import { Button } from '@/components/ui/button';
import { memo, useMemo } from 'react';
import { Property, PropertyPricingDetails } from '@/features/properties';

interface PricingSectionProps {
    title: string;
    items: {
        label: string;
        value: string;
        note?: string;
    }[];
}

const PricingCard = memo(function PricingCard({ title, items }: PricingSectionProps) {
    return (
        <div className="border border-zinc-800 rounded-2xl p-8 md:p-10 mb-8">
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-zinc-900">
                <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
                <Button variant="outline" className="bg-[#141414] border-zinc-800 text-white hover:bg-zinc-800 rounded-lg px-6">
                    Learn More
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {items.map((item, idx) => (
                    <div key={idx} className="space-y-3">
                        <h4 className="text-sm font-medium text-zinc-500">{item.label}</h4>
                        <div className="flex items-center gap-3">
                            <span className="text-xl md:text-2xl font-bold text-white">{item.value}</span>
                            {item.note && (
                                <div className="bg-[#141414] border border-zinc-800 rounded-full px-4 py-2 flex items-center gap-2">
                                    <span className="text-zinc-500 text-xs">{item.note}</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

interface PropertyPricingProps {
    propertyName: string;
    listingPrice: string;
    pricingDetails?: PropertyPricingDetails;
}

export default function PropertyPricing({ propertyName, listingPrice, pricingDetails }: PropertyPricingProps) {
    // Fallback values if pricingDetails is not provided
    const additionalFees = useMemo(() => pricingDetails?.additionalFees || [
        { label: 'Property Transfer Tax', value: '$25,000', note: 'Based on the sale price and local regulations' },
        { label: 'Legal Fees', value: '$3,000', note: 'Approximate cost for legal services, including title transfer' },
        { label: 'Home Inspection', value: '$500', note: 'Recommended for due diligence' },
        { label: 'Property Insurance', value: '$1,200', note: 'Annual cost for comprehensive property insurance' },
        { label: 'Mortgage Fees', value: 'Varies', note: 'If applicable, consult with your lender for specific details' },
    ], [pricingDetails]);

    const monthlyCosts = useMemo(() => pricingDetails?.monthlyCosts || [
        { label: 'Property Taxes', value: '$1,250', note: 'Approximate monthly property tax based on the sale price and local rates' },
        { label: "Homeowners' Association Fee", value: '$300', note: 'Monthly fee for common area maintenance and security' },
    ], [pricingDetails]);

    const initialCosts = useMemo(() => pricingDetails?.initialCosts || [
        { label: 'Listing Price', value: listingPrice },
        { label: 'Additional Fees', value: '$29,700', note: 'Property transfer tax, legal fees, inspection, insurance' },
        { label: 'Down Payment', value: '$250,000', note: '20%' },
        { label: 'Mortgage Amount', value: '$1,000,000', note: 'If applicable' },
    ], [pricingDetails, listingPrice]);

    const monthlyExpenses = useMemo(() => pricingDetails?.monthlyExpenses || [
        { label: 'Property Taxes', value: '$1,250' },
        { label: "Homeowners' Association Fee", value: '$300' },
        { label: 'Mortgage Payment', value: 'Varies based on terms and interest rate', note: 'If applicable' },
        { label: 'Property Insurance', value: '$100', note: 'Approximate monthly cost' },
    ], [pricingDetails]);

    return (
        <div className="my-20">
            {/* Section Header */}
            <div className="mb-12">
                <div className="flex items-center gap-1 mb-6">
                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-700">
                        <path d="M15 0L18 12L30 15L18 18L15 30L12 18L0 15L12 12L15 0Z" fill="currentColor" />
                    </svg>
                    <svg width="16" height="16" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-zinc-800">
                        <path d="M15 0L18 12L30 15L18 18L15 30L12 18L0 15L12 12L15 0Z" fill="currentColor" />
                    </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Comprehensive Pricing Details</h2>
                <p className="text-zinc-500 leading-relaxed max-w-5xl text-sm md:text-base">
                    At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for {propertyName} to help you make an informed decision.
                </p>
            </div>

            {/* Note Banner */}
            <div className="bg-[#141414] border border-zinc-800 rounded-xl p-6 mb-12 flex items-center gap-4">
                <span className="font-bold text-white text-sm md:text-base border-r border-zinc-800 pr-4">Note</span>
                <p className="text-zinc-500 text-xs md:text-sm">
                    The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                {/* Left Column: Listing Price (Small summary) */}
                <div className="lg:col-span-1">
                    <span className="text-zinc-500 text-sm block mb-2">Listing Price</span>
                    <span className="text-3xl md:text-4xl font-bold text-white">{listingPrice}</span>
                </div>

                {/* Right Column: Pricing Sections */}
                <div className="lg:col-span-3 space-y-10">
                    <PricingCard title="Additional Fees" items={additionalFees} />
                    <PricingCard title="Monthly Costs" items={monthlyCosts} />
                    <PricingCard title="Total Initial Costs" items={initialCosts} />
                    <PricingCard title="Monthly Expenses" items={monthlyExpenses} />
                </div>
            </div>
        </div>
    );
}
