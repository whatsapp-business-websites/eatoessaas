"use client";

import React from 'react';
import { format } from 'date-fns';

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
}

export const TimeSlotGrid: React.FC<TimeSlotGridProps> = ({
  slots,
  selectedTime,
  onTimeSelect,
  isVisible
}) => {
  if (!isVisible) return null;

  return (
    <div className="w-full animate-in fade-in duration-500">
      <h3 className="text-base font-semibold text-gray-900 mb-4">
        Select Time Slot
      </h3>
      
      <div className="grid grid-cols-3 gap-3">
        {slots.map((slot) => {
          const isSelected = selectedTime === slot.slotStartTime;
          // Convert 24h format to 12h format
          const time = format(new Date(`2024-01-01T${slot.slotStartTime}`), 'h:mm a');
          
          return (
            <button
              key={slot.slotStartTime}
              onClick={() => onTimeSelect(slot.slotStartTime)}
              className={`
                p-4 rounded-lg border text-center transition-all
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