'use client';

import { Header } from '@/components/layout';
import { Footer } from '@/components/layout';
import dynamic from 'next/dynamic';
import PropertiesHero from '@/features/properties/components/PropertiesHero';

const PropertiesList = dynamic(() => import('@/features/properties/components/PropertiesList'));
const FAQ = dynamic(() => import('@/components/shared').then(mod => mod.FAQ));
const CTA = dynamic(() => import('@/components/shared').then(mod => mod.CTA));
const ContactForm = dynamic(() => import('@/components/shared').then(mod => mod.ContactForm));
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
