import { useEffect, useState } from 'react';

interface CartNotificationProps {
  itemCount: number;
  totalAmount: number;
}

export function CartNotification({ itemCount, totalAmount }: CartNotificationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);
      
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set new timeout to show notification after scrolling stops
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 500); // 500ms delay after scroll stops

      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  if (itemCount === 0) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-black text-white shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="max-w-2xl mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center gap-2">
          <span className="font-medium">{itemCount} Item{itemCount !== 1 ? 's' : ''}</span>
          <span className="text-white/80">|</span>
          <span className="font-medium">₹{totalAmount}</span>
        </div>
        <button className="bg-white text-black px-3 py-1.5 rounded text-sm font-medium">
          View Cart →
        </button>
      </div>
    </div>
  );
} 