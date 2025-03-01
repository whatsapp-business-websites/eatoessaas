import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * A custom hook that scrolls the window to the top when the component mounts
 * or when the location changes.
 * 
 * @param {boolean} smooth - Whether to use smooth scrolling behavior (default: true)
 */
export function useScrollToTop(smooth = true) {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'auto'
    });
  }, [location, smooth]);
}

export default useScrollToTop; 