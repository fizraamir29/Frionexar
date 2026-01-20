"use client";

import { useState } from "react";

const categories = [
  "All",
  "Front-End",
  "Back-End",
  "Mobile",
  "Cloud",
  "AI/ML",
  "Database",
];

const technologies = [
  { name: "React", category: "Front-End" },
  { name: "Vue.js", category: "Front-End" },
  { name: "Angular", category: "Front-End" },
  { name: "Next.js", category: "Front-End" },
  { name: "TypeScript", category: "Front-End" },
  { name: "Node.js", category: "Back-End" },
  { name: "Python", category: "Back-End" },
  { name: "Java", category: "Back-End" },
  { name: ".NET", category: "Back-End" },
  { name: "Go", category: "Back-End" },
  { name: "Swift", category: "Mobile" },
  { name: "Kotlin", category: "Mobile" },
  { name: "Flutter", category: "Mobile" },
  { name: "React Native", category: "Mobile" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Docker", category: "Cloud" },
  { name: "Kubernetes", category: "Cloud" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "OpenAI", category: "AI/ML" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
];

export function TechnologiesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  return (
    <section className="py-16 lg:py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technologies we use
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build scalable, secure, and innovative solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "bg-background/10 text-background hover:bg-background/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {filteredTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center p-4 bg-background/5 rounded-xl hover:bg-background/10 transition-colors"
            >
              <div className="w-12 h-12 bg-background/10 rounded-lg flex items-center justify-center mb-2">
                <span className="text-xs font-bold">{tech.name.slice(0, 2)}</span>
              </div>
              <span className="text-xs text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
