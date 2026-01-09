import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaPalette, FaHeart, FaStar, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaConciergeBell } from "react-icons/fa";
import { useState, useEffect } from "react";
import perfectBoothLogo from "@/assets/perfect-booth-logo-header.png";
const reviews = [{
  name: "Alice Cadman",
  text: "I used Perfect Booth for my wedding reception. They were so easy to work with, very professional, great pricing, and lovely photos. The guests loved using the Photo Booth. The attendant was great. Highly recommend. Worth it!",
  shortText: "So easy to work with, very professional, great pricing. Worth it!"
}, {
  name: "Katie Yoshioka",
  text: "I hired Perfect Booth for my wedding reception and it was amazing! Their pricing was very fair and very customizable based on time which was so nice! They worked with me to design the photo strip and easily made changes based on my preferences. The product itself was clear, beautiful, and so much fun! 10/10 would recommend using them for ANY event.",
  shortText: "Amazing! Fair pricing, customizable, and so much fun! 10/10 recommend!"
}, {
  name: "Susan Vandervlugt",
  text: "Super friendly staff and cute set up at the wedding this weekend! Love the vibe!",
  shortText: "Super friendly staff and cute set up! Love the vibe!"
}, {
  name: "Patty Wu",
  text: "Our guests at our wedding had a lot of fun with the photo booth! Very professional and quick to respond. Micah was very helpful in answering our questions and provided beautiful designs for our printouts. Highly recommend!",
  shortText: "Very professional and quick to respond. Beautiful designs. Highly recommend!"
}, {
  name: "Misti Mott",
  text: "Perfect Booth was a hit at my daughter's wedding. We had people show up early and more people show up than expected and our Perfect Booth attendant helped keep people busy and entertained. The Photo Booth actually helped save the day!",
  shortText: "A hit at my daughter's wedding! The Photo Booth helped save the day!"
}];
const Wedding = () => {
  const [expandedAccordion, setExpandedAccordion] = useState<string>("");
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const weddingGalleryImages = ["/lovable-uploads/d14d2b05-c6aa-4cd8-a774-828b6cac6ac8.png", "/lovable-uploads/wedding-photo-strips.png", "/lovable-uploads/wedding-booth-gold.png", "/lovable-uploads/wedding-booth-sunset.png"];
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
  return <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="https://rvmediahost.s3.us-west-2.amazonaws.com/pb.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-secondary/70"></div>
        
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
                <Button size="lg" className="text-lg px-8 py-4 h-auto bg-primary hover:bg-primary/90 shadow-[var(--shadow-elev)] hover:shadow-[var(--shadow-glow)]">Get Free Quote</Button>
              </a>
            </div>

            <p className="text-white/90 font-sans flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary" />)}
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
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-secondary text-primary-foreground">
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
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-slate-300">
            What Couples Are Saying
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "I used Perfect Booth for my wedding reception. They were so easy to work with, very professional, great pricing, and lovely photos. The guests loved using the Photo Booth. The attendant was great. Highly recommend. Worth it!"
              </blockquote>
              <cite className="text-foreground font-display font-semibold">
                Alice C.
              </cite>
            </Card>

            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "I hired Perfect Booth for my wedding reception and it was amazing! Their pricing was very fair and very customizable based on time which was so nice! They worked with me to design the photo strip and easily made changes based on my preferences. The product itself was clear, beautiful, and so much fun! 10/10 would recommend using them for ANY event."
              </blockquote>
              <cite className="text-foreground font-display font-semibold">
                Katie Y.
              </cite>
            </Card>

            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "Our guests at our wedding had a lot of fun with the photo booth! Very professional and quick to respond. Micah was very helpful in answering our questions and provided beautiful designs for our printouts. Highly recommend!"
              </blockquote>
              <cite className="text-foreground font-display font-semibold">
                Patty W.
              </cite>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-12">
            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "Super friendly staff and cute set up at the wedding this weekend! Love the vibe!"
              </blockquote>
              <cite className="text-foreground font-display font-semibold">
                Susan V.
              </cite>
            </Card>

            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "Perfect Booth was a hit at my daughter's wedding. We had people show up early and more people show up than expected and our Perfect Booth attendant helped keep people busy and entertained. The Photo Booth actually helped save the day!"
              </blockquote>
              <cite className="text-foreground font-display font-semibold">
                Misti M.
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
                  We work with your venue coordinator or wedding planner to ensure seamless integration. Our team arrives about an hour before our scheduled start time to get set up and coordinates timing to never interfere with your ceremony, reception timeline, or other vendor activities.
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
                  We need a covered area to move our equipment to if it starts to rain. If no covered area is available, we will need to pack up the equipment to protect it from weather damage.
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
                  Space requirements vary by experience type. Instant print booths need approximately 8x8 feet and 360° experiences need a 12x12 foot area. We can work with most venue layouts and provide exact specifications during your consultation.
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
                  Our team arrives about an hour before our scheduled start time to handle complete setup and stays through breakdown after your celebration ends. This includes all equipment, backdrops, props, lighting, and a professional attendant to manage the experience throughout your wedding.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="digital">
                <AccordionTrigger className="text-lg font-display">
                  Can we get both prints and digital copies?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes! All experiences include digital delivery. Guests receive instant prints or videos, and you'll receive a complete digital gallery of all photos and videos captured during your wedding.
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
              <a href="mailto:contact@perfectbooth.com" className="hover:text-primary transition-colors">
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