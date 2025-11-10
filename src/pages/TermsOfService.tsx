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
              By accessing and using the Perfect Booth website and services, you agree to be bound by these Terms of Service. These terms apply to all visitors, users, and clients of our photo booth rental services operated by Seamless Ventures LLC, doing business as Perfect Booth. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            <p className="text-foreground/80 leading-relaxed">
              Perfect Booth provides professional photo booth rental services including 360° video experiences and instant print photo booths for events. All services are subject to availability and booking confirmation. Upon booking, clients will receive a detailed rental agreement specifying the event date, location, rental period, and service details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Booking and Payment Terms</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              When you book our services, the following payment terms apply:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>A deposit of $99 or 50% of the project total (whichever is applicable) is required at the time of booking to secure your event date</li>
              <li>The deposit is fully refundable within 24 hours of payment</li>
              <li>After 24 hours, $99 of the deposit becomes non-refundable</li>
              <li>The remaining balance is due no later than one week before your event date</li>
              <li>All prices are as quoted in your booking confirmation</li>
              <li>The person(s) whose signature appears on the rental contract is financially responsible for all payments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cancellation and Refund Policy</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We understand plans can change. Our cancellation policy is as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Full refund of deposit if canceled within 24 hours of payment</li>
              <li>If you cancel or postpone within 14 days of your event date, $99 of the deposit is non-refundable as liquidated damages</li>
              <li>Payments exceeding $99 are refundable or can be used as credit toward a future event</li>
              <li>If the event is rescheduled (not within 14 days of the original date), the deposit can be transferred to the new event date</li>
              <li>Perfect Booth reserves the right to cancel services for any reason and will provide a full refund of all payments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Client Responsibilities</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              To ensure successful service delivery, clients must provide:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>A suitable location with a ten by ten-foot area for photo booth setup</li>
              <li>Electrical power within 25 feet via an outlet or extension cord</li>
              <li>Wi-Fi access with necessary passwords for full photo booth functionality</li>
              <li>Access to the venue at least 45 minutes to one hour before the rental period for setup</li>
              <li>A safe environment for equipment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Equipment Damage and Liability</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Clients are responsible for any damage or loss to Perfect Booth's equipment caused by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Misuse of equipment by the client or guests</li>
              <li>Theft of equipment</li>
              <li>Damage from improper environmental conditions (rain, wind, excessive heat, etc.)</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mt-4">
              Guests must follow operator instructions at all times. Misuse may result in early service termination without refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-foreground/80 leading-relaxed">
              Perfect Booth is not liable for any injury, loss, or damage directly or consequently arising from the use or inability to use the photo booth services. The client agrees to indemnify Perfect Booth against all liability related to the client's event. Our total liability shall not exceed the amount paid for services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property and Use of Images</h2>
            <p className="text-foreground/80 leading-relaxed">
              All photos and videos taken at your event can be used by Perfect Booth for marketing and promotional purposes, unless otherwise specified in writing by the client. Clients and their guests receive a personal, non-commercial license to use the media captured during their event.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Service Hours and Technical Issues</h2>
            <p className="text-foreground/80 leading-relaxed">
              The photo booth will be operational for the hours specified in your rental agreement. We arrive approximately 45 minutes to one hour before your rental period begins for setup. Service may be temporarily interrupted for necessary maintenance or technical issues, and we will make every effort to minimize downtime.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Modifications to Agreement</h2>
            <p className="text-foreground/80 leading-relaxed">
              Any modifications to your rental agreement must be made in writing and signed by both Perfect Booth and the client. We reserve the right to update these Terms of Service at any time, and continued use of our services constitutes acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-foreground/80 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the state of Washington, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Entire Agreement</h2>
            <p className="text-foreground/80 leading-relaxed">
              These Terms of Service, together with any rental agreement you sign, constitute the entire agreement between you and Perfect Booth. They supersede all prior agreements, understandings, and negotiations, whether written or oral.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              For questions about these Terms of Service, please contact Seamless Ventures LLC, doing business as Perfect Booth, at info@perfectbooth.com
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
