import { Metadata } from 'next';

const SITE_URL = 'https://estatein.com';
const SITE_NAME = 'Estatein';

export function getMetadata(title: string, description: string, path?: string): Metadata {
    const canonical = path ? `${SITE_URL}${path}` : SITE_URL;

    return {
        title,
        description,
        robots: { index: true, follow: true },
        alternates: { canonical },
        openGraph: {
            title: `${title} | ${SITE_NAME}`,
            description,
            type: 'website',
            siteName: SITE_NAME,
            url: canonical,
            locale: 'en_US',
            images: [
                {
                    url: `${SITE_URL}/images/og-image.png`,
                    width: 1200,
                    height: 630,
                    alt: `${SITE_NAME} - Discover Your Dream Property`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | ${SITE_NAME}`,
            description,
            images: [`${SITE_URL}/images/og-image.png`],
        },
    };
}

/** Generate Organization JSON-LD structured data */
export function getOrganizationJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.svg`,
        description: 'Find your perfect property with Estatein. Browse luxury homes, smart investments, and effortless property management.',
        contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: 'English',
        },
        sameAs: [
            'https://facebook.com/estatein',
            'https://twitter.com/estatein',
            'https://linkedin.com/company/estatein',
            'https://youtube.com/estatein',
        ],
    };
}

/** Generate WebSite JSON-LD structured data */
export function getWebSiteJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: SITE_NAME,
        url: SITE_URL,
        potentialAction: {
            '@type': 'SearchAction',
            target: {
                '@type': 'EntryPoint',
                urlTemplate: `${SITE_URL}/properties?q={search_term_string}`,
            },
            'query-input': 'required name=search_term_string',
        },
    };
}

/** Generate RealEstateListing JSON-LD for a property */
export function getPropertyJsonLd(property: {
    title: string;
    description: string;
    price: string;
    image: string;
    location?: string;
    bedrooms: number;
    bathrooms: number;
    sqft: string;
    id: number;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'RealEstateListing',
        name: property.title,
        description: property.description,
        url: `${SITE_URL}/properties/${property.id}`,
        image: property.image.startsWith('/') ? `${SITE_URL}${property.image}` : property.image,
        offers: {
            '@type': 'Offer',
            price: property.price.replace(/[$,]/g, ''),
            priceCurrency: 'USD',
        },
        address: {
            '@type': 'PostalAddress',
            addressLocality: property.location || 'United States',
        },
        numberOfRooms: property.bedrooms + property.bathrooms,
        numberOfBedrooms: property.bedrooms,
        floorSize: {
            '@type': 'QuantitativeValue',
            value: property.sqft.replace(/,/g, ''),
            unitCode: 'FTK',
        },
    };
}
