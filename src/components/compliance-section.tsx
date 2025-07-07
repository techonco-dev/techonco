import { Badge } from '@/components/ui/badge';

const regulations = [
  {
    emoji: '📌',
    title: 'CPCB Notification (2020)',
    description: 'Mandatory RECD installation for DG sets ≥125 kVA',
    status: 'Mandatory',
    statusColor: 'bg-red-100 text-red-800'
  },
  {
    emoji: '📌',
    title: 'NGT Orders (2021 & 2023)',
    description: 'RECD required in NCR, major cities & industrial areas',
    status: 'Regional',
    statusColor: 'bg-orange-100 text-orange-800'
  },
  {
    emoji: '📌',
    title: 'State Pollution Control Board Guidelines',
    description: 'Local enforcement of emission norms across states',
    status: 'State-wise',
    statusColor: 'bg-blue-100 text-blue-800'
  }
];

export default function ComplianceSection() {
  return (
    <section id="compliance" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Government <span className="gradient-text">Regulations</span>
          </h2>
          <p className="text-xl text-gray-600">Stay compliant with evolving emission standards</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {regulations.map((regulation, index) => (
              <div key={index} className="flex items-start space-x-6 compliance-item">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {regulation.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{regulation.title}</h3>
                  <p className="text-gray-600 mb-2">{regulation.description}</p>
                  <Badge className={`${regulation.statusColor} font-semibold`}>
                    {regulation.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
