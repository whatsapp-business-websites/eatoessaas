import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="https://connectapp.fra1.digitaloceanspaces.com/uploads/1738845376665_eatoes%20transparent%20logo%20dark.png"
                alt="Eatoes Logo"
                className="h-24 md:h-32 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-secondary-foreground">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <Facebook className="h-5 w-5 text-secondary-foreground/80 hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-secondary-foreground/80 hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-secondary-foreground/80 hover:text-primary cursor-pointer" />
              <Linkedin className="h-5 w-5 text-secondary-foreground/80 hover:text-primary cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-secondary-foreground">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li><a href="#features" className="hover:text-primary">{t('nav.features')}</a></li>
              <li><a href="#testimonials" className="hover:text-primary">{t('nav.testimonials')}</a></li>
              <li><a href="#contact" className="hover:text-primary">{t('nav.contact')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4 text-secondary-foreground">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>
                <Link href="/privacy">
                  <a className="hover:text-primary">{t('footer.privacyPolicy')}</a>
                </Link>
              </li>
              <li>
                <Link href="/terms">
                  <a className="hover:text-primary">{t('footer.termsOfService')}</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/80">
          © {new Date().getFullYear()} Eatoes. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}