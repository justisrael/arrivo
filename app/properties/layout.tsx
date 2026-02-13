import type { Metadata } from 'next';
import { getMetadata } from '@/lib/seo';

export const metadata: Metadata = getMetadata(
    'Properties',
    'Explore our curated selection of properties, each offering a unique story and a chance to write your own.',
    '/properties'
);

export default function PropertiesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
