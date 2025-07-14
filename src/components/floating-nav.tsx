'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#technology', label: 'Technology' },
  { href: '#products', label: 'Products' },
  { href: '#compliance', label: 'Compliance' },
  { href: '#contact', label: 'Contact' },
];

export default function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`nav-floating fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-8 py-4 rounded-full shadow-lg transition-all duration-300 ${
        isScrolled ? 'bg-white/95' : 'bg-white/90'
      }`}>
        <div className="flex items-center space-x-8">
          
          <div className="font-bold text-xl gradient-text">
            {!logoError ? (
              <Image
                src="/logo.png"
                alt="Techonco Logo"
                width={150}
                height={150}
                onError={() => setLogoError(true)}
                className="inline-block align-middle"
                priority
              />
            ) : (
              'TECHONCO'
            )}
          </div>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 md:hidden">
          <div className="fixed top-20 left-4 right-4 bg-white rounded-2xl shadow-xl p-6">
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
