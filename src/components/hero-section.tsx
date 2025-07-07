'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import ParticleSystem from './particle-system';
import Image from 'next/image';

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
    <section id="home" ref={heroRef} className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden">
      <ParticleSystem />
      

      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white bg-opacity-10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-float" style={{animationDelay: '-2s'}}></div>
        <div className="absolute bottom-32 left-1/3 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-float" style={{animationDelay: '-4s'}}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Text Content */}
          <div className="text-left text-white space-y-8">
            <div className="hero-title opacity-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
                TEC HONCO TECHNOLOGIES
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
          
          {/* Right Side - Earth Image (moved from absolute positioning) */}
          <div className="flex justify-center lg:justify-end">
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
