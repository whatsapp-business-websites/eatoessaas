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
  ArrowRight,
  PanelLeft,
  BarChart3,
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
  hero: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-faststsocial-all-over-view.png",
  profile: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-fastsocial-links.png",
  sharing: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-fastsocial-services.png",
  community: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-Fastsocial-images.png",
  events: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-fastsocial-events.png",
  links: "https://connectapp.fra1.cdn.digitaloceanspaces.com/eatoes-website/eatoes-Fast-social-links.png",
};

// How it works steps
const howItWorksSteps = [
  {
    icon: Edit,
    title: "Create Your Profile",
    description:
      "Set up your restaurant's profile with photos, contact details, location, and business hours. Customize the look and feel to match your brand.",
  },
  {
    icon: Image,
    title: "Add Your Content",
    description:
      "Upload menu items, showcase your ambiance with photos, and highlight special events or promotions that make your restaurant unique.",
  },
  {
    icon: Share2,
    title: "Share Your Profile",
    description:
      "Get a unique link and QR code for your profile. Share it on social media, in emails, or display it in your restaurant for customers to scan.",
  },
  {
    icon: Users,
    title: "Build Your Community",
    description:
      "Allow customers to follow your profile, receive updates about new menu items, events, and special promotions.",
  },
  {
    icon: BarChart3,
    title: "Track Engagement",
    description:
      "Monitor profile views, follower growth, and content engagement. Use insights to optimize your profile and increase customer interaction.",
  },
];

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

// Benefits list
const benefits = [
  "Create a beautiful online presence without a website",
  "Share your profile across all social platforms with one link",
  "Update your information in real-time, keeping customers informed",
  "Build a community of followers who receive your updates",
  "Drive more reservations and orders through your profile",
  "Track customer engagement and optimize your content",
];

// FAQ items
const faqs = [
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
    "name": "Eatoes FastSocial Profiles",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Create beautiful, shareable social profiles for your restaurant without a website",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "680"
    }
  };

  return (
    <>
      <Meta 
        title="FastSocial - Restaurant Social Profiles | Eatoes"
        description="Create a beautiful, shareable social profile for your restaurant with Eatoes FastSocial. Showcase your ambience, menu, events, and more in one place."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Helmet>
        <link rel="canonical" href="https://eatoes.com/en/features/social-profiles" />
        <meta name="keywords" content="restaurant social profile, restaurant online presence, restaurant digital identity, restaurant marketing, restaurant social media" />
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
                  <BreadcrumbPage>Social Profiles</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Hero Section */}
          <section className="relative">
            <div className="absolute inset-0 z-0">
              <img
                src={images.hero}
                alt="Single page for all your business needs"
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
                    FastSocial: Your Restaurant's Digital Identity
                  </h1>
                  <p className="text-xl text-white/80 mb-8">
                    Streamline customer interactions by saving data instantly—no OTP needed. Manage queries seamlessly across Facebook, Instagram, and Google, all from one platform using smart chat bot.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="gap-1.5">
                      Get Started Free
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20">
                      See Examples
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Choose FastSocial?</h2>
                <p className="text-muted-foreground">
                  Our platform offers everything you need to establish a strong online presence without the hassle of building a website.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-background rounded-xl p-8 shadow-sm">
                  <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="rounded-xl overflow-hidden h-full"
                  >
                    <img 
                      src={images.profile} 
                      alt="Upload links and redirect users" 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Everything You Need in One Profile</h2>
                <p className="text-muted-foreground">
                  FastSocial gives you all the tools you need to create a compelling online presence for your restaurant.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-background rounded-xl p-6 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                How It Works
              </h2>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {howItWorksSteps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <step.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative rounded-xl overflow-hidden"
                >
                  <img
                    src={images.community}
                    alt="Upload images that customers love"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Events Section */}
          <section className="py-12 md:py-16 lg:py-20 bg-muted/20">
            <div className="container px-4 md:px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold mb-4">Upload Events and Handle From One Place</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    Promote your special events, theme nights, and promotions to drive more bookings and attendance. Keep your customers informed about what's happening at your restaurant.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Easily create and publish events</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Set dates, times, and event details</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <p>Track RSVPs and attendee interest</p>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Learn More About Events
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
                    alt="Upload events and handle from one place"
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* Social Sharing Section */}
          <section className="py-12 md:py-16 lg:py-20">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Share Across All Platforms
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Your FastSocial profile can be shared anywhere with just one click.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6">
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
                    alt="Show all services at one place"
                    className="w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 md:py-16 lg:py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Frequently Asked Questions
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Find answers to common questions about our FastSocial profiles.
                  </p>
                </div>
              </div>
              <div className="mx-auto max-w-3xl">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* One Link Section */}
          <section className="py-12 md:py-16 lg:py-20 bg-muted/10">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    One Link That Connects All
                  </h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Share your restaurant's profile across all platforms with a single link.
                  </p>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mx-auto max-w-4xl"
              >
                <img
                  src={images.links}
                  alt="One link that connects all your platforms"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </motion.div>
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
      </div>
    </>
  );
}
