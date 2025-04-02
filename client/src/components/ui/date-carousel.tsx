"use client";

import React, { useState } from 'react';
import { format, addDays, isSameDay } from 'date-fns';

interface DateCarouselProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

export const DateCarousel: React.FC<DateCarouselProps> = ({ selectedDate, onDateSelect }) => {
  const [startDate] = useState(new Date());

  // Generate array of next 30 days
  const dates = Array.from({ length: 30 }, (_, i) => addDays(startDate, i));

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold text-gray-900">
          Select Date
        </h3>
        <div className="text-sm text-gray-600">
          {format(startDate, 'MMMM yyyy')}
        </div>
      </div>
      
      <div className="relative">
        <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2">
          {dates.map((date) => {
            const isSelected = isSameDay(date, selectedDate);
            const isToday = isSameDay(date, new Date());
            
            return (
              <button
                key={date.toISOString()}
                onClick={() => onDateSelect(date)}
                className={`
                  flex-shrink-0 w-20 p-3 rounded-lg border transition-all
                  ${isSelected 
                    ? 'border-black bg-black text-white' 
                    : 'border-gray-200 hover:border-gray-300'
                  }
                `}
              >
                <div className="text-center">
                  <div className="text-sm font-medium">
                    {format(date, 'EEE')}
                  </div>
                  <div className="text-2xl font-semibold mt-1">
                    {format(date, 'd')}
                  </div>
                  <div className={`text-xs mt-1 ${isSelected ? 'text-white' : ''}`}>
                    {isToday ? 'Today' : format(date, 'MMM')}
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