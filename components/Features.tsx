import FeatureCard from './FeatureCard';

const features = [
  {
    icon: '/images/find-your-dream-home.png',
    title: 'Find Your Dream Home',
    description: 'Discover the perfect property that matches your lifestyle and budget.',
  },
  {
    icon: '/images/unlock-property-value.png',
    title: 'Unlock Property Value',
    description: 'Understand and maximize the value of your real estate investment.',
  },
  {
    icon: '/images/effortless-property-management.png',
    title: 'Effortless Property Management',
    description: 'Streamline your property management with our comprehensive tools and solutions.',
  },
  {
    icon: '/images/smart-investments.png',
    title: 'Smart Investments, Informed Decisions',
    description: 'Make confident investment decisions backed by market insights and expert analysis.',
  },
];

export default function Features() {
  return (
    <section className="pb-16 px-4 lg:p-[10px] xl:p-[20px] pt-0">
      <div className="max-w-7xl mx-auto bg-background border border-zinc-800 rounded-xl p-2 md:p-4 shadow-mobile lg:shadow-laptop xl:shadow-monitor">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
