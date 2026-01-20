"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const clientLogos = [
  "Canon", "Aon", "Samsung", "Sapient", "Gillette"
];

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart",
    image: "/images/team-member.jpg",
    rating: 5,
    text: "Frionexar managed to achieve our vision perfectly. They understood our requirements and transformed it into a stunning application. The team's professionalism and technical expertise exceeded our expectations. Highly recommended for any software development needs.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, InnovateCorp",
    company: "InnovateCorp",
    image: "/images/blog-2.jpg",
    rating: 5,
    text: "Working with Frionexar was an absolute pleasure. They not only delivered a high-quality product but also provided valuable insights throughout the development process. Their agile approach and transparent communication made the entire journey smooth.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager, AppVentures",
    company: "AppVentures",
    image: "/images/team-member.jpg",
    rating: 5,
    text: "Frionexar consistently builds that feel innovative and user-centric. The team is skilled, efficient and always goes the extra mile. They've been instrumental in building our product. Would work with them again in a heartbeat!",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our clients simply <span className="text-accent">love</span> what we do
          </h2>
        </div>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {clientLogos.map((logo) => (
            <div
              key={logo}
              className="text-2xl font-bold text-muted-foreground/50"
            >
              {logo}
            </div>
          ))}
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-muted/50 rounded-3xl p-8 lg:p-12 relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-accent/20" />
            
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Author Image */}
              <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden shrink-0">
                <Image
                  src={current.image || "/placeholder.svg"}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-lg lg:text-xl mb-6 leading-relaxed">
                  {`"${current.text}"`}
                </p>

                <div>
                  <div className="font-semibold text-lg">{current.name}</div>
                  <div className="text-muted-foreground">{current.role}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-end gap-2 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center hover:bg-accent/90 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
