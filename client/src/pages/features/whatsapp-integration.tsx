import { useEffect } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  CheckCircle2,
  ChevronRight,
  MessageSquare,
  Users,
  BarChart3,
  Clock,
  Smartphone,
  Globe,
  Settings,
  Shield,
  Bell,
  Zap,
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
  hero: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-Whatsapp-api-broadcast.png",
  dashboard: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-WhatsApp-API-feedback.png",
  mobile: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-WhatsApp-API-automation.png",
  integration: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-WhatsApp-API-ads-conversion.png",
};

// How it works steps
const howItWorksSteps = [
  {
    icon: Settings,
    title: "Connect Your WhatsApp Business Account",
    description: "Link your WhatsApp Business account to our platform with a few simple steps. Our guided setup process makes integration quick and hassle-free.",
  },
  {
    icon: MessageSquare,
    title: "Set Up Automated Responses",
    description: "Create templates for common inquiries and set up automated workflows. Design conversation flows that guide customers through ordering, reservations, and support.",
  },
  {
    icon: Users,
    title: "Engage with Customers",
    description: "Start sending and receiving messages through our intuitive dashboard. Manage all customer conversations in one place with team assignment capabilities.",
  },
  {
    icon: BarChart3,
    title: "Monitor and Optimize",
    description: "Track performance metrics and refine your messaging strategy for better results. Analyze response times, customer satisfaction, and conversion rates.",
  },
  {
    icon: Bell,
    title: "Automated Notifications",
    description: "Send automated order confirmations, delivery updates, and promotional messages. Keep customers informed at every step of their journey.",
  },
];

// Benefits of WhatsApp integration
const benefits = [
  "Increase customer engagement by up to 40%",
  "Reduce response time from hours to minutes",
  "Boost conversion rates with direct messaging",
  "Improve customer satisfaction with instant support",
  "Streamline operations with automated workflows",
  "Build stronger customer relationships through personalized communication",
];

// FAQs about WhatsApp integration
const faqItems = [
  {
    question: "What is the WhatsApp Business API?",
    answer: "The WhatsApp Business API is a tool that allows medium to large businesses to communicate with customers at scale on WhatsApp. It enables automated messaging, customer support, and transaction notifications through WhatsApp's secure platform.",
  },
  {
    question: "How is this different from the regular WhatsApp Business app?",
    answer: "While the WhatsApp Business app is designed for small businesses and has limited functionality, the WhatsApp Business API offers advanced features like bulk messaging, automation, and integration with other business systems. It's built for scale and efficiency.",
  },
  {
    question: "Do I need technical knowledge to use this integration?",
    answer: "No, our platform is designed to be user-friendly. While some technical setup is involved, our step-by-step guides and support team make the process straightforward, even for non-technical users.",
  },
  {
    question: "Is WhatsApp messaging GDPR compliant?",
    answer: "Yes, our WhatsApp Business API integration is fully GDPR compliant. We ensure that all data handling and messaging practices adhere to the latest privacy regulations and WhatsApp's business policies.",
  },
  {
    question: "How much does it cost?",
    answer: "Pricing depends on your business volume and specific needs. We offer flexible plans starting from $49/month. Contact us for a customized quote based on your requirements.",
  },
  {
    question: "Can I integrate WhatsApp with my existing systems?",
    answer: "Absolutely! Our WhatsApp Business API integration works seamlessly with your existing CRM, POS, and other business systems. We provide APIs and webhooks for custom integrations.",
  },
];

export default function WhatsAppIntegration() {
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
    "name": "Eatoes WhatsApp Business API Integration",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "WhatsApp Business API integration for restaurants to enhance customer communication and streamline ordering",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "780"
    }
  };

  return (
    <>
      <Meta
        title="WhatsApp Business API Integration for Restaurants | Eatoes"
        description="Connect with your customers where they already are. Our WhatsApp Business API integration enables seamless communication, automated ordering, and enhanced customer engagement."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Helmet>
        <link rel="canonical" href="https://eatoes.com/en/features/whatsapp-integration" />
        <meta name="keywords" content="WhatsApp Business API, restaurant WhatsApp integration, food ordering WhatsApp, restaurant customer communication" />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />
        
        <main className="pt-20 md:pt-24">
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
                  <BreadcrumbPage>WhatsApp Integration</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Hero Section */}
          <section className="relative">
            <div className="absolute inset-0 z-0">
              <img
                src={images.hero}
                alt="WhatsApp Business API Integration"
                className="w-full h-full object-cover brightness-[0.4]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30 z-10"></div>
            </div>
            <div className="relative z-20 container mx-auto px-4 py-20 md:py-32">
              <div className="max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    WhatsApp Business API Integration
                  </h1>
                  <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    Connect with your customers where they already are. Our WhatsApp Business API integration enables seamless communication, automated ordering, and enhanced customer engagement.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button 
                      size="lg" 
                      className="bg-white hover:bg-white/90 text-black transition-colors px-8 py-3 font-medium"
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
                <h2 className="text-3xl font-bold mb-4">Transform Your Customer Communication</h2>
                <p className="text-lg text-muted-foreground">
                  Our WhatsApp Business API integration helps you connect with customers instantly and provide exceptional service.
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
                    alt="WhatsApp Business Dashboard"
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
                  Get up and running with our WhatsApp Business API integration in five simple steps.
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
                  <h2 className="text-3xl font-bold mb-4">Automated Customer Interactions</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Set up automated responses for common inquiries, saving time and ensuring prompt customer service. Our intelligent system can handle orders, reservations, and support requests.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Customizable response templates</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Intelligent chatbot capabilities</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Seamless handoff to human agents when needed</p>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Explore Automation Features
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
                    src={images.mobile}
                    alt="WhatsApp automated messaging interface"
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
                    src={images.integration}
                    alt="WhatsApp integration with restaurant systems"
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
                  <h2 className="text-3xl font-bold mb-4">Seamless System Integration</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Integrate WhatsApp with your existing restaurant systems including POS, CRM, and delivery platforms. Create a unified workflow that streamlines operations and enhances customer experience.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Connect with popular restaurant management systems</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Synchronize customer data across platforms</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Robust API for custom integrations</p>
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
                  Everything you need to know about our WhatsApp Business API integration.
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
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Customer Communication?</h2>
                <p className="text-lg mb-8">
                  Join over 200 businesses already using Eatoes WhatsApp Business API to engage customers and drive growth.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white hover:bg-white/90 text-black transition-colors px-8 py-3 font-medium"
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