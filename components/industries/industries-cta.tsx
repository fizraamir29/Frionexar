import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function IndustriesCTA() {
  return (
    <section className="py-16 lg:py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-accent text-sm font-medium mb-4">Pull the Trigger!</p>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
          Let&apos;s bring your
          <br />
          vision to life
        </h2>

        <Button className="rounded-full bg-[text-accent] text-white hover:bg-[text-accent]/90 px-8 py-6 text-base gap-2">
          Get Started
          <ArrowRight size={18} />
        </Button>
      </div>
    </section>
  );
}
