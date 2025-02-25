import { useState } from "react";
import { Link } from "wouter";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: t('nav.features'), href: "#features" },
    { label: t('nav.testimonials'), href: "#testimonials" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center">
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
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher />
          <Button variant="outline" className="border-gray-300 hover:bg-gray-100 transition-colors">
            Login/Signup
          </Button>
          <Button className="bg-black text-white hover:bg-gray-800 transition-colors">
            {t('hero.cta')}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="p-2">
              <Menu className="h-10 w-10" aria-hidden="true" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 pt-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                variant="outline"
                className="w-full border-gray-300 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Login/Signup
              </Button>
              <Button 
                className="w-full bg-black text-white hover:bg-gray-800 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Chat Now
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
