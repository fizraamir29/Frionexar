"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const industries = [
  {
    id: 1,
    name: "Automotive",
    image: "/images/industry-automotive.jpg",
  },
  {
    id: 2,
    name: "E-commerce",
    image: "/images/industry-ecommerce.jpg",
  },
  {
    id: 3,
    name: "Healthcare",
    image: "/images/industry-healthcare.jpg",
  },
];

export function TrustedIndustries() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by leading industries
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            Take a look at our success stories with clients where we helped them
            development to delivery.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              onMouseEnter={() => setHoveredCard(industry.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Image
                src={industry.image || "/placeholder.svg"}
                alt={industry.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-xl font-semibold">
                    {industry.name}
                  </h3>
                  <div
                    className={`w-10 h-10 rounded-full bg-[text-accent] flex items-center justify-center transition-transform duration-300 ${
                      hoveredCard === industry.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                    }`}
                  >
                    <ArrowRight size={20} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
