import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const JoinTeam = () => {
  const requirements = [
    "A friendly, sociable and positive person",
    "Available for training sessions",
    "Have availability on weekends or weekdays",
    "Punctual and conscientious - you know how to be somewhere on time",
    "Relatively tech savvy",
    "Can dress in business casual attire or attire appropriate for the event",
    "Have the ability to carry 35 pounds",
    "Teachable",
    "Have a vehicle",
    "Be able to set up and take down the Photo Booth (it's reasonably simple)",
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
              Join Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              Looking for Photo Booth Attendants in Portland
            </p>
          </div>

          {/* Introduction Card */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6">
                We own Perfect Booth Photo Booth Rentals and we're looking for 4-6 people to train 
                as photo booth attendants. We get super busy over the holidays, so we need extra help!
              </p>
              <p className="text-lg leading-relaxed mb-6">
                The perfect candidate is good with people, punctual, conscientious, teachable, 
                flexible, and available to work weekends.
              </p>
              <p className="text-lg leading-relaxed">
                Most of our events are weddings and the occasional corporate event. But right now 
                they are mostly holiday parties, so we need people who are available on weekends 
                and a couple who are available on weekdays for our occasional weekday events.
              </p>
            </CardContent>
          </Card>

          {/* What You'll Do */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-display font-bold mb-4">What You'll Do</h2>
              <p className="text-lg leading-relaxed mb-4">
                Attending the booth is pretty simple:
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span>Arrive about an hour before the event starts to set up</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span>Make sure the booth runs smoothly during the event</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span>Pack up the equipment at the end of the event</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Compensation */}
          <Card className="mb-8 bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-2xl font-display font-bold mb-4">Compensation</h2>
              <p className="text-xl font-semibold mb-2">
                $100-175 per event
              </p>
              <p className="text-muted-foreground">
                The rate is usually about $25 per hour, depending on length and location.
              </p>
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-display font-bold mb-6">Requirements</h2>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-lg">{requirement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <p className="text-xl mb-6">
              If you qualify and are interested, please fill out our application form!
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => window.open('https://ww2.perfectbooth.co/jointeampdx', '_blank')}
            >
              Apply Now
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

export default JoinTeam;
