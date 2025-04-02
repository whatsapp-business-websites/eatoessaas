import React, { useState, useEffect, useRef } from 'react';
import { Header } from "@/components/ui/header";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { DateCarousel } from "@/components/ui/date-carousel";
import { TimeSlotGrid } from "@/components/ui/time-slot-grid";
import { format } from 'date-fns';

// Mock restaurant data for development
const mockRestaurantData = {
  name: "The Golden Plate",
  logo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100&h=100&fit=crop&crop=faces&auto=format&q=60"
};

// Mock time slots data
const mockTimeSlots = Array.from({ length: 36 }, (_, index) => {
  const hour = Math.floor(index / 4) + 14; // Start from 14:00 (2 PM)
  const minute = (index % 4) * 15; // 15-minute intervals
  const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  
  return {
    restaurant: "6732015f18d92b6c0748d26d",
    slotStartTime: time,
    slotDate: "2025-04-04",
    slotStatus: "available",
    partySize: "5"
  };
});

const BookTable: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [guestCount, setGuestCount] = useState(2);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const lastScrollY = useRef(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY === 0);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const headerContainer = document.querySelector('.header-container') as HTMLElement;
    if (headerContainer) {
      headerContainer.style.pointerEvents = showHeader ? 'auto' : 'none';
    }
  }, [showHeader]);

  // Reset selected time when date changes
  useEffect(() => {
    setSelectedTime(null);
  }, [selectedDate]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    // Scroll to time slots when date is selected
    setTimeout(() => {
      document.getElementById('time-slots')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Container */}
      <div className={`fixed inset-x-0 top-0 z-[140] header-container transition-transform duration-300 ${
        !showHeader ? 'transform -translate-y-full' : 'transform translate-y-0'
      }`}>
        <Header 
          restaurantName={mockRestaurantData.name}
          logo={mockRestaurantData.logo}
          onMenuClick={() => {}}
          isVisible={showHeader}
        />
      </div>

      {/* Main Content */}
      <div className={`pt-[56px] px-4 sm:px-6 lg:px-8 py-12`}>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="space-y-8">
            {/* Guest Selector */}
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">
                Number of Guests
              </label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {guestCount} {guestCount === 1 ? 'Guest' : 'Guests'}
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] bg-white">
                  {[2, 3, 4, 5, 6, 7, 8, 9, 10].map((count) => (
                    <DropdownMenuItem
                      key={count}
                      onClick={() => setGuestCount(count)}
                      className="cursor-pointer hover:bg-gray-100"
                    >
                      {count} {count === 1 ? 'Guest' : 'Guests'}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Date Selector */}
            <div>
              <DateCarousel 
                selectedDate={selectedDate || new Date()}
                onDateSelect={handleDateSelect}
              />
            </div>

            {/* Time Slot Grid */}
            <div id="time-slots">
              <TimeSlotGrid 
                slots={mockTimeSlots}
                selectedTime={selectedTime}
                onTimeSelect={setSelectedTime}
                isVisible={!!selectedDate}
              />
            </div>

            {/* Confirm Button */}
            {selectedDate && selectedTime && (
              <div className="animate-in fade-in duration-500">
                <Button 
                  className="w-full bg-black hover:bg-black/90 text-white"
                  onClick={() => {
                    // Handle booking confirmation
                    console.log({
                      guests: guestCount,
                      date: selectedDate,
                      time: selectedTime
                    });
                  }}
                >
                  Confirm Booking
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable; 