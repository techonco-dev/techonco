/* eslint-disable @next/next/no-img-element */
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
    <section id="products" className="py-4 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            RECD <span className="gradient-text">Product Range</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600">Tailored solutions for different generator capacities</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 items-stretch min-h-[350px]">
          {/* Left: Image */}
          <div className="flex justify-center items-center h-full">
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="/diesel.png"
                alt="Diesel Generator"
                className="rounded-2xl shadow-xl object-cover h-full max-h-[350px] w-auto"
                style={{ minHeight: '300px', maxHeight: '600px' }}
              />
            </div>
          </div>
          {/* Right: Product Data */}
          <div className="space-y-4 flex flex-col justify-center h-full">
            {products.map((product, index) => (
              <div
                key={index}
                className={`glass-effect rounded-xl p-4 card-hover-effect bg-white/50 backdrop-blur-sm border ${
                  product.recommended ? 'border-yellow-400 ring-2 ring-yellow-400/20' : 'border-gray-200'
                }`}
                style={{ minHeight: '40px' }}
              >
                <div className="grid md:grid-cols-4 gap-2 items-center">
                  <div>
                    <h3 className="text-lg font-bold text-blue-600 mb-1">{product.capacity}</h3>
                    <p className="text-gray-600 mb-1 text-sm">{product.category}</p>
                    {product.recommended && (
                      <Badge variant="secondary" className="bg-yellow-400 text-yellow-900 font-semibold text-xs">
                        RECOMMENDED
                      </Badge>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Technology</h4>
                    <p className="text-xs text-gray-600">{product.technology}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">Efficiency</h4>
                    <p className="text-xs text-gray-600">{product.efficiency}</p>
                  </div>
                  <div>
                    <Badge className="bg-green-600 text-white font-semibold text-xs">
                      {product.compliance}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
