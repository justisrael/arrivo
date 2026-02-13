import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group bg-secondary-background border border-zinc-800 rounded-lg p-6 hover:border-purple-500/50 transition">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-full bg-zinc-800/50 flex items-center justify-center p-2.5 border border-zinc-700/50">
          <Image
            src={icon || "/placeholder.svg"}
            alt={title}
            width={24}
            height={24}
            className="w-full h-full object-contain"
          />
        </div>
        <ArrowUpRight size={20} className="text-gray-600 group-hover:text-purple-400 transition" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}
