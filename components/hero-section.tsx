import Image from 'next/image';

const HERO_IMAGE = '/images/image-20-282-29.png';
const SUB_CONTAINER = '/images/sub-20container.png';

export function HeroSection() {
  return (
    <section className="relative bg-[#141414] py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Discover Your Dream Property with Estatein
              </h1>
              <p className="text-gray-400 text-lg">
                Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
              <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-zinc-700">
                Browse Properties
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">10k+</div>
                <div className="text-gray-400 text-sm">Properties for Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">16+</div>
                <div className="text-gray-400 text-sm">Years of Experience</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-3xl rounded-full" />
            <div className="relative">
              <img
                src={HERO_IMAGE || "/placeholder.svg"}
                alt="3D Building"
                className="w-full h-auto max-w-md object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
