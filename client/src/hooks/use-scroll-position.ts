import { useState, useEffect } from 'react';

interface ScrollPosition {
  isAtTop: boolean;
  isScrolling: boolean;
}

export function useScrollPosition(): ScrollPosition {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      // Clear the previous timeout
      clearTimeout(scrollTimeout);

      // Set scrolling state to true
      setIsScrolling(true);

      // Check if we're at the top
      setIsAtTop(window.scrollY === 0);

      // Set a timeout to detect when scrolling has stopped
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 150); // 150ms debounce time
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return { isAtTop, isScrolling };
} 