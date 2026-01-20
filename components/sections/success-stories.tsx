import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Meveto: Revolutionizing User Authentication",
    description: "Frionexar reimagined authentication by building a secure passwordless login system leveraging biometrics.",
    image: "/images/project-meveto.jpg",
    category: "Security",
  },
  {
    id: 2,
    title: "Glovo: Worldwide on-Demand Taxis Delivery",
    description: "Frionexar created a robust on-demand delivery platform serving millions worldwide.",
    image: "/images/project-glovo.jpg",
    category: "On-Demand",
  },
  {
    id: 3,
    title: "FunnGro: Gamified Learning for Teens Allows Earning",
    description: "A gamified fintech app that helps teens learn financial skills while earning rewards.",
    image: "/images/project-funngro.jpg",
    category: "Fintech",
  },
  {
    id: 4,
    title: "TMNT: Official Game - Shredder Bros",
    description: "An action-packed mobile game featuring the iconic Teenage Mutant Ninja Turtles characters.",
    image: "/images/project-tmnt.jpg",
    category: "Gaming",
  },
  {
    id: 5,
    title: "CV-Library: Job Search Made Easy",
    description: "A comprehensive job search platform connecting candidates with employers seamlessly.",
    image: "/images/project-cv-library.jpg",
    category: "Recruitment",
  },
  {
    id: 6,
    title: "My House Smart: Home Automation App",
    description: "Smart home control app for managing energy, security, and automation systems.",
    image: "/images/project-green-app.jpg",
    category: "IoT",
  },
];

export function SuccessStories() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-xs">C</span>
          </div>
          <span className="text-sm font-medium text-muted-foreground">PORTFOLIO</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our success stories
          </h2>
          <button className="flex items-center gap-2 text-accent font-medium hover:underline">
            View All Projects
            <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
