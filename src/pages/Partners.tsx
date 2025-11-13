import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Camera, Video, Users, MapPin } from "lucide-react";

const Partners = () => {
  const benefits = [
    "Earn commission on every successful referral",
    "Provide added value to your clients without extra work",
    "Partner with a reliable, professional photo booth service",
    "Enhance your service offerings with premium photo experiences",
    "Build long-term relationships with consistent referrals",
  ];

  const idealPartners = [
    {
      icon: Camera,
      title: "Photographers",
      description: "Add photo booth services to complement your photography packages"
    },
    {
      icon: Video,
      title: "Videographers",
      description: "Offer complete event coverage with photo booth entertainment"
    },
    {
      icon: Users,
      title: "Event Planners",
      description: "Provide your clients with premium photo booth experiences"
    },
    {
      icon: MapPin,
      title: "Venues",
      description: "Offer photo booth services as part of your venue packages"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <a href="/" className="inline-block hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/perfect-booth-logo-header.png" 
              alt="Perfect Booth Photo Booth Rentals" 
              className="h-12"
            />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Partner With Us
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Join our network of trusted event professionals and grow your business together
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('mailto:info@perfectbooth.co?subject=Partnership Inquiry', '_blank')}
            >
              Become a Partner
            </Button>
          </div>

          {/* Introduction */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6">
                At Perfect Booth, we believe in building strong partnerships with event professionals 
                who share our commitment to creating unforgettable experiences.
              </p>
              <p className="text-lg leading-relaxed">
                Whether you're a photographer, videographer, event planner, or venue owner, we'd love 
                to work with you to provide your clients with premium photo booth services that 
                complement your offerings perfectly.
              </p>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-display font-bold mb-6">Why Partner With Us?</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Ideal Partners */}
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-center mb-8">
              Who We're Looking For
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {idealPartners.map((partner, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <partner.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold mb-2">{partner.title}</h3>
                    <p className="text-muted-foreground">{partner.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <Card className="mb-12 bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-display font-bold mb-6">How It Works</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Connect With Us</h3>
                  <p className="text-muted-foreground">
                    Reach out to discuss partnership opportunities and how we can work together.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Refer Your Clients</h3>
                  <p className="text-muted-foreground">
                    When you have clients who need photo booth services, simply refer them to us.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">3. We Handle Everything</h3>
                  <p className="text-muted-foreground">
                    We'll take care of the booking, setup, and execution while maintaining the 
                    highest standards of service.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Everyone Wins</h3>
                  <p className="text-muted-foreground">
                    Your clients get amazing photo booth experiences, you earn commission, and we 
                    gain new business through your trusted recommendation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-display font-bold mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl mb-6 text-muted-foreground">
              Let's discuss how we can create a mutually beneficial partnership that adds value 
              to your clients and grows both our businesses.
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('mailto:info@perfectbooth.co?subject=Partnership Inquiry', '_blank')}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 bg-background">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Perfect Booth Photo Booth Rentals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Partners;
