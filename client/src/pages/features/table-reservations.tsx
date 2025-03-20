import { useEffect } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  CalendarRange,
  CheckCircle2,
  ChevronRight,
  Clock,
  MessageSquare,
  Phone,
  Users,
  Smartphone,
  Mail,
  ArrowRight,
  PanelLeft,
  BarChart3,
  Calendar,
  CalendarCheck,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import useScrollToTop from "@/hooks/useScrollToTop";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import Meta from "@/components/layout/Meta";

// Images for the page
const images = {
  hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
  dashboard: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
  mobile: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
  tablet: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
  customerView: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80",
};

// How it works steps
const howItWorksSteps = [
  {
    icon: PanelLeft,
    title: "Setup Your Restaurant Profile",
    description:
      "Create your restaurant profile with seating capacity, table layouts, and operating hours. Customize reservation settings based on your restaurant's needs.",
  },
  {
    icon: Calendar,
    title: "Integrate with Your Website",
    description:
      "Add our reservation widget to your website or use our dedicated booking page. Customers can easily view availability and book tables in real-time.",
  },
  {
    icon: Smartphone,
    title: "Manage Reservations on Any Device",
    description:
      "Access your reservation dashboard from any device. Receive instant notifications for new bookings, modifications, or cancellations.",
  },
  {
    icon: CalendarCheck,
    title: "Automated Customer Communication",
    description:
      "Send automated confirmation emails and SMS reminders to reduce no-shows. Allow customers to modify or cancel reservations without calling.",
  },
  {
    icon: BarChart3,
    title: "Analyze Booking Patterns",
    description:
      "Gain insights into your busiest times, average party sizes, and customer preferences. Use data to optimize staffing and table arrangements.",
  },
];

// Benefits of the table reservation system
const benefits = [
  "Reduce no-shows by up to 45% with automated reminders",
  "Optimize table turnover with smart seating algorithms",
  "Collect customer data for personalized marketing",
  "Integrate with your POS system for seamless operations",
  "Manage special events and large party bookings",
  "Support for multiple languages and time zones",
];

// FAQs about the table reservation system
const faqs = [
  {
    question: "How does the table reservation system reduce no-shows?",
    answer:
      "Our system sends automated SMS and email reminders 24 hours and 2 hours before the reservation. Customers can easily confirm, modify, or cancel their booking with one click. This proactive approach has been shown to reduce no-shows by up to 45% for our restaurant partners.",
  },
  {
    question: "Can I customize the booking widget to match my restaurant's branding?",
    answer:
      "Absolutely! The booking widget is fully customizable with your restaurant's colors, fonts, and logo. You can also add custom fields to collect specific information from guests, such as dietary preferences or special occasion details.",
  },
  {
    question: "Is the reservation system integrated with other Eatoes features?",
    answer:
      "Yes, our table reservation system seamlessly integrates with other Eatoes features like digital menus and WhatsApp ordering. This allows you to provide a cohesive experience for your customers and streamline your operations.",
  },
  {
    question: "How does the waitlist feature work?",
    answer:
      "When your restaurant is fully booked, customers can join a digital waitlist. They'll receive real-time updates about their position and estimated wait time. When a table becomes available, they'll be automatically notified via SMS or email.",
  },
  {
    question: "Can I set different reservation policies for different times or days?",
    answer:
      "Yes, you can create custom reservation policies based on day of the week, time of day, or special events. For example, you might require a deposit for Friday night reservations or extend the dining duration for Sunday brunch.",
  },
  {
    question: "Is there a limit to how many reservations I can accept?",
    answer:
      "There's no limit to the number of reservations you can accept through our system. You control your availability based on your restaurant's capacity and staffing. Our smart algorithms help prevent overbooking while maximizing your seating capacity.",
  },
];

