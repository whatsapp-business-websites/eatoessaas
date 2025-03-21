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

const features = [
  {
    icon: MessageSquare,
    title: "WhatsApp API",
    description: "Streamline customer interactions by saving data instantly—no OTP needed. Manage queries seamlessly across Facebook, Instagram, and Google, all from one platform using smart chat bot.",
    image: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-Whatsapp-api-broadcast.png",
    cta: "Learn more",
    link: "/en/features/whatsapp-integration",
  },
  {
    icon: CalendarRange,
    title: "Google Table Reservation",
    description: "Connect your restaurant to Google, Instagram, and Facebook in just 15 minutes. Manage all bookings from one dashboard and reduce no-shows with smart tools.",
    image: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-Table-Reservation-google-and-google-maps-integration.png",
    cta: "Learn more",
    link: "/en/features/table-reservations",
  },
  {
    icon: Utensils,
    title: "Digital Menu",
    description: "Create interactive, visual menus with smart filters for dietary preferences. Auto-update across platforms and promote events directly on the menu.",
    image: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-digital-menu-all-over-view.png",
    cta: "Learn more",
    link: "/en/features/digital-menu",
  },
  {
    icon: Share2,
    title: "Social Profiles with Fast Social",
    description: "Build a shareable profile for your restaurant in minutes. Showcase menu, reservations, and events in one place. Share instantly on WhatsApp and Instagram.",
    image: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-faststsocial-all-over-view.png",
    cta: "Learn more",
    link: "/en/features/social-profiles",
  },
  /*
  {
    icon: Car,
    title: "Smart Valet Service",
    description: "Simplify valet services with instant WhatsApp notifications. Guests request cars via a simple interface with real-time updates. No app downloads required.",
    image: featureImage,
    cta: "Explore service",
    link: "/en/features/valet-service",
  },
  */
];

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
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}