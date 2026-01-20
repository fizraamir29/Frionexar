import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Customized Solution",
    description:
      "We deliver customized solutions tailored to meet clients' unique needs, ensuring innovation-led value creation for optimal-driven transformation.",
  },
  {
    title: "Technical Expertise",
    description:
      "Frionexar provides technical expertise with cutting-edge technologies, robust frameworks, and seamless digital transformation for business growth.",
  },
  {
    title: "Cross-Platform Compatibility",
    description:
      "We offer cross-platform compatibility to clients with seamless functionality whether you're using web, mobile, or desktop applications.",
  },
  {
    title: "Support and Maintenance",
    description:
      "We provide continued support of unmatched support for bugs, performance optimizations and scalability upgrades.",
  },
  {
    title: "Data Security Solutions",
    description:
      "We build secure software following leading security standards and robust protocols to ensure data integrity.",
  },
  {
    title: "Scalable Solutions",
    description:
      "We develop applications and systems for growing load and data, handling growing and scalable business requirements.",
  },
];

export function WhyChooseFrionexar() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Why choose Frionexar?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Images Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/guarantee-quality.jpg"
              alt="Team collaboration"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/guarantee-realestate.jpg"
              alt="Software development"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/images/guarantee-partnership.jpg"
              alt="Partnership"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="bg-[text-accent] rounded-2xl p-8 flex items-center justify-between">
          <h3 className="text-white text-xl md:text-2xl font-semibold">
            Choose our expert for <span className="italic">innovative</span> software solutions
          </h3>
          <Button
            variant="outline"
            className="rounded-full bg-transparent border-white text-white hover:bg-white hover:text-accent gap-2"
          >
            Let&apos;s talk
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
