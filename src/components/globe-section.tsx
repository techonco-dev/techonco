import Image from 'next/image';

export default function GlobeSection() {
  return (
    <section className="relative flex items-center justify-center py-24 ">
      <div className="relative earth-float earth-image">
        <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden earth-pulse">
          <Image 
            src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
            alt="Earth - Environmental protection" 
            className="w-full h-full object-cover earth-rotate" 
            width={800}
            height={800}
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-green-500/30 to-transparent rounded-full"></div>
        <div className="absolute -inset-2 md:-inset-4 border-2 border-green-400/50 rounded-full animate-pulse-slow"></div>
        {/* Orbital rings */}
        <div className="absolute -inset-8 md:-inset-12 border border-green-300/30 rounded-full animate-spin-slow"></div>
        <div className="absolute -inset-12 md:-inset-16 border border-blue-300/20 rounded-full animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '15s'}}></div>
      </div>
    </section>
  );
} 