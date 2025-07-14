

const regulations = [
  {
    emoji: '📌',
    title: 'RECD Procedure',
    description: 'Emission Compliance Testing of Retro-fit Emission Control Devices (RECD) For Diesel Power Generating Set Engines Up to Gross Mechanical Power 800 kW',
    status: 'Mandatory',
    statusColor: 'bg-red-100 text-red-800',
    pdfUrl: 'https://cpcb.nic.in/uploads/RECD_Procedure_Revised.pdf'
  },
  {
    emoji: '📌',
    title: 'Direction 76',
    description: ' Dlrectlons under Sectlot 12 of the Commission for Air Qualtty Management ln Natlonal Capital Region and AdJolning Areaa Act, 2O2l - Revlew of regulatlons fot use of DG sets t! NCR.',
    status: 'Regional',
    statusColor: 'bg-orange-100 text-orange-800',
    pdfUrl: 'https://caqm.nic.in/WriteReadData/LINKS/Direction%20No-768acf87c5-a940-4f9c-94fe-75b90691030f.pdf'
  },
  {
    emoji: '📌',
    title: 'Environmental Compensation (EC) ',
    description: 'Standard Schedule for Environmental Compensation (EC) Charges in Closure Directions/Sealing orders issued by the Commission',
    status: 'State-wise',
    statusColor: 'bg-blue-100 text-blue-800',
    pdfUrl: 'https://caqm.nic.in/WriteReadData/LINKS/Standard%20Schedule%20for%20EC%20Charges9edb6558-ada1-4b2c-b5e9-c03b7ccab066.pdf'
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
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regulations.map((regulation, index) => (
              <div key={index} className="flex flex-col items-center text-center glass-effect rounded-2xl p-6 card-hover-effect bg-white/80 border border-gray-200 h-full">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {regulation.emoji}
                </div>
                <a
                  href={regulation.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-lg font-bold mb-2 hover:underline">{regulation.title}</h3>
                  <p className="text-gray-700 mb-2 text-sm">{regulation.description}</p>
                </a>
                {/* <Badge className={`${regulation.statusColor} font-semibold mt-auto`}>
                  {regulation.status}
                </Badge> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
