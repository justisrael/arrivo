import Image from 'next/image';

interface ValueCardProps {
    icon: string;
    title: string;
    description: string;
}

function ValueCard({ icon, title, description }: ValueCardProps) {
    return (
        <div className="p-8 md:p-12 relative flex flex-col gap-6">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-purple-600/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                    <Image
                        src={icon}
                        alt={title}
                        width={28}
                        height={28}
                        className="w-7 h-7"
                    />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
    );
}

export default function OurValues() {
    const values = [
        {
            icon: '/images/trust.png',
            title: 'Trust',
            description: 'Trust is the cornerstone of every successful real estate transaction.',
        },
        {
            icon: '/images/excellence.png',
            title: 'Excellence',
            description: 'We set the bar high for ourselves. From the properties we list to the services we provide.',
        },
        {
            icon: '/images/client.png',
            title: 'Client-Centric',
            description: 'Your dreams and needs are at the center of our universe. We listen, understand.',
        },
        {
            icon: '/images/commitment.png',
            title: 'Our Commitment',
            description: 'We are dedicated to providing you with the highest level of service, professionalism, and support.',
        },
    ];

    return (
        <section className="py-16 md:py-24 lg:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16 items-center">
                    {/* Section Header - Left Column */}
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <Image
                                src="/images/heading-icon.svg"
                                alt=""
                                width={48}
                                height={48}
                                className="w-12 h-12"
                            />
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">Our Values</h2>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                            Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
                        </p>
                    </div>

                    {/* Values Grid - Right Column */}
                    <div className="relative border border-zinc-800 rounded-2xl bg-zinc-900/20 backdrop-blur-sm overflow-hidden p-2">
                        {/* Inner Dividers - They don't touch the outer borders */}
                        {/* Vertical line */}
                        <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-[1px] bg-zinc-800 -translate-x-1/2 z-0" />
                        {/* Horizontal line */}
                        <div className="hidden md:block absolute top-1/2 left-12 right-12 h-[1px] bg-zinc-800 -translate-y-1/2 z-0" />

                        <div className="grid grid-cols-1 md:grid-cols-2 relative z-10">
                            {values.map((value, index) => (
                                <ValueCard
                                    key={index}
                                    icon={value.icon}
                                    title={value.title}
                                    description={value.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
