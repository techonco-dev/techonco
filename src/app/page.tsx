'use client';

import { useEffect } from 'react';
import HeroSection from '@/components/hero-section';
import StatisticsSection from '@/components/statistics-section';
import TechnologySection from '@/components/technology-section';
import ProductsSection from '@/components/products-section';
import BenefitsSection from '@/components/benefits-section';
import ComplianceSection from '@/components/compliance-section';
import ContactSection from '@/components/contact-section';
import FloatingNav from '@/components/floating-nav';
import { useScrollProgress } from '@/hooks/use-scroll-progress';

export default function Home() {
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    // Initialize GSAP ScrollTrigger
    if (typeof window !== 'undefined' && window.gsap) {
      window.gsap.registerPlugin(window.ScrollTrigger);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-indicator"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      
      <FloatingNav />
      <HeroSection />
      <StatisticsSection />
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Pioneering <span className="gradient-text">Clean Air</span> Technology
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The pressing issue of rising levels of air pollution has become a grave concern with far-reaching consequences on the environment and significant health risks, particularly in developing nations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                TEC HONCO TECHNOLOGIES introduces an effective remedy – the Retrofit Emission Control Device (RECD) designed for Diesel Generators ranging from 125 kVA to 1000 kVA.
              </p>
              <div className="flex items-center space-x-4 pt-4">
                <div className="flex items-center space-x-2 text-green-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">CPCB Approved</span>
                </div>
                <div className="flex items-center space-x-2 text-green-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-semibold">NGT Compliant</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Industrial emission control facility" 
                className="rounded-2xl shadow-2xl w-full h-auto card-hover-effect" 
              />
              <div className="absolute -bottom-6 -right-6 glass-effect rounded-xl p-6 text-white bg-gradient-to-r from-blue-600 to-green-600">
                <div className="text-2xl font-bold">70-90%</div>
                <div className="text-sm">Emission Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TechnologySection />
      <ProductsSection />
      <BenefitsSection />
      <ComplianceSection />
      
      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="gradient-text">Technology</span> in Action
            </h2>
            <p className="text-xl text-gray-600">Real-world implementations and installations</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1581092163592-8ab8c6332ec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Industrial diesel generator facility" 
              className="rounded-xl shadow-lg w-full h-auto card-hover-effect" 
            />
            <img 
              src="https://images.unsplash.com/photo-1581092791442-1151a4d90f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Environmental monitoring technology" 
              className="rounded-xl shadow-lg w-full h-auto card-hover-effect" 
            />
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Clean industrial emission control facility" 
              className="rounded-xl shadow-lg w-full h-auto card-hover-effect" 
            />
            <img 
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300" 
              alt="Advanced industrial generator with emission control" 
              className="rounded-xl shadow-lg w-full h-auto card-hover-effect" 
            />
          </div>
        </div>
      </section>
      
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-4">TEC HONCO TECHNOLOGIES</div>
            <p className="text-gray-400 mb-6">Leading the future of emission control technology</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400">&copy; 2024 TEC HONCO TECHNOLOGIES PVT LTD. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
