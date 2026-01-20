import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.jpg"
          alt="Team collaboration"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center text-background">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Create next-level software development{" "}
            <span className="text-accent">level with us</span>
          </h2>
          <p className="text-background/80 text-lg mb-8">
            {"Let's collaborate to turn your vision into reality with our expert software development services."}
          </p>
          <Button
            size="lg"
            className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
          >
            {"Let's Talk"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
