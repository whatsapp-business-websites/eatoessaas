import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { VerifiedIcon, Star } from "lucide-react";

const testimonials = [
  {
    name: "Anjali Desai",
    handle: "@anjalidesai",
    role: "Co-Founder, Fusion Bites",
    content: "Eatoes has completely transformed the way we handle table reservations. Customers can now book in seconds, and we no longer have to deal with endless phone calls. The integration with Google and social media is a game-changer!",
    rating: 5,
    verified: true
  },
  {
    name: "Restaurant Owner",
    handle: "@valetservice",
    role: "Fine Dining Restaurant",
    content: "The valet automation system has made our parking experience effortless. Our guests love the convenience, and our staff no longer have to scramble to manage requests. It's a simple yet powerful solution that we can't imagine operating without.",
    rating: 5,
    verified: true
  },
  {
    name: "Restaurant Manager",
    handle: "@whatsappking",
    role: "Restaurant Manager",
    content: "Eatoes' WhatsApp API has helped us stay connected with customers like never before. From handling reservations to answering FAQs across multiple platforms, everything is automated yet feels personal. This has boosted our efficiency and customer satisfaction.",
    rating: 5,
    verified: true
  },
  {
    name: "Marketing Director",
    handle: "@marketingpro",
    role: "Marketing Director",
    content: "Our ads weren't converting the way we wanted—until we started using Click-to-WhatsApp. Now, instead of just viewing our ads, potential customers start conversations instantly. Our sales have increased dramatically!",
    rating: 5,
    verified: true
  },
  {
    name: "Business Owner",
    handle: "@datadriven",
    role: "Restaurant Owner",
    content: "The insights we get from Eatoes have been a game-changer. We now understand customer behavior better and can make informed decisions to grow our business.",
    rating: 5,
    verified: true
  },
  {
    name: "New Restaurant Owner",
    handle: "@easysetup",
    role: "Restaurant Owner",
    content: "Eatoes made it so easy for us to get started. No lengthy meetings, no complex setups—just a plug-and-play system that instantly enhanced our customer experience. The support team is fantastic too!",
    rating: 5,
    verified: true
  },
  {
    name: "Social Media Manager",
    handle: "@multiplatform",
    role: "Restaurant Chain Manager",
    content: "Managing customer queries across Facebook, Instagram, and Google used to be chaotic. With Eatoes, everything is centralized and automated, making customer communication smoother and more efficient than ever.",
    rating: 5,
    verified: true
  },
  {
    name: "Restaurant Partner",
    handle: "@growthpartner",
    role: "F&B Business Owner",
    content: "Eatoes doesn't just provide software; they genuinely care about helping businesses grow. Their solutions are practical, innovative, and incredibly easy to use. Highly recommended for any restaurant or F&B business!",
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