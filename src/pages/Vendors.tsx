import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, MapPin } from "lucide-react";
import perfectBoothLogo from "@/assets/perfect-booth-logo.png";

type VendorCategory = 
  | "all"
  | "venues"
  | "catering"
  | "photographers"
  | "videographers"
  | "dj-entertainment"
  | "florists"
  | "planners"
  | "hair-makeup";

interface Vendor {
  name: string;
  category: Exclude<VendorCategory, "all">;
  description: string;
  location: string;
  website: string;
  image?: string;
}

const categories: { value: VendorCategory; label: string }[] = [
  { value: "all", label: "All Vendors" },
  { value: "venues", label: "Venues" },
  { value: "catering", label: "Catering" },
  { value: "photographers", label: "Photographers" },
  { value: "videographers", label: "Videographers" },
  { value: "dj-entertainment", label: "DJ & Entertainment" },
  { value: "florists", label: "Florists" },
  { value: "planners", label: "Wedding Planners" },
  { value: "hair-makeup", label: "Hair & Makeup" },
];

// Placeholder vendors - replace with actual partner data
const vendors: Vendor[] = [
  {
    name: "The Grand Estate",
    category: "venues",
    description: "A stunning historic venue perfect for elegant weddings and upscale events.",
    location: "Portland, OR",
    website: "https://example.com",
  },
  {
    name: "Riverside Gardens",
    category: "venues",
    description: "Beautiful outdoor venue with scenic river views and lush gardens.",
    location: "Lake Oswego, OR",
    website: "https://example.com",
  },
  {
    name: "Savory Celebrations",
    category: "catering",
    description: "Farm-to-table catering with customizable menus for any event size.",
    location: "Portland, OR",
    website: "https://example.com",
  },
  {
    name: "Culinary Creations",
    category: "catering",
    description: "Award-winning catering specializing in fusion cuisine and elegant presentations.",
    location: "Beaverton, OR",
    website: "https://example.com",
  },
  {
    name: "Captured Moments Photography",
    category: "photographers",
    description: "Documentary-style wedding photography that tells your unique love story.",
    location: "Portland, OR",
    website: "https://example.com",
  },
  {
    name: "Luminous Light Studios",
    category: "photographers",
    description: "Fine art photography with a focus on natural light and timeless imagery.",
    location: "Vancouver, WA",
    website: "https://example.com",
  },
  {
    name: "Cinematic Dreams",
    category: "videographers",
    description: "Cinematic wedding films that capture every emotional moment of your day.",
    location: "Portland, OR",
    website: "https://example.com",
  },
  {
    name: "Motion Stories",
    category: "videographers",
    description: "Modern videography with creative storytelling and stunning visuals.",
    location: "Tigard, OR",
    website: "https://example.com",
  },
  {
    name: "Beats & Rhythms DJ",
    category: "dj-entertainment",
    description: "Professional DJ services with extensive music library and lighting packages.",
    location: "Portland, OR",
    website: "https://example.com",
  },
  {
    name: "Live Wire Entertainment",
    category: "dj-entertainment",
    description: "Live bands and entertainment options for unforgettable celebrations.",
    location: "Portland, OR",
    website: "https://example.com",
  },
  {
    name: "Bloom & Petal",
    category: "florists",
    description: "Artisan floral designs with locally sourced, seasonal blooms.",
    location: "Portland, OR",
    website: "https://example.com",
  },
  {
    name: "Garden of Eden Florals",
    category: "florists",
    description: "Luxury floral arrangements for weddings and special events.",
    location: "Lake Oswego, OR",
    website: "https://example.com",
  },
  {
    name: "Elegant Events Co.",
    category: "planners",
    description: "Full-service wedding planning with attention to every detail.",
    location: "Portland, OR",
    website: "https://example.com",
  },
  {
    name: "Dream Day Coordinators",
    category: "planners",
    description: "Day-of coordination and partial planning services for stress-free celebrations.",
    location: "Beaverton, OR",
    website: "https://example.com",
  },
  {
    name: "Glam Squad PDX",
    category: "hair-makeup",
    description: "On-location hair and makeup services for brides and bridal parties.",
    location: "Portland, OR",
    website: "https://example.com",
  },
  {
    name: "Beauty on Location",
    category: "hair-makeup",
    description: "Professional beauty services specializing in natural, photo-ready looks.",
    location: "Portland, OR",
    website: "https://example.com",
  },
];

const getCategoryLabel = (category: Exclude<VendorCategory, "all">) => {
  return categories.find((c) => c.value === category)?.label || category;
};

const Vendors = () => {
  const [selectedCategory, setSelectedCategory] = useState<VendorCategory>("all");

  const filteredVendors = selectedCategory === "all"
    ? vendors
    : vendors.filter((vendor) => vendor.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <a href="/" className="inline-block hover:opacity-80 transition-opacity">
            <img 
              src={perfectBoothLogo} 
              alt="Perfect Booth Photo Booth Rentals" 
              className="h-12"
            />
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-secondary">
            Recommended Vendors
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've partnered with the best vendors in the industry to help make your event unforgettable. 
            Browse our curated list of trusted professionals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="transition-all"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Vendor Count */}
        <p className="text-center text-muted-foreground mb-8">
          Showing {filteredVendors.length} vendor{filteredVendors.length !== 1 ? "s" : ""}
          {selectedCategory !== "all" && ` in ${getCategoryLabel(selectedCategory as Exclude<VendorCategory, "all">)}`}
        </p>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map((vendor, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden group">
              {vendor.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={vendor.image} 
                    alt={vendor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-secondary">{vendor.name}</h3>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full whitespace-nowrap">
                    {getCategoryLabel(vendor.category)}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{vendor.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    {vendor.location}
                  </div>
                  <a
                    href={vendor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredVendors.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No vendors found in this category.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => setSelectedCategory("all")}
            >
              View All Vendors
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-secondary/5 rounded-xl p-8">
          <h2 className="text-2xl font-display font-bold mb-4 text-secondary">
            Are You a Vendor?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            We're always looking to partner with talented professionals. 
            If you'd like to be featured on our recommended vendors list, get in touch!
          </p>
          <a href="/partners">
            <Button variant="default" size="lg">
              Partner With Us
            </Button>
          </a>
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

export default Vendors;
