import { 
  CalendarRange, 
  MessageSquare,
  Utensils,
  Users,
  LineChart,
  Share2,
  Car,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

const features = [
  {
    icon: MessageSquare,
    title: "Automate, Engage, and Convert with WhatsApp API",
    description: "Streamline customer interactions by saving data instantly—no OTP needed. Manage queries seamlessly across Facebook, Instagram, and Google, all from one platform. Boost engagement with your verified business identity, turning ads into real-time conversations via Click-to-WhatsApp. Gain powerful insights to optimize engagement and customize the API to fit your unique needs.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80",
    cta: "Learn more",
    link: "/en/features/whatsapp-integration",
  },
  {
    icon: CalendarRange,
    title: "Google Table Reservation",
    description: "Streamline reservations by connecting your restaurant to Google, Instagram, Facebook, and more in just 15 minutes. Enjoy instant Google profile integration, omnichannel booking management, and a smart dashboard to handle all reservations in one place. With fast setup, reliable performance, and tools to reduce no-shows, Eatoes helps you boost bookings and customer satisfaction effortlessly.",
    image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&q=80",
    cta: "Explore features",
    link: "/en/features/table-reservations",
  },
  {
    icon: Utensils,
    title: "Digital Menu",
    description: "Transform your menu into an interactive, visually stunning experience that boosts engagement and sales. Showcase dishes with vibrant images, smart filters for Veg/Non-Veg, spice levels, and dietary preferences, and enjoy seamless auto-updates across platforms. Drive future bookings by promoting events directly on the menu. Loved by restaurants worldwide, Eatoes Digital Menu enhances customer experiences while streamlining operations.",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80",
    cta: "See how it works",
    link: "/en/features/digital-menu",
  },
  {
    icon: Share2,
    title: "Social Profiles with Fast Social",
    description: "Build a stunning, shareable social profile for your restaurant in minutes. Showcase your ambience, menu, reservations, events, and more—all in one place. Easily update details anytime and share your profile with a single click on WhatsApp, Instagram, and other platforms. Grow your community by engaging food lovers with updates, announcements, and exclusive posts.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
    cta: "Learn more",
    link: "/en/features/social-profiles",
  },
  {
    icon: Car,
    title: "Smart Valet Service",
    description: "Simplify valet services with our hassle-free system designed for restaurants, clubs, and businesses. Guests request their car via a simple interface, triggering instant WhatsApp notifications to the valet team and management. Real-time updates ensure seamless communication, while delayed actions are flagged for increased accountability. No app downloads required—just efficient, reliable service tailored for any business.",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80",
    cta: "Explore service",
    link: "/en/features/valet-service",
  },
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
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Transform Your Restaurant Operations</h2>
            <p className="text-muted-foreground">
              Comprehensive tools designed specifically for modern restaurants and cafes
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
              <div className="flex-1 relative rounded-2xl overflow-hidden aspect-[4/3] w-full lg:aspect-[3/2]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-4 sm:space-y-6">
                <feature.icon className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
                <h3 className="text-xl sm:text-2xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {feature.description}
                </p>
                <Link href={currentLang === 'fr' ? feature.link.replace('/en/', '/fr/') : feature.link}>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    {feature.cta}
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}