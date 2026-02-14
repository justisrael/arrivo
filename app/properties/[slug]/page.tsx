import dynamic from 'next/dynamic';
import { Header } from '@/components/layout';
import { Footer } from '@/components/layout';

const FAQ = dynamic(() => import('@/components/shared').then(mod => mod.FAQ));
const CTA = dynamic(() => import('@/components/shared').then(mod => mod.CTA));
const PropertyGallery = dynamic(() => import('@/components/PropertyGallery'));
const PropertyDescription = dynamic(() => import('@/components/PropertyDescription'));
const PropertyInquiryForm = dynamic(() => import('@/components/PropertyInquiryForm'));
const PropertyPricing = dynamic(() => import('@/components/PropertyPricing'));
import { FAQS } from '@/lib/faq-data';
import { MapPin } from 'lucide-react';
import { PROPERTIES } from '@/features/properties';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPropertyJsonLd } from '@/lib/seo';

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

// SSG: Generate static paths for all properties
export async function generateStaticParams() {
    return PROPERTIES.map((property) => ({
        slug: property.slug.toString(),
    }));
}

// Dynamic metadata per property
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const property = PROPERTIES.find((p) => p.slug === (slug));
    if (!property) return { title: 'Property Not Found' };

    return {
        title: property.title,
        description: property.description,
        openGraph: {
            title: `${property.title} | Estatein`,
            description: property.description,
            type: 'website',
            siteName: 'Estatein',
            images: [
                {
                    url: property.image,
                    width: 800,
                    height: 600,
                    alt: property.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: property.title,
            description: property.description,
        },
    };
}

export default async function PropertyPage({ params }: PageProps) {
    const { slug } = await params;
    const property = PROPERTIES.find((p) => p.slug === (slug));

    if (!property) {
        notFound();
    }

    const propertyJsonLd = getPropertyJsonLd(property);

    return (
        <div className="bg-background min-h-screen text-white">
            <Header />

            <main id="main-content" className="max-w-7xl mx-auto px-4 lg:px-8 pt-[150px] pb-12">
                {/* Property Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">{property.title}</h1>
                        <div className="flex items-center gap-2 text-zinc-400">
                            <div className="flex items-center gap-1 border border-zinc-800 rounded-md px-3 py-1.5">
                                <MapPin size={16} aria-hidden="true" />
                                <span className="text-sm">{property.location}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className="text-sm text-zinc-500 block mb-1">Price</span>
                        <span className="text-2xl md:text-3xl font-bold">{property.price}</span>
                    </div>
                </div>

                {/* Gallery Section */}
                <PropertyGallery
                    images={[property.image]}
                />

                <div className="mt-12 space-y-20">
                    {/* Description and Amenities Section */}
                    <PropertyDescription
                        description={property.description}
                        bedrooms={property.bedrooms}
                        bathrooms={property.bathrooms}
                        sqft={property.sqft}
                        amenities={property.amenities}
                    />

                    {/* Inquiry Form Section */}
                    <PropertyInquiryForm
                        propertyName={property.title}
                        location={property.location || 'Coastal'}
                    />

                    {/* Pricing Section */}
                    <PropertyPricing
                        propertyName={property.title}
                        listingPrice={property.price}
                        pricingDetails={property.pricingDetails}
                    />
                </div>
            </main>

            <FAQ faqs={FAQS} />
            <CTA />

            <Footer />

            {/* Property Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyJsonLd) }}
            />
        </div>
    );
}
