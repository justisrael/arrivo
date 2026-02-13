import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function CTA() {
  return (
    <section className="relative py-24 px-4 md:px-6 overflow-hidden bg-background border-y border-zinc-800">
      {/* Background Images / Patterns */}
      <div className="absolute left-0 bottom-0 pointer-events-none">
        <Image
          src="/images/banner-img1.png"
          alt="Banner Pattern Left"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>
      <div className="absolute right-0 bottom-0 pointer-events-none">
        <Image
          src="/images/banner-img2.png"
          alt="Banner Pattern Right"
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          {/* Text Content */}
          <div className="lg:max-w-4xl text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Start Your Real Estate Journey Today
            </h2>
            <p className="text-zinc-500 text-base md:text-lg leading-relaxed">
              Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
            </p>
          </div>

          {/* Action Button */}
          <div className="flex-shrink-0">
            <Link href="/properties">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-10 py-8 rounded-xl text-base font-semibold transition-all shadow-lg hover:scale-105 active:scale-95">
                Explore Properties
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
