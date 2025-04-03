"use client";

import React from 'react';
import { format, parse } from 'date-fns';
import type { MealPeriod } from './meal-period-selector';

interface TimeSlot {
  restaurant: string;
  slotStartTime: string;
  slotDate: string;
  slotStatus: string;
  partySize: string;
}

interface TimeSlotGridProps {
  slots: TimeSlot[];
  selectedTime: string | null;
  onTimeSelect: (time: string) => void;
  isVisible: boolean;
  mealPeriod: MealPeriod | null;
}

const mealPeriodTimeRanges = {
  breakfast: { start: '07:00', end: '11:00' },
  lunch: { start: '11:30', end: '15:00' },
  supper: { start: '15:30', end: '18:30' },
  dinner: { start: '19:00', end: '23:00' }
};

export const TimeSlotGrid: React.FC<TimeSlotGridProps> = ({
  slots,
  selectedTime,
  onTimeSelect,
  isVisible,
  mealPeriod
}) => {
  if (!isVisible || !mealPeriod) return null;

  const filteredSlots = slots.filter(slot => {
    if (!mealPeriod) return false;
    
    const timeRange = mealPeriodTimeRanges[mealPeriod];
    const slotTime = slot.slotStartTime;
    
    return slotTime >= timeRange.start && slotTime <= timeRange.end;
  });

  if (filteredSlots.length === 0) {
    return (
      <div className="w-full animate-in fade-in duration-500">
        <h3 className="text-base font-semibold text-gray-900 mb-4">
          Select Time Slot
        </h3>
        <p className="text-gray-500">No available slots for this meal period.</p>
      </div>
    );
  }

  return (
    <div className="w-full animate-in fade-in duration-500">
      <h3 className="text-base font-semibold text-gray-900 mb-4">
        Select Time Slot
      </h3>
      
      <div className="grid grid-cols-3 gap-3">
        {filteredSlots.map((slot) => {
          const isSelected = selectedTime === slot.slotStartTime;
          // Convert 24h format to 12h format
          const time = format(parse(slot.slotStartTime, 'HH:mm', new Date()), 'h:mm a');
          
          return (
            <button
              key={slot.slotStartTime}
              onClick={() => onTimeSelect(slot.slotStartTime)}
              className={`
                aspect-[2/1] flex items-center justify-center rounded-lg border text-center transition-all text-sm
                ${isSelected
                  ? 'border-black bg-black text-white'
                  : 'border-gray-200 hover:border-gray-300'
                }
              `}
            >
              {time}
            </button>
          );
        })}
      </div>
    </div>
  );
}; 