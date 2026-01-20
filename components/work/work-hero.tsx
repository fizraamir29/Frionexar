"use client";

import { ChevronDown } from "lucide-react";

export function WorkHero() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-foreground/60 max-w-xl">
            See how Frionexar has helped its clients achieve their vision of digital innovation.
          </p>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl">
          {/* Services Filter */}
          <div className="relative">
            <label className="text-xs text-foreground/50 mb-1 block">Services</label>
            <button className="w-full flex items-center justify-between px-4 py-3 bg-background border border-border rounded-lg text-sm font-medium">
              <span>All Services</span>
              <ChevronDown size={16} className="text-foreground/50" />
            </button>
          </div>

          {/* Categories Filter */}
          <div className="relative">
            <label className="text-xs text-foreground/50 mb-1 block">Categories</label>
            <button className="w-full flex items-center justify-between px-4 py-3 bg-background border border-border rounded-lg text-sm font-medium">
              <span>All Categories</span>
              <ChevronDown size={16} className="text-foreground/50" />
            </button>
          </div>

          {/* Technologies Filter */}
          <div className="relative">
            <label className="text-xs text-foreground/50 mb-1 block">Technologies</label>
            <button className="w-full flex items-center justify-between px-4 py-3 bg-background border border-border rounded-lg text-sm font-medium">
              <span>All Technologies</span>
              <ChevronDown size={16} className="text-foreground/50" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
