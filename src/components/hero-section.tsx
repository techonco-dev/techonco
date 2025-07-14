'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import ParticleSystem from './particle-system';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gsap: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ScrollTrigger: any;
  }
}

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gsap && heroRef.current) {
      const tl = window.gsap.timeline();
      tl.from('.hero-title', { duration: 1.5, y: 100, opacity: 0, ease: 'power3.out' })
        .from('.hero-subtitle', { duration: 1, y: 50, opacity: 0, ease: 'power2.out' }, '-=0.5')
        .from('.hero-buttons', { duration: 1, y: 30, opacity: 0, ease: 'power2.out' }, '-=0.3')
        .from('.earth-image', { duration: 2, x: 100, opacity: 0, scale: 0.8, ease: 'back.out(1.7)' }, '-=1');
      
      // Parallax effect for earth image on scroll
      window.gsap.to('.parallax-element', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#statistics');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/banner.jpg')" }}
    >
      <ParticleSystem />
      
      {/* Optional: Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0 pointer-events-none" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-float" style={{animationDelay: '-2s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-float" style={{animationDelay: '-4s'}}></div>
      </div>
      
      {/* Highlighted Banner Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-center bg-gradient-to-r from-yellow-400 via-white to-yellow-400 bg-clip-text text-transparent drop-shadow-lg px-4 py-2 rounded-lg">
          SMART SOLUTION FOR EMISSION CONTROL
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Text Content */}
          <div className="text-left text-white space-y-8">
            <div className="hero-title opacity-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
                TECHONCO TECHNOLOGIES
              </h1>
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-yellow-400">SMART SOLUTION</span>
                <span className="block text-yellow-400">FOR EMISSION</span>
                <span className="block text-yellow-400">CONTROL</span>
              </div>
            </div>
            
            <div className="hero-subtitle text-lg md:text-xl opacity-0 space-y-4">
              <p className="text-white/90 leading-relaxed">
                Advanced Retrofit Emission Control Devices achieving <span className="text-yellow-400 font-semibold">80-90% reduction</span> in diesel generator emissions
              </p>
              <p className="text-white/80">
                Pioneering clean air technology for industrial and commercial operations
              </p>
            </div>
            
            <div className="hero-buttons space-y-4 md:space-y-0 md:space-x-6 md:flex opacity-0">
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
