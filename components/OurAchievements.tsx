import Image from 'next/image';

interface AchievementCardProps {
    title: string;
    description: string;
}

function AchievementCard({ title, description }: AchievementCardProps) {
    return (
        <div className="bg-[#141414] border border-[#262626] rounded-xl p-6 md:p-10 shadow-laptop xl:shadow-monitor h-full">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">{title}</h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {description}
            </p>
        </div>
    );
}

export default function OurAchievements() {
    const achievements = [
        {
            title: '3+ Years of Excellence',
            description: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
        },
        {
            title: 'Happy Clients',
            description: 'Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.',
        },
        {
            title: 'Industry Recognition',
            description: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
        },
    ];

    return (
        <section className="py-16 md:py-24 relative">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="mb-12">
                    <Image
                        src="/images/heading-icon.svg"
                        alt=""
                        width={48}
                        height={48}
                        className="w-12 h-12 mb-4"
                    />
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Our Achievements</h2>
                    <p className="text-gray-400 max-w-4xl">
                        Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
                    </p>
                </div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {achievements.map((achievement, index) => (
                        <AchievementCard
                            key={index}
                            title={achievement.title}
                            description={achievement.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
