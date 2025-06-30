const benefits = [
  {
    emoji: '🌱',
    title: 'Environmental Impact',
    description: 'Up to 80-90% reduction in PM & NOx emissions, contributing to cleaner air and environmental protection.'
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
    <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Our RECD</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Comprehensive benefits for industrial and commercial operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-effect rounded-2xl p-8 card-hover-effect bg-white/10 backdrop-blur-sm border border-white/20">
              <div className="text-5xl mb-4">{benefit.emoji}</div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="opacity-90">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
