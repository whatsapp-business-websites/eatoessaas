import { Route, Switch, useLocation } from "wouter";
import Home from "@/pages/Home";
import Terms from "@/pages/Terms";
import Privacy from "@/pages/Privacy";
import Pricing from "@/pages/Pricing";
import TableReservations from "@/pages/features/table-reservations";
import WhatsAppIntegration from "@/pages/features/whatsapp-integration";
import DigitalMenu from "@/pages/features/digital-menu";
import SocialProfiles from "@/pages/features/social-profiles";
import ValetService from "@/pages/features/valet-service";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Routes() {
  const { i18n } = useTranslation();
  const [location] = useLocation();

  // Handle language based on route
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/fr')) {
      i18n.changeLanguage('fr');
    } else {
      i18n.changeLanguage('en');
    }
  }, [i18n]);

  // Reset scroll position when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/fr" component={Home} />
      <Route path="/terms" component={Terms} />
      <Route path="/fr/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/fr/privacy" component={Privacy} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/fr/pricing" component={Pricing} />
      
      {/* Feature pages */}
      <Route path="/en/features/table-reservations" component={TableReservations} />
      <Route path="/fr/features/table-reservations" component={TableReservations} />
      <Route path="/en/features/whatsapp-integration" component={WhatsAppIntegration} />
      <Route path="/fr/features/whatsapp-integration" component={WhatsAppIntegration} />
      <Route path="/en/features/digital-menu" component={DigitalMenu} />
      <Route path="/fr/features/digital-menu" component={DigitalMenu} />
      <Route path="/en/features/social-profiles" component={SocialProfiles} />
      <Route path="/fr/features/social-profiles" component={SocialProfiles} />
      <Route path="/en/features/valet-service" component={ValetService} />
      <Route path="/fr/features/valet-service" component={ValetService} />
    </Switch>
  );
} 