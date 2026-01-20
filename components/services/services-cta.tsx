import { Button } from "@/components/ui/button";

export function ServicesCTA() {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4 text-center">
        <p className="text-accent text-sm font-medium mb-4">
          Pull the Trigger!
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Let's bring your
          <br />
          vision to life
        </h2>
        <Button
          size="lg"
          className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8"
        >
          Get Started
        </Button>
      </div>
    </section>
  );
}
