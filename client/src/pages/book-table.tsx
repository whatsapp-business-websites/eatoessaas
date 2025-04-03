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
import { MealPeriodSelector, type MealPeriod } from "@/components/ui/meal-period-selector";
import { format } from 'date-fns';
import { CheckCircle, Phone, Share2 } from "lucide-react";
import html2canvas from 'html2canvas';

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

type Tab = 'details' | 'booking' | 'confirmation';

const BookTable: React.FC = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [guestCount, setGuestCount] = useState(2);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedMealPeriod, setSelectedMealPeriod] = useState<MealPeriod | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [activeTab, setActiveTab] = useState<Tab>('details');
  const [specialRequest, setSpecialRequest] = useState('');
  const [guestName, setGuestName] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [canResendOtp, setCanResendOtp] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const lastScrollY = useRef(0);
  const isMobile = useIsMobile();
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const bookingRef = useRef<HTMLDivElement>(null);

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

  // Reset selected time when date or meal period changes
  useEffect(() => {
    setSelectedTime(null);
  }, [selectedDate, selectedMealPeriod]);

  // Reset meal period when date changes
  useEffect(() => {
    setSelectedMealPeriod(null);
  }, [selectedDate]);

  // OTP resend timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOtpSent && !canResendOtp && resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    } else if (resendTimer === 0) {
      setCanResendOtp(true);
    }
    return () => clearInterval(timer);
  }, [isOtpSent, canResendOtp, resendTimer]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    // Scroll to meal period selector when date is selected
    setTimeout(() => {
      document.getElementById('meal-period')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleMealPeriodSelect = (period: MealPeriod) => {
    setSelectedMealPeriod(period);
    // Scroll to time slots when meal period is selected
    setTimeout(() => {
      document.getElementById('time-slots')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleProceed = () => {
    setActiveTab('booking');
  };

  const handleSendOtp = () => {
    // Here you would integrate with your WhatsApp API
    console.log('Sending OTP to:', phoneNumber);
    setIsOtpSent(true);
    setCanResendOtp(false);
    setResendTimer(30);
  };

  const handleVerifyOtp = () => {
    // Here you would verify the OTP with your backend
    if (otp.length === 6) {
      setIsOtpVerified(true);
      setOtpError('');
    } else {
      setOtpError('Please enter a valid 6-digit OTP');
    }
  };

  const handleResendOtp = () => {
    if (canResendOtp) {
      handleSendOtp();
    }
  };

  const handleBookNow = () => {
    // Handle booking confirmation
    console.log({
      guests: guestCount,
      date: selectedDate,
      mealPeriod: selectedMealPeriod,
      time: selectedTime,
      guestName,
      phoneNumber,
      specialRequest
    });
    setIsBookingConfirmed(true);
    setActiveTab('confirmation');
  };

  const handleShareBooking = async () => {
    if (bookingRef.current) {
      try {
        const canvas = await html2canvas(bookingRef.current);
        const image = canvas.toDataURL('image/png');
        const blob = await (await fetch(image)).blob();
        const file = new File([blob], 'booking-confirmation.png', { type: 'image/png' });
        
        if (navigator.share) {
          await navigator.share({
            title: 'Booking Confirmation',
            text: `Booking confirmation for ${guestName}`,
            files: [file]
          });
        } else {
          // Fallback for browsers that don't support Web Share API
          const link = document.createElement('a');
          link.href = image;
          link.download = 'booking-confirmation.png';
          link.click();
        }
      } catch (error) {
        console.error('Error sharing booking:', error);
      }
    }
  };

  const isDetailsComplete = selectedDate && selectedMealPeriod && selectedTime;
  const isBookingComplete = isOtpVerified && guestName.trim().length > 0;

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
          {/* Tabs */}
          <div className="flex border-b mb-6">
            <button
              onClick={() => {
                if (activeTab === 'booking' && isDetailsComplete) {
                  setActiveTab('details');
                }
              }}
              className={`px-4 py-2 text-base font-bold border-b-2 transition-colors ${
                activeTab === 'details'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Time
            </button>
            <button
              onClick={() => {
                if (activeTab === 'details' && isDetailsComplete) {
                  setActiveTab('booking');
                }
              }}
              className={`px-4 py-2 text-base font-bold border-b-2 transition-colors ${
                activeTab === 'booking'
                  ? 'border-black text-black'
                  : isDetailsComplete 
                    ? 'border-transparent text-gray-500 hover:text-gray-700'
                    : 'border-transparent text-gray-300 cursor-not-allowed'
              }`}
            >
              Book
            </button>
            <button
              onClick={() => {
                if (isBookingConfirmed) {
                  setActiveTab('confirmation');
                }
              }}
              className={`px-4 py-2 text-base font-bold border-b-2 transition-colors ${
                activeTab === 'confirmation'
                  ? 'border-black text-black'
                  : isBookingConfirmed
                    ? 'border-transparent text-gray-500 hover:text-gray-700'
                    : 'border-transparent text-gray-300 cursor-not-allowed'
              }`}
            >
              Confirm
            </button>
          </div>

          <div className="space-y-8">
            {activeTab === 'details' ? (
              <>
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
                    selectedDate={selectedDate}
                    onDateSelect={handleDateSelect}
                  />
                </div>

                {/* Meal Period Selector */}
                {selectedDate && (
                  <div id="meal-period" className="animate-in fade-in duration-500">
                    <MealPeriodSelector
                      selectedPeriod={selectedMealPeriod}
                      onPeriodSelect={handleMealPeriodSelect}
                    />
                  </div>
                )}

                {/* Time Slot Grid */}
                <div id="time-slots">
                  <TimeSlotGrid 
                    slots={mockTimeSlots}
                    selectedTime={selectedTime}
                    onTimeSelect={setSelectedTime}
                    isVisible={!!selectedDate && !!selectedMealPeriod}
                    mealPeriod={selectedMealPeriod}
                  />
                </div>
              </>
            ) : activeTab === 'booking' ? (
              <div className="space-y-4">
                {/* Special Request */}
                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-2">
                    Any Special Request?
                  </label>
                  <textarea
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    placeholder="Birthday, Anniversary, or any other special occasion..."
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent min-h-[100px] resize-none"
                  />
                </div>

                {/* Guest Name */}
                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-2">
                    Guest Name
                  </label>
                  <input
                    type="text"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-base font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, '');
                      if (value.length <= 10) {
                        setPhoneNumber(value);
                      }
                    }}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    maxLength={10}
                  />
                  {phoneNumber.length > 0 && phoneNumber.length < 10 && (
                    <p className="mt-1 text-sm text-red-500">
                      Please enter a valid 10-digit mobile number
                    </p>
                  )}
                </div>

                {/* OTP Verification */}
                {phoneNumber.length === 10 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="block text-base font-semibold text-gray-900">
                        Verify OTP
                      </label>
                      {!isOtpSent && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={handleSendOtp}
                          className="text-sm"
                        >
                          Send OTP
                        </Button>
                      )}
                    </div>
                    {isOtpSent && (
                      <>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={otp}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, '');
                              if (value.length <= 6) {
                                setOtp(value);
                              }
                            }}
                            placeholder="Enter 6-digit OTP"
                            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                            maxLength={6}
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleVerifyOtp}
                            disabled={otp.length !== 6}
                          >
                            Verify
                          </Button>
                        </div>
                        {otpError && (
                          <p className="text-sm text-red-500">{otpError}</p>
                        )}
                        {!isOtpVerified && (
                          <div className="flex items-center justify-end gap-2">
                            <span className="text-sm text-gray-500">
                              {canResendOtp ? (
                                <button
                                  onClick={handleResendOtp}
                                  className="text-black hover:underline"
                                >
                                  Resend OTP
                                </button>
                              ) : (
                                `Resend OTP in ${resendTimer}s`
                              )}
                            </span>
                          </div>
                        )}
                        {isOtpVerified && (
                          <p className="text-sm text-green-600">
                            ✓ Phone number verified
                          </p>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-6">
                {/* Success Message */}
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Booking Confirmed!
                  </h3>
                  <p className="text-gray-600">
                    Your table has been reserved successfully
                  </p>
                </div>

                {/* Booking Details Card */}
                <div 
                  ref={bookingRef}
                  className="bg-white border border-gray-200 rounded-lg p-6 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Booking Details
                    </h4>
                    <div className="text-sm text-gray-500">
                      {format(new Date(), 'MMM d, yyyy')}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Guest Name</span>
                      <span className="font-medium">{guestName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Number of Guests</span>
                      <span className="font-medium">{guestCount} {guestCount === 1 ? 'Guest' : 'Guests'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date</span>
                      <span className="font-medium">{selectedDate && format(selectedDate, 'MMM d, yyyy')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time</span>
                      <span className="font-medium">{selectedTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Meal Period</span>
                      <span className="font-medium capitalize">{selectedMealPeriod}</span>
                    </div>
                    {specialRequest && (
                      <div className="flex justify-between">
                        <span className="text-gray-600">Special Request</span>
                        <span className="font-medium">{specialRequest}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Phone className="w-4 h-4" />
                      <span>{phoneNumber}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    onClick={handleShareBooking}
                    className="w-full bg-black hover:bg-black/90 text-white"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Booking Details
                  </Button>
                  <Button
                    onClick={() => {
                      // Reset all states
                      setSelectedDate(null);
                      setSelectedMealPeriod(null);
                      setSelectedTime(null);
                      setGuestName('');
                      setPhoneNumber('');
                      setSpecialRequest('');
                      setOtp('');
                      setIsOtpSent(false);
                      setIsOtpVerified(false);
                      setOtpError('');
                      setIsBookingConfirmed(false);
                      // Switch to details tab
                      setActiveTab('details');
                    }}
                    variant="outline"
                    className="w-full border-gray-200 text-gray-600 hover:bg-gray-50"
                  >
                    Book Another Table
                  </Button>
                </div>
              </div>
            )}

            {/* Bottom Button - Only show in details and booking tabs */}
            {activeTab !== 'confirmation' && (
              <div className={`
                fixed sm:static bottom-0 left-0 right-0 p-4 bg-white border-t sm:border-0 sm:bg-transparent
                ${(activeTab === 'details' ? isDetailsComplete : isBookingComplete) ? 'animate-in fade-in duration-500' : ''}
              `}>
                <Button 
                  className={`
                    w-full transition-all
                    ${(activeTab === 'details' ? isDetailsComplete : isBookingComplete)
                      ? 'bg-black hover:bg-black/90 text-white'
                      : 'bg-gray-200 text-gray-600 cursor-not-allowed hover:bg-gray-200'
                    }
                  `}
                  disabled={activeTab === 'details' ? !isDetailsComplete : !isBookingComplete}
                  onClick={activeTab === 'details' ? handleProceed : handleBookNow}
                >
                  {activeTab === 'details'
                    ? isDetailsComplete ? 'Proceed' : 'Select Date, Time & Meal Period'
                    : isBookingComplete ? 'Book Now' : 'Verify Phone Number'
                  }
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