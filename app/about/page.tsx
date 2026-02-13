import { Header } from '@/components/layout';
import { Footer } from '@/components/layout';
import AboutHero from '@/components/AboutHero';
import OurValues from '@/components/OurValues';
import OurAchievements from '@/components/OurAchievements';
import EstateinExperience from '@/components/EstateinExperience';
import { CTA } from '@/components/shared';
import { getMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

export const metadata: Metadata = getMetadata(
    'About Us',
    'Learn about Estatein — our values, achievements, and how we help you navigate the real estate experience.',
    '/about'
);

export default function AboutPage() {
    return (
        <>
            <Header />
            <main id="main-content">
                <AboutHero />
                <OurValues />
                <OurAchievements />
                <EstateinExperience />
                <CTA />
            </main>
            <Footer />
        </>
    );
}
