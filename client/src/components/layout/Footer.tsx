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
                className="h-8 md:h-10 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-secondary-foreground">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/eatoesofficial" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-5 w-5 text-secondary-foreground/80 hover:text-primary cursor-pointer" />
              </a>
              <a href="https://x.com/eatoesofficial" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                <Twitter className="h-5 w-5 text-secondary-foreground/80 hover:text-primary cursor-pointer" />
              </a>
              <a href="https://www.instagram.com/eatoesofficial/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5 text-secondary-foreground/80 hover:text-primary cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/company/eatoes" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-secondary-foreground/80 hover:text-primary cursor-pointer" />
              </a>
              <a href="https://wa.me/916281176019/?text=Hi!%20eatoes" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-secondary-foreground/80 hover:text-primary cursor-pointer fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.653-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
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