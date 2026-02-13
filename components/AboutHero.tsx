import Image from 'next/image';

export default function AboutHero() {
    return (
        <section className="relative pt-24 lg:pt-32 pb-0 overflow-visible">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] relative z-10 px-4 lg:px-0">
                {/* Left Content */}
                <div className="flex flex-col justify-center gap-6 md:gap-8 py-12 md:py-16 lg:pr-12">
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
                            Our Journey
                        </h1>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 max-w-md leading-relaxed text-sm md:text-base">
                        Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
                    </p>

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
                <div className="relative flex items-center justify-center w-full">
                    {/* Background pattern for the right side only */}
                    <div
                        className="absolute inset-0 opacity-40 pointer-events-none z-0"
                        style={{
                            backgroundImage: 'url(/images/gradient-lines.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />

                    <div className="relative w-full aspect-[16/9] border border-gray-800 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent blur-3xl" />
                        <Image
                            src="/images/about-hero-img.png"
                            alt="Our Journey"
                            fill
                            className="object-contain object-center opacity-90"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
