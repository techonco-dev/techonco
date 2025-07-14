import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-yellow-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold  mb-4 tracking-tight"><span className="gradient-text">About Us</span></h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Building a Cleaner, Sustainable Future with Advanced Emission Control
          </p>
          
        </div>
        <div className="bg-white/50 rounded-2xl shadow-xl  md:p-12 mb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At <span className="font-bold ">TEC HONCO</span>, we are committed to building a cleaner and more sustainable future through advanced Retrofit Emission Control Devices (RECDs) designed for diesel generator sets and industrial engines. With a strong focus on air quality improvement and compliance with evolving emission norms, we offer state-of-the-art emission reduction solutions aligned with CPCB and state pollution control guidelines.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Our leadership team brings together over <span className="font-semibold text-blue-700">50 years of collective industry experience</span> across the power, energy, and environmental sectors. This rich legacy drives our technical excellence, reliability, and ability to deliver results in challenging operational environments. From R&D to installation and after-sales support, every aspect of our business is guided by deep industry insight and a commitment to innovation and compliance.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Our RECDs are manufactured using internationally benchmarked technologies, including DOC + DPF systems, and are tested for effectiveness across a wide range of load conditions and applications. We cater to clients across government, industrial, real estate, and institutional sectors, helping them meet emission norms while extending the life of their existing DG sets.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            As emission norms continue to tighten, <span className="font-bold text-blue-800">TEC HONCO</span> stands ready to support India’s cleaner air mission—one retrofit at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
  