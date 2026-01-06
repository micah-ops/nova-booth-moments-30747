import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Printer, Image, Palette, Clock, Users, Share2, Sparkles, Camera } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import perfectBoothLogo from "@/assets/perfect-booth-logo-header.png";
const InstantPrintBooth = () => {
  const [expandedAccordion, setExpandedAccordion] = useState<string>("");
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
  const galleryImages = ["/lovable-uploads/print-booth-package.png", "/lovable-uploads/wedding-photo-strips.png", "/lovable-uploads/instant-print-booth-desktop.jpg", "/lovable-uploads/d14d2b05-c6aa-4cd8-a774-828b6cac6ac8.png"];
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-[100] w-full bg-background/95 backdrop-blur-md border-b shadow-sm transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="inline-flex items-center gap-2" aria-label="Perfect Booth Home">
            <img src={perfectBoothLogo} alt="Perfect Booth logo" className="h-12 w-auto" width="120" height="36" />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#options" className="hover:text-primary transition-colors">Print Options</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
          <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
            <Button className="hidden md:inline-flex">Get Quote</Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src="/lovable-uploads/print-booth-package.png" alt="Instant Print Photo Booth setup with prints" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Printer className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">High-Quality Instant Prints</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Instant Print<br />Photo Booth
            </h1>
            <p className="text-xl md:text-2xl font-sans mb-8 max-w-3xl mx-auto opacity-90">
              Give your guests a tangible memory they can take home instantly. Beautiful, high-quality photo prints in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 py-4 h-auto bg-primary hover:bg-primary/90">
                  Get Free Quote
                </Button>
              </a>
              <a href="#features">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-white/30 text-white bg-secondary">
                  Learn More
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary" />)}
              <span className="ml-2 opacity-90">Trusted by 100+ Happy Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Special */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-6 text-foreground">Why Choose Prints?</h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            In a world of digital everything, there's something magical about holding a physical photo in your hands. Our instant print booth creates lasting keepsakes your guests will treasure.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Printer className="text-primary h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">High-Quality Prints</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our commercial-grade dye-sublimation printers produce stunning, smudge-proof prints that last a lifetime. No inkjet blur or fading here.
              </p>
            </Card>

            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="text-primary h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Prints in Seconds</h3>
              <p className="text-muted-foreground leading-relaxed">No waiting around! Photos print in just 29 seconds, keeping the line moving and your guests entertained all night long.</p>
            </Card>

            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="text-primary h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Perfect for Groups</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our booth accommodates groups of all sizes. Watch as friends and family squeeze in for unforgettable group shots.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Print Options */}
      <section id="options" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-6 text-secondary-foreground">
            Print Format Options
          </h2>
          <p className="text-xl text-secondary-foreground/80 text-center max-w-3xl mx-auto mb-16">
            Choose the perfect print format for your event. Each option is fully customizable with your branding, colors, and design elements.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 2x6 Photo Strips */}
            <Card className="overflow-hidden hover-scale">
              <div className="aspect-[3/4] overflow-hidden">
                <img src="/lovable-uploads/wedding-photo-strips.png" alt="2x6 photo strip examples" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground">2x6 Photo Strips</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">The classic photo booth experience! 3 photos arranged vertically on a strip. perfect for slipping into wallets, sticking on fridges, or tucking into scrapbooks. </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>3 photos per strip</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Each print session creates two identical strips, perfect for large groups. </span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Custom graphics & text</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 4x6 Prints */}
            <Card className="overflow-hidden hover-scale">
              <div className="aspect-[3/4] overflow-hidden">
                <img src="/lovable-uploads/d14d2b05-c6aa-4cd8-a774-828b6cac6ac8.png" alt="4x6 postcard print examples" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground">4x6 Postcard Prints</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">A larger format that makes a bigger statement. Perfect for corporate events, branded activations, or when you want your photos to really stand out In a larger format. </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Single or multi-photo layouts</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>More space for branding</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>Larger image size</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-6 text-foreground">
            Fully Customizable Experience
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Every aspect of your photo booth experience can be tailored to match your event perfectly.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover-scale">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Palette className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-foreground">Custom Print Design</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                We design custom templates matching your event colors, theme, and branding. Includes your logo, date, hashtags, and any graphics you want.
              </p>
            </Card>

            <Card className="p-6 hover-scale">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Image className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-foreground">Backdrop Options</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Choose from our selection of elegant backdrops or request a custom design. We offer sequin, fabric, and printed options.
              </p>
            </Card>

            <Card className="p-6 hover-scale">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-foreground">Props & Accessories</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fun props included with every rental! From silly glasses to elegant signs, we bring the accessories that make photos memorable.
              </p>
            </Card>

            <Card className="p-6 hover-scale">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Share2 className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-foreground">Digital Sharing</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Guests can also receive digital copies via text or email instantly. Plus, you get a complete online gallery after your event.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Design Your Experience
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            See It In Action
          </h2>
          
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => <div key={index} className="break-inside-avoid group">
                <img src={image} alt={`Instant print booth example ${index + 1}`} className="w-full rounded-lg hover-scale shadow-md hover:shadow-lg transition-shadow duration-300" />
              </div>)}
          </div>
        </div>
      </section>

      {/* The Experience */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-secondary-foreground">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">1</div>
              <h3 className="font-display font-bold mb-2 text-secondary-foreground">Step Up</h3>
              <p className="text-secondary-foreground/70 text-sm">Guests approach the booth and our attendant helps them get ready</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">2</div>
              <h3 className="font-display font-bold mb-2 text-secondary-foreground">Strike a Pose</h3>
              <p className="text-secondary-foreground/70 text-sm">Use our props, grab friends, and smile for a series of fun photos</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">3</div>
              <h3 className="font-display font-bold mb-2 text-secondary-foreground">Print Instantly</h3>
              <p className="text-secondary-foreground/70 text-sm">Your custom-designed prints emerge in seconds</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">4</div>
              <h3 className="font-display font-bold mb-2 text-secondary-foreground">Share & Keep</h3>
              <p className="text-secondary-foreground/70 text-sm">Take your prints home and get digital copies sent to your phone</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            What's Included
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Standard Package Includes:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Professional photo booth setup with sleek modern design</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Unlimited photo sessions during your rental period</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom-designed print templates</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>On-site attendant for full-service experience</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Fun props and accessories</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Also Included:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Professional setup and breakdown</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Digital copies via text/email for every guest</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Online gallery with all photos post-event</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Backdrop of your choice</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Premium lighting for flattering photos</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="text-center mt-12">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Check Availability
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible value={expandedAccordion} onValueChange={setExpandedAccordion}>
              <AccordionItem value="print-quality">
                <AccordionTrigger className="text-lg font-display">
                  How is the print quality?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We use commercial-grade dye-sublimation printers that produce lab-quality prints. The prints are smudge-proof, water-resistant, and won't fade over time like inkjet prints. They're the same quality you'd get from a professional photo lab.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="print-speed">
                <AccordionTrigger className="text-lg font-display">
                  How fast do the photos print?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Our printers produce finished photos in approximately 8-12 seconds. This keeps the experience moving quickly so more guests can enjoy the booth throughout your event.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="unlimited-prints">
                <AccordionTrigger className="text-lg font-display">
                  Are prints really unlimited?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes! During your rental period, guests can take as many photos as they want and each session produces prints. There's no cap on the number of sessions or prints.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="customization">
                <AccordionTrigger className="text-lg font-display">
                  How do I customize the print design?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  After booking, we'll work with you to create a custom template. Share your event colors, logo, date, and any other design elements you'd like included. We'll send you a proof to approve before your event.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="space-needed">
                <AccordionTrigger className="text-lg font-display">
                  How much space does the booth need?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We recommend a minimum of 8' x 8' for the booth, backdrop, and comfortable photo-taking space. We can work with slightly smaller spaces if needed—just let us know your venue dimensions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="outdoor-events">
                <AccordionTrigger className="text-lg font-display">
                  Can you set up outdoors?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, we can set up outdoors as long as there's a covered area to protect the equipment from direct sun and weather. A tent or pavilion works perfectly.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-secondary-foreground">
            Ready to Create Lasting Memories?
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Book your instant print photo booth today and give your guests an experience they'll never forget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Get Your Free Quote
              </Button>
            </a>
            <a href="tel:5035550123">
              
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t">
        <div className="container mx-auto px-4 text-center">
          <a href="/" className="inline-block mb-4">
            <img src={perfectBoothLogo} alt="Perfect Booth" className="h-10 w-auto mx-auto" />
          </a>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Perfect Booth. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};
export default InstantPrintBooth;