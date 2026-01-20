"use client";

import { useState } from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

const categories = [
  "Food",
  "E-Commerce",
  "Automotive",
  "Marketplace",
  "Education",
  "Finance",
  "Graphic Engine",
];

const projects = [
  {
    id: 1,
    name: "Today Today",
    description: "Organic Food Delivery App Focused on Freshness",
    category: "United Kingdom | App",
    image: "/images/project-today.jpg",
    tags: ["Food", "Delivery"],
  },
  {
    id: 2,
    name: "Autoconnect",
    description: "Automotive Marketplace for Buyers & Sellers",
    category: "Automotive | App",
    image: "/images/project-autoconnect.jpg",
    tags: ["Automotive", "Marketplace"],
  },
  {
    id: 3,
    name: "Harof",
    description: "Global E-Learning App Bridging Learners & Tutors",
    category: "Saudi Arabia | App",
    image: "/images/project-harof.jpg",
    tags: ["Education", "E-Learning"],
  },
];

export function WorkProjectMap() {
  const [activeCategory, setActiveCategory] = useState("Food");

  return (
    <section className="py-16 lg:py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold">
            <span className="text-white">Real-time</span>{" "}
            <span className="text-accent">project map</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-[text-accent] text-white"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
            >
              {activeCategory === category && <Check size={14} />}
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project List */}
          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-white mb-1 group-hover:text-accent transition-colors">
                        {project.name}
                      </h4>
                      <p className="text-sm text-white/60 mb-2">
                        {project.description}
                      </p>
                      <span className="text-xs text-white/40">
                        {project.category}
                      </span>
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-accent opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="relative rounded-2xl overflow-hidden bg-white/5 min-h-[400px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[text-accent]/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 rounded-full bg-[text-accent]" />
                </div>
                <p className="text-white/60 text-sm">Interactive Project Map</p>
              </div>
            </div>
            {/* Decorative dots */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-[text-accent] animate-pulse" />
            <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-[text-accent]/60 animate-pulse delay-100" />
            <div className="absolute bottom-1/4 left-1/2 w-3 h-3 rounded-full bg-[text-accent] animate-pulse delay-200" />
            <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-[text-accent]/60 animate-pulse delay-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
