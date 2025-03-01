import { useEffect } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  CheckCircle2,
  ChevronRight,
  Car,
  Smartphone,
  Bell,
  Clock,
  Building,
  ShieldCheck,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import useScrollToTop from "@/hooks/useScrollToTop";
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
  hero: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80",
  valet: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80",
  whatsapp: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?auto=format&fit=crop&q=80",
  restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
};

// Features list
const features = [
  {
    icon: Smartphone,
    title: "No App Required",
    description: "Operates directly through WhatsApp, eliminating the need for customers to download any additional apps.",
  },
  {
    icon: Bell,
    title: "Real-Time Alerts",
    description: "Instant notifications for both valet teams and management, ensuring smooth and efficient service.",
  },
  {
    icon: Clock,
    title: "Increased Accountability",
    description: "Alerts managers when actions are delayed, maintaining high service standards and customer satisfaction.",
  },
  {
    icon: Building,
    title: "Perfect for All Businesses",
    description: "Ideal for restaurants, clubs, hotels, and more—adaptable to any business with valet parking needs.",
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Security",
    description: "Improved tracking and accountability for vehicle handling, reducing risks and increasing customer trust.",
  },
  {
    icon: Car,
    title: "Streamlined Operations",
    description: "Simplifies valet management, reducing wait times and improving the overall customer experience.",
  },
];

// Business types
const businessTypes = [
  {
    name: "Restaurants",
    icon: "🍽️",
  },
  {
    name: "Hotels",
    icon: "🏨",
  },
  {
    name: "Clubs",
    icon: "🎵",
  },
  {
    name: "Event Venues",
    icon: "🎭",
  },
  {
    name: "Shopping Centers",
    icon: "🛍️",
  },
  {
    name: "Corporate Buildings",
    icon: "🏢",
  },
];

// FAQ items
const faqItems = [
  {
    question: "How does the valet service work without an app?",
    answer: "Our valet service operates through WhatsApp, which most customers already have installed. When customers want their car, they can request it through a simple interface, which triggers a WhatsApp notification to the valet team. The team then sends a notification back when the car is ready.",
  },
  {
    question: "Is the system difficult to implement for my business?",
    answer: "Not at all. Our system is designed for easy implementation with minimal setup. We provide all the necessary training and support to get your team up and running quickly.",
  },
  {
    question: "How does the accountability feature work?",
    answer: "The system automatically tracks the time between a customer's request and when their car is delivered. If there's a delay beyond a customizable threshold, managers receive alerts, allowing them to address issues promptly and maintain service standards.",
  },
  {
    question: "Can I customize the system for my specific business needs?",
    answer: "Yes, our valet service is highly customizable. We can adapt the system to fit your specific operational requirements, branding, and customer experience goals.",
  },
  {
    question: "How secure is the WhatsApp integration?",
    answer: "WhatsApp provides end-to-end encryption for all communications, ensuring that customer information remains secure. Our system also includes additional security measures to protect customer data and privacy.",
  },
];

export default function ValetService() {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;
  
  // Use the scroll to top hook
  useScrollToTop();

  return (
    <>
      <Meta 
        title="Restaurant Valet Tech | Eatoes"
        description="Simplify valet operations with Eatoes Valet Service. No app required, just WhatsApp. Real-time alerts, increased accountability, and perfect for all businesses."
      />
      
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-primary/10 to-background pt-20 pb-16 md:pt-24 md:pb-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col gap-4 md:gap-8">
              <Breadcrumb className="mb-4">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={currentLang === 'fr' ? '/fr' : '/'}>
                      {t('common.home')}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#features">
                      {t('common.features')}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Valet Service</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Restaurant Valet Tech
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Simplify Valet Operations - No App Required. Just WhatsApp.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="#features">
                      <Button size="lg" className="gap-1.5">
                        Explore Features
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="#contact">
                      <Button size="lg" variant="outline">
                        Contact Sales
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative aspect-video overflow-hidden rounded-xl"
                  >
                    <img
                      src={images.hero}
                      alt="Valet Service"
                      className="object-cover w-full h-full"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Key Features of Our Valet Service
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We understand that managing valet services should be smooth, efficient, and hassle-free.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <feature.icon className="h-10 w-10 mb-4 text-primary" />
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground flex-1">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our cutting-edge valet management system is designed for businesses that want to offer their guests a seamless experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 items-center mt-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">1. Guest Requests Their Car</h3>
                  <p className="text-muted-foreground">
                    Guests request their car through a simple interface, which can be accessed via QR code or a link provided by your staff.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">2. Instant WhatsApp Notification</h3>
                  <p className="text-muted-foreground">
                    The valet team receives an immediate WhatsApp notification with the guest's information and car details.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">3. Car Retrieval</h3>
                  <p className="text-muted-foreground">
                    The valet team retrieves the car and marks the request as in progress, keeping the guest informed.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">4. Notification When Car Arrives</h3>
                  <p className="text-muted-foreground">
                    The team sends a notification to the guest when their car is ready, providing a seamless and efficient experience.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative aspect-video overflow-hidden rounded-xl"
              >
                <img
                  src={images.valet}
                  alt="Valet Service in Action"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Business Types Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Perfect for All Businesses
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our valet service is ideal for a wide range of businesses that want to enhance their customer experience.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
              {businessTypes.map((business, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-muted/20"
                >
                  <div className="text-4xl mb-3">{business.icon}</div>
                  <h3 className="text-xl font-bold">{business.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp Integration Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    WhatsApp Integration
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Our valet service leverages the power of WhatsApp, the world's most popular messaging app, to provide a seamless experience for both guests and staff.
                  </p>
                  <ul className="space-y-2 mt-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>No additional app downloads required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Instant notifications for quick service</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Secure and reliable communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                      <span>Works on any smartphone</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative aspect-square md:aspect-video overflow-hidden rounded-xl"
              >
                <img
                  src={images.whatsapp}
                  alt="WhatsApp Integration"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our valet service.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12 space-y-4">
              {faqItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border rounded-lg p-6"
                >
                  <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Valet Service?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact our team today to learn how our valet service can enhance your customer experience.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1.5">
                  Get Started
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
} 