const FEATURES = [
  {
    id: 1,
    title: 'Find Your Dream Home',
    description: 'Discover properties that match your lifestyle and budget preferences.',
    icon: '/images/find-your-dream-home.png',
  },
  {
    id: 2,
    title: 'Unlock Property Value',
    description: 'Understand and maximize the value of your real estate investments.',
    icon: '/images/unlock-property-value.png',
  },
  {
    id: 3,
    title: 'Effortless Property Management',
    description: 'Manage your properties with our comprehensive management tools.',
    icon: '/images/effortless-property-management.png',
  },
  {
    id: 4,
    title: 'Smart Investments, Informed Decisions',
    description: 'Make data-driven decisions with our investment analysis tools.',
    icon: '/images/smart-investments.png',
  },
];

export function FeaturesSection() {
  return (
    <section className="bg-[#141414] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="bg-[#1a1a1a] border border-zinc-800 rounded-lg p-6 hover:border-purple-600 transition-colors group"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center group-hover:bg-purple-600/20 transition-colors">
                  <img src={feature.icon || "/placeholder.svg"} alt={feature.title} className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
