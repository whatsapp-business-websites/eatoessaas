import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface GuestSelectorProps {
  onSelect: (guests: number) => void;
  minGuests?: number;
  maxGuests?: number;
}

const GuestSelector: React.FC<GuestSelectorProps> = ({
  onSelect,
  minGuests = 1,
  maxGuests = 8
}) => {
  const [selectedGuests, setSelectedGuests] = useState(2);

  const handlePrevious = () => {
    if (selectedGuests > minGuests) {
      setSelectedGuests(prev => {
        const newValue = prev - 1;
        onSelect(newValue);
        return newValue;
      });
    }
  };

  const handleNext = () => {
    if (selectedGuests < maxGuests) {
      setSelectedGuests(prev => {
        const newValue = prev + 1;
        onSelect(newValue);
        return newValue;
      });
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h3 className="text-lg font-semibold">Number of Guests</h3>
      <div className="flex items-center space-x-6">
        <button
          onClick={handlePrevious}
          disabled={selectedGuests <= minGuests}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <div className="w-16 text-center">
          <span className="text-2xl font-bold">{selectedGuests}</span>
        </div>
        <button
          onClick={handleNext}
          disabled={selectedGuests >= maxGuests}
          className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
      <p className="text-sm text-gray-500">
        {selectedGuests === maxGuests ? 
          "For larger groups, please contact us directly" : 
          "Select number of guests"}
      </p>
    </div>
  );
};

export default GuestSelector; 