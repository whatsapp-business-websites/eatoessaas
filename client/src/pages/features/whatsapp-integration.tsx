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
  Settings,
  MousePointerClick,
  Database,
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
  hero: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80",
  dashboard: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?auto=format&fit=crop&q=80",
  mobile: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&q=80",
  analytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
};

// Features list
const features = [
  {
    icon: Database,
    title: "Save Customer Data Instantly",
    description: "Every customer who interacts with your business via WhatsApp is automatically added to your database—no extra steps, no OTP hassle. Reach out to them anytime, within minutes.",
  },
  {
    icon: MessageSquare,
    title: "Seamless Multi-Platform Customer Support",
    description: "Connect your Facebook, Instagram, and Google pages to the API, and let it handle customer queries across all platforms. No matter where they message from, we've got them covered. And yes, their data is saved too!",
  },
  {
    icon: Users,
    title: "Boost Engagement with Your Official Business Identity",
    description: "Every interaction, whether through API or your existing customer data, becomes an opportunity. Communicate anytime with potential customers using your verified business handle—building trust and driving conversions.",
  },
  {
    icon: MousePointerClick,
    title: "Turn Ads into Conversations with Click-to-WhatsApp",
    description: "Your ads shouldn't just inform—they should convert. With CTWA, customers can instantly chat with your business, ask questions, and get real-time solutions. No more passive advertising—start meaningful conversations that drive sales.",
  },
  {
    icon: BarChart3,
    title: "Powerful Insights for Smarter Decisions",
    description: "While the API handles automation, you stay in control. Access deep insights and analytics to understand customer behavior, optimize engagement, and make data-driven decisions that fuel business growth.",
  },
  {
    icon: Settings,
    title: "Customize to Fit Your Business Needs",
    description: "Got a unique requirement? Our API is built to adapt. If you can think it, we can make it happen. Let's talk and bring your vision to life!",
  },
];

// FAQ items
const faqItems = [
  {
    question: "What is WhatsApp Business API?",
    answer: "WhatsApp Business API is a powerful tool that allows businesses to communicate with customers at scale through WhatsApp. It enables automated messaging, customer support, and marketing campaigns while maintaining the personal touch of direct messaging.",
  },
  {
    question: "How does customer data collection work?",
    answer: "When customers interact with your business through WhatsApp, their contact information is automatically saved to your database without requiring any OTP verification. This allows you to build your customer database organically through natural interactions.",
  },
  {
    question: "Can I integrate with my existing CRM?",
    answer: "Yes, our WhatsApp Business API solution can integrate with most popular CRM systems, allowing you to centralize your customer data and communication history in one place.",
  },
  {
    question: "What is Click-to-WhatsApp advertising?",
    answer: "Click-to-WhatsApp (CTWA) is an ad format that allows customers to start a WhatsApp conversation with your business directly from your ads on platforms like Facebook and Instagram. This creates an immediate connection point for interested customers.",
  },
  {
    question: "What kind of analytics are available?",
    answer: "Our platform provides comprehensive analytics including message delivery rates, response times, conversation volumes, customer engagement metrics, and campaign performance data to help you optimize your WhatsApp business strategy.",
  },
];

export default function WhatsAppIntegration() {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;
  
  // Use the scroll to top hook
  useScrollToTop();

  return (
    <>
      <Meta 
        title="WhatsApp Business API Integration | Eatoes"
        description="Automate, engage, and convert with Eatoes WhatsApp Business API. Save customer data instantly, provide seamless multi-platform support, and turn ads into conversations."
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
                    <BreadcrumbPage>WhatsApp Business API</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Automate, Engage, and Convert—All with WhatsApp API
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Transform your customer interactions with our powerful WhatsApp Business API integration. Connect with customers instantly, automate responses, and drive conversions.
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
                      alt="WhatsApp Business API"
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
                  Powerful Features for Your Business
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our WhatsApp Business API integration offers a comprehensive suite of features to help you connect with customers and drive business growth.
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
                  Our WhatsApp Business API integration is designed to be simple to set up and powerful to use.
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
                  <h3 className="text-2xl font-bold">1. Connect Your Business</h3>
                  <p className="text-muted-foreground">
                    We'll help you set up your WhatsApp Business account and connect it to our API. The process is quick and straightforward.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">2. Customize Your Experience</h3>
                  <p className="text-muted-foreground">
                    Configure automated responses, welcome messages, and integration with your other platforms like Facebook and Instagram.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">3. Engage With Customers</h3>
                  <p className="text-muted-foreground">
                    Start communicating with customers through WhatsApp, collecting data automatically and providing seamless support.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">4. Analyze and Optimize</h3>
                  <p className="text-muted-foreground">
                    Use our analytics dashboard to track performance, understand customer behavior, and continuously improve your strategy.
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
                  src={images.dashboard}
                  alt="WhatsApp Business API Dashboard"
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
                  Find answers to common questions about our WhatsApp Business API integration.
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
                  Ready to Transform Your Customer Engagement?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contact our team today to learn how our WhatsApp Business API integration can help your business grow.
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