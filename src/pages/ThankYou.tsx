import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const reviews = [
  {
    text: "The person handling the Photo Booth was really nice, and they directed us too! The photos came out wonderful, and the process to download them was super easy too!",
    author: "Miriam"
  },
  {
    text: "Best photo booth experience ever! The quality of the photos were amazing! My guests talked about it non-stop. The pictures printed instantly! We also got to custom make the background which was the highlight of it. I would book Perfect Booth for all my future events.",
    author: "Jeni Luu"
  },
  {
    text: "I hired Perfect Booth for my wedding reception and it was amazing! Their pricing was very fair and very customizable based on time which was so nice! They worked with me to design the photo strip and easily made changes based on my preferences. The product itself was clear, beautiful, and so much fun! 10/10 would recommend using them for ANY event.",
    author: "Katie Y"
  },
  {
    text: "Such a great team! Kids had a blast and perfect booth was PERFECT! Great communication and professional.",
    author: "Jenny Payne"
  }
];

export default function ThankYou() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Track conversion
    if (window.gtag) {
      window.gtag('config', 'AW-16616595167');
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
        setIsVisible(true);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-secondary flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex justify-center">
          <CheckCircle className="w-20 h-20 text-primary animate-scale-in" />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-secondary-foreground">
            Thank You!
          </h1>
          <p className="text-lg text-secondary-foreground/80">
            We've received your request and will get back to you shortly.
          </p>
        </div>

        <div className="bg-card/5 border border-secondary-foreground/20 rounded-lg p-8 min-h-[200px] flex flex-col justify-center">
          <div
            className={`transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-secondary-foreground text-lg italic mb-4">
              "{reviews[currentReview].text}"
            </p>
            <p className="text-primary font-semibold">
              — {reviews[currentReview].author}
            </p>
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          {reviews.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                index === currentReview ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        <Button asChild size="lg">
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
