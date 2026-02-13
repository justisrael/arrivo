import { Header } from '@/components/layout';
import { Footer } from '@/components/layout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PropertyCarousel from '@/components/PropertyCarousel';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { FAQ, CTA } from '@/components/shared';
import { FAQS } from '@/lib/faq-data';
import { getMetadata, getWebSiteJsonLd } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = getMetadata(
  'Home',
  'Discover your dream property with Estatein. Explore luxury homes, smart investments, and effortless property management.',
  '/'
);

const properties = [
  {
    id: 1,
    title: 'Seaside Serenity Villa',
    description: 'A stunning 5-bedroom villa with ocean views and private beach access.',
    price: '$650,000',
    bedrooms: 4,
    bathrooms: 3,
    sqft: '3,500',
    image: '/images/seaside-serenity-villa.png',
  },
  {
    id: 2,
    title: 'Metropolitan Haven',
    description: 'Modern apartment in the heart of the city with luxury amenities and gated security.',
    price: '$550,000',
    bedrooms: 3,
    bathrooms: 2,
    sqft: '2,800',
    image: '/images/metropolitan-haven.png',
  },
  {
    id: 3,
    title: 'Rustic Retreat Cottage',
    description: 'Charming countryside home perfect for a peaceful getaway with scenic views.',
    price: '$380,000',
    bedrooms: 3,
    bathrooms: 2,
    sqft: '2,200',
    image: '/images/rustic-retreat-cuttage.png',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Wade Warren',
    role: 'CEO, Founder',
    text: 'Exceptional Service! Our experience with Estatein was outstanding. They helped us understand the market and guided us through the entire process.',
    rating: 5,
    image: '/images/wade.png',
  },
  {
    id: 2,
    name: 'Emily Thompson',
    role: 'Investor',
    text: "Efficient and Reliable! Estatein exceeded our expectations with top-notch service. They helped us quickly find a great price. We couldn't be happier.",
    rating: 5,
    image: '/images/emelie.png',
  },
  {
    id: 3,
    name: 'John Morris',
    role: 'Advisor',
    text: 'Trusted Advisors! The Estatein team provided expert guidance through the entire buying process. Their knowledge and commitment impressed us.',
    rating: 5,
    image: '/images/John.png',
  },
];

export default function HomePage() {
  const websiteJsonLd = getWebSiteJsonLd();

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Features />
        <PropertyCarousel properties={properties} />
        <TestimonialCarousel testimonials={testimonials} />
        <FAQ faqs={FAQS} />
        <CTA />
      </main>
      <Footer />

      {/* WebSite Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  );
}
