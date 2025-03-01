import { useEffect } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  CheckCircle2,
  ChevronRight,
  Share2,
  Edit,
  Image,
  Calendar,
  Users,
  MessageSquare,
  Instagram,
  Facebook,
  Twitter,
  Smartphone,
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
  hero: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80",
  profile: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
  sharing: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
  community: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
};

// Features list
const features = [
  {
    icon: Image,
    title: "Showcase Everything in One Place",
    description: "Ambience & dish images, contact details, menu, reservations, events, and more—all in a beautiful, shareable profile.",
  },
  {
    icon: Edit,
    title: "Easy Edits & Updates",
    description: "Modify details anytime, keeping your profile fresh and relevant with just a few clicks.",
  },
  {
    icon: Share2,
    title: "One-Click Sharing",
    description: "Share your restaurant's link on WhatsApp, Instagram, and other platforms effortlessly.",
  },
  {
    icon: Users,
    title: "Grow Your Community",
    description: "Let food lovers follow your business, get updates, and stay engaged with your exclusive posts & announcements.",
  },
  {
    icon: Calendar,
    title: "Event Promotion",
    description: "Showcase upcoming events, special nights, and promotions to drive more bookings and attendance.",
  },
  {
    icon: MessageSquare,
    title: "Direct Customer Engagement",
    description: "Enable direct messaging and feedback, creating a direct line of communication with your customers.",
  },
];

// Social platforms
const socialPlatforms = [
  {
    name: "Instagram",
    icon: Instagram,
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "bg-blue-600",
  },
  {
    name: "Twitter",
    icon: Twitter,
    color: "bg-sky-500",
  },
  {
    name: "WhatsApp",
    icon: Smartphone,
    color: "bg-green-500",
  },
];

// FAQ items
const faqItems = [
  {
    question: "What is FastSocial?",
    answer: "FastSocial is a platform that allows restaurants to create beautiful, shareable social profiles without the need for a full website. It's a quick, easy way to establish your online presence and connect with customers.",
  },
  {
    question: "Do I need technical skills to create a profile?",
    answer: "Not at all! FastSocial is designed to be user-friendly and intuitive. You can create and update your profile with just a few clicks, no coding or design skills required.",
  },
  {
    question: "Can customers make reservations through my social profile?",
    answer: "Yes, your FastSocial profile can include reservation functionality, allowing customers to book tables directly through your profile.",
  },
  {
    question: "How do I share my profile with customers?",
    answer: "Your profile comes with a unique link that you can share anywhere—on social media, in emails, via QR codes, or through messaging apps like WhatsApp. One click and your customers can access all your information.",
  },
  {
    question: "Can I customize the look of my profile?",
    answer: "Absolutely! You can customize colors, layout, featured images, and more to match your restaurant's branding and create a unique experience for your visitors.",
  },
];

export default function SocialProfiles() {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;
  
  // Use the scroll to top hook
  useScrollToTop();

  return (
    <>
      <Meta 
        title="FastSocial - Restaurant Social Profiles | Eatoes"
        description="Create a beautiful, shareable social profile for your restaurant with Eatoes FastSocial. Showcase your ambience, menu, events, and more in one place."
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
                    <BreadcrumbPage>Social Profiles</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                      FastSocial: Your Restaurant's Digital Identity
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Struggling to build a website for your restaurant? Eatoes FastSocial makes it effortless! Create a beautiful, shareable social profile in minutes.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="#features">
                      <Button size="lg" className="gap-1.5">
                        Explore Features
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="#create-profile">
                      <Button size="lg" variant="outline">
                        Create Free Profile
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
                      alt="Restaurant Social Profile"
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
                  Everything You Need in One Profile
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  FastSocial gives you all the tools you need to create a compelling online presence for your restaurant.
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
                  Creating and sharing your restaurant's social profile is quick and easy.
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
                  <h3 className="text-2xl font-bold">1. Create Your Profile</h3>
                  <p className="text-muted-foreground">
                    Sign up and add your restaurant's basic information, including name, location, contact details, and business hours.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">2. Add Content</h3>
                  <p className="text-muted-foreground">
                    Upload photos of your restaurant, dishes, and ambiance. Add your menu, upcoming events, and any special promotions.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">3. Customize & Publish</h3>
                  <p className="text-muted-foreground">
                    Personalize your profile's appearance to match your brand. Once you're satisfied, publish it with one click.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">4. Share & Engage</h3>
                  <p className="text-muted-foreground">
                    Share your profile link across social media and messaging platforms. Engage with followers through updates and announcements.
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
                  src={images.profile}
                  alt="Restaurant Profile Creation"
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Social Sharing Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Share Across All Platforms
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your FastSocial profile can be shared anywhere with just one click.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-4xl mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialPlatforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <div className={`w-16 h-16 rounded-full ${platform.color} flex items-center justify-center mb-3`}>
                    <platform.icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="font-medium">{platform.name}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Your customers can follow your profile to stay updated with your latest posts, events, and announcements.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src={images.sharing}
                  alt="Social Sharing"
                  className="mx-auto rounded-xl max-w-full md:max-w-2xl"
                />
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
                  Find answers to common questions about our FastSocial profiles.
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
        <section id="create-profile" className="py-12 md:py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Create Your Restaurant's Social Profile?
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of restaurants already using Eatoes FastSocial to attract more customers, drive reservations, and increase engagement.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1.5">
                  Create Free Profile
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  See Examples
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