import { useEffect, useRef } from 'react';

export function useCounterAnimation(target: number, duration = 2000) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const start: number = 0;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (target - start) + start);
      node.textContent = value.toString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        node.textContent = target.toString();
      }
    };
    requestAnimationFrame(step);
  }, [target, duration]);

  return ref;
} 