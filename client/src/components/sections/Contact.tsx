import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            Ready to transform your restaurant? Our team is here to help you get started with a personalized demo.
          </p>
          <Button 
            size="lg" 
            className="w-full sm:max-w-xs bg-black text-white hover:bg-gray-800 transition-colors py-3"
            onClick={() => window.open('https://bit.ly/eatoeswebsite', '_blank')}
          >
            Chat Now
          </Button>
        </div>
      </div>
    </section>
  );
}