export default function TableReservations() {
  const { t, i18n } = useTranslation();
  
  // Use the scroll to top hook
  useScrollToTop();

  // Set the language based on the URL path
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith("/fr")) {
      i18n.changeLanguage("fr");
    } else {
      i18n.changeLanguage("en");
    }
  }, [i18n]);

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Eatoes Table Reservation System",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Smart table reservation system for restaurants to reduce no-shows and optimize seating capacity",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "850"
    }
  };

  return (
    <>
      <Meta
        title="Smart Table Reservation System for Restaurants | Eatoes"
        description="Streamline your restaurant's reservation process, reduce no-shows, and optimize table turnover with Eatoes' intelligent booking system."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Helmet>
        <link rel="canonical" href="https://eatoes.com/en/features/table-reservations" />
        <meta name="keywords" content="restaurant reservation system, table booking software, restaurant management, reduce no-shows, restaurant technology" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-16">
          {/* Breadcrumb */}
          <div className="container mx-auto px-4 py-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/#features">Features</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Table Reservations</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Hero Section */}
          <section className="relative">
            <div className="absolute inset-0 z-0">
              <img
                src={images.hero}
                alt="Restaurant interior with elegant table settings"
                className="w-full h-full object-cover brightness-[0.4]"
              />
            </div>
            <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Smart Table Reservation System
                  </h1>
                  <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    Streamline reservations, reduce no-shows, and optimize your restaurant's seating capacity with our intelligent booking system.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      size="lg" 
                      className="bg-black hover:bg-gray-800 text-white transition-colors px-8 py-3"
                      onClick={() => window.open('https://wa.me/919634339954/?text=Hey!%20I%20want%20to%20know%20more%20about%20eatoes%20services.', '_blank')}
                    >
                      Chat Now
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="bg-white text-black border-white hover:bg-white/90 transition-colors"
                    >
                      Schedule Demo
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Key Benefits Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Optimize Your Restaurant's Capacity</h2>
                <p className="text-lg text-muted-foreground">
                  Our table reservation system helps you maximize revenue while providing an exceptional experience for your guests.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-base">{benefit}</p>
                    </div>
                  ))}
                  <div className="pt-4">
                    <Button className="bg-black text-white hover:bg-gray-800">
                      Learn More About Benefits
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden shadow-xl"
                >
                  <img
                    src={images.dashboard}
                    alt="Restaurant reservation dashboard"
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">How It Works</h2>
                <p className="text-lg text-muted-foreground">
                  Our intuitive system makes managing reservations effortless for both you and your customers.
                </p>
              </div>

              <div className="space-y-12 max-w-4xl mx-auto">
                {howItWorksSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row gap-6 items-start"
                  >
                    <div className="bg-primary/10 p-4 rounded-full">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Feature Showcase Section */}
          <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-4">Seamless Customer Experience</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Provide your customers with a frictionless booking experience that works on any device. Our mobile-optimized interface makes it easy for guests to book a table in seconds.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Real-time availability updates</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Customizable booking forms</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Instant confirmation via email and SMS</p>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    See Customer Interface
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden shadow-xl"
                >
                  <img
                    src={images.customerView}
                    alt="Customer reservation interface on mobile"
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Multi-device Management Section */}
          <section className="py-16 bg-muted/20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="order-2 md:order-1 rounded-xl overflow-hidden shadow-xl"
                >
                  <img
                    src={images.tablet}
                    alt="Restaurant staff using tablet for reservations"
                    className="w-full h-auto"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="order-1 md:order-2"
                >
                  <h2 className="text-3xl font-bold mb-4">Manage From Anywhere</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Access your reservation dashboard from any device - desktop, tablet, or smartphone. Perfect for busy restaurant managers who need to stay on top of bookings while on the move.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Cloud-based system accessible from any device</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Real-time updates across all devices</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Push notifications for new bookings</p>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Explore Management Features
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
                <p className="text-lg text-muted-foreground">
                  Join hundreds of restaurants already using our table reservation system.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="bg-muted/10">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="mb-4 italic">
                      "Since implementing Eatoes' reservation system, our no-show rate has dropped by 40%. The automated reminders have been a game-changer for our business."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
                        JD
                      </div>
                      <div>
                        <p className="font-semibold">John Doe</p>
                        <p className="text-sm text-muted-foreground">Owner, Fusion Restaurant</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted/10">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="mb-4 italic">
                      "The analytics feature has helped us identify our peak hours and optimize our staffing accordingly. We've seen a 15% increase in revenue since using Eatoes."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
                        AS
                      </div>
                      <div>
                        <p className="font-semibold">Alice Smith</p>
                        <p className="text-sm text-muted-foreground">Manager, Bistro Central</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-muted/10">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="mb-4 italic">
                      "Our customers love the ease of booking through our website. The integration with our digital menu system creates a seamless experience from reservation to ordering."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
                        RJ
                      </div>
                      <div>
                        <p className="font-semibold">Robert Johnson</p>
                        <p className="text-sm text-muted-foreground">Owner, Seaside Grill</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-muted/10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-muted-foreground">
                  Everything you need to know about our table reservation system.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Restaurant's Reservations?</h2>
                <p className="text-lg mb-8">
                  Join over 115 restaurants already using Eatoes to streamline their operations and enhance customer experience.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg" 
                    className="bg-black hover:bg-gray-800 text-white transition-colors px-8 py-3"
                    onClick={() => window.open('https://wa.me/919634339954/?text=Hey!%20I%20want%20to%20know%20more%20about%20eatoes%20services.', '_blank')}
                  >
                    Chat Now
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-gray-300 hover:bg-gray-100 transition-colors"
                  >
                    Schedule a Demo
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
} 