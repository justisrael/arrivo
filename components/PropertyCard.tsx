import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
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

function PropertyCard({
  id,
  slug,
  title,
  description,
  price,
  image,
  caption,
}: PropertyCardProps) {
  return (
    <div className="bg-[#1A1A1A] border border-[#262626] rounded-2xl p-6 flex flex-col h-full hover:border-[#333333] transition-all group">
      {/* Image Container with Absolute Badge */}
      <Link href={`/properties/${slug}`} className="relative h-[240px] mb-6 overflow-hidden rounded-xl block">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </Link>

      {/* Caption Badge - Small and discreet below image */}
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
    </div>
  );
}

export default memo(PropertyCard);
