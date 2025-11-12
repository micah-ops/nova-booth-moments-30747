import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Package, Headphones, TrendingUp, Zap, Shield, DollarSign } from "lucide-react";
import perfectBoothLogo from "@/assets/perfect-booth-logo-header.png";

const Equipment = () => {
  const [expandedAccordion, setExpandedAccordion] = useState<string>("");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="inline-flex items-center gap-2" aria-label="Perfect Booth Home">
            <img 
              src={perfectBoothLogo} 
              alt="Perfect Booth logo" 
              className="h-12 w-auto" 
              width="120" 
              height="36" 
            />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#packages" className="hover:text-primary transition-colors">Packages</a>
            <a href="#support" className="hover:text-primary transition-colors">Support</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Own The Perfect Booth
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Premium photo booth equipment designed for professional event companies. 
              Start or scale your photo booth business with industry-leading technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#contact">
                <Button size="lg" className="text-lg px-8 py-6 h-auto">
                  Request Pricing
                </Button>
              </a>
              <a href="#features">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                  View Specs
                </Button>
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Full Training Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Lifetime Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>White Label Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Hero Image */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <img 
              src="/lovable-uploads/print-booth-package.png" 
              alt="Perfect Booth complete package with equipment and accessories" 
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Perfect Booth Equipment */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Built for Business Success
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover-scale shadow">
              <CardHeader>
                <div className="mb-4">
                  <TrendingUp className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="font-display text-2xl">High ROI Potential</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Average payback period of 15-25 events. Our booths are designed for high-volume 
                operations with minimal downtime and maximum profitability per event.
              </CardContent>
            </Card>

            <Card className="hover-scale shadow">
              <CardHeader>
                <div className="mb-4">
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="font-display text-2xl">Enterprise Reliability</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Commercial-grade components tested for 500+ events. Backed by comprehensive 
                warranty and rapid replacement program to keep your business running.
              </CardContent>
            </Card>

            <Card className="hover-scale shadow">
              <CardHeader>
                <div className="mb-4">
                  <Zap className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="font-display text-2xl">Quick Setup</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                From transport to operational in under 15 minutes. Intuitive interface 
                means minimal training required for your team or subcontractors.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="features" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-secondary-foreground">
            Technical Specifications
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Hardware</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Camera:</strong> Professional DSLR with 24.2MP sensor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Printer:</strong> DNP DS620A professional dye-sublimation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Lighting:</strong> Professional LED ring light system with adjustable brightness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Display:</strong> 15.6" touchscreen interface</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Enclosure:</strong> Premium powder-coated steel construction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Dimensions:</strong> 24"W x 72"H x 18"D (portable)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Software & Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Custom Branding:</strong> White-label ready with your company branding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Templates:</strong> Unlimited custom overlay designs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Sharing:</strong> Instant SMS, email, QR code, and social media</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Analytics:</strong> Real-time event metrics and guest data capture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Backup:</strong> Automatic cloud backup of all photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Support:</strong> Remote monitoring and troubleshooting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section id="packages" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Choose Your Package
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Starter Package */}
            <Card className="hover-scale shadow relative">
              <CardHeader>
                <CardTitle className="font-display text-3xl">Starter</CardTitle>
                <CardDescription className="text-xl mt-2">Perfect for getting started</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-foreground mb-2">Contact Us</div>
                  <p className="text-sm text-muted-foreground">One-time purchase</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">1 Complete booth unit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Professional camera & lighting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Dye-sublimation printer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Basic training (2 hours)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">1-year warranty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
                <a href="#contact">
                  <Button variant="outline" className="w-full">Get Quote</Button>
                </a>
              </CardContent>
            </Card>

            {/* Professional Package */}
            <Card className="hover-scale shadow relative border-primary border-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="font-display text-3xl">Professional</CardTitle>
                <CardDescription className="text-xl mt-2">For serious businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-foreground mb-2">Contact Us</div>
                  <p className="text-sm text-muted-foreground">One-time purchase</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Everything in Starter, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Premium carrying case</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Extended training (4 hours)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Custom template design (3 included)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">2-year warranty</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Priority phone & email support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Marketing materials package</span>
                  </li>
                </ul>
                <a href="#contact">
                  <Button className="w-full">Get Quote</Button>
                </a>
              </CardContent>
            </Card>

            {/* Enterprise Package */}
            <Card className="hover-scale shadow relative">
              <CardHeader>
                <CardTitle className="font-display text-3xl">Enterprise</CardTitle>
                <CardDescription className="text-xl mt-2">Scale your business</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-foreground mb-2">Contact Us</div>
                  <p className="text-sm text-muted-foreground">Multi-unit pricing</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Everything in Professional, plus:</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">3+ booth units (volume pricing)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">On-site training at your location</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Unlimited custom templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">3-year warranty + replacement program</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">24/7 priority support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                </ul>
                <a href="#contact">
                  <Button variant="outline" className="w-full">Get Quote</Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-secondary-foreground">
            Complete Package Includes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Package className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2">Complete Hardware</h3>
              <p className="text-sm text-muted-foreground">
                Booth, camera, printer, lighting, all cables and accessories
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Headphones className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2">Training & Setup</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive training on operation and maintenance
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <DollarSign className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2">Business Resources</h3>
              <p className="text-sm text-muted-foreground">
                Pricing guides, contracts, marketing templates
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-primary" />
              </div>
              <h3 className="font-display text-xl mb-2">Warranty & Support</h3>
              <p className="text-sm text-muted-foreground">
                Extended warranty with lifetime technical support
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              We Support Your Success
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Your success is our success. We provide comprehensive training and ongoing support 
              to help you build a thriving photo booth business.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                  Comprehensive Training
                </h3>
                <p className="text-muted-foreground">
                  In-person or virtual training covering setup, operation, troubleshooting, 
                  and business best practices.
                </p>
              </div>
              
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                  Lifetime Support
                </h3>
                <p className="text-muted-foreground">
                  Access to our expert support team via phone, email, or chat whenever you need assistance.
                </p>
              </div>
              
              <div>
                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                  Business Growth
                </h3>
                <p className="text-muted-foreground">
                  Marketing materials, pricing strategies, and business consulting to help you maximize revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Calculate Your ROI
            </h2>
            <p className="text-xl mb-12 opacity-90">
              See how quickly a Perfect Booth can pay for itself
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div>
                  <div className="text-4xl font-bold mb-2">$800</div>
                  <p className="opacity-90">Average event revenue</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">15-25</div>
                  <p className="opacity-90">Events to break even</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">$40k+</div>
                  <p className="opacity-90">Annual revenue potential</p>
                </div>
              </div>
            </div>
            
            <p className="text-sm opacity-75 mb-8">
              *Based on average pricing of $800-1200 per event and typical operating costs
            </p>
            
            <a href="#contact">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
                Request Custom Pricing
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            What Booth Owners Say
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8">
              <div className="mb-4">
                <div className="flex text-primary mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                "I purchased my first Perfect Booth six months ago and it's already paid for itself. 
                The reliability and print quality keep clients coming back. Best investment I've made."
              </p>
              <p className="font-display font-semibold text-foreground">
                Marcus Rivera
              </p>
              <p className="text-sm text-muted-foreground">Rivera Events, Portland</p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <div className="flex text-primary mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                "The training and support made it so easy to get started. Within a month I had 
                booked 10 events. Now I'm looking at buying my second unit to handle the demand."
              </p>
              <p className="font-display font-semibold text-foreground">
                Jessica Chen
              </p>
              <p className="text-sm text-muted-foreground">JC Photo Experiences, Seattle</p>
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <div className="flex text-primary mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                "We've scaled to 5 booths and they're booked almost every weekend. The build quality 
                is exceptional - minimal maintenance even after hundreds of events."
              </p>
              <p className="font-display font-semibold text-foreground">
                David Thompson
              </p>
              <p className="text-sm text-muted-foreground">Pacific Event Rentals, Oregon</p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-secondary-foreground">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion 
              type="single" 
              collapsible 
              value={expandedAccordion} 
              onValueChange={setExpandedAccordion}
            >
              <AccordionItem value="financing">
                <AccordionTrigger className="text-lg font-display text-left">
                  Do you offer financing options?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, we partner with several financing companies to offer flexible payment plans. 
                  We can help you get approved with payments as low as $300-500/month depending on your credit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="warranty">
                <AccordionTrigger className="text-lg font-display text-left">
                  What does the warranty cover?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Our warranty covers all hardware defects and malfunctions under normal use. This includes 
                  the camera, printer, lighting, computer system, and enclosure. We offer rapid replacement 
                  for critical components to minimize downtime.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="training">
                <AccordionTrigger className="text-lg font-display text-left">
                  How long does training take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Basic training takes 2-4 hours and covers setup, operation, troubleshooting, and maintenance. 
                  We also provide business training covering pricing, marketing, and client management. 
                  Additional training sessions are available anytime.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping">
                <AccordionTrigger className="text-lg font-display text-left">
                  How is the booth shipped and what about setup?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We ship fully assembled and tested via freight carrier. Local customers can arrange pickup. 
                  The booth is ready to use upon arrival - just plug in and power on. Setup at events takes 
                  10-15 minutes with our quick-release system.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="supplies">
                <AccordionTrigger className="text-lg font-display text-left">
                  Where do I purchase printer paper and supplies?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We use industry-standard DNP printer media available from multiple suppliers. We'll provide 
                  you with our preferred vendor list and pricing. Average cost per 4x6 print is $0.30-0.40 
                  including paper and ink.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="software">
                <AccordionTrigger className="text-lg font-display text-left">
                  What software is included?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Our proprietary software is included with lifetime updates. Features include unlimited custom 
                  templates, social sharing, email/SMS delivery, data collection, analytics, and remote monitoring. 
                  The software can be white-labeled with your branding.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="updates">
                <AccordionTrigger className="text-lg font-display text-left">
                  How do software updates work?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Software updates are automatic and free for life. We regularly add new features, templates, 
                  and improvements based on user feedback. You'll always have access to the latest version.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="bulk">
                <AccordionTrigger className="text-lg font-display text-left">
                  Do you offer discounts for multiple units?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, we offer volume pricing for purchases of 3 or more units. We also provide enhanced 
                  support packages for multi-unit operators including priority parts stocking and dedicated 
                  account management. Contact us for custom enterprise pricing.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Start Your Photo Booth Business?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get in touch to discuss your needs and receive custom pricing. We're here to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="mailto:sales@perfectbooth.com">
                <Button size="lg" className="text-lg px-8 py-6 h-auto">
                  Email Us
                </Button>
              </a>
              <a href="tel:+1234567890">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                  Call (123) 456-7890
                </Button>
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Or fill out our inquiry form and we'll contact you within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img 
                src={perfectBoothLogo} 
                alt="Perfect Booth logo" 
                className="h-8 w-auto" 
              />
            </div>
            
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Event Services
              </a>
              <a href="/wedding" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Weddings
              </a>
              <a href="/privacy-policy" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Terms of Service
              </a>
            </nav>
            
            <div className="text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} Perfect Booth. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Equipment;
