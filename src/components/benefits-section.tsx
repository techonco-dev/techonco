const benefits = [
  {
    emoji: '🌱',
    title: 'Environmental Impact',
    description: 'Up to 85-95% reduction in PM & NOx emissions, contributing to cleaner air and environmental protection.'
  },
  {
    emoji: '⚖️',
    title: 'Regulatory Compliance',
    description: 'Full compliance with CPCB & NGT guidelines, avoiding penalties and legal complications.'
  },
  {
    emoji: '💰',
    title: 'Cost Efficiency',
    description: 'Improved fuel efficiency, reduced maintenance costs, and eligibility for carbon credits.'
  },
  {
    emoji: '🏭',
    title: 'Industrial Ready',
    description: 'Eco-friendly solution perfect for industrial and commercial operations of all sizes.'
  },
  {
    emoji: '🏆',
    title: 'Green Certifications',
    description: 'Eligibility for carbon credits and green certifications, enhancing corporate sustainability.'
  },
  {
    emoji: '🔧',
    title: 'Low Maintenance',
    description: 'Minimal maintenance requirements with service intervals of 6 months or 500 hours.'
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our RECD</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Comprehensive benefits for industrial and commercial operations
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Benefits Cards in 2-column grid */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="glass-effect rounded-2xl p-3 card-hover-effect bg-white/10 backdrop-blur-sm border border-white/20 min-h-[90px] flex flex-col justify-center">
                  <div className="text-2xl mb-1">{benefit.emoji}</div>
                  <h3 className="text-base font-bold mb-1">{benefit.title}</h3>
                  <p className="opacity-90 text-xs leading-snug">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex justify-center items-center">
            <img
              src="/life.png"
              alt="Diesel Generator"
              className="rounded-2xl shadow-2xl object-cover w-full max-w-md h-auto"
              style={{ minHeight: '300px', maxHeight: '500px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
