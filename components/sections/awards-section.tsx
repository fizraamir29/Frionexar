import { Award, Trophy, Star, Medal } from "lucide-react";

const awards = [
  {
    icon: Trophy,
    title: "Top Software Development Company",
    organization: "Clutch",
    year: "2025",
  },
  {
    icon: Award,
    title: "Best Mobile App Development",
    organization: "GoodFirms",
    year: "2024",
  },
  {
    icon: Star,
    title: "Excellence in AI Solutions",
    organization: "AI Excellence Awards",
    year: "2024",
  },
  {
    icon: Medal,
    title: "Top Web Development Agency",
    organization: "DesignRush",
    year: "2025",
  },
  {
    icon: Trophy,
    title: "Best Tech Innovation",
    organization: "TechAwards",
    year: "2024",
  },
  {
    icon: Award,
    title: "Customer Choice Award",
    organization: "AppFutura",
    year: "2024",
  },
];

export function AwardsSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Our awards and <span className="text-accent">recognitions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {"Our dedication to excellence has earned us numerous accolades from industry leaders worldwide."}
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-muted/50 rounded-2xl hover:bg-muted transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{award.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {award.organization} • {award.year}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
