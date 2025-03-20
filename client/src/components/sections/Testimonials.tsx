import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { VerifiedIcon, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Das",
    role: "GM of Grease Monkey",
    content: "Eatoes has completely changed how we handle table reservations. Customers can book directly from Google, and it syncs perfectly with our restaurant's system. No more missed calls or manual bookings—just smooth operations! Our staff loves it, and so do our guests.",
    rating: 5,
    verified: true
  },
  {
    name: "Venkat KC",
    role: "Owner of AleHouse, C53, Boilerroom",
    content: "From reservations to WhatsApp menu, Eatoes integrates everything seamlessly. Their fast social websites make it so easy for customers to find us and book instantly. It's like having a digital concierge for our restaurant!",
    rating: 5,
    verified: true
  },
  {
    name: "Sanya Kapoor",
    role: "Owner of Luxe Club",
    content: "From reservations to WhatsApp menu, Eatoes integrates everything seamlessly. Their fast social websites make it so easy for customers to find us and book instantly. It's like having a digital concierge for our restaurant!",
    rating: 5,
    verified: true
  },
  {
    name: "Sannith Reddy",
    role: "Owner of OneGolf",
    content: "Eatoes' digital menu isn't just a menu—it's a sales booster. AI-driven upselling is brilliant! We've seen a noticeable increase in add-on orders, and customers love the intuitive experience. Plus, no more reprinting menus!",
    rating: 5,
    verified: true
  },
  {
    name: "Nihal Reddy Gurrala",
    role: "Owner of Akan",
    content: "One of the reasons we chose Eatoes was their strict data privacy policies. Unlike other platforms, they don't misuse customer data, and our guests appreciate that transparency. It builds trust, which is invaluable in hospitality.",
    rating: 5,
    verified: true
  }
];

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6">
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
                    <Avatar className="h-12 w-12 bg-primary/10">
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
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5 mt-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="mt-3 text-base leading-relaxed">{testimonial.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 px-4 sm:px-6 text-center">
          {!showAll && testimonials.length > 3 && (
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(true)}
              className="w-full max-w-xs"
            >
              Show More Testimonials
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}