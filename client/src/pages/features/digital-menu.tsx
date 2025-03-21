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
  Utensils,
  Filter,
  Image,
  Sparkles,
  RefreshCw,
  QrCode,
  Languages,
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
  hero: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80",
  events: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-digital-menu-events.png",
  personalization: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-digital-menu-personalisation.png",
  dishView: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-digital-menu-dish-view.png",
  filter: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-digital-menu-filter.png",
};

// How it works steps
const howItWorksSteps = [
  {
    icon: PanelLeft,
    title: "Create Your Digital Menu",
    description:
      "Upload your menu items, descriptions, prices, and high-quality images to our platform. Organize items by categories and add dietary information.",
  },
  {
    icon: Smartphone,
    title: "Customize Your Experience",
    description:
      "Personalize the look and feel of your digital menu to match your restaurant's branding. Add filters, special tags, and promotional content.",
  },
  {
    icon: QrCode,
    title: "Generate QR Codes",
    description:
      "Create QR codes that link to your digital menu. Place these on tables, at the entrance, or include them in marketing materials.",
  },
  {
    icon: CalendarCheck,
    title: "Promote Special Events",
    description:
      "Showcase upcoming events, special offers, and limited-time menu items directly within your digital menu to drive additional revenue.",
  },
  {
    icon: BarChart3,
    title: "Track and Analyze",
    description:
      "Gain insights into your customers' preferences and ordering patterns. Use data to optimize your menu offerings and pricing strategy.",
  },
];

// Benefits of the digital menu system
const benefits = [
  "Reduce printing costs and environmental impact",
  "Update menu items and prices in real-time",
  "Showcase high-quality images of your dishes",
  "Allow customers to filter by dietary preferences",
  "Promote special offers and events directly in the menu",
  "Support for multiple languages for international guests",
];

// FAQs about the digital menu system
const faqs = [
  {
    question: "How does the digital menu work?",
    answer:
      "Our digital menu system uses QR codes that customers can scan with their smartphones. This opens an interactive, visually rich menu directly on their device, allowing them to browse dishes, see images, filter options, and even place orders in some configurations.",
  },
  {
    question: "Can I update my menu in real-time?",
    answer:
      "Yes! One of the key benefits of our digital menu is the ability to make instant updates. Change prices, add specials, or mark items as unavailable—all changes sync immediately across all platforms where your menu is displayed.",
  },
  {
    question: "Do customers need to download an app?",
    answer:
      "No, our digital menu is web-based and opens directly in the customer's browser when they scan the QR code. There's no app to download, making it convenient and accessible for everyone.",
  },
  {
    question: "Can I customize the look and feel of my digital menu?",
    answer:
      "Absolutely. Our digital menu can be fully customized to match your restaurant's branding, including colors, fonts, layout, and more. We want your digital menu to be a seamless extension of your restaurant's identity.",
  },
  {
    question: "How do I promote events through the digital menu?",
    answer:
      "Our system allows you to add event promotions that appear while customers are browsing your menu. These can include upcoming special nights, holiday events, or any other promotions you want to highlight, with the ability for customers to book or learn more with just a click.",
  },
  {
    question: "Is the digital menu system integrated with other Eatoes features?",
    answer:
      "Yes, our digital menu seamlessly integrates with other Eatoes features like table reservations and WhatsApp ordering. This allows you to provide a cohesive experience for your customers and streamline your operations.",
  },
];

export default function DigitalMenu() {
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
    "name": "Eatoes Digital Menu System",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Interactive digital menu system for restaurants to enhance customer experience and boost sales",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "720"
    }
  };

  return (
    <>
      <Meta
        title="Interactive Digital Menu System for Restaurants | Eatoes"
        description="Transform your restaurant's menu into a beautiful, interactive, and intelligent experience with Eatoes Digital Menu. Showcase dishes with stunning visuals and smart filters."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Helmet>
        <link rel="canonical" href="https://eatoes.com/en/features/digital-menu" />
        <meta name="keywords" content="digital menu, restaurant qr code menu, interactive menu, restaurant technology, food ordering system" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-16">
          {/* Breadcrumb */}
          <div className="container mx-auto px-4 py-4">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href={i18n.language === 'fr' ? '/fr' : '/'}>
                    {t('common.home')}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink href={`${i18n.language === 'fr' ? '/fr' : ''}/#features`}>
                    {t('common.features')}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage>Digital Menu</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Hero Section */}
          <section className="relative">
            <div className="absolute inset-0 z-0">
              <img
                src={images.hero}
                alt="Restaurant with digital menu displayed on tablet"
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
                    Interactive Digital Menu System
                  </h1>
                  <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    Transform your restaurant's menu into a beautiful, interactive, and intelligent experience. Showcase dishes with stunning visuals and smart filters.
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
                <h2 className="text-3xl font-bold mb-4">Enhance Your Customer Experience</h2>
                <p className="text-lg text-muted-foreground">
                  Our digital menu system helps you showcase your dishes beautifully while providing customers with an intuitive browsing experience.
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
                    src={images.dishView}
                    alt="Digital menu dish view"
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
                  Our intuitive system makes creating and managing digital menus effortless for your restaurant.
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
                  <h2 className="text-3xl font-bold mb-4">Smart Filtering Options</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Allow your customers to easily find dishes that match their preferences and dietary requirements with our intelligent filtering system.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Filter by dietary preferences (vegan, vegetarian, gluten-free)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Sort by price, popularity, or category</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Search functionality for specific dishes or ingredients</p>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Explore Filtering Options
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
                    src={images.filter}
                    alt="Digital menu filtering options"
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
                    src={images.personalization}
                    alt="Digital menu personalization options"
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
                  <h2 className="text-3xl font-bold mb-4">Personalized Experience</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Customize your digital menu to match your restaurant's branding and create a unique experience for your customers. Our flexible system adapts to your specific needs.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Custom branding with your logo and colors</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Flexible layout options to showcase your dishes</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Multiple language support for international guests</p>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Explore Personalization Options
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Event Promotion Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-4">Promote Special Events</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Showcase upcoming events, special offers, and limited-time menu items directly within your digital menu to drive additional revenue and customer engagement.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Highlight special events and themed nights</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Promote seasonal or limited-time menu items</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Allow customers to book events directly from the menu</p>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Explore Event Features
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
                    src={images.events}
                    alt="Digital menu event promotion"
                    className="w-full h-auto"
                  />
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
                  Everything you need to know about our digital menu system.
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
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Menu Experience?</h2>
                <p className="text-lg mb-8">
                  Join over 150 restaurants already using Eatoes to enhance their customer experience and boost sales.
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
