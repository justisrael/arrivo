import { Bed, Bath, Triangle, Zap } from 'lucide-react';

interface PropertyDescriptionProps {
    description: string;
    bedrooms: number;
    bathrooms: number;
    sqft: string;
    amenities?: string[];
}

export default function PropertyDescription({
    description,
    bedrooms,
    bathrooms,
    sqft,
    amenities = [
        'Expansive oceanfront terrace for outdoor entertaining',
        'Gourmet kitchen with top-of-the-line appliances',
        'Private beach access for morning strolls and sunset views',
        'Master suite with a spa-inspired bathroom and ocean-facing balcony',
        'Private garage and ample storage space',
    ],
}: PropertyDescriptionProps) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-10 items-start">
            {/* Description Box */}
            <div className="border border-zinc-800 rounded-2xl p-8 md:p-10 flex flex-col">
                <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Description</h2>
                    <p className="text-zinc-500 leading-relaxed text-sm md:text-base mb-10">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-10 border-t border-zinc-900">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                            <Bed size={18} />
                            <span>Bedrooms</span>
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-white">{bedrooms < 10 ? `0${bedrooms}` : bedrooms}</span>
                    </div>

                    <div className="flex flex-col gap-2 border-l border-zinc-900 pl-4 md:pl-10">
                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                            <Bath size={18} />
                            <span>Bathrooms</span>
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-white">{bathrooms < 10 ? `0${bathrooms}` : bathrooms}</span>
                    </div>

                    <div className="flex flex-col gap-2 border-l border-zinc-900 pl-4 md:pl-10">
                        <div className="flex items-center gap-2 text-zinc-500 text-sm">
                            <Triangle size={18} className="rotate-180" />
                            <span>Area</span>
                        </div>
                        <span className="text-xl md:text-2xl font-bold text-white">
                            {sqft} <span className="text-sm font-normal text-zinc-500">Square Feet</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Amenities Box */}
            <div className="border border-zinc-800 rounded-2xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-white mb-8">Key Features and Amenities</h2>
                <div className="space-y-4">
                    {amenities.map((amenity, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-4 p-5 border border-zinc-800 rounded-lg border-l-4 border-l-purple-600 group hover:border-zinc-700 transition-all cursor-default"
                        >
                            <div className="w-10 h-10 rounded-full flex items-center justify-center border border-zinc-800">
                                <Zap size={20} className="text-white fill-white" />
                            </div>
                            <span className="text-zinc-400 text-sm md:text-base group-hover:text-white transition-colors">
                                {amenity}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
