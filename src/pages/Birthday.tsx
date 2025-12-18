import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FaPalette, FaGift, FaStar, FaBirthdayCake, FaMusic, FaCamera } from "react-icons/fa";
import { useState, useEffect } from "react";
import perfectBoothLogo from "@/assets/perfect-booth-logo-header.png";
const reviews = [{
  name: "Amanda Rodriguez",
  text: "Perfect Booth made my daughter's sweet 16 absolutely unforgettable! The kids were obsessed with the 360 booth and we have so many amazing videos to look back on. Best birthday investment ever!",
  shortText: "Made my daughter's sweet 16 unforgettable! Best birthday investment ever!"
}, {
  name: "Marcus Chen",
  text: "Hired them for my 40th birthday bash and it was the highlight of the night! Everyone from kids to grandparents had a blast. The instant prints were such a hit - guests kept going back for more!",
  shortText: "Highlight of my 40th! Everyone from kids to grandparents had a blast!"
}, {
  name: "Jennifer Thompson",
  text: "We've used Perfect Booth for three of our kids' birthdays now. They always deliver amazing quality and the staff is so great with the kids. Can't recommend them enough for birthday parties!",
  shortText: "Used them for three kids' birthdays. Amazing quality every time!"
}, {
  name: "David Patel",
  text: "Threw a surprise 50th for my wife and the photo booth was the perfect entertainment. Customized prints with her photo on them - she was so touched! Professional service from start to finish.",
  shortText: "Perfect entertainment for my wife's surprise 50th! Professional service."
}];
const Birthday = () => {
  const [expandedAccordion, setExpandedAccordion] = useState<string>("");
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const birthdayGalleryImages = ["/lovable-uploads/d14d2b05-c6aa-4cd8-a774-828b6cac6ac8.png", "/lovable-uploads/27d79526-60d7-442b-a47d-587cfbfffe3f.png", "/lovable-uploads/print-booth-package.png", "/lovable-uploads/instant-print-booth-mobile.png"];
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
              Make Their Birthday Party the Best One Yet
            </h1>
            <p className="text-xl md:text-2xl font-sans mb-12 max-w-3xl mx-auto opacity-90">
              Photo booth experiences that turn any birthday celebration into an unforgettable event for guests of all ages
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
                  Get Birthday Quote
                </Button>
              </a>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 h-auto border-white/30 bg-white/20 text-foreground hover:bg-white/30" onClick={() => document.getElementById('party-packages')?.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            })}>
                View Party Packages
              </Button>
            </div>

            <p className="text-white/90 font-sans flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary" />)}
              Rated by 200+ Happy Party Hosts
            </p>
          </div>
        </div>
      </section>

      {/* Two Birthday Experiences */}
      <section id="party-packages" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-secondary-foreground">
            Two Ways to Make Their Birthday Unforgettable
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Instant Print Experience */}
            <Card className="group hover-scale">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <picture>
                  <source media="(min-width: 768px)" srcSet="/lovable-uploads/print-booth-package.png" />
                  <img src="/lovable-uploads/instant-print-booth-mobile.png" alt="Instant Print Birthday Experience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </picture>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Instant Print Booth</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Give party guests fun, high-quality prints they can take home as instant party favors. Perfect for kids and adults alike with themed props and customized photo strips featuring the birthday star!
                </p>
              </CardContent>
            </Card>

            {/* 360° Experience */}
            <Card className="group hover-scale">
              <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                <img src="/lovable-uploads/27d79526-60d7-442b-a47d-587cfbfffe3f.png" alt="360° Birthday Experience" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground">360 Video Booth Experience</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Create viral-worthy birthday moments with our cinematic 360° video capture. Perfect for sweet 16s, milestone birthdays, and anyone who wants their celebration to stand out!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Book Your Party
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Birthday Gallery */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            Real Parties, Real Fun
          </h2>
          
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {birthdayGalleryImages.map((image, index) => <div key={index} className="break-inside-avoid group">
                <img src={image} alt={`Birthday party moment ${index + 1}`} className="w-full rounded-lg hover-scale shadow-md hover:shadow-lg transition-shadow duration-300" />
              </div>)}
          </div>

          <div className="text-center mt-12">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto bg-secondary text-destructive-foreground">
                Check Party Availability
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Perfect Booth for Birthdays */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            Why Parents & Party Planners Choose Perfect Booth
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaBirthdayCake className="text-primary text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Custom Birthday Themes</h3>
              <p className="text-muted-foreground leading-relaxed">
                We create custom photo templates featuring the birthday person's name, age, and party theme. Every print becomes a personalized party favor that guests will treasure.
              </p>
            </Card>

            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaMusic className="text-primary text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Entertainment for All Ages</h3>
              <p className="text-muted-foreground leading-relaxed">
                From kids' parties to milestone celebrations, our booths keep guests entertained for hours. Props, filters, and interactive experiences that everyone loves!
              </p>
            </Card>

            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <FaGift className="text-primary text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Built-In Party Favors</h3>
              <p className="text-muted-foreground leading-relaxed">
                Skip the goodie bags! Guests leave with personalized photo prints and digital videos - memorable keepsakes that won't end up in the trash.
              </p>
            </Card>
          </div>

          <div className="text-center">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Plan Your Party
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Birthday Testimonials */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-slate-300">
            What Party Hosts Are Saying
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">"I hired Perfect Booth for my husband's 50th Birthday Party Celebration and they did a beautiful job! My family was pleased with the entire event. They believe in providing great customer service and making sure the customer is satisfied. Thank you Perfect Booth for helping me make my husband's 50th Birthday Celebration MAGNIFICENT and one he will always remember!"</blockquote>
              <cite className="text-foreground font-display font-semibold">
                Carol M., Milestone Birthday Party
              </cite>
            </Card>

            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "Thank you!! Staff very responsive, showed up on time...Very professional. Thank you so much for helping us celebrate my husband's birthday. The kids lovedddddd it."
              </blockquote>
              <cite className="text-foreground font-display font-semibold">
                Kim G., Birthday Party
              </cite>
            </Card>

            <Card className="p-8">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary text-lg" />)}
              </div>
              <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                "I'm so happy I got Perfect Booth for my daughter's birthday party. They were so easy to work with, very accommodating and communicative. They were really helpful throughout the process and Esra was so nice to everyone during the event. I will definitely book them again for future events!"
              </blockquote>
              <cite className="text-foreground font-display font-semibold">
                Galia P., Birthday Party
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

      {/* Birthday FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            Everything You Need to Know About Birthday Photo Booths
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible value={expandedAccordion} onValueChange={setExpandedAccordion}>
              <AccordionItem value="ages">
                <AccordionTrigger className="text-lg font-display">
                  What ages is the photo booth best for?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Our photo booths are perfect for all ages! Kids as young as 4 love the props and instant prints, while teens go crazy for the 360° videos. Adults appreciate the high-quality photos and nostalgic fun. We adjust props and experiences based on your party's age group.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="customization">
                <AccordionTrigger className="text-lg font-display">
                  Can you customize the prints with our party theme?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Absolutely! We create custom photo templates featuring the birthday person's name, age, party theme, and colors. Whether it's a superhero party, princess theme, or elegant milestone celebration, we'll match your vision perfectly.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="venue">
                <AccordionTrigger className="text-lg font-display">
                  Can you set up at any venue?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We can set up almost anywhere - backyards, community centers, restaurants, event venues, parks (with power access), and more. We just need a flat surface, standard electrical outlet, and enough space for guests to enjoy the experience.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="duration">
                <AccordionTrigger className="text-lg font-display">
                  How long should I book for my party?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  For kids' parties, 2-3 hours is usually perfect. For adult celebrations, we recommend 3-4 hours to ensure everyone gets multiple turns. We'll help you determine the ideal duration based on your guest count and party schedule.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="props">
                <AccordionTrigger className="text-lg font-display">
                  Do you provide props and accessories?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes! Every booking includes a curated prop collection. We can also source theme-specific props to match your party - from princess crowns to superhero masks, decade-themed items for milestone birthdays, and more.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="attendant">
                <AccordionTrigger className="text-lg font-display">
                  Is there someone to help run the booth?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Every booking includes a friendly, professional attendant who manages the booth, helps guests pose, and ensures everyone has a great time. This is especially helpful for kids' parties where little ones might need extra guidance!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="booking">
                <AccordionTrigger className="text-lg font-display">
                  How far in advance should I book?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We recommend booking 2-4 weeks in advance for birthday parties. Weekends fill up quickly, especially during summer and holiday seasons. For large milestone celebrations, booking 4-6 weeks ahead is ideal.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="digital">
                <AccordionTrigger className="text-lg font-display">
                  Do we get digital copies of everything?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes! Guests can instantly share photos via text or email, and you'll receive a complete digital gallery within 48 hours. All 360° videos are delivered digitally for easy sharing on social media.
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
              Ready to Throw the Best Birthday Party Ever?
            </h2>
            <p className="text-xl md:text-2xl font-sans mb-12 opacity-90">
              Give them a celebration they'll never forget. From kids' parties to milestone celebrations, we've got you covered.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-12 py-6 h-auto bg-primary hover:bg-primary/90 shadow-[var(--shadow-elev)] hover:shadow-[var(--shadow-glow)]">​Get a quote for your birthday party today! </Button>
              </a>
              <a href="tel:+15551234567">
                
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
    </div>;
};
export default Birthday;