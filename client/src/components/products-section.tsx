import { Badge } from '@/components/ui/badge';

const products = [
  {
    capacity: '25 – 75 kVA',
    category: 'Small Scale Operations',
    technology: 'Diesel Particulate Filter (DPF), Catalytic Converter',
    efficiency: '60-80% PM reduction',
    compliance: 'CPCB-IV+ / NGT',
    recommended: false
  },
  {
    capacity: '100 – 250 kVA',
    category: 'Medium Scale Operations',
    technology: 'DPF + Selective Catalytic Reduction (SCR)',
    efficiency: '70-90% PM & NOx reduction',
    compliance: 'CPCB-IV+ / NGT',
    recommended: false
  },
  {
    capacity: '300 – 500 kVA',
    category: 'Large Scale Operations',
    technology: 'SCR + Diesel Oxidation Catalyst (DOC)',
    efficiency: '80-90% reduction',
    compliance: 'CPCB-IV+ / NGT',
    recommended: false
  },
  {
    capacity: '625 – 1000 kVA',
    category: 'Industrial Scale',
    technology: 'Hybrid System (DPF + SCR + ESP)',
    efficiency: '90%+ reduction',
    compliance: 'CPCB-IV+ / NGT',
    recommended: true
  },
  {
    capacity: '1250 – 2000+ kVA',
    category: 'Heavy Industrial',
    technology: 'High-Capacity SCR + Ammonia Injection',
    efficiency: '90%+ reduction',
    compliance: 'CPCB-IV+ / MoEFCC',
    recommended: false
  }
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            RECD <span className="gradient-text">Product Range</span>
          </h2>
          <p className="text-xl text-gray-600">Tailored solutions for different generator capacities</p>
        </div>
        
        <div className="space-y-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className={`glass-effect rounded-2xl p-8 card-hover-effect bg-white/50 backdrop-blur-sm border ${
                product.recommended ? 'border-yellow-400 ring-2 ring-yellow-400/20' : 'border-gray-200'
              }`}
            >
              <div className="grid md:grid-cols-4 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">{product.capacity}</h3>
                  <p className="text-gray-600 mb-2">{product.category}</p>
                  {product.recommended && (
                    <Badge variant="secondary" className="bg-yellow-400 text-yellow-900 font-semibold">
                      RECOMMENDED
                    </Badge>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Technology</h4>
                  <p className="text-sm text-gray-600">{product.technology}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Efficiency</h4>
                  <p className="text-sm text-gray-600">{product.efficiency}</p>
                </div>
                <div>
                  <Badge className="bg-green-600 text-white font-semibold">
                    {product.compliance}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
