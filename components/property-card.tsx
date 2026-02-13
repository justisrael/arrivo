import { Bed, Bath, Ruler } from 'lucide-react';

interface PropertyCardProps {
  title: string;
  description: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: string;
  image: string;
}

export function PropertyCard({
  title,
  description,
  price,
  bedrooms,
  bathrooms,
  sqft,
  image,
}: PropertyCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-purple-600 transition-colors group">
      {/* Image Container */}
      <div className="relative h-48 bg-slate-800 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm line-clamp-2">{description}</p>
        </div>

        {/* Specs */}
        <div className="flex items-center justify-between text-gray-400 text-sm border-t border-slate-800 pt-4">
          <div className="flex items-center gap-2">
            <Bed size={16} className="text-purple-500" />
            <span>{bedrooms} Bedrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath size={16} className="text-purple-500" />
            <span>{bathrooms} Bathrooms</span>
          </div>
          <div className="flex items-center gap-2">
            <Ruler size={16} className="text-purple-500" />
            <span>{sqft} sqft</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <div className="text-2xl font-bold text-white">{price}</div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
