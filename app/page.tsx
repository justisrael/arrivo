import { Header } from '@/components/layout';
import { Footer } from '@/components/layout';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';

const Features = dynamic(() => import('@/components/Features'));
const PropertyCarousel = dynamic(() => import('@/components/PropertyCarousel'));
const TestimonialCarousel = dynamic(() => import('@/components/TestimonialCarousel'));
const FAQ = dynamic(() => import('@/components/shared').then(mod => mod.FAQ));
const CTA = dynamic(() => import('@/components/shared').then(mod => mod.CTA));
import { FAQS } from '@/lib/faq-data';
import { getMetadata, getWebSiteJsonLd } from '@/lib/seo';
import type { Metadata } from 'next';
import { PROPERTIES } from '@/features/properties';

export const metadata: Metadata = getMetadata(
  'Home',
  'Discover your dream property with Estatein. Explore luxury homes, smart investments, and effortless property management.',
  '/'
);



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
        <PropertyCarousel properties={PROPERTIES} />
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
