import Image from 'next/image';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

export default function TestimonialCard({ name, role, text, rating, image }: TestimonialCardProps) {
  return (
    <div className="bg-secondary-background border border-zinc-800 rounded-lg p-6">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-300 mb-6 leading-relaxed">{text}</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-white text-sm">{name}</p>
          <p className="text-xs text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
}
