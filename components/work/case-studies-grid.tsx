import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    logo: "GolfPro",
    title: "AR-Powered Golf Training App for Improving Skills",
    description:
      "Gain an AR-powered golf training app that helps players improve their skills and performance.",
    image: "/images/work-golf-app.jpg",
    category: "Mobile App",
    tags: ["AR", "Sports", "Training"],
  },
  {
    id: 2,
    logo: "DEW",
    title: "Blockchain-Based Dominoes Mobile Gaming App",
    description:
      "Domino Earning World (DEW) is a blockchain-based mobile game where users can play dominoes and earn real rewards.",
    image: "/images/work-dominoes.jpg",
    category: "Game Development",
    tags: ["Blockchain", "Gaming", "Mobile"],
  },
  {
    id: 3,
    logo: "Harof",
    title: "Global E-Learning App Bridging Learners & Tutors",
    description:
      "Harof is an online learning platform that brings together talented online tutors and multilingual learners.",
    image: "/images/project-harof.jpg",
    category: "Education",
    tags: ["E-Learning", "Education", "Mobile"],
  },
  {
    id: 4,
    logo: "CheerStar",
    title: "The First Realistic All-Star Cheerleading Game",
    description:
      "This is the first in the World is a cheerleading game where you play as the coach of an All-Star team of cheerleaders.",
    image: "/images/work-cheerleading.jpg",
    category: "Game Development",
    tags: ["Sports", "Simulation", "3D"],
  },
  {
    id: 5,
    logo: "SOS",
    logoSubtext: "Live Safety",
    title: "Emergency Response & Safety Awareness Mobile App",
    description:
      "SOS Live Safety is a mobile app that translates complex safety procedures into easy-to-follow guides for faster emergency response.",
    image: "/images/work-safety-app.jpg",
    category: "Healthcare",
    tags: ["Safety", "Emergency", "Mobile"],
  },
  {
    id: 6,
    logo: "حروف",
    title: "Quran E-learning App With Monotheist Translation",
    description:
      "This Quran app focuses on providing an intuitive learning experience, enabling users to access the authentic translation of verses.",
    image: "/images/work-quran-app.jpg",
    category: "Education",
    tags: ["E-Learning", "Religious", "Translation"],
  },
  {
    id: 7,
    logo: "goobr",
    title: "Social Networking & Marketplace App for Pet Owners",
    description:
      "Goobr is a trailblazing social networking app and marketplace dedicated to pets and their owners.",
    image: "/images/work-pet-app.jpg",
    category: "Social",
    tags: ["Social Network", "Marketplace", "Pets"],
  },
  {
    id: 8,
    logo: "HFL",
    title: "Pre-Sales Token Purchasing Web App",
    description:
      "HFL games is a platform where players can engage in P2E games and buy/sell HFL tokens.",
    image: "/images/work-hfl-app.jpg",
    category: "Blockchain",
    tags: ["Web3", "Token", "Crypto"],
  },
];

export function CaseStudiesGrid() {
  return (
    <section className="pb-16 lg:pb-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {caseStudies.map((study) => (
            <Link
              href="#"
              key={study.id}
              className="group block"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-muted">
                <Image
                  src={study.image || "/placeholder.svg"}
                  alt={study.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 bg-[text-accent] text-white text-xs font-medium rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div>
                {/* Logo */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-foreground/80">
                    {study.logo}
                  </span>
                  {study.logoSubtext && (
                    <span className="text-sm text-foreground/60">
                      {study.logoSubtext}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {study.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/60 text-sm leading-relaxed mb-4">
                  {study.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-xs font-medium rounded-full text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}
