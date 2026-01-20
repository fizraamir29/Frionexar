import {
  Car,
  Building2,
  GraduationCap,
  Heart,
  Plane,
  ShoppingCart,
  Factory,
  Landmark,
  Gamepad2,
  Home,
} from "lucide-react";

const industries = [
  { name: "Automotive", icon: Car },
  { name: "Finance", icon: Landmark },
  { name: "Healthcare", icon: Heart },
  { name: "Real Estate", icon: Home },
  { name: "Hospitality", icon: Building2 },
  { name: "Education", icon: GraduationCap },
  { name: "Travel", icon: Plane },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Manufacturing", icon: Factory },
  { name: "Gaming", icon: Gamepad2 },
];

export function IndustriesSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Industries we serve
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We deliver tailored software solutions across diverse industries, driving innovation and growth.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.name}
                className="flex flex-col items-center justify-center p-6 bg-background rounded-2xl border border-border hover:border-accent hover:shadow-md transition-all group"
              >
                <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-3 group-hover:bg-accent/10 transition-colors">
                  <Icon className="w-7 h-7 text-foreground group-hover:text-accent transition-colors" />
                </div>
                <span className="font-medium text-sm text-center">{industry.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
