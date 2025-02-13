import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { VerifiedIcon } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    handle: "@sarahchen",
    role: "Restaurant Owner",
    content: "Eatoes has transformed how we manage our restaurant. The digital menu and reservation system have significantly improved our efficiency. Our customers love the seamless experience! 🚀",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    verified: true
  },
  {
    name: "Michael Rodriguez",
    handle: "@mrodriguez",
    role: "Café Manager",
    content: "The social media integration and WhatsApp features have helped us stay connected with our customers and improve engagement. Our marketing has never been easier! 📱",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    verified: true
  },
  {
    name: "Emily Watson",
    handle: "@emilyw",
    role: "F&B Director",
    content: "A complete game-changer for our multi-location business. The analytics and management tools are invaluable. We've seen a 40% increase in customer satisfaction! 📈",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    verified: true
  },
  {
    name: "David Kim",
    handle: "@davidkim",
    role: "Restaurant Chain Owner",
    content: "Managing multiple locations has never been easier. The unified dashboard and real-time analytics help us make data-driven decisions. Highly recommend! 💯",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop",
    verified: true
  }
];

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 2);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-muted/20">
      <div className="container">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">
              Join hundreds of satisfied restaurant owners who have transformed their business with Eatoes
            </p>
          </motion.div>
        </div>

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {displayedTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:bg-muted/50 transition-colors duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <div>
                            <h4 className="font-semibold text-base flex items-center gap-1">
                              {testimonial.name}
                              {testimonial.verified && (
                                <VerifiedIcon className="h-4 w-4 text-blue-500" />
                              )}
                            </h4>
                            <p className="text-sm text-muted-foreground">{testimonial.handle}</p>
                          </div>
                        </div>
                        <p className="mt-3 text-base leading-relaxed">{testimonial.content}</p>
                        <p className="mt-2 text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 px-4 sm:px-6 text-center md:hidden">
          {!showAll && testimonials.length > 2 && (
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="w-full max-w-xs"
            >
              Show More
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}