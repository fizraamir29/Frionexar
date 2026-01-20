import Image from "next/image";
import { Play } from "lucide-react";

const highlights = [
  {
    title: "Meet Our Leadership Team",
    description: "Get to know the visionaries behind Frionexar and their commitment to innovation.",
    image: "/images/team-member.jpg",
    hasVideo: true,
  },
  {
    title: "Our Office Culture",
    description: "Discover the collaborative and creative environment that drives our success.",
    image: "/images/journey-3.jpg",
    hasVideo: false,
  },
  {
    title: "Tech Talks & Insights",
    description: "Explore our latest discussions on emerging technologies and industry trends.",
    image: "/images/blog-2.jpg",
    hasVideo: true,
  },
];

export function HighlightsSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="text-accent">highlights</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Take a closer look at what makes Frionexar special - our people, culture, and innovations.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.hasVideo && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 text-accent-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
