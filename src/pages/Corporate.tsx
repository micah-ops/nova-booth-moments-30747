import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaPalette, FaStar, FaBriefcase, FaUsers, FaAward, FaHandshake } from "react-icons/fa";
import { useState, useEffect } from "react";

const reviews = [{
  name: "Sarah T., HR Director",
  text: "Perfect Booth has been our go-to for company events for the past two years. Their professionalism is unmatched, and our employees absolutely love the photo experiences. The custom branding options really elevate our corporate events.",
  shortText: "Professionalism is unmatched. Employees absolutely love it!"
}, {
  name: "Michael L., Event Manager",
  text: "We needed something special for our product launch and Perfect Booth delivered beyond expectations. The 360 booth was a showstopper and generated tons of social media buzz for our brand. Highly recommend for any corporate event!",
  shortText: "A showstopper that generated tons of social media buzz!"
}, {
  name: "Amanda W., Marketing VP",
  text: "From trade shows to team celebrations, Perfect Booth consistently delivers quality and reliability. Their ability to incorporate our branding seamlessly into every photo makes them invaluable for our marketing efforts.",
  shortText: "Consistently delivers quality and reliability. Invaluable for marketing!"
}];

const Corporate = () => {
  const [expandedAccordion, setExpandedAccordion] = useState<string>("");
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const corporateGalleryImages = [
    "/lovable-uploads/d14d2b05-c6aa-4cd8-a774-828b6cac6ac8.png",
    "/lovable-uploads/27d79526-60d7-442b-a47d-587cfbfffe3f.png",
    "/lovable-uploads/print-booth-package.png",
    "/lovable-uploads/instant-print-booth-mobile.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentReview(prev => (prev + 1) % reviews.length);
        setIsVisible(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://rvmediahost.s3.us-west-2.amazonaws.com/pb.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-secondary/70"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Elevate Your Corporate Events with Memorable Experiences
            </h1>
            <p className="text-xl md:text-2xl font-sans mb-12 max-w-3xl mx-auto opacity-90">
              Professional photo booth experiences that enhance brand engagement, boost employee morale, and create lasting impressions at every corporate event
            </p>

            {/* Rotating Review Card */}
            <Card className={`max-w-4xl mx-auto mb-8 md:mb-12 bg-white/10 backdrop-blur-md border-white/20 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <CardContent className="p-6 md:p-8">
                <div className="flex justify-center mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-base md:text-xl" />)}
                </div>
                <blockquote className="text-base md:text-lg lg:text-xl font-sans italic mb-3 md:mb-4 text-white">
                  <span className="md:hidden">"{reviews[currentReview].shortText}"</span>
                  <span className="hidden md:inline">"{reviews[currentReview].text}"</span>
                </blockquote>
                <cite className="text-white/80 font-sans text-sm md:text-base">- {reviews[currentReview].name}</cite>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 py-4 h-auto bg-primary hover:bg-primary/90 shadow-[var(--shadow-elev)] hover:shadow-[var(--shadow-glow)]">
                  Get Corporate Quote
                </Button>
              </a>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('corporate-packages')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              })} className="text-lg px-8 py-4 h-auto border-white/30 bg-white/20 hover:bg-white/30 text-primary-foreground">
                View Corporate Packages
              </Button>
            </div>

            <p className="text-white/90 font-sans flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary" />)}
              Trusted by 200+ Companies & Organizations
            </p>
          </div>
        </div>
      </section>

      {/* Two Corporate Experiences */}
      <section id="corporate-packages" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-secondary-foreground">
            Two Ways to Elevate Your Corporate Event
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Instant Print Experience */}
            <Card className="group hover-scale">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <picture>
                  <source media="(min-width: 768px)" srcSet="/lovable-uploads/print-booth-package.png" />
                  <img src="/lovable-uploads/instant-print-booth-mobile.png" alt="Instant Print Corporate Experience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </picture>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Instant Print Booth</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Create branded photo experiences that reinforce your company identity. Custom-designed prints featuring your logo, event messaging, and corporate colors make every photo a marketing touchpoint.
                </p>
              </CardContent>
            </Card>

            {/* 360° Experience */}
            <Card className="group hover-scale">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img src="/lovable-uploads/27d79526-60d7-442b-a47d-587cfbfffe3f.png" alt="360° Corporate Experience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground">360 Video Booth Experience</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Generate social media buzz with our cinematic 360° video capture. Perfect for product launches, trade shows, and any event where you want to create shareable, viral-worthy branded content!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Book Your Corporate Event
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Corporate Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            Corporate Events We've Powered
          </h2>
          
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {corporateGalleryImages.map((image, index) => (
              <div key={index} className="break-inside-avoid group">
                <img src={image} alt={`Corporate event moment ${index + 1}`} className="w-full rounded-lg hover-scale shadow-md hover:shadow-lg transition-shadow duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-secondary text-destructive-foreground">
                Check Corporate Availability
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Perfect Booth for Corporate */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            Why Companies Choose Perfect Booth
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaBriefcase className="text-primary text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Full Brand Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every element customized to your brand - from photo templates and backdrops to digital galleries and social sharing. Your logo, colors, and messaging featured prominently.
              </p>
            </Card>

            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaUsers className="text-primary text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Team Building & Engagement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Break the ice at company events and foster connections between colleagues. Our booths create shared experiences that bring teams together and boost morale.
              </p>
            </Card>

            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaAward className="text-primary text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Professional Execution</h3>
              <p className="text-muted-foreground leading-relaxed">
                We understand corporate standards. Our team arrives early, dresses professionally, and ensures flawless operation. Reliable, polished, and always on brand.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Plan Your Corporate Event
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Corporate Testimonials */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-slate-300">
            What Corporate Clients Are Saying
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "Perfect Booth has been our go-to for company events for the past two years. Their professionalism is unmatched, and our employees absolutely love the photo experiences. The custom branding options really elevate our corporate events."
              </blockquote>
              <cite className="text-foreground font-display font-semibold">
                Sarah T., HR Director
              </cite>
            </Card>

            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "We needed something special for our product launch and Perfect Booth delivered beyond expectations. The 360 booth was a showstopper and generated tons of social media buzz for our brand. Highly recommend for any corporate event!"
              </blockquote>
              <cite className="text-foreground font-display font-semibold">
                Michael L., Event Manager
              </cite>
            </Card>

            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "From trade shows to team celebrations, Perfect Booth consistently delivers quality and reliability. Their ability to incorporate our branding seamlessly into every photo makes them invaluable for our marketing efforts."
              </blockquote>
              <cite className="text-foreground font-display font-semibold">
                Amanda W., Marketing VP
              </cite>
            </Card>
          </div>

          <div className="text-center">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-white/30 text-foreground bg-primary">
                Check Availability
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Corporate FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            Everything You Need to Know About Corporate Photo Booths
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible value={expandedAccordion} onValueChange={setExpandedAccordion}>
              <AccordionItem value="branding">
                <AccordionTrigger className="text-lg font-display">
                  How can you incorporate our company branding?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We offer comprehensive branding options including custom photo templates with your logo, branded backdrops, custom start screens, branded digital galleries, and social sharing with your company handles and hashtags. Share your brand guidelines and we'll create a cohesive branded experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="events">
                <AccordionTrigger className="text-lg font-display">
                  What types of corporate events do you service?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We service all corporate events including product launches, trade shows, company parties, team building events, holiday celebrations, award ceremonies, conferences, grand openings, client appreciation events, and more. Any event where you want to create engagement and memorable experiences.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="venue">
                <AccordionTrigger className="text-lg font-display">
                  Can you set up at any corporate venue?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We can set up in conference centers, hotels, office buildings, outdoor venues, warehouses, restaurants, and more. We just need a flat surface, standard electrical outlet, and adequate space. We coordinate with venue management to ensure smooth setup and breakdown.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="data">
                <AccordionTrigger className="text-lg font-display">
                  Can we collect guest data and emails?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes! Our digital sharing system can be configured to capture guest emails and contact information when they share their photos. This is perfect for lead generation at trade shows or building your company's contact database at events.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="duration">
                <AccordionTrigger className="text-lg font-display">
                  How long should we book for corporate events?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Duration depends on event type and guest count. Trade shows often book full-day coverage, while company parties typically need 3-4 hours. We'll help you determine the ideal duration based on your specific event goals and schedule.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="attendant">
                <AccordionTrigger className="text-lg font-display">
                  Are your attendants dressed professionally?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Absolutely. Our team understands corporate environments and always arrives in professional business or business-casual attire. We can also match your event's dress code if specified in advance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="digital">
                <AccordionTrigger className="text-lg font-display">
                  What digital assets do we receive after the event?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  You receive a complete digital gallery of all photos and videos, analytics on sharing and engagement, contact data if collected, and high-resolution files suitable for marketing use. All content is delivered within 24-48 hours of your event.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Elevate Your Next Corporate Event?
            </h2>
            <p className="text-xl md:text-2xl font-sans mb-12 opacity-90">
              From team celebrations to client-facing events, create experiences that reinforce your brand and leave lasting impressions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-12 py-6 h-auto bg-primary hover:bg-primary/90 shadow-[var(--shadow-elev)] hover:shadow-[var(--shadow-glow)]">
                  Get Your Corporate Quote Today!
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/perfectbooth" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="mailto:corporate@perfectbooth.com" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm opacity-80">
              <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Corporate;
