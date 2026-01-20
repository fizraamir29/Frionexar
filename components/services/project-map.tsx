"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  "Travel",
  "E-Commerce",
  "AI",
  "Automotive",
  "Marketplace",
  "Education",
  "Finance",
  "Crypto/Blockchain",
];

const projects = [
  {
    id: 1,
    title: "Today Today",
    subtitle: "Organic Food Delivery App Foodtech",
    category: "Foodtech",
    image: "/images/project-today.jpg",
    tags: ["iOS", "Android"],
  },
  {
    id: 2,
    title: "Autoconnect",
    subtitle: "Automotive Marketplace for Buyers & Sellers",
    category: "Automotive",
    image: "/images/project-autoconnect.jpg",
    tags: ["Automotive App"],
  },
  {
    id: 3,
    title: "Harof",
    subtitle: "Global E-Learning App Bringing Learners & Tutors",
    category: "Education",
    image: "/images/project-harof.jpg",
    tags: ["EdTech App"],
  },
];

export function ProjectMap() {
  const [activeCategory, setActiveCategory] = useState("Travel");

  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
          <div>
            <span className="text-accent text-sm font-medium mb-2 block">
              Real-time
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">project map</h2>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-background/10 text-background/80 hover:bg-background/20"
              }`}
            >
              {category}
            </button>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-background/30 text-background bg-transparent hover:bg-background/10"
          >
            Explore all
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-background/5 rounded-2xl p-6 hover:bg-background/10 transition-colors group"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex gap-2 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-background/60 text-sm">{project.subtitle}</p>
              <button className="mt-4 flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                View case study
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
