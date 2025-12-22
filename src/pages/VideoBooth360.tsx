import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, Video, Share2, Music, Sparkles, Users, Zap, Camera, Smartphone } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import perfectBoothLogo from "@/assets/perfect-booth-logo-header.png";

const VideoBooth360 = () => {
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const galleryImages = [
    "/lovable-uploads/27d79526-60d7-442b-a47d-587cfbfffe3f.png",
    "/lovable-uploads/3266919b-6cb3-43ec-8b86-168a5f017b4c.png",
    "/lovable-uploads/6c015e84-d300-4e6f-9099-977293571915.png",
    "/lovable-uploads/7db278e2-b24f-4bc0-a74d-7df2860d76cc.png"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-[100] w-full bg-background/95 backdrop-blur-md border-b shadow-sm transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="inline-flex items-center gap-2" aria-label="Perfect Booth Home">
            <img src={perfectBoothLogo} alt="Perfect Booth logo" className="h-12 w-auto" width="120" height="36" />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#experience" className="hover:text-primary transition-colors">The Experience</a>
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
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
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://rvmediahost.s3.us-west-2.amazonaws.com/360-booth-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-secondary/30"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Video className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Cinematic 360° Video</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              360° Video Booth<br />Experience
            </h1>
            <p className="text-xl md:text-2xl font-sans mb-8 max-w-3xl mx-auto opacity-90">
              Step onto the platform and become the star of your own slow-motion, cinematic video captured from every angle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="text-lg px-8 py-4 h-auto bg-primary hover:bg-primary/90">
                  Get Free Quote
                </Button>
              </a>
              <a href="#experience">
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white/10">
                  See How It Works
                </Button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2">
              {[...Array(5)].map((_, i) => <FaStar key={i} className="text-primary" />)}
              <span className="ml-2 opacity-90">The Ultimate Party Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is 360 Video Booth */}
      <section id="experience" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
                What is a 360° Video Booth?
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Imagine standing on an elevated platform while a camera orbits around you, capturing every angle in stunning slow-motion video. That's the 360° video booth experience.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                The result? A cinematic, share-worthy video that makes you and your guests look like absolute superstars. Perfect for creating viral social media moments and unforgettable memories.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">Slow-motion cinematic capture</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">360° rotating camera arm</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">Custom music overlays</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">Instant sharing to social media</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/27d79526-60d7-442b-a47d-587cfbfffe3f.png" 
                alt="360 video booth in action" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">360°</div>
                <div className="text-sm">Full Rotation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It's Different */}
      <section id="features" className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-6 text-secondary-foreground">
            Why Guests Love It
          </h2>
          <p className="text-xl text-secondary-foreground/80 text-center max-w-3xl mx-auto mb-16">
            The 360° video booth creates an experience unlike any other entertainment option at your event.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Sparkles className="text-primary h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Red Carpet Vibes</h3>
              <p className="text-muted-foreground leading-relaxed">
                The elevated platform and orbiting camera make everyone feel like a celebrity. Watch your guests strike poses they never knew they had!
              </p>
            </Card>

            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Share2 className="text-primary h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Instantly Shareable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Videos are ready to share in seconds. Guests get their videos via text or email immediately—perfect for Instagram, TikTok, and more.
              </p>
            </Card>

            <Card className="text-center p-8 hover-scale">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="text-primary h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-foreground">Group Friendly</h3>
              <p className="text-muted-foreground leading-relaxed">
                The platform fits up to 3-4 guests at a time. Some of the best videos are friend groups showing off their coordinated moves together!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-6 text-foreground">
            Customize Your Experience
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Every 360° experience is tailored to your event with custom overlays, music, and branding.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover-scale">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Music className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-foreground">Custom Music</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Choose the perfect soundtrack for your videos. Pick from trending tracks or request specific songs to match your event vibe.
              </p>
            </Card>

            <Card className="p-6 hover-scale">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Video className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-foreground">Video Overlays</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Custom branded overlays with your event name, date, logo, and hashtags appear on every video.
              </p>
            </Card>

            <Card className="p-6 hover-scale">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-foreground">Special Effects</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Add confetti cannons, fog machines, or LED props to take your videos to the next level.
              </p>
            </Card>

            <Card className="p-6 hover-scale">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Smartphone className="text-primary h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-foreground">Instant Delivery</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Videos are delivered via text or email within seconds. Ready to post to Instagram, TikTok, and more.
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Create Your Experience
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            360° In Action
          </h2>
          
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <div key={index} className="break-inside-avoid group">
                <img 
                  src={image} 
                  alt={`360 video booth example ${index + 1}`} 
                  className="w-full rounded-lg hover-scale shadow-md hover:shadow-lg transition-shadow duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-secondary-foreground">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">1</div>
              <h3 className="font-display font-bold mb-2 text-secondary-foreground">Step On</h3>
              <p className="text-secondary-foreground/70 text-sm">Guests step onto the elevated platform and get ready for their moment</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">2</div>
              <h3 className="font-display font-bold mb-2 text-secondary-foreground">Strike Poses</h3>
              <p className="text-secondary-foreground/70 text-sm">As the camera orbits, guests dance, pose, and show off their moves</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">3</div>
              <h3 className="font-display font-bold mb-2 text-secondary-foreground">Watch Magic</h3>
              <p className="text-secondary-foreground/70 text-sm">The slow-motion, 360° video is processed with music and overlays in seconds</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground text-2xl font-bold">4</div>
              <h3 className="font-display font-bold mb-2 text-secondary-foreground">Share Instantly</h3>
              <p className="text-secondary-foreground/70 text-sm">Get the video via text or email immediately—ready to post!</p>
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
                  <span>360° rotating camera platform with LED lighting</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Unlimited video sessions during your rental</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Custom video overlays with your branding</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>On-site attendant and video technician</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Choice of music/soundtrack</span>
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
                  <span>Instant video delivery via text/email</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Online gallery with all videos post-event</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Slow-motion video processing</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Social media-ready video format</span>
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

      {/* Optional Add-ons */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-6 text-foreground">
            Take It to the Next Level
          </h2>
          <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Optional add-ons to make your 360° experience even more spectacular.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-primary h-8 w-8" />
              </div>
              <h3 className="font-display font-bold mb-2 text-foreground">Confetti Cannon</h3>
              <p className="text-muted-foreground text-sm">
                Burst of colorful confetti timed perfectly with your video for maximum impact.
              </p>
            </Card>

            <Card className="p-6 text-center hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-primary h-8 w-8" />
              </div>
              <h3 className="font-display font-bold mb-2 text-foreground">Fog Machine</h3>
              <p className="text-muted-foreground text-sm">
                Low-lying fog creates a dramatic, ethereal atmosphere for your videos.
              </p>
            </Card>

            <Card className="p-6 text-center hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="text-primary h-8 w-8" />
              </div>
              <h3 className="font-display font-bold mb-2 text-foreground">LED Props</h3>
              <p className="text-muted-foreground text-sm">
                Glowing accessories that add extra visual flair to every video.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-foreground">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible value={expandedAccordion} onValueChange={setExpandedAccordion}>
              <AccordionItem value="what-is-360">
                <AccordionTrigger className="text-lg font-display">
                  What exactly is a 360° video booth?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  A 360° video booth features a raised platform where guests stand while a camera arm rotates around them, capturing video from every angle. The result is a dynamic, cinematic slow-motion video that shows you from all sides—perfect for social media sharing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="how-many-people">
                <AccordionTrigger className="text-lg font-display">
                  How many people can be on the platform at once?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  The platform comfortably fits 3-4 people at a time. Group videos are often the most fun and entertaining, with friends coordinating their poses and movements together!
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="video-delivery">
                <AccordionTrigger className="text-lg font-display">
                  How quickly do guests receive their videos?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Videos are processed and delivered within about 30-60 seconds after recording. Guests receive a text or email with a link to view and download their video immediately.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="space-requirements">
                <AccordionTrigger className="text-lg font-display">
                  How much space does the 360° booth need?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We require a minimum of 12' x 12' of clear floor space with at least 10' ceiling height. The camera arm rotates around the platform, so we need adequate clearance on all sides.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="music-options">
                <AccordionTrigger className="text-lg font-display">
                  Can I choose the music for the videos?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Absolutely! We have a library of popular and trending tracks to choose from, or you can request specific songs. We'll work with you to select the perfect soundtrack that matches your event's energy and vibe.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="outdoor-setup">
                <AccordionTrigger className="text-lg font-display">
                  Can the 360° booth be set up outdoors?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, with proper coverage. We need a tent or covered area to protect the equipment from weather and direct sunlight. The surface must also be level and stable for safety.
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
            Ready to Go Viral?
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto mb-8">
            Book your 360° video booth and give your guests an experience they'll share everywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://perfectbooth.bloom.io/freequote" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Get Your Free Quote
              </Button>
            </a>
            <a href="tel:5035550123">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                Call Us Today
              </Button>
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
    </div>
  );
};

export default VideoBooth360;
