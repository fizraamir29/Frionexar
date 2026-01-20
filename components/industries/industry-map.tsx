"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  "React",
  "E-Commerce",
  "AI Assistants",
  "Marketplaces",
  "Education",
  "Fintech",
  "Digital Media",
];

const projects = [
  {
    id: 1,
    name: "Today Today",
    description: "Organic Food Delivery App Focused on Freshness",
    category: "E-Commerce",
    image: "/images/project-today.jpg",
    tags: ["E-Commerce", "React"],
  },
  {
    id: 2,
    name: "Autoconnect",
    description: "Automotive Marketplace for Buyers & Sellers",
    category: "Marketplaces",
    image: "/images/project-autoconnect.jpg",
    tags: ["Marketplaces", "App"],
  },
  {
    id: 3,
    name: "Harof",
    description: "Unlock Learning App Bridging Learners & Tutors",
    category: "Education",
    image: "/images/project-harof.jpg",
    tags: ["Education", "Mobile"],
  },
];

export function IndustryMap() {
  const [activeCategory, setActiveCategory] = useState("React");

  return (
    <section className="py-16 lg:py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-accent text-sm font-medium mb-2">PORTFOLIO</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-accent">Real-time</span> industry map
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[text-accent] text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center gap-6 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Project Info */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {project.name}
                </h3>
                <p className="text-white/60 text-sm mb-2">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-[text-accent]/20 text-accent text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <ArrowRight
                size={20}
                className="text-white/40 group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
