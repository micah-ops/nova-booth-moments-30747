import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40">
        <div className="container mx-auto px-4 py-6">
          <Link to="/" className="inline-block">
            <Button variant="ghost" className="gap-2">
              ← Back to Home
            </Button>
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              By accessing and using Perfect Booth's services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            <p className="text-foreground/80 leading-relaxed">
              Perfect Booth provides professional photo booth services including 360° video experiences and instant print photo booths for events. All services are subject to availability and booking confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Booking and Payment</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>All bookings require a deposit to secure your date</li>
              <li>Final payment is due prior to the event date</li>
              <li>Prices are subject to change but confirmed bookings will honor quoted rates</li>
              <li>Payment methods accepted will be specified during booking</li>
              <li>Additional charges may apply for services beyond the agreed package</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cancellation and Refunds</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Cancellation policies:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Cancellations made 60+ days before the event: Full refund minus 10% processing fee</li>
              <li>Cancellations made 30-59 days before: 50% refund</li>
              <li>Cancellations made less than 30 days before: No refund</li>
              <li>We reserve the right to cancel due to circumstances beyond our control with full refund</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Event Requirements</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The client must provide:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Adequate space for booth setup as specified</li>
              <li>Access to electrical outlets</li>
              <li>Clear access for equipment load-in and load-out</li>
              <li>A safe and secure environment for equipment</li>
              <li>Notification of any venue restrictions or requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-foreground/80 leading-relaxed">
              All photos and videos taken remain the property of Perfect Booth. We grant you and your guests a personal, non-commercial license to use the media. We reserve the right to use photos and videos for marketing purposes unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Liability</h2>
            <p className="text-foreground/80 leading-relaxed">
              Perfect Booth is not liable for any indirect, incidental, or consequential damages. Our total liability shall not exceed the amount paid for services. We are not responsible for guest behavior or injuries at events.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Equipment and Property</h2>
            <p className="text-foreground/80 leading-relaxed">
              The client is responsible for any damage to our equipment caused by guests or venue conditions. Guests must follow operator instructions. Misuse of equipment may result in early service termination without refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Force Majeure</h2>
            <p className="text-foreground/80 leading-relaxed">
              We are not liable for failure to perform services due to circumstances beyond our control including but not limited to: natural disasters, severe weather, pandemics, venue closures, or equipment failure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p className="text-foreground/80 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of services constitutes acceptance of modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              For questions about these Terms of Service, please contact us at info@perfectbooth.com
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
