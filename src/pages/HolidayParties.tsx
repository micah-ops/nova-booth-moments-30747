import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaPalette, FaGift, FaStar, FaSnowflake, FaUsers, FaCamera } from "react-icons/fa";
import { useState, useEffect } from "react";

const reviews = [{
  name: "Jennifer K.",
  text: "Perfect Booth made our company holiday party unforgettable! The custom holiday-themed prints were a huge hit, and guests loved taking home festive photos. Professional, fun, and perfectly executed!",
  shortText: "Made our holiday party unforgettable! A huge hit!"
}, {
  name: "David R.",
  text: "We hired Perfect Booth for our family's annual holiday gathering and it was the best decision. Kids and grandparents alike had a blast with the props and prints. Already booking for next year!",
  shortText: "Kids and grandparents alike had a blast! Already booking for next year!"
}, {
  name: "Maria S.",
  text: "Our office holiday party needed something special this year and Perfect Booth delivered. The team was incredibly professional and the 360 video booth created so many memorable moments. Highly recommend!",
  shortText: "Incredibly professional and created so many memorable moments!"
}];

const HolidayParties = () => {
  const [expandedAccordion, setExpandedAccordion] = useState<string>("");
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const holidayGalleryImages = [
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
              Make Your Holiday Party the Most Memorable Yet
            </h1>
            <p className="text-xl md:text-2xl font-sans mb-12 max-w-3xl mx-auto opacity-90">
              Festive photo booth experiences that bring holiday cheer to every guest and create lasting memories of the season
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
                  Get Holiday Party Quote
                </Button>
              </a>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('holiday-packages')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              })} className="text-lg px-8 py-4 h-auto border-white/30 bg-white/20 hover:bg-white/30 text-primary-foreground">
                View Party Packages
              </Button>
            </div>

            <p className="text-white/90 font-sans flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary" />)}
              Trusted by 300+ Holiday Events
            </p>
          </div>
        </div>
      </section>

      {/* Two Holiday Experiences */}
      <section id="holiday-packages" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-secondary-foreground">
            Two Ways to Spread Holiday Cheer
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Instant Print Experience */}
            <Card className="group hover-scale">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <picture>
                  <source media="(min-width: 768px)" srcSet="/lovable-uploads/print-booth-package.png" />
                  <img src="/lovable-uploads/instant-print-booth-mobile.png" alt="Instant Print Holiday Experience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </picture>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Instant Print Booth</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Give guests festive, high-quality prints they can take home as holiday keepsakes. Custom holiday designs, seasonal props, and instant memories that capture the spirit of the season!
                </p>
              </CardContent>
            </Card>

            {/* 360° Experience */}
            <Card className="group hover-scale">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img src="/lovable-uploads/27d79526-60d7-442b-a47d-587cfbfffe3f.png" alt="360° Holiday Experience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground">360 Video Booth Experience</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Create show-stopping holiday moments with our cinematic 360° video capture. Perfect for capturing group celebrations, dance floor fun, and viral-worthy holiday content!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Book Your Holiday Party
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Holiday Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            Real Holiday Celebrations
          </h2>
          
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {holidayGalleryImages.map((image, index) => (
              <div key={index} className="break-inside-avoid group">
                <img src={image} alt={`Holiday party moment ${index + 1}`} className="w-full rounded-lg hover-scale shadow-md hover:shadow-lg transition-shadow duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-secondary text-destructive-foreground">
                Check Holiday Availability
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Perfect Booth for Holidays */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            Why Holiday Hosts Choose Perfect Booth
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaSnowflake className="text-primary text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Festive Custom Designs</h3>
              <p className="text-muted-foreground leading-relaxed">
                We create custom holiday-themed photo templates featuring seasonal designs, your event details, and festive touches. Every print becomes a treasured holiday keepsake.
              </p>
            </Card>

            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaUsers className="text-primary text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Entertainment for Everyone</h3>
              <p className="text-muted-foreground leading-relaxed">
                From family gatherings to office parties, our booths bring people together. Holiday props, group shots, and interactive experiences that create connections and laughter!
              </p>
            </Card>

            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaGift className="text-primary text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Perfect Holiday Favors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Skip the generic party favors! Guests leave with personalized holiday prints or digital videos they'll actually cherish and share with family and friends.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Plan Your Holiday Party
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Holiday Testimonials */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-slate-300">
            What Holiday Hosts Are Saying
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "Perfect Booth made our company holiday party unforgettable! The custom holiday-themed prints were a huge hit, and guests loved taking home festive photos. Professional, fun, and perfectly executed!"
              </blockquote>
              <cite className="text-foreground font-display font-semibold">
                Jennifer K., Office Holiday Party
              </cite>
            </Card>

            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "We hired Perfect Booth for our family's annual holiday gathering and it was the best decision. Kids and grandparents alike had a blast with the props and prints. Already booking for next year!"
              </blockquote>
              <cite className="text-foreground font-display font-semibold">
                David R., Family Holiday Gathering
              </cite>
            </Card>

            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "Our office holiday party needed something special this year and Perfect Booth delivered. The team was incredibly professional and the 360 video booth created so many memorable moments. Highly recommend!"
              </blockquote>
              <cite className="text-foreground font-display font-semibold">
                Maria S., Corporate Holiday Event
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

      {/* Holiday FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            Everything You Need to Know About Holiday Photo Booths
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible value={expandedAccordion} onValueChange={setExpandedAccordion}>
              <AccordionItem value="themes">
                <AccordionTrigger className="text-lg font-display">
                  Do you have holiday-specific props and themes?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Absolutely! We have an extensive collection of festive props including Santa hats, ugly sweater signs, holiday frames, and seasonal accessories. We can also create custom props to match your specific holiday theme or company branding.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="customization">
                <AccordionTrigger className="text-lg font-display">
                  Can you customize prints for our holiday event?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes! We create custom holiday-themed photo templates featuring festive designs, your event name, date, and company logo if desired. Whether it's a winter wonderland theme or ugly sweater party, we'll match your vision perfectly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="venue">
                <AccordionTrigger className="text-lg font-display">
                  Can you set up at any holiday venue?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We can set up almost anywhere - office spaces, banquet halls, restaurants, private homes, community centers, and more. We just need a flat surface, standard electrical outlet, and enough space for guests to enjoy the experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="duration">
                <AccordionTrigger className="text-lg font-display">
                  How long should I book for my holiday party?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  For most holiday parties, 2-4 hours is ideal depending on guest count. Office parties typically benefit from 3-4 hours to ensure everyone gets multiple turns. We'll help you determine the ideal duration based on your event schedule.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="booking">
                <AccordionTrigger className="text-lg font-display">
                  How far in advance should I book for the holidays?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  The holiday season is our busiest time! We recommend booking 6-10 weeks in advance for November and December events. Popular dates fill up quickly, so early booking is essential to secure your preferred date.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="attendant">
                <AccordionTrigger className="text-lg font-display">
                  Is there someone to help run the booth?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Every booking includes a friendly, professional attendant who manages the booth and ensures everyone has a great time. They'll help with props, encourage participation, and keep the line moving smoothly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="digital">
                <AccordionTrigger className="text-lg font-display">
                  Do we get digital copies of everything?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes! Guests can instantly share photos via text or email, and you'll receive a complete digital gallery after the event. All 360° videos are delivered digitally for easy sharing on social media.
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
              Ready to Make This Holiday Season Unforgettable?
            </h2>
            <p className="text-xl md:text-2xl font-sans mb-12 opacity-90">
              Create magical holiday memories that your guests will cherish for years to come. Let's spread some holiday cheer together!
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-12 py-6 h-auto bg-primary hover:bg-primary/90 shadow-[var(--shadow-elev)] hover:shadow-[var(--shadow-glow)]">
                  Get Your Holiday Party Quote Today!
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
              <a href="mailto:parties@perfectbooth.com" className="hover:text-primary transition-colors">
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

export default HolidayParties;
