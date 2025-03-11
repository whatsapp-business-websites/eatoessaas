import { 
  CalendarRange, 
  MessageSquare,
  Utensils,
  Users,
  LineChart,
  Share2,
  Car,
  ChevronLeft,
  ChevronRight,
  Home,
  Heart,
  ShoppingCart,
  User,
  Search,
  Wifi,
  Battery,
  Clock
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const mobileImages = [
  "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738845293200_whatsapp%20auto%20reply.jpeg",
  "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738845294358_Whatsapp%20blank%20page.jpeg",
  "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738845295401_whatsapp%20menu%20.jpeg",
  "https://connectapp.fra1.digitaloceanspaces.com/uploads/1738845296358_whatsapp%20menu%20list.jpeg"
];

const features = [
  {
    icon: MessageSquare,
    title: "WhatsApp API",
    description: "Streamline customer interactions by saving data instantly—no OTP needed. Manage queries seamlessly across Facebook, Instagram, and Google, all from one platform using smart chat bot.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80",
    cta: "Learn more",
    link: "/en/features/whatsapp-integration",
  },
  {
    icon: CalendarRange,
    title: "Google Table Reservation",
    description: "Connect your restaurant to Google, Instagram, and Facebook in just 15 minutes. Manage all bookings from one dashboard and reduce no-shows with smart tools.",
    image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&q=80",
    cta: "Explore features",
    link: "/en/features/table-reservations",
  },
  {
    icon: Utensils,
    title: "Digital Menu",
    description: "Create interactive, visual menus with smart filters for dietary preferences. Auto-update across platforms and promote events directly on the menu.",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80",
    cta: "See how it works",
    link: "/en/features/digital-menu",
  },
  {
    icon: Share2,
    title: "Social Profiles with Fast Social",
    description: "Build a shareable profile for your restaurant in minutes. Showcase menu, reservations, and events in one place. Share instantly on WhatsApp and Instagram.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    cta: "Learn more",
    link: "/en/features/social-profiles",
  },
  {
    icon: Car,
    title: "Smart Valet Service",
    description: "Simplify valet services with instant WhatsApp notifications. Guests request cars via a simple interface with real-time updates. No app downloads required.",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80",
    cta: "Explore service",
    link: "/en/features/valet-service",
  },
];

// Modern Mobile Phone Prototype Component
const MobilePhonePrototype = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Get current time for status bar
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  };
  
  const [time, setTime] = useState(getCurrentTime());
  
  useEffect(() => {
    // Update time every minute
    const timeInterval = setInterval(() => {
      setTime(getCurrentTime());
    }, 60000);
    
    // Autoplay for image carousel
    let imageInterval: NodeJS.Timeout;
    if (autoplay) {
      imageInterval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
    
    return () => {
      clearInterval(timeInterval);
      clearInterval(imageInterval);
    };
  }, [autoplay, images.length]);

  const goToNext = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      {/* Phone Container */}
      <div className="bg-black rounded-[40px] p-[15px] shadow-xl relative overflow-hidden w-full h-[680px]">
        {/* Screen */}
        <div className="w-full h-full bg-white rounded-[30px] overflow-hidden relative">
          {/* Status Bar */}
          <div className="h-[40px] bg-primary flex justify-between items-center px-[15px] text-white">
            <div className="font-bold">{time}</div>
            <div className="flex space-x-2">
              <Wifi size={16} />
              <Battery size={16} />
            </div>
          </div>
          
          {/* App Content */}
          <div className="h-[calc(100%-100px)] overflow-hidden relative">
            {/* Images Carousel */}
            <div className="w-full h-full">
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`WhatsApp screenshot ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/50 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/30 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/50 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={20} />
            </button>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAutoplay(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary scale-125' : 'bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation Bar */}
          <div className="h-[60px] flex justify-around items-center border-t border-gray-200">
            <div className="flex flex-col items-center text-xs text-primary">
              <Home size={20} className="mb-1" />
              <div>Home</div>
            </div>
            <div className="flex flex-col items-center text-xs text-gray-500">
              <Heart size={20} className="mb-1" />
              <div>Favorites</div>
            </div>
            <div className="flex flex-col items-center text-xs text-gray-500">
              <ShoppingCart size={20} className="mb-1" />
              <div>Cart</div>
            </div>
            <div className="flex flex-col items-center text-xs text-gray-500">
              <User size={20} className="mb-1" />
              <div>Profile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Features() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  return (
    <section id="features" className="py-12 sm:py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-8 text-center mb-10 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground">
              Comprehensive tools designed specifically for modern restaurants, clubs and cafe
            </p>
          </motion.div>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-24 px-6 sm:px-8 lg:px-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 sm:gap-12 items-center`}
            >
              <div className="flex-1 relative rounded-2xl overflow-hidden aspect-[4/3] w-full lg:aspect-[3/2] flex justify-center items-center">
                {index === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="w-full"
                  >
                    <MobilePhonePrototype images={mobileImages} />
                  </motion.div>
                ) : (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="flex-1 space-y-4 sm:space-y-6">
                <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
                <h3 className="text-xl sm:text-2xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {feature.description}
                </p>
                <div className="pt-4 sm:pt-6 flex flex-wrap gap-3">
                  <Link href={currentLang === 'fr' ? feature.link.replace('/en/', '/fr/') : feature.link}>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      {feature.cta}
                    </Button>
                  </Link>
                  
                  {/* Additional CTAs for WhatsApp API feature */}
                  {index === 0 && (
                    <>
                      <Link href="#contact">
                        <Button variant="default" size="lg" className="w-full sm:w-auto">
                          Contact now
                        </Button>
                      </Link>
                      <Link href="#demo">
                        <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                          See live demo
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}