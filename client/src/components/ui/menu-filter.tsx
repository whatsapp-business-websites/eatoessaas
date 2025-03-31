import { cn } from "@/lib/utils";
import { Switch } from "./switch";
import { useEffect, useState } from 'react';

interface MenuFilterProps {
  currentFilter: 'all' | 'veg' | 'non-veg';
  onFilterChange: (filter: 'all' | 'veg' | 'non-veg') => void;
}

export function MenuFilter({ currentFilter, onFilterChange }: MenuFilterProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);
  const isVegActive = currentFilter === 'veg';
  const isNonVegActive = currentFilter === 'non-veg';

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(false);
      
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 500);

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

  const handleVegToggle = (checked: boolean) => {
    if (checked && !isNonVegActive) {
      onFilterChange('veg');
    } else if (!checked && !isNonVegActive) {
      onFilterChange('all');
    }
  };

  const handleNonVegToggle = (checked: boolean) => {
    if (checked && !isVegActive) {
      onFilterChange('non-veg');
    } else if (!checked && !isVegActive) {
      onFilterChange('all');
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-white">
      <div className="container mx-auto flex justify-start gap-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600"
            >
              <rect 
                x="1" 
                y="1" 
                width="14" 
                height="14" 
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle 
                cx="8" 
                cy="8" 
                r="4" 
                fill="currentColor"
              />
            </svg>
            <span className="text-sm font-medium">Veg</span>
          </div>
          <Switch
            checked={isVegActive}
            onCheckedChange={handleVegToggle}
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <svg 
              width="14" 
              height="14" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-red-600"
            >
              <rect 
                x="1" 
                y="1" 
                width="14" 
                height="14" 
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle 
                cx="8" 
                cy="8" 
                r="4" 
                fill="currentColor"
              />
            </svg>
            <span className="text-sm font-medium">Non-veg</span>
          </div>
          <Switch
            checked={isNonVegActive}
            onCheckedChange={handleNonVegToggle}
          />
        </div>
      </div>
    </div>
  );
} 