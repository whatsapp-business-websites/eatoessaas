import { useEffect } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  CheckCircle2,
  ChevronRight,
  Car,
  Clock,
  Shield,
  Smartphone,
  MapPin,
  CreditCard,
  Users,
  Star,
  Award,
  ArrowRight,
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
  hero: "https://images.unsplash.com/photo-1581362716668-e747e7e1c09e?auto=format&fit=crop&q=80",
  app: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80",
  parking: "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&q=80",
  restaurant: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80",
};

// Features list
const features = [
  {
    icon: Car,
    title: "Seamless Valet Experience",
    description: "Offer your guests a premium valet service that enhances their dining experience from the moment they arrive. Our system streamlines the entire process from drop-off to pick-up.",
  },
  {
    icon: Clock,
    title: "Reduced Wait Times",
    description: "Minimize guest wait times with our efficient valet management system. Guests can request their vehicle through the app before they're ready to leave, ensuring their car is waiting for them.",
  },
  {
    icon: Shield,
    title: "Enhanced Security",
    description: "Our digital ticketing system provides enhanced security with unique QR codes for each vehicle, reducing the risk of lost tickets and unauthorized vehicle retrievals.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Integration",
    description: "Allow guests to manage their valet experience directly from their smartphone. They can request their vehicle, pay for valet services, and receive real-time updates on vehicle status.",
  },
  {
    icon: MapPin,
    title: "GPS Vehicle Tracking",
    description: "Valet staff can quickly locate vehicles in large parking areas using our GPS tracking feature, reducing retrieval times and improving operational efficiency.",
  },
  {
    icon: CreditCard,
    title: "Integrated Payment Processing",
    description: "Offer seamless payment options for valet services directly through the app or at designated payment stations, eliminating the need for cash transactions.",
  },
];

// How it works steps
const howItWorksSteps = [
  {
    icon: Car,
    title: "Guest Arrival",
    description:
      "When guests arrive, the valet attendant uses the app to scan the vehicle and generate a digital ticket with a unique QR code that is sent to the guest's phone.",
  },
  {
    icon: MapPin,
    title: "Vehicle Parking",
    description:
      "The valet parks the vehicle and marks its location in the system, making it easy to locate when the guest is ready to leave.",
  },
  {
    icon: Smartphone,
    title: "Vehicle Request",
    description:
      "Guests can request their vehicle through the app or at the valet stand. The system notifies the valet team to retrieve the vehicle.",
  },
  {
    icon: Clock,
    title: "Vehicle Retrieval",
    description:
      "The valet team retrieves the vehicle and brings it to the designated pick-up area. The guest receives a notification when their vehicle is ready.",
  },
  {
    icon: CreditCard,
    title: "Payment & Departure",
    description:
      "Guests can pay for the valet service through the app or at the valet stand. Once payment is confirmed, they can depart with their vehicle.",
  },
];

// Benefits of valet service
const benefits = [
  "Enhance guest experience with premium valet service",
  "Reduce operational costs with efficient staff management",
  "Increase security with digital ticketing system",
  "Improve guest satisfaction with reduced wait times",
  "Generate additional revenue stream for your restaurant",
  "Collect valuable data on guest arrival and departure patterns",
];

// FAQ items
const faqItems = [
  {
    question: "How does the digital valet system work?",
    answer: "Our digital valet system replaces traditional paper tickets with a mobile app. When guests arrive, the valet attendant uses the app to scan the vehicle and generate a digital ticket with a unique QR code. This ticket is sent to the guest's phone, where they can use it to request their vehicle when they're ready to leave.",
  },
  {
    question: "Can guests pay for valet service through the app?",
    answer: "Yes, guests can pay for valet service directly through the app using various payment methods including credit cards, mobile wallets, and even integration with their restaurant bill if desired.",
  },
  {
    question: "How does the system reduce wait times?",
    answer: "The system allows guests to request their vehicle before they're ready to leave, giving the valet team advance notice to retrieve the vehicle. This significantly reduces wait times, especially during peak hours.",
  },
  {
    question: "Is the system secure?",
    answer: "Yes, our system uses unique QR codes for each vehicle and requires verification before vehicle retrieval. This significantly reduces the risk of lost tickets and unauthorized vehicle retrievals.",
  },
  {
    question: "How difficult is it to implement the valet system?",
    answer: "Our team handles the entire implementation process, from system setup to staff training. The system is designed to be user-friendly and intuitive, requiring minimal training for both staff and guests.",
  },
  {
    question: "Can the valet system be customized for my restaurant?",
    answer: "Absolutely. We can customize the valet system to match your restaurant's branding and specific operational requirements. This includes custom ticketing, payment options, and integration with your existing systems.",
  },
];

