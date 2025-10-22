import { useMemo, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-nova-booth.jpg";
import g360_1 from "@/assets/gallery-360-1.jpg";
import g360_2 from "@/assets/gallery-360-2.jpg";
import g360_3 from "@/assets/gallery-360-3.jpg";
import g360_4 from "@/assets/gallery-360-4.jpg";
import glamourPlaceholder from "@/assets/glamour-booth-placeholder.jpg";
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
        <a href="#top" className="inline-flex items-center gap-2 mx-auto md:mx-0" aria-label="Nova Booth Home">
          <img src="/lovable-uploads/3266919b-6cb3-43ec-8b86-168a5f017b4c.png" alt="Nova Booth logo" className="h-28 w-auto md:h-24" width="120" height="36" loading="eager" decoding="async" />
          <span className="sr-only">NOVA BOOTH</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#experiences" className="hover:text-secondary transition-colors story-link">Experiences</a>
          <a href="#gallery" className="hover:text-secondary transition-colors story-link">Gallery</a>
          <a href="#faq" className="hover:text-secondary transition-colors story-link">FAQ</a>
        </nav>
      </div>
    </header>;
};
const Hero = () => {
  return <section id="top" aria-label="Nova Booth hero" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-hero" aria-hidden="true" />
      <video src="https://rvmediahost.s3.us-west-2.amazonaws.com/pb.mp4" className="absolute inset-0 h-full w-full object-cover opacity-65" autoPlay loop muted playsInline aria-label="Nova Booth photo booth experience video" />
      <div className="relative">
        <div className="container mx-auto px-4 py-24 md:py-36 text-secondary-foreground">
          <h1 className="font-display text-4xl md:text-6xl font-semibold tracking-tight animate-fade-in">
            Curated Moments. Lasting Memories.
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-secondary-foreground/90 animate-fade-in">
            Transform your celebration with beautifully designed photo experiences that blend seamlessly into your special day.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 animate-enter">
            <a href="#contact"><Button variant="hero" size="lg">Reserve Your Date</Button></a>
            <a href="#gallery"><Button variant="secondary" size="lg">See Our Experiences</Button></a>
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
  const companies = [
    "Amazon",
    "Microsoft",
    "Lululemon",
    "Remax",
    "WeWork",
    "OHSU",
    "Deckers",
    "Otak",
    "UCHealth",
    "Nike"
  ];
  
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
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Instant Print Booth - First */}
          <Card className="hover-scale shadow">
            <article>
              <picture>
                <source media="(min-width: 768px)" srcSet="/lovable-uploads/31b17396-227f-48f7-be79-ee21b41f3529.png" />
                <img src="/lovable-uploads/73fc2b5b-6330-4045-87c6-ce04371076e0.png" alt="Guests in blue at instant print photo booth setup" className="h-64 w-full object-cover object-center md:object-top rounded-t-lg" loading="lazy" />
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
                <p className="mt-4 text-muted-foreground text-sm">Perfect for: Reception fun, guest entertainment, and party favors</p>
              </CardContent>
            </article>
          </Card>

          {/* 360 Video Booth - Second */}
          <Card className="hover-scale shadow">
            <article>
              <img src="/lovable-uploads/27d79526-60d7-442b-a47d-587cfbfffe3f.png" alt="Luxury 360° video booth setup in an elegant venue" className="h-64 w-full object-cover rounded-t-lg" loading="lazy" />
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
                <p className="mt-4 text-muted-foreground text-sm">Perfect for: First dances, toasts, and unforgettable celebrations</p>
              </CardContent>
            </article>
          </Card>

          {/* Glamour Experience Booth - Third */}
          <Card className="hover-scale shadow">
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
          </Card>

          {/* Branded Experience Booth - Fourth */}
          <Card className="hover-scale shadow">
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
          </Card>
        </div>
        <div className="mt-8 text-center">
          <a href="#contact"><Button variant="hero" size="lg">Reserve Your Experience</Button></a>
        </div>
      </div>
    </section>;
};
const Gallery = () => {
  const allImages = useMemo(() => [{
    src: g360_1,
    alt: "Couple enjoying the 360° booth",
    tag: "360"
  }, {
    src: g360_2,
    alt: "Garden party with 360° booth",
    tag: "360"
  }, {
    src: g360_3,
    alt: "Corporate event with 360° booth",
    tag: "360"
  }, {
    src: g360_4,
    alt: "360° video moment close-up",
    tag: "360"
  },
  // Real event print experiences
  {
    src: "/lovable-uploads/ef3f80c8-3dae-4e44-a4e2-3701179b68e2.png",
    alt: "Wedding guests at instant print booth",
    tag: "print"
  }, {
    src: "/lovable-uploads/1e2595f5-4056-43df-b13e-b155d29b9dae.png",
    alt: "Black and white instant print booth portrait",
    tag: "print"
  }, {
    src: "/lovable-uploads/c92eeda8-4f30-41f2-84ce-ab2000fb1497.png",
    alt: "Group posing at elegant print booth setup",
    tag: "print"
  }, {
    src: "/lovable-uploads/2840fc66-7c89-4ac1-8138-a2284f0d15c8.png",
    alt: "Fun group photo at print booth",
    tag: "print"
  }, {
    src: "/lovable-uploads/ef52c2f8-796f-4110-980c-67f947b3b86a.png",
    alt: "Print booth with floral backdrop and drapery",
    tag: "print"
  }, {
    src: "/lovable-uploads/d14d2b05-c6aa-4cd8-a774-828b6cac6ac8.png",
    alt: "Print booth setup with textured backdrop",
    tag: "print"
  }, {
    src: "/lovable-uploads/7db278e2-b24f-4bc0-a74d-7df2860d76cc.png",
    alt: "Outdoor print booth with flowing drape backdrop",
    tag: "print"
  },
  // Newly added prints
  {
    src: "/lovable-uploads/8f085561-948d-4a1f-98e5-99a2d0fc20e4.png",
    alt: "Couple portrait at print booth on white backdrop",
    tag: "print"
  }, {
    src: "/lovable-uploads/10dbd9f5-eaeb-41eb-a964-ee632beaa839.png",
    alt: "Elegant couple at outdoor print booth backdrop",
    tag: "print"
  }, {
    src: "/lovable-uploads/449b6433-4d31-423a-8c1c-aca508ca618b.png",
    alt: "Friends with props at print booth",
    tag: "print"
  }, {
    src: "/lovable-uploads/f7472a79-06ac-487a-ba57-6336adf16743.png",
    alt: "Bridal party at print booth with soft backdrop",
    tag: "print"
  }, {
    src: "/lovable-uploads/3a4f8ac3-9d22-4437-9f06-8025bddee86b.png",
    alt: "Guests celebrating at print booth",
    tag: "print"
  }, {
    src: "/lovable-uploads/777b182d-e831-4b76-a7a1-1a883a58e5e0.png",
    alt: "Guests with colored glasses at print booth",
    tag: "print"
  }, {
    src: "/lovable-uploads/16550f1b-9006-4492-a469-496d83d8a73d.png",
    alt: "Group portrait at print booth with gray backdrop",
    tag: "print"
  }, {
    src: "/lovable-uploads/b27d07db-6187-4b7f-b469-7acab60bbdf7.png",
    alt: "Group portrait at print booth on white backdrop",
    tag: "print"
  }, {
    src: "/lovable-uploads/ad3a25bd-15d6-46c5-9122-168b2a879fe6.png",
    alt: "Photo strip designs collage from events",
    tag: "print"
  }, {
    src: "/lovable-uploads/697e23b3-c63c-4f9a-840a-d563f20eff00.png",
    alt: "Photo strip templates collage from weddings",
    tag: "print"
  }], []);
  const Grid = ({
    images
  }: {
    images: {
      src: string;
      alt: string;
    }[];
  }) => <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {images.map((img, i) => <figure key={i} className="overflow-hidden rounded-lg shadow hover-scale">
          <img src={img.src} alt={img.alt} loading="lazy" className="h-40 md:h-48 w-full object-cover" />
        </figure>)}
    </div>;
  return <section id="gallery" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <header className="mb-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-secondary-foreground uppercase">SEE THE MAGIC IN ACTION</h2>
        </header>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid grid-cols-3 max-w-md mx-auto">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="360">360° Experiences</TabsTrigger>
            <TabsTrigger value="print">Print Experiences</TabsTrigger>
          </TabsList>
          <div className="mt-8">
            <TabsContent value="all"><Grid images={allImages} /></TabsContent>
            <TabsContent value="360"><Grid images={allImages.filter(i => i.tag === '360')} /></TabsContent>
            <TabsContent value="print"><Grid images={allImages.filter(i => i.tag === 'print')} /></TabsContent>
          </div>
        </Tabs>
        <div className="mt-8 text-center">
          <a href="#contact"><Button variant="hero" size="lg">Create Your Moment</Button></a>
        </div>
      </div>
    </section>;
};
const WhyChoose = () => <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <header className="mb-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-secondary">THE NOVA BOOTH DIFFERENCE</h2>
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
        "quote": "Nova Booth transformed our reception! The 360° videos of our first dance are absolutely magical, and the setup was so elegant it looked like part of our decor. Our guests are still raving about it!",
        "author": "Sarah & Michael, Garden Wedding"
      }, {
        "quote": "Professional, reliable, and the photo quality was incredible. Our employees loved the instant prints, and the setup perfectly matched our event's aesthetic. Will definitely book again!",
        "author": "Jennifer, Corporate Event Manager"
      }, {
        "quote": "The team was amazing! They made sure everything ran smoothly, and the prints were such high quality our guests thought they were professional photos. Worth every penny!",
        "author": "David & Lisa, Historic Venue Wedding"
      }].map((t, i) => <Card key={i} className="shadow">
            <CardHeader>
              <div className="flex text-primary">
                {Array.from({
              length: 5
            }).map((_, i2) => <Star key={i2} className="h-4 w-4 fill-current" />)}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm md:text-base">"{t.quote}"</p>
              <p className="mt-3 text-sm text-muted-foreground">— {t.author}</p>
            </CardContent>
          </Card>)}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">Join 100+ happy clients who chose Nova Booth</p>
      <div className="mt-6 text-center">
        <a href="#contact"><Button variant="hero" size="lg">Add Your Celebration to Our Story</Button></a>
      </div>
    </div>
  </section>;
