import { useCounterAnimation } from '@/hooks/use-counter-animation';

const stats = [
  { target: 90, label: '% Emission Reduction', suffix: '' },
  { target: 12, label: 'Years Lifespan', suffix: '' },
  { target: 40000, label: 'Hours Operation', suffix: '' },
  { target: 125, label: 'kVA Minimum', suffix: '' },
];

export default function StatisticsSection() {
  return (
    <section id="statistics" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ target, label, suffix }: { target: number; label: string; suffix: string }) {
  const countRef = useCounterAnimation(target);

  return (
    <div className="text-center stats-card">
      <div className="text-4xl md:text-6xl font-bold gradient-text mb-2">
        <span ref={countRef} />{suffix}
      </div>
      <div className="text-gray-600 font-semibold">{label}</div>
    </div>
  );
}
