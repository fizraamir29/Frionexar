import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    "Mobile App Development",
    "Web Development",
    "AI Solutions",
    "Game Development",
    "Cloud Services",
    "UI/UX Design",
  ],
  company: [
    "About Us",
    "Careers",
    "Portfolio",
    "Blog",
    "Contact",
    "Press",
  ],
  industries: [
    "Healthcare",
    "Finance",
    "Education",
    "E-commerce",
    "Real Estate",
    "Gaming",
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {"Let's"} bring your
              <br />
              <span className="text-accent">idea to life</span>
            </h2>
            <p className="text-background/70 text-lg mb-8 max-w-xl">
              Ready to transform your business with innovative software solutions? Get in touch with our team today.
            </p>
            <Button
              size="lg"
              className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/logo_frionexar.png"  
                alt="Frionexar Logo"
                className="h-40 w-auto"  
              />
            </Link>

            <p className="text-background/70 mb-6 max-w-sm">
              Award-winning software development company delivering innovative solutions across mobile, web, AI, and gaming.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-background/70">
                <Mail size={16} className="text-accent" />
                <span>info@frionexar.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <Phone size={16} className="text-accent" />
                <span>+92 3183919074</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-background/70">
                <MapPin size={16} className="text-accent" />
                <span>Karachi, PK | Dubai, UAE | New York, USA</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-sm text-background/70 hover:text-accent transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-background/10">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Frionexar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-background/50 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-background/50 hover:text-background transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-background/50 hover:text-background transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
