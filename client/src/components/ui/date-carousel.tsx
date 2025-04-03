"use client";

import React, { useEffect, useRef } from 'react';
import { format, addDays, isSameDay } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DateCarouselProps {
  selectedDate: Date | null;
  onDateSelect: (date: Date) => void;
}

export const DateCarousel: React.FC<DateCarouselProps> = ({
  selectedDate,
  onDateSelect,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const today = new Date();
  const dates = Array.from({ length: 14 }, (_, i) => addDays(today, i));

  useEffect(() => {
    if (selectedDate && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const selectedButton = container.querySelector(`[data-date="${format(selectedDate, 'yyyy-MM-dd')}"]`);
      
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
  }, [selectedDate]);

  return (
    <div className="w-full">
      <h3 className="text-base font-semibold text-gray-900 mb-2">
        Select Date
      </h3>
      
      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex space-x-2 overflow-x-auto scrollbar-hide pb-1"
        >
          {dates.map((date) => {
            const isSelected = selectedDate && isSameDay(date, selectedDate);
            const isToday = isSameDay(date, today);
            
            return (
              <button
                key={date.toISOString()}
                data-date={format(date, 'yyyy-MM-dd')}
                onClick={() => onDateSelect(date)}
                className={`
                  flex-shrink-0 w-[90px] py-2 px-2 rounded-lg border transition-all
                  ${isSelected
                    ? 'border-black bg-black text-white'
                    : 'border-gray-200 hover:border-gray-300'
                  }
                `}
              >
                <div className="flex flex-col items-center text-center gap-0.5">
                  <div className="text-xs font-medium">
                    {format(date, 'EEE')}
                  </div>
                  <div className="text-lg font-semibold">
                    {format(date, 'd')}
                  </div>
                  <div className="text-[10px]">
                    {format(date, 'MMM')}
                  </div>
                  {isToday && (
                    <div className="text-[10px] px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                      Today
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}; 