const FAQ = () => <section id="faq" className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <header className="mb-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-secondary">Everything You Need to Know</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-display text-xl mb-4">General Questions</h3>
          <Accordion type="single" collapsible className="w-full">
            {[{
            "q": "How many photos or videos can my guests create during the event?",
            "a": "As many as they like within your booked timeframe. There's no limit to the fun."
          }, {
            "q": "When should I secure my date?",
            "a": "Popular dates book quickly—reserve as early as possible to ensure availability."
          }, {
            "q": "Will someone be there to assist our guests?",
            "a": "Yes, a professional attendant curates the experience and ensures everything runs smoothly."
          }, {
            "q": "How much time do you need for setup and removal?",
            "a": "We typically require 60–90 minutes for setup and 45 minutes for breakdown, all handled by our team."
          }].map((f, i) => <AccordionItem key={i} value={`g-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
        <div>
          <h3 className="font-display text-xl mb-4">Space & Venue Requirements</h3>
          <Accordion type="single" collapsible className="w-full">
            {[{
            "q": "What space do you need at our venue?",
            "a": "We recommend a 10'x10' area with nearby power. We'll tailor the layout to your venue."
          }, {
            "q": "Is setup and breakdown included in our experience?",
            "a": "Absolutely—all setup and breakdown is included with every booking."
          }, {
            "q": "Can we provide our own backdrop or decorations?",
            "a": "Yes. We'll coordinate to ensure your decor complements our curated setup."
          }].map((f, i) => <AccordionItem key={i} value={`v-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-display text-xl mb-4">Experience-Specific Questions</h3>
        <Accordion type="multiple" className="w-full">
          {[{
          "q": "How quickly do the photos print?",
          "a": "Instantly—prints are ready within seconds with beautiful color and clarity."
        }, {
          "q": "Do guests also get digital versions?",
          "a": "Yes, guests receive digital copies to share right away."
        }, {
          "q": "How do guests access their 360° videos?",
          "a": "We provide an easy link or QR code for instant download and sharing."
        }, {
          "q": "What's the video quality like?",
          "a": "Cinematic quality with smooth motion and elegant color—designed to look stunning on social."
        }, {
          "q": "How do I get pricing for my specific event?",
          "a": "Tap any 'Reserve Your Date' button to reach us. We'll tailor a quote to your celebration."
        }, {
          "q": "Do you service my area?",
          "a": "We serve weddings and events throughout the region—contact us to confirm your venue."
        }].map((f, i) => <AccordionItem key={i} value={`x-${i}`}>
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
        <a href="mailto:hello@novabooth.co" aria-label="Email Nova Booth">
          <Button variant="hero" size="lg">Reserve Your Date Now</Button>
        </a>
        <a href="tel:+1234567890" className="inline-flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors" aria-label="Call Nova Booth">
          <Phone className="h-5 w-5" /> <span>Click to Call</span>
        </a>
        <a href="mailto:hello@novabooth.co" className="inline-flex items-center gap-2 text-secondary-foreground hover:text-primary transition-colors" aria-label="Email Nova Booth">
          <Mail className="h-5 w-5" /> <span>hello@novabooth.co</span>
        </a>
      </div>
      <p className="mt-3 text-center text-xs text-secondary-foreground/80">We respond within 2 hours</p>
    </div>
  </section>;
const Footer = () => <footer className="bg-secondary text-secondary-foreground py-10">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
      <div>
        <p className="font-display tracking-wider">NOVA BOOTH</p>
        <p className="mt-2 text-secondary-foreground/80">Luxury 360° video & instant print experiences.

Join the Team
Partners
The Perfect Booth Unit
About Us
<a href="/wedding" className="story-link hover:text-primary">Wedding Experiences</a>



      </p>
      </div>
      <div>
        <p className="font-medium">Service Areas</p>
        <p className="text-secondary-foreground/80">- The PNW
- Oregon
- Washington
- Denver CO
- Houston TX 
-Tampa FL
-</p>
      </div>
      <div className="md:text-right">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="story-link">Instagram</a>
        <div className="mt-2 space-x-3">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms</a>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 mt-6 text-xs text-secondary-foreground/70">© {new Date().getFullYear()} Nova Booth. All rights reserved.</div>
  </footer>;
const StructuredData = () => {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nova Booth',
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