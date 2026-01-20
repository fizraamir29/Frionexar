import { Button } from "@/components/ui/button";

export function WorkCta() {
  return (
    <section className="py-20 lg:py-32 bg-[#0a0a0a] text-white text-center">
      <div className="container mx-auto px-4">
        <p className="text-accent text-sm font-medium mb-4">Pull the Trigger!</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">
          Let&apos;s bring your
          <br />
          vision to life
        </h2>
        <Button className="bg-[text-accent] text-white hover:bg-[text-accent]/90 rounded-full px-8 py-6 text-base font-medium">
          Get Started
        </Button>
      </div>
    </section>
  );
}
