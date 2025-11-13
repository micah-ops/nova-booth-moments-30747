import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { CheckCircle2, Package, Headphones, TrendingUp, Zap, Shield, DollarSign } from "lucide-react";
import perfectBoothLogo from "@/assets/perfect-booth-logo-header.png";
import perfectBoothHero from "@/assets/perfect-booth-unit-main.png";
import perfectBoothProduct from "@/assets/perfect-booth-product.jpg";
import perfectBoothStory from "@/assets/perfect-booth-story.png";
import perfectBoothHeroBg from "@/assets/perfect-booth-hero-bg.png";
const Equipment = () => {
  const [expandedAccordion, setExpandedAccordion] = useState<string>("");
  const [avgEventRevenue, setAvgEventRevenue] = useState(800);
  const [eventsPerMonth, setEventsPerMonth] = useState(4);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Calculate values based on sliders
  const boothCostLow = 6000;
  const boothCostHigh = 8000;
  const eventsToBreakEvenLow = Math.ceil(boothCostLow / avgEventRevenue);
  const eventsToBreakEvenHigh = Math.ceil(boothCostHigh / avgEventRevenue);
  const annualRevenue = avgEventRevenue * eventsPerMonth * 12;
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-[100] w-full bg-background/95 backdrop-blur-md border-b shadow-sm transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="inline-flex items-center gap-2" aria-label="Perfect Booth Home">
            <img src={perfectBoothLogo} alt="Perfect Booth logo" className="h-12 w-auto" width="120" height="36" />
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
      <section className="relative pt-32 pb-20 overflow-hidden min-h-[600px] md:min-h-[700px]">
        <div className="absolute inset-0">
          <img src={perfectBoothHeroBg} alt="Perfect Booth photo booth unit" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl">
            <div className="mb-8 space-y-2">
              <div className="text-xl md:text-2xl font-semibold text-primary uppercase tracking-wider">
                Compact • Simple • Beautiful
              </div>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-foreground">
              Own The Perfect Booth
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Premium photo booth equipment designed for professional event companies. 
              Start or scale your photo booth business with industry-leading technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
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

      {/* Featured Review */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
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
                  <Shield className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="font-display text-2xl">Enterprise Reliability</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Commercial-grade components. The same system that we have used for 100s of events.                                          
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

            <Card className="hover-scale shadow">
              <CardHeader>
                <div className="mb-4">
                  <Headphones className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="font-display text-2xl">Comprehensive Support</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Expert guidance from setup to scale. Training resources, and business consulting to ensure your success.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="features" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-8 text-secondary-foreground">
            Unit Specs and Components
          </h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-neutral-200">
            Our photo booth is designed to be both compact and user-friendly, making it the perfect choice for anyone who wants to add excitement to their clients' events. The Perfect Booth features a sleek modern design with high-grade CNC cut plywood and 3D printed components.
          </p>
          
          <div className="max-w-5xl mx-auto mb-12">
            <img src={perfectBoothProduct} alt="Perfect Booth unit specifications and components" className="w-full rounded-lg shadow-xl" />
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Electronic Components</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>DNP QW410 Compact Printer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Surface Pro 8 Tablet, or 12.9 inch iPad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Canon M50 mark 2 DSLR camera</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Aputure Amaran COB 60X S LED Video Light</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Power cables and connective devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Apple air tag</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Perfect Booth photo booth stand</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>White Perfect Booth Case</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Light reflector</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>Soft carry case for stand and unit</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-display text-2xl">Specifications & Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Dimensions:</strong> 18.38" x 12.14" x 11"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Weight:</strong> 35 LBS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Print Quality:</strong> High-quality 4x6 or 2x6 prints</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Software Compatible:</strong> Snappic, DSLR Booth, and more</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Construction:</strong> High-grade CNC cut plywood and 3D printed components</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Customization:</strong> Different colors and finishes available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Sharing:</strong> Live email and text sharing</span>
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
            Pricing Options
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Upfront Purchase */}
            <Card className="hover-scale shadow relative">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Upfront Purchase</CardTitle>
                <CardDescription className="text-lg mt-2">Full ownership immediately</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-foreground mb-2">$8,000</div>
                  <p className="text-sm text-muted-foreground">One-time payment</p>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Production lead times are 3-6 weeks. Can be paid in two equal payments: one at the beginning of production, final payment prior to shipment.
                </p>
                <a href="#contact">
                  <Button variant="outline" className="w-full">Contact Us</Button>
                </a>
              </CardContent>
            </Card>

            {/* Get Funding */}
            <Card className="hover-scale shadow relative border-primary border-2">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="font-display text-2xl">Get Funding</CardTitle>
                <CardDescription className="text-lg mt-2">Flexible financing options</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-foreground mb-2">$8,500</div>
                  <p className="text-sm text-muted-foreground">With financing partners</p>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Qualify for payments as low as $200-500 per month depending on your terms. Or four monthly interest free payments with Affirm.
                </p>
                <a href="#contact">
                  <Button className="w-full">Learn More</Button>
                </a>
              </CardContent>
            </Card>

            {/* Negotiable Payments */}
            <Card className="hover-scale shadow relative">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Negotiable Payments</CardTitle>
                <CardDescription className="text-lg mt-2">Custom payment plans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-foreground mb-2">Custom</div>
                  <p className="text-sm text-muted-foreground">Flexible terms</p>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Multiple payment options structured over 3-7 months. For example: one payment of $3,000 and six monthly payments of $1,000.
                </p>
                <a href="#contact">
                  <Button variant="outline" className="w-full">Contact Us</Button>
                </a>
              </CardContent>
            </Card>

            {/* Rent to Own */}
            <Card className="hover-scale shadow relative">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Rent to Own</CardTitle>
                <CardDescription className="text-lg mt-2">Try before you buy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="text-4xl font-bold text-foreground mb-2">$1,000</div>
                  <p className="text-sm text-muted-foreground">Per month</p>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Only available when we have inventory. 62.5% of rental fees go towards purchase price. You own the booth after 12 months of renting.
                </p>
                <a href="#contact">
                  <Button variant="outline" className="w-full">Check Availability</Button>
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Calculate Your ROI
              </h2>
              <p className="text-xl opacity-90">
                Adjust the sliders to see your personalized revenue potential
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8">
              {/* Interactive Sliders */}
              <div className="space-y-8 mb-12">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-lg font-semibold">Average Event Revenue</label>
                    <span className="text-2xl font-bold">${avgEventRevenue.toLocaleString()}</span>
                  </div>
                  <Slider value={[avgEventRevenue]} onValueChange={value => setAvgEventRevenue(value[0])} min={400} max={2000} step={50} className="w-full" />
                  <div className="flex justify-between text-sm opacity-75 mt-2">
                    <span>$400</span>
                    <span>$2,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-lg font-semibold">Events Per Month</label>
                    <span className="text-2xl font-bold">{eventsPerMonth}</span>
                  </div>
                  <Slider value={[eventsPerMonth]} onValueChange={value => setEventsPerMonth(value[0])} min={1} max={20} step={1} className="w-full" />
                  <div className="flex justify-between text-sm opacity-75 mt-2">
                    <span>1 event</span>
                    <span>20 events</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-lg opacity-90 mb-2">Average Event Revenue</div>
                  <div className="text-4xl font-bold">${avgEventRevenue.toLocaleString()}</div>
                </div>
                <div className="text-center">
                  <div className="text-lg opacity-90 mb-2">Events to Break Even</div>
                  <div className="text-4xl font-bold">{eventsToBreakEvenLow}-{eventsToBreakEvenHigh}</div>
                  <div className="text-sm opacity-75 mt-1">
                    (~{Math.ceil(eventsToBreakEvenLow / eventsPerMonth)}-{Math.ceil(eventsToBreakEvenHigh / eventsPerMonth)} months at your rate)
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg opacity-90 mb-2">Annual Revenue Potential</div>
                  <div className="text-4xl font-bold">${(annualRevenue / 1000).toFixed(0)}k</div>
                  <div className="text-sm opacity-75 mt-1">
                    {eventsPerMonth * 12} events/year
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-sm opacity-75 mb-8 text-center">
              *Calculations based on ${boothCostLow.toLocaleString()}-${boothCostHigh.toLocaleString()} estimated booth cost range and your selected event pricing. 
              Actual costs and revenue may vary.
            </p>
            
            <div className="text-center">
              <a href="#contact">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 h-auto">
                  Request Custom Pricing
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-8 text-secondary-foreground">
            Our Story
          </h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img src={perfectBoothStory} alt="Perfect Booth journey from 2016 to present" className="w-full rounded-lg shadow-xl" />
              </div>
              <div className="space-y-6 text-muted-foreground text-lg">
                <p className="text-slate-300">
                  Back in 2016 we put together a photo booth for a family member's wedding. We made a makeshift photo booth with a camera on a table plugged into a printer.
                </p>
                <p className="text-slate-300">
                  The guests loved the photo booth and soon we had more people interested in us providing them with a photo booth at their events.
                </p>
                <p className="text-slate-300">
                  Over the years we built and purchased many different photo booth units, experimenting with countless different systems and photo booth unit designs. Always looking for ways to perfect our system and making it more beautiful, compact and easy to use.
                </p>
                
              </div>
            </div>
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
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
              </div>
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                "I purchased my first Perfect Booth six months ago and it's already paid for itself. 
                The reliability and print quality keep clients coming back. Best investment I've made."
              </p>
              <p className="font-display font-semibold text-foreground">
                Marcus Rivera
              </p>
              
            </Card>

            <Card className="p-8">
              <div className="mb-4">
                <div className="flex text-primary mb-2">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
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
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
              </div>
              <p className="text-muted-foreground italic mb-6 leading-relaxed">
                "The compact design and professional finish make setup a breeze at any venue. 
                Clients are always impressed, and the print quality is consistently outstanding."
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
            <Accordion type="single" collapsible value={expandedAccordion} onValueChange={setExpandedAccordion}>
              <AccordionItem value="financing">
                <AccordionTrigger className="text-lg font-display text-left text-white">
                  Do you offer financing options?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, we partner with several financing companies to offer flexible payment plans. 
                  We can help you get approved with payments as low as $300-500/month depending on your credit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="shipping">
                <AccordionTrigger className="text-lg font-display text-left text-white">
                  How is the booth shipped and what about setup?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We ship fully assembled and tested via freight carrier. Local customers can arrange pickup. 
                  The booth is ready to use upon arrival - just plug in and power on. Setup at events takes 
                  10-15 minutes with our quick-release system.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="supplies">
                <AccordionTrigger className="text-lg font-display text-left text-white">
                  Where do I purchase printer paper and supplies?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We use industry-standard DNP printer media available from B&H Photo and Adorama, 
                  both excellent suppliers for printer paper and supplies. Average cost per 4x6 print 
                  is $0.30-0.40 including paper and ink.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="software">
                <AccordionTrigger className="text-lg font-display text-left text-white">
                  What software is included?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Software is not included with the booth purchase and requires a separate subscription. 
                  We recommend using DSLR Booth software, which features unlimited custom templates, 
                  social sharing, email/SMS delivery, data collection, analytics, and remote monitoring.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="bulk">
                <AccordionTrigger className="text-lg font-display text-left text-white">
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
            
            <div 
              data-bloom-form-id="pv5d6qr389w48" 
              style={{ width: '100%' }}
              dangerouslySetInnerHTML={{
                __html: `<script>window.bloomSettings={userId:"pk37oy04o9qwz",profileId:"38kd5llr87wvr"};if(void 0===bloomScript){var bloomScript=document.createElement("script");bloomScript.async=!0,fetch("https://code.bloom.io/version?t="+Date.now()).then(function(t){return t.text()}).then(function(t){bloomScript.src="https://code.bloom.io/widget.js?v="+t,document.head.appendChild(bloomScript)})}</script>`
              }}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img src={perfectBoothLogo} alt="Perfect Booth logo" className="h-8 w-auto" />
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
    </div>;
};
export default Equipment;