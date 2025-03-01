import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Meta from "@/components/layout/Meta";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, ArrowRight } from "lucide-react";
import useScrollToTop from "@/hooks/useScrollToTop";
import Contact from "@/components/sections/Contact";

const PricingPage = () => {
  const { t } = useTranslation();

  // Use the scroll to top hook
  useScrollToTop();

  const [features, setFeatures] = useState({
    tableReservation: { enabled: true, value: 200 },
    whatsapp: { enabled: false, scanCount: 100, messageCount: 100 },
    digitalMenu: { enabled: false, value: 50 },
    socialVerification: { enabled: false },
    valetCars: { enabled: false, value: 100 }
  });
  
  type Features = typeof features;
  type FeatureKey = keyof Features;
  
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate pricing for table reservations
  const getTableReservationPrice = (count: number) => {
    if (count <= 20) return 0;
    if (count <= 100) return 2000;
    if (count <= 300) return 5200;
    if (count <= 600) return 9000;
    return 12000;
  };

  // Calculate pricing for WhatsApp API
  const getWhatsappPrice = () => {
    if (!features.whatsapp.enabled) return 0;
    const basePrice = 1999; // Monthly base price
    const scanCost = features.whatsapp.scanCount * 0.39;
    const messageCost = features.whatsapp.messageCount * 0.99;
    return basePrice + scanCost + messageCost;
  };

  // Calculate pricing for digital menu
  const getDigitalMenuPrice = (dishCount: number) => {
    if (dishCount <= 20) return 0;
    if (dishCount <= 50) return 299;
    if (dishCount <= 100) return 499;
    if (dishCount <= 400) return 699;
    if (dishCount <= 2000) return 999;
    return 999;
  };

  // Calculate pricing for valet cars
  const getValetPrice = (count: number) => {
    if (count <= 20) return 0;
    if (count <= 100) return 800;
    if (count <= 300) return 1800;
    if (count <= 500) return 2500;
    return 3000;
  };

  // Update a feature's state
  const updateFeature = (feature: FeatureKey, updates: Partial<Features[FeatureKey]>) => {
    setFeatures(prev => ({
      ...prev,
      [feature]: { ...prev[feature], ...updates }
    }));
  };

  // Calculate total price whenever features change
  useEffect(() => {
    let price = 0;
    
    if (features.tableReservation.enabled) {
      price += getTableReservationPrice(features.tableReservation.value);
    }
    
    if (features.whatsapp.enabled) {
      price += getWhatsappPrice();
    }
    
    if (features.digitalMenu.enabled) {
      price += getDigitalMenuPrice(features.digitalMenu.value);
    }
    
    if (features.socialVerification.enabled) {
      price += 499;
    }
    
    if (features.valetCars.enabled) {
      price += getValetPrice(features.valetCars.value);
    }
    
    setTotalPrice(price);
  }, [features]);

  // Format price in INR
  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  return (
    <>
      <Meta 
        title="Pricing - Eatoes"
        description="Flexible pricing for restaurants of all sizes. Pay only for what you use with our usage-based pricing model."
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-16">
          {/* Hero Section */}
          <section className="relative overflow-hidden">
            <AuroraBackground>
              <div className="container mx-auto px-4 py-16 md:py-24 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                      Transparent, Usage-Based
                    </span>
                    <br />
                    <span>Pricing for Restaurants</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    Pay only for what you use. No hidden fees, no long-term contracts.
                    Scale up or down as your business needs change.
                  </p>
                </motion.div>
              </div>
            </AuroraBackground>
          </section>

          {/* Pricing Calculator Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Calculate Your Price</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our pricing is based on actual usage. For example, a typical mid-sized restaurant handles about 200-300 reservations per month.
                  Select the features you need and see your monthly price instantly.
                  Our transparent pricing ensures you only pay for what you use.
                </p>
              </div>

              <div className="max-w-5xl mx-auto">
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="md:col-span-2 p-6 md:p-8 border-r border-border/50">
                      {/* Table Reservation */}
                      <div className="mb-8 pb-6 border-b border-border/50">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-3">
                            <Switch 
                              checked={features.tableReservation.enabled}
                              onCheckedChange={(checked) => updateFeature('tableReservation', { enabled: checked })}
                              className="data-[state=checked]:bg-black data-[state=checked]:border-black"
                            />
                            <Label className="text-lg font-medium">Table Reservation</Label>
                          </div>
                          <div className="text-xl font-semibold">
                            {features.tableReservation.enabled ? formatPrice(getTableReservationPrice(features.tableReservation.value)) : '—'}
                          </div>
                        </div>
                        
                        {features.tableReservation.enabled && (
                          <div className="pl-10 space-y-4">
                            <Label className="text-sm text-muted-foreground">Monthly reservations</Label>
                            <Slider
                              min={0}
                              max={700}
                              step={10}
                              value={[features.tableReservation.value]}
                              onValueChange={(value) => updateFeature('tableReservation', { value: value[0] })}
                              className="mb-2"
                            />
                            <div className="flex justify-between items-center">
                              <Input
                                type="number"
                                min={0}
                                value={features.tableReservation.value}
                                onChange={(e) => updateFeature('tableReservation', { value: parseInt(e.target.value) || 0 })}
                                className="w-24"
                              />
                              <div className="text-sm text-muted-foreground">
                                {features.tableReservation.value <= 20 ? 'Free' : 
                                features.tableReservation.value <= 100 ? '₹20 each' : 
                                features.tableReservation.value <= 300 ? '₹17 each' :
                                features.tableReservation.value <= 600 ? '₹15 each' : 'Unlimited'}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* WhatsApp API */}
                      <div className="mb-8 pb-6 border-b border-border/50">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-3">
                            <Switch 
                              checked={features.whatsapp.enabled}
                              onCheckedChange={(checked) => updateFeature('whatsapp', { enabled: checked })}
                              className="data-[state=checked]:bg-black data-[state=checked]:border-black"
                            />
                            <Label className="text-lg font-medium">WhatsApp API</Label>
                          </div>
                          <div className="text-xl font-semibold">
                            {features.whatsapp.enabled ? formatPrice(getWhatsappPrice()) : '—'}
                          </div>
                        </div>
                        
                        {features.whatsapp.enabled && (
                          <div className="pl-10 space-y-6">
                            <div className="text-sm text-muted-foreground mb-4">
                              Base monthly cost: ₹1,999 + usage
                            </div>

                            <div className="space-y-4">
                              <Label className="text-sm text-muted-foreground">Monthly QR scans (₹0.39 per scan)</Label>
                              <Slider
                                min={0}
                                max={10000}
                                step={100}
                                value={[features.whatsapp.scanCount]}
                                onValueChange={(value) => updateFeature('whatsapp', { scanCount: value[0] })}
                                className="mb-2"
                              />
                              <div className="flex justify-between items-center">
                                <Input
                                  type="number"
                                  min={0}
                                  value={features.whatsapp.scanCount}
                                  onChange={(e) => updateFeature('whatsapp', { scanCount: parseInt(e.target.value) || 0 })}
                                  className="w-24"
                                />
                                <div className="text-sm text-muted-foreground">
                                  ₹{(features.whatsapp.scanCount * 0.39).toFixed(2)} for scans
                                </div>
                              </div>
                            </div>

                            <div className="space-y-4">
                              <Label className="text-sm text-muted-foreground">Monthly marketing messages (₹0.99 per message)</Label>
                              <Slider
                                min={0}
                                max={5000}
                                step={50}
                                value={[features.whatsapp.messageCount]}
                                onValueChange={(value) => updateFeature('whatsapp', { messageCount: value[0] })}
                                className="mb-2"
                              />
                              <div className="flex justify-between items-center">
                                <Input
                                  type="number"
                                  min={0}
                                  value={features.whatsapp.messageCount}
                                  onChange={(e) => updateFeature('whatsapp', { messageCount: parseInt(e.target.value) || 0 })}
                                  className="w-24"
                                />
                                <div className="text-sm text-muted-foreground">
                                  ₹{(features.whatsapp.messageCount * 0.99).toFixed(2)} for messages
                                </div>
                              </div>
                            </div>

                            <div className="text-sm font-medium mt-4">
                              Total WhatsApp cost: Base ₹1,999 + QR scans ₹{(features.whatsapp.scanCount * 0.39).toFixed(2)} + Messages ₹{(features.whatsapp.messageCount * 0.99).toFixed(2)}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Digital Menu */}
                      <div className="mb-8 pb-6 border-b border-border/50">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-3">
                            <Switch 
                              checked={features.digitalMenu.enabled}
                              onCheckedChange={(checked) => updateFeature('digitalMenu', { enabled: checked })}
                              className="data-[state=checked]:bg-black data-[state=checked]:border-black"
                            />
                            <Label className="text-lg font-medium">Digital Menu</Label>
                          </div>
                          <div className="text-xl font-semibold">
                            {features.digitalMenu.enabled ? formatPrice(getDigitalMenuPrice(features.digitalMenu.value)) : '—'}
                          </div>
                        </div>
                        
                        {features.digitalMenu.enabled && (
                          <div className="pl-10 space-y-4">
                            <Label className="text-sm text-muted-foreground">Number of dishes</Label>
                            <Slider
                              min={0}
                              max={2000}
                              step={10}
                              value={[features.digitalMenu.value]}
                              onValueChange={(value) => updateFeature('digitalMenu', { value: value[0] })}
                              className="mb-2"
                            />
                            <div className="flex justify-between items-center">
                              <Input
                                type="number"
                                min={0}
                                value={features.digitalMenu.value}
                                onChange={(e) => updateFeature('digitalMenu', { value: parseInt(e.target.value) || 0 })}
                                className="w-24"
                              />
                              <div className="text-sm text-muted-foreground">
                                {features.digitalMenu.value <= 20 ? 'Free' : 
                                features.digitalMenu.value <= 50 ? '₹3 each' : 
                                features.digitalMenu.value <= 100 ? '₹5 each' :
                                features.digitalMenu.value <= 400 ? '₹1.5 each' : '₹0.5 each'}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Social Verification */}
                      <div className="mb-8 pb-6 border-b border-border/50">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <Switch 
                              checked={features.socialVerification.enabled}
                              onCheckedChange={(checked) => updateFeature('socialVerification', { enabled: checked })}
                              className="data-[state=checked]:bg-black data-[state=checked]:border-black"
                            />
                            <Label className="text-lg font-medium">Social Verification</Label>
                          </div>
                          <div className="text-xl font-semibold">
                            {features.socialVerification.enabled ? '₹499' : '—'}
                          </div>
                        </div>
                      </div>
                      
                      {/* Valet Cars */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center gap-3">
                            <Switch 
                              checked={features.valetCars.enabled}
                              onCheckedChange={(checked) => updateFeature('valetCars', { enabled: checked })}
                              className="data-[state=checked]:bg-black data-[state=checked]:border-black"
                            />
                            <Label className="text-lg font-medium">Valet Cars</Label>
                          </div>
                          <div className="text-xl font-semibold">
                            {features.valetCars.enabled ? formatPrice(getValetPrice(features.valetCars.value)) : '—'}
                          </div>
                        </div>
                        
                        {features.valetCars.enabled && (
                          <div className="pl-10 space-y-4">
                            <Label className="text-sm text-muted-foreground">Car requests per month</Label>
                            <Slider
                              min={0}
                              max={600}
                              step={10}
                              value={[features.valetCars.value]}
                              onValueChange={(value) => updateFeature('valetCars', { value: value[0] })}
                              className="mb-2"
                            />
                            <div className="flex justify-between items-center">
                              <Input
                                type="number"
                                min={0}
                                value={features.valetCars.value}
                                onChange={(e) => updateFeature('valetCars', { value: parseInt(e.target.value) || 0 })}
                                className="w-24"
                              />
                              <div className="text-sm text-muted-foreground">
                                {features.valetCars.value <= 20 ? 'Free' : 
                                features.valetCars.value <= 100 ? '₹8 each' : 
                                features.valetCars.value <= 300 ? '₹6 each' :
                                features.valetCars.value <= 500 ? '₹5 each' : 'Unlimited'}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Pricing Summary */}
                    <div className="p-6 md:p-8 bg-secondary/20">
                      <h3 className="text-xl font-bold mb-6">Your Plan</h3>
                      
                      <div className="space-y-4 mb-8">
                        {features.tableReservation.enabled && (
                          <div className="flex justify-between">
                            <span>Table Reservation</span>
                            <span>{formatPrice(getTableReservationPrice(features.tableReservation.value))}</span>
                          </div>
                        )}
                        
                        {features.whatsapp.enabled && (
                          <div className="flex justify-between">
                            <span>WhatsApp API</span>
                            <span>{formatPrice(getWhatsappPrice())}</span>
                          </div>
                        )}
                        
                        {features.digitalMenu.enabled && (
                          <div className="flex justify-between">
                            <span>Digital Menu</span>
                            <span>{formatPrice(getDigitalMenuPrice(features.digitalMenu.value))}</span>
                          </div>
                        )}
                        
                        {features.socialVerification.enabled && (
                          <div className="flex justify-between">
                            <span>Social Verification</span>
                            <span>₹499</span>
                          </div>
                        )}
                        
                        {features.valetCars.enabled && (
                          <div className="flex justify-between">
                            <span>Valet Cars</span>
                            <span>{formatPrice(getValetPrice(features.valetCars.value))}</span>
                          </div>
                        )}
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="pt-4">
                        <div className="flex justify-between items-center text-2xl font-bold">
                          <span>Total</span>
                          <span>{formatPrice(totalPrice)}/mo</span>
                        </div>
                      </div>
                      
                      <Button className="w-full mt-8 bg-black text-white hover:bg-gray-800 transition-colors group">
                        Get Started
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                      
                      <p className="mt-4 text-sm text-center text-muted-foreground">
                        Prices shown are in Indian Rupees (₹).<br/>
                        Billed monthly.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-12 md:py-16 bg-secondary/10">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Pricing Model?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our usage-based pricing ensures you only pay for what you actually use,
                  making it perfect for restaurants of all sizes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card className="bg-background border-0 shadow-md">
                  <CardHeader>
                    <CardTitle>Pay As You Grow</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Start small and scale up as your business grows. No need to pay for features
                      or capacity you don't use.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-0 shadow-md">
                  <CardHeader>
                    <CardTitle>No Hidden Fees</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Transparent pricing with no surprises. What you see is what you pay,
                      with no hidden costs or unexpected charges.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-background border-0 shadow-md">
                  <CardHeader>
                    <CardTitle>Flexible Plans</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Mix and match features to create the perfect plan for your restaurant.
                      Adjust your plan anytime as your needs change.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Have questions about our pricing? Find answers to common questions below.
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>How does usage-based pricing work?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      With usage-based pricing, you only pay for what you use. For example, if you enable table reservations,
                      you'll pay based on the number of reservations you receive each month. This ensures you're not paying
                      for capacity you don't need.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Can I change my plan later?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, you can adjust your plan at any time. Enable or disable features as needed,
                      and your billing will adjust accordingly at the start of the next billing cycle.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Do you offer discounts for annual billing?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Yes, we offer a 10% discount for annual billing. Contact our sales team for more information
                      about annual billing options.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact">
            <Contact />
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PricingPage; 