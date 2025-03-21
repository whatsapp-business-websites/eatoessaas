import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === "/" || location === "/fr";

  // Check if we need to scroll to a section on page load
  useEffect(() => {
    if (isHomePage && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const element = document.getElementById(sectionId);
      
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 100);
      }
    }
  }, [isHomePage, location]);

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Extract the section ID from the href
    const sectionId = href.split('#')[1];
    
    // If we're not on the home page, navigate to home page with the hash
    if (!isHomePage) {
      // Use the hash in the URL so it persists after navigation
      window.location.href = href;
      return;
    }
    
    // If we're already on the home page, just scroll to the section
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Create navItems with proper links based on current location
  const getNavItems = () => [
    { 
      label: t('nav.features'), 
      href: isHomePage ? "#features" : "/#features" 
    },
    { 
      label: t('nav.pricing') || 'Pricing', 
      href: "/pricing" 
    },
  ];

  const navItems = getNavItems();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center" aria-label="Go to Eatoes Homepage">
            <img 
              src="https://connectapp.fra1.digitaloceanspaces.com/uploads/1738845376665_eatoes%20transparent%20logo%20dark.png"
              alt="Eatoes Logo"
              className="h-6 md:h-8 w-auto"
              loading="eager"
            />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            item.href.startsWith('#') || item.href.includes('/#') ? (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={(e) => handleHashLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href}>
                <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  {item.label}
                </a>
              </Link>
            )
          ))}
          <Link href="/auth">
            <a className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 hover:bg-gray-100 h-10 px-4 py-2">
              Login/Signup
            </a>
          </Link>
          <a 
            href="https://bit.ly/eatoeswebsite"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 h-10 px-4 py-2"
          >
            {t('hero.cta')}
          </a>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="p-2">
              <Menu className="h-10 w-10" aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="transition-transform duration-300 ease-in-out" side="right">
            <div className="flex flex-col gap-4 pt-8">
              {navItems.map((item) => (
                item.href.startsWith('#') || item.href.includes('/#') ? (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={(e) => {
                      handleHashLinkClick(e, item.href);
                      setIsOpen(false);
                    }}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.href} href={item.href}>
                    <a 
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  </Link>
                )
              ))}
              <Link href="/auth">
                <a className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 hover:bg-gray-100 w-full h-10 px-4 py-2">
                  Login/Signup
                </a>
              </Link>
              <a 
                href="https://bit.ly/eatoeswebsite"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 w-full h-10 px-4 py-2"
              >
                Chat Now
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
