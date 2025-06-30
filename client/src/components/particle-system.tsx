import { useEffect, useRef } from 'react';

export default function ParticleSystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined' || !window.gsap) return;

    const container = containerRef.current;
    const particleCount = 50;

    // Clear existing particles
    container.innerHTML = '';

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.width = Math.random() * 4 + 2 + 'px';
      particle.style.height = particle.style.width;
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      container.appendChild(particle);

      // Animate particles with GSAP
      window.gsap.to(particle, {
        y: '-100vh',
        duration: Math.random() * 10 + 10,
        repeat: -1,
        ease: 'none',
        delay: Math.random() * 2
      });
    }

    // Cleanup function
    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div id="particleContainer" ref={containerRef} className="absolute inset-0 pointer-events-none" />;
}
