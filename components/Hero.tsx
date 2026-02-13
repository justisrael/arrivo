import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-0 overflow-visible">
      {/* Background decorative elements are now handled per-section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] relative z-10 px-4 lg:px-0">
        {/* Left Content */}
        <div className="flex flex-col justify-center gap-8 py-16 lg:pr-12">
          {/* Headline */}
          <div>
            <Image
              src="/images/heading-icon.svg"
              alt=""
              width={48}
              height={48}
              className="w-12 h-12 mb-4"
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Discover Your Dream
              <br className="hidden sm:block" />
              Property with Estatein
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-400 max-w-lg leading-relaxed text-sm sm:text-base">
            Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 border border-gray-600 text-white rounded-lg hover:border-gray-400 transition">
              Learn More
            </button>
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-medium">
              Browse Properties
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-4 pt-4">
            <div className="border-l border-gray-700 pl-4">
              <p className="text-xl sm:text-2xl font-bold text-white">200+</p>
              <p className="text-xs text-gray-400">Happy Customers</p>
            </div>
            <div className="border-l border-gray-700 pl-4">
              <p className="text-xl sm:text-2xl font-bold text-white">10k+</p>
              <p className="text-xs text-gray-400">Properties For Clients</p>
            </div>
            <div className="border-l border-gray-700 pl-4">
              <p className="text-xl sm:text-2xl font-bold text-white">16+</p>
              <p className="text-xs text-gray-400">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex items-center justify-end w-full overflow-visible">
          {/* Background pattern for the right side only */}
          <div
            className="absolute inset-0 opacity-40 pointer-events-none z-0"
            style={{
              backgroundImage: 'url(/images/gradient-lines.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* Circular Text Badge */}
          <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden lg:block">
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Rotating Text */}
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="none"
                  />
                  <text className="text-[9px] fill-white uppercase tracking-[0.2em] font-medium">
                    <textPath href="#circlePath" startOffset="0%">
                      Discover Your Dream Property ✨ Discover Your Dream Property ✨
                    </textPath>
                  </text>
                </svg>
              </div>
              {/* Stagnant Arrow */}
              <div className="relative z-10 bg-zinc-900 border border-zinc-800 rounded-full p-4">
                <Image
                  src="/images/arrow-Icon.svg"
                  alt="Arrow"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>

          <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent blur-3xl" />
            <Image
              src="/images/hero.png"
              alt="Dream Property"
              fill
              className="object-cover object-center opacity-90 mix-blend-lighten"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
