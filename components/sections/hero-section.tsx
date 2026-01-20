import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const tags = ["AI Solutions", "Digital Transformation", "Cloud Services", "Mobile Apps", "Web Apps", "Games"];

  return (
    <section className="relative bg-background py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Award-winning Software Development</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              We are a{" "}
              <span className="text-accent">Software</span>
              <br />
              <span className="text-accent">Development</span>
              <br />
              Company
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              {"We're a global team of expert software engineers that specialize in providing services including artificial intelligence, games, mobile apps and enterprise web software."}
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-foreground text-background rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                Let{"'"}s Talk
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <Image
                src="/images/hero-phones.jpg"
                alt="Mobile app development showcase"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
