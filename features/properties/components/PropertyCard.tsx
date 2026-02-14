'use client'

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface PropertyCardProps {
    id: number;
    slug: string;
    title: string;
    description: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    sqft: string;
    image: string;
    caption?: string;
    location?: string;
}

export default function PropertyCard({
    id,
    slug,
    title,
    description,
    price,
    image,
    caption,
}: PropertyCardProps) {
    console.log(slug);
    return (
        <article className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-6 flex flex-col h-full hover:border-[#333333] transition-all group">
            {/* Image Container */}
            <Link href={`/properties/${slug}`} className="relative h-[240px] mb-6 overflow-hidden rounded-xl block" aria-label={`View ${title} gallery`}>
                <Image
                    src={image || "/placeholder.svg"}
                    alt={`${title} - property exterior`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                />
            </Link>

            {/* Caption Badge */}
            {caption && (
                <div className="mb-4">
                    <span className="px-4 py-2 bg-[#141414] border border-[#262626] text-white text-xs rounded-full font-medium">
                        {caption}
                    </span>
                </div>
            )}

            {/* Main Content */}
            <div className="flex-grow flex flex-col">
                <Link href={`/properties/${slug}`}>
                    <h3 className="text-2xl font-bold text-white mb-3 hover:text-purple-500 transition-colors">{title}</h3>
                </Link>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
                    {description.split(' ').slice(0, 15).join(' ')}...{' '}
                    <Link href={`/properties/${slug}`} className="text-white hover:underline cursor-pointer font-medium">
                        Read More
                    </Link>
                </p>

                {/* Footer: Price & Button */}
                <div className="flex items-end justify-between gap-4 mt-auto">
                    <div>
                        <p className="text-xs text-zinc-500 mb-1">Price</p>
                        <p className="text-2xl font-bold text-white">{price}</p>
                    </div>
                    <Link href={`/properties/${slug}`}>
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-6 rounded-xl text-sm font-semibold transition-all whitespace-nowrap">
                            View Property Details
                        </Button>
                    </Link>
                </div>
            </div>
        </article>
    );
}
