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
            <h2 className="text-2xl font-semibold mb-4">Photobooth Rental Agreement</h2>
            <p className="text-foreground/80 leading-relaxed">
              This agreement is made between Seamless Ventures LLC, doing business as Perfect Booth ("Company"), and the client whose signature appears on the rental contract ("Client"). By signing the contract, the Client acknowledges that they have read and agreed to these terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Definition of Client</h2>
            <p className="text-foreground/80 leading-relaxed">
              The person(s) whose signature(s) appear on the photobooth contract shall be the Client and shall be the one(s) to whom Perfect Booth delivers its products, and shall be financially responsible for all payments to be made under this contract. This contract incorporates the entire understanding of the parties, and any modifications to it must be in writing and signed both by Perfect Booth and by the Client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Services Provided</h2>
            <p className="text-foreground/80 leading-relaxed">
              The Company agrees to provide photo booth rental services for the Client's event on the agreed upon date and location as specified in the rental contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Rental Period</h2>
            <p className="text-foreground/80 leading-relaxed">
              The photo booth will be operational for the total hours specified in the invoice, except for any necessary maintenance or technical downtime. The Company will arrive approximately 45 minutes to one hour before the rental period begins to set up the photo booth.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Payment and Deposit</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Payment terms are as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>A deposit of $99 or 50% of the project total (whichever is applicable) is required at the time of booking to secure the date</li>
              <li>The remaining balance is due no later than one week before the event date</li>
              <li>The deposit is fully refundable within 24 hours of payment</li>
              <li>After 24 hours, $99 of the deposit becomes non-refundable</li>
              <li>If the event is canceled and rescheduled, the deposit can be transferred to the new event</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cancellation Policy</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The Company reserves the right to cancel this Agreement at any time for any reason, in which case the Company will issue a full refund of all payments made by the Client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Retainer Payments and Liquidated Damages</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Once the Company reserves a date and time for the Client, it stops offering its services to others for that date and time. If the event is canceled or postponed, the Company incurs a loss. The Client agrees that determining the exact damages suffered by the Company due to a cancellation or postponement would be challenging.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Therefore, if the Client cancels or postpones the event within 14 days of the original event date, the initial retainer payment made by the Client, or $99 of that retainer payment if the payment was greater than $99, will be considered reasonable liquidated damages and is non-refundable and non-transferable to a future event. Payments that exceed the $99 non-refundable portion are refundable or can be used as a credit toward a future event.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Setup and Operation Requirements</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The Client is responsible for providing:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>A suitable location for the photo booth - a ten by ten-foot area</li>
              <li>Electrical power within 25 feet via an outlet or extension cord</li>
              <li>Wi-Fi access with necessary passwords for full functionality of the photo booth</li>
              <li>The Company will work with the Client to ensure all requirements are met</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Damages</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              The Client agrees to be responsible for any damage or loss to the Company's equipment caused by:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/80">
              <li>Any misuse of the equipment by Client or its guests</li>
              <li>Theft of equipment</li>
              <li>Damage resulting from improper environmental conditions, such as rain, wind, or excessive heat</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-foreground/80 leading-relaxed">
              The Company will not be liable for any injury, loss, or damage directly or consequently arising out of the use or inability to use the photo booth. The Client agrees to indemnify the Company against all liability related to the Client's event during or after the Client's event.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Use of Images</h2>
            <p className="text-foreground/80 leading-relaxed">
              The Client agrees that all photos taken in the photobooth can be used by the Company for marketing and promotional purposes, unless otherwise specified in writing by the Client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-foreground/80 leading-relaxed">
              This Agreement shall be governed by and construed in accordance with the laws of the state of Washington.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Entire Agreement</h2>
            <p className="text-foreground/80 leading-relaxed">
              This Agreement constitutes the entire agreement between the parties and supersedes all prior agreements, understandings, and negotiations, whether written or oral. Any modifications to this agreement must be in writing and signed by both Perfect Booth and the Client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-foreground/80 leading-relaxed">
              For questions about these Terms of Service, please contact Seamless Ventures LLC, DBA Perfect Booth at info@perfectbooth.com
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
