import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaPalette, FaHeart, FaStar, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";
import { useState, useEffect } from "react";
import perfectBoothLogo from "@/assets/perfect-booth-logo-header.png";

const reviews = [
  {
    name: "Max Barenberg",
    text: "Awesome booth! Everyone at the party was raving. Worth the money for sure!!",
    shortText: "Awesome booth! Everyone at the party was raving."
  },
  {
    name: "Susan Vandervlugt",
    text: "Super friendly staff and cute set up at the wedding this weekend! Love the vibe!",
    shortText: "Super friendly staff and cute set up! Love the vibe!"
  },
  {
    name: "Katie Yoshioka",
    text: "I hired Perfect Booth for my wedding reception and it was amazing! Their pricing was very fair and very customizable based on time which was so nice! They worked with me to design the photo strip and easily made changes based on my preferences. The product itself was clear, beautiful, and so much fun! 10/10 would recommend using them for ANY event.",
    shortText: "Amazing! Fair pricing, customizable, and so much fun! 10/10 recommend for any event."
  },
  {
    name: "Jenny Payne",
    text: "Such a great team! Kids had a blast and perfect booth was PERFECT! Great communication and professional.",
    shortText: "Great team! Kids had a blast. Perfect communication and professional."
  }
];
const Wedding = () => {
  const [expandedAccordion, setExpandedAccordion] = useState<string>("");
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const weddingGalleryImages = ["/lovable-uploads/d14d2b05-c6aa-4cd8-a774-828b6cac6ac8.png"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
        setIsVisible(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://rvmediahost.s3.us-west-2.amazonaws.com/pb.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-secondary"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              Give Your Wedding Guests an Experience They'll Never Forget
            </h1>
            <p className="text-xl md:text-2xl font-sans mb-12 max-w-3xl mx-auto opacity-90">
              Professional photo experiences that entertain your guests while creating beautiful memories of your special day
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

            <div className="flex justify-center mb-8">
              <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 py-4 h-auto bg-primary hover:bg-primary/90 shadow-[var(--shadow-elev)] hover:shadow-[var(--shadow-glow)]">
                  Reserve Your Date
                </Button>
              </a>
            </div>

            <p className="text-white/90 font-sans flex items-center justify-center gap-2">
              <FaStar className="text-primary" />
              Rated by 100+ Happy Couples
            </p>
          </div>
        </div>
      </section>

      {/* Three Wedding Experiences */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-secondary-foreground">
            Two Ways to Make Your Wedding Unforgettable
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Instant Print Experience */}
            <Card className="group hover-scale">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <picture>
                  <source media="(min-width: 768px)" srcSet="/lovable-uploads/print-booth-package.png" />
                  <img src="/lovable-uploads/instant-print-booth-mobile.png" alt="Instant Print Wedding Experience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </picture>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Instant Print Booth

              </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Give your guests beautiful, high-quality prints they can take home as instant wedding favors. Our elegant setups complement your wedding aesthetic while providing endless entertainment.
                </p>
                <div className="mb-4">
                  <h4 className="font-display font-semibold text-foreground mb-2">Perfect For:</h4>
                  <p className="text-sm text-muted-foreground">Reception entertainment, Wedding Favors, cocktail hour</p>
                </div>
                <div className="p-4 bg-accent rounded-lg">
                  <h4 className="font-display font-semibold text-accent-foreground mb-1">
                </h4>
                  <p className="text-sm text-accent-foreground">
                </p>
                </div>
              </CardContent>
            </Card>

            {/* 360° Experience */}
            <Card className="group hover-scale">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img src="/lovable-uploads/27d79526-60d7-442b-a47d-587cfbfffe3f.png" alt="360° Wedding Experience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground">360 Video Booth Experience</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">Experience the magic of cinematic 360° video capture that creates stunning, shareable moments from every angle</p>
                <div className="mb-4">
                  <h4 className="font-display font-semibold text-foreground mb-2">Perfect For:</h4>
                  <p className="text-sm text-muted-foreground">First dance, grand entrance, bouquet toss, special toasts</p>
                </div>
                <div className="p-4 bg-accent rounded-lg">
                  <h4 className="font-display font-semibold text-accent-foreground mb-1">
                </h4>
                  <p className="text-sm text-accent-foreground">Creates shareable moments your guests will post about for months</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Reserve Your Date
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Wedding Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            Real Weddings, Real Magic
          </h2>
          
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {weddingGalleryImages.map((image, index) => <div key={index} className="break-inside-avoid group">
                <img src={image} alt={`Wedding moment ${index + 1}`} className="w-full rounded-lg hover-scale shadow-md hover:shadow-lg transition-shadow duration-300" />
              </div>)}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Nova Booth */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            Why Couples Choose Perfect Booth for Their Wedding
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaPalette className="text-primary text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Custom Design Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                We create custom photo print designs that perfectly match your wedding's colors, theme, and aesthetic. Every print becomes a personalized keepsake that reflects your unique celebration style.
              </p>
            </Card>

            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaConciergeBell className="text-primary text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">White-Glove Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our professional team handles every detail from setup to breakdown, ensuring a seamless experience that lets you focus entirely on celebrating your special day.
              </p>
            </Card>

            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaHeart className="text-primary text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Guest Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transform passive guests into active participants while creating lasting memories they'll treasure long after your wedding day.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Reserve Your Date
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Wedding Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            What Couples Are Saying
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "Perfect Booth transformed our reception! The 360° videos of our first dance are absolutely magical, and the setup was so elegant it looked like part of our decor. Our guests are still raving about it!"
              </blockquote>
              <cite className="text-foreground font-display font-semibold">
                Sarah & Michael, Garden Wedding at Vintage Estates
              </cite>
            </Card>

            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "Our wedding planner recommended Perfect Booth and they exceeded every expectation. The instant prints were such high quality our guests thought they were professional photos, and they made perfect wedding favors!"
              </blockquote>
              <cite className="text-foreground font-display font-semibold">
                Emma & James, Ballroom Wedding
              </cite>
            </Card>

            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "The team was incredible - they coordinated perfectly with our photographer and never disrupted our timeline. Our guests loved the glamour booth during cocktail hour, and we got the most beautiful photos!"
              </blockquote>
              <cite className="text-foreground font-display font-semibold">
                Isabella & David, Vineyard Wedding
              </cite>
            </Card>
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
              Check Availability
            </Button>
          </div>
        </div>
      </section>

      {/* Wedding FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            Everything You Need to Know About Wedding Photo Experiences
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible value={expandedAccordion} onValueChange={setExpandedAccordion}>
              <AccordionItem value="coordination">
                <AccordionTrigger className="text-lg font-display">
                  How do you coordinate with our other wedding vendors?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We work closely with your wedding planner, photographer, and venue coordinator to ensure seamless integration. Our team arrives early for setup and coordinates timing to never interfere with your ceremony, reception timeline, or other vendor activities.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="customization">
                <AccordionTrigger className="text-lg font-display">
                  Can you match our wedding colors and theme?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Absolutely! We create custom photo templates, backdrops, and print designs that perfectly match your wedding colors, theme, and aesthetic. Share your wedding palette and inspiration with us, and we'll design everything to complement your vision.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="weather">
                <AccordionTrigger className="text-lg font-display">
                  What happens if it rains at our outdoor wedding?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We come prepared with weather-resistant equipment and can quickly adapt to covered areas or tents. Our 360° and glamour experiences work beautifully indoors, and we always have backup plans to ensure your guests can still enjoy the photo experience regardless of weather.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="favors">
                <AccordionTrigger className="text-lg font-display">
                  Do the photos work as wedding favors?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes! Our instant print experience is designed specifically as an interactive wedding favor. Guests receive high-quality, personalized prints featuring your wedding details, date, and custom design elements. It's entertainment and favors in one elegant package.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="space">
                <AccordionTrigger className="text-lg font-display">
                  How much space do you need at our venue?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Space requirements vary by experience type. Instant print booths need approximately 8x8 feet, glamour setups require 10x10 feet, and 360° experiences need a 12x12 foot area. We can work with most venue layouts and provide exact specifications during your consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="booking">
                <AccordionTrigger className="text-lg font-display">
                  When should we book for our wedding date?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We recommend booking 3-6 months in advance, especially for peak wedding season (May-October). Popular dates book quickly, so early booking ensures availability and gives us time to fully customize your experience to match your wedding vision.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="setup">
                <AccordionTrigger className="text-lg font-display">
                  What's included in the setup and breakdown?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Our team handles complete setup 1-2 hours before your event begins and breakdown after your celebration ends. This includes all equipment, backdrops, props, lighting, and a professional attendant to manage the experience throughout your wedding.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="digital">
                <AccordionTrigger className="text-lg font-display">
                  Can we get both prints and digital copies?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes! All experiences include digital delivery. Guests receive instant prints or videos, and you'll receive a complete digital gallery of all photos and videos captured during your wedding within 48 hours.
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
              Ready to Create Wedding Magic?
            </h2>
            <p className="text-xl md:text-2xl font-sans mb-12 opacity-90">
              Your special day deserves an experience as beautiful as your love story. Let's make it unforgettable.
            </p>
            
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-12 py-6 h-auto mb-12 bg-primary hover:bg-primary/90 shadow-[var(--shadow-elev)] hover:shadow-[var(--shadow-glow)]">
                Reserve Your Date Now
              </Button>
            </a>
            
            <div className="space-y-4 text-white/90">
              <div className="flex items-center justify-center gap-2">
                <FaPhone className="text-primary" />
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center justify-center gap-2">
                <FaEnvelope className="text-primary" />
                <a href="mailto:weddings@novabooth.com" className="hover:text-primary transition-colors">
                  weddings@novabooth.com
                </a>
              </div>
              <p className="text-sm opacity-80">
                We respond within 2 hours and offer complimentary wedding consultations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <a href="https://instagram.com/novabooth" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="mailto:weddings@novabooth.com" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            <div className="flex items-center gap-4 text-sm opacity-80">
              <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default Wedding;