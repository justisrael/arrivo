import Image from 'next/image';

interface ExperienceStepProps {
    step: string;
    title: string;
    description: string;
}

function ExperienceStep({ step, title, description }: ExperienceStepProps) {
    return (
        <div className="relative group flex flex-col">
            {/* Continuous Vertical Purple Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-purple-500/50 z-20" />

            {/* Step Header Area (Above the horizontal line) */}
            <div className="pl-6 pt-2 pb-4">
                <div className="text-white text-sm font-medium">Step {step}</div>
            </div>

            {/* Horizontal Divider - No margin bottom to avoid padding between border and card */}
            <div className="h-[1px] w-full bg-gradient-to-r from-purple-500/50 to-transparent z-20" />

            {/* Content Card Area */}
            <div className="relative bg-[#1A1A1A] border border-transparent rounded-br-xl rounded-tr-none overflow-hidden shadow-lg flex-1">
                {/* Top-left radial gradient glow */}
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-purple-600/15 blur-3xl rounded-full" />

                {/* Inner Content with padding */}
                <div className="relative z-10 p-6 md:p-10 flex flex-col gap-4">
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight">{title}</h3>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function EstateinExperience() {
    const steps = [
        {
            step: '01',
            title: 'Discover a World of Possibilities',
            description: 'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.',
        },
        {
            step: '02',
            title: 'Narrowing Down Your Choices',
            description: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
        },
        {
            step: '03',
            title: 'Personalized Guidance',
            description: 'Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.',
        },
        {
            step: '04',
            title: 'See It for Yourself',
            description: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
        },
        {
            step: '05',
            title: 'Making Informed Decisions',
            description: 'Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.',
        },
        {
            step: '06',
            title: 'Getting the Best Deal',
            description: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
        },
    ];

    return (
        <section className="py-16 md:py-24 relative">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="mb-16">
                    <Image
                        src="/images/heading-icon.svg"
                        alt=""
                        width={48}
                        height={48}
                        className="w-12 h-12 mb-4"
                    />
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Navigating the Estatein Experience</h2>
                    <p className="text-gray-400 max-w-4xl">
                        At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-20">
                    {steps.map((step, index) => (
                        <ExperienceStep
                            key={index}
                            step={step.step}
                            title={step.title}
                            description={step.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
