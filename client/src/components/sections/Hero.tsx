import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ImageTrail } from "@/components/ui/image-trail";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  const images = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    "https://images.unsplash.com/photo-1544148103-0773bf10d330",
    "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086",
  ].map(url => `${url}?auto=format&fit=crop&w=300&q=80`);

  return (
    <section className="min-h-screen pt-16 flex items-center bg-gradient-to-b from-background to-muted/20 relative">
      <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-auto">
        <ImageTrail containerRef={ref}>
          {images.map((url, index) => (
            <div
              key={index}
              className="flex relative overflow-hidden w-24 h-24 rounded-lg"
            >
              <img
                src={url}
                alt={`Restaurant ambiance ${index + 1}`}
                className="object-cover absolute inset-0 hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </ImageTrail>
      </div>

      <div className="container mx-auto px-6 sm:px-8 relative z-10 pointer-events-none">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Power Up Your Restaurant's Growth
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Power up your restaurant growth - From <strong>WhatsApp digital menu</strong> to <strong>smart google table reservation</strong>. We've built everything you need to delight customer experience and boost revenue.
            </p>
            <div className="pt-4 pointer-events-auto">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 transition-colors px-8 py-3 w-full sm:w-auto"
                onClick={() => window.open('https://bit.ly/eatoeswebsite', '_blank')}
              >
                Chat Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}