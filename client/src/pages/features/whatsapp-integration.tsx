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
  ArrowRight,
  Smartphone,
  Share2,
  Globe,
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
  hero: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-WhatsApp-API-ads-conversion.png",
  dashboard: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-Whatsapp-api-broadcast.png",
  mobile: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-WhatsApp-API-automation.png",
  analytics: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-WhatsApp-API-feedback.png",
  broadcast: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-Whatsapp-api-broadcast.png",
  adsConversion: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-WhatsApp-API-ads-conversion.png",
  automation: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-WhatsApp-API-automation.png",
  feedback: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-WhatsApp-API-feedback.png",
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

// How it works steps
const howItWorksSteps = [
  {
    icon: Globe,
    title: "Connect Your Business Account",
    description:
      "Set up your WhatsApp Business account and connect it to our API. Our team will guide you through the verification process to ensure your business is officially recognized.",
  },
  {
    icon: Settings,
    title: "Configure Automated Responses",
    description:
      "Set up welcome messages, FAQs, and automated responses to common customer queries. Create workflows that guide customers through your services efficiently.",
  },
  {
    icon: Smartphone,
    title: "Integrate with Your Platforms",
    description:
      "Connect your social media accounts, website, and advertising platforms to enable seamless communication across all customer touchpoints.",
  },
  {
    icon: MessageSquare,
    title: "Engage with Customers",
    description:
      "Start communicating with customers through WhatsApp. Send personalized messages, promotions, and updates to drive engagement and sales.",
  },
  {
    icon: BarChart3,
    title: "Analyze and Optimize",
    description:
      "Use our analytics dashboard to track message performance, customer engagement, and conversion rates. Continuously refine your strategy based on data insights.",
  },
];

// Benefits of WhatsApp integration
const benefits = [
  "Automatically collect customer data with every interaction",
  "Provide 24/7 customer support with automated responses",
  "Increase conversion rates with direct messaging capabilities",
  "Enhance ad performance with Click-to-WhatsApp functionality",
  "Build a verified business presence that customers trust",
  "Access detailed analytics to optimize your messaging strategy",
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
  {
    question: "Is WhatsApp Business API compliant with privacy regulations?",
    answer: "Yes, our implementation of WhatsApp Business API is fully compliant with privacy regulations including GDPR. We ensure that all customer data is handled securely and in accordance with relevant privacy laws.",
  },
];

export default function WhatsAppIntegration() {
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
    "@type": "SoftwareApplication",
    "name": "Eatoes WhatsApp Business API Integration",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Powerful WhatsApp Business API integration for restaurants to automate customer communication and drive engagement",
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
        description="Automate, engage, and convert with Eatoes WhatsApp Business API. Save customer data instantly, provide seamless multi-platform support, and turn ads into conversations."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Helmet>
        <link rel="canonical" href="https://eatoes.com/en/features/whatsapp-integration" />
        <meta name="keywords" content="whatsapp business api, restaurant messaging, customer engagement, click to whatsapp, restaurant marketing, customer data collection" />
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
                alt="WhatsApp Business messaging on smartphone"
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
                    WhatsApp Business API Integration
                  </h1>
                  <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    Transform your customer interactions with our powerful WhatsApp Business API integration. Connect with customers instantly, automate responses, and drive conversions.
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
                <h2 className="text-3xl font-bold mb-4">Transform Your Customer Communication</h2>
                <p className="text-lg text-muted-foreground">
                  Our WhatsApp Business API integration helps you connect with customers instantly and drive engagement like never before.
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
                    alt="WhatsApp Business API dashboard"
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
                  Our intuitive system makes managing WhatsApp communication effortless for your business.
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

          {/* Seamless Customer Engagement Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-4">Seamless Customer Engagement</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Engage with your customers on their preferred platform. Our WhatsApp integration makes it easy for customers to reach you and for you to provide instant support.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Automated responses to common questions</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Personalized messaging at scale</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Instant notifications for new messages</p>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Explore Customer Engagement
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
                    alt="WhatsApp Business messaging on mobile"
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Analytics Section */}
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
                    src={images.analytics}
                    alt="WhatsApp Business analytics dashboard"
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
                  <h2 className="text-3xl font-bold mb-4">Powerful Analytics</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Gain valuable insights into your WhatsApp communication performance. Track message delivery, response rates, customer engagement, and more to continuously optimize your strategy.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Comprehensive performance dashboards</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Customer engagement metrics</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Conversion tracking and attribution</p>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Explore Analytics Features
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
                  Join hundreds of businesses already using our WhatsApp Business API integration.
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
                      "The WhatsApp integration has completely transformed how we communicate with our customers. We've seen a 35% increase in customer engagement and our response time has decreased dramatically."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
                        MR
                      </div>
                      <div>
                        <p className="font-semibold">Maria Rodriguez</p>
                        <p className="text-sm text-muted-foreground">Owner, Taqueria El Sol</p>
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
                      "The automated responses have been a game-changer for our business. We can now provide instant support to our customers 24/7, even when our staff is unavailable."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
                        JP
                      </div>
                      <div>
                        <p className="font-semibold">James Peterson</p>
                        <p className="text-sm text-muted-foreground">Manager, Urban Plates</p>
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
                      "The Click-to-WhatsApp ads have revolutionized our marketing strategy. We're seeing a 40% higher conversion rate compared to our traditional ad campaigns."
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-semibold">
                        SK
                      </div>
                      <div>
                        <p className="font-semibold">Sarah Kim</p>
                        <p className="text-sm text-muted-foreground">Owner, Seoul Kitchen</p>
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