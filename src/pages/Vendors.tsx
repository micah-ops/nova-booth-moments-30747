import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, MapPin } from "lucide-react";
import perfectBoothLogo from "@/assets/perfect-booth-logo.png";
type VendorCategory = "all" | "venues" | "catering" | "bartending" | "headshot-photography" | "photographers" | "videographers" | "dj-entertainment" | "florists" | "planners" | "hair-makeup";
interface Vendor {
  name: string;
  category: Exclude<VendorCategory, "all">;
  description: string;
  location: string;
  website: string;
  image?: string;
}
const categories: {
  value: VendorCategory;
  label: string;
}[] = [{
  value: "all",
  label: "All Vendors"
}, {
  value: "venues",
  label: "Venues"
}, {
  value: "catering",
  label: "Catering"
}, {
  value: "bartending",
  label: "Bartending"
}, {
  value: "headshot-photography",
  label: "Headshot Photography"
}, {
  value: "photographers",
  label: "Photographers"
}, {
  value: "videographers",
  label: "Videographers"
}, {
  value: "dj-entertainment",
  label: "DJ & Entertainment"
}, {
  value: "florists",
  label: "Florists"
}, {
  value: "planners",
  label: "Wedding Planners"
}, {
  value: "hair-makeup",
  label: "Hair & Makeup"
}];

// Real partner vendors
const vendors: Vendor[] = [{
  name: "Abernethy Center",
  category: "venues",
  description: "Portland's full-service wedding and event venue featuring captivating gardens, a luxurious ballroom, and the iconic Abernethy Chapel. Award-winning catering and unmatched customer service since 2001.",
  location: "Oregon City, OR",
  website: "https://www.abernethycenter.com",
  image: "/vendor-images/abernethy-center.jpg"
}, {
  name: "Morchella Events",
  category: "catering",
  description: "Award-winning chef expertise blended with the wild, seasonal bounty of the Pacific Northwest. Custom menus for weddings, private dinners, and corporate events—bringing fine dining to any location.",
  location: "Portland, OR",
  website: "https://www.morchella-pdx.com",
  image: "/vendor-images/morchella.png"
}, {
  name: "Top It Off Bartending",
  category: "bartending",
  description: "The premier destination for sophisticated bartending services in the Pacific Northwest. Unrivaled service and the freshest ingredients for an exquisite experience.",
  location: "Oregon & Washington",
  website: "https://www.topitoffbartending.com",
  image: "/vendor-images/top-it-off-bartending.jpg"
}, {
  name: "Headshot Portland",
  category: "headshot-photography",
  description: "Portland's top-rated headshot and portrait photography studio. Professional, polished, and priced right—trusted by Portland's leading companies and professionals.",
  location: "Portland, OR",
  website: "https://www.headshotportland.com",
  image: "/vendor-images/headshot-portland.webp"
}];
const getCategoryLabel = (category: Exclude<VendorCategory, "all">) => {
  return categories.find(c => c.value === category)?.label || category;
};
const Vendors = () => {
  const [selectedCategory, setSelectedCategory] = useState<VendorCategory>("all");
  const filteredVendors = selectedCategory === "all" ? vendors : vendors.filter(vendor => vendor.category === selectedCategory);
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <a href="/" className="inline-block hover:opacity-80 transition-opacity">
            <img src={perfectBoothLogo} alt="Perfect Booth Photo Booth Rentals" className="h-12" />
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
            {categories.map(category => <Button key={category.value} variant={selectedCategory === category.value ? "default" : "outline"} size="sm" onClick={() => setSelectedCategory(category.value)} className="transition-all">
                {category.label}
              </Button>)}
          </div>
        </div>

        {/* Vendor Count */}
        <p className="text-center text-muted-foreground mb-8">
          Showing {filteredVendors.length} vendor{filteredVendors.length !== 1 ? "s" : ""}
          {selectedCategory !== "all" && ` in ${getCategoryLabel(selectedCategory as Exclude<VendorCategory, "all">)}`}
        </p>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map((vendor, index) => <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden group">
              {vendor.image && <div className="h-48 overflow-hidden">
                  <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>}
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
                  <a href={vendor.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>)}
        </div>

        {/* Empty State */}
        {filteredVendors.length === 0 && <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">No vendors found in this category.</p>
            <Button variant="outline" className="mt-4" onClick={() => setSelectedCategory("all")}>
              View All Vendors
            </Button>
          </div>}

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
            
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8 bg-background">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Perfect Booth Photo Booth Rentals. All rights reserved.</p>
        </div>
      </footer>
    </div>;
};
export default Vendors;