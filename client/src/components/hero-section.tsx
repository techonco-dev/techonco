import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import ParticleSystem from './particle-system';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && heroRef.current) {
      const tl = window.gsap.timeline();
      tl.from('.hero-title', { duration: 1.5, y: 100, opacity: 0, ease: 'power3.out' })
        .from('.hero-subtitle', { duration: 1, y: 50, opacity: 0, ease: 'power2.out' }, '-=0.5')
        .from('.hero-buttons', { duration: 1, y: 30, opacity: 0, ease: 'power2.out' }, '-=0.3');
    }
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#statistics');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden">
      <ParticleSystem />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-float" style={{animationDelay: '-2s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-float" style={{animationDelay: '-4s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6 opacity-0">
            <span className="block">SMART SOLUTION</span>
            <span className="block">FOR EMISSION</span>
            <span className="block text-yellow-400">CONTROL</span>
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl mb-8 opacity-0 max-w-3xl mx-auto">
            Advanced Retrofit Emission Control Devices achieving 80-90% reduction in diesel generator emissions
          </p>
          <div className="hero-buttons space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center opacity-0">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToNext()}
            >
              Explore Technology
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:scale-110 transition-transform"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