export default function ValetService() {
  const { i18n, t } = useTranslation();
  
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
    "@type": "Service",
    "name": "Eatoes Valet Service Management",
    "serviceType": "Restaurant Valet Service",
    "description": "Premium digital valet service management system for restaurants to enhance guest experience and streamline operations",
    "provider": {
      "@type": "Organization",
      "name": "Eatoes"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Global"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Valet Service Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Valet Management"
          }
        }
      ]
    }
  };

  return (
    <>
      <Meta
        title="Digital Valet Service Management for Restaurants | Eatoes"
        description="Enhance your restaurant's guest experience with our premium digital valet service management system. Reduce wait times, improve security, and streamline operations."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Helmet>
        <link rel="canonical" href="https://eatoes.com/en/features/valet-service" />
        <meta name="keywords" content="restaurant valet service, digital valet management, valet app, restaurant parking management, premium dining experience" />
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
                  <BreadcrumbPage>Valet Service</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Hero Section */}
          <section className="relative">
            <div className="absolute inset-0 z-0">
              <img
                src={images.hero}
                alt="Luxury valet service for restaurant"
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
                    Digital Valet Service Management
                  </h1>
                  <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    Elevate your restaurant's guest experience with our premium digital valet service management system.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      size="lg" 
                      className="bg-black hover:bg-gray-800 text-white transition-colors px-8 py-3"
                      onClick={() => window.open('https://wa.me/919634339954/?text=Hey!%20I%20want%20to%20know%20more%20about%20eatoes%20services.', '_blank')}
                    >
                      Chat Now
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
                <h2 className="text-3xl font-bold mb-4">Transform Your Guest Experience</h2>
                <p className="text-lg text-muted-foreground">
                  Our digital valet service management system helps you provide a premium experience for your guests while streamlining operations.
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
                    src={images.parking}
                    alt="Valet parking service"
                    className="w-full h-full object-cover"
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
                  Our intuitive system makes managing valet services effortless for your restaurant.
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
                  <h2 className="text-3xl font-bold mb-4">Seamless Mobile Experience</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our mobile app integration allows guests to manage their valet experience directly from their smartphone, enhancing convenience and satisfaction.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Request vehicle retrieval with a single tap</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Receive real-time updates on vehicle status</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Pay for valet service directly through the app</p>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Explore Mobile Features
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
                    src={images.app}
                    alt="Valet service mobile app"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Restaurant Integration Section */}
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
                    src={images.restaurant}
                    alt="Restaurant integration with valet service"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="order-1 md:order-2"
                >
                  <h2 className="text-3xl font-bold mb-4">Seamless Restaurant Integration</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our valet service management system integrates seamlessly with your restaurant operations, allowing for a cohesive guest experience from arrival to departure.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Integrate valet charges with restaurant bill</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Notify staff when VIP guests arrive</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Coordinate vehicle retrieval with meal completion</p>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Explore Integration Options
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-muted/10">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-lg text-muted-foreground">
                  Everything you need to know about our digital valet service management system.
                </p>
              </div>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((faq, index) => (
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
                <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Guest Experience?</h2>
                <p className="text-lg mb-8">
                  Join over 150 restaurants already using Eatoes Digital Valet Service Management to enhance their guest experience and streamline operations.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg" 
                    className="bg-black hover:bg-gray-800 text-white transition-colors px-8 py-3"
                    onClick={() => window.open('https://wa.me/919634339954/?text=Hey!%20I%20want%20to%20know%20more%20about%20eatoes%20services.', '_blank')}
                  >
                    Chat Now
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
