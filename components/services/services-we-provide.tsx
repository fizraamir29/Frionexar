"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Customized Software Development",
    description:
      "Custom-led software development delivers tailored solutions to meet specific business needs, enhancing efficiency, productivity, and competitive advantage.",
    isHighlighted: true,
  },
  {
    id: 2,
    title: "Audit and Consulting",
    description:
      "Comprehensive audit and consulting services to evaluate your existing systems, identify improvements, and provide strategic recommendations for digital transformation.",
  },
  {
    id: 3,
    title: "Delivery",
    description:
      "End-to-end delivery services ensuring your software projects are completed on time, within budget, and meeting all quality standards.",
  },
  {
    id: 4,
    title: "Support and Maintenance",
    description:
      "Ongoing support and maintenance services to keep your software running smoothly, with regular updates, bug fixes, and performance optimization.",
  },
];

export function ServicesWeProvide() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Services we provide
        </h2>

        <div className="max-w-4xl">
          {services.map((service) => (
            <div key={service.id} className="border-b border-border">
              <button
                onClick={() => toggleExpand(service.id)}
                className="w-full py-6 flex items-start justify-between gap-4 text-left group"
              >
                <div className="flex-1">
                  <h3
                    className={`text-xl md:text-2xl font-semibold transition-colors ${
                      expandedId === service.id
                        ? "text-accent"
                        : "text-foreground group-hover:text-foreground/80"
                    }`}
                  >
                    {service.title}
                  </h3>
                  {expandedId === service.id && (
                    <p className="mt-4 text-foreground/70 leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  )}
                </div>
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    expandedId === service.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-foreground"
                  }`}
                >
                  {expandedId === service.id ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
