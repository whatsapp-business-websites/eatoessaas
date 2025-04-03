"use client";

import React, { useEffect, useRef } from 'react';
import { Coffee, Sun, Cloud, Moon } from 'lucide-react';

export type MealPeriod = 'breakfast' | 'lunch' | 'supper' | 'dinner';

interface MealPeriodOption {
  id: MealPeriod;
  label: string;
  icon: React.ReactNode;
  timeRange: string;
}

const mealPeriods: MealPeriodOption[] = [
  {
    id: 'breakfast',
    label: 'Breakfast',
    icon: <Coffee className="w-4 h-4" />,
    timeRange: '7:00 AM - 11:00 AM'
  },
  {
    id: 'lunch',
    label: 'Lunch',
    icon: <Sun className="w-4 h-4" />,
    timeRange: '11:30 AM - 3:00 PM'
  },
  {
    id: 'supper',
    label: 'Supper',
    icon: <Cloud className="w-4 h-4" />,
    timeRange: '3:30 PM - 6:30 PM'
  },
  {
    id: 'dinner',
    label: 'Dinner',
    icon: <Moon className="w-4 h-4" />,
    timeRange: '7:00 PM - 11:00 PM'
  }
];

interface MealPeriodSelectorProps {
  selectedPeriod: MealPeriod | null;
  onPeriodSelect: (period: MealPeriod) => void;
}

export const MealPeriodSelector: React.FC<MealPeriodSelectorProps> = ({
  selectedPeriod,
  onPeriodSelect,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedPeriod && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const selectedButton = container.querySelector(`[data-period="${selectedPeriod}"]`);
      
      if (selectedButton) {
        const containerWidth = container.offsetWidth;
        const buttonLeft = (selectedButton as HTMLElement).offsetLeft;
        const buttonWidth = (selectedButton as HTMLElement).offsetWidth;
        const scrollPosition = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [selectedPeriod]);

  return (
    <div className="w-full">
      <h3 className="text-base font-semibold text-gray-900 mb-4">
        Select Meal Time
      </h3>
      
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2"
        >
          {mealPeriods.map((period) => {
            const isSelected = selectedPeriod === period.id;
            
            return (
              <button
                key={period.id}
                data-period={period.id}
                onClick={() => onPeriodSelect(period.id)}
                className={`
                  flex-shrink-0 w-[200px] py-3 px-4 rounded-lg border transition-all
                  ${isSelected
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200 hover:border-gray-300'
                  }
                `}
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <div className={isSelected ? 'text-white' : 'text-gray-600'}>
                      {period.icon}
                    </div>
                    <div className="font-medium">
                      {period.label}
                    </div>
                  </div>
                  <div className={`text-sm ${isSelected ? 'text-gray-200' : 'text-gray-500'}`}>
                    {period.timeRange}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}; 