import { useEffect, useRef, useState } from 'react';

const useScrollReveal = (options = {}) => {
  const elementRef = useRef();
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(element); // Only animate once
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [elementRef, isRevealed];
};

export default useScrollReveal;