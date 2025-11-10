import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import heroImage from "@/assets/hero-nova-booth.jpg";
import glamourPlaceholder from "@/assets/glamour-booth-placeholder.jpg";
import perfectBoothLogo from "@/assets/perfect-booth-logo.png";
const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  return <header className={`fixed top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto flex h-12 items-center justify-between md:justify-between">
        <a href="#top" className="inline-flex items-center gap-2 mx-auto md:mx-0" aria-label="Perfect Booth Home">
          <img src={perfectBoothLogo} alt="Perfect Booth logo" className="h-12 w-auto md:h-[2.5rem]" width="120" height="36" loading="eager" decoding="async" />
          <span className="sr-only">PERFECT BOOTH</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#experiences" className="hover:text-secondary transition-colors story-link">Experiences</a>
          
          <a href="#faq" className="hover:text-secondary transition-colors story-link">FAQ</a>
        </nav>
      </div>
    </header>;
};
const Hero = () => {
  return <section id="top" aria-label="Perfect Booth hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero" aria-hidden="true" />
      <video src="https://rvmediahost.s3.us-west-2.amazonaws.com/pb.mp4" className="absolute inset-0 h-full w-full object-cover opacity-65" autoPlay loop muted playsInline aria-label="Perfect Booth photo booth experience video" />
      <div className="relative">
        <div className="container mx-auto px-4 py-24 md:py-36 text-secondary-foreground">
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight animate-fade-in">
            Curated Moments. Lasting Memories.
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-secondary-foreground/90 animate-fade-in">
            Transform your celebration with beautifully designed photo experiences that blend seamlessly into your special day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 animate-enter">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer"><Button variant="hero" size="lg">Reserve Your Date</Button></a>
            
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm">
            <div className="flex text-primary">
              {Array.from({
              length: 5
            }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <span className="text-secondary-foreground/90">Rated by 50+ Happy Couples and Event Organizers</span>
          </div>
        </div>
      </div>
    </section>;
};
const ClientLogos = () => {
  const companies = ["Amazon", "Microsoft", "Lululemon", "Remax", "WeWork", "OHSU", "Deckers", "Otak", "UCHealth", "Nike"];
  return <section className="bg-primary py-12 overflow-hidden" aria-label="Trusted by leading companies">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-white/90 text-sm font-medium tracking-wide mb-8 uppercase">
          Trusted by Leading Companies
        </h2>
        <div className="relative">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...Array(3)].map((_, setIndex) => <div key={setIndex} className="flex items-center space-x-12 min-w-max">
                {companies.map((company, index) => <div key={`${setIndex}-${index}`} className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                    <span className="text-white text-lg md:text-xl font-semibold px-4">
                      {company}
                    </span>
                  </div>)}
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
const ExperienceShowcase = () => {
  return <section id="experiences" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="mb-10 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-secondary">Ways to Celebrate  </h2>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Instant Print Booth - First */}
          <Card className="hover-scale shadow">
            <article>
              <picture>
                <source media="(min-width: 768px)" srcSet="/lovable-uploads/print-booth-package.png" />
                <img src="/lovable-uploads/instant-print-booth-mobile.png" alt="Instant print photo booth experience with various backdrops" className="h-64 md:h-auto w-full object-cover object-center md:object-top rounded-t-lg" loading="lazy" />
              </picture>
              <CardHeader>
                <CardTitle className="font-display text-2xl">Instant Print Booth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="md:hidden mb-4">
                  <p className="text-sm text-muted-foreground">Create instant memories with professional-quality prints that guests can take home immediately. Our high-end printing technology ensures every photo becomes a treasured keepsake from your special day.</p>
                </div>
                <div className="md:flex md:gap-6">
                  <ul className="space-y-2 text-sm md:text-base list-disc pl-5 md:flex-1">
                    <li>High-quality instant prints</li>
                    <li>Professional lighting system</li>
                    <li>Digital copies included</li>
                    <li>Take-home keepsakes</li>
                  </ul>
                  <div className="hidden md:block md:flex-1">
                    <p className="text-sm text-muted-foreground">Create instant memories with professional-quality prints that guests can take home immediately. Our high-end printing technology ensures every photo becomes a treasured keepsake from your special day.</p>
                  </div>
                </div>
                
              </CardContent>
            </article>
          </Card>

          {/* 360 Video Booth - Second */}
          <Card className="hover-scale shadow">
            <article>
              <img src="/lovable-uploads/27d79526-60d7-442b-a47d-587cfbfffe3f.png" alt="Luxury 360° video booth setup in an elegant venue" className="h-64 md:h-auto w-full object-cover rounded-t-lg" loading="lazy" />
              <CardHeader>
                <CardTitle className="font-display text-2xl">360 Video Booth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="md:hidden mb-4">
                  <p className="text-sm text-muted-foreground">Experience the magic of cinematic 360° video capture that creates stunning, shareable moments from every angle. Perfect for capturing those special celebratory moments that deserve to be seen from all perspectives.</p>
                </div>
                <div className="md:flex md:gap-6">
                  <ul className="space-y-2 text-sm md:text-base list-disc pl-5 md:flex-1">
                    <li>Cinematic 360° video capture</li>
                    <li>Every angle of your special moment</li>
                    <li>Instant digital sharing</li>
                    <li>Professional attendant included</li>
                  </ul>
                  <div className="hidden md:block md:flex-1">
                    <p className="text-sm text-muted-foreground">Experience the magic of cinematic 360° video capture that creates stunning, shareable moments from every angle. Perfect for capturing those special celebratory moments that deserve to be seen from all perspectives.</p>
                  </div>
                </div>
                
              </CardContent>
            </article>
          </Card>

          {/* Glamour Experience Booth - Hidden (uncomment to show) */}
          {/* <Card className="hover-scale shadow">
            <article>
              <img src={glamourPlaceholder} alt="Elegant photo booth setup with professional lighting and a sleek black tension backdrop, showing guests taking sophisticated portrait-style photos" className="h-64 w-full object-cover rounded-t-lg" loading="lazy" />
              <CardHeader>
                <CardTitle className="font-display text-2xl">Glammer Experiance Booth</CardTitle>
                <p className="text-sm text-primary font-medium mt-1">Capture Your Best Self - Professional beauty portraits with instant prints</p>
              </CardHeader>
              <CardContent>
                <div className="md:hidden mb-4">
                  <p className="text-sm text-muted-foreground">Transform into your most glamorous self with our professional-grade beauty booth experience. Featuring custom smoothing filters and elegant lighting, every guest becomes the star of their own sophisticated portrait session.</p>
                </div>
                <div className="md:flex md:gap-6">
                  <ul className="space-y-2 text-sm md:text-base list-disc pl-5 md:flex-1">
                    <li>Professional beauty lighting system</li>
                    <li>Custom smoothing filters for flawless results</li>
                    <li>Choice of classic black & white or vibrant color</li>
                    <li>Unlimited 4x6 prints</li>
                    <li>Instant digital sharing for social media</li>
                    <li>Elegant tension backdrop (white or black)</li>
                  </ul>
                  <div className="hidden md:block md:flex-1">
                    <p className="text-sm text-muted-foreground">Transform into your most glamorous self with our professional-grade beauty booth experience. Featuring custom smoothing filters and elegant lighting, every guest becomes the star of their own sophisticated portrait session.</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground text-sm">Perfect for: Milestone celebrations, anniversary parties, and sophisticated gatherings where guests want to feel effortlessly beautiful</p>
              </CardContent>
            </article>
           </Card> */}

          {/* Branded Experience Booth - Hidden (uncomment to show) */}
          {/* <Card className="hover-scale shadow">
            <article>
              <img src="/lovable-uploads/6c015e84-d300-4e6f-9099-977293571915.png" alt="Professional corporate photo booth setup with custom branded backdrop showing company logo, professional lighting, and business professionals taking executive-quality photos" className="h-64 w-full object-cover rounded-t-lg" loading="lazy" />
              <CardHeader>
                <CardTitle className="font-display text-2xl">Branded Experiance Booth</CardTitle>
                <p className="text-sm text-primary font-medium mt-1">Elevate Your Brand - Brand activations your guests will remember</p>
              </CardHeader>
              <CardContent>
                <div className="md:hidden mb-4">
                  <p className="text-sm text-muted-foreground">Create professional-quality photos that align perfectly with your corporate brand. Our branded experience seamlessly integrates your company identity while providing attendees with polished, professional images.</p>
                </div>
                <div className="md:flex md:gap-6">
                  <ul className="space-y-2 text-sm md:text-base list-disc pl-5 md:flex-1">
                    <li>Complete company branding integration</li>
                    <li>Option for Custom-printed backdrop featuring your logo and unit wrap</li>
                    <li>Professional lighting for quality photos</li>
                    <li>Branded photo templates and layouts</li>
                    <li>Digital delivery with company branding</li>
                    <li>Professional attendant managing the experience</li>
                    <li>Optional guest surveys</li>
                  </ul>
                  <div className="hidden md:block md:flex-1">
                    <p className="text-sm text-muted-foreground">Create professional-quality photos that align perfectly with your corporate brand. Our branded experience seamlessly integrates your company identity while providing attendees with polished, professional images.</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground text-sm">Perfect for: Corporate conferences, product launches, company celebrations, and networking events and brand activations where professional image and brand consistency matter</p>
              </CardContent>
            </article>
           </Card> */}
        </div>
        <div id="experiences-cta" className="mt-8 text-center">
          <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer"><Button variant="hero" size="lg">Reserve Your Experience</Button></a>
        </div>
      </div>
    </section>;
};
const Gallery = () => {
  // Add your gallery images here
  const images: {
    src: string;
    alt: string;
  }[] = [
    // Example:
    // { src: "/path/to/image1.jpg", alt: "Description of image 1" },
  ];
  return <section id="gallery" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, i) => <figure key={i} className="break-inside-avoid overflow-hidden rounded-lg shadow hover-scale mb-4">
              <img src={img.src} alt={img.alt} loading="lazy" className="w-full h-auto object-cover" />
            </figure>)}
        </div>
      </div>
    </section>;
};
const WhyChoose = () => <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <header className="mb-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-secondary">THE PERFECT BOOTH DIFFERENCE</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="hover-scale shadow">
          <CardHeader>
            <CardTitle className="font-display">Curated Aesthetics</CardTitle>
          </CardHeader>
          <CardContent className="text-sm md:text-base text-muted-foreground">
            Every setup is thoughtfully designed to complement your event's unique style and venue, including personalized print designs that reflect your celebration's theme and colors.
          </CardContent>
        </Card>
        <Card className="hover-scale shadow">
          <CardHeader>
            <CardTitle className="font-display">White-Glove Service</CardTitle>
          </CardHeader>
          <CardContent className="text-sm md:text-base text-muted-foreground">
            Our professional team handles every detail, so you can focus on celebrating.
          </CardContent>
        </Card>
        <Card className="hover-scale shadow">
          <CardHeader>
            <CardTitle className="font-display">Premium Quality</CardTitle>
          </CardHeader>
          <CardContent className="text-sm md:text-base text-muted-foreground">
            Professional-grade prints and cinematic videos with exceptional clarity and color that become treasured keepsakes.
          </CardContent>
        </Card>
      </div>
      <div className="mt-8 text-center">
        <a href="#contact"><Button variant="hero" size="lg">Experience the Difference</Button></a>
      </div>
    </div>
  </section>;
const Reviews = () => <section className="py-16 md:py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <header className="mb-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-secondary-foreground uppercase">What Our Clients Say</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[{
        "quote": "They were so helpful and the response time was amazing, compared to other Photo Booth companies I've talked to. I appreciated every aspect of the process and my wife and I couldn't have asked for a better experience.",
        "author": "Timothy and Hannah - Wedding"
      }, {
        "quote": "Best photo booth experience ever! The quality of the photos were amazing! My guests talked about it non-stop. The pictures printed instantly! We also got to custom make the background which was the highlight of it. I would book Perfect Booth for all my future events.",
        "author": "Jenni Luu - Birthday"
      }, {
        "quote": "I hired Perfect Booth for my wedding reception and it was amazing! Their pricing was very fair and very customizable based on time which was so nice! They worked with me to design the photo strip and easily made changes based on my preferences. The product itself was clear, beautiful, and so much fun! 10/10 would recommend using them for ANY event.",
        "author": "Katie Yoshioka - Wedding"
      }].map((t, i) => <Card key={i} className="shadow">
            <CardHeader>
              <div className="flex text-primary">
                {Array.from({
              length: 5
            }).map((_, i2) => <Star key={i2} className="h-4 w-4 fill-current" />)}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base">&quot;{t.quote}&quot;</p>
              <p className="mt-3 text-sm text-muted-foreground">— {t.author}</p>
            </CardContent>
          </Card>)}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">Join 100+ happy clients who chose Perfect Booth</p>
      <div className="mt-6 text-center">
        <a href="#contact"><Button variant="hero" size="lg">Get a Quote Today</Button></a>
      </div>
    </div>
  </section>;
const FAQ = () => <section id="faq" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <header className="mb-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-secondary">Everything You Need to Know</h2>
      </header>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {[{
          "q": "How many photos can my guests create during the event?",
          "a": "As many as they like within your booked timeframe. There's no limit to the fun."
        }, {
          "q": "How quickly do the photos print?",
          "a": "Photos print in about 30 seconds with beautiful color and clarity."
        }, {
          "q": "Do guests also get digital versions?",
          "a": "Yes, guests receive digital copies to share right away."
        }, {
          "q": "When should I secure my date?",
          "a": "Popular dates book quickly—reserve as early as possible to ensure availability."
        }, {
          "q": "Will someone be there to assist our guests?",
          "a": "Yes, a professional attendant curates the experience and ensures everything runs smoothly."
        }, {
          "q": "How much time do you need for setup and removal?",
          "a": "We typically require 30–90 minutes for setup and 45 minutes for breakdown, all handled by our team."
        }, {
          "q": "What space do you need at our venue?",
          "a": "We recommend a 10'x10' area with nearby power. We'll tailor the layout to your venue."
        }, {
          "q": "Is setup and breakdown included in our experience?",
          "a": "Absolutely—all setup and breakdown is included with every booking."
        }, {
          "q": "Can we provide our own backdrop or decorations?",
          "a": "Yes. We'll coordinate to ensure your decor complements our curated setup."
        }, {
          "q": "How do I get pricing for my specific event?",
          "a": "Tap any 'Reserve Your Date' button to reach us. We'll tailor a quote to your celebration."
        }].map((f, i) => <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>)}
        </Accordion>
      </div>
    </div>
  </section>;
const FinalCTA = () => <section id="contact" className="relative py-16 md:py-24">
    <div className="absolute inset-0 bg-hero opacity-95" aria-hidden="true" />
    <div className="relative container mx-auto px-4 text-secondary-foreground">
      <header className="text-center">
        <h2 className="font-display text-3xl md:text-4xl">Ready to Create Something Beautiful?</h2>
        <p className="mt-3 max-w-2xl mx-auto text-secondary-foreground/90">
          Your celebration deserves an experience as special as the moment itself. Let's make it unforgettable.
        </p>
      </header>
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-3">
        <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer" aria-label="Request a quote from Perfect Booth">
          <Button variant="hero" size="lg" className="px-[30px] mx-[40px]">Reserve Your Date Now</Button>
        </a>
        <a href="tel:+1234567890" className="inline-flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors" aria-label="Call Perfect Booth">
           
        </a>
        <a href="mailto:micah@perfect-booth.com" className="inline-flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors" aria-label="Email Perfect Booth">
           
        </a>
      </div>
      <p className="mt-3 text-center text-xs text-secondary-foreground/80">We respond within 2 hours</p>
    </div>
  </section>;
const Footer = () => <footer className="bg-secondary text-secondary-foreground py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-secondary-foreground/20">
        <div className="md:col-span-2">
          <h3 className="font-display text-xl tracking-wider mb-4">PERFECT BOOTH</h3>
          <p className="text-secondary-foreground/80 leading-relaxed max-w-md">
            Luxury 360° video & instant print experiences for your most memorable events.
          </p>
        </div>
        
        <div>
          <h4 className="font-display tracking-wider text-sm mb-4">EXPLORE</h4>
          <nav className="space-y-3">
            
            <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-colors">The Perfect Booth Unit</a>
            <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-colors">About Us</a>
            <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-colors">Join the Team</a>
            <a href="#" className="block text-secondary-foreground/80 hover:text-primary transition-colors">Partners</a>
          </nav>
        </div>
        
        <div>
          <h4 className="font-display tracking-wider text-sm mb-4">CONNECT</h4>
          <nav className="space-y-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="block text-secondary-foreground/80 hover:text-primary transition-colors">Instagram</a>
            <a href="/privacy-policy" className="block text-secondary-foreground/80 hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="block text-secondary-foreground/80 hover:text-primary transition-colors">Terms of Service</a>
          </nav>
        </div>
      </div>
      
      <div className="pt-8 text-center md:text-left">
        <p className="text-sm text-secondary-foreground/70">© {new Date().getFullYear()} Perfect Booth. All rights reserved.</p>
      </div>
    </div>
  </footer>;
const StructuredData = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Perfect Booth',
    url: '/',
    description: 'Luxury 360° video and instant print photo experiences for weddings and corporate events.',
    serviceArea: 'Regional'
  };
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [{
      '@type': 'Question',
      name: 'When should I secure my date?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Popular dates book quickly—reserve as early as possible to ensure availability.'
      }
    }, {
      '@type': 'Question',
      name: 'Do guests get digital versions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, guests receive digital copies to share right away.'
      }
    }]
  };
  return <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(data)
    }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(faq)
    }} />
    </>;
};
const Index = () => {
  return <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <ExperienceShowcase />
        <Gallery />
        <WhyChoose />
        <Reviews />
        <FAQ />
        <FinalCTA />
        <StructuredData />
      </main>
      <Footer />
    </div>;
};
export default Index;