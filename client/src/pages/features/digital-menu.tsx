import { useEffect } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  CheckCircle2,
  ChevronRight,
  Utensils,
  Filter,
  RefreshCw,
  Calendar,
  Image,
  Sparkles,
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
  hero: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80",
  menuExample: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80",
  qrCode: "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?auto=format&fit=crop&q=80",
  restaurant: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
};

// Features list
const features = [
  {
    icon: Image,
    title: "Stunning Visuals & Smart Filters",
    description: "Showcase dishes with mouthwatering images and let customers filter by Veg/Non-Veg, spice levels, and dietary needs.",
  },
  {
    icon: RefreshCw,
    title: "Seamless Auto-Updates",
    description: "Update once, sync everywhere—no more manual edits across multiple platforms.",
  },
  {
    icon: Calendar,
    title: "Upsells & Event Promotion",
    description: "Share your future events with customers who are dining today and let them book their seats within clicks.",
  },
  {
    icon: Sparkles,
    title: "Enhanced Customer Experience",
    description: "Provide a modern, interactive menu experience that delights customers and makes ordering easy and enjoyable.",
  },
  {
    icon: Filter,
    title: "Intelligent Filtering",
    description: "Allow customers to easily find dishes that match their preferences and dietary requirements with smart filtering options.",
  },
  {
    icon: Utensils,
    title: "Streamlined Operations",
    description: "Simplify menu management and updates, saving time and ensuring consistency across all customer touchpoints.",
  },
];

// FAQ items
const faqItems = [
  {
    question: "How does the digital menu work?",
    answer: "Our digital menu system uses QR codes that customers can scan with their smartphones. This opens an interactive, visually rich menu directly on their device, allowing them to browse dishes, see images, filter options, and even place orders in some configurations.",
  },
  {
    question: "Can I update my menu in real-time?",
    answer: "Yes! One of the key benefits of our digital menu is the ability to make instant updates. Change prices, add specials, or mark items as unavailable—all changes sync immediately across all platforms where your menu is displayed.",
  },
  {
    question: "Do customers need to download an app?",
    answer: "No, our digital menu is web-based and opens directly in the customer's browser when they scan the QR code. There's no app to download, making it convenient and accessible for everyone.",
  },
  {
    question: "Can I customize the look and feel of my digital menu?",
    answer: "Absolutely. Our digital menu can be fully customized to match your restaurant's branding, including colors, fonts, layout, and more. We want your digital menu to be a seamless extension of your restaurant's identity.",
  },
  {
    question: "How do I promote events through the digital menu?",
    answer: "Our system allows you to add event promotions that appear while customers are browsing your menu. These can include upcoming special nights, holiday events, or any other promotions you want to highlight, with the ability for customers to book or learn more with just a click.",
  },
];

export default function DigitalMenu() {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;
  
  // Use the scroll to top hook
  useScrollToTop();

  return (
    <>
      <Meta 
        title="Digital Menu Solutions | Eatoes"
        description="Transform your restaurant's menu into a beautiful, interactive, and intelligent experience with Eatoes Digital Menu. Showcase dishes with stunning visuals and smart filters."
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
                    <BreadcrumbPage>Digital Menu</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      Transform Your Restaurant's Menu Experience
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Create a beautiful, interactive, and intelligent digital menu that enhances customer engagement and boosts sales using its intelligence.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="#features">
                      <Button size="lg" className="gap-1.5">
                        Explore Features
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="#try-free">
                      <Button size="lg" variant="outline">
                        Try For Free
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
                      alt="Digital Menu Example"
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
                  Powerful Features for Your Digital Menu
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our digital menu solution offers a comprehensive suite of features to enhance your customers' dining experience.
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
                  Our digital menu solution is designed to be simple to set up and powerful to use.
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
                  <h3 className="text-2xl font-bold">1. Create Your Digital Menu</h3>
                  <p className="text-muted-foreground">
                    Upload your menu items, descriptions, prices, and high-quality images to our platform. Organize items by categories and add dietary information.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">2. Customize Your Experience</h3>
                  <p className="text-muted-foreground">
                    Personalize the look and feel of your digital menu to match your restaurant's branding. Add filters, special tags, and promotional content.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">3. Generate QR Codes</h3>
                  <p className="text-muted-foreground">
                    Create QR codes that link to your digital menu. Place these on tables, at the entrance, or include them in marketing materials.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">4. Update and Analyze</h3>
                  <p className="text-muted-foreground">
                    Make real-time updates to your menu as needed. Track customer interactions and gain insights to optimize your offerings.
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
                  src={images.menuExample}
                  alt="Digital Menu Example"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Loved by Thousands of Restaurants
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See what restaurant owners are saying about our digital menu solution.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden bg-muted/20 p-8 md:p-10"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full overflow-hidden w-16 h-16">
                      <img
                        src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80"
                        alt="Restaurant Owner"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Sarah Johnson</h3>
                      <p className="text-muted-foreground">Owner, The Rustic Table</p>
                    </div>
                  </div>
                  <p className="text-lg italic">
                    "Implementing Eatoes Digital Menu has been a game-changer for our restaurant. Our customers love the interactive experience, and we've seen a significant increase in orders for dishes with images. The ability to update our menu instantly has been invaluable, especially during busy seasons when we frequently change our specials."
                  </p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our digital menu solution.
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
                  className="border rounded-lg p-6 bg-background"
                >
                  <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="try-free" className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Menu Experience?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Try how your restaurant menu will look for free. No commitment required.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1.5">
                  Try For Free
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