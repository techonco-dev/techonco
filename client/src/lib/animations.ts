declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export const initScrollAnimations = () => {
  if (typeof window === 'undefined' || !window.gsap) return;

  window.gsap.registerPlugin(window.ScrollTrigger);

  // Fade in animations for sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    window.gsap.from(section.children, {
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%'
      }
    });
  });
};

export const animateHeroSection = () => {
  if (typeof window === 'undefined' || !window.gsap) return;

  const tl = window.gsap.timeline();
  tl.from('.hero-title', { duration: 1.5, y: 100, opacity: 0, ease: 'power3.out' })
    .from('.hero-subtitle', { duration: 1, y: 50, opacity: 0, ease: 'power2.out' }, '-=0.5')
    .from('.hero-buttons', { duration: 1, y: 30, opacity: 0, ease: 'power2.out' }, '-=0.3');
};

export const initParallaxEffects = () => {
  if (typeof window === 'undefined' || !window.gsap) return;

  const parallaxElements = document.querySelectorAll('.parallax-element');
  parallaxElements.forEach(element => {
    window.gsap.to(element, {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
};
