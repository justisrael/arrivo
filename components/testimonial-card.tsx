import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  text: string;
  rating: number;
  image: string;
}

export function TestimonialCard({ name, role, text, rating, image }: TestimonialCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 space-y-4 hover:border-purple-600 transition-colors">
      {/* Rating */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-300">{text}</p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border border-slate-700"
        />
        <div>
          <div className="font-semibold text-white">{name}</div>
          <div className="text-sm text-gray-400">{role}</div>
        </div>
      </div>
    </div>
  );
}
