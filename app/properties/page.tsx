'use client';

import { Header } from '@/components/layout';
import { Footer } from '@/components/layout';
import PropertiesHero from '@/features/properties/components/PropertiesHero';
import PropertiesList from '@/features/properties/components/PropertiesList';
import { FAQ, CTA, ContactForm } from '@/components/shared';
import { FAQS } from '@/lib/faq-data';
import { PROPERTIES, usePropertyFilters } from '@/features/properties';

export default function PropertiesPage() {
    const { filters, setFilter, resetFilters, filteredProperties, hasActiveFilters } = usePropertyFilters(PROPERTIES);

    const handleSearch = () => {
        // Filters are applied reactively via useMemo in the hook
        // This callback scrolls to results
        const listSection = document.querySelector('[aria-label="Property listings"]');
        listSection?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Header />
            <main id="main-content" className="min-h-screen pt-[150px]">
                <PropertiesHero
                    filters={filters}
                    onFilterChange={setFilter}
                    onSearch={handleSearch}
                    resultCount={filteredProperties.length}
                />
                <PropertiesList
                    properties={filteredProperties}
                    hasActiveFilters={hasActiveFilters}
                    onResetFilters={resetFilters}
                />
                <ContactForm />
            </main>

            <FAQ faqs={FAQS} />
            <CTA />

            <Footer />
        </>
    );
}
