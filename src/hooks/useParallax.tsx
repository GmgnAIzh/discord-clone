'use client';

import { useEffect, useState } from 'react';

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return offset;
};

export const useScrollTrigger = (threshold: number = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const viewHeight = window.innerHeight;
      const scrollRatio = scrolled / viewHeight;

      setIsVisible(scrollRatio > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isVisible;
};

export const useIntersectionObserver = (options?: IntersectionObserverInit) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [ref, setRef] = useState<Element | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return [setRef, isIntersecting] as const;
};
