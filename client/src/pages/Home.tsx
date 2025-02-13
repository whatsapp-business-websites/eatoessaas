import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Clients from "@/components/sections/Clients";
import { useEffect, useState } from 'react';
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { Blog } from "@/components/ui/blog-section";
import Meta from "@/components/layout/Meta";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Eatoes",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Restaurant management solution with digital menus, WhatsApp integration, and smart reservations",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1000"
    }
  };

  return (
    <>
      <Meta />
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
        <Navbar />
        <main>
          {isMobile ? (
            <AuroraBackground>
              <div className="relative flex flex-col gap-4 items-center justify-center px-4">
                <h1 className="text-4xl md:text-5xl font-bold dark:text-white text-center leading-tight flex flex-col">
                  <motion.span
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                    animate={{
                      opacity: [1, 0.8, 1],
                      scale: [1, 1.05, 1],
                      filter: [
                        'brightness(1)',
                        'brightness(1.5)',
                        'brightness(1)'
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    {t('hero.title.part1')}
                  </motion.span>
                  <span>{t('hero.title.part2')}</span>
                  <span>{t('hero.title.part3')}</span>
                </h1>
                <p className="font-normal text-lg dark:text-neutral-200 text-center max-w-[320px] leading-relaxed mt-2">
                  {t('hero.description')}
                </p>
                <button className="bg-black text-white hover:bg-gray-800 rounded-md w-fit px-6 py-2 mt-4 transition-colors">
                  Chat Now
                </button>
              </div>
            </AuroraBackground>
          ) : (
            <Hero />
          )}
          <Features />
          <Clients />
          <Testimonials />
          <Blog />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}