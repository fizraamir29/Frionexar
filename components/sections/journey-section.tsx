import Image from "next/image";

const stats = [
  { value: "350+", label: "Global Clients" },
  { value: "250+", label: "Team Members" },
  { value: "3500+", label: "Projects Delivered" },
  { value: "430+", label: "5-Star Reviews" },
];

const images = [
  "/images/journey-1.jpg",
  "/images/journey-2.jpg",
  "/images/journey-3.jpg",
  "/images/journey-4.jpg",
];

export function JourneySection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Journey image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Our journey of building success
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Since our inception, Frionexar has been at the forefront of digital innovation. We transform complex challenges into elegant solutions, helping businesses worldwide achieve their technology goals. Our commitment to excellence has earned us recognition as a leading software development partner.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
