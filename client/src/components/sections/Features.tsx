import { 
  CalendarRange, 
  MessageSquare,
  Utensils,
  Users,
  LineChart,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Utensils,
    title: "Smart Digital Menu",
    description: "Dynamic QR code menus with real-time updates, seasonal specials, and multilingual support. Enhance your customer's dining experience with beautiful, interactive digital menus.",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80",
    cta: "Learn more",
  },
  {
    icon: CalendarRange,
    title: "Table Management",
    description: "Streamline reservations and optimize seating with our intelligent booking system. Reduce no-shows and maximize your restaurant's capacity with smart scheduling.",
    image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&q=80",
    cta: "Explore features",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Integration",
    description: "Connect with customers directly through WhatsApp for orders and updates. Build stronger relationships and provide instant support through their preferred channel.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80",
    cta: "See how it works",
  },
];

export default function Features() {
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
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  {feature.